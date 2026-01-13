# Deployment Guide for Organic Meal

Your project is now fully configured for deployment on Netlify. Since I cannot access your Netlify account directly, please follow these simple steps to go live.

## 1. Connect to Netlify

1.  Log in to your [Netlify Dashboard](https://app.netlify.com/).
2.  Click **"Add new site"** > **"Import an existing project"**.
3.  Select **GitHub**.
4.  Authorize Netlify to access your repositories if asked.
5.  Search for and select: `AbnoshShahid/Organic_Meal`

## 2. Configure Build (Auto-Detected)

Because I added a `netlify.toml` configuration file, Netlify should automatically detect the correct settings:

*   **Build Command**: (Empty)
*   **Publish Directory**: `.` (Current root directory)

If it asks manually, ensure these are set as above.

## 3. Deploy

1.  Click **"Deploy Site"**.
2.  Wait for the deployment log to finish (usually 30 seconds).
3.  Click the **"Open production deploy"** link to see your site.

## 4. Domain Setup (Step 4 of your request)

1.  Go to **"Domain management"** in your site settings.
2.  Click **"Add a domain"**.
3.  Enter your custom domain (e.g., `organicmeal.com`).
4.  Follow the instructions to add the CNAME or DNS records provided by Netlify to your domain registrar.
5.  Click **"Verify DNS configuration"**.
6.  Once verified, scroll down to **"HTTPS"** and click **"Verify DNS configuration"** to enable free SSL (Let's Encrypt).

## 5. Confirmation

Once the site is live, please check:
- [ ] Homepage loads without errors.
- [ ] Images (Hero, Products, Ingredients) display correctly.
- [ ] Styling (Colors, Fonts) looks correct.

If you see any broken images, please let me know!
