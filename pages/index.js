import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";


import Header from "./component/header";
import QuickAccess from "./component/QuickAccess";
import TicketingSystem from "./component/ticketing-system";
import FavoritePlateform from "./component/AllBrands";
import OverView from "./component/overview";
import Faq from "./component/faq";
import Package from "./component/packages";
import Review from "./component/review";


export default function Home() {
  return (
    <>
      <Header />
      <TicketingSystem/>
      <QuickAccess/>
      <FavoritePlateform/>
      <OverView/>
      <Faq/>
      <Package/>
      <Review/>
      
     
    </>
  );
}
