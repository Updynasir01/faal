const express = require('express');
const Content = require('../models/Content');
const router = express.Router();

// Middleware to extract user ID from token (simplified)
const authMiddleware = (req, res, next) => {
  // In a real app, you'd verify JWT token here
  // For now, we'll use a header or query param
  const userId = req.headers['user-id'] || req.query.userId;
  if (!userId) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  req.userId = userId;
  next();
};

// Generate content
router.post('/generate', authMiddleware, async (req, res) => {
  try {
    const {
      businessType,
      industry,
      targetAudience,
      contentType,
      platform,
      tone,
      keywords,
      description
    } = req.body;

    // AI-like content generation (mock implementation)
    const somaliPhrases = [
      'Waxaan ku soo bandhignay',
      'Maanta waxaan ku soo bandhignay',
      'Cusub oo aad ka heli doontaan',
      'Waxaan ku soo bandhignay cusub',
      'Ka soo qaad',
      'Ka hel',
      'Ku soo biir'
    ];

    const businessPhrases = {
      'Coffee Shop': ['shaah cusub', 'qahwa', 'kafe'],
      'Restaurant': ['cunto cusub', 'maqayal', 'shaah'],
      'Boutique': ['dhar cusub', 'fashion', 'style'],
      'Clinic': ['caafimaad', 'daryeel', 'healthcare'],
      'Tech Startup': ['technology cusub', 'app', 'software']
    };

    const industryPhrases = {
      'Food & Beverage': ['cunto', 'shaah', 'qahwa'],
      'Fashion & Beauty': ['fashion', 'beauty', 'style'],
      'Healthcare': ['caafimaad', 'health', 'wellness'],
      'Technology': ['technology', 'tech', 'digital']
    };

    const tonePhrases = {
      'professional': ['Professional ahaan', 'Si professional ah'],
      'casual': ['Si fudud', 'Casual ahaan'],
      'friendly': ['Si saaxiibtinimo ah', 'Friendly ahaan'],
      'humorous': ['Si madadaalo ah', 'Funny ahaan']
    };

    // Generate content based on parameters
    const phrase = somaliPhrases[Math.floor(Math.random() * somaliPhrases.length)];
    const businessPhrase = businessPhrases[businessType] ? 
      businessPhrases[businessType][Math.floor(Math.random() * businessPhrases[businessType].length)] : 
      businessType.toLowerCase();
    const industryPhrase = industryPhrases[industry] ? 
      industryPhrases[industry][Math.floor(Math.random() * industryPhrases[industry].length)] : 
      industry.toLowerCase();
    const tonePhrase = tonePhrases[tone] ? 
      tonePhrases[tone][Math.floor(Math.random() * tonePhrases[tone].length)] : '';

    const generatedText = `${phrase} ${businessPhrase} cusub oo aad ka heli doontaan ${industryPhrase} ahaan. ${description || ''} ${tonePhrase}`;

    // Generate hashtags
    const hashtags = [
      '#SomaliBusiness',
      '#Mogadishu',
      '#Somalia',
      `#${businessType.replace(/\s+/g, '')}`,
      `#${industry.replace(/\s+/g, '')}`,
      ...(keywords ? keywords.split(',').map(k => `#${k.trim()}`) : [])
    ];

    // Estimate engagement
    const estimatedEngagement = Math.floor(Math.random() * 500) + 100;

    // Save to database
    const content = new Content({
      userId: req.userId,
      businessType,
      industry,
      targetAudience,
      contentType,
      platform,
      tone,
      keywords,
      description,
      generatedText,
      hashtags,
      estimatedEngagement
    });

    await content.save();

    res.json({
      success: true,
      content: {
        text: generatedText,
        hashtags,
        platform,
        estimatedEngagement
      }
    });
  } catch (error) {
    console.error('Content generation error:', error);
    res.status(500).json({ message: 'Error generating content' });
  }
});

// Get user's content
router.get('/user', authMiddleware, async (req, res) => {
  try {
    const content = await Content.find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .limit(20);
    
    res.json(content);
  } catch (error) {
    console.error('Get content error:', error);
    res.status(500).json({ message: 'Error fetching content' });
  }
});

// Get specific content
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const content = await Content.findOne({ 
      _id: req.params.id, 
      userId: req.userId 
    });
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    res.json(content);
  } catch (error) {
    console.error('Get content error:', error);
    res.status(500).json({ message: 'Error fetching content' });
  }
});

module.exports = router;
