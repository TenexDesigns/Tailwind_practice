Tailwind CSS provides utilities to control an elements white-space property, which is used to control text wrapping and white spacing. It provides several classes that correspond to different values of the CSS white-space property geeksforgeeks.org:

whitespace-normal: This is the default value. When the whitespace class of tailwind is set to normal, every sequence of two or more whitespaces will appear as a single whitespace. The content in the element will wrap wherever necessary. Example usage: <element class="whitespace-normal">...</element>.
whitespace-nowrap: When the whitespace class of tailwind is set to nowrap, every sequence of two or more whitespaces will appear as a single whitespace. The content in the element will not be wrapped to a new line unless explicitly specified. Example usage: <element class="whitespace-nowrap">...</element>.
whitespace-pre-line: When the whitespace class of tailwind is set to pre-line value, every sequence of two or more whitespaces will appear as a single whitespace. The content in the element will be wrapped when required and when explicitly specified. Example usage: <element class="whitespace-pre-line">...</element>.
whitespace-pre-wrap: When the whitespace class of tailwind is set to pre-wrap value, every sequence of whitespaces will appear as it is. The content in the element will be wrapped when required and when explicitly specified. Example usage: <element class="whitespace-pre-wrap">...</element>.
These classes can be applied responsively using Tailwinds responsive design features. You can control the whitespace property of an element only at a specific breakpoint by adding a {screen}: prefix to any existing whitespace utility. For example, adding the class md:whitespace-pre to an element would apply the whitespace-pre utility at medium screen sizes and above v2.tailwindcss.com.

<div class="whitespace-normal md:whitespace-pre ...">
<!-- ... -->
</div>
If you dont plan to use the whitespace utilities in your project, you can disable them entirely by setting the whitespace property to false in the corePlugins section of your config file:

// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
     whitespace: false,
    }
  }
You can also customize your spacing scale by editing theme.spacing or theme.extend.spacing in your tailwind.config.js file tailwindcss.com.

module.exports = {
  theme: {
    extend: {
      spacing: {
        '5px': '5px',
      }
    }
  }
}
By default, Tailwind includes a numeric spacing scale. The values are proportional, so 16 is twice as much spacing as 8 for example. One spacing unit is equal to 0.25rem, which translates to 4px by default in common browsers tailwindcss.com.

