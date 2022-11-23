import React, { useEffect } from "react";
import styled from "styled-components";
import { Contanier } from "./header";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
function Review() {
  useEffect (() =>{
    AOS.init({
      duration: 1500,
    })
  },[])
  return (
    <div>
      <Contanier>
        <Review1>
          <div className="heading font-medium" style={{ color: "#4628ba" }} data-aos="fade-down">
            REVIEW
          </div>
          <div className="heading md:text-[40px] text-[30px] font-medium" data-aos="fade-down">
            10,000+ Happy Customers
          </div>
          <div className=" font-medium mt-6" data-aos="fade-down">(Product Design)</div>
          
          <div className="flex gap-2 justify-center items-center mt-2" >
            <div data-aos="fade-right">
              <AiFillStar className="text-yellow-400" />
            </div>
            <div data-aos="fade-right">
              <AiFillStar className="text-yellow-400"  />
            </div>
            <div data-aos="fade-right">
              <AiFillStar className="text-yellow-400"  />
            </div>
            <div data-aos="fade-right">
              <AiFillStar className="text-yellow-400" />
            </div>
          </div>
          <div className="text-[20px]  opacity-50">
            Loram & Loram Technologies logos Leading the digital transformation
            <br />
            of railway maintenance With decades of maintenance of way expertise
            <br />
            and experience, no one knows the rail like Loram. Today, with our
            <br />
            Loram Technologies business
          </div>
          <div className="flex justify-between items-center p-10">
            <div className=" text-[24px]">
              <HiOutlineArrowLeft />
            </div>
            <hr className="" />
            <div className=" text-[24px]">
              <HiOutlineArrowRight />
            </div>
          </div>
          
          <div className="w-40 m-auto">
            <img
              className="rounded-full"
              src="./images/profile-1.jpg"
              alt="lodnbsd"
            />
            
            <div className="text-[24px]" style={{ color: "#0e2258" }} >Jonath Dark</div>
            <div className="opacity-75">Customer Support</div>
          </div>

        </Review1>
      </Contanier>
    </div>
  );
}

export default Review;
const Review1 = styled.div`
  margin-top: 20px;
  text-align: center;
  hr {
    width: 50%;
  }
`;
