import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const menuItems = [
    {
      title: "Home",
    },
    {
      title: "Course",
    },
    {
      title: "Blog",
    },
    {
      title: "Pages",
    },
    {
      title: "Contact",
    },
  ];

  return (
    <div>
      <Contanier>
        <Header1>
          <div className=" header__area header__transparent header__padding sticky undefined p-4">
            <div className="header">
              <div className="flex flex-wrap justify-around items-center ">
                <div className="image-logo">
                  <img src="./images/logo-blue.png" alt="logo" />
                </div>
                <div className="lg:block hidden">
                  <ul
                    className="flex flex-wrap gap-4 text-[13px] "
                    style={{ color: "#333" }}
                  >
                    <li>HOME</li>
                    <li>FEATURES</li>
                    <li>OVERVIEW</li>
                    <li>FAQ</li>
                    <li>PRICING</li>
                    <li>BLOG</li>
                  </ul>
                </div>
                <div className="flex gap-8 items-center">
                  <div className="font-semibold text-[13px] lg:block hidden">
                    LOGIN
                  </div>
                  <div>
                    <button className="sign-up text-[13px] font-semibold lg:block hidden ">
                      SIGN UP
                    </button>
                  </div>

                  <div className="">
                    <button
                      className="menu-bar"
                      onClick={() => setIsMenu(true)}
                    >
                      <div>
                        <AiOutlineMenu className="text-black text-[32px] " />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Header1>

        <div className={`${isMenu ? "menu-view" : "view_menu"} menu-bar bar`}>
          <div className="flex justify-between p-5">
            <div>
              <img className="w-[150px]" src="./images/logo-blue.png" alt="loading..." />
            </div>

            <div onClick={() => setIsMenu(false)}>
              <AiOutlineCloseCircle className="text-[40px] text-black -mt-1" />
            </div>
          </div>
          <div className="bar-menu">
            {menuItems.map((item, index) => (
              <div className="m-2" key={index}>
                <div className="slider">
                  <div className=""> {item.title}</div>
                </div>
              </div>
            ))}
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
  left: 0;

  .image-logo {
    width: 150px;
  }
  .sign-up {
    border: 1px solid rgba(70, 40, 186, 0.3);
    background-color: rgba(70, 40, 186, 0.1);
    color: #4628ba;
    border-radius: 25px;
    padding: 13px 25px;
  }
`;

const Header1 = styled.div`
  .header__area.sticky {
    position: fixed;
    background: #fff;
    z-index: 1;
    animation: fadeInDown 0.3s ease-in-out 0s 1 normal none running;
    box-shadow: 0 8px 50px 0 rgb(8 0 42 / 5%);
   
  }
  .header__transparent {
    position: absolute;
    z-index: 11;
    top: 0;
    left: 0;
    right: 0;
  }
`;
