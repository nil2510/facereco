import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface NavBarProps {
  heading: string;
  navItems: string[];
  onClickHome: () => void;
  onSelectNavItem: (item: number) => void;
}

const NavBar = ({ heading, navItems, onClickHome, onSelectNavItem }: NavBarProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <Navbar expand="sm" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={onClickHome}>{heading}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navItems.map((item, index) => (
                <Nav.Link
                  key={item}
                  className={
                    selectedIndex === index ? "nav-link active" : "nav-link"
                  }
                  onClick={() => {
                    setSelectedIndex(index);
                    onSelectNavItem(index);
                  }}
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
