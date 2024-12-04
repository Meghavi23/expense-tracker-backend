
# Expense Tracker Backend

## Overview
The Expense Tracker Backend is built using Nest.js and MongoDB. It provides RESTful API endpoints for managing user authentication, expense tracking, and income tracking.

## Technologies Used
- **Nest.js**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB**: A NoSQL database used to store user, expense, and income data.
- **Passport.js**: Used for JWT-based authentication.

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd expense-tracker-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**
   Create a `.env` file in the root directory with the following values:
   ```
   PORT=3000
   MONGO_URI=<your-mongo-uri>
   JWT_SECRET=<your-secret-key>
   ```

4. **Run the server**
   ```bash
   npm run start:dev
   ```

## Available Endpoints
- **User Management**
  - `POST /auth/register`: Register a new user.
  - `POST /auth/login`: Login and get a JWT token.

- **Expense Management**
  - `POST /expenses`: Add a new expense.
  - `GET /expenses`: Get all expenses.
  - `PUT /expenses/:id`: Update an existing expense.
  - `DELETE /expenses/:id`: Delete an expense.

- **Income Management**
  - `POST /incomes`: Add a new income.
  - `GET /incomes`: Get all income records.
  - `PUT /incomes/:id`: Update an existing income.
  - `DELETE /incomes/:id`: Delete an income.

