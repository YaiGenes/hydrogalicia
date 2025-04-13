# HydroGalicia - Hydroponic Greenhouse Cultivation

![HydroGalicia Logo](public/logo192.png)

A professional React-based website for HydroGalicia, a hydroponic greenhouse cultivation business based in Pontevedra, Galicia. This website showcases sustainable, innovative farming methods and allows customers to learn about and purchase fresh, locally-grown produce.

[Live Demo](https://your-username.github.io/hydrogalicia)

## Features

- **Modern, Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices
- **E-Commerce Functionality:** Complete shopping cart and checkout experience
- **Investor Information:** Detailed business information and investment opportunities
- **Blog Section:** Educational content about hydroponics and sustainable farming
- **Product Catalog:** Showcase of all available hydroponic products
- **Contact Forms:** Validated forms for inquiries and investor connections
- **Sustainability Focus:** Highlighting the environmental benefits of hydroponic farming

## Technology Stack

- **React:** All components built with React functional components and hooks
- **React Router:** For navigation and routing
- **Tailwind CSS:** For styling and responsive design
- **Context API:** For state management (shopping cart)
- **Lucide React:** For icons
- **GitHub Pages:** For deployment

## Project Structure

```
src/
|-- App.js                       // Main application component with routing
|-- index.js                     // Entry point
|-- contexts/
|   |-- CartContext.js           // Shopping cart context
|-- components/
|   |-- layout/
|   |   |-- Header.js            // Navigation component
|   |   |-- Footer.js            // Footer component
|   |-- home/
|   |   |-- HeroBanner.js        // Hero banner for homepage
|   |   |-- TestimonialSection.js // Testimonials component
|   |-- blog/
|   |   |-- BlogPreview.js       // Blog preview for homepage
|   |-- forms/
|   |   |-- ContactForm.js       // Contact form with validation
|   |   |-- InvestorForm.js      // Investor inquiry form
|   |-- products/
|       |-- FeaturedProducts.js  // Featured products component
|       |-- ProductCard.js       // Individual product card
|       |-- ProductFilter.js     // Product filtering component
|       |-- ProductGallery.js    // Product image gallery
|-- pages/
|   |-- HomePage.js              // Home page component
|   |-- AboutPage.js             // About us page
|   |-- ProductsPage.js          // Products listing page
|   |-- ProductDetailPage.js     // Individual product page
|   |-- BlogPage.js              // Blog listing page
|   |-- BlogPostPage.js          // Individual blog post page
|   |-- ContactPage.js           // Contact page
|   |-- InvestorPage.js          // Investor information page
|   |-- CartPage.js              // Shopping cart page
|-- data/
|   |-- productsData.js          // Product data
|   |-- blogData.js              // Blog posts data
|-- utils/
    |-- formatters.js            // Helper functions for formatting
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/hydrogalicia.git
   cd hydrogalicia
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment to GitHub Pages

1. Install the GitHub Pages package:
   ```
   npm install --save gh-pages
   ```
   or
   ```
   yarn add gh-pages
   ```

2. Add the following to your `package.json`:
   ```json
   "homepage": "https://your-username.github.io/hydrogalicia",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     ...
   }
   ```

3. Deploy the application:
   ```
   npm run deploy
   ```
   or
   ```
   yarn deploy
   ```

## Required Environment Setup

Create a `.env` file in the root directory with the following content:

```
PUBLIC_URL=/hydrogalicia
```

## Adding Images

Place all images in the `public/images` directory. The following image categories are needed:

- Product images (named after their slugs for easier reference)
- Blog post header images
- Team member photos
- Testimonial photos
- Hero banner background

## Future Enhancements

- User authentication for returning customers
- Order history and tracking
- Integration with payment gateways
- Multi-language support (Spanish, Galician, English)
- Interactive hydroponic system visualization
- Virtual farm tour

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images sourced from [Unsplash](https://unsplash.com)
- Icons from [Lucide React](https://lucide.dev)
- Design inspiration from modern agricultural websites

## Contact

HydroGalicia - [info@hydrogalicia.com](mailto:info@hydrogalicia.com)

Project Link: [https://github.com/your-username/hydrogalicia](https://github.com/your-username/hydrogalicia)
