# FixMyArea 🏘️

> A community-driven platform empowering citizens to report and track local infrastructure issues

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python)](https://python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.x-000000?logo=flask)](https://flask.palletsprojects.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?logo=mysql)](https://mysql.com/)

## 📋 Overview

FixMyArea is a comprehensive web application that bridges the gap between citizens and local government agencies. Users can report infrastructure issues like potholes, faulty streetlights, overflowing waste bins, and water leaks directly to relevant municipal departments. The platform provides real-time tracking, photo documentation, and transparent communication throughout the resolution process.

## 🎯 Mission

- **Foster Civic Engagement** - Empower citizens to actively participate in community improvement
- **Improve Local Services** - Streamline issue reporting and resolution workflows
- **Promote Government Accountability** - Maintain transparency through real-time updates and status tracking

## ✨ Key Features

### For Citizens

- 🔐 **Secure Authentication** - JWT-based user registration and login
- 📍 **Interactive Map Integration** - Pinpoint exact issue locations using Google Maps
- 📸 **Photo Documentation** - Upload images to provide visual context
- 📝 **Detailed Reporting** - Comprehensive forms with issue categorization
- 📊 **Real-time Tracking** - Monitor issue resolution status and progress
- 🏠 **Public Dashboard** - View completed projects and before/after comparisons

### For Government Agencies

- 📋 **Issue Queue Management** - Centralized dashboard for pending issues
- 🏷️ **Smart Categorization** - Automatic routing to appropriate departments
- 📧 **Email Notifications** - Instant alerts for new reports and status updates
- 📈 **Analytics Dashboard** - Track response times and resolution metrics

## 🛠️ Technology Stack

### Frontend

- **Vue.js 3** - Progressive JavaScript framework for building user interfaces
- **Google Maps API** - Interactive mapping and location services
- **Tailwind CSS** - Utility-first CSS framework for modern styling

### Backend

- **Python 3.x** - High-level programming language
- **Flask** - Lightweight web framework for API development
- **JWT** - JSON Web Tokens for secure authentication

### Database

- **MySQL 8.x** - Reliable relational database management system

### External Services

- **Cloudinary** - Cloud-based image and video management
- **Mailgun** - Transactional email service for notifications

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.8+
- MySQL 8.0+
- Google Maps API key
- Cloudinary account
- Mailgun account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/annyauthe4/FixMyArea.git
   cd FixMyArea
   ```

2. **Backend Setup**

   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Frontend Setup**

   ```bash
   cd frontend
   npm install
   ```

4. **Environment Configuration**

   ```bash
   # Backend (.env)
   DATABASE_URL=mysql://user:password@localhost/fixmyarea
   JWT_SECRET_KEY=your-secret-key
   GOOGLE_MAPS_API_KEY=your-google-maps-key
   CLOUDINARY_URL=your-cloudinary-url
   MAILGUN_API_KEY=your-mailgun-key

   # Frontend (.env)
   VITE_API_BASE_URL=http://localhost:5000
   VITE_GOOGLE_MAPS_API_KEY=your-google-maps-key
   ```

5. **Database Setup**

   ```bash
   mysql -u root -p
   CREATE DATABASE fixmyarea;
   ```

6. **Run the Application**

   ```bash
   # Backend (Terminal 1)
   cd backend
   flask run

   # Frontend (Terminal 2)
   cd frontend
   npm run dev
   ```

Visit `http://localhost:5173` to access the application.

## 📁 Project Structure

```
FixMyArea/
├── backend/                 # Flask API server
│   ├── app/
│   │   ├── models/         # Database models
│   │   ├── routes/         # API endpoints
│   │   └── services/       # Business logic
│   └── requirements.txt
├── frontend/               # Vue.js application
│   ├── src/
│   │   ├── components/     # Vue components
│   │   ├── views/          # Page components
│   │   ├── services/       # API services
│   │   └── store/          # State management
│   └── package.json
└── README.md
```

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

### Core Contributors

- **Otetumo Oluwaseun** - [GitHub](https://github.com/annyauthe4) | [Email](mailto:annyauthe4@gmail.com) | [Twitter](https://twitter.com/annyauthe4) - Backend Developer
- **Salu Oluwafikunayomi** - Backend Developer
- **Gemechis Chala** -  - [GitHub](https://github.com/venopyx) | [Email](mailto:gladsonchala@gmail.com) | [Twitter](https://twitter.com/venopyx) - Frontend Developer
- **Alagbada Abiodun** - - [GitHub](https://github.com/Alagbada123) | [Email](mailto:abiodunalagbada@gmail.com) | [Twitter](https://twitter.com/ABIODUNALAGBAD1) - Frontend Developer

## 📞 Support

<!-- - **Email**: support@fixmyarea.com
- **Documentation**: [docs.fixmyarea.com](https://docs.fixmyarea.com) -->
- **Issues**: [GitHub Issues](https://github.com/annyauthe4/FixMyArea/issues)

---

<div align="center">
  <p>Made with ❤️ for ALX SE Program Final Project</p>
  <p><strong>FixMyArea</strong> - Empowering citizens, improving infrastructure</p>
</div>
