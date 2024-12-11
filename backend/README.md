## EcoEnergy Backend

### Setup Instructions

1. Install PostgreSQL and create a database:
```sql
CREATE DATABASE ecoenergy;
```

2. Update the .env file with your database credentials

3. Install dependencies:
```bash
go mod tidy
```

4. Run the server:
```bash
go run main.go
```

### API Endpoints

#### Authentication
- POST /api/register - Register a new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- POST /api/login - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Protected Routes
- GET /api/profile - Get user profile (requires authentication token)

### Authentication
All protected routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <your-token>
```