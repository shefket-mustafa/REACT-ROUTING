/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  
  ```
*/
'use client'

export default {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
  }