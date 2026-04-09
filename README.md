# DigiTools

A modern and responsive digital products website built with **React** and **Vite** to showcase premium tools, featured product sections, pricing highlights, and a simple interactive cart experience.

This project is designed as a clean and visually appealing landing page for digital products. It combines product presentation, promotional sections, user-focused call-to-actions, and a lightweight cart workflow to create a practical frontend experience.

## Live Demo

[View Live Site](https://digitools-assignment.netlify.app/)

## Repository Link

[GitHub Repository](https://github.com/Ahnaf-Afif/DigiTools)

## Project Overview

DigiTools was created to present:

- Premium digital products in a modern landing page layout
- A featured hero section with strong call-to-action buttons
- Product and cart interaction in a simple user flow
- Pricing and promotional sections for better product presentation
- A responsive and reusable component-based frontend structure

The main goal of this project is to build a polished product showcase website that is user-friendly, visually clean, and easy to expand in the future.

## Features

- Responsive layout for different screen sizes
- Modern landing page design with a clean UI
- Hero section with promotional headline and CTA buttons
- Product showcase section for premium digital tools
- Tab-based interaction between product view and cart view
- Add to cart and remove from cart functionality
- Checkout action with toast notifications
- User rating or social proof section
- Get started and promotional CTA sections
- Pricing section for plan comparison
- Reusable component-based architecture

## Tech Stack

This project was built using the following technologies:

- **React**
- **Vite**
- **JavaScript**
- **Tailwind CSS**
- **DaisyUI**
- **React Icons**
- **React Toastify**
- **HTML5**
- **CSS3**

## Project Structure

```bash
DigiTools/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cart/
│   │   ├── DigitalTools/
│   │   ├── Footer/
│   │   ├── GetStarted/
│   │   ├── Hero/
│   │   ├── PrisingSection/
│   │   ├── Products/
│   │   ├── UserRating/
│   │   └── navbar/
│   ├── data/
│   │   └── products.json
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## How It Works

The application is organized into reusable React components to keep the codebase modular and maintainable:

- **Navbar** – Displays branding, navigation links, and top-level actions
- **Hero** – Presents the main headline, short description, and primary call-to-action buttons
- **UserRating** – Highlights trust, user feedback, or rating-based promotional content
- **DigitalTools** – Manages the main section where users can switch between products and cart-related views
- **ProductList / ProductCard** – Renders digital products from the product data source
- **Cart** – Displays selected items, allows item removal, and supports checkout interaction
- **GetStarted / GetStartedCard** – Encourages users to take action through promotional CTA sections
- **PrisingSectionMain** – Showcases pricing options in a separate comparison-style section
- **Footer** – Provides the final site information and footer navigation

The product information is driven from a dedicated `products.json` file, which makes the content easier to maintain and update without deeply changing component logic.

## Installation and Setup

To run this project locally on your machine, follow these steps:

### Prerequisites

Make sure you have installed:

- **Node.js**
- **npm**

### Clone the Repository

```bash
git clone https://github.com/Ahnaf-Afif/DigiTools.git
```

### Navigate to the Project Folder

```bash
cd DigiTools
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Then open the local server URL shown in your terminal.

## Available Scripts

In the project directory, you can run:

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Linter

```bash
npm run lint
```

## Customization

This project can be easily customized by updating:

- Product data inside `src/data/products.json`
- Hero section text and call-to-action buttons
- Pricing section content
- User rating or testimonial content
- Cart behavior and toast messages
- Icons, images, and branding assets
- Navigation links and footer content
- Layout styling and spacing preferences

## Future Improvements

Possible future improvements for this project include:

- Adding product search, filtering, and category sorting
- Persisting cart items with `localStorage`
- Adding authentication and user accounts
- Integrating a real payment or checkout system
- Connecting the product data to a backend or CMS
- Improving accessibility and keyboard navigation
- Adding more animations and transitions
- Optimizing for SEO and performance
- Deploying with a custom domain

## Author

**Afif Siddique**  
An aspiring web developer passionate about building clean, responsive, and interactive frontend applications.

## Acknowledgements

This project was built using modern frontend tools and open-source libraries from the React ecosystem.
