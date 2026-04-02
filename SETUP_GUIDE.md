# Portfolio Deployment & Configuration Guide

## 1. EmailJS Setup (Contact Form Integration)

### Prerequisites:
- EmailJS account (sign up at https://dashboard.emailjs.com)

### Step-by-Step Setup:

**A. Create EmailJS Account & Service**
1. Sign up at https://dashboard.emailjs.com
2. Go to "Email Services" → Click "Add Service"
3. Choose an email provider (Gmail recommended)
4. Follow the provider setup instructions
5. Copy your **Service ID**

**B. Create Email Template**
1. Go to "Email Templates" → Click "Create New Template"
2. Use this template code:
```
Subject: New Contact from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from your portfolio website.
```
3. Copy your **Template ID**

**C. Get Public Key**
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

**D. Configure Environment Variables**
1. Open `.env.local` in your project
2. Replace with your actual values:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

**E. Test the Contact Form**
1. Run `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out the form and click "Send Message"
4. Check your email for the test message

---

## 2. Google Analytics Setup

### Prerequisites:
- Google Account

### Step-by-Step Setup:

**A. Create Google Analytics Property**
1. Go to https://analytics.google.com
2. Click "Create" or "Start measuring"
3. Set up your account:
   - Account name: "My Portfolio"
   - Website URL: (your Vercel URL, e.g., https://portfolio.vercel.app)
   - Industry: Technology
4. Click "Create"

**B. Get Measurement ID**
1. In the left sidebar, click "Admin"
2. Under "Data collection and modification", click "Data Streams"
3. Select "Web" from the dropdown
4. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

**C. Configure Environment Variables**
1. Open `.env.local`
2. Add your Measurement ID:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**D. Verify Installation**
1. Run `npm run dev`
2. Go to https://analytics.google.com
3. Go to "Real-time" → "Overview"
4. Visit http://localhost:3000 in your browser
5. You should see yourself as an active user within 1-2 minutes

---

## 3. Add Your CV File

### Step-by-Step Setup:

**A. Prepare Your CV File**
1. Locate your CV: `C:\Users\DELL\Downloads\CV LADJI MOUSSA OUATTARA.pdf`
2. Make a copy with a simpler filename: `CV_LADJI_MOUSSA_OUATTARA.pdf`

**B. Add to Public Folder**
1. Navigate to your project: `c:\Users\DELL\Desktop\PORTFOLIO`
2. Open the `public` folder
3. Paste your CV file there
4. The path should be: `c:\Users\DELL\Desktop\PORTFOLIO\public\CV_LADJI_MOUSSA_OUATTARA.pdf`

**C. Test Download**
1. Run `npm run dev`
2. Go to http://localhost:3000
3. Click "Download Resume" button
4. Verify the PDF downloads correctly

---

## 4. Vercel Deployment

### Prerequisites:
- GitHub account (for code hosting)
- Vercel account (sign up at https://vercel.com)

### Step-by-Step Setup:

**A. Prepare for GitHub**
1. Initialize git if not already done:
   ```bash
   cd c:\Users\DELL\Desktop\PORTFOLIO
   git init
   ```

2. Add all files:
   ```bash
   git add .
   ```

3. Create first commit:
   ```bash
   git commit -m "Initial portfolio setup with all features"
   ```

**B. Create GitHub Repository**
1. Go to https://github.com/new
2. Repository name: `portfolio` (or your preference)
3. Click "Create repository"
4. Follow the instructions to push your local code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

**C. Deploy to Vercel**
1. Go to https://vercel.com/new
2. Select "Import a Git Repository"
3. Paste your GitHub repository URL
4. Click "Import"
5. Configure project settings (usually auto-detected)
6. Click "Environment Variables" and add:
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your EmailJS public key
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = your EmailJS service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = your EmailJS template ID
   - `NEXT_PUBLIC_GA_ID` = your Google Analytics ID

7. Click "Deploy"
8. Wait for deployment to complete (~5 minutes)

**D. Connect Custom Domain (Optional)**
1. In Vercel dashboard, go to your project
2. Click "Domains"
3. Add your custom domain
4. Update DNS settings if using custom domain

**E. Verify Deployment**
1. Your portfolio is live at: `https://[your-project].vercel.app`
2. Test all features:
   - Navigate all pages
   - Test contact form (check your email)
   - Check Google Analytics (Real-time view)
   - Test resume download

---

## 5. Environment Variables Summary

Your `.env.local` file should look like:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

**Important:** 
- Keep `.env.local` private (it's in `.gitignore`)
- For Vercel, add these variables in the Vercel dashboard
- Never commit secrets to GitHub

---

## 6. Feature Completeness Checklist

✅ **Implemented Features:**
- [x] Dark mode toggle with theme persistence
- [x] Responsive navigation with mobile menu
- [x] Smooth animations and transitions
- [x] Testimonials section with star ratings
- [x] Skills gallery with progress bars
- [x] Resume/CV download button
- [x] Blog section with 4 sample articles
- [x] Journey timeline with milestones
- [x] Social share buttons (Twitter, LinkedIn, Facebook, WhatsApp, Copy Link)
- [x] Contact form with EmailJS integration
- [x] Google Analytics tracking
- [x] 3 GitHub projects integrated with live links
- [x] Mobile-responsive design
- [x] Deployment ready for Vercel

---

## 7. Troubleshooting

### EmailJS Not Working?
- Verify `.env.local` has correct credentials
- Check EmailJS dashboard for service/template setup
- Look at browser console for error messages
- Test with sample email in EmailJS dashboard

### Google Analytics Not Tracking?
- Verify `NEXT_PUBLIC_GA_ID` is set correctly
- Wait 24 hours for initial data to appear
- Check Google Analytics Real-time view
- Ensure you're not using ad blockers

### CV Download Not Working?
- Ensure PDF file is in `public` folder
- Check file naming: `CV_LADJI_MOUSSA_OUATTARA.pdf`
- Verify file has `.pdf` extension
- Try viewing public file directly: `/public/CV_LADJI_MOUSSA_OUATTARA.pdf`

### Build/Deployment Errors?
- Clear `node_modules`: `rm -r node_modules && npm install`
- Clear `.next`: `rm -r .next && npm run build`
- Check Node version: `node --version` (should be 18+)
- Review error messages carefully

---

## 8. What's Next?

**Suggested Enhancements:**
1. Add project screenshots/images (update `src/components/ProjectCard.tsx`)
2. Create individual blog post pages (expand `/blog` structure)
3. Add newsletter subscription
4. Implement comment system on blog posts
5. Add SEO metadata for each page
6. Create an admin dashboard for content updates
7. Add search functionality for blog posts
8. Implement dark mode preference detection

**Maintenance:**
- Keep dependencies updated: `npm update`
- Monitor Vercel analytics for performance
- Review Google Analytics monthly
- Update project information as needed
- Add new blog posts regularly

---

## 9. Quick Reference: Common Commands

```bash
# Local development
npm run dev              # Start dev server on http://localhost:3000

# Build
npm run build            # Create production build
npm run start            # Start production server

# Linting  
npm run lint             # Check for code issues

# Git
git add .                # Stage files
git commit -m "msg"      # Commit changes
git push                 # Push to GitHub
```

---

## 10. Neon Database (Admin Dashboard)

Use Neon to power the admin dashboard so you can edit blog posts, projects, and testimonials without touching code.

### A. Create a Neon Database
1. Create a Neon project at https://neon.tech
2. Copy your **Connection String**

### B. Add Environment Variable
1. Open `.env.local`
2. Add:
```
DATABASE_URL=your_neon_connection_string
```

### C. Create Tables
Run the SQL inside `db/schema.sql` in the Neon SQL editor.

### D. Visit the Admin Panel
Open:
```
http://localhost:3000/admin
```

---

## 11. Giscus Comments (Blog)

Enable GitHub-backed comments on blog posts using Giscus.

### A. Create a Giscus Discussion Category
1. Go to https://giscus.app
2. Choose your GitHub repo
3. Create a discussion category and copy:
   - Repo
   - Repo ID
   - Category
   - Category ID

### B. Add Environment Variables
Add these in `.env.local`:
```
NEXT_PUBLIC_GISCUS_REPO=owner/repo
NEXT_PUBLIC_GISCUS_REPO_ID=your_repo_id
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your_category_id
```

Restart the dev server after adding these.

---

## 12. SEO URL Configuration

Set your production URL so social sharing metadata points to the correct domain.

In `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

Use your real deployed URL in Vercel environment variables as well.

---

## 13. Admin Login Security

The `/admin` dashboard is now protected by login.

### A. Add Environment Variables
In `.env.local`, set:
```
ADMIN_PASSWORD=your_strong_password
ADMIN_SESSION_SECRET=a_long_random_secret_at_least_16_chars
```

### B. Restart Server
After adding these values, restart:
```
npm run dev
```

### C. Sign In
Visit:
```
http://localhost:3000/admin/login
```

Use your `ADMIN_PASSWORD` to access `/admin`.

---

## Questions or Issues?

If you encounter any problems:
1. Check this guide first
2. Review error messages in browser console
3. Check service dashboards (EmailJS, Google Analytics, Vercel)
4. Test in development mode first: `npm run dev`
5. Clear cache and rebuild: `rm -r .next && npm run build`
