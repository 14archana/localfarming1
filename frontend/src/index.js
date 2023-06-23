import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NewProduct from './pages/NewProduct';
import SignUp from './pages/SignUp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
     <Route index element={<Home/>}/>
     <Route path='Menu'element={<Menu/>}/>
     <Route path='About'element={<About/>}/>
     <Route path='Contact'element={<Contact/>}/>
     <Route path='Login'element={<Login/>}/>
     <Route path='NewProduct'element={<NewProduct/>}/>
     <Route path='SignUp'element={<SignUp/>}/>
     
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
