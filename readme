# Random Data Generator API

## 📌 Overview
The **Random Data Generator API** provides fake data for testing and development purposes. Developers can generate random users, transactions, and custom data types like emails, addresses, company names, job titles, and more.

## 🚀 Features
- Generate **random user profiles** with avatars.
- Generate **random financial transactions**.
- Fetch **custom data** like names, emails, numbers, companies, and more.
- Support for **bulk data generation**.

## 🏗️ Setup & Installation
### 1️⃣ Clone the repository
```sh
git clone https://github.com/yourusername/random-data-api.git
cd random-data-api
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Start the server
```sh
node config/server.js
```
The API will be available at:
```
http://localhost:5000
```

## 📡 API Endpoints

### ✅ Get Random User
- **Endpoint:** `GET /api/users/random`
- **Response:**
```json
{
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com",
  "phone": "+1 555-555-5555",
  "address": "789 Elm St",
  "avatar": "https://randomuser.me/api/portraits/women/45.jpg"
}
```

### ✅ Get Random Transaction
- **Endpoint:** `GET /api/transactions/random`
- **Response:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "amount": "150.00",
  "date": "2024-02-10T12:00:00.000Z",
  "category": "Electronics"
}
```

### ✅ Get Custom Data
- **Endpoint:** `GET /api/custom/random?type=job&count=5`
- **Supported types:** `name`, `email`, `address`, `number`, `company`, `job`, `product`, `uuid`, `lorem`
- **Response:**
```json
{
  "type": "job",
  "data": [
    "Software Engineer",
    "Data Scientist",
    "Project Manager",
    "Graphic Designer",
    "Marketing Specialist"
  ]
}
```

## 🛠️ Deployment
To deploy this API, you can use:
- **Render**
- **Railway**
- **Vercel**

## 🔗 License
This project is licensed under the MIT License.
