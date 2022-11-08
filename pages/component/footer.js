import React from "react";
import styled from "styled-components";
import { Contanier } from "./header";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaPaperPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer ">
      <Contanier>
        <Footer1>
          <div className="flex flex-wrap justify-between gap-10 p-10 mt-14">
            <div>
              <div className="heading text-[24px] font-medium m-auto ">About Aveit</div>
              <div className="mt-4" style={{ color: "#cccccc" }}>
                Required honoured trifling eat pleasure man relation. Assurance
                <br /> yet bed was improving furniture man. Distrusts delighted
                Excuse
                <br /> few the remain highly feebly add people manner say. It
                high at <br /> my mind by roof.
              </div>
              <div className="flex gap-10 mt-4">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaBehance />
              </div>
            </div>

            <div>
              <div className="heading text-[24px] font-medium ">Service</div>
              <ul className="mt-4" style={{ color: "#cccccc" }}>
                <li className="mt-4">SEO Marketing</li>
                <li className="mt-4">Pay Per Click</li>
                <li className="mt-4">SEO Services</li>
                <li className="mt-4">Social Media</li>
                <li className="mt-4">SEO Audit</li>
              </ul>
            </div>
            <div>
              <div className="heading text-[24px] font-medium"> Company</div>
              <ul className="mt-4" style={{ color: "#cccccc" }}>
                <li className="mt-4">About Us</li>
                <li className="mt-4">Contact Us</li>
                <li className="mt-4">Career</li>
                <li className="mt-4">Terms</li>
                <li className="mt-4">Team Members</li>
              </ul>
            </div>
            <div>
              <div className="heading text-[24px] font-medium"> Contact Us</div>
              <ul className="mt-4" style={{ color: "#cccccc" }}>
                <liv className="mt-4 text-white font-semibold">ADDRESS</liv>
                <li className="mt-4">California, TX 70240</li>
                <li className="mt-4 text-white font-semibold">EMAIL</li>
                <li className="mt-4">akshara@gmail.com</li>
                <li className="mt-4 text-white font-semibold">CONTACT</li>
                <li className="mt-4">+91 9696530098</li>
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
