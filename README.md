# NestJS Task Manager

A simple task management API built with [NestJS](https://nestjs.com/).

## Features

- User authentication (JWT)
- CRUD operations for tasks
- Task status management
- Validation and error handling

## Getting Started

### Prerequisites

- Node.js (v18+)
- Yarn

### Installation

```bash
yarn install
```

### Environment Setup

Create a `.env` file in the project root with the required environment variables. Example:

```env
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url
DATABASE_URL=your_database_url
DATABASE_URL=your_database_url
DATABASE_URL=your_database_url
```

### Running the App

```bash
yarn start
```

The API will be available at `http://localhost:3000`.

## Usage

- Register and log in to obtain a JWT token.
- Use the token to access protected task endpoints.

## API Endpoints

- `POST /auth/signup` - Register a new user
- `POST /auth/signin` - Log in
- `GET /tasks` - List tasks
- `POST /tasks` - Create a task
- `PATCH /tasks/:id/status` - Update task status
- `DELETE /tasks/:id` - Delete a task

## License

MIT