import { createBrowserRouter } from "react-router-dom";
import Blues_Pink from "../Blues_Pink"
import About from "../pages/about";
import Contact from "../pages/contact";
import Gallery from "../pages/gallery";
import SchoolWrapper from "./SchoolWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SchoolWrapper />,
    children: [
      {path: "/",
        element: <Blues_Pink />
      },
      {path: "/about",
        element: <About />
      },
      {path: "/gallery",
        element: <Gallery />
      },
      {path: "/contact",
        element: <Contact />
      },
    ],
  }
]);

export default router;
