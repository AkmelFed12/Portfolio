# My Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic dark mode detection with manual toggle option
- **Modern Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4
- **Portfolio Sections**:
  - **Home**: Hero section with featured projects and skills overview
  - **Projects**: Gallery of all projects with descriptions and tech stacks
  - **About**: Personal bio, experience, education, and interests
  - **Contact**: Contact form and social media links
- **Performance Optimized**: Static generation for fast page loads
- **SEO Ready**: Optimized metadata and semantic HTML

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── projects/
│   │   └── page.tsx       # Projects page
│   ├── contact/
│   │   └── page.tsx       # Contact page
│   ├── layout.tsx         # Root layout with navigation and footer
│   └── globals.css        # Global styles
└── components/
    ├── Navbar.tsx         # Navigation component
    ├── Footer.tsx         # Footer component
    └── ProjectCard.tsx    # Project card component
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Navigate to the project directory:
   ```bash
   cd c:\Users\DELL\Desktop\PORTFOLIO
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Customization

### Update Personal Information

1. **Home Page** (`src/app/page.tsx`):
   - Update hero section text
   - Modify featured projects array
   - Edit skills and technologies

2. **About Page** (`src/app/about/page.tsx`):
   - Replace placeholder story with your bio
   - Update experience section with your work history
   - Add your education information
   - Modify interests and achievements

3. **Projects Page** (`src/app/projects/page.tsx`):
   - Add/remove projects in the projects array
   - Update project descriptions, tech stacks, and links

4. **Contact Page** (`src/app/contact/page.tsx`):
   - Update contact information (email, phone, location)
   - Replace social media links with your profiles
   - Integrate with your email service for form submissions

5. **Navigation** (`src/components/Navbar.tsx`):
   - Update brand name in the navbar
   - Modify navigation links if needed

6. **Footer** (`src/components/Footer.tsx`):
   - Update copyright year and information
   - Add/remove social media links

### Update Styling

- Tailwind CSS classes are used throughout the project
- Edit `src/app/globals.css` for global styles
- Modify the Tailwind config in `tailwind.config.ts` if needed

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy your project

### Deploy on Other Platforms

The project can be deployed to any platform that supports Node.js:
- Netlify
- GitHub Pages (with static export)
- AWS
- Azure
- Google Cloud

## Technologies Used

- **Next.js 16**: React framework for production
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **ESLint**: Code quality tool

## Best Practices Implemented

- Server and client components appropriately separated
- Responsive design using Tailwind's breakpoints
- Semantic HTML for better accessibility
- Light and dark mode support
- Mobile-first approach
- Clean and organized component structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or suggestions, please reach out through the contact page.

---

**Built with ❤️ using Next.js**
