# 🚀 Welcome to Athena - A shopping website application!

# Front End Project

## Tech Stack

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### React

- In order to implement a responsive, single-page application capable of dynamically rendering with third-party API data, we utilized React Context and Hooks.

![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

### Nodejs

- Despite being a front-end capstone that explicitly placed back-end implementation out of scope, used Nodejs to utilize Express.

![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

### Express

- Simplified API requests by implementing a proxy server in Express.js that adds authentication while forwarding requests to an existing RESTful API.

![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### CSS

- Aside from being the sole technology used for the aesthetic styling of this application:
  - All styling, including functional implementations like the modals and image gallery, were written solely with CSS.
  - The use of Grid made the overlay button functionality and precise placement of static assets accessible and simple.
  - Flexbox was instrumental in handling the wealth of dynamic data being delivered to the page.

![jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

### Jest

- Each of the 4 contributors took independent ownership over the development of each module present in the application, which introduced the need for rigorous, automated testing.
- React Testing Library kept our efforts and tests focused on the user experience while making it possible to test the vast amount of interactions and dynamic components in our application.

![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

### Webpack

- Webpack was our solution to elegantly handle our numerous static assets, implement JSX, and harness ES6 in this project.

---
## Demo
<p align="center">
  <img alt="app demo" src="lib/Athena.gif">
</p>

## Set up Instructions

How to host this single page application on your local machine.

1. Make sure you've pulled the version you want to run (see Git Workflow)
1. Make a copy of the file `server/config/config.example.js` and rename to `config.js`
1. Assign the `API_KEY` variable to your GitHub token
1. Install dependencies

    ```bash
    npm install
    ```

1. In one terminal, build the webpack bundle

    ```bash
    npm run watch
    ```

1. In another terminal, start the server

    ```bash
    npm start
    ```

1. Visit [localhost:3000](http://localhost:3000) in the browser

---

## App Components
The application has 3 main component:

### Overview

Developed by [Logan Qiu](https://github.com/logan-qiu)

- Gallery
- Product Information
![image](https://user-images.githubusercontent.com/78101792/128643993-9ea5c404-bdf3-481c-8559-1e546df8390b.png)
   
- Product Description
![image](https://user-images.githubusercontent.com/78101792/128644057-33d7cb0f-a4e3-4a94-aeda-5295fbef602f.png)




### Related Items

Developed by [Sheri Tsao](https://github.com/ssleeyrc)

- Related List
- Outfit List
![image](https://user-images.githubusercontent.com/78101792/128644124-5faf4270-363c-4b46-bda8-b7f053e25121.png)


### Ratings & Reviews

Developed by [Ran An](https://github.com/luffyan)

- Rating Summary
- Review List
![image](https://user-images.githubusercontent.com/78101792/128644196-caed2430-ab7c-4bef-bece-33a3f4e7520f.png)
