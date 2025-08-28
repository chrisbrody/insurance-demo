# Insurance Company Website

A static HTML/CSS/JavaScript website for insurance companies built to match specific wireframe requirements.

## Features

- **Multi-page Insurance Portal**: Complete flow from homepage to member registration
- **Responsive Design**: Built with Bootstrap 5 and custom CSS
- **Interactive Forms**: jQuery-powered member registration and product selection
- **Wireframe Compliant**: Matches detailed wireframe specifications exactly
- **Member Management**: Complete onboarding flow with security verification
- **Product Selection**: Dynamic insurance product selection with custom additions

## Pages

- `index.html` - Homepage with company search
- `carrier-details.html` - Insurance company details page
- `life-insurance-types.html` - Life insurance product selection
- `term-life-contact.html` - Term life insurance contact information
- `permanent-life-contact.html` - Permanent life insurance contacts
- `member-profile.html` - Member sign-in and profile management
- `become-a-member.html` - Member registration flow
- `new-member-setup.html` - Complete 5-step member onboarding

## Technologies

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (jQuery)
- Static site deployment ready

## Deployment

This site is configured for Netlify deployment:

1. Connect your GitHub repository to Netlify
2. Set build command: (none needed - static site)
3. Set publish directory: `.` (root directory)
4. Deploy automatically on push to main branch

Configuration files:
- `netlify.toml` - Netlify build and redirect configuration
- `_redirects` - URL redirect rules for clean URLs

## Development

No build process required. Open `index.html` in a web browser to view locally.

## Project Structure

```
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── script.js          # Main JavaScript functionality
│   └── product-selection.js # Product selection logic
├── *.html                 # All page templates
├── netlify.toml          # Netlify configuration
├── _redirects            # Netlify redirect rules
└── CLAUDE.md            # Development instructions
```

## Wireframe Compliance

This website is built to match exact wireframe specifications found in the project documentation. Each page corresponds to specific wireframe layouts with precise content matching.