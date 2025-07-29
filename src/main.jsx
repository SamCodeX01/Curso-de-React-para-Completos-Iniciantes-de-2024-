import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";  
//import { Router } from "lucide-react";
import TaskPage from "./pages/TaskPage.jsx"; // Importing the TaskPage component

const router = createBrowserRouter([// Define the routes for the application
  // Each route has a path and an element to render
      {
        path: "/",// The root path of the application
        element: <App/>,// The main App component to render at the root path
      },
      {
        path: "/task",
        element: <TaskPage/>,
      }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
