import React from "react";
import styled from "styled-components";
import { Contanier } from "./header";

function TicketingSystem() {
  return (
    <div>
      <Contanier>
        <Ticket>
          <div className="ticketingSystem lg:grid grid-cols-2 gap-10">
            <div className="lg:ml-20">
              <div className="text-[40px] font-medium">
                Great <br /> ticketing shape system
                <br /> for your customer.
              </div>
              <div className="pt-6">
                Belonging in september no am immediate newspaper. september she{" "}
                <br /> conveying did eat may extensive.
              </div>

              <p className="mt-10">
                <span className="input-email">
                  <input type="text"  placeholder="Email*" />
                  <button type="submit">Get Started</button>
                </span>
                <br />
              </p>

              <p className="mt-4"> 14 Days Free Trial | No Credit Required</p>
            </div>

            <div className="dashboard-img shadow-lg lg:mt-0 mt-10">
              <img className=" relative" src="./images/dashboard-2.png" alt="logo---" />
              <img
                className="person-img lg:block hidden"
                src="./images/chat-1.png"
                alt="loading"
              />
            </div>
          </div>
        </Ticket>
      </Contanier>
      <div>
        <img className="-mt-64" src="./images/background-1.png" alt="loading" />{" "}
      </div>
     
    </div>
  );
}

export default TicketingSystem;
const Ticket = styled.div`
  padding-top: 80px;
  padding-bottom: 120px;
  .input-email {
    position: relative;
  }
  .person-img {
    position: absolute;
    right: 20%;
    bottom: 80px;
    height: 52%;
  }
  input {
    min-height: 70px;
    width: 100%;
    border: 2px solid #232323;
    border-radius: 5px;
    padding: 25px;
    color: #232323;
  }
  button {
    position: absolute;
    right: 7px;
    margin-top: 10px;
    min-height: 55px;
    padding: 0 30px;
    border-radius: 5px;
    background: #4628ba;
    color: #ffffff;
    font-weight: 700;
    transition: all 0.35s ease-in-out;
    border: none;
  }
  button:hover {
    background: #232323;
  }
`;
