# Quick Testing Checklist - Copy & Paste Steps

## Step 1: Start Dev Server
```bash
npm run dev
```
✅ Should see: `ready - started server on 0.0.0.0:3000`

---

## Step 2: Open Website + DevTools
1. Go to http://localhost:3000
2. Press `F12` (or `Cmd+Option+I` on Mac) to open DevTools
3. Click on **Console** tab

---

## Step 3: Verify GA is Loaded
Copy & paste into Console:
```javascript
window.gtag
```

**Expected:** Shows `ƒ gtag() { ... }`  
**If undefined:** GA didn't load (problem!)

---

## Step 4: Check Events Array
Copy & paste into Console:
```javascript
console.log('Current events:', window.dataLayer.length)
window.dataLayer
```

**Expected:** Shows array with events  
**Normal:** Starting with several config events

---

## Step 5: TEST - Fill & Submit Contact Form

1. Click **Contact** in navbar (or go to `/contact`)
2. Fill out the form:
   - Name: "Test User"
   - Email: "test@example.com"
   - Message: "Testing GA"
3. Click **Submit** button

**In DevTools Console, type:**
```javascript
window.dataLayer.slice(-5)  // Show last 5 events
```

**Expected to see:**
```javascript
// Should contain:
"event", "form_submission", {form_name: "contact_form"}
"event", "conversion", {conversion_type: "contact_form_submission"}
```

✅ **FORM TRACKING WORKS!**

---

## Step 6: TEST - Click Buttons

1. Go to `/services`
2. Find any button (like "Request Quote")
3. Click it

**In DevTools Console:**
```javascript
window.dataLayer.slice(-3)
```

**Expected to see:**
```javascript
"event", "cta_click", {button_name: "request_quote", button_location: "/services"}
```

✅ **BUTTON TRACKING WORKS!**

---

## Step 7: TEST - Navbar Button

1. Go to home page
2. Click "Get Started" button in navbar

**In DevTools Console:**
```javascript
window.dataLayer.slice(-2)
```

**Expected:**
```javascript
"event", "cta_click", {button_name: "navbar_get_started"}
```

✅ **NAVBAR TRACKING WORKS!**

---

## Step 8: TEST - Scroll Sections

1. Go to home page
2. Slowly **scroll down**

**In DevTools Console:**
```javascript
window.dataLayer.filter(item => item === 'section_viewed')
```

**Expected:** Should show multiple `section_viewed` events as you scroll

✅ **SECTION TRACKING WORKS!**

---

## Step 9: TEST - Calendly Button

1. Find **"Schedule now"** button (often at top/bottom)
2. Click it

**In DevTools Console:**
```javascript
window.dataLayer.slice(-2)
```

**Expected:**
```javascript
"event", "cta_click", {button_name: "calendly_open"}
```

✅ **CALENDLY TRACKING WORKS!**

---

## Step 10: Verify in Google Analytics Real-Time

1. Open new tab: https://analytics.google.com
2. Select **EasyBrandLabs** property
3. Click **Real-time** (left sidebar)
4. Should show: "Currently active users on your site"

**Now trigger an event on your website:**
- Fill and submit the form again
- Watch the Real-time page

**Expected within 1-2 seconds:**
- Numbers update
- New events appear in the list

✅ **GA4 REAL-TIME WORKS!**

---

## SUMMARY - What Should Work

| Feature | Test Method | Expected |
|---------|-----------|----------|
| GA Loaded | `window.gtag` in console | Shows function |
| Form Submit | Fill form, submit | `form_submission` + `conversion` events appear |
| Button Click | Click any button with `trackAs` | `cta_click` event appears |
| Navbar Click | Click "Get Started" | `cta_click` with `button_name: "navbar_get_started"` |
| Calendly | Click "Schedule now" | `cta_click` with `button_name: "calendly_open"` |
| Scroll Sections | Scroll down page | `section_viewed` events appear |
| GA4 Real-Time | Submit form while watching GA4 | Event appears in real-time within 2 sec |

---

## If Something Doesn't Work

### `window.gtag` is undefined
```bash
# Check .env.local has the GA ID
cat .env.local | grep GA

# Restart dev server
npm run dev
```

### Events not in dataLayer
1. Check browser console for red errors
2. Make sure you're on correct page
3. Check component has `'use client'` at top

### Events in dataLayer but not in GA4 Real-Time
1. Wait 1-2 minutes for GA4 to sync
2. Refresh GA4 page
3. Check GA4 measurement ID: `G-79JT4R0VQJ`

---

## Copy-Paste Console Commands

**Clear and test form:**
```javascript
window.dataLayer = [];
console.log('✅ dataLayer cleared - now fill & submit the form');
```

**Check last N events:**
```javascript
window.dataLayer.slice(-5)  // Last 5 events
```

**Count form events:**
```javascript
window.dataLayer.filter(e => e === 'form_submission').length
```

**Count cta clicks:**
```javascript
window.dataLayer.filter(e => e === 'cta_click').length
```

**See all event types:**
```javascript
[...new Set(window.dataLayer.filter(e => typeof e === 'string' && e.length > 5))].sort()
```

---

## Done? ✅

Once all tests pass:
1. Deploy to production
2. Test on live site
3. Monitor GA4 Real-time with real traffic
4. Create conversion events in GA4 (see TESTING_GUIDE.md for details)

All done! 🎉
