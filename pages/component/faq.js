import React from "react";
import styled from "styled-components";
import { Contanier } from "./header";
import {FiChevronRight} from 'react-icons/fi'

const Items = [
  { heading: "Where can I get analytics help?",icon:<FiChevronRight/> },
  { heading: "Where can I get analytics help?",icon:<FiChevronRight/>  },
  { heading: "Where can I get analytics help?",icon:<FiChevronRight/>  },
];
function Faq() {
  return (
    <div>
      <Contanier>
        <Faq1 className="mt-12">
          <div className="lg:grid grid-cols-2 gap-10">
            <div>
              <img src="./images/faq.png" alt="loading" />
            </div>
            <div className="">
            {Items.map((i) =>{
                return(
                    <div key={i.heading}>
                    <div className="flex items-center justify-between inputs">
                    <div className=""> {i.heading}</div>
                    <div> {i.icon} </div>
                    </div>
                    </div>
                )
            })}
            </div>
          </div>
        </Faq1>
      </Contanier>
    </div>
  );
}

export default Faq;
const Faq1 = styled.div`
padding: 20px;
  .inputs {
    padding: 15px;
    margin: 30px;
    background: #ffffff;
    border: 1px solid;
    border-radius: 0px 0px 12px 0px;
  }
`;
