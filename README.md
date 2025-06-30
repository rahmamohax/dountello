# Dountello 🍩

A modern, responsive donut shop website with e-commerce functionality, built with HTML, CSS, JavaScript, and PHP.

## 🎯 Overview

Dountello is a comprehensive donut shop website that showcases delicious donuts and provides an interactive shopping experience. The website features a modern design with smooth animations, a shopping cart system, and user authentication capabilities.

## ✨ Features

### 🏠 Homepage
- **Hero Section**: Eye-catching banner with call-to-action
- **Product Showcase**: Featured donuts displayed in a carousel
- **Recipe Blog**: Baking recipes and tips section
- **Responsive Design**: Optimized for all device sizes

### 🛒 Shopping Cart
- **Add to Cart**: Interactive product selection
- **Quantity Management**: Increase/decrease item quantities
- **Real-time Total**: Dynamic price calculation
- **Cart Persistence**: Items remain in cart during session

### 📋 Menu Page
- **Product Categories**: Donuts, Sandwiches, Cold Drinks
- **Swiper Carousel**: Smooth product navigation
- **Product Details**: Images, descriptions, and pricing
- **Add to Basket**: Seamless shopping experience

### 🔐 User Authentication
- **Sign Up/Sign In**: Toggle between registration and login
- **Form Validation**: Email, username, and password fields
- **Password Recovery**: Lost password functionality
- **User Dashboard**: Personalized experience (planned)

### 🎨 Design Features
- **Modern UI**: Clean and attractive interface
- **Smooth Animations**: CSS transitions and hover effects
- **Font Awesome Icons**: Professional iconography
- **Responsive Layout**: Mobile-first design approach

## 📁 Project Structure

```
dountello/
├── app.js                 # Main JavaScript functionality
├── cart.php              # Shopping cart backend logic
├── index.html            # Homepage
├── index.php             # PHP version of homepage
├── login.html            # User authentication page
├── menu.html             # Product menu page
├── navbar.html           # Navigation component
├── footer.html           # Footer component
├── java.js               # Additional JavaScript utilities
├── css/                  # Stylesheets
│   ├── styles.css        # Main styles
│   ├── navbar.css        # Navigation styles
│   ├── footer.css        # Footer styles
│   ├── menu.css          # Menu page styles
│   └── login.css         # Login page styles
└── pics/                 # Image assets
    ├── logo.png          # Brand logo
    ├── background.jpg    # Background images
    ├── product/          # Product images
    │   ├── chocolate crunsh.png
    │   ├── dark choco chunk.png
    │   ├── galaxy.png
    │   ├── oreo ment.png
    │   ├── vanilla chairy.png
    │   └── vanilla sprinkles.png
    ├── recipes/          # Recipe images
    │   ├── brownie.png
    │   ├── chocolate brownie with nuts.png
    │   ├── chocolate cake.png
    │   ├── chocolate cookie.jpg
    │   ├── chocolate muffin.png
    │   ├── cookies.jpg
    │   ├── pancake rolls.png
    │   └── pumpkin cheesecake.png
    └── feedback/         # Customer feedback images
        ├── profile1.png
        ├── profile2.png
        ├── profile3.png
        ├── profile4.png
        ├── profile5.png
        ├── profile6.png
        ├── profile7.png
        └── profile8.png
```

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (ES6+)**: Interactive functionality
- **Swiper.js**: Touch-enabled carousel/slider
- **Font Awesome**: Icon library

### Backend
- **PHP**: Server-side processing
- **XAMPP**: Local development environment

### Design & UX
- **Responsive Design**: Mobile-first approach
- **CSS Animations**: Smooth transitions and effects
- **Google Fonts**: Typography (Open Sans)

## 🚀 Installation

### Prerequisites
- XAMPP (or similar local server environment)
- Modern web browser
- Text editor (VS Code, Sublime Text, etc.)

### Setup Instructions

1. **Clone or Download the Project**
   ```bash
   # If using git
   git clone [repository-url]
   cd dountello
   ```

2. **Set Up Local Server**
   - Install XAMPP if not already installed
   - Start Apache server
   - Place project files in `htdocs` directory

3. **Access the Website**
   - Open your web browser
   - Navigate to `http://localhost/dountello`
   - The website should load successfully

### Alternative Setup (Without XAMPP)
If you prefer not to use XAMPP, you can run the project using any local server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Using PHP built-in server
php -S localhost:8000
```

Then access the website at `http://localhost:8000`


**Made with ❤️ for donut lovers everywhere!** 🍩✨ 
