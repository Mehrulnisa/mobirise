import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { DropdownSubmenu } from "react-bootstrap-submenu";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar className="navbar bg-white" collapseOnSelect expand="lg">
      <Navbar.Brand className="nav-title" href="#home">
        <a><Link to="/mobirise">MOBIRISE</Link></a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="nav-items">
        <Nav>
          <Nav.Link className="nav-link" eventKey={2} href="#memes">
            HTML Resume Template
          </Nav.Link>
        </Nav>
        <Nav className="dropDownList">
          <NavDropdown
            className="nav-drop-down"
            title="HTML-Builder"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item className="drop-down-list" href="#action/3.1">
              Best Website Builder Software
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.2">
              Bootstrap Editor
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.3">
              Webpage Design Software
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.4">
              Offline Website Builder Software
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.5">
              Web Page Maker
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.6">
              Website Layout Maker
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.7">
              How To Make a website
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="dropDownList">
          <NavDropdown
            className="nav-drop-down"
            title="Demo Pages"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item className="drop-down-list" href="#action/3.1">
              HTML Buisness Templates
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.2">
              HTML Design Templates
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.3">
              eCommerce HTML Theme
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.4">
              Hotel HTML Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.5">
              Landing Page HTML Templates
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.6">
              Premium HTML Theme
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.7">
              HTML Resume Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.8">
              Online Shopping HTML Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.9">
              Responsive HTML Theme
            </NavDropdown.Item>
            <DropdownSubmenu
              className="submenu-list"
              href="#action/3.10"
              title="HTML Templates"
            >
              <NavDropdown.Item
                className="drop-down-list"
                href="#action/3.10.1"
              >
                One Page HTML Template
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML And CSS Templates
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML Layout Templates
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                Simple HTML5 Template
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                Bootstrap Templates Free Download For HTML5
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                Free HTML Bootstrap Templates
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                Responsive HTML Template
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML Portfolio Template
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                Bootstrap HTML Template
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML Web Templates
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML Homepage Template
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                Simple HTML Website Template
              </NavDropdown.Item>
            </DropdownSubmenu>
            <DropdownSubmenu
              className="submenu-list"
              href="#action/3.11"
              title="More HTML Templates"
            >
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML Themes
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML Page Template
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML5 Basic Template
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                Free HTML CSS Templates
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML5 Responsive Template
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                Free Website Templates HTML5
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                Simple HTML Templates Free Download
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                Free HTML Themes
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML5 Templates Free Download
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML Website Templates Free Download
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                Free HTML5 Responsive Templates
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-down-list" href="#action/3.9">
                HTML Template Download
              </NavDropdown.Item>
            </DropdownSubmenu>
          </NavDropdown>
        </Nav>
        <Nav className="dropDownList">
          <NavDropdown
            className="nav-drop-down"
            title="More Templates"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item className="drop-down-list" href="#action/3.1">
              Real Estate Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.2">
              Wedding Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.3">
              Hotel Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.4">
              Landing Page Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.5">
              News Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.6">
              Profile Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.7">
              Education Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.8">
              Coming Soon Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.9">
              Error Page Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.10">
              Event Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.11">
              About Us Page Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.12">
              Agency Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.13">
              Buisness Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.14">
              Corporate Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.15">
              Homepage Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.16">
              Magazine Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.17">
              Multi Page Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.18">
              Personal Website Template
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-down-list" href="#action/3.19">
              Photography Template
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
