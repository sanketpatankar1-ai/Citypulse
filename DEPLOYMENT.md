# Deployment Guide for CityPulse

To share CityPulse with your friends and keep it running online 24/7, follow these steps.

## Step 1: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new).
2. Open your terminal in the `citypulse` folder.
3. Run the following commands:
   ```bash
   git init
   git add .
   git commit -m "Prepare for deployment"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

## Step 2: Deploy Backend & Frontend (One-Click)
We have included a `render.yaml` file that makes deployment on **Render** extremely easy.

1. Go to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** and select **Blueprint**.
3. Connect your GitHub repository.
4. Render will automatically detect the services (Backend and Frontend).
5. Click **Apply**.

### Manual Setup (Alternative)
If you prefer manual setup (e.g., Vercel for Frontend):

#### Backend (Render/Railway/Heroku)
- **Repo Subfolder**: `backend`
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn app:app`
- **Env Var**: `PORT=10000`

#### Frontend (Vercel/Netlify)
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Env Var**: `VITE_API_BASE_URL=https://your-backend-url.onrender.com`

## Step 3: Share!
Once the build is complete, you will get a URL (e.g., `https://citypulse.onrender.com`). Send this link to your friends!

---
*Note: The Chatbot requires a Gemini API Key to function beyond mock mode. You can add it in `Chatbot.jsx` or as an environment variable.*
