
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Home from '././view/home/home';
import About from './view/about/about';
import Contact from './view/contact/contact';
import { THEME } from './config/data';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([

   {
      path:"/",
      element:<Home/>
   },
   {
      path:"./about",
      element:<About/>
   },
   {
      path:"./contact",
      element:<Contact/>
   },
])

root.render(<div style={{backgroundColor : THEME.main}}>
   <RouterProvider router={router}/></div>);

