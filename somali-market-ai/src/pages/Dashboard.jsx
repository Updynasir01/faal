import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2, 
  Plus,
  Calendar,
  FileText,
  Settings,
  Bell,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  TrendingDown
} from 'lucide-react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    {
      title: 'Total Posts',
      value: '1,247',
      change: '+12%',
      icon: <FileText className="w-6 h-6" />,
      color: 'text-blue-400',
      trend: 'up'
    },
    {
      title: 'Total Reach',
      value: '45.2K',
      change: '+8%',
      icon: <Eye className="w-6 h-6" />,
      color: 'text-green-400',
      trend: 'up'
    },
    {
      title: 'Engagement Rate',
      value: '4.8%',
      change: '+2.1%',
      icon: <Heart className="w-6 h-6" />,
      color: 'text-purple-400',
      trend: 'up'
    },
    {
      title: 'New Followers',
      value: '892',
      change: '+15%',
      icon: <Users className="w-6 h-6" />,
      color: 'text-orange-400',
      trend: 'up'
    }
  ]

  const platformStats = [
    {
      platform: 'Instagram',
      followers: 12500,
      engagement: 4.2,
      posts: 45,
      color: 'text-pink-400',
      icon: <Instagram className="w-5 h-5" />
    },
    {
      platform: 'Facebook',
      followers: 8900,
      engagement: 3.8,
      posts: 32,
      color: 'text-blue-400',
      icon: <Facebook className="w-5 h-5" />
    },
    {
      platform: 'TikTok',
      followers: 6700,
      engagement: 5.1,
      posts: 28,
      color: 'text-black',
      icon: <div className="w-5 h-5 bg-black text-white rounded text-xs flex items-center justify-center font-bold">T</div>
    },
    {
      platform: 'YouTube',
      followers: 3400,
      engagement: 2.9,
      posts: 15,
      color: 'text-red-400',
      icon: <Youtube className="w-5 h-5" />
    }
  ]

  const recentPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Waxaan ku soo bandhignay cusub...',
      engagement: 234,
      reach: 1200,
      date: '2 hours ago'
    },
    {
      id: 2,
      platform: 'Facebook',
      content: 'Maanta waxaan ku soo bandhignay...',
      engagement: 156,
      reach: 890,
      date: '5 hours ago'
    },
    {
      id: 3,
      platform: 'TikTok',
      content: 'Video cusub oo ku saabsan...',
      engagement: 445,
      reach: 2100,
      date: '1 day ago'
    }
  ]

  const scheduledPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Promotion cusub...',
      scheduledFor: 'Tomorrow, 10:00 AM'
    },
    {
      id: 2,
      platform: 'Facebook',
      content: 'Update ku saabsan...',
      scheduledFor: 'Tomorrow, 2:00 PM'
    }
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Welcome back! Here's what's happening with your content.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Settings className="w-6 h-6" />
            </button>
            <Link to="/content-generator" className="btn-primary">
              <Plus className="w-5 h-5 mr-2" />
              Create Content
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                    )}
                    <p className="text-green-400 text-sm">{stat.change} from last month</p>
                  </div>
                </div>
                <div className={`${stat.color} p-3 bg-gray-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Recent Posts</h2>
                <Link to="/analytics" className="text-blue-400 hover:text-blue-300 text-sm">
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-blue-400 font-semibold">
                          {post.platform.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{post.platform}</p>
                        <p className="text-gray-400 text-sm">{post.content}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{post.engagement} likes</span>
                        <span>{post.reach} reach</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Platform Performance */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Platform Performance</h3>
              <div className="space-y-3">
                {platformStats.map((platform, index) => (
                  <div key={index} className="p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`${platform.color}`}>
                          {platform.icon}
                        </div>
                        <span className="text-white font-medium">{platform.platform}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{platform.followers.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{platform.engagement}% engagement</span>
                      <span className="text-gray-400">{platform.posts} posts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/content-generator" 
                  className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors"
                >
                  <Plus className="w-5 h-5 text-blue-400" />
                  <span className="text-white">Generate Content</span>
                </Link>
                <Link 
                  to="/analytics" 
                  className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors"
                >
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  <span className="text-white">View Analytics</span>
                </Link>
                <Link 
                  to="/schedule" 
                  className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors"
                >
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-white">Schedule Posts</span>
                </Link>
              </div>
            </div>

            {/* Scheduled Posts */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Scheduled Posts</h3>
              <div className="space-y-3">
                {scheduledPosts.map((post) => (
                  <div key={post.id} className="p-3 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-orange-400 font-semibold text-sm">
                          {post.platform.charAt(0)}
                        </span>
                      </div>
                      <span className="text-white font-medium">{post.platform}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{post.content}</p>
                    <p className="text-gray-500 text-xs">{post.scheduledFor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
