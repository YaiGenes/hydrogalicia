# Deploying HydroGalicia to GitHub Pages

This guide explains how to deploy the HydroGalicia website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js (version 14 or higher) and npm installed

## Setup

1. Create a new GitHub repository:
   - Go to [github.com](https://github.com) and sign in
   - Click on the "+" icon in the top-right corner and select "New repository"
   - Name your repository (e.g., "hydrogalicia")
   - Set it to public
   - Click "Create repository"

2. Clone the repository to your local machine:
   ```
   git clone https://github.com/your-username/hydrogalicia.git
   cd hydrogalicia
   ```

3. Copy all project files into the cloned repository directory.

4. Update the `package.json` file:
   - Set the `homepage` field to your GitHub Pages URL:
     ```json
     "homepage": "https://your-username.github.io/hydrogalicia"
     ```

5. Install dependencies:
   ```
   npm install
   ```

## Manual Deployment

1. Build and deploy the project using the npm script:
   ```
   npm run deploy
   ```

   This script runs two commands:
   - `npm run build`: Creates an optimized production build
   - `gh-pages -d build`: Publishes the build folder to the gh-pages branch

2. After deployment, go to your GitHub repository settings:
   - Navigate to "Settings" > "Pages"
   - Ensure the "Source" is set to "gh-pages branch"
   - Your site will be published at the URL shown at the top of the GitHub Pages section

## Automated Deployment with GitHub Actions

The repository includes a GitHub Actions workflow file (`.github/workflows/deploy.yml`). This automates the deployment process whenever you push to the main branch.

To use GitHub Actions:

1. Make sure the `.github/workflows/deploy.yml` file is committed to your repository
2. Push your changes to the main branch
3. Check the "Actions" tab in your GitHub repository to monitor the deployment progress
4. Once completed, your site will be available at your GitHub Pages URL

## Troubleshooting

If your deployment is not working correctly, check these common issues:

1. **Blank page or 404 errors**: 
   - Ensure your `homepage` in package.json is set correctly
   - Make sure you have a `PUBLIC_URL` in your .env file matching your repository name
   - Check that React Router is configured to use the basename: 
     ```jsx
     <Router basename={process.env.PUBLIC_URL}>
     ```

2. **Missing assets or broken links**:
   - Use relative paths for all assets
   - Prefix asset paths with `${process.env.PUBLIC_URL}/` for absolute paths
   - Place all static assets in the `public` folder

3. **GitHub Pages not updating**:
   - Check the GitHub Actions logs for errors
   - Ensure the gh-pages branch exists and is set as the source in GitHub Pages settings
   - Clear your browser cache

## Custom Domain (Optional)

To use a custom domain with your GitHub Pages site:

1. Add your custom domain in your GitHub repository:
   - Go to "Settings" > "Pages"
   - Under "Custom domain," enter your domain name and click "Save"

2. Configure your domain's DNS settings:
   - For an apex domain (example.com), add A records pointing to GitHub's IP addresses
   - For a subdomain (www.example.com), add a CNAME record pointing to your-username.github.io

3. Update your `homepage` in package.json to your custom domain:
   ```json
   "homepage": "https://example.com"
   ```

4. Create a CNAME file in your `public` directory with your domain name:
   ```
   example.com
   ```

5. Redeploy your site

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/#github-pages)
- [gh-pages npm package](https://www.npmjs.com/package/gh-pages)