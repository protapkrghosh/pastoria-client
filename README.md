# Pastoria (Historical Artifacts Tracker)

## 📌 Project Overview
This project involves creating a web application for tracking historical artifacts such as the Rosetta Stone, the Antikythera Mechanism, etc. The application will allow users to browse artifacts, view details, and add their own entries. The system will also allow users to like artifacts and keep track of their own contributions. The application should provide a user-friendly interface for managing and displaying information about various historical items.

### 🌐 Live Site

🔗 [Visit Website](https://pastoria-artifacts.web.app)


## ✨ Key Features

- Secure Authentication using Firebase (Email/Password, Google, GitHub) with JWT protection for private routes.
- Featured Artifacts Section showing top 6 artifacts by like count on the homepage.
- Add Artifact Form with validation and success feedback.
- JWT is used to protect all private routes.
- Like & Unlike System that updates both UI and database in real-time.
- Search Functionality on the All Artifacts page by artifact name.
- My Artifacts Page to view, update, and delete user-submitted artifacts.
- Liked Artifacts Page showing all artifacts liked by the user.
- Fully Responsive Design for mobile, tablet, and desktop.
- All Firebase and MongoDB credentials are secured using `.env` variables.


## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, DaisyUI, Axios, React Router, Firebase, Framer Motion
- **Backend**: Node.js, Express.js, MongoDB, JWT, dotenv, cookie-parser
