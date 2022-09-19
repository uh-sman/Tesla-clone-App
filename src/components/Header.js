import React, { useState } from "react";
import styled from "styled-components";
// import MenuIcon from "@mui/icons-material/Menu";
import { selectCars } from "../features/car/CarSlice";
import { useSelector } from "react-redux";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, indx) => (
            <a href="#" key={indx}>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        {/* <a href=""></a> */}
      </RightMenu>
      <CustomMenu onClick={() => setBurgerStatus(true)}>
        <MdMenu />
      </CustomMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <FaTimes onClick={() => setBurgerStatus(false)} />
          <CustomClose />
        </CloseWrapper>
        {cars &&
          cars.map((car, indx) => (
            <li>
              <a href="#" key={indx}>
                {car}
              </a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;
const Container = styled.div`
width:100vw;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  top:0;
  left:0:
  right:0;
  z-index:1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
a {
  font-weight: 600;
  text-transform: uppercase
 margin-right:10px;
}`;
const CustomMenu = styled.div`
  cursor: pointer;
  display: flex;
  font-size: 30px;
  font-weight: 600;
  align-items: center;
  position: relative;
  right: 5px;
  margin-left: 8px;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled.div`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
