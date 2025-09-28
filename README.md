# E-Commerce React App

## Description
This is a full-featured e-commerce application built with React and Vite. It includes product browsing, cart management, user registration, contact form, and more. The app supports English and Arabic languages with RTL support, uses Redux for state management, and integrates with a dummy API for products. Features like code splitting and environment variables are implemented for better performance and configuration.

## Features
- **Product Listing:** Browse products with pagination (10 per page) from a dummy API.
- **Product Details:** View detailed product information, images gallery, ratings, discounts, stock, and add to cart with quantity controls.
- **Shopping Cart:** Add/remove/update quantities, calculate totals, using Redux.
- **User Registration:** Form with validation for name, username, email, password (with regex for strength).
- **Contact Us:** Form with Formik/Yup validation, optional phone input with country selector (react-phone-number-input), success message on submit.
- **Language Support:** Toggle between English and Arabic, with RTL direction.
- **Code Splitting:** Lazy loading for routes using React.lazy and Suspense for faster initial load.
- **Environment Variables:** Configurable API base URL via .env for dev/production.
- **Responsive UI:** Built with Bootstrap for mobile/desktop compatibility.
- **Error Handling & Loading:** Spinners and alerts for API errors.

## Tech Stack
- **Frontend:** React 19, Vite (build tool)
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM v7
- **UI Library:** React Bootstrap 2.10
- **API Calls:** Axios 1.12
- **Forms & Validation:** Formik, Yup (for Contact form)
- **Phone Input:** react-phone-number-input (bonus for Contact)
- **Language Context:** Custom React Context with localStorage
- **Other:** ESLint for code quality

## Project Structure
```
src/
├── App.jsx                 # Main app with routing and code splitting
├── main.jsx                # Entry point with providers (Redux, Language)
├── components/             # Reusable components
│   ├── Navbar/             # Navigation bar with cart count and language toggle
│   ├── ProductCard/        # Product display card
│   ├── ImageGallery/       # Product images slider
│   └── LoadingSpinner/     # Loading animation
├── contexts/               # React Contexts
│   └── LanguageContext.jsx # Language switching
├── hooks/                  # Custom hooks
│   └── useLanguage.js      # Language hook
├── pages/                  # Route components
│   ├── ProductsList/       # Product list with pagination
│   ├── ProductDetails/     # Single product view
│   ├── Cart/               # Shopping cart
│   ├── Register/           # Registration form
│   ├── ContactUs/          # Contact form
│   └── NotFound/           # 404 page
└── store/                  # Redux store
    ├── index.js            # Store configuration
    └── cartSlice.js        # Cart reducer (add/remove/update)
```

## Setup Instructions
1. **Clone the Repository:**
   ```
   git clone https://github.com/Ahmedsalah000/ecommerce-react-iti.git
   cd ecommerce-react-iti
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

3. **Environment Variables:**
   - Copy `.env.example` to `.env` in the root directory.
   - Edit `.env` and set your values (e.g., `VITE_APP_BASE_URL=https://your-api.com` for production).
   - Note: `.env` is ignored by Git for security; never commit sensitive data.

4. **Run the Development Server:**
   ```
   npm run dev
   ```
   - Open http://localhost:5173 in your browser.
   - Navigate to `/products` to see the product list.

5. **Build for Production:**
   ```
   npm run build
   ```
   - Outputs optimized files to `dist/`.
   - Preview the build:
     ```
     npm run preview
     ```
     - Open http://localhost:4173.

6. **Linting:**
   ```
   npm run lint
   ```

## Running the App
- **Home/Products:** `/` or `/products` – Browse products.
- **Product Details:** `/products/:id` – Click a product.
- **Cart:** `/cart` – View and manage cart.
- **Register:** `/register` – User signup form.
- **Contact:** `/contact` – Send message form.
- **Language Toggle:** In navbar dropdown (English/العربية).
- **API:** Uses dummyjson.com by default; change via .env.

## Code Splitting & Performance
- Routes are lazy-loaded with `React.lazy` and `Suspense`.
- Build generates separate chunks (e.g., `ProductsList-[hash].js`).
- Check Network tab in dev tools to see on-demand loading.

## Contributing
- Fork the repo and create a pull request.
- Follow ESLint rules.
- Add features like login, real backend, or payment integration.
- Test changes with `npm run dev` and `npm run build`.

## Troubleshooting
- **API Errors:** Check .env for VITE_APP_BASE_URL.
- **Build Warnings:** Vite may warn on large chunks; code splitting helps.
- **Language Issues:** Clear localStorage if RTL/LTR stuck.
- **Dependencies:** Run `npm install` if missing packages.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ for ITI React Lab.
