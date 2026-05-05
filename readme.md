# 🚀 Node Clean Architecture API

A production-ready backend API built with Node.js, Express, and MongoDB following **Clean Architecture principles**.

This project demonstrates how to build scalable backend systems by separating application logic into independent layers such as controllers, services, repositories, and models.

---

## 🧠 Why this project?

Most beginner Node.js projects place business logic directly inside route handlers.

This project focuses on:

* Separation of concerns
* Modular architecture
* Maintainable codebase
* Production-style authentication
* User-scoped resource management

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* Environment variables

---

## 🏗️ Architecture

Application flow:

Route → Controller → Service → Repository → Database

### Layer responsibilities

**Controller**

* Handles HTTP request and response

**Service**

* Contains business logic

**Repository**

* Handles database operations

**Model**

* Defines schema and collections

---

## 📁 Folder Structure

```text
src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── app.js
server.js
```

---

## 🔑 Features

### Authentication Module

✅ User Registration
✅ User Login
✅ Password Hashing
✅ JWT Token Generation
✅ Protected Routes
✅ Token Verification

### Task Module

✅ Create Task
✅ Get Logged-in User Tasks
✅ User-scoped task data
✅ Protected CRUD foundation

---

## 📌 API Endpoints

### Auth

`POST /api/auth/register`

`POST /api/auth/login`

`GET /api/auth/verify`

---

### Tasks

`POST /api/tasks`

`GET /api/tasks`

---

## 🔐 Authentication

Protected APIs require:

Authorization: Bearer YOUR_TOKEN

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Add environment variables

Create `.env`

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/clean_architecture
JWT_SECRET=your_secret
```

### Start server

```bash
npm run start
```

---

## 📈 Future Improvements

* Update task
* Delete task
* Input validation
* Global error handling
* Swagger documentation
* Unit testing
* Docker support
* CI/CD pipeline

---

## ✨ Key Takeaway

This project focuses less on complex business features and more on building backend systems that are scalable, maintainable, and production-ready.
