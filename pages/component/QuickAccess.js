import React from "react";
import styled from "styled-components";
import { Contanier } from "./header";
import { FaFingerprint } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { SlLayers } from "react-icons/sl";

const Items = [
  {
    icon: <FaFingerprint />,
    heading: "Quick Access",
    sub: "Dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position.",
  },
  {
    icon: <SlLayers />,
    heading: "Quick Access",
    sub: "Dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position.",
  },
  {
    icon: <FiSettings />,
    heading: "Quick Access",
    sub: "Dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position.",
  },
];

function QuickAccess() {
  return (
    <div className="py-20" style={{ background: "#4628ba", color: "white" }}>
      <Contanier>
        <Quick>
          <div className="md:flex  justify-between">
            {Items.map((i) => {
              return (
                <div className="" key={i.icon}>
                  <div>
                    <div className="flex justify-center text-[40px] mt-5">
                      {i.icon}
                    </div>
                    <div className=" text-[30px] flex justify-center font-semibold">
                      {i.heading}
                    </div>
                    <div> {i.sub} </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Quick>
      </Contanier>
    </div>
  );
}

export default QuickAccess;
const Quick = styled.div``;
// <hr className="transform rotate-90 w-40 ml-64  "></hr>
