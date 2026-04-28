# EasyBrandLabs - White-Label Digital Services Platform

A production-ready Next.js website for a white-label digital services Brand. Built with modern best practices for performance, SEO, and user experience.

## Features

✅ **Next.js 14** with App Router  
✅ **TypeScript** for type safety  
✅ **Tailwind CSS** for styling  
✅ **Responsive Design** (Mobile-first)  
✅ **SEO Optimized** with meta tags and OpenGraph  
✅ **Fast Performance** (~90+ Lighthouse score)  
✅ **Contact Form** with validation  
✅ **Reusable Components** (Button, Card, Section, etc.)  
✅ **Smooth Animations** and transitions  
✅ **Dark Mode Support** ready  
✅ **No External Paid Dependencies**  

## Pages Included

- **Home** - Hero, services, how it works, testimonials, FAQ, CTA
- **Services** - Detailed service descriptions with benefits and deliverables
- **How It Works** - Step-by-step process, timeline, why choose us
- **Pricing** - 3 pricing tiers with feature comparison
- **About** - Brand story, mission, values, team philosophy
- **Contact** - Contact form with validation, other contact methods, FAQ

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── globals.css         # Global Tailwind styles
│   ├── page.tsx            # Home page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── how-it-works/
│   │   └── page.tsx        # How it works page
│   ├── pricing/
│   │   └── page.tsx        # Pricing page
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact page
│
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── Footer.tsx          # Footer with links
│   ├── Button.tsx          # Reusable button component
│   ├── Card.tsx            # Reusable card component
│   ├── Section.tsx         # Section wrapper with padding
│   └── ContactForm.tsx     # Contact form with validation

public/                      # Static assets
tailwind.config.js          # Tailwind configuration
tsconfig.json               # TypeScript configuration
next.config.js              # Next.js configuration
package.json                # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. **Clone or extract the project**

```bash
cd easybrandlab
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Open in browser**

Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
```

## Customization Guide

### Update Brand Information

Edit `src/components/Navbar.tsx` and `src/components/Footer.tsx`:
- Replace "EasyBrandLabs" with your company name
- Update logo and colors

### Modify Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#3b82f6',    // Change to your primary color
  secondary: '#1e293b',  // Change to your secondary color
}
```

### Add Your Content

1. **Home Page** - Edit `src/app/page.tsx`
   - Update hero text
   - Modify services list
   - Change testimonials

2. **Services Page** - Edit `src/app/services/page.tsx`
   - Update service descriptions
   - Add/remove service tiers

3. **Pricing Page** - Edit `src/app/pricing/page.tsx`
   - Update pricing tiers
   - Modify features

4. **Contact Page** - Edit `src/app/contact/page.tsx`
   - Update contact information
   - Change email/phone

### Form Handling

The contact form in `src/components/ContactForm.tsx` currently shows a mock success state. To integrate with a real backend:

**Option 1: Server Action**
```typescript
// Create src/app/actions.ts
'use server'

export async function submitContact(formData: FormData) {
  // Handle form submission
}
```

**Option 2: API Route**
```typescript
// Create src/app/api/contact/route.ts
export async function POST(request: Request) {
  // Handle form submission
}
```

**Option 3: Third-party Service**
- Use Netlify Forms
- Integrate with EmailJS
- Connect to Zapier
- Use Formspree

### Add favicon

Place favicon.ico in the `public/` folder:
```bash
public/favicon.ico
```

## Performance Optimization

- **Images**: Use Next.js Image component for optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Fonts**: System fonts (no external font files)
- **CSS**: Tailwind purges unused CSS

### Lighthouse Scores

Target metrics:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

Run audit: `Ctrl+Shift+I` (Chrome DevTools)

## SEO Setup

### Meta Tags
Update in `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  keywords: 'your, keywords',
};
```

### Sitemap
Next.js automatically generates `/sitemap.xml`

### robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /api/
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables (if needed)
4. Deploy!

```bash
npm run build
```

### Deploy to Other Platforms

**Netlify**
```bash
npm run build
# Deploy 'out' folder
```

**GitHub Pages**
```bash
npm run build
# Push to gh-pages branch
```

## Environment Variables

Create `.env.local`:
```env
# Add any environment variables here
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Best Practices Applied

✅ Semantic HTML  
✅ Mobile-first responsive design  
✅ Accessibility (WCAG 2.1)  
✅ Performance optimization  
✅ SEO best practices  
✅ Component reusability  
✅ Type safety with TypeScript  
✅ Clean code structure  
✅ No external paid libraries  
✅ Progressive enhancement  

## Customization Examples

### Change Primary Color
```css
/* tailwind.config.js */
primary: '#8b5cf6',  // Purple
```

### Add Animation
```css
/* globals.css */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Create New Page
```typescript
// src/app/new-page/page.tsx
import { Section } from '@/components/Section';

export default function NewPage() {
  return (
    <Section>
      <h1>New Page</h1>
    </Section>
  );
}
```

## Troubleshooting

**Port 3000 already in use**
```bash
npm run dev -- -p 3001
```

**Clear cache and rebuild**
```bash
rm -rf .next
npm run build
npm run dev
```

**TypeScript errors**
```bash
npx tsc --noEmit
```

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## License

This project is provided as-is. Feel free to modify and use for your business.

---

**Ready to deploy?** Push to GitHub and deploy to Vercel in minutes!