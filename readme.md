# AVANT - FULL-STACK

This is a Full-stack e-commerce web application

The goal was to build an authentication system using React and JWT on the client side and Express on the server side. The process of building this system involved several steps, including setting up the client and server, creating the necessary routes and functions, and implementing the use of JWT.

Landing Page

![alt text](avant-landingpage.gif)

Home Page

![alt text](avant%20gif.gif)

## Technologies Used

- React
- TailwindCSS
- SwiperJS
- Yup & Formik
- Axios
- Node.js
- Express
- JWT (JSON Web Tokens)
- bcrypt

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js
- npm
- React
- Axios
- Node.js
- Express
- JWT (JSON Web Tokens)
- bcrypt

## Installing

### Clone the repository

```
git clone git@github.com:UziStacks/avant-fullstack.git
```

## Frontend - client

### Install the dependencies

```
npm i
```

### Start the development server

```
npm run start
```

### Open http://localhost:3000 to view the app in the browser.

## Backend - server

### Install the dependencies

```
npm install
```

### Start the development server

```
npm start
```

### Open http://localhost:5000 to view the app in the browser.

## Functionality

- fully functional cart system
- functioning checkout process
- User can create an account
- User can login
- User can perform certain authenticated actions

## Challenges and Solutions

- Implementing JWT authentication: To solve this, I used the jsonwebtoken library to handle the generation and verification of tokens on the server side and the use of tokens for authenticated requests on the client side.

- Error handling: Another challenge I faced was handling errors properly. This involved understanding how to properly handle errors on both the client and server side. I had to ensure that the system would handle errors in a way that was user-friendly and provided meaningful feedback to the user. I also had to ensure that the system would not break if an error occurred. To overcome this challenge, I made sure to properly test the system and added error handling code in the necessary areas.

- Implementing User Info Changes: When building the feature that allowed users to change their information, I initially ran into a problem where I was creating a new object instead of updating the existing user object. To resolve this, I first verified that the user was changing the correct account information. Then, using the new data provided by the user, I updated the corresponding property of the user object.

## Future Improvements

### Completed

- Successfully added authentication middleware for protected routes. ✅

- Transformed the cart system to server-side rendering. ✅
- Implemented the ability to create and manage wishlists. ✅
- Added email verification as a feature. ✅
- Enabled users to change their first name, last name, username, password, and email. ✅
- Implemented the ability for users to change their profile picture. ✅
- Developed a system to store and manage product, collection, and category data in a database. ✅
- Fixed issues with search functionality. ✅
- Configured the default theme to match the user's device settings. ✅
- Enhanced the scroll-to-top functionality. ✅
- Dynamically updated page titles based on the directory path. ✅
- Implement a zoom feature that activates when hovering over a product image.✅

### Uncompleted

- Enhance the Footer by adding new features and functionalities.

- Create a dedicated page for the Terms of Service.
- Store Orders and display them on Orders page.
- Configure a Newsletter system that enables users to subscribe and receive updates.
- Enable a "forgot password" feature for users who need to reset their login credentials.
- Improve the user experience of the theme toggle by making it smoother and more seamless.
- Adjust the settings according to user preferences and specifications.
- Incorperate google Auth

## Authors

- Terel Phillips - @TrendiStack
