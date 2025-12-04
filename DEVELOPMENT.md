# GrowthMeta Website Development Guide

This guide explains how to run, manage, and update the GrowthMeta website.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (v18 or higher recommended).
- **Git**: For version control.
- **VS Code**: Recommended code editor.

## Getting Started

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone https://github.com/Sumit9819/Growth.git
    cd Growth
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Ensure you have a `.env.local` file in the root directory with your Sanity credentials:
    ```
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    ```

## Running the Project

### Development Server
To start the website locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Sanity Studio (CMS)
To manage content (Services, Blog posts, etc.):
1.  Go to [http://localhost:3000/studio](http://localhost:3000/studio) after starting the dev server.
2.  Log in with your Sanity credentials.

## Common Tasks

### Updating Content
- **Services/Blog**: Use the Sanity Studio at `/studio`.
- **Static Text**: Edit files in `src/app` or `src/components`.
  - **Homepage**: `src/app/page.tsx`
  - **Navbar**: `src/components/layout/navbar.tsx`
  - **Footer**: `src/components/layout/footer.tsx`

### Styling
- **Global Styles**: `src/app/globals.css`
- **Tailwind**: We use Tailwind CSS. You can add classes directly to elements.
- **Theme Colors**: Defined in `globals.css` under `:root`.

### Deployment
The site is deployed on Vercel. Pushing to the `main` branch on GitHub automatically triggers a new deployment.
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

## Troubleshooting
- **Build Errors**: Run `npm run build` locally to check for errors before pushing.
- **Sanity Issues**: Ensure your `.env.local` file is correct and you have permissions.
