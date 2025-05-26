# Data Structures Explorer

A React + Vite project for learning and building classic data structures from scratch, with interactive step-by-step walkthroughs and a built-in code editor.

## 🚀 Local Development Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd data-form/client
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal (usually [http://localhost:5173/](http://localhost:5173/)) in your browser.

## 📁 Project Structure

- `src/` — React source code (components, walkthroughs, etc.)
- `public/` — Static assets
- `README.md` — Project documentation

## 🛠️ Useful Commands

- **Install a new package:**  
  `npm install <package-name>`
- **Build for production:**  
  `npm run build`

## 📝 Additional Notes

- This project uses [@monaco-editor/react](https://github.com/suren-atoyan/monaco-react) for the code editor.
- Routing is handled by [react-router-dom](https://reactrouter.com/).
- For code formatting and linting, configure ESLint and Prettier as needed.

## 📚 About

Click a data structure to get a step-by-step walkthrough and build it interactively in the code editor!

## 🐳 Docker Usage

You can build and run the app in a Docker container for easy deployment or local testing.

### 1. Build the Docker Image

From the `client` directory:

```bash
cd client
docker build -t code-form .
```

Or from the project root:

```bash
docker build -t code-form -f client/Dockerfile client
```

### 2. Run the Docker Container

```bash
docker run -p 8080:80 code-form
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

---

**Note:**  
The Dockerfile builds the app and serves it using Nginx.  
Make sure Docker is installed and running on your machine.

## 🌐 Deployment

This project can be deployed to a DigitalOcean Droplet using the provided GitHub Actions workflow.

### GitHub Actions Workflow

The following is an example workflow for deploying to a DigitalOcean Droplet via SSH:

```yaml
name: Deploy to DigitalOcean Droplet

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.DO_HOST }}
          username: root
          key: ${{ secrets.DO_SSH_KEY }}
          script: |
            cd /root/data-form/client
            git pull origin main
            docker build -t code-form .
            docker stop code-form || true
            docker rm code-form || true
            docker run -d --name code-form -p 80:80 code-form
```

### Secrets

Make sure to add the following secrets to your GitHub repository:

- `DO_SSH_KEY`: Your SSH private key for accessing the Droplet.
- `DO_HOST`: The IP address or hostname of your DigitalOcean Droplet.

### Notes

- The workflow checks out the code, sets up SSH, and optionally copies files to the Droplet.
- It then deploys the application by pulling the latest code, building the Docker image, and restarting the Docker container.