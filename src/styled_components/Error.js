import styled from "styled-components";
import {device} from "../utils/MediaSize";

export const ErrorText = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2.5rem;
  
  @media all and ${device.laptop} {
    font-size: 2.2rem;
    line-height: 2.2rem;
  }
  
  @media all and ${device.tablet} {
    font-size: 1.3rem;
    line-height: 1.3rem;
  }

  @media all and ${device.mobileL} {
    font-size: 1rem;
    line-height: 1rem;
  }
`
