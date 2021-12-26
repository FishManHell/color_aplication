import styled from "styled-components";
import {device} from "../utils/MediaSize";
import {colors} from "../utils/colors";

export const WrapperItem = styled.div`
  position: relative;
  width: 400px;
  height: 100px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background: linear-gradient(${props => props.gradient});
  margin-bottom: 10px;
  z-index: 1;
  border: ${props => props.border};
  
  @media all and ${device.mobileL} {
    max-width: 100%;
  }
`

export const BlockForTextItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const TextItem = styled.p`
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 600;
  color: ${colors.black};
  filter: invert(1);
  mix-blend-mode: difference;
`

export const RemoveEditButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1.1rem;
  background: ${colors.white};
  color: ${colors.black};
  position: absolute;
  border: none;
  top: -10px;
  right: ${props => props.positionRight};
  left: ${props => props.positionLeft};
  z-index: 2;
  cursor: pointer;
  -moz-text-decoration-color: ${colors.black};
  -webkit-text-fill-color: ${colors.black}
`
