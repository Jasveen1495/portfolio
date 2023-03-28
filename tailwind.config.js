/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            priCol: "#9900fa",
            black: "#2e2e2e",
            grey: "#505050"
         },
         fontFamily: {
            'Poppins': 'Poppins',
            'cybg': 'Covered By Your Grace'
         },
         columns: {
            '2': '2 350px'
         },
         boxShadow: {
            'default': '0px 10px 20px rgba(0, 0, 0, 0.1)'
         }
      },
   },
   plugins: [],
}
