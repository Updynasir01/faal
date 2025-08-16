const express = require('express');
const Content = require('../models/Content');
const router = express.Router();

// Middleware to extract user ID from token (simplified)
const authMiddleware = (req, res, next) => {
  const userId = req.headers['user-id'] || req.query.userId;
  if (!userId) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  req.userId = userId;
  next();
};

// Get analytics overview
router.get('/overview', authMiddleware, async (req, res) => {
  try {
    const { timeRange = '30d' } = req.query;
    
    // Calculate date range
    const now = new Date();
    let startDate;
    
    switch (timeRange) {
      case '7d':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case '30d':
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      case '90d':
        startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
        break;
      default:
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    }

    // Get content within date range
    const content = await Content.find({
      userId: req.userId,
      createdAt: { $gte: startDate }
    });

    // Calculate metrics
    const totalPosts = content.length;
    const totalReach = content.reduce((sum, post) => sum + (post.engagement.reach || 0), 0);
    const totalLikes = content.reduce((sum, post) => sum + (post.engagement.likes || 0), 0);
    const totalComments = content.reduce((sum, post) => sum + (post.engagement.comments || 0), 0);
    const totalShares = content.reduce((sum, post) => sum + (post.engagement.shares || 0), 0);

    const engagementRate = totalPosts > 0 ? 
      ((totalLikes + totalComments + totalShares) / totalReach * 100).toFixed(1) : 0;

    // Mock growth percentages
    const growthPercentages = {
      posts: Math.floor(Math.random() * 20) + 5,
      reach: Math.floor(Math.random() * 25) + 8,
      engagement: Math.floor(Math.random() * 15) + 2,
      followers: Math.floor(Math.random() * 30) + 10
    };

    res.json({
      metrics: {
        totalPosts,
        totalReach,
        engagementRate: parseFloat(engagementRate),
        totalLikes,
        totalComments,
        totalShares
      },
      growth: growthPercentages,
      timeRange
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ message: 'Error fetching analytics' });
  }
});

// Get platform performance
router.get('/platforms', authMiddleware, async (req, res) => {
  try {
    const content = await Content.find({ userId: req.userId });
    
    const platformStats = {};
    
    content.forEach(post => {
      if (!platformStats[post.platform]) {
        platformStats[post.platform] = {
          posts: 0,
          totalReach: 0,
          totalLikes: 0,
          totalComments: 0,
          totalShares: 0
        };
      }
      
      platformStats[post.platform].posts++;
      platformStats[post.platform].totalReach += post.engagement.reach || 0;
      platformStats[post.platform].totalLikes += post.engagement.likes || 0;
      platformStats[post.platform].totalComments += post.engagement.comments || 0;
      platformStats[post.platform].totalShares += post.engagement.shares || 0;
    });

    // Calculate engagement rates
    Object.keys(platformStats).forEach(platform => {
      const stats = platformStats[platform];
      stats.engagementRate = stats.totalReach > 0 ? 
        ((stats.totalLikes + stats.totalComments + stats.totalShares) / stats.totalReach * 100).toFixed(1) : 0;
    });

    res.json(platformStats);
  } catch (error) {
    console.error('Platform analytics error:', error);
    res.status(500).json({ message: 'Error fetching platform analytics' });
  }
});

// Get top performing posts
router.get('/top-posts', authMiddleware, async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    
    const topPosts = await Content.find({ userId: req.userId })
      .sort({ 'engagement.likes': -1 })
      .limit(parseInt(limit))
      .select('generatedText platform engagement createdAt');

    res.json(topPosts);
  } catch (error) {
    console.error('Top posts error:', error);
    res.status(500).json({ message: 'Error fetching top posts' });
  }
});

// Get content performance over time
router.get('/performance-timeline', authMiddleware, async (req, res) => {
  try {
    const { days = 30 } = req.query;
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(days));

    const content = await Content.find({
      userId: req.userId,
      createdAt: { $gte: startDate }
    }).sort({ createdAt: 1 });

    // Group by date
    const timeline = {};
    content.forEach(post => {
      const date = post.createdAt.toISOString().split('T')[0];
      if (!timeline[date]) {
        timeline[date] = {
          posts: 0,
          reach: 0,
          likes: 0,
          comments: 0,
          shares: 0
        };
      }
      
      timeline[date].posts++;
      timeline[date].reach += post.engagement.reach || 0;
      timeline[date].likes += post.engagement.likes || 0;
      timeline[date].comments += post.engagement.comments || 0;
      timeline[date].shares += post.engagement.shares || 0;
    });

    res.json(timeline);
  } catch (error) {
    console.error('Timeline error:', error);
    res.status(500).json({ message: 'Error fetching performance timeline' });
  }
});

module.exports = router;
