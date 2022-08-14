import { keyframes } from "@emotion/react";

export const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10vh);
    visibility: hidden;
  }

  to {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;


