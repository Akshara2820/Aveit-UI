import React, { useEffect } from "react";
import styled from "styled-components";
import { Contanier } from "./header";
import AOS from "aos";
import "aos/dist/aos.css";
const Items = [
  {
    image: "./images/card1.jpg",
    date: "15JUL, 2022",
    heading: "The for fully had she there leave merit enjoy forth.",
    profile: "./images/profile-1.jpg",
    name: "By Jhon",
    creative: "IN Creative",
  },
  {
    image: "./images/card-4.jpg",
    date: "15JUL, 2022",
    heading: "The for fully had she there leave merit enjoy forth.",
    profile: "./images/profile-1.jpg",
    name: "By Jhon",
  
    creative: "IN Creative",
  },
  {
    image: "./images/card1.jpg",
    date: "15JUL, 2022",
    heading: "The for fully had she there leave merit enjoy forth.",
    profile: "./images/profile-1.jpg",
    name: "By Jhon",
    creative: "IN Creative",
  },
];

function News() {
  useEffect (() =>{
    AOS.init({
      duration: 1500,
    })
  },[])
  return (
    <div className="mt-10 p-10" style={{ background: "#d9eefa" }}>
      <Contanier>
        <News1>
          <div className="">
          <div className="heading font-medium" style={{ color: "#4628ba" }} data-aos="fade-down">
           LATEST NEWS
          </div>
          <div className="heading md:text-[40px] text-[30px] font-medium text-center" data-aos="fade-down">
          Most Popular Breaking News & <br/> Top Stories
          </div>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-10 card2 mt-14" >
            {Items.map((i) => {
              return (
                <div key={i.date}>
                  <div className="rounded md:mt-0 mt-5 shadow-xl" data-aos="flip-left">
                    <div className="overflow-hidden relative card">
                      <img
                        className="img grow object-cover -z-10"
                        src={i.image}
                        alt="logo"
                      />
                      <div
                        className="rounded-lg text-white px-2 absolute top-6 m-6 font-semibold text-[14px]"
                        style={{ background: "#4628ba" }}
                      >
                        {i.date}
                      </div>

                      <div className="overlay">
                        <div className="text">
                          <div className="text-[24px] font-semibold  text-white ">
                            {i.heading}
                          </div>
                          <p className="text-[16px] font-semibold  text-white  ">
                            {i.sub}
                          </p>
                        </div>
                        <div className="comment flex items-center gap-4">
                          <img
                            className="rounded-full w-10"
                            src={i.profile}
                            alt="logo"
                          />
                          <span className="text-white text-[12px]">
                            {" "}
                            BY JOHN BAUS <span>______ </span> IN CREATIVE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </News1>
      </Contanier>
    </div>
  );
}

export default News;
const News1 = styled.div`
margin-top: 20px;
  text-align: center;
  .card2:hover {
  }
  .card {
    border: 1px solid gray;
  }
  .img {
    &.grow {
      transition: all 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }
  .overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 30px;
    z-index: 1;
    transition: all 0.2s ease-in-out;
  }

  .comment {
    margin-top: 25px;
  }
  p {
    margin-top: 10px;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;
// <div className="md:grid grid-cols-3 gap-5 py-10 ">
// {Items.map((item) => {
//   return (
//     <div key={item.tittle}>
//       <div className=" rounded md:mt-0 mt-5 shadow-xl">
//         <div className="overflow-hidden relative">
//           <img
//             className="image grow object-cover -z-10"
//             src={item.image}
//             alt="loading..."
//             style={{ width: "100%" }}
//           />
//           <div className="bg-pink-600 rounded-lg text-white px-2 absolute top-6 ml-2">{item.date}</div>
//         </div>
//         <div className="p-10">
//           <div className="flex  justify-between ">
//             <div className="flex gap-2">
//               <div className="mt-1">{item.icon}</div>
//               <div> {item.lesson}</div>
//             </div>
//             <div className="flex gap-2">
//               <div className="text-yellow-400 text-[20px] -mt-1">
//                 &#9733;
//               </div>
//               <div> {item.rate}</div>
//             </div>
//           </div>

//           <div className="font-bold text-[24px] hover:text-blue-600">
//             {item.tittle}
//           </div>
//           <div className="flex gap-5 py-5">
//             <div className="">
//               <img
//                 className="rounded-full"
//                 src={item.clip_img}
//                 alt="loading..."
//               />
//             </div>
//             <div> {item.clip_name}</div>
//           </div>
//           <hr className="w-full" />
//           <div className="flex gap-2 justify-between mt-5">
//             <div className="text-pink-600 font-bold text-[20px]">{item.price}</div>
//             <div className="flex  hover:text-blue-600">
//               <div>{item.details}</div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// })}
// </div>
