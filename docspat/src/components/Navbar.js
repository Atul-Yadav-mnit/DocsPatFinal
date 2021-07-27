import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem ,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';
import { NavLink ,Link} from 'react-router-dom'
import LoginDoctor from './LoginDoctor';
import LoginPatient from './LoginPatient';

const MyNavBar = ({ resetSignup, resetPatsignin, resetDocsignin, handlePatLogin,handlePatSignUp, handleDocLogin, handleLogout, status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleD = () => setDropdownOpen(prevState => !prevState);

  var LoginStatus;
  if (status.isloggedIn === true) {
    if(status.isPat === true)
    {
      LoginStatus = <Dropdown isOpen={dropdownOpen} toggle={toggleD} style={{marginRight:"100px"}} >
      <DropdownToggle caret>
        Account
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Hi {status.name}</DropdownItem>
        <DropdownItem divider />
        <Link to="/patients/appointments"><DropdownItem>Appointments</DropdownItem> </Link>
        <DropdownItem onClick={() => handleLogout()}>Logout</DropdownItem>
      </DropdownMenu>
       </Dropdown>
    }
    else{

      LoginStatus = <Dropdown isOpen={dropdownOpen} toggle={toggleD} style={{marginRight:"100px"}} >
      <DropdownToggle caret>
        Account
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Hi {status.dname}</DropdownItem>
        <DropdownItem divider />
        <Link to="/doctors/appointments"><DropdownItem>Patients</DropdownItem> </Link>
        <DropdownItem onClick={() => handleLogout()}>Logout</DropdownItem>
      </DropdownMenu>
       </Dropdown>
    }
  }
  else {
    LoginStatus = <>
      <LoginPatient
        resetSignup={resetSignup}
        resetPatsignin={resetPatsignin}
        handlePatLogin={handlePatLogin}
        handlePatSignUp={handlePatSignUp}
        status={status}
      />

      <LoginDoctor
        resetDocsignin={resetDocsignin}
        handleDocLogin={handleDocLogin}
        status={status}
      />
    </>
  }





  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" >
        <NavbarBrand style={{ fontSize: "35px", color: "rgb(0, 115, 230)", marginLeft: "50px" }} href="/">DocsPat</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="ml-3">
              <NavLink to="/home">Home</NavLink>
            </NavItem >
            <NavItem className="ml-2">
              <NavLink to="/departments">Departments</NavLink>
            </NavItem>
            <NavItem className="ml-2">
              <NavLink to="/aboutus">AboutUs</NavLink>
            </NavItem>
            <NavItem className="ml-2">
              <NavLink to="/contactus">ContactUs</NavLink>
            </NavItem>
          </Nav>
          {LoginStatus}
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavBar;