import React from "react";
import styled, { keyframes } from "styled-components";

const load = keyframes`
 0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

const StyledLoader = styled.div`
  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: ${load} 1.8s infinite ease-in-out;
  }
  .loader {
    color: #03d1ab;
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 3.5em;
  }
`;

export default function Loader() {
  return (
    <StyledLoader>
      <div className="loader" />
    </StyledLoader>
  );
}