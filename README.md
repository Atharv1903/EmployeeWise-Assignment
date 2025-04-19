# 🚀 EmployWise Frontend Assignment

A fully functional React-based user management app built with authentication, user listing, pagination, edit/delete functionality, client-side caching, and a modern user interface — powered by the [Reqres API](https://reqres.in/).

---


## ✨ Features

✅ **Login with authentication**  
✅ **Protected routing**  
✅ **User list with pagination**  
✅ **Search/filter by name or email**  
✅ **Edit user with inline update**  
✅ **Delete user with real-time state update**  
✅ **Local caching for faster navigation**  
✅ **Logout + token expiry handling**  
✅ **Beautiful CSS styling**  
✅ **Toast notifications for actions**  

---

## 🧠 Tech Stack

- ⚛️ React + React Router
- 📦 Axios
- 💅 CSS (custom styling)
- 🔥 React Toastify
- 🗃️ LocalStorage (for auth and caching)
- 📡 [Reqres.in](https://reqres.in/) (Fake API)

---

## 🛠️ Installation

```bash
git clone https://github.com/Atharv1903/EmployeeWise-Assignment.git
cd employee
npm install
npm start
```

---

## 🔐 Login Credentials

Use these test credentials (as per Reqres API docs):

```
Email: eve.holt@reqres.in
Password: cityslicka
```

> 🔒 Token and expiry are stored in localStorage for session handling.

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── EditUserForm.jsx
│   ├── LoginForm.jsx
│   └── UserCard.jsx
├── pages/
│   ├── LoginPage.jsx
│   └── UsersPage.jsx
├── App.jsx
├── index.css
├── index.js
├── api.js
├── utils.js

```

---

## 🧪 API Endpoints Used

- `POST /api/login` – Authenticate and get token  
- `GET /api/users?page=1` – Paginated list of users  
- `PUT /api/users/:id` – Update user info  
- `DELETE /api/users/:id` – Delete user

---

## 🌍 Deployment

The app can be deployed on any free static host like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Render](https://render.com/)

> Add your live link here once deployed:
```
🔗 https://employee-wise-assignment-amber.vercel.app/
```

---

## 📌 Notes

- Only test credentials are allowed.
- No backend data persistence (API is simulated).
- Great for demonstrating frontend skills and async flow.

---

> Made with 💻 by Atharv Kharmate for EmployWise Assignment
