# Google Analytics Testing Guide - Step by Step

## Phase 1: Local Testing (DevTools) ✅

### Step 1: Start Development Server
```bash
npm run dev
```
Expected: Server starts on `http://localhost:3000`

### Step 2: Open Your Website
1. Open browser → go to `http://localhost:3000`
2. Open **DevTools** → Press `F12` or `Cmd+Option+I` (Mac)
3. Go to **Console** tab

### Step 3: Verify gtag is Loaded
In the Console, type and press Enter:
```javascript
window.gtag
```

Expected Output:
```
ƒ gtag() { ... }  // Shows a function
```

If you see `undefined` → GA script didn't load properly

### Step 4: Check dataLayer
Still in Console, type:
```javascript
window.dataLayer
```

Expected Output:
```javascript
[
  "js",
  {date},
  "config",
  "G-79JT4R0VQJ",
  {object with settings}
]
```

This shows GA is initialized ✅

---

## Phase 2: Test Individual Events (DevTools)

### Step 5: Clear dataLayer and Test Form Submission
```javascript
// Clear old events
window.dataLayer = [];
console.log('dataLayer cleared');
```

Then:
1. Go to `/contact` page (or scroll to contact form)
2. Fill out the contact form
3. Click **Submit**
4. Check Console again:

```javascript
window.dataLayer
```

Expected: You should see multiple new events like:
```
[
  ...,
  "event",
  "form_submission",
  { form_name: "contact_form", timestamp: "..." },
  "event",
  "conversion",
  { conversion_type: "contact_form_submission", conversion_value: 100, timestamp: "..." }
]
```

✅ **Form tracking works!**

### Step 6: Test Button Clicks
```javascript
window.dataLayer = [];
```

Then:
1. Go to `/services`
2. Click any **"Request Quote"** button
3. Check dataLayer:

```javascript
window.dataLayer
```

Expected: Should show:
```
"event",
"cta_click",
{ button_name: "request_quote", button_location: "/services", timestamp: "..." }
```

✅ **Button tracking works!**

### Step 7: Test Navigation Clicks
```javascript
window.dataLayer = [];
```

Then:
1. Click **"Get Started"** button in navbar
2. Check dataLayer:

```javascript
window.dataLayer
```

Expected: Should show:
```
"event",
"cta_click",
{ button_name: "navbar_get_started", button_location: "/", timestamp: "..." }
```

✅ **Navbar tracking works!**

### Step 8: Test Calendly Modal
```javascript
window.dataLayer = [];
```

Then:
1. Find **"Schedule now"** button anywhere on site
2. Click it to open the modal
3. Check dataLayer:

```javascript
window.dataLayer
```

Expected: Should show:
```
"event",
"cta_click",
{ button_name: "calendly_open", button_location: "scheduling_modal", timestamp: "..." }
```

✅ **Calendly tracking works!**

### Step 9: Test Section Visibility
```javascript
window.dataLayer = [];
```

Then:
1. Go to the home page
2. **Scroll down** through different sections (Hero, Features, Pricing, etc.)
3. Check dataLayer as you scroll:

```javascript
window.dataLayer
```

Expected: As you scroll into each section, you should see:
```
"event",
"section_viewed",
{ section_id: "hero", section_title: "hero", timestamp: "..." },
"event",
"section_viewed",
{ section_id: "features", section_title: "features", timestamp: "..." }
```

✅ **Section tracking works!**

### Step 10: Test Deliverable Preview
```javascript
window.dataLayer = [];
```

Then:
1. Go to `/services`
2. Scroll down to see deliverable previews
3. The event should fire when section comes into view:

```javascript
window.dataLayer
```

Expected: Should show:
```
"event",
"deliverable_preview_viewed",
{ deliverable_count: 4, first_deliverable: "...", timestamp: "..." }
```

✅ **Deliverable tracking works!**

---

## Phase 3: Google Analytics 4 Real-Time Testing 🔥

### Step 11: Set Up GA4 Real-Time View
1. Go to **Google Analytics** → https://analytics.google.com
2. Select your **EasyBrandLabs** property (if not auto-selected)
3. Left sidebar → Click **Real-time**

You should see a page like:
```
Currently active users on your site: 1
Traffic
Events (last 30 minutes)
Users by country
```

### Step 12: Trigger Events and Watch Real-Time
Keep **Real-time** page open in one tab/window, and your website in another.

**Test #1: Fill Form**
1. Go to `/contact` on your website
2. Fill out contact form and submit
3. **Immediately** look at GA4 Real-time tab
4. Within 1-2 seconds, you should see:
   - ✅ "Currently active users: 1"
   - ✅ New events appearing in the list

**Test #2: Click Buttons**
1. Click "Request Quote" button on `/services`
2. Watch real-time → should see `cta_click` event appear
3. Refresh page and click "Get Started" in navbar
4. Watch real-time → should see `cta_click` event

**Test #3: Scroll and Trigger Section Events**
1. Go to home page
2. Scroll through sections slowly
3. Watch real-time → should see `section_viewed` events appear

---

## Phase 4: Create Conversion Events in GA4 📊

### Step 13: Navigate to Conversion Events
1. Google Analytics → **Admin** (bottom left)
2. Under "Data collection and modification" → **Events**
3. Click **Create event**

### Step 14: Create "Contact Form Submission" Conversion
**Event Name:**
```
contact_form_submission_conversion
```

