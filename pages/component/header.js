import React from "react";
import styled from "styled-components";


function Header() {
  return (
    <div>
      <Contanier>
      <div className="header">
        <div className="flex flex-wrap justify-between  items-center">
          <div className="image-logo">
            <img src="./images/logo-blue.png" alt="logo"/>
          </div>
          <div className="md:block hidden">
            <ul className="flex flex-wrap gap-4 text-[14px] font-semibold  ">
              <li>HOME</li>
              <li>FEATURES</li>
              <li>OVERVIEW</li>
              <li>FAQ</li>
              <li>PRICING</li>
              <li>BLOG</li>
            </ul>
          </div>
          <div className="flex gap-8 items-center">
            <div className="font-semibold text-[13px]">LOGIN</div>
            <div>
              <button className="sign-up text-[13px] font-semibold ">SIGN UP</button>
            </div>
          </div>
        </div>
        </div>
      </Contanier>
    </div>
  );
}

export default Header;

export const Contanier = styled.div`
 max-width: 1300px;
 padding: 20px;
  margin: auto;
  .header{
  }
 
  .image-logo{
    width: 150px;
  }
  .sign-up{
    border: 1px solid rgba(70,40,186,.3);
    background-color:rgba(70,40,186,.1);
    color: #4628ba;
    border-radius: 25px;
    padding: 13px 25px;
  }
`;
