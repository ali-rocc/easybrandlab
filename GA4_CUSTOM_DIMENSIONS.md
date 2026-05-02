# GA4 Custom Dimensions Setup Guide

## Why Set Up Custom Dimensions?

Your tracking code sends custom parameters like `button_name`, `form_name`, etc., but **GA4 won't show these in reports** until you register them as custom dimensions.

## Current Custom Parameters Being Sent

| Event | Parameters |
|-------|------------|
| `cta_click` | `button_name`, `button_location` |
| `form_submission` | `form_name`, `form_location` |
| `conversion` | `conversion_type`, `conversion_value` |
| `service_inquiry` | `service_name`, `inquiry_source` |
| `section_viewed` | `section_id`, `section_title` |

## How to Register Custom Dimensions in GA4

### Step 1: Go to GA4 Admin
1. Open https://analytics.google.com
2. Select your **EasyBrandLabs** property
3. Click **Admin** (bottom left)
4. Under **Property** → Click **Custom definitions**

### Step 2: Create Custom Dimensions

Click **"Create custom dimension"** and add these:

#### 1. Button Name
- **Name**: `Button Name`
- **Scope**: Event
- **Description**: `Name of the button clicked`
- **Event parameter**: `button_name`

#### 2. Button Location
- **Name**: `Button Location`
- **Scope**: Event
- **Description**: `Page where button was clicked`
- **Event parameter**: `button_location`

#### 3. Form Name
- **Name**: `Form Name`
- **Scope**: Event
- **Description**: `Name of the form submitted`
- **Event parameter**: `form_name`

#### 4. Form Location
- **Name**: `Form Location`
- **Scope**: Event
- **Description**: `Page where form was submitted`
- **Event parameter**: `form_location`

#### 5. Service Name
- **Name**: `Service Name`
- **Scope**: Event
- **Description**: `Name of service inquired about`
- **Event parameter**: `service_name`

#### 6. Section ID
- **Name**: `Section ID`
- **Scope**: Event
- **Description**: `ID of section viewed`
- **Event parameter**: `section_id`

#### 7. Section Title
- **Name**: `Section Title`
- **Scope**: Event
- **Description**: `Title of section viewed`
- **Event parameter**: `section_title`

#### 8. Conversion Type
- **Name**: `Conversion Type`
- **Scope**: Event
- **Description**: `Type of conversion event`
- **Event parameter**: `conversion_type`

### Step 3: Create Custom Metrics (Optional)

For numeric values, create custom metrics:

#### Conversion Value
- **Name**: `Conversion Value`
- **Scope**: Event
- **Description**: `Monetary value of conversion`
- **Event parameter**: `conversion_value`
- **Unit of measurement**: Currency (USD)

## How to Use Custom Dimensions in Reports

### Option 1: Explorations
1. Go to **Explore** → **Free form**
2. Add your custom dimension to **Rows**
3. Add **Event count** to **Values**
4. Filter by specific events

### Option 2: Custom Reports
1. Go to **Reports** → **Engagement** → **Events**
2. Use the search to find your events
3. Click on an event to see parameter breakdowns

## Testing Custom Dimensions

1. **Trigger events** on your website
2. **Wait 24-48 hours** for data to process
3. **Check Explorations** to see if dimensions appear
4. **Verify parameter values** are correct

## Example: Button Click Analysis

After setup, you can create reports showing:
- Which buttons get clicked most
- Which pages have the most button clicks
- Conversion rates by button type

## Important Notes

- **Scope**: All dimensions above are **Event-scoped** (apply to specific events)
- **Processing Time**: New dimensions take 24-48 hours to appear in reports
- **Historical Data**: Custom dimensions only apply to **new** events (not historical data)
- **Limits**: GA4 allows up to 50 custom dimensions per property

## Quick Setup Checklist

- [ ] Go to GA4 Admin → Custom definitions
- [ ] Create all 8 custom dimensions listed above
- [ ] Wait 24-48 hours
- [ ] Test in Explorations
- [ ] Create custom reports/dashboards

---

## Alternative: Use Built-in Parameters

GA4 has some built-in parameters you can use instead of custom ones:

- `page_location` (built-in) instead of `button_location`
- `page_title` (built-in) instead of `form_location`

But custom dimensions give you more flexibility for analysis.

---

## Need Help?

If dimensions don't appear after 48 hours:
1. Check that events are firing (use Realtime)
2. Verify parameter names match exactly
3. Check GA4 property settings
4. Contact GA4 support if needed

Your events are being collected - custom dimensions just make the data visible in reports! 📊