import { createBrowserRouter } from 'react-router-dom';

import CardContainer from '../components/CardContainer.jsx';
import Blog from '../components/Blog.jsx';
import About from '../components/About.jsx';
import ContactForm from '../components/ContactForm.jsx';
import RootLayout from '../components/Root.jsx';
import HomePage from '../components/HomePage.jsx';
import PhotoLayout from '../components/PhotoLayout.tsx';
import PhotoGallery from '../components/PhotoGallery.tsx';
import PhotoDetails from '../components/PhotoDetails.tsx';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       { path: '/', element: <HomePage /> },
//       { path: 'projects', element: <CardContainer /> },
//       { path: 'blog', element: <Blog /> },
//       { path: 'about', element: <About /> },
//       { path: 'contact', element: <ContactForm /> },
//     ],
//   },
// ]);



export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'projects', element: <CardContainer /> },
      { path: 'blog', element: <Blog /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <ContactForm /> },
      {
        path: 'foto', // Nowa sekcja dla /foto
        element: <PhotoLayout />, // Główny komponent dla /foto (bez nagłówka)
        children: [
          { path: 'gallery', element: <PhotoGallery /> }, // Widok galerii zdjęć
          { path: ':id', element: <PhotoDetails /> }, // Widok szczegółów zdjęcia
        ],
      },
    ],
  },
]);