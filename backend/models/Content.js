const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  businessType: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  targetAudience: {
    type: String,
    trim: true
  },
  contentType: {
    type: String,
    enum: ['post', 'caption', 'video', 'story'],
    default: 'post'
  },
  platform: {
    type: String,
    enum: ['instagram', 'facebook', 'twitter', 'youtube'],
    default: 'instagram'
  },
  tone: {
    type: String,
    enum: ['professional', 'casual', 'friendly', 'humorous'],
    default: 'professional'
  },
  keywords: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  generatedText: {
    type: String,
    required: true
  },
  hashtags: [{
    type: String,
    trim: true
  }],
  estimatedEngagement: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date
  },
  engagement: {
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    reach: { type: Number, default: 0 }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Content', contentSchema);
