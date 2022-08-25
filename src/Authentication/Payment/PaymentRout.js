import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from './Sidebar';
import Creditordebit from './Creditordebit'
import Netbanking from './Netbanking';
import Wallet from './Wallet';

 function PaymentRout() {
  return (
   

 
          <Routes>
         <Sidebar/>
         <Route path='/Creditordebit' exact component={Creditordebit} />
          <Route  path="/netbanking" exact component={Netbanking }/>
          <Route  path="/Wallet" exact component={Wallet }/>
       
          </Routes>
        
     
        );
    }

    export default PaymentRout