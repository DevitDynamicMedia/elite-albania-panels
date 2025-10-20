# Elite Interior - Static HTML Website

## Overview
This is a static HTML website for Elite Interior, Albania's premier provider of premium wall panels. The website includes 5 pages with no build process required - just upload and run!

## Files Included
- `index.html` - Home page with hero section, categories, and features
- `products.html` - Products page with 30 wall panel products and filtering
- `about.html` - About page with company story and values
- `gallery.html` - Gallery page showcasing project portfolio
- `contact.html` - Contact page with form and information

## How to Use on GitHub

### Option 1: GitHub Pages (Recommended)
1. Create a new repository on GitHub
2. Upload all HTML files to the repository
3. Go to repository Settings → Pages
4. Under "Source", select "main" branch
5. Click Save
6. Your site will be live at: `https://yourusername.github.io/repository-name/`

### Option 2: Direct Upload
1. Create a new repository
2. Upload all 5 HTML files
3. Click on `index.html` to view
4. Share the raw GitHub URL with others

### Option 3: Download and Open Locally
1. Download all files
2. Double-click `index.html` to open in your browser
3. Navigate using the menu

## Features
✅ No build process required - pure HTML/CSS/JavaScript
✅ Fully responsive design for mobile, tablet, and desktop
✅ 30 premium wall panel products
✅ Interactive filtering on products page
✅ Working contact form (displays success message)
✅ SEO optimized with meta tags
✅ Dark theme with gold accents
✅ Smooth animations and transitions
✅ Cross-browser compatible

## Pages Structure

### Home (index.html)
- Hero section with call-to-action
- 4 product categories
- 3 feature cards
- Full footer with links

### Products (products.html)
- 30 products across 4 categories
- Interactive filter tabs
- Product cards with images and pricing
- Responsive grid layout

### About (about.html)
- Company story and mission
- 4 core values with icons
- Statistics section (500+ clients, 1000+ projects)

### Gallery (gallery.html)
- 8 project showcase images
- Hover effects with project details
- Call-to-action section

### Contact (contact.html)
- Working contact form
- Contact information cards
- Business hours
- Address and phone details

## Customization

### To Change Colors:
Edit the CSS variables in the `<style>` section of each file:
```css
--bg-dark: #0a0a0a;
--accent-gold: #d4a574;
```

### To Add More Products:
In `products.html`, add items to the `products` array in the JavaScript section:
```javascript
{ name: "Product Name", category: "Category", type: "type", price: "45", image: "url" }
```

### To Change Contact Info:
Edit the contact details in the footer and contact page.

## Browser Support
✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

## License
© 2025 Elite Interior. All rights reserved.

## Support
For questions or customization requests, contact the development team.

---

**Ready to deploy!** Just upload these files to GitHub and enable GitHub Pages. No npm install, no build process, no dependencies!