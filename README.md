# Diari Jajan Website

"Diari Jajan" is a website made using the React JS framework. This project is made in order to complete one of the recruitment stage of Kompas.id. The website is used to track the expenses made during the month of February 2021, it is responsive and can be opened in both desktop and mobile.

## Tech Stack

* React JS

## Structure

Most of the important folders and files are inside the `src` folder. Inside, you will find 3 __files__:

1. `App.js`
2. `index.js`
3. `index.css`

All the components are placed on the `App.js` file, it is also where all the functions are stored. The root of the app is in the `index.jsx`. `styles.css` is the file for global styles. 

Aside from the files, you will also find 3 __folders__:

1. `components`
2. `consts`
3. `helpers`

All of the componets for the app are stored in the `components` folder, there is also an `index.js` file where all the components are exported in order to make importing easier in other files. `consts` is used to store all constant data needed, such as the dummy data. `helpers` contains the function tools needed in some pages.

## Documentation

In order to start the app in development mode,  you can run this syntax in the project directory:

### `npm start`

By default, the app will open in [http://localhost:3000](http://localhost:3000). The page also has hot reload, which means that it will refresh if you make any edits.

### `npm run build`

This will bundle the React in production mode and optimizes the build for the best performance.

The build is then minified and the app is ready to be deployed!