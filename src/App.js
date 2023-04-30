import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import'./App.css'
import OurStore from './pages/OurStore';
import CompareProducts from './pages/CompareProducts';
import Wishlist from './pages/Wishlist';
import LoginPage from './pages/LoginPage';
import ForgorPassword from './pages/ForgorPassword';
import SignUp from './pages/SignUp';
import NewPasswordPage from './NewPasswordPage';
import SingleBlogPage from './pages/SingleBlogPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfServices from './pages/TermsOfServices';
import MainProductPage from './pages/MainProductPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog:id' element={<SingleBlogPage/>}/>
          <Route path='/OurStore' element={<OurStore/>}/>
          <Route path='/product/:id' element={<MainProductPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/compareproducts' element={<CompareProducts/>}/>
          <Route path='/Wishlist' element={<Wishlist/>}/>
          <Route path='/loginpage' element={<LoginPage/>}/>
          <Route path='/forgotpassword' element={<ForgorPassword/>}/>
          <Route path='/signuppage' element={<SignUp/>}/>
          <Route path='/newpassword' element={<NewPasswordPage/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/refundpolicy' element={<RefundPolicy/>}/>
          <Route path='/shippingpolicy' element={<RefundPolicy/>}/>
          <Route path='/termofservices' element={<TermsOfServices/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          </Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;
