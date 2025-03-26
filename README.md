🚀 Project Setup
Follow these steps to install and run the application locally:

1️⃣ Prerequisites
Ensure you have the following installed on your system:

   1.Node.js (Latest LTS version recommended)
   2.npm (Comes with Node.js)

2️⃣ Clone the Repository

    git clone https://github.com/anuj5926/web-Gallery.git
    cd web-Gallery

3️⃣ Install Dependencies
Run the following command to install required packages:

    npm install

4️⃣ Start the Development Server
Launch the application using:

    npm run dev

5️⃣ Open in Browser
Once the server starts, open your browser and visit:

    http://localhost:5173

--------------------------------------------------------------------------------------------------

🚀 Project Structure
Explanation of folders and components:

📦 web-Gallery
│── 📂 public            # Static assets (e.g., images, fonts, favicon)
│── 📂 src               # Main source code
│   │── 📂 components    # All reusable React components
│   │── 📂 context       # Context API files for state management
│   │── App.jsx          # Root component
│   │── main.jsx         # Entry point of the application
│   │── index.css        # Css for your react app
│── index.html           # It holds the root <div> where your React app will be mounted
│── .env                 # Environment variables
│── .gitignore           # Files to ignore in Git
│── package.json         # Project dependencies and scripts
│── README.md            # Documentation

🔍 Explanation of Key Folders and Files
    public/ → Contains static assets like images, fonts, and the favicon. These files remain unchanged during the build process.
    src/ → The main source directory containing all React-related files.
    components/ → Houses reusable UI components .
    context/ → Stores global state management files using React Context API.
    App.jsx → The root component of the application.
    main.jsx → The main entry file that renders the React app inside the root div.
    index.html: This is the entry point for the Vite build. It holds the root <div> where your React app will be mounted.
    index.css: The index.css file is usually where you place global styles for your application.
    .env → Stores environment variables (e.g., API keys).
    .gitignore → Specifies files to be ignored by Git (e.g., node_modules, .env)
    package.json → Manages project dependencies and scripts.
    README.md → Project documentation.

---------------------------------------------------------------------------------------------------

🚀 Features & Functionality
Core Features to Implement
1.	Image Management:
    o   Ability to add and remove Images from the library.
            1.In the root path there are gallery images and above images there are 2 button upload image and remove image.
            2.Click on upload button you will get option of upload image and when you select it. It will show that images in your gallery.
            3.If you Click in remove button so you will see remove button above all images and you can remove image from gallery and click cancel button to remove that button from images.
            4.you can remove multiple image at a same time.

2.	Reading Interface:
    o	Implement a UI with pagination and basic navigation.
            1.In the root path there are gallery images and have done pagination in it.
            2.In header or nav bar there are button to go on collection of images and use basic navigation.

    o	Support for Zoom In/Out, themes (light/dark mode).
            1.If your mouse is above images you can scroll up and down to zoom In/Out in images.
            2.For dark and light theme there is a button in header to change theme.

3.	Library & Collections:
    o	Categorize images into collections for better organization.
            1.In header or nav bar there are button to go on collection of images.
            2.Click on collection images if will open all images of collection.

    o	Ability to search and filter Images in the library.
            1.There is a search button in header and you can give word for images and i will query through nasa api if i got data i will show you otherwise so no data found.

4.	Settings Section:
    o	User preferences for background color.
            1.There is a color picker in header if you change the color background color also change with it.

-------------------------------------------------------------------------------------------------

🚀 Testing Instructions:
    Haven't worked with writing test cases have to learn and take time.


---------------------------------------------------------------------------------------------------

Demo Link url :-https://eloquent-hamster-40dec1.netlify.app/

In a React application, when deployed, refreshing a page on a non-root route may lead to a "Page Not Found" error. This happens because the server tries to access a route that doesn't exist on the server itself. Here's how you can resolve this issue:

    For Apache Web Server (Production Server):
        You can use an .htaccess file to configure the server to redirect all requests to the index.html file, except for actual file requests. This allows React's client-side routing to handle the navigation correctly.

    For Netlify:
        In Netlify, you can use the netlify.toml configuration file to define redirects. This ensures that any non-root route is redirected to index.html, allowing the React app's client-side routing to handle the page correctly.

By implementing these redirects, your React application will work smoothly even when the page is refreshed or directly accessed on any route.