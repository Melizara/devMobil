# 📱 DevMobil

A full-stack mobile development project built with a separate frontend and backend architecture.

## 🛠️ Tech Stack

**Backend**

* Node.js
* Express 5
* MySQL
* mysql2
* CORS
* dotenv

**Frontend**

* Frontend application located in `front/`

## 📁 Structure

```text
devMobil/
├── .vscode/
├── front/
└── back/
    ├── api/
    │   ├── configs/
    │   ├── controllers/
    │   ├── middlewares/
    │   ├── models/
    │   └── routes/
    ├── .env
    ├── package.json
    └── server.js
```

## 🚀 Installation

```bash
git clone https://github.com/Melizara/devMobil.git
cd devMobil
```

### Backend

```bash
cd back
npm install
node server.js
```

The API runs on:

```text
http://localhost:5000
```

Create a `.env` file in `back/` with your MySQL configuration.

## 🔌 API

Main API endpoint:

```text
/api/products
```

The backend follows a simple architecture:

```text
Routes → Controllers → Models → MySQL
```

## 📌 Status

🚧 **In development**

## 👨‍💻 Author

**Melizara**
Computer Science Student & Full-Stack Developer in progress

[GitHub](https://github.com/Melizara)

## 📄 License

Educational and academic project.
