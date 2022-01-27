import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 121.14px;
  left: 0px;
  top: 0px;
  background-color: #fff;

  @media screen and (max-width: 960px) {
    height: 93.14px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1562px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  p {
    &:nth-child(2) {
      color: #fff;
    }

    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color: #01225b;
    }

    @media screen and (max-width: 650px) {
    }
  }

  svg {
    fill: #01225b;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  height: 50.23px;
  top: 35.45px;

  list-style: none;

  @media screen and (max-width: 960px) {
    background-color: #23394d;
    color: #fff;
    position: relative;
    z-index: 999;
    top: -6px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1.5rem;
  color: #3e3a39;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  font-weight: 300;
  transition: 0.5s all ease;

  &:hover {
    color: #fff;
    background-color: #00205b;
    transition: 0.5s all ease;

    div {
      svg {
        fill: #23394d;
        font-size: 1rem;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    color: #fff;

    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;

      svg {
        display: flex;
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      justify-content: center;

      svg {
        display: flex;
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: center;

      svg {
        display: flex;
        font-size: 1rem;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;

    svg {
      fill: #01225b;
      margin-right: 0.5rem;
    }
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 33.48px;
  height: 3px;
  top: 26.33px;
  border: 1px solid #00a8e2;
  transform: rotate(90deg);

  @media screen and (max-width: 960px) {
    top: 0px;
    border: none;
    weight: 0px;
    height: 0px;
  }
`;

export const Search = styled.div`
  margin-top: 12px;
  margin-left: 3rem;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 105px;
    margin-right: 3rem;
    display: flex;
    justify-content: center;
  }
`;
