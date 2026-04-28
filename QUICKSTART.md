# 🚀 Quick Start Guide - EasyBrandLabs

## Installation & Setup (5 minutes)

### Step 1: Install Dependencies
```bash
cd /Users/adamibraheem/easybrandlab
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:3000**

---

## Project Overview

### 📁 What's Included

- ✅ **6 Complete Pages** (Home, Services, How It Works, Pricing, About, Contact)
- ✅ **7 Reusable Components** (Navbar, Footer, Button, Card, Section, ContactForm, etc.)
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Responsive Design** (mobile-first)
- ✅ **Form Validation** (contact form)
- ✅ **SEO Optimized** (meta tags, OpenGraph)
- ✅ **Production Ready** (no junk content)

### 📄 Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, services showcase, testimonials |
| Services | `/services` | Detailed service descriptions |
| How It Works | `/how-it-works` | Process explanation |
| Pricing | `/pricing` | 3 pricing tiers with comparison |
| About | `/about` | Company story and values |
| Contact | `/contact` | Contact form and info |

---

## Customization (10-30 minutes)

### 1. **Change Company Name & Branding**

Edit `src/components/Navbar.tsx` (line ~11):
```typescript
<span className="text-xl font-bold text-slate-900">YourBrandName</span>
```

Edit `src/components/Footer.tsx` (line ~24):
```typescript
<span className="font-bold text-slate-900">YourBrandName</span>
```

### 2. **Update Colors**

Edit `tailwind.config.js` (line ~11):
```javascript
colors: {
  primary: '#your-hex-color',    // e.g., '#8b5cf6' for purple
  secondary: '#your-hex-color',
  accent: '#your-hex-color',
},
```

### 3. **Update Hero Text**

Edit `src/app/page.tsx` (line ~65):
```typescript
<h1>Your Headline Here</h1>
<p>Your subheadline here</p>
```

### 4. **Update Services**

Edit `src/app/page.tsx` (line ~10):
```typescript
const services = [
  {
    title: 'Your Service',
    description: 'Your description',
    icon: '🎯',
  },
  // Add more services
];
```

### 5. **Update Pricing**

Edit `src/app/pricing/page.tsx` (line ~10):
```typescript
const pricingTiers = [
  {
    name: 'Starter',
    monthlyPrice: '$X,XXX',  // Your price
    features: [/* your features */],
  },
  // Update all 3 tiers
];
```

### 6. **Update Contact Info**

Edit `src/app/contact/page.tsx` (line ~49):
```typescript
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="tel:+1-555-YOUR-PHONE">+1 (555) YOUR-PHONE</a>
```

---

## Building & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Easiest)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"
6. Add custom domain in Vercel settings

### Deploy to Netlify
```bash
npm run build
# Deploy the '.next' folder
```

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout, global setup |
| `src/app/page.tsx` | Home page content |
| `src/app/[page]/page.tsx` | Other pages |
| `src/components/` | Reusable components |
| `tailwind.config.js` | Color & theme settings |
| `package.json` | Dependencies |

---

## Common Customizations

### Add a New Page

1. Create folder: `src/app/new-page/`
2. Create file: `src/app/new-page/page.tsx`
3. Add content:
```typescript
import { Section } from '@/components/Section';

export default function NewPage() {
  return (
    <Section>
      <h1>Your Page Title</h1>
      <p>Your content here</p>
    </Section>
  );
}
```

### Change Contact Form Behavior

The form currently shows a mock success message. To send real emails:

**Option A: Use FormSpree (Free)**
1. Go to formspree.io
2. Create account and form
3. Update form action in `src/components/ContactForm.tsx`

**Option B: Use Netlify Forms (If deploying to Netlify)**
- Add `netlify` attribute to form
- Forms will auto-submit to Netlify

**Option C: Use Server Actions (Advanced)**
- Create `src/app/api/contact/route.ts`
- Handle email with your service

---

## Performance Tips

✅ Images are optimized  
✅ CSS is minified  
✅ Code-splitting is automatic  
✅ No external dependencies  
✅ Target Lighthouse: 90+  

Check performance: `npm run build` then analyze `.next` output

---

## Troubleshooting

**Q: Port 3000 is in use**
```bash
npm run dev -- -p 3001
```

**Q: TypeScript errors**
```bash
# Fix ESLint issues
npm run lint -- --fix
```

**Q: Form not working**
- Check browser console for errors
- Verify email configuration
- Check form submission in network tab

**Q: Styles not applying**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## Next Steps

1. ✅ Run `npm install` and `npm run dev`
2. ✅ View at http://localhost:3000
3. ✅ Customize company info
4. ✅ Update content for your business
5. ✅ Change colors to match brand
6. ✅ Test on mobile
7. ✅ Run `npm run build` to verify
8. ✅ Deploy to Vercel/Netlify

---

## Need Help?

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **TypeScript Docs**: [typescriptlang.org/docs](https://www.typescriptlang.org/docs/)

---

**You're all set! Start with `npm run dev` and watch your site come to life.** 🎉
