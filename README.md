# Somali Market AI Content Generator

A comprehensive AI-powered content generation platform designed specifically for Somali businesses to create culturally relevant social media content.

## Features

- 🤖 **AI Content Generation**: Generate culturally relevant content in Somali
- 📊 **Analytics Dashboard**: Track performance and engagement metrics
- 🔐 **User Authentication**: Secure login and registration system
- 📱 **Multi-Platform Support**: Create content for Instagram, Facebook, Twitter, and YouTube
- 🎯 **Business Profiles**: Customize content based on business type and industry
- 📈 **Performance Tracking**: Monitor engagement rates and growth

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd faal
```

### 2. Install Frontend Dependencies
```bash
cd somali-market-ai
npm install
```

### 3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

### 4. Environment Setup

#### Backend Configuration
Create a `.env` file in the `backend` directory:
```bash
cd backend
cp config.env .env
```

Edit the `.env` file with your configuration:
```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/somali-market-ai

# JWT Secret (change this in production)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Port
PORT=5000

# Node Environment
NODE_ENV=development

# CORS Origin
CORS_ORIGIN=http://localhost:5173
```

### 5. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Windows
# Start MongoDB service from Services

# On Linux
sudo systemctl start mongod
```

## Running the Application

### 1. Start the Backend Server
```bash
cd backend
npm run dev
```

The backend will start on `http://localhost:5000`

### 2. Start the Frontend Development Server
```bash
cd somali-market-ai
npm run dev
```

The frontend will start on `http://localhost:5173`

### 3. Access the Application
Open your browser and navigate to `http://localhost:5173`

## Usage

### 1. Registration
- Navigate to the registration page
- Fill in your personal and business information
- Choose your business type and industry
- Create your account

### 2. Content Generation
- Log in to your account
- Go to the Content Generator page
- Select your business type and industry
- Choose content type and platform
- Add keywords and description
- Generate culturally relevant content

### 3. Analytics
- View your content performance
- Track engagement metrics
- Monitor growth over time
- Get AI-powered insights

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Content
- `POST /api/content/generate` - Generate new content
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

## Project Structure

```
faal/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Content.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── content.js
│   │   ├── analytics.js
│   │   └── users.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
└── somali-market-ai/
    ├── src/
    │   ├── components/
    │   │   └── Navbar.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── ContentGenerator.jsx
    │   │   ├── Analytics.jsx
    │   │   └── Profile.jsx
    │   ├── contexts/
    │   │   └── AuthContext.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## Development

### Adding New Features
1. Create new components in `src/components/`
2. Add new pages in `src/pages/`
3. Create API endpoints in `backend/routes/`
4. Add corresponding models if needed

### Styling
The application uses Tailwind CSS for styling. Custom styles can be added in `src/index.css`.

### State Management
The application uses React Context for state management, primarily for authentication.

## Deployment

### Frontend Deployment
```bash
cd somali-market-ai
npm run build
```

### Backend Deployment
```bash
cd backend
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
