/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
	container: {
		center: true,
		padding: "15px",
	
	},
	secreens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",	
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
  			primary: "#1c1c22",
			//color for the Logo . symbol
			accent: { 
				DEFAULT: "#1f57cd",
				hover: "#9fbbff",
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
