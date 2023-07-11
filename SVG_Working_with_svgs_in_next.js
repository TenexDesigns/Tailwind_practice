To use the SVG in your Next.js app, you can follow these steps:

Create a new React component to render the SVG:

Inside your components folder, create a new file called Logo.js. Then, copy the SVG code you provided into this file. Wrap the SVG code with a React functional component, like this:

jsx
Copy code
import React from 'react';

const Logo = () => {
  return (
    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* SVG code here */}
    </svg>
  );
};

export default Logo;
Import and use the Logo component in your Next.js app:

In any of your desired pages or components, import the Logo component and use it like any other React component. For example, create a file called HomePage.js:

jsx
Copy code
import React from 'react';
import Logo from '../components/Logo';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Logo />
    </div>
  );
};

export default HomePage;
Verify that the SVG renders correctly:

Start or rebuild your Next.js app, and visit the corresponding route where you've used the Logo component. You should see the SVG rendered on the page.

By following these steps, you can use the SVG in your Next.js app by creating a dedicated React component and then incorporating that component into your desired pages or components.
