import React, { useEffect } from "react";
import styled from "styled-components";
import { Contanier } from "./header";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaPaperPlane,
} from "react-icons/fa";

function Footer() {
  useEffect (() =>{
    AOS.init({
      duration: 1500,
    })
  },[])
  return (
    <div className="footer ">
      <Contanier>
        <Footer1>
          <div className="flex flex-wrap justify-between gap-10 p-10 mt-14">
            <div>
              <div className="heading text-[24px] font-medium m-auto "  data-aos="fade-right">About Aveit</div>
              <div className="mt-4" style={{ color: "#cccccc" }}  data-aos="fade-down">
                Required honoured trifling eat pleasure man relation. Assurance
                <br /> yet bed was improving furniture man. Distrusts delighted
                Excuse
                <br /> few the remain highly feebly add people manner say. It
                high at <br /> my mind by roof.
              </div>
              <div className="flex gap-10 mt-4" data-aos="zoom-out">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaBehance />
              </div>
            </div>

            <div>
              <div className="heading text-[24px] font-medium "  data-aos="fade-right">Service</div>
              <ul className="mt-4" style={{ color: "#cccccc" }}>
                <li className="mt-4" data-aos="fade-down">SEO Marketing</li>
                <li className="mt-4" data-aos="fade-up">Pay Per Click</li>
                <li className="mt-4" data-aos="fade-down">SEO Services</li>
                <li className="mt-4" data-aos="fade-up">Social Media</li>
                <li className="mt-4" data-aos="fade-down">SEO Audit</li>
              </ul>
            </div>
            <div>
              <div className="heading text-[24px] font-medium"  data-aos="fade-right"> Company</div>
              <ul className="mt-4" style={{ color: "#cccccc" }}>
                <li className="mt-4" data-aos="fade-down">About Us</li>
                <li className="mt-4" data-aos="fade-up">Contact Us</li>
                <li className="mt-4" data-aos="fade-down">Career</li>
                <li className="mt-4" data-aos="fade-up">Terms</li>
                <li className="mt-4" data-aos="fade-down">Team Members</li>
              </ul>
            </div>
            <div>
              <div className="heading text-[24px] font-medium"  data-aos="fade-right"> Contact Us</div>
              <ul className="mt-4" style={{ color: "#cccccc" }}>
                <liv className="mt-4 text-white font-semibold" data-aos="fade-down">ADDRESS</liv>
                <li className="mt-4"data-aos="fade-up" >California, TX 70240</li>
                <li className="mt-4 text-white font-semibold" data-aos="fade-down">EMAIL</li>
                <li className="mt-4" data-aos="fade-up">akshara@gmail.com</li>
                <li className="mt-4 text-white font-semibold" data-aos="fade-down">CONTACT</li>
                <li className="mt-4" data-aos="fade-up">+91 9696530098</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex flex-wrap justify-between mt-10 gap-10">
            <div>© Copyright 2021 aveit By WordPressRiver</div>

            <div>
              <img className="w-32" src="./images/logo-light.png" alt="logo" />
            </div>

            <div className="relative flex flex-wrap items-stretch">
              <input
                className="p-2"
                type="text"
                placeholder="Enter Your Email"
              />
              <span>
                <button>
                  <FaPaperPlane className="" style={{ color: "#4628ba" }} />
                </button>
              </span>
            </div>
          </div>
        </Footer1>
      </Contanier>
    </div>
  );
}

export default Footer;
const Footer1 = styled.div`

  input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: transparent;
    color: white;
    outline: none;
  }
  span {
    width: 60px;
    position: absolute;
    right: 0;
    border-left: 1px solid #e7e7e7;
    min-height: 50px;
    display: flex;
    align-items: center;
  }
  button {
    background-color: white;
    width: 40px;
    min-height: 40px;
    padding: 10px;
    margin-left: 10px;
    border-radius: 10px;
  }
`;
