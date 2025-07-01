<<<<<<< HEAD
# JaleJale Motors - React Website

A modern, responsive car dealership website built with React and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-Based Architecture**: Modular, reusable React components
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Performance Optimized**: Lazy loading images and efficient state management
- **Interactive Elements**: Car carousel, filtering system, and contact forms
- **Modern UI/UX**: Clean, professional design with smooth animations

## Pages

- **Home**: Hero section, featured cars, testimonials, and call-to-action
- **Inventory**: Car listing with advanced filtering options
- **Car Details**: Detailed view with image gallery and specifications
- **About**: Company story, mission, and trust points
- **Contact**: Contact form, map, FAQ, and team information

## Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icons
- **Google Fonts**: Poppins font family

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.jsx
│   ├── WhatsAppButton.jsx
│   ├── CarCard.jsx
│   ├── Carousel.jsx
│   ├── TestimonialCard.jsx
│   ├── FAQAccordion.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── pages/              # Page components
│   ├── HomePage.jsx
│   ├── InventoryPage.jsx
│   ├── CarDetailsPage.jsx
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
├── data/               # Static data files
│   ├── cars.js
│   ├── testimonials.js
│   └── faq.js
├── App.jsx             # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jalejale-motors
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Key Features

### Component Architecture
- **Modular Design**: Each component has a single responsibility
- **Reusability**: Components are designed to be reused across the application
- **Props Interface**: Clear prop definitions for component communication

### State Management
- **Local State**: Uses React hooks for component-level state
- **Lifting State Up**: Shared state managed at the App level
- **Efficient Updates**: Optimized re-renders with proper dependency arrays

### Accessibility
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus indicators and management

### Performance
- **Lazy Loading**: Images load only when needed
- **Memoization**: Expensive calculations memoized with useMemo
- **Optimized Images**: Responsive images with proper sizing
- **Smooth Animations**: CSS transitions for better UX

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  'brand-blue': {
    900: '#1e3a8a',
    800: '#1e40af',
  },
  'brand-orange': {
    500: '#f97316',
    600: '#ea580c',
  }
}
```

### Content
- Car data: Edit `src/data/cars.js`
- Testimonials: Edit `src/data/testimonials.js`
- FAQ: Edit `src/data/faq.js`

### Styling
- Global styles: Edit `src/index.css`
- Component styles: Use Tailwind classes or add custom CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team. 
=======
# jalejale
>>>>>>> a3f4049a0921cff8be2267f43bca9f5e2019843a
