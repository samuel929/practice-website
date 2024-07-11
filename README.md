# Practice Areas

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a web application built using React, TypeScript, and Vite. It leverages a variety of powerful libraries and tools, such as Chakra UI for UI components, Framer Motion for animations, Nivo for data visualization, and Swiper for carousels. The project follows a camelCase naming convention for consistency and readability.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/projectname.git
   cd projectname

   npm install

   npm run dev
   ```

## Folder structure

projectname/
├── assets/ # Contains images and other asset files
├── dummyData/ # Contains mock data for testing and development
├── hooks/ # Contains custom React hooks
├── types/ # Contains TypeScript type definitions
├── Layout/ # Contains routing layout components
├── Pages/ # Contains page components for different routes
├── components/ # Contains reusable UI components
├── public/ # Public assets and index.html
├── src/ # Source files
│ ├── App.tsx # Main App component
│ └── index.tsx # Entry point for the React application
└── README.md # Project documentation

## Usage

This project uses several libraries to enhance the development experience and functionality:

Chakra UI: A simple, modular, and accessible component library for React.
Emotion: A library designed for writing CSS styles with JavaScript.
Nivo: Provides a rich set of data visualization components.
Framer Motion: A production-ready motion library for React.
React Icons: Includes popular icons for React.
React Router: Declarative routing for React.
React Slick: A carousel component for React.
Swiper: A modern touch slider.

## Example of using a Chakra UI component

import { Button } from "@chakra-ui/react";

function MyButton() {
return <Button colorScheme="blue">Click Me</Button>;
}

## Example of using a custom hook

const ScrollToTop = () => {
const { pathname } = useLocation();

useEffect(() => {
window.scrollTo(0, 0);
}, [pathname]);

return null;
};

export default ScrollToTop;

## Dependencies

## Production Dependencies

@chakra-ui/icons: ^2.1.1
@chakra-ui/react: ^2.8.2
@emotion/react: ^11.11.4
@emotion/styled: ^11.11.5
@nivo/geo: ^0.87.0
framer-motion: ^11.2.12
react: ^18.3.1
react-dom: ^18.3.1
react-icons: ^5.2.1
react-router-dom: ^6.24.0
react-slick: ^0.30.2
slick-carousel: ^1.8.1
swiper: ^11.1.4

## Development Dependencies

@types/react: ^18.3.3
@types/react-dom: ^18.3.0
@types/react-slick: ^0.23.13
@typescript-eslint/eslint-plugin: ^7.13.1
@typescript-eslint/parser: ^7.13.1
@vitejs/plugin-react: ^4.3.1
autoprefixer: ^10.4.19
eslint: ^8.57.0
eslint-plugin-react-hooks: ^4.6.2
eslint-plugin-react-refresh: ^0.4.7
postcss: ^8.4.39
tailwindcss: ^3.4.4
typescript: ^5.2.2
vite: ^5.3.1
