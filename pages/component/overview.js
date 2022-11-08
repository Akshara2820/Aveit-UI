import React from "react";
import styled from "styled-components";
import { Contanier } from "./header";

function OverView() {
  return (
    <div className="mt-10" style={{ background: "#d9eefa" }}>
      <Contanier>
        <OverView1 className="mt-10">
          <div
            className="flex justify-center  font-semibold"
            style={{ color: "#4628ba" }}
          >
            OVERVIEW
          </div>
          <div className="heading flex justify-center text-center md:text-[40px] text-[30px] p-4 font-medium">
            Quick Software Overview
          </div>
          <div className="relative z-1 lg:grid grid-cols-2 gap-10 lg:p-10">
            <div className="card1 md:px-14" style={{ background: "#0e2258", color: "white" }}>
              <span>01</span>
              <div className="card">
             
              <div className="md:text-[40px] text-[30px] font-medium heading">App Customiation</div>
              <div className="lg:pr-20">
                Loram & Loram Technologies logos Leading the digital
                transformation of railway maintenance With decades of
                maintenance of way expertise and experience, no one knows the
                rail like Loram. Today, with our Loram Technologies business
              </div>
              <div> <button className="rounded-full text-black">READ MORE</button></div>
              </div>
            </div>

            <div className="lg:-ml-24 lg:mt-4 rounded-lg"> <img className="shadow-lg" src="./images/dashboard-2.png" alt="loading"/> </div>
          </div>
        </OverView1>
      </Contanier>
    </div>
  );
}

export default OverView;
const OverView1 = styled.div`

  span {
    font-size: 100px;
    font-weight: 900;
    opacity: 0.1;
    top: -120px;
  }
  .card1{
    border-radius: 12px;
    @media (max-width:1023px){
    border-radius: 12px 10px 0px 0px;
    }
  }
  .card{
    z-index: 10;
    position: relative;
    z-index: 1;
    top:-80px;
  padding-left:30px ;
  }
  button{
    background-color: white;
    padding: 15px 20px;
    margin-top: 15px;
  }
`;
