# Quick Setup Guide

## 📸 Adding Your Profile Picture

### Step 1: Add Your Image

1. Place your professional profile picture in the `public` folder
2. Recommended name: `profile.jpeg` or `profile.png`
3. Recommended size: 500x500px or larger (square aspect ratio)

### Step 2: Update the Hero Component

Open `src/components/Hero.tsx` and find this section (around line 140):

```jsx
{
  /* Placeholder for profile picture */
}
<div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 flex items-center justify-center">
  {/* If you don't have a profile picture yet, this will show a nice icon */}
  <svg
    className="w-48 h-48 text-white opacity-80"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>

  {/* Uncomment this and replace with your actual image */}
  {/* <img 
    src="/profile.jpg" 
    alt="Profile" 
    className="w-full h-full object-cover"
  /> */}
</div>;
```

### Step 3: Uncomment and Update

Replace the entire div content with:

```jsx
<div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 flex items-center justify-center">
  <img
    src="/profile.jpg"
    alt="Your Name - Software Engineer"
    className="w-full h-full object-cover"
  />
</div>
```

**Note:** If your image has a different name or extension, update the `src` attribute accordingly (e.g., `/profile.png`, `/my-photo.jpg`, etc.)

---

## 📄 Adding Your Resume

### Step 1: Prepare Your Resume

1. Save your resume as a PDF file
2. Name it `resume.pdf`
3. Place it in the `public` folder (replacing the placeholder file)

### Step 2: That's It!

The "Download Resume" button is already configured to download `/resume.pdf` from the public folder. No code changes needed!

### Optional: Custom Resume Name

If you want to use a different filename:

1. Update the href in `src/components/Hero.tsx` (around line 37):

```jsx
<a
  href="/your-custom-name.pdf"  // Change this
  download
  className="..."
>
```

---

## 🎨 Customizing Colors

The website uses a blue/indigo color scheme. To change it:

### Primary Color (Blue)

Find and replace these Tailwind classes throughout the components:

- `blue-600` → your color choice (e.g., `purple-600`, `green-600`)
- `blue-500` → adjust accordingly
- `blue-50` → for backgrounds

### Example: Change to Purple Theme

- `bg-blue-600` → `bg-purple-600`
- `text-blue-600` → `text-purple-600`
- `border-blue-600` → `border-purple-600`
- `from-blue-50` → `from-purple-50`

---

## ✏️ Updating Text Content

### Hero Section

- **Title:** Line 21 in `src/components/Hero.tsx`
- **Subtitle:** Lines 25-28

### About Section

- **Bio paragraphs:** Lines 16-31 in `src/components/About.tsx`
- **Stats:** Lines 35-58 (modify numbers and labels)

### Contact Info

- **Email:** Line 53 in `src/components/Contact.tsx`
- **Phone:** Line 71
- **Location:** Line 89

---

## 🔗 Social Media Links

Update your social media URLs in:

1. **Hero Section** (`src/components/Hero.tsx`): Lines 50-83
2. **Contact Section** (`src/components/Contact.tsx`): Lines 92-113

Replace:

- `https://github.com` → your GitHub URL
- `https://linkedin.com` → your LinkedIn URL
- `https://twitter.com` → your Twitter/X URL

---

## 🚀 Deployment Tips

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Option 3: GitHub Pages

```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

---

## 📝 Final Checklist

- [ ] Add profile picture to `public` folder
- [ ] Update `src/components/Hero.tsx` to use your image
- [ ] Replace `public/resume.pdf` with your resume
- [ ] Update all social media links
- [ ] Customize About section with your bio
- [ ] Add your projects to Projects section
- [ ] Update Experience and Education sections
- [ ] Modify Skills to match your expertise
- [ ] Update contact information
- [ ] Test the download resume button
- [ ] Test all links and navigation
- [ ] Build the project: `npm run build`
- [ ] Deploy to your hosting platform

---

**Need help?** Check the main README.md for more detailed information!
