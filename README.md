<<<<<<< HEAD
=======
# TechSphere Application

## About The Project
TechSphere is a sleek and modern Single Page Application (SPA) created using React. The app provides an intuitive interface to display company overview and an employee directory. The core focus of this application is on utilizing React Hooks, global state management, and custom CSS styling via Tailwind CSS to deliver a polished and responsive layout.

### Key Features
- **Theme Switching:** Uses React Context API to allow users to toggle seamlessly between a clean Light mode and Dark mode.
- **Live Data Fetching:** Utilizes Axios to pull dynamic mock profile data from `dummyjson.com` for rendering the employee dashboard.
- **Client-Side Routing:** Implemented React Router DOM for smooth, immediate page transitions between the Home window and the Employees page.
- **Minimalist Styling:** Features a highly readable, centered list design relying on beginner-friendly Tailwind utility classes.

---

## Tech Stack
- **Framework / Library:** React JS
- **Styling Method:** Tailwind CSS
- **Page Navigation:** React Router DOM
- **HTTP Client:** Axios
- **Build Tool:** Vite

---

## Folder Architecture
A quick overview of the file structure inside `src/`:

```text
src/
 ├── assets/             # Local images and graphic resources
 ├── components/         # Standalone UI segments (Header, Footer)
 ├── context/            # Global state files (ThemeContext)
 ├── pages/              # Main route component views (Home, Employees)
 ├── App.jsx             # Main application wrapper and router pathing
 ├── index.css           # Global stylesheet containing Tailwind directives
 └── main.jsx            # Entry point for rendering the React tree
```

---

## Local Setup Instructions
To get this application running locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the Vite development server:**
   ```bash
   npm run dev
   ```

3. Open up your web browser and navigate to `http://localhost:5173`.

---

## API Reference
The application retrieves its dummy data from a free public API:
- **Endpoint:** `https://dummyjson.com/users`
- **Action:** A `GET` request resolves an array of user objects displaying details like names, emails, and contact numbers.

---

**Developed By:**

Muhammad Mahad Bin Ahmar 
BS Software Engineering - SEF2  
Roll No: L1F23BSSE0374
>>>>>>> 28adaea9573962dba478e4ee7ce07d7060da408e
