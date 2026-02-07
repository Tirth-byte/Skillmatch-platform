# How to Run AI Skill Matcher

This project is built with **Node.js** (Next.js). Unlike Python, Node.js does not require a manual "virtual environment" creation (like `venv`). Instead, dependencies are installed locally into a `node_modules` folder, which acts as a self-contained environment for this project.

Below are the instructions for Windows and Linux.

---

## Prerequisites
Before starting, ensure you have **Node.js** installed.
- **Recommended version**: Node.js 18 or newer.
- Check if installed: `node -v`

If not installed, download it from [nodejs.org](https://nodejs.org/).

---

## 🟢 Windows Instructions

### Method 1: Using Command Prompt or PowerShell (Standard)

1. **Open your terminal** (Command Prompt or PowerShell) and navigate to the project folder:
   ```powershell
   cd "path\to\ai-skill-matcher"
   ```

2. **Install Dependencies** (This creates the local environment):
   ```powershell
   npm install
   ```
   *Note: This downloads all required libraries into the `node_modules` folder, keeping them valid only for this project.*

3. **Run the Development Server**:
   ```powershell
   npm run dev
   ```

4. **Access the App**:
   Open your browser and go to: `http://localhost:3000`

### Method 2: Using NVM for Windows (Advanced - recommended for strict version control)
If you want to ensure you are using a specific Node version (similar to a Python virtual environment):
1. Install [nvm-windows](https://github.com/coreybutler/nvm-windows).
2. Install the correct Node version: `nvm install 20`
3. Use that version: `nvm use 20`
4. Follow the install steps above.

---

## 🐧 Linux / macOS Instructions

### 1. Open Terminal and Navigate
Open your terminal and move to the project directory:
```bash
cd /path/to/ai-skill-matcher
```

### 2. Install Dependencies
Run the following command to install libraries locally (in `node_modules`):
```bash
npm install
```

### 3. Run the Development Server
Start the local server:
```bash
npm run dev
```

### 4. Access the App
Open your browser and visit: `http://localhost:3000`

---

## 🛠 Troubleshooting

- **Error: 'npm' is not recognized**: Ensure Node.js is installed and added to your PATH.
- **Error: EADDRINUSE**: Port 3000 is busy. The app will usually try port 3001 automatically, or you can kill the process using port 3000.
- **Environment Variables**: If features like Database or Auth fail, ensure you have created a `.env.local` file with the necessary secrets (refer to project documentation).
