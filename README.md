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

📦 Your-Vite-Project
│── 📂 public            # Static assets (e.g., images, fonts, favicon)
│── 📂 src               # Main source code
│   │── 📂 components    # All reusable React components
│   │── 📂 context       # Context API files for state management
│   │── App.jsx          # Root component
│   │── main.jsx         # Entry point of the application
│── .env                 # Environment variables
│── .gitignore           # Files to ignore in Git
│── package.json         # Project dependencies and scripts
│── vite.config.js       # Vite configuration file
│── README.md            # Documentation

🔍 Explanation of Key Folders and Files
    public/ → Contains static assets like images, fonts, and the favicon. These files remain unchanged during the build process.
    src/ → The main source directory containing all React-related files.
    components/ → Houses reusable UI components (e.g., buttons, modals, forms).
    context/ → Stores global state management files using React Context API.
    App.jsx → The root component of the application.
    mian.jsx → The main entry file that renders the React app inside the root div.
    .env → Stores environment variables (e.g., API keys).
    .gitignore → Specifies files to be ignored by Git (e.g., node_modules)
    package.json → Manages project dependencies and scripts.
    vite.config.js → Configuration settings for Vite.
    README.md → Project documentation.

---------------------------------------------------------------------------------------------------

🚀 Features & Functionality
Core Features to Implement
1.	Image Management:
    o   Ability to add and remove Images from the library.

2.	Reading Interface:
    o	Implement a UI with pagination and basic navigation.
    o	Support for Zoom In/Out, themes (light/dark mode).

3.	Library & Collections:
    o	Categorize images into collections for better organization.
    o	Ability to search and filter Images in the library.

4.	Settings Section:
    o	User preferences for background colour.

-------------------------------------------------------------------------------------------------

🚀 Testing Instructions