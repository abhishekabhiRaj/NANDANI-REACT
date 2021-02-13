import React, {useState, useEffect} from "react";
import { Nav, NavItem, Navbar, NavbarBrand,NavbarToggler, Collapse, NavLink, UncontrolledDropdown,DropdownToggle,DropdownItem,DropdownMenu, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavBar.scss"
import searchIcon from "../../Assets/Image/NavBar-Images/loupe.svg"
import menuList from '../../Assets/Data/NavLinkData.js' 

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [Class, setClass] = useState('NavBar_1');

    useEffect(() => {
      const handleNavBarClass = () => {
        if(
          document.documentElement.scrollTop > 200 ||
          document.body.scrollTop > 200
        ){
          setClass('NavBar_2');
          console.log('NavBar_2')
        }
        else if(
          document.documentElement.scrollTop < 199 ||
          document.body.scrollTop < 199
        ){
          setClass('NavBar_1');
          console.log('NavBar_1')
        }
      }
      window.addEventListener('scroll', handleNavBarClass);
      return () => {
        window.removeEventListener('scroll', handleNavBarClass)
      }
    })
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className={Class}>
        <Navbar className=" col-11 mx-auto"  light expand="md">
          <Link to="/" ><NavbarBrand>Nandani</NavbarBrand></Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>

            {
              menuList.map((val,idx)=>{
                return(
                  <NavItem key={idx} >
                <Link to={val.path}> <NavLink>{val.menu}</NavLink> </Link>
              </NavItem>
                )
              })
            }
            
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Language
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    English
                  </DropdownItem>
                  <DropdownItem>
                    Hindi
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
           <Nav className="searchBarBox" >
             <NavItem className="searchBar">
               <input type="text" placeholder="Search..." />
               <img src={searchIcon} alt="..." />
             </NavItem>
             <NavItem>
             <Button id="signIn" >SignIn</Button>
             </NavItem>
           </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;
  