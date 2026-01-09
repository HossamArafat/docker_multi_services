This project demonstrates a Dockerized Node.js application using Docker Compose, following real-world best practices.
It includes MongoDB, Mongo Express, Redis, and Nginx as a reverse proxy, with support for development and production environments.

📦 Tech Stack:

Node.js – Backend application

MongoDB – NoSQL database

Mongo Express – MongoDB web-based admin UI

Redis – Caching / session store

Nginx – Reverse proxy

Docker & Docker Compose – Containerization & orchestration


▶️ How to Run the Project:

🔹 Development Mode
    docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

🔹 Production Mode
    docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
