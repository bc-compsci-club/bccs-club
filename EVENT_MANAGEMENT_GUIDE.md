# BCCS Club Event Management System - Complete Guide

This guide covers the complete process of adding events to the BCCS Club calendar system.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Starting Backend API](#starting-backend-api)
4. [Starting Frontend](#starting-frontend)
5. [Adding Events](#adding-events)
6. [Troubleshooting](#troubleshooting)
7. [Production Deployment](#production-deployment)

---

## 🛠 Prerequisites

Before running the system, you need to install the following software:

### Required Software

#### 🍎 **macOS**

1. **Homebrew** (package manager)
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Docker Desktop**
   ```bash
   brew install --cask docker
   ```

3. **Maven**
   ```bash
   brew install maven
   ```

4. **Node.js and npm**
   ```bash
   brew install node
   ```

5. **Python 3**
   ```bash
   brew install python
   ```

6. **Git** (usually already installed)
   ```bash
   brew install git
   ```

#### 🐧 **Linux (Ubuntu/Debian)**

1. **Update package list**
   ```bash
   sudo apt update
   ```

2. **Docker Desktop**
   ```bash
   # Install Docker
   sudo apt install docker.io docker-compose
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER
   # Log out and log back in
   ```

3. **Maven**
   ```bash
   sudo apt install maven
   ```

4. **Node.js and npm**
   ```bash
   # Install Node.js 18+
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install nodejs
   ```

5. **Python 3**
   ```bash
   sudo apt install python3 python3-pip python3-venv
   ```

6. **Git**
   ```bash
   sudo apt install git
   ```

#### 🪟 **Windows**

1. **Package Manager (Chocolatey)**
   ```powershell
   # Run PowerShell as Administrator
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

2. **Docker Desktop**
   ```powershell
   choco install docker-desktop
   # Or download from: https://www.docker.com/products/docker-desktop
   ```

3. **Maven**
   ```powershell
   choco install maven
   ```

4. **Node.js and npm**
   ```powershell
   choco install nodejs
   ```

5. **Python 3**
   ```powershell
   choco install python
   ```

6. **Git**
   ```powershell
   choco install git
   ```

**Alternative for Windows:** Use Windows Subsystem for Linux (WSL2) and follow Linux instructions.

### Installation Verification

Verify that all software is correctly installed:

#### 🍎 **macOS / 🐧 Linux**
```bash
# Docker
docker --version

# Maven
mvn --version

# Node.js
node --version
npm --version

# Python
python3 --version

# Git
git --version
```

#### 🪟 **Windows (PowerShell/CMD)**
```powershell
# Docker
docker --version

# Maven
mvn --version

# Node.js
node --version
npm --version

# Python
python --version

# Git
git --version
```

---

## 🚀 Installation

### 1. Clone the Repository

#### 🍎 **macOS / 🐧 Linux**
```bash
git clone https://github.com/bc-compsci-club/bccs-club.git
cd bccs-club
```

#### 🪟 **Windows (PowerShell/CMD)**
```powershell
git clone https://github.com/bc-compsci-club/bccs-club.git
cd bccs-club
```

### 2. Create Python Virtual Environment

#### 🍎 **macOS / 🐧 Linux**
```bash
cd scripts
python3 -m venv myenv
source myenv/bin/activate
pip install -r requirements.txt
cd ..
```

#### 🪟 **Windows (PowerShell)**
```powershell
cd scripts
python -m venv myenv
myenv\Scripts\Activate.ps1
pip install -r requirements.txt
cd ..
```

#### 🪟 **Windows (CMD)**
```cmd
cd scripts
python -m venv myenv
myenv\Scripts\activate.bat
pip install -r requirements.txt
cd ..
```

### 3. Install Frontend Dependencies

#### 🍎 **macOS / 🐧 Linux / 🪟 Windows**
```bash
cd frontend
npm install
cd ..
```

---

## 🖥 Starting Backend API

### 1. Navigate to API Directory

#### 🍎 **macOS / 🐧 Linux**
```bash
cd api
```

#### 🪟 **Windows**
```powershell
cd api
```

### 2. Start Docker Desktop

#### 🍎 **macOS**
- Open Docker Desktop from Applications folder
- Wait until Docker icon appears in system tray

#### 🐧 **Linux**
```bash
sudo systemctl start docker
# Verify Docker is running
sudo systemctl status docker
```

#### 🪟 **Windows**
- Open Docker Desktop from Start Menu
- Wait until Docker Desktop shows "Engine running"

### 3. Start Backend with Docker Compose

#### 🍎 **macOS / 🐧 Linux / 🪟 Windows**
```bash
# Detached mode (background)
docker-compose up -d

# Or normal mode (to see logs)
docker-compose up
```

### 4. Verify API is Running

#### 🍎 **macOS / 🐧 Linux**
```bash
# Visit in browser: http://localhost:8090/v1/calendar/events
# Or in terminal:
curl http://localhost:8090/v1/calendar/events
```

#### 🪟 **Windows (PowerShell)**
```powershell
# Visit in browser: http://localhost:8090/v1/calendar/events
# Or in PowerShell:
Invoke-RestMethod http://localhost:8090/v1/calendar/events
```

If successful, it returns `[]` (empty list).

### 5. API Documentation

Visit in browser (all platforms):
```
http://localhost:8090/swagger-ui/index.html
```

#### Available API Endpoints:

**Event Controller:**
- 🔵 **GET** `/v1/calendar/events` - Get all events
- 🟢 **POST** `/v1/calendar/events` - Create new event
- 🔵 **GET** `/v1/calendar/events/{id}` - Get event by ID
- 🟠 **PUT** `/v1/calendar/events/{id}` - Update event
- 🟢 **PATCH** `/v1/calendar/events/{id}` - Partially update event
- 🔴 **DELETE** `/v1/calendar/events/{id}` - Delete event
- 🔵 **GET** `/v1/calendar/events/slug/{slug}` - Get event by slug

**Base URL:** `http://localhost:8090` (development) or `https://api.bccs.club` (production)

**⚠️ Note:** The production root URL `https://api.bccs.club` returns a 500 error (this is normal - no root handler defined). Use the full endpoint paths like `/v1/calendar/events`.

---

## 🌐 Starting Frontend

### 1. Set Environment Variable

#### 🍎 **macOS / 🐧 Linux**
```bash
cd frontend
echo "BACKEND_URL=http://localhost:8090" > .env.local
```

#### 🪟 **Windows (PowerShell)**
```powershell
cd frontend
"BACKEND_URL=http://localhost:8090" | Out-File -FilePath .env.local -Encoding utf8
```

#### 🪟 **Windows (CMD)**
```cmd
cd frontend
echo BACKEND_URL=http://localhost:8090 > .env.local
```

### 2. Start Frontend

#### 🍎 **macOS / 🐧 Linux / 🪟 Windows**
```bash
npm run dev
```

Frontend will run at: `http://localhost:3000` (or `http://localhost:3001` if port is busy)

### 3. Check Events Page

In browser (all platforms): `http://localhost:3000/events` (or whatever port is used)

---

## 📅 Adding Events

### 1. Navigate to Scripts Directory and Activate Virtual Environment

#### 🍎 **macOS / 🐧 Linux**
```bash
cd scripts
source myenv/bin/activate
```

#### 🪟 **Windows (PowerShell)**
```powershell
cd scripts
myenv\Scripts\Activate.ps1
```

#### 🪟 **Windows (CMD)**
```cmd
cd scripts
myenv\Scripts\activate.bat
```

### 2. Adding Single Event

#### 🍎 **macOS / 🐧 Linux**
```bash
python3 dynamic_update_calendar.py \
  --api-url http://localhost:8090/v1/calendar/events \
  --start-date 2025-11-15 \
  --end-date 2025-11-15 \
  --start-time 14:00 \
  --end-time 15:30 \
  --weekdays SA \
  --title "Python Workshop: Flask Web Development" \
  --description "Learn how to build web applications using Flask framework" \
  --location "Room 0317, Ingersoll Hall (basement)" \
  --rsvp-link "https://forms.gle/example"
```

#### 🪟 **Windows (PowerShell)**
```powershell
python dynamic_update_calendar.py `
  --api-url http://localhost:8090/v1/calendar/events `
  --start-date 2025-11-15 `
  --end-date 2025-11-15 `
  --start-time 14:00 `
  --end-time 15:30 `
  --weekdays SA `
  --title "Python Workshop: Flask Web Development" `
  --description "Learn how to build web applications using Flask framework" `
  --location "Room 0317, Ingersoll Hall (basement)" `
  --rsvp-link "https://forms.gle/example"
```

#### 🪟 **Windows (CMD)**
```cmd
python dynamic_update_calendar.py ^
  --api-url http://localhost:8090/v1/calendar/events ^
  --start-date 2025-11-15 ^
  --end-date 2025-11-15 ^
  --start-time 14:00 ^
  --end-time 15:30 ^
  --weekdays SA ^
  --title "Python Workshop: Flask Web Development" ^
  --description "Learn how to build web applications using Flask framework" ^
  --location "Room 0317, Ingersoll Hall (basement)" ^
  --rsvp-link "https://forms.gle/example"
```

### 3. Recurring Events

#### 🍎 **macOS / 🐧 Linux**
```bash
python3 dynamic_update_calendar.py \
  --api-url http://localhost:8090/v1/calendar/events \
  --start-date 2025-11-01 \
  --end-date 2025-12-13 \
  --start-time 17:00 \
  --end-time 18:30 \
  --weekdays TU WE TH \
  --title "Club Hours" \
  --description "Join us for coding, collaboration, and community!" \
  --location "Room 0317, Ingersoll Hall (basement)" \
  --rsvp-link "https://forms.gle/clubhours"
```

#### 🪟 **Windows (PowerShell)**
```powershell
python dynamic_update_calendar.py `
  --api-url http://localhost:8090/v1/calendar/events `
  --start-date 2025-11-01 `
  --end-date 2025-12-13 `
  --start-time 17:00 `
  --end-time 18:30 `
  --weekdays TU WE TH `
  --title "Club Hours" `
  --description "Join us for coding, collaboration, and community!" `
  --location "Room 0317, Ingersoll Hall (basement)" `
  --rsvp-link "https://forms.gle/clubhours"
```

#### 🪟 **Windows (CMD)**
```cmd
python dynamic_update_calendar.py ^
  --api-url http://localhost:8090/v1/calendar/events ^
  --start-date 2025-11-01 ^
  --end-date 2025-12-13 ^
  --start-time 17:00 ^
  --end-time 18:30 ^
  --weekdays TU WE TH ^
  --title "Club Hours" ^
  --description "Join us for coding, collaboration, and community!" ^
  --location "Room 0317, Ingersoll Hall (basement)" ^
  --rsvp-link "https://forms.gle/clubhours"
```

### 4. Event Parameters

**Required Parameters:**
- `--api-url`: API endpoint URL
- `--start-date`: Start date (YYYY-MM-DD)
- `--end-date`: End date (YYYY-MM-DD)
- `--start-time`: Event start time (HH:MM)
- `--end-time`: Event end time (HH:MM)
- `--weekdays`: Days of the week (MO TU WE TH FR SA SU)
- `--title`: Event title
- `--description`: Event description
- `--location`: Event location

**Optional Parameters:**
- `--rsvp-link`: RSVP link
- `--flier-link`: Flyer/poster link

### 5. Weekday Codes

- `MO` = Monday
- `TU` = Tuesday
- `WE` = Wednesday
- `TH` = Thursday
- `FR` = Friday
- `SA` = Saturday
- `SU` = Sunday

### 6. Event Verification

After adding an event, verify it:

#### 🍎 **macOS / 🐧 Linux**
```bash
# Check via API (Development)
curl http://localhost:8090/v1/calendar/events

# Check via API (Production)
curl https://api.bccs.club/v1/calendar/events

# Check via Frontend
# In browser: http://localhost:3000/events
```

#### 🪟 **Windows (PowerShell)**
```powershell
# Check via API (Development)
Invoke-RestMethod http://localhost:8090/v1/calendar/events

# Check via API (Production)
Invoke-RestMethod https://api.bccs.club/v1/calendar/events

# Check via Frontend
# In browser: http://localhost:3000/events
```

### 7. Example Commands

#### Development Event Example
```bash
# macOS/Linux
python3 dynamic_update_calendar.py \
  --api-url http://localhost:8090/v1/calendar/events \
  --start-date 2025-11-15 \
  --end-date 2025-11-15 \
  --start-time 14:00 \
  --end-time 15:30 \
  --weekdays FR \
  --title "Test Event - Local Development" \
  --description "This is a test event for local development" \
  --location "Room 0317, Ingersoll Hall (basement)"
```

#### Production Event Example
```bash
# macOS/Linux
python3 dynamic_update_calendar.py \
  --api-url https://api.bccs.club/v1/calendar/events \
  --start-date 2025-11-15 \
  --end-date 2025-11-15 \
  --start-time 14:00 \
  --end-time 15:30 \
  --weekdays FR \
  --title "AI Workshop: ChatGPT for Developers" \
  --description "Learn how to integrate AI tools into your development workflow" \
  --location "Room 0317, Ingersoll Hall (basement)" \
  --rsvp-link "https://forms.gle/aiworkshop2025"
```

---

## 🎨 Event Color Coding

Events are automatically color-coded in the calendar:

- **Bloomberg events** → 🟣 Purple
- **Girls Who Code/GWC** → 🩷 Pink
- **Fundraiser/Bake Sale** → 🟡 Yellow
- **Tech Talks** → 🔴 Red
- **Info Sessions** → 🟢 Teal
- **Google Cloud/GDG** → 🔵 Blue
- **Workshops/Interview Prep** → 🟣 Purple
- **Tuesday Club Hours** → 🟢 Green (special)

---

## 🔌 Direct API Usage

If you prefer to use the API directly instead of the Python script:

### Create Event (POST)

#### 🍎 **macOS / 🐧 Linux**
```bash
curl -X POST http://localhost:8090/v1/calendar/events \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Workshop: React Fundamentals",
    "description": "Learn the basics of React development",
    "location": "Room 0317, Ingersoll Hall",
    "startTime": "2025-11-20T14:00:00",
    "endTime": "2025-11-20T16:00:00",
    "isActive": true,
    "rsvpLink": "https://forms.gle/example",
    "flierLink": ""
  }'
```

#### 🪟 **Windows (PowerShell)**
```powershell
Invoke-RestMethod -Uri http://localhost:8090/v1/calendar/events `
  -Method POST `
  -ContentType "application/json" `
  -Body @'
{
  "title": "Workshop: React Fundamentals",
  "description": "Learn the basics of React development",
  "location": "Room 0317, Ingersoll Hall",
  "startTime": "2025-11-20T14:00:00",
  "endTime": "2025-11-20T16:00:00",
  "isActive": true,
  "rsvpLink": "https://forms.gle/example",
  "flierLink": ""
}
'@
```

### Get All Events (GET)

#### 🍎 **macOS / 🐧 Linux**
```bash
curl http://localhost:8090/v1/calendar/events
```

#### 🪟 **Windows (PowerShell)**
```powershell
Invoke-RestMethod http://localhost:8090/v1/calendar/events
```

### Get Event by ID (GET)

#### 🍎 **macOS / 🐧 Linux**
```bash
curl http://localhost:8090/v1/calendar/events/1
```

#### 🪟 **Windows (PowerShell)**
```powershell
Invoke-RestMethod http://localhost:8090/v1/calendar/events/1
```

### Update Event (PUT)

#### 🍎 **macOS / 🐧 Linux**
```bash
curl -X PUT http://localhost:8090/v1/calendar/events/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Workshop Title",
    "description": "Updated description",
    "location": "Room 0317, Ingersoll Hall",
    "startTime": "2025-11-20T14:00:00",
    "endTime": "2025-11-20T16:00:00",
    "isActive": true,
    "rsvpLink": "https://forms.gle/updated",
    "flierLink": ""
  }'
```

### Delete Event (DELETE)

#### 🍎 **macOS / 🐧 Linux**
```bash
curl -X DELETE http://localhost:8090/v1/calendar/events/1
```

#### 🪟 **Windows (PowerShell)**
```powershell
Invoke-RestMethod -Uri http://localhost:8090/v1/calendar/events/1 -Method DELETE
```

---

## 🔧 Troubleshooting

### Backend API Won't Start

#### 🍎 **macOS / 🐧 Linux**
```bash
# Check Docker services
docker ps

# Check Docker logs
docker-compose logs

# Check port usage
lsof -i :8090
```

#### 🪟 **Windows (PowerShell)**
```powershell
# Check Docker services
docker ps

# Check Docker logs
docker-compose logs

# Check port usage
netstat -an | findstr :8090
```

### Frontend Won't Start

#### 🍎 **macOS / 🐧 Linux / 🪟 Windows**
```bash
# Reinstall node modules
rm -rf node_modules package-lock.json
npm install

# Check port usage (macOS/Linux)
lsof -i :3000

# Check port usage (Windows PowerShell)
netstat -an | findstr :3000
```

### Environment Variable Error

Check that `.env.local` file is created correctly:

#### 🍎 **macOS / 🐧 Linux**
```bash
cat frontend/.env.local
```

#### 🪟 **Windows (PowerShell)**
```powershell
Get-Content frontend/.env.local
```

#### 🪟 **Windows (CMD)**
```cmd
type frontend\.env.local
```

### Python Script Error

#### 🍎 **macOS / 🐧 Linux**
```bash
# Is virtual environment active?
which python3

# Are dependencies installed?
pip list
```

#### 🪟 **Windows (PowerShell)**
```powershell
# Is virtual environment active?
Get-Command python

# Are dependencies installed?
pip list
```

### Event Not Sending

#### 🍎 **macOS / 🐧 Linux**
```bash
# Is API running?
curl http://localhost:8090/v1/calendar/events

# Are you using correct date format?
# Example: 2025-11-15 (YYYY-MM-DD)
```

#### 🪟 **Windows (PowerShell)**
```powershell
# Is API running?
Invoke-RestMethod http://localhost:8090/v1/calendar/events

# Are you using correct date format?
# Example: 2025-11-15 (YYYY-MM-DD)
```

---

## 🌍 Production Deployment

### Production API URLs

- **Full API Base:** `https://api.bccs.club`
- **Events Endpoint:** `https://api.bccs.club/v1/calendar/events`
- **API Documentation:** `https://api.bccs.club/swagger-ui/index.html`

**⚠️ Important:** The root URL `https://api.bccs.club` returns a 500 error (this is normal). Always use full endpoint paths.

### Environment Files

**Development (.env.local):**
#### 🍎 **macOS / 🐧 Linux**
```bash
BACKEND_URL=http://localhost:8090
```

#### 🪟 **Windows**
```
BACKEND_URL=http://localhost:8090
```

**Production (.env.production):**
#### All Platforms
```bash
BACKEND_URL=https://api.bccs.club
```

### Deployment Options

1. **Vercel + Railway** (Recommended)
   - Frontend → Vercel
   - Backend → Railway
   - Database → Railway PostgreSQL

2. **Docker Deployment**
   #### 🍎 **macOS / 🐧 Linux**
   ```bash
   cd deployment/api-deployment
   sudo docker-compose -f docker-compose.prod.yml up -d
   ```
   
   #### 🪟 **Windows (PowerShell as Administrator)**
   ```powershell
   cd deployment/api-deployment
   docker-compose -f docker-compose.prod.yml up -d
   ```

---

## 📝 Useful Commands

### Docker

#### 🍎 **macOS / 🐧 Linux / 🪟 Windows**
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# List containers
docker ps
```

### Git

#### 🍎 **macOS / 🐧 Linux / 🪟 Windows**
```bash
# Commit changes
git add .
git commit -m "Add new events"
git push origin main
```

### Development

#### 🍎 **macOS / 🐧 Linux**
```bash
# Restart backend
cd api && docker-compose restart

# Restart frontend
cd frontend && npm run dev

# View all events
curl http://localhost:8090/v1/calendar/events | jq
```

#### 🪟 **Windows (PowerShell)**
```powershell
# Restart backend
cd api; docker-compose restart

# Restart frontend
cd frontend; npm run dev

# View all events
Invoke-RestMethod http://localhost:8090/v1/calendar/events | ConvertTo-Json
```