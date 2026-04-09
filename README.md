# 🐾 Pawbnb

A full-stack MERN application for booking pet stays — inspired by platforms like Airbnb, but tailored for pet owners and trusted hosts.

🔗 **Live App:** https://pawbnbstays.netlify.app/
🔗 **Backend API:** https://pawbnb-backend-0ibv.onrender.com

---

## ✨ Overview

**Pawbnb** allows users to:

* Find and book safe, comfortable stays for their pets 🐶
* Explore featured listings and search by location & availability
* Manage bookings (create, update, cancel)
* Authenticate securely and access personalized features

Hosts can:

* List their own pet stays
* Manage availability and bookings

---

## 🚀 Tech Stack

### Frontend

* React (SPA)
* Context API (state management)
* Axios (API communication)
* React Router
* CSS (custom styling, dark UI)

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* REST API architecture

---

## 🔐 Features

### 👤 Authentication

* Sign up / Log in / Log out
* Password encryption with bcrypt
* JWT-based authorization

### 🐾 Pet Stays

* Browse all listings
* Featured stays section
* View detailed stay pages
* Host information display

### 🔍 Search & Filtering

* Search by city
* Date range selection
* Availability filtering (based on existing bookings)

### 📅 Booking System

* Create bookings with date selection
* Automatic price calculation
* Edit existing bookings
* Cancel bookings (with confirmation)

### 📊 User Dashboard

* View all personal bookings
* Update booking dates
* Cancel bookings

---

## 🧠 Key Concepts Implemented

* Full CRUD operations
* RESTful API design
* Relational data modeling (Users ↔ PetStays ↔ Bookings)
* Protected routes & authorization
* Dynamic UI with real-time updates
* Clean, reusable component architecture

---

## 🗂️ Project Structure

### Frontend

https://github.com/Dovymay/Pawbnb-frontend

### Backend

https://github.com/Dovymay/Pawbnb-backend

---

## 🧩 Data Models

### User

* username, email, password
* role (user / host)
* avatar

### PetStay

* title, location, pricePerNight
* rating, reviews
* description, image
* host (User reference)
* featured (Boolean)

### Booking

* user (User reference)
* petStay (PetStay reference)
* startDate, endDate
* totalPrice
* status

---

## ⚙️ Installation & Setup

### 1. Clone repositories

```bash
git clone https://github.com/Dovymay/Pawbnb-frontend
git clone https://github.com/Dovymay/Pawbnb-backend
```

---

### 2. Backend setup

```bash
cd Pawbnb-backend
npm install
```

Create a `.env` file:

```env
PORT=5005
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run server:

```bash
npm run dev
```

---

### 3. Frontend setup

```bash
cd Pawbnb-frontend
npm install
npm start
```

---

## 🌐 API Endpoints (Example)

### Auth

* `POST /auth/signup`
* `POST /auth/login`
* `GET /auth/verify`

### Pet Stays

* `GET /petstays`
* `GET /petstays/featured`
* `GET /petstays/:id`
* `POST /petstays`

### Bookings

* `GET /bookings`
* `POST /bookings`
* `PUT /bookings/:id`
* `DELETE /bookings/:id`

---

## 🎨 UI & Design

* Dark theme with minimalistic layout
* Split-screen detail pages (Airbnb-inspired)
* Sticky booking/edit cards
* Clean, responsive grid system
* Focus on usability and clarity

---

## 🧪 Future Improvements

* Host dashboard (manage listings)
* Reviews & ratings system
* Image upload (Cloudinary)
* Payment integration (Stripe)
* Advanced filtering (price, pet type, etc.)
* Messaging system between users and hosts

---

## 👨‍💻 Author

**Dovydas**
Ironhack Web Development Bootcamp Graduate

---

## 📌 Notes

This project was built as a final full-stack application for the Ironhack Web Development Bootcamp, demonstrating practical skills in building and deploying a complete MERN application.

---

## 🔗 Backend Repository
https://github.com/Dovymay/Pawbnb-backend