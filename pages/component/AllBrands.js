import React from "react";
import { Contanier } from "./header";
import styled from "styled-components";
import { FaAngular, FaBlackberry, FaAmazonPay , FaCodepen, FaDigitalOcean,FaReddit,FaDropbox} from "react-icons/fa";

const Items = [
  { icon: <FaAngular />, color: '#dd1b16' },
  { icon: <FaBlackberry /> , color: '#4D0026'},
  { icon: <FaAmazonPay />,   color: "#333e47" },
  { icon: <FaCodepen />, color: "#3B5998" },
  { icon: <FaDigitalOcean />, color:' #0080FF' },
  { icon: <FaReddit /> , color: "#FF4500"},
  { icon: <FaDropbox />,     color: "#3d9ae8" },
];

function FavoritePlateform() {
  return (
    <div>
      <Contanier>
        <Plateform>
          <div className="md:grid grid-cols-2  ">
            <div className="text-center">
              <div className="text-[20px]">
                Join over 40,000+ businesses worldwide.
              </div>
              <div className="text-[40px] font-medium">
                We're Working Best With <br />
                Your Favorite Platforms
              </div>
              <div>
                <button className="rounded-full font-semibold">
                  VIEW ALL BRANDS
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              {Items.map((i) => {
                return (
                  <div key={i.icon} className=" ">
                    <div className="brands ">
                      <div className='icon' > {i.icon} </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Plateform>
      </Contanier>
    </div>
  );
}

export default FavoritePlateform;
const Plateform = styled.div`
  padding-top: 100px;

  button {
    background: #4628ba;
    padding: 15px 20px;
    color: white;
    margin-top: 10px;
    font-size: 12px;
  }
  .brands {
    
    height: 100px;
    width: 100px;
    margin: 30px 16px 0;
    background: #ffffff;
    box-shadow: 0 10px 30px 0 rgb(44 130 237 / 40%);
    text-align: center;
    line-height: 100px;
    border-radius: 8px;
  }
  .icon {
    font-size: 50px;
    display: inline-block;
    padding-top: 25px;
  }
`;
