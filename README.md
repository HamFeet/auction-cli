# Auction CLI

A Node.js command-line application that simulates an auction system.  
This project allows users to create, view, update, remove, and search auction items directly from the terminal, with data persisted in a database.

---

## 📌 Project Overview

The **Auction CLI** is a backend-focused command-line application built with Node.js. It was designed to demonstrate how a real-world auction or listing system could be managed entirely through CLI commands while maintaining strong data validation, security, and database structure.

The purpose of this project was to:
- Build a fully functional CLI application
- Practice CRUD operations against a database
- Implement input validation and sanitisation
- Apply backend security best practices
- Structure a scalable Node.js project

---

## ✨ Features

- Add new auction items via interactive CLI prompts
- List all auction items
- Find items by criteria
- Update existing auction items
- Remove auction items
- API endpoints for adding and retrieving items
- Input validation and sanitisation for security
- Asynchronous database connections

---

## 🛠 Tech Stack

- **Node.js**
- **JavaScript (ES Modules)**
- **MongoDB**
- **Mongoose**
- **Inquirer** (interactive CLI prompts)
- **Zod** (schema validation)
- **sanitize-html** (XSS protection)
- **Express** (API routes)
- **Postman** (API testing)

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB (local or cloud instance)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/HamFeet/auction-cli.git
   cd auction-cli
2. **Install dependencies**
    npm install
3. **Set up environment variables**
    MONGO_URI=your_mongodb_connection_string
4. **Run the CLI**
    node index.js
5. **Use commander**
    commands.js --help