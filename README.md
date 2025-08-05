# 🎬 StreamSphere

> A full-featured video streaming platform built with Next.js, Bunny Stream, and PostgreSQL.  
> StreamSphere allows creators to upload, manage, and deliver high-quality video content with a modern, responsive UI.


---

## 📌 Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📖 About
StreamSphere is a self-hosted video streaming platform.  
It uses **Next.js** for the frontend, **PostgreSQL** for data persistence, and **Bunny Stream** as the CDN and transcoding service.  
The platform is optimized for performance and scalability, deployed on a **DigitalOcean VPS**.

---

## ✨ Features
✅ User authentication & role management  
✅ Video upload, edit, delete, and metadata management  
✅ Secure video delivery through Bunny Stream  
✅ Responsive UI with Tailwind CSS  
✅ Optimized database with PostgreSQL  
✅ Ready for deployment on cloud VPS

---

## 🛠 Tech Stack
**Frontend:** Next.js (React), Tailwind CSS  
**Backend:** Node.js (API Routes), Prisma ORM  
**Database:** PostgreSQL  
**Video CDN:** Bunny Stream  
**Deployment:** DigitalOcean VPS (Ubuntu)

---

## ⚡ Getting Started

### 🔧 Prerequisites
- Node.js 18+  
- npm or yarn  
- PostgreSQL running locally or remotely  
- Bunny Stream account & API key

### 📥 Installation
```bash
# Clone the repository
git clone https://github.com/your-username/streamsphere.git
cd streamsphere

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your DB credentials and Bunny Stream API keys

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
