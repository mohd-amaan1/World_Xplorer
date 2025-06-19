
# 🌍 World Xplorer

**World Xplorer** is a full-featured MERN stack web application that allows users to **share amazing places** with others. It supports secure authentication, image uploads, dynamic maps, and full CRUD operations — all wrapped in a clean, responsive interface.

> 🧭 Discover, upload, and map the world — one place at a time.

---

## 📑 Table of Contents

* [✨ Features](#-features)
* [🛠️ Tech Stack](#-tech-stack)
* [🚀 Installation & Setup](#-installation--setup)
* [📷 Usage](#-usage)
* [📁 Project Structure](#-project-structure)
* [📡 API Endpoints](#-api-endpoints)
* [🤝 Contributing](#-contributing)
* [📄 License](#-license)

---

## ✨ Features

✅ User Authentication & Authorization (JWT + bcrypt)  
✅ Upload and share places with photos  
✅ Display places dynamically on **Google Maps**  
✅ Convert addresses to coordinates using Geocoding API  
✅ Secure file upload handling with **Multer**  
✅ Built-in form and input validation  
✅ Clean and responsive UI  
✅ Fully RESTful API  

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React.js
* CSS Modules
* Google Maps API

### 🔹 Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* Multer (for image upload)
* JWT + bcrypt (for auth)
* Google Geocoding API / LocationIQ

---

## 🚀 Installation & Setup

### ⚙️ Prerequisites

* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* npm or yarn

---

### 📦 Clone the Repo

```bash
git clone https://github.com/mohd-amaan1/World_Xplorer.git
cd World_Xplorer
```

---

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
DB_NAME=yourDB
USER_NAME=yourUsername
USER_PASSWORD=yourPassword
```

Start the backend server:

```bash
npm start
```

---

### 🎨 Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file:

```env
REACT_APP_BACKEND_LINK=http://localhost:5000
```

Start the frontend:

```bash
npm start
```

---

## 📷 Usage

1. 🔐 **Register** a new user.
2. 🔓 **Login** with your credentials.
3. 📌 **Add a new place** with image and location.
4. 🗺️ View places on an interactive map.
5. ✏️ Update or delete your own places.

🔗 **Live App:** [xplorer-kappa.vercel.app](https://xplorer-kappa.vercel.app/)

---

## 📁 Project Structure

```bash
World_Xplorer/
│
├── backend/
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Auth & error middleware
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API route definitions
│   ├── uploads/           # Uploaded images
│   ├── util/              # Utility helpers
│   ├── app.js             # Express app setup
│   └── server.js          # Entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## 📡 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/api/auth/signup` | Register user |
| POST   | `/api/auth/login`  | Login user    |

### 📌 Place Routes

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | `/api/places`     | Get all places   |
| GET    | `/api/places/:id` | Get place by ID  |
| POST   | `/api/places`     | Create new place |
| PUT    | `/api/places/:id` | Update place     |
| DELETE | `/api/places/:id` | Delete place     |

### 👤 User Routes

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| GET    | `/api/users/:id` | Get user details |

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repo
2. Create a new branch:
   `git checkout -b feature-branch`
3. Make changes ✅
4. Commit:
   `git commit -m "Add your feature"`
5. Push your branch:
   `git push origin feature-branch`
6. Create a **Pull Request** 🚀

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

### 🙌 We hope you enjoy using **World Xplorer!**
