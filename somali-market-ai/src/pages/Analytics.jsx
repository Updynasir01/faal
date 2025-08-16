import { useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2,
  Calendar,
  Filter
} from 'lucide-react'

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d')

  const metrics = [
    {
      title: 'Total Reach',
      value: '45.2K',
      change: '+12.5%',
      isPositive: true,
      icon: <Eye className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      title: 'Engagement Rate',
      value: '4.8%',
      change: '+2.1%',
      isPositive: true,
      icon: <Heart className="w-6 h-6" />,
      color: 'text-green-400'
    },
    {
      title: 'New Followers',
      value: '892',
      change: '+15.3%',
      isPositive: true,
      icon: <Users className="w-6 h-6" />,
      color: 'text-purple-400'
    },
    {
      title: 'Comments',
      value: '1,247',
      change: '-3.2%',
      isPositive: false,
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'text-orange-400'
    }
  ]

  const topPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Waxaan ku soo bandhignay cusub...',
      reach: 1200,
      engagement: 234,
      likes: 189,
      comments: 45,
      date: '2 days ago'
    },
    {
      id: 2,
      platform: 'Facebook',
      content: 'Maanta waxaan ku soo bandhignay...',
      reach: 890,
      engagement: 156,
      likes: 134,
      comments: 22,
      date: '3 days ago'
    },
    {
      id: 3,
      platform: 'TikTok',
      content: 'Video cusub oo ku saabsan...',
      reach: 2100,
      engagement: 445,
      likes: 378,
      comments: 67,
      date: '5 days ago'
    }
  ]

  const platformStats = [
    { platform: 'Instagram', followers: 12500, engagement: 4.2, posts: 45 },
    { platform: 'Facebook', followers: 8900, engagement: 3.8, posts: 32 },
    { platform: 'TikTok', followers: 6700, engagement: 5.1, posts: 28 },
    { platform: 'YouTube', followers: 3400, engagement: 2.9, posts: 15 }
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
            <p className="text-gray-400">Track your content performance and audience growth</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{metric.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
                  <div className="flex items-center mt-1">
                    {metric.isPositive ? (
                      <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                    )}
                    <span className={`text-sm ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className={`${metric.color} p-3 bg-gray-800/50 rounded-lg`}>
                  {metric.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Engagement Chart */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Engagement Over Time</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm">Reach</button>
                  <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm">Likes</button>
                  <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm">Comments</button>
                </div>
              </div>
              
              {/* Mock Chart */}
              <div className="h-64 bg-gray-800/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">Chart visualization would go here</p>
                  <p className="text-gray-500 text-sm">Integration with Chart.js or similar library</p>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Performance */}
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4">Platform Performance</h3>
            <div className="space-y-4">
              {platformStats.map((platform, index) => (
                <div key={index} className="p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{platform.platform}</span>
                    <span className="text-gray-400 text-sm">{platform.followers.toLocaleString()} followers</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{platform.engagement}% engagement</span>
                    <span className="text-gray-400">{platform.posts} posts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Performing Posts */}
        <div className="mt-8">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Top Performing Posts</h2>
              <button className="text-blue-400 hover:text-blue-300 text-sm">View All</button>
            </div>
            
            <div className="space-y-4">
              {topPosts.map((post) => (
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
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Reach</p>
                        <p className="text-white font-medium">{post.reach.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Likes</p>
                        <p className="text-white font-medium">{post.likes}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Comments</p>
                        <p className="text-white font-medium">{post.comments}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-8">
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">AI Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h3 className="text-green-400 font-semibold mb-2">Best Performing Time</h3>
                <p className="text-gray-300">Your posts perform best on Tuesdays and Thursdays between 7-9 PM</p>
              </div>
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h3 className="text-blue-400 font-semibold mb-2">Top Content Type</h3>
                <p className="text-gray-300">Video content generates 40% more engagement than image posts</p>
              </div>
              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h3 className="text-purple-400 font-semibold mb-2">Trending Hashtags</h3>
                <p className="text-gray-300">#SomaliBusiness and #Mogadishu are trending in your niche</p>
              </div>
              <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                <h3 className="text-orange-400 font-semibold mb-2">Audience Growth</h3>
                <p className="text-gray-300">Your audience is growing 15% faster than industry average</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
