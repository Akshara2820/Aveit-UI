import React from "react";

import Header from "./header";
import QuickAccess from "./quick-access";
import TicketingSystem from "./ticketing-system";
import FavoritePlateform from "./all-brands";
import OverView from "./overview";
import Faq from "./faq";
import Package from "./packages";
import Review from "./review";
import News from "./news";
import Footer from "./footer";


function Layout() {

  return (
    <div className=''>
  

   
      <Header />
      <TicketingSystem />
      <QuickAccess />
      <FavoritePlateform />
      <OverView />
      <Faq />
      <Package />
      <Review />
      <News />
      <Footer />
     
    </div>
  );
}

export default Layout;

