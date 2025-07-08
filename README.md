# 🖋️ Inkwell

A minimalistic blog web app built with **React**, **TailwindCSS**, **Axios**, and **Express** — without a database! All blog posts are managed in-memory using a simple array for CRUD operations.

---

## 🚀 Features

- 📝 Create a new blog post  
- 📖 Read all posts  
- ✏️ Edit existing posts  
- ❌ Delete posts  
- 💡 Clean UI with TailwindCSS  
- ⚙️ Express-based backend (no DB)

---

## 🛠️ Tech Stack

**Frontend:**
- React
- TailwindCSS
- Axios

**Backend:**
- Node.js
- Express.js
- In-memory array for data persistence (temporary)

---

## 📁 Folder Structure

inkwell
│
├── backend/
│ ├── Server.js # Main Express server
│ └── Routes
    └──posts.js # Post routes + in-memory store
│
├── frontend/
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx
│
└── README.md


## Install dependencies

### Backend
cd backend
npm install

### Frontend
cd ../frontend
npm install