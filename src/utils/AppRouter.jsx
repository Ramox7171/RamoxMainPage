import { createBrowserRouter } from 'react-router-dom';

import CardContainer from '../components/CardContainer.jsx';
import Blog from '../components/Blog.jsx';
import About from '../components/About.jsx';
import ContactForm from '../components/ContactForm.jsx';
import RootLayout from '../components/Root.jsx';
import HomePage from '../components/HomePage.jsx';

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
    ],
  },
]);
