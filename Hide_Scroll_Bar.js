Installation
Install the plugin from npm:

# Using npm
npm install tailwind-scrollbar-hide

# Using Yarn
yarn add tailwind-scrollbar-hide

# Using pnpm
pnpm add tailwind-scrollbar-hide
Then add the plugin to your tailwind.config.js file:

// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
Usage
Use in you template scrollbar-hide for visual hiding scrollbar

<div class="w-4 scrollbar-hide">...</div>
or restore default value use scrollbar-default

<div class="w-4 scrollbar-hide md:scrollbar-default">...</div>
