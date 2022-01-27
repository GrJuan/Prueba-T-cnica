import React, { useState } from "react";

import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  Line,
  Search,
} from "./Narbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>

          <LogoContainer>
            <img
              src={Logo}
              alt="Logo Inc."
              style={{ width: "140px", left: "43px" }}
            />

        </LogoContainer>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <Menu open={showMobileMenu}>

            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>Producto</div>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>      
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>Tecnología</div>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>Legado</div>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>Sport</div>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>Corporativo</div>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              {/* Linea Divisora */}
              <Line />
            </MenuItem>

            <MenuItem>
              {/* Icono Buscador */}
              <Search>
                <AiOutlineSearch />
              </Search>
            </MenuItem>
        </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
