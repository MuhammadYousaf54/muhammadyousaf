# EmailJS Setup Guide

This guide will help you set up automated email sending for your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Add Email Service (Gmail)

1. Go to **Admin Panel** → **Email Services**
2. Click **Add Service**
3. Select **Gmail**
4. Give it a name (e.g., "Gmail")
5. Copy your **Service ID** (format: `service_xxxxxxxxx`)
6. You'll need to create an [App Password](https://myaccount.google.com/apppasswords) for Gmail
   - Go to Google Account → Security → App passwords
   - Generate one for EmailJS
   - Use that password in EmailJS
7. Save the service

## Step 3: Create Email Template

1. Go to **Admin Panel** → **Email Templates**
2. Click **Create New Template**
3. Give it a name (e.g., "Contact Form")
4. Copy your **Template ID** (format: `template_xxxxxxxxx`)
5. Set the following in the template:

**Email Subject:**
```
New Contact: {{from_name}} - {{service}}
```

**Email Content (HTML):**
```html
<p>Hello,</p>

<p>You have a new contact form submission:</p>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>

<p><strong>Service:</strong> {{service}}</p>
<p><strong>Plan:</strong> {{plan}}</p>
<p><strong>Price:</strong> ${{price}}/month</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<p>Reply to: <a href="mailto:{{from_email}}">{{from_email}}</a></p>

<p>Best regards,<br>Contact Form</p>
```

6. Save the template

## Step 4: Update Contact Component

In your `src/components/Contact/Contact.jsx`, update these values:

```javascript
emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Replace with your Public Key

const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID_HERE',      // Replace with Service ID
  templateId: 'YOUR_TEMPLATE_ID_HERE',    // Replace with Template ID
  receiverEmail: 'muhammadyousaf5482@gmail.com'
};
```

## Step 5: Get Your Public Key

1. Go to **Admin Panel** → **Account**
2. Find **Public Key**
3. Copy it and replace `YOUR_PUBLIC_KEY_HERE` in the code

## Finding Your Keys

- **Public Key**: Admin → Account → Public Key
- **Service ID**: Admin → Email Services → Click on Gmail → Service ID
- **Template ID**: Admin → Email Templates → Click on template → Template ID

## Test It Out

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email inbox at `muhammadyousaf5482@gmail.com`

## Notes

- Free plan: 200 emails per month
- Emails will be sent automatically
- Fallback to mailto if EmailJS not configured

## Troubleshooting

If emails aren't sending:
1. Check that Service ID and Template ID are correct
2. Make sure Template has the correct variable names
3. Check EmailJS dashboard for error logs
4. Verify Public Key is correct
5. Check Email Services are properly configured with Gmail
