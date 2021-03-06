import styled from "styled-components";
import {device} from "../utils/MediaSize";
import {colors} from "../utils/colors";


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  background-color: ${colors.light_blue};
  padding: 0 20px;
`


export const Container = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-content: center;
`


export const NewPage = styled.h1`
  text-align: center;
  margin: 10px;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2rem;
`

export const ButtonRoute = styled.button`
  text-transform: uppercase;
  background: ${colors.swamp};
  padding: 5px;
  text-align: center;
  font-weight: 600;
  border-radius: 5px;
  margin: 10px;
  color: ${colors.black};
  -webkit-text-decoration-color: ${colors.black};
  
  :disabled {
    opacity: 0.5;
  }
  
`

export const WrapperPages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

`

export const WrapperInputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and ${device.mobileL} {
   flex-direction: column;
  }
`

export const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  margin: 10px;
`
