# Travel - Explore The World

This is a web application designed to showcase beautiful travel destinations and provide an intuitive interface for users to inquire about trips. The project includes multiple pages, dynamic elements, and form validation. Below is a detailed overview of the project structure and functionality.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Setup and Usage](#setup-and-usage)
- [Build Tools](#build-tools)

## Getting Started
To run this project locally, clone the repository and follow the setup instructions below. Ensure you have Node.js and npm installed on your system.

```bash
# Clone the repository
git clone https://github.com/your-repo/travel.git

# Navigate into the project directory
cd travel

# Install dependencies
npm install

# Start the development server
npx webpack --config webpack.config.js --watch
```

## Project Structure
The project is organized as follows:

```
project-root/
├── docs/
│   ├── index.html
│   ├── secondpage.html
│   ├── main.js
│   ├── secondpage.js
├── src/
│   ├── index.js
│   ├── secondpage.js
│   ├── styles/
│   │   ├── styles.css
│   │   ├── secondpage.css
│   ├── media/
│       ├── bg_cut.mp4
│       ├── secondvid.mp4
│       ├── logo1.png
│       ├── cape-town.png
├── node_modules/
├── package.json
├── webpack.config.js
```

## Features

### Index Page (Landing Page)
- **Video Background:** A looping muted video.
- **Header:** Contains a logo and navigation menu.
- **Dynamic Content:** Text animations and a "See Hotels" button linking to the second page.
- **Footer:** Social media icons with hover effects.

### Second Page
- **Background Switcher:** Dynamic background images/videos.
- **Form Validation:** Validates country, date, number of people, email, and phone inputs.
- **Confirmation Messages:** Displays success or error messages after form submission.

### Shared Components
- **Reusable Header/Footer:** Dynamically created using JavaScript.
- **Form Validation:** Ensures proper user input.

## Setup and Usage

### Running Locally
1. Install all dependencies with `npm install`.
2. Run the development build with `npx webpack --config webpack.config.js --watch`.
3. Open `docs/index.html` in your browser to view the project.

### Building for Production
1. Update the webpack configuration to use production mode.
2. Run `npx webpack --config webpack.config.js`.
3. Serve the contents of the `docs/` folder on your preferred web server.

## Build Tools

### Webpack
The project uses Webpack for bundling JavaScript and CSS files. Key plugins and loaders include:
- **CSS Loader:** For importing CSS files.
- **Style Loader:** For injecting CSS into the DOM.
- **File Loader:** For handling media assets.

### npm Scripts
- `npm start`: Start the development server.
- `npm run build`: Build the project for production.

## Notes
- The `secondpage.html` contains a form for trip inquiries. Ensure the form is tested for responsiveness and proper validation.
- The dynamic components, such as headers and footers, are created via JavaScript for consistency across pages.
- Media assets like videos and images are located in the `src/media/` folder.

For any issues or suggestions, feel free to open an issue or contribute to the project.
