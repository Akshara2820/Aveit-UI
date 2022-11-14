import React from "react";
import styled from "styled-components";
import { Contanier } from "./header";

function TicketingSystem() {
  return (
    <div>
      <Contanier>
        <Ticket>
          <div className="ticketingSystem lg:grid grid-cols-2 gap-10">
            <div className="lg:ml-20 mt-10 sm:text-start text-center">
              <div className="heading md:text-[40px] text-[30px] font-bold ">
                Great <br /> ticketing shape system
                <br /> for your customer.
              </div>
              <div className="pt-6 subHeading">
                Belonging in september no am immediate newspaper. september she{" "}
                <br /> conveying did eat may extensive.
              </div>

              <p className="mt-10">
                <span className="input-email">
                  <input type="text" placeholder="Email*" />
                  <button type="submit">Get Started</button>
                </span>
                <br />
              </p>

              <p className="mt-4"> 14 Days Free Trial | No Credit Required</p>
            </div>

            <div className="dashboard-img shadow-lg lg:mt-0 mt-10">
              <img
                className=" relative img-dashbord"
                src="./images/dashboard-2.png"
                alt="logo---"
              />
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
  padding-bottom: 120px;
  padding-top: 20px;

  .input-email {
    position: relative;
  }

  .heading {
    animation: fadeInDown 500ms ease-in both;
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translate3d(0, -20%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .subHeading {
    animation: fadeInUp 500ms;
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0 , 20% , 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

  }

  .img-dashbord {
    animation: fadeIn 1s ease-in both;
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translate3d(0, -10%, 0);
      }
      to {
        opacity: 3;
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .person-img {
    position: absolute;
    right: 20%;
    bottom: -50px;
    height: 52%;
    animation: fadeInUp 2s;
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0 , 20% , 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
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
