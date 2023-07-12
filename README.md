# Getting Started with Next.js & Firebase Registration

This project serves as a guide to get started with Next.js and Firebase, demonstrating how to set up authentication with email/password and error handling with React Hot Toast.
<br>

## Prerequisites

Ensure you have Node.js installed on your local machine. If not, download it from [Node.js official website](https://nodejs.org/). <br>

## Project Setup

1. Install `Next.js` and create a new app:

-     `npx create-next-app@latest .`

  will create a Next.js app inside the current folder

-     `npx create-next-app@latest`
  will create a new Next.js app inside a folder named `my-app`. It will prompt you to enter the name of the project, this can be anything you want. <br>

2. Install `Tailwind CSS` when prompted in the CLI <br>

3. Run `npm run dev` to start the development server. Make sure you use `nvm use v18` to use the correct node version.

**IMPORTANT NOTE** <br>
When installing packages, make sure to shut down the server and restart it again. This will ensure that the packages are installed correctly and you don't run into any errors.

## Project Configuration

### Code Removal

**REMOVE** the following files from the project: <br>

1. Open the `app` folder, go to `page.js` inside the `return` statement, collapse the `main` tag element and delete all of it. Add a `div` and a `h1`, give it any title you want <br>
2. Open the `public` folder delete the `next.svg` & `vercel.svg` images <br>
3. In the tailwind.config.js file, delete the `backgroundImage` object <br>
4. In the `app` folder, delete the `globals.css` styles but keep the **3** `@tailwind` imports

### Code Addition

**ADD** the following files to the project: <br>

1. In the `global.css` add `html, body, :root {height: 100%;}` & **ALL** the `btn` classes
2. Open the `layout.js` file and update the **metadata** with your own information. You can also import any google fonts you like. For this project I used `Montserrat`

## Important Installation Notes & Packages

### React Hot Toast

- [ ] Open your CLI and run `npm i react-hot-toast` **or** `npm install react-hot-toast` **or** `yarn add react-hot-toast` to install React Hot Toast
- [ ] Import the `Toaster` component from `react-hot-toast`, within the `app` folder, open the `layout.js` file, at the top of the file `import { Toaster } from 'react-hot-toast'`

### Link from Next

When you are using `Link` in `Next.js` 13 you need to import it from `next/link`, be sure to **NOT** include in `a` tag just pass the `href` prop to the `Link` component. <br>

### Form Controls Component

This is a custom component that will be used for the **sign up** and **sign in pages**. It will be located in the `components` folder. Add this component to your files to handle the form layout. <br>

 </details>

# Create Email & Password Auth Sign-in

<details>
      <summary>
            <b>Click to expand</b>
      </summary>

## Setting up Firebase in Next.js

### What is Firebase?

Firebase is a BaaS - Backend-as-a-Service. It provides a lot of services like authentication, database, storage, hosting, etc. We will be using Firebase for authentication and database.

## Create a Firebase Project

- [ ] Go to [Firebase Console](https://console.firebase.google.com/) and click on **ADD PROJECT** to create a new project. You can name it anything you want.
- [ ] Enable analytics if you want to track your app usage (optional)
- [ ] Click on Continue
- [ ] On the homepage click on the **Web Icon** to create a new web app
- [ ] Give it a name and click on Register app
- [ ] Click on Box for **Firebase Hosting** and click on **Next**
- [ ] In your CLI run `npm i firebase` **or** `npm install firebase` **or** `yarn add firebase` to install Firebase SDK
- [ ] `Copy the firebaseConfig object` and paste it in a safe place, You will **NEED** this later!
- [ ] Install the `Firebase CLI` run the command in CLI `npm install -g firebase-tools`
- [ ] Deploy your app to Firebase Hosting, run the command in CLI `firebase login` and login to your account
- [ ] Run `firebase experiments:enable webframeworks` to enable the Next.js support
- [ ] Run the command in CLI `firebase init` and select the following options:
      <br>
      <br>
      `Hosting: Configure and deploy Firebase Hosting sites` <br>
      `Use an existing project` <br>
      `Select the project you created` <br>
      `Answer Following Questions in CLI` <br>
      <br>
- [ ] On the Project Overview page, You will use `Authentication` services, so click on **Build** then **Authentication** finally **Get Started**. This is where the users that sign up for our app will be stored
- [ ] In the Authentication settings, `Choose Sign-in-method - add Email/Password`

## Setting up Firebase in Next.js

Remeber the firebaseConfig object you copied earlier? We will be using it now to set up Firebase in our Next.js app. <br>

- [ ] Create a `.env` file at the root of the project and add the following environment variables:
      <br>
      <br>
      `NEXT_PUBLIC_FIREBASE_API_KEY="api-key"` <br>
      `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="auth-domain"` <br>
      `NEXT_PUBLIC_FIREBASE_PROJECT_ID="project-id"` <br>
      `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="storage-bucket"` <br>
      `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="sender-id"` <br>
      `NEXT_PUBLIC_FIREBASE_APP_ID="app-id"` <br>
      `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="analytic-id"` <br>
      <br>
- [ ] Add the `.env` to `.gitignore`, if you pushed up your code to GitHub, you don't want to expose your `API keys`. If you did run the command `git rm -r --cached .env` to remove all the .env files from cache
- [ ] Close down server and run `npm run dev` again to restart the server <br>
- [ ] Create a folder at the root level, name it `firebase` and create a `config.js` file inside it

**CONGRATS** You have successfully set up Firebase in your Next.js app!

## Setting up Firebase Authentication

- [ ] Create a `auth` folder inside the `firebase` folder, then create a `signup.jsx` and `signin.jsx` file

## Listen for Auth State Changes

We want to know when users are **logged** in or **logged out**. We can create **protected pages** and only display certain contents to the **logged in user**. Firebase provides a method to listen for auth state changes `onAuthStateChanged()`. Making the **user data available globally** is a good idea, we can do this utilizing the `React Context API` allowing us to share state with other components. <br>

- [ ] In the `root` directory, create a folder `context`, then create a `AuthContext.jsx` file inside it

To access the values passed to the `AuthContext.Provider`, we are exporting `useAuthContext`, now we can use the `user` value.
<br>
<br>
In order to use the `useAuthContext` hook, we need to wrap the `AuthContext.Provider` around all the components in the `layout.js` file located in the `app` directory, Wrap the `{ children }` prop with `AuthContext.Provider`
<br>
<br>
Now we can create **protected routes** and only display certain contents to the **logged in user**!

## Creating Protected Pages

- [ ] Open the `app` folder and create a new folder `admin` and add a `page.jsx` file inside it. This will be a protected page that only logged in users can access

## Creating the Sign-Up, Sign-In & Admin Pages

In Next.js 13, you create pages within the `app` directory. Each page has it's own folder with a `page.js` or `page.jsx` file.
<br>
<br>
For `Route Groups and Private Folders` you can create a folder with `( )` and add a `page.js` or `page.jsx` file inside of it. This will allow for Group routes without affecting routing.
<br>
<br>
For this project I created a `(site)` folder with a `page.jsx` to show the **Sign Up** page first.

### Checklist for creating pages

- [ ] Delete the current `page.js` file that is in the `app` directory
- [ ] Inside the `app` directory, create a `(site)` folder with a `page.jsx` file inside it
- [ ] Next, create a `signin` folder inside the `(site)` folder and add a `page.jsx` file.
- [ ] Create a `components` folder in the root directory and add a `FormControls.jsx` file inside it. This way we can reuse the form controls for both the sign up and sign in pages
- [ ] Import the `FormControls` component into the Sign-Up page located in the `(site)` folder `page.jsx` file & the Sign-In page located in the `(site)/signin` folder within the `page.jsx` file

**Congrats! You have successfully created a protected page & setup Firebase Authentication in your Next.js app! This is completing the basics of creating a simple login with just a email and password**

</details>

# Success & Error Handling with React Hot Toast

<details>
      <summary>
            <b>Click to expand</b>
      </summary>

## What is React Hot Toast?

Add seamless notifications to your React app with ease. <br>

## Getting Started with React Hot Toast

- [ ] Run one of these commands in your CLI `npm i react-hot-toast` **or** `npm install react-hot-toast` **or** `yarn add react-hot-toast`
- [ ] Import `Toaster` from `react-hot-toast` in the `app` folder, `layout.js` file, your import should look like this `import { Toaster } from 'react-hot-toast'`
- [ ] Add the `Toaster` component below the `AuthContext.Provider` component in the `layout.js` file
- [ ] In the `(site)` folder `page.jsx` file, `import { toast } from 'react-hot-toast'`
- [ ] Add the following code to the **error** and **success** handlers: `toast.error("Sign up failed!")` & `toast.success("Sign up successful!")`
- [ ] Next, add them to `signin` folder, `page.jsx` file

**If you see the messages appear in the browser, you have successfully set up React Hot Toast!**

</details>

## License

[MIT](LICENSE)

## References

The project was inspired by the article on setting up Next.js & Firebase. Although several modifications have been made, it's important to give due credit.

[How to Build a Full Stack App with Next.js 13 and Firebase](https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/)
