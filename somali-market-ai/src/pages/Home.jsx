import { Link } from 'react-router-dom'
import { Sparkles, BarChart3, FileText, Users, Zap, Target, Globe, Shield, TrendingUp, Heart, MessageCircle, Share2, Instagram, Facebook, Twitter, Youtube, Eye, Calendar } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Content Generation',
      description: 'Generate culturally relevant social media content tailored for Somali audiences'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Insights',
      description: 'Track performance and get data-driven recommendations for growth'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Multi-Platform Support',
      description: 'Create optimized content for Facebook, Instagram, TikTok, and YouTube'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Cultural Relevance',
      description: 'Content that resonates with Somali culture, trends, and consumer behavior'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Smart Scheduling',
      description: 'Automated posting schedule with optimal timing for maximum engagement'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security to protect your business data and content'
    }
  ]

  const samplePosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Waxaan ku soo bandhignay shaah cusub oo aad ka heli doontaan qahwa ahaan. Ka soo qaad maanta! ☕️ #SomaliCoffee #Mogadishu #Somalia',
      engagement: 1247,
      reach: 8900,
      likes: 892,
      comments: 156,
      shares: 89,
      time: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      platform: 'Facebook',
      content: 'Maanta waxaan ku soo bandhignay cunto cusub oo aad ka heli doontaan restaurant ahaan. Ka hel discount 20%! 🍽️ #SomaliFood #Mogadishu',
      engagement: 892,
      reach: 5600,
      likes: 634,
      comments: 98,
      shares: 45,
      time: '5 hours ago',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      platform: 'TikTok',
      content: 'Video cusub oo ku saabsan fashion cusub! 👗 #SomaliFashion #Style #Trending',
      engagement: 2156,
      reach: 12400,
      likes: 1892,
      comments: 234,
      shares: 167,
      time: '1 day ago',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop'
    }
  ]

  const analyticsData = {
    totalFollowers: '45.2K',
    totalEngagement: '12.8K',
    avgEngagementRate: '4.8%',
    monthlyGrowth: '+15.3%',
    topPerformingPost: {
      platform: 'Instagram',
      engagement: 1247,
      reach: 8900,
      content: 'Waxaan ku soo bandhignay shaah cusub...'
    }
  }

  const teamMembers = [
    {
      name: 'Amina Hassan',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Ahmed Mohamed',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Fatima Ali',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Omar Yusuf',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Hodan Abdi',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Khalid Jama',
      role: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Somali Market{' '}
              <span className="gradient-text">AI Content Generator</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Help small businesses in Somalia grow their social media presence with 
              automated, culturally relevant content and strategy guidance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register" className="btn-primary text-lg px-8 py-4">
              Start Free Trial
            </Link>
            <Link to="/features" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>

          {/* Live Analytics Preview */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Live Performance Preview</h3>
                <p className="text-gray-400">See how our AI-generated content performs</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">{analyticsData.totalFollowers}</div>
                  <div className="text-sm text-gray-400">Total Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{analyticsData.totalEngagement}</div>
                  <div className="text-sm text-gray-400">Total Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{analyticsData.avgEngagementRate}</div>
                  <div className="text-sm text-gray-400">Avg. Engagement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-1">{analyticsData.monthlyGrowth}</div>
                  <div className="text-sm text-gray-400">Monthly Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for{' '}
              <span className="gradient-text">Somali Businesses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create engaging, culturally relevant content that drives growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card group">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Generated Posts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Generated Content That{' '}
              <span className="gradient-text">Engages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real examples of culturally relevant content created by our AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {samplePosts.map((post) => (
              <div key={post.id} className="card group hover:scale-105 transition-transform duration-300">
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {post.platform === 'Instagram' && <Instagram className="w-5 h-5 text-pink-400" />}
                    {post.platform === 'Facebook' && <Facebook className="w-5 h-5 text-blue-400" />}
                    {post.platform === 'TikTok' && <div className="w-5 h-5 bg-black text-white rounded text-xs flex items-center justify-center font-bold">T</div>}
                    <span className="text-white font-medium">{post.platform}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{post.time}</span>
                </div>

                {/* Post Image */}
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={post.image} 
                    alt="Post content" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Post Content */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {post.content}
                </p>

                {/* Engagement Stats */}
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-gray-800/30 rounded-lg p-2">
                    <div className="flex items-center justify-center space-x-1 text-green-400 mb-1">
                      <Heart className="w-3 h-3" />
                      <span className="text-xs font-medium">{post.likes}</span>
                    </div>
                    <span className="text-xs text-gray-400">Likes</span>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-2">
                    <div className="flex items-center justify-center space-x-1 text-blue-400 mb-1">
                      <MessageCircle className="w-3 h-3" />
                      <span className="text-xs font-medium">{post.comments}</span>
                    </div>
                    <span className="text-xs text-gray-400">Comments</span>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-2">
                    <div className="flex items-center justify-center space-x-1 text-purple-400 mb-1">
                      <Share2 className="w-3 h-3" />
                      <span className="text-xs font-medium">{post.shares}</span>
                    </div>
                    <span className="text-xs text-gray-400">Shares</span>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-2">
                    <div className="flex items-center justify-center space-x-1 text-orange-400 mb-1">
                      <Eye className="w-3 h-3" />
                      <span className="text-xs font-medium">{post.reach}</span>
                    </div>
                    <span className="text-xs text-gray-400">Reach</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful{' '}
              <span className="gradient-text">Analytics Dashboard</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track your performance with detailed insights and actionable recommendations
            </p>
          </div>

          <div className="card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Analytics Overview */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Performance Overview</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Total Reach</p>
                        <p className="text-gray-400 text-sm">Last 30 days</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">89.2K</p>
                      <p className="text-green-400 text-sm">+12.5%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Heart className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Engagement Rate</p>
                        <p className="text-gray-400 text-sm">Average</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">4.8%</p>
                      <p className="text-green-400 text-sm">+2.1%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">New Followers</p>
                        <p className="text-gray-400 text-sm">This month</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">1,247</p>
                      <p className="text-green-400 text-sm">+15.3%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Performance */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Platform Performance</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Instagram className="w-5 h-5 text-pink-400" />
                      <span className="text-white font-medium">Instagram</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">12.5K followers</p>
                      <p className="text-green-400 text-sm">4.2% engagement</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Facebook className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">Facebook</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">8.9K followers</p>
                      <p className="text-green-400 text-sm">3.8% engagement</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-black text-white rounded text-xs flex items-center justify-center font-bold">T</div>
                      <span className="text-white font-medium">TikTok</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">6.7K followers</p>
                      <p className="text-green-400 text-sm">5.1% engagement</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Youtube className="w-5 h-5 text-red-400" />
                      <span className="text-white font-medium">YouTube</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">3.4K subscribers</p>
                      <p className="text-green-400 text-sm">2.9% engagement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse team of passionate professionals with unique skills driving innovation 
              and excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover mx-auto transform group-hover:rotate-3 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of Somali businesses already growing with our AI-powered platform
            </p>
            
            {/* Social Proof */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-400">Active Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2.5M+</div>
                <div className="text-gray-400">Posts Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-gray-400">Satisfaction Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-primary text-lg px-8 py-4">
                Get Started Free
              </Link>
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
