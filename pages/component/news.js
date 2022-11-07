import React from "react";
import styled from "styled-components";
import { Contanier } from "./header";
const Items = [
  {
    image: "./images/card1.jpg",
    date: "15JUL, 2022",
    heading: "The for fully had she there leave merit enjoy forth.",
    profile:'./images/profile-1.jpg',
    name:'By Jhon',
    creative:'IN Creative'
  },
  {
    image: "./images/card1.jpg",
    date: "15JUL, 2022",
    heading: "The for fully had she there leave merit enjoy forth.",
    profile:'./images/profile-1.jpg',
    name:'By Jhon',
    creative:'IN Creative'
  },
  {
    image: "./images/card1.jpg",
    date: "15JUL, 2022",
    heading: "The for fully had she there leave merit enjoy forth.",
    profile:'./images/profile-1.jpg',
    name:'By Jhon',
    creative:'IN Creative'
  },
];

function News() {
  return (
    <div>
      <Contanier>
        <News1></News1>
      </Contanier>
    </div>
  );
}

export default News;
const News1 = styled.div``;
