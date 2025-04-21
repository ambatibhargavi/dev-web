# 🚀 Personal Portfolio Website — Dockerized & Deployed

A clean, responsive, and professional portfolio website built with **HTML**, **CSS**, and **JavaScript**, and containerized using **Docker** for seamless deployment. Ideal for DevOps and Web Developers looking to showcase their projects with modern practices.

---

## 🌟 Features

- Responsive and fast-loading website
- Built with vanilla HTML, CSS, JS
- Packaged in a Docker image using Nginx
- Easy to deploy via Docker Hub or any cloud instance
- Includes architecture & deployment flow diagrams

---

## 📁 Project Structure

```
portfolio-docker-deploy/
├── website/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
│       └── images/
├── Dockerfile
├── diagrams/
│   ├── deployment-architecture.png
│   └── file-structure.png
├── .dockerignore
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🧑‍💻 Local Development Setup

### Install Dependencies (if using any packages)
```bash
npm install
```

### Run the Website Locally
```bash
npm run dev
```

---

## 🐳 Docker Deployment Guide

### 🔧 Build Docker Image
```bash
docker build -t my-portfolio .
```

### 🚀 Run Docker Container
```bash
docker run -d -p 8080:80 my-portfolio
```

Now access your portfolio on: [http://localhost:8080](http://localhost:8080)

---

## 📤 Publish to Docker Hub

### Step 1: Tag the image
```bash
docker tag my-portfolio bharu2003/my-portfolio:latest
```

### Step 2: Push the image
```bash
docker push bharu2003/my-portfolio:latest
```

---

## 🧠 Diagrams
### 📌 1. Deployment Architecture

![web drawio](https://github.com/user-attachments/assets/b1b1984b-8483-40ec-aa21-d2a5d4c703cb)

---

## 🧪 Technologies Used

- HTML5 + CSS3 + JavaScript
- Docker + Nginx
- GitHub for version control
- Diagrams.net for architecture drawings

---

## 🤝 Contributing

Feel free to fork this repo, personalize it, and raise a pull request.

---
## 📬 Connect with Me

- **LinkedIn:** [Ambati Bhargavi](https://www.linkedin.com/in/ambatibhargavi/)
- **GitHub:** [@ambatibhargavi](https://github.com/ambatibhargavi)
- **Docker Hub:** [bharu2003](https://hub.docker.com/u/bharu2003)

---

> "Show, don't just tell. Let your website speak for your skills."

---

