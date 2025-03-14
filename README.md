# Project Management Application

A comprehensive full-stack project management application built with Next.js, Express, and AWS services. This application allows teams to manage projects, tasks, and collaborate effectively with features like kanban boards, timelines, and task prioritization.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Client Setup](#client-setup)
  - [Server Setup](#server-setup)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Deployment](#deployment)
  - [AWS EC2 & PM2 (Backend)](#aws-ec2--pm2-backend)
  - [AWS Amplify (Frontend)](#aws-amplify-frontend)
  - [AWS RDS (Database)](#aws-rds-database)
  - [AWS Cognito (Authentication)](#aws-cognito-authentication)
  - [AWS S3 (File Storage)](#aws-s3-file-storage)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Authentication** - User registration and login with AWS Cognito
- **Project Management**
  - Create and manage projects
  - Assign team members to projects
- **Task Management**
  - Create tasks
  - Assign tasks to users
  - Set priorities (Urgent, High, Medium, Low, Backlog)
  - Update task status (To Do, Work In Progress, Under Review, Completed)
- **Multiple Views**
  - Board View (Kanban)
  - List View
  - Timeline View (Gantt chart)
  - Table View
- **Priority Filtering** - Filter tasks by priority level
- **Team Management** - Create and manage teams
- **User Management** - View and manage users
- **Dashboard** - Visual analytics and statistics
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Works on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [AWS Amplify](https://aws.amazon.com/amplify/) - Authentication integration
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MUI Data Grid](https://mui.com/components/data-grid/) - Data tables
- [Recharts](https://recharts.org/) - Charts and visualizations
- [React DnD](https://react-dnd.github.io/react-dnd/) - Drag and drop functionality
- [Gantt Task React](https://github.com/MaTeMaTuK/gantt-task-react) - Gantt charts

### Backend
- [Express.js](https://expressjs.com/) - Web server framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Prisma](https://www.prisma.io/) - ORM for database operations
- [PostgreSQL](https://www.postgresql.org/) - Relational database

### Infrastructure
- [AWS EC2](https://aws.amazon.com/ec2/) - Server hosting
- [PM2](https://pm2.keymetrics.io/) - Process manager for Node.js
- [AWS Amplify](https://aws.amazon.com/amplify/) - Frontend hosting and CI/CD
- [AWS RDS](https://aws.amazon.com/rds/) - Managed database service
- [AWS Cognito](https://aws.amazon.com/cognito/) - Authentication service
- [AWS S3](https://aws.amazon.com/s3/) - Object storage for files and images

## 📁 Project Structure

```plaintext
project/
├── client/               # Frontend Next.js application
│   ├── public/           # Static assets
│   ├── src/              # Source code
│   │   ├── app/          # Next.js app directory
│   │   ├── components/   # Reusable UI components
│   │   ├── lib/          # Utility functions
│   │   └── state/        # Redux store and API integration
│   ├── .env.example      # Example environment variables
│   └── .env.local        # Local environment variables
└── server/               # Backend Express application
    ├── prisma/           # Prisma schema and migrations
    │   ├── schema.prisma # Database schema
    │   └── seed.ts       # Seed data script
    ├── src/              # Source code
    │   ├── controllers/  # API controllers
    │   ├── routes/       # API routes
    │   └── index.ts      # Main entry point
    ├── .env              # Environment variables
    └── .env.example      # Example environment variables
```

## 📋 Prerequisites

- Node.js (v16+)
- npm or yarn
- PostgreSQL database
- AWS account for deployment

## 🚀 Getting Started

### Client Setup

1. Clone the repository:
```sh
git clone https://github.com/MarlonL13/ProjectManager.git
cd project/client
```
2. Install dependencies:
```sh
npm install
# or
yarn install
```
3. Copy the environment variables file:
```sh
cp .env.example .env.local
```
4. Update the environment variables in .env.local with your own values.
5. Start the development server:
```sh
npm run dev
# or
yarn dev
```
The application will be available at http://localhost:3000.

### Server Setup

1. Navigate to the server directory:
```sh
cd project/server
```
2. Install dependencies:
```sh
npm install
# or
yarn install
```
3. Copy the environment variables file:
```sh
cp .env.example .env
```
4. Update the environment variables in .env.local with your own values.
5. Set up the database:
```sh
npx prisma migrate dev
npm run seed
```
6. Start the development server:
```sh
npm run dev
# or
yarn dev
```
The API will be available at http://localhost:8000.

## 🌐 Deployment

### AWS EC2 & PM2 (Backend)
1. Set up an EC2 instance with Node.js installed
2. Clone the repository on the instance
3. Install dependencies:
```sh
cd project/server
npm install
```
4. Set up environment variables:
```sh
nano .env
# Add your production environment variables
```
5. Install PM2 globally:
```sh
npm install -g pm2
```
6. Start the server with PM2:
```sh
pm2 start ecosystem.config.js
```
7. Set up PM2 to start on system boot:
```sh
pm2 startup
pm2 save
```

### AWS Amplify (Frontend)
1. Connect your GitHub repository to AWS Amplify
2. Set the build settings:
```sh
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - cd client
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: client/.next
    files:
      - '**/*'
  cache:
    paths:
      - client/node_modules/**/*
```
3. Add the environment variables in the Amplify Console
4. Deploy the application


### AWS RDS (Database)
1. **Create a PostgreSQL RDS instance**  
2. **Configure security groups** to allow connections from your EC2 instance  
3. **Update the `DATABASE_URL`** in the server's `.env` file with the RDS connection string  
4. **Run the migrations and seed the database**  

### AWS Cognito (Authentication)
1. **Create a User** Pool in AWS Cognito
2. **Configure the app** client settings
3. **Update the Cognito configuration in the client's `.env.local` file**

### AWS S3 (File Storage)
1. **Create an S3 bucket** for storing images and attachments
2. **Configure CORS settings** to allow requests from your frontend domain
3. **Set up appropriate permissions**
4. **Update the S3 URL** in the client's `.env.local` file

## 🤝 Contributing

I welcome contributions to improve this project! To contribute, please follow these steps:

1. **Fork the Repository**  
   Click the **Fork** button at the top right of the repository to create a copy under your GitHub account.

2. **Clone Your Fork**  
   ```sh
   git clone https://github.com/your-username/project.git
   cd project
   ```
3. **Create a New Branch**  
   ```sh
   git checkout -b feature/your-feature-name
   ```
4. **Make Your Changes**  
Modify the code, fix bugs, or add new features.

5. **Commit Your Changes**  
   ```sh
   git commit -m 'Add some feature'
   ```
6. **Push to Your Branch**  
   ```sh
   git push origin feature/your-feature-name
  ```
7. **Open a Pull Request (PR)**  
   - Go to the repository on GitHub.
   - Click **"New Pull Request"**.
   - Select your fork and branch, then submit the PR for review.

## 📄 License

This project is licensed under the **MIT License**.

### What does this mean?
- You are free to **use**, **modify**, and **distribute** this project, **both commercially and non-commercially**, as long as you include the same license and copyright notice in all copies or substantial portions of the software.
- The software is provided **"as is"**, without any warranty of any kind, either express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, or noninfringement.

For more details, see the full [LICENSE](LICENSE) file.