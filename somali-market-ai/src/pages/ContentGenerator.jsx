import { useState } from 'react'
import { 
  Sparkles, 
  Copy, 
  Download, 
  Share2, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Loader2,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import { contentAPI } from '../services/api'

const ContentGenerator = () => {
  const [formData, setFormData] = useState({
    businessType: '',
    industry: '',
    targetAudience: '',
    contentType: 'post',
    platform: 'instagram',
    tone: 'professional',
    keywords: '',
    description: ''
  })

  const [generatedContent, setGeneratedContent] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const businessTypes = [
    'Coffee Shop',
    'Restaurant',
    'Boutique',
    'Clinic',
    'Tech Startup',
    'Consulting',
    'Education',
    'Other'
  ]

  const industries = [
    'Food & Beverage',
    'Fashion & Beauty',
    'Healthcare',
    'Technology',
    'Education',
    'Real Estate',
    'Finance',
    'Entertainment',
    'Other'
  ]

  const contentTypes = [
    { value: 'post', label: 'Social Media Post' },
    { value: 'caption', label: 'Image Caption' },
    { value: 'video', label: 'Video Script' },
    { value: 'story', label: 'Story Content' }
  ]

  const platforms = [
    { value: 'instagram', label: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
    { value: 'facebook', label: 'Facebook', icon: <Facebook className="w-5 h-5" /> },
    { value: 'twitter', label: 'Twitter', icon: <Twitter className="w-5 h-5" /> },
    { value: 'youtube', label: 'YouTube', icon: <Youtube className="w-5 h-5" /> }
  ]

  const tones = [
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual' },
    { value: 'friendly', label: 'Friendly' },
    { value: 'humorous', label: 'Humorous' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const generateContent = async () => {
    setIsGenerating(true)
    setError('')
    setSuccess('')
    
    try {
      const response = await contentAPI.generate(formData)
      setGeneratedContent(response.data.content)
      setSuccess('Content generated successfully!')
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to generate content')
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setSuccess('Copied to clipboard!')
    setTimeout(() => setSuccess(''), 2000)
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">AI Content Generator</h1>
          <p className="text-gray-400">Create culturally relevant content for Somali audiences</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-400 text-sm">{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 text-sm">{success}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="card">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Content Settings</h2>
            </div>

            <form className="space-y-6">
              {/* Business Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Business Type
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select business type</option>
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              {/* Target Audience */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Target Audience
                </label>
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  placeholder="e.g., Young professionals, Students, Families"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Content Type and Platform */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Content Type
                  </label>
                  <select
                    name="contentType"
                    value={formData.contentType}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {contentTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Platform
                  </label>
                  <select
                    name="platform"
                    value={formData.platform}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {platforms.map(platform => (
                      <option key={platform.value} value={platform.value}>{platform.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tone
                </label>
                <select
                  name="tone"
                  value={formData.tone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {tones.map(tone => (
                    <option key={tone.value} value={tone.value}>{tone.label}</option>
                  ))}
                </select>
              </div>

              {/* Keywords */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Keywords (optional)
                </label>
                <input
                  type="text"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  placeholder="e.g., fresh, quality, affordable"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Describe what you want to promote or share..."
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Generate Button */}
              <button
                type="button"
                onClick={generateContent}
                disabled={isGenerating || !formData.businessType || !formData.industry}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating Content...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Content
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Generated Content Section */}
          <div className="card">
            <div className="flex items-center space-x-2 mb-6">
              <Share2 className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Generated Content</h2>
            </div>

            {generatedContent ? (
              <div className="space-y-6">
                {/* Platform Badge */}
                <div className="flex items-center space-x-2">
                  {platforms.find(p => p.value === generatedContent.platform)?.icon}
                  <span className="text-white font-medium">
                    {platforms.find(p => p.value === generatedContent.platform)?.label}
                  </span>
                  <span className="text-gray-400 text-sm">
                    • Est. {generatedContent.estimatedEngagement} engagement
                  </span>
                </div>

                {/* Content Text */}
                <div className="bg-gray-800/30 rounded-lg p-4">
                  <p className="text-white leading-relaxed whitespace-pre-wrap">
                    {generatedContent.text}
                  </p>
                </div>

                {/* Hashtags */}
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Suggested Hashtags</h4>
                  <div className="flex flex-wrap gap-2">
                    {generatedContent.hashtags.map((hashtag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {hashtag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => copyToClipboard(generatedContent.text)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="text-white text-sm">Copy Text</span>
                  </button>
                  <button
                    onClick={() => copyToClipboard(generatedContent.hashtags.join(' '))}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="text-white text-sm">Copy Hashtags</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="text-white text-sm">Download</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Sparkles className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">
                  Fill out the form and click "Generate Content" to create your first post
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentGenerator
