# 🔐 User Authentication and Authorization with Bearer Token (JWT)

## 📌 Project Overview

This project implements a **secure authentication and authorization system** using **JWT (JSON Web Tokens)** and **Bearer Token strategy** in a **Node.js + Express.js** application. It follows the **MVC (Model–View–Controller)** architecture and uses **MongoDB with Mongoose** for data persistence.

The system supports:

* User Registration
* Secure Login
* Password Hashing
* JWT Token Generation
* Bearer Token Authentication
* Protected Routes
* Token Verification Middleware
* Authorized User Data Access

This project is designed for academic, training, and production-level learning purposes.

---

## 🧱 Tech Stack

* **Node.js** – Backend runtime
* **Express.js** – Web framework
* **MongoDB** – Database
* **Mongoose** – ODM
* **JWT (jsonwebtoken)** – Authentication
* **bcrypt** – Password hashing
* **dotenv** – Environment variables
* **Postman** – API testing & documentation

---

## 🗂️ Project Structure (MVC)

```
User Authentication and Authorization with Bearer Token/
│
├── Controllers/
│   └── user.controller.js
│
├── Models/
│   └── user.schema.js
│
├── Middleware/
│   └── auth.middleware.js
│
├── Routers/
│   └── user.router.js
│
├── Database/
│   └── config.js
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables (.env)

```
PORT=4000
MONGODB=mongodb://127.0.0.1:27017/authDB
JWT_SECRET=your_secret_key
```

---

## 🚀 Features

### ✅ User Registration

* Hashes password using bcrypt
* Stores user securely in MongoDB
* Returns success response

### ✅ User Login

* Validates credentials
* Generates JWT token
* Returns Bearer token

### ✅ JWT Authentication

* Token-based authentication
* Bearer token strategy
* Header-based authorization

### ✅ Authorization Middleware

* Verifies token
* Decodes JWT
* Attaches user info to request
* Protects private routes

### ✅ Protected Routes

* Access allowed only with valid token

---

## 🔐 Authentication Flow

1. User registers → Password is hashed
2. User logs in → JWT token is generated
3. Token sent to client
4. Client stores token
5. Client sends token in headers:

```
Authorization: Bearer <JWT_TOKEN>
```

6. Middleware verifies token
7. User is authorized
8. Protected routes become accessible

---

## 📬 API Endpoints

### 📝 Register User

**POST** `/api/user/register`

**Request Body:**

```json
{
  "username": "john",
  "email": "john@gmail.com",
  "password": "123456",
  "role": "user"
}
```

**Response:**

```json
{
  "message": "Registered Successfully",
  "data": { ...userData }
}
```

---

### 🔐 Login User

**POST** `/api/user/login`

**Request Body:**

```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "message": "Login Success",
  "token": "JWT_TOKEN_HERE"
}
```

---

### 👤 Get Authorized User

**GET** `/api/user/getUser`

**Headers:**

```
Authorization: Bearer JWT_TOKEN_HERE
```

**Response:**

```json
{
  "message": "Authorized User",
  "data": { ...userData }
}
```

---

## 🛡️ Security Features

* Password hashing (bcrypt)
* JWT-based authentication
* Bearer token authorization
* Protected API routes
* Token verification middleware
* Secure password storage
* Token expiry handling

---

## 🧪 Postman Usage

1. Register user
2. Login user
3. Copy JWT token
4. Open Headers in Postman
5. Add:

```
Key: Authorization
Value: Bearer <JWT_TOKEN>
```

6. Access protected routes

---

## 📦 Installation

```bash
npm install
```

---

## ▶️ Run Server

```bash
npm run dev
```

Server runs on:

```
http://localhost:4000
```

---

## 🌍 Deployment

* Deploy backend using **Render**
* Connect MongoDB Atlas
* Set environment variables in Render
* Push project to GitHub
* Submit:

  * GitHub Repository URL
  * Render Deployment URL

---

## 📜 Academic Compliance

✔ MVC Architecture
✔ JWT Authentication
✔ Bearer Token Authorization
✔ MongoDB Integration
✔ Secure Password Hashing
✔ Protected Routes
✔ Middleware Security
✔ API Documentation Ready
✔ Postman Tested
✔ Production Architecture

---

## 🎯 Learning Outcomes

* JWT Authentication
* Bearer Token Strategy
* Secure Backend Design
* API Security
* MVC Architecture
* Middleware Implementation
* Token-based Authorization
* Real-world auth flow

---

## 👨‍💻 Author

**Kanesha**
Software Engineer

---

## 📄 License

This project is open-source and intended for educational and learning purposes.

---

## ✅ Project Status

**✔ Complete**
**✔ Tested**
**✔ Secure**
**✔ Production Ready**
**✔ Submission Ready**
**✔ Deployment Ready**

---

> 🔐 "Secure systems are not built by chance — they are designed."
