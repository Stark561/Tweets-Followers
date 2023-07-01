import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div``;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;

  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  padding: 8px 0;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #471ca9;

  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  border: 2px solid rgb(201 200 200);
  border-radius: 15px;
  margin-left: 10px;
  background-color: rgb(221 221 221); 

  &.active {
    color: rgb(147 139 27);
  }

  &:hover{
    background-color: rgb(201 200 200); 
  }
`;
