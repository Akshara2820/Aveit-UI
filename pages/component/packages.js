import React from "react";
import styled from "styled-components";
import { Contanier } from "./header";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";

const Items = [
  {
    plan: "BASIC PLAN",
    price: "$ 24.66/mo",
    keyword: "10 Keywords Optimized",
    ranking: "3 Top 10 Ranking",
    analysis: "Web Site Analysis",
    optimization: "Content Optimization",
    icon: <BsCheckCircleFill />,
    icon1: <FaTimesCircle />,
  },
  {
    plan: "BASIC PLAN",
    price: "$ 24.66/mo",
    keyword: "10 Keywords Optimized",
    ranking: "3 Top 10 Ranking",
    analysis: "Web Site Analysis",
    optimization: "Content Optimization",
    icon: <BsCheckCircleFill />,
    icon1: <FaTimesCircle />,
  },
  {
    plan: "BASIC PLAN",
    price: "$ 24.66/mo",
    keyword: "10 Keywords Optimized",
    ranking: "3 Top 10 Ranking",
    analysis: "Web Site Analysis",
    optimization: "Content Optimization",
    icon: <BsCheckCircleFill />,
    icon1: <FaTimesCircle />,
  },
];

function Package() {
  return (
    <div>
      <Contanier>
        <Package1>
          <div className="text-center font-medium" style={{ color: "#4628ba" }}>
            OUR PACKAGES
          </div>
          <div className="text-center text-[40px] font-medium" >
            Take a look of our Pricing and <br />
            select Your Choice
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {Items.map((i) => {
              return (
                <div key={i.plan} className="card border">
                  <div className="text-[20px]">{i.plan}</div>
                  <div className="text-[35px] font-semibold"> {i.price}</div>
                  <hr />
                  <div className="mt-5 ">
                    <div className="flex items-center justify-between gap-10 p-2 bg-slate-100">
                      {i.keyword} {i.icon}
                    </div>
                    <div className="flex items-center justify-between gap-10 p-2">
                      {i.ranking} {i.icon1}
                    </div>
                    <div className="flex items-center justify-between  gap-10 p-2 bg-slate-100">
                      {i.analysis} {i.icon1}
                    </div>
                    <div className="flex items-center justify-between gap-10 p-2">
                      {i.optimization} {i.icon}
                    </div>
                  </div>
                  <div> <button className="border rounded-full font-semibold">Choose plan</button> </div>
                </div>
              );
            })}
          </div>
        </Package1>
      </Contanier>
    </div>
  );
}

export default Package;
const Package1 = styled.div`
  .card {
    background: #ffffff;
    padding: 60px ;
    border-radius: 8px;
   
  }
  .card:hover{
    border-top: thick solid #4628ba;
   box-shadow: 0 10px 30px 0 rgb(44 130 237 / 40%);
   transition: all 0.35s ease-in-out;
  }
  button{
   
    padding: 15px 20px;
    margin-top: 40px;
  }
`;
