import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from '../pages/home/Home'
import Contact from '../pages/contactus/Contact';
import Payment from '../Authentication/Payment/Payment';
import SignUp from "../Authentication/SignUp/SingUp";
import ChangePassword from '../Authentication/Changepassword/Changepassword'
import Login  from '../Authentication/Login/Login';
import Whoweare from '../pages/Whoweare/Whoweare';
import Ourconsultants from '../pages/Ourconsultans/OurConsultanssub/Ourconsultants';
import BookAppoinments from '../pages/BookAppoinments/BookAppoinmentsub/BookAppoinments';
import Viewprofile from '../pages/Ourconsultans/Viewprofile/Viewprofile'
import UserProfile from '../pages/Userdetails/UserProfile/Userprofile';
import FAQ from '../pages/Userdetails/FAQ/FAQ';
import Rescheduleappoinment from '../pages/Userdetails/Rescheduleappoinment/Rescheduleappoinment'
import Guide from '../pages/BookAppoinments/Guide/Guide';
import Category from '../pages/BookAppoinments/Category/Category';
import Form from "../pages/Userdetails/Form/Form";
import Booksession from "../pages/Ourconsultans/Booksession/Booksession"; 











export default function Navigate() {
    return (
        <Router>
            <div>
                <div><Header/></div>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                
                    <Route path="/Payment" element={<Payment/>}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/changepassword" element={<ChangePassword />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
 


                    <Route path="/whoweare" element={<Whoweare/>}></Route>

                    <Route path="/ourconsultans" element={<Ourconsultants/>}></Route>

                    <Route path="/bookappoinments" element={<BookAppoinments/>}></Route>
                    <Route path="/viewprofile" element={<Viewprofile/>}></Route>
                    <Route path="/guide" element={<Guide/>}></Route>
                    <Route path="/booksession" element={<Booksession/>}></Route>

                    <Route path="/category" element={<Category/>}></Route>

                    <Route path="/userProfile" element={<UserProfile/>}></Route>
                    <Route path="/faq" element={<FAQ/>}></Route>
                    <Route path="/rescheduleappoinment" element={<Rescheduleappoinment/>}></Route>

                    <Route path="/form" element={<Form/>}></Route>
                   

                    

                   
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
                <div><Footer/></div>
            </div>
        </Router>

    );
}