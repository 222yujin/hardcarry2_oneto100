import React from "react";
import styled from "styled-components";
export default function Slide({ img }) {
  return <IMG src={img} />;
}
const IMG = styled.img`
  width: 262px;
  height: 262px;
`;