**Matching Condition:**
```
Event name = conversion
AND
conversion_type = contact_form_submission
```

Click **Create**

### Step 15: Create "Service Inquiry" Conversion
**Event Name:**
```
service_inquiry_conversion
```

**Matching Condition:**
```
Event name = service_details_viewed
```

Click **Create**

### Step 16: Create "Booking Intent" Conversion
**Event Name:**
```
booking_intent_conversion
```

**Matching Condition:**
```
Event name = cta_click
AND
button_name contains calendly
```

Click **Create**

### Step 17: Verify Conversions Are Recording
1. Go back to **Real-time** view
2. Trigger the events (fill form, click buttons, etc.)
3. In Real-time, you should see your conversions firing
4. Look for events table showing your custom events

---

## Phase 5: Full End-to-End Test Checklist ✅

Use this checklist to verify everything works:

### Local Testing (DevTools)
- [ ] `window.gtag` returns a function
- [ ] `window.dataLayer` shows events array
- [ ] Form submission fires `form_submission` event
- [ ] Form submission fires `conversion` event
- [ ] Button click fires `cta_click` event with button_name
- [ ] Navbar "Get Started" fires with button_name = "navbar_get_started"
- [ ] Calendly "Schedule now" fires with button_name = "calendly_open"
- [ ] Scrolling sections fires `section_viewed` events
- [ ] Deliverable section fires `deliverable_preview_viewed` event

### GA4 Real-Time Testing
- [ ] Real-time shows "1 currently active user"
- [ ] Form submission appears in real-time within 2 seconds
- [ ] Conversion event appears in real-time
- [ ] Button clicks appear in real-time
- [ ] Section views appear in real-time

### GA4 Conversions
- [ ] `contact_form_submission_conversion` created and recording
- [ ] `service_inquiry_conversion` created and recording
- [ ] `booking_intent_conversion` created and recording

---

## Troubleshooting 🔧

### Issue: `window.gtag` is undefined
**Cause:** GA script didn't load  
**Solution:**
1. Check `.env.local` has `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-79JT4R0VQJ`
2. Check browser DevTools → Network tab → search for "gtag"
3. Should see: `https://www.googletagmanager.com/gtag/js?id=G-79JT4R0VQJ`
4. If not there, restart dev server: `npm run dev`

### Issue: Events not appearing in dataLayer
**Cause:** Components not using tracking functions  
**Solution:**
1. Check browser console for JavaScript errors
2. Verify you're on the right page
3. Check that component has `'use client'` at top
4. Make sure form/button exists on page

### Issue: Events showing in dataLayer but not in GA4 Real-Time
**Cause:** GA4 might have a slight delay or script loading issue  
**Solution:**
1. Wait 1-2 minutes and refresh GA4 real-time page
2. Check GA4 measurement ID matches in `.env.local`: `G-79JT4R0VQJ`
3. Make sure GA4 property is active (check Admin → Property Settings)
4. Events take up to 24-48 hours to process, but real-time is instant

### Issue: Getting "Cannot find module @/lib/analytics"
**Cause:** Path alias issue  
**Solution:**
1. Check `tsconfig.json` has path: `"@/*": ["./src/*"]`
2. Restart dev server: `npm run dev`
3. Make sure file exists: `src/lib/analytics.ts`

### Issue: Form not tracking but button clicks work
**Cause:** ContactForm might need 'use client' directive  
**Solution:**
1. Open `src/components/ContactForm.tsx`
2. Verify first line is: `'use client';`
3. Verify imports include: `import { trackFormSubmission, trackConversion } from '@/lib/analytics';`
4. Restart dev server

---

## Live Testing Checklist (After Deployment) 🚀

Once deployed to production:

### Day 1-2: Monitor Everything
- [ ] Go to real website URL
- [ ] Test form submission
- [ ] Check GA4 real-time shows events
- [ ] Monitor for any JavaScript errors

### Week 1: Dashboard Setup
- [ ] Create custom dashboard with key metrics
- [ ] Set up email reports
- [ ] Monitor conversion rates

### Week 2+: Optimization
- [ ] Analyze which pages have high scroll depth
- [ ] Check which services get most inquiries
- [ ] Optimize based on user behavior data

---

## Quick Reference: Event Names

| Component | Event Name | Parameters |
|-----------|-----------|------------|
| ContactForm | `form_submission` | form_name |
| ContactForm Success | `conversion` | conversion_type, conversion_value |
| Button | `cta_click` | button_name, button_location |
| Navbar | `cta_click` | button_name = "navbar_get_started[_mobile]" |
| CalendlyModal | `cta_click` | button_name = "calendly_open" |
| Section | `section_viewed` | section_id, section_title |
| DeliverablePreview | `deliverable_preview_viewed` | deliverable_count |
| DeliverableItem | `deliverable_item_clicked` | deliverable_title |

---

## Need Help?

### Check These Files
- **Implementation details**: `ANALYTICS_SETUP.md`
- **Component code examples**: `COMPONENT_TRACKING_EXAMPLES.md`
- **Integration status**: `INTEGRATION_COMPLETE.md`

### Test Command
```bash
npm run dev
# Then test in http://localhost:3000
```

### GA4 Property
- **Measurement ID**: `G-79JT4R0VQJ`
- **Property**: EasyBrandLabs
- **Real-time**: https://analytics.google.com → Real-time

Good luck! 🎉
