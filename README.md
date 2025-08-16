# Somali Market AI Content Generator

A full-stack web application that helps small businesses in Somalia grow their social media presence with AI-powered, culturally relevant content generation.

## 🌟 Features

### Frontend (React + Tailwind CSS)
- **Modern Dark Theme**: Clean, professional design with gradients and glass effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Dashboard**: Real-time analytics and content management
- **AI Content Generator**: Form-based content creation with Somali cultural relevance
- **User Authentication**: Secure login and registration system
- **Profile Management**: Complete user and business profile settings

### Backend (Node.js + Express + MongoDB)
- **RESTful API**: Complete CRUD operations for all features
- **User Authentication**: JWT-based authentication with bcrypt password hashing
- **Content Generation**: AI-like content generation with Somali language support
- **Analytics Engine**: Comprehensive analytics and performance tracking
- **Database Models**: Structured MongoDB schemas for users and content

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd somali-market-ai
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd somali-market-ai
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Set up Environment Variables**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/somali-market-ai
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   ```

5. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

6. **Run the Application**

   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```

   **Terminal 2 - Frontend:**
   ```bash
   cd somali-market-ai
   npm run dev
   ```

7. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
somali-market-ai/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ContentGenerator.jsx
│   │   ├── Analytics.jsx
│   │   ├── Profile.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── App.jsx
│   └── index.css
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Content.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── content.js
│   │   ├── analytics.js
│   │   └── users.js
│   ├── server.js
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Content Management
- `POST /api/content/generate` - Generate AI content
- `GET /api/content/user` - Get user's content
- `GET /api/content/:id` - Get specific content

### Analytics
- `GET /api/analytics/overview` - Get analytics overview
- `GET /api/analytics/platforms` - Get platform performance
- `GET /api/analytics/top-posts` - Get top performing posts
- `GET /api/analytics/performance-timeline` - Get performance timeline

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `PUT /api/users/business` - Update business information
- `PUT /api/users/password` - Change password
- `GET /api/users/stats` - Get user statistics

## 🎨 Design Features

- **Dark Theme**: Modern black and blue gradient design
- **Glass Effects**: Backdrop blur and transparency effects
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Smooth Animations**: Hover effects and transitions
- **Somali Cultural Elements**: Culturally relevant content and design

## 🔒 Security Features

- **Password Hashing**: bcrypt for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Proper cross-origin resource sharing
- **Environment Variables**: Secure configuration management

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your preferred platform

### Backend (Heroku/Railway)
1. Set environment variables in your hosting platform
2. Deploy the backend folder
3. Update frontend API endpoints to point to your backend URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Somali language and cultural consultants
- React and Tailwind CSS communities
- MongoDB and Node.js communities

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.
