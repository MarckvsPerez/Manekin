import { motion } from "framer-motion";
import { styled } from "styled-components";



export const ContactContainer = styled.div`
  height: 100%;
  overflow: scroll;
  white-space: nowrap;
  line-height:1.3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    & h1 {
    font-size: 3vw;
    margin: 0;
  }
`;

export const StyledMotionDiv = styled(motion.div)`
  display: flex;
  gap: 10px;
  align-items: center;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid #3f3f3f;
  caret-color: #3f3f3f;
  background-color: transparent;
  padding: 5px;
  transition: .5s linear;
  font-family: monospace;
  letter-spacing: 1px;
  &:focus {
  border: 2px solid #fa4753;
  caret-color: #fa4753;
  color: #fa4753;
  box-shadow: 4px 4px 10px #070707;
  }
  &:focus::placeholder {
    color: #fa4753; 
  }
  color: #fff;
`;

export const Button = styled(motion.button)`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  height: 100px;
  font-size: 3vw;
  text-align: left;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;