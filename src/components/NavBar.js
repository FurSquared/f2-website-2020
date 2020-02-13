import React, {useState} from 'react';
import styled from 'styled-components';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import logo from '../images/logo.png';
import Link from './Link';
import LinkButton from './LinkButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const menus = [
  {
    label: 'About the Con',
    type: 'submenu',
    items: [
      {
        to: '/register',
        label: 'Register'
      },
      {
        to: '/hotel',
        label: 'Hotel'
      },
      {
        to: '/guests',
        label: 'Guests'
      },
      {
        to: '/charity',
        label: 'Charity'
      },
    ]
  },
  {
    label: 'Programming & Events',
    type: 'submenu',
    items: [
      {
        to: '/events',
        label: 'Schedule'
      },
      {
        to: '/theme',
        label: 'Theme'
      },
      {
        to: '/map',
        label: 'Map'
      }
    ]
  },
  {
    label: 'Artists & Dealers',
    type: 'submenu',
    items: [
      {
        to: '/artists',
        label: 'Artist Alley'
      },
      {
        to: '/dealers',
        label: 'Dealers Den'
      }
    ]
  },
  {
    label: 'Volunteer',
    type: 'menu',
    to: '/volunteer',
  },
  {
    label: 'Contact',
    type: 'menu',
    to: '/contact',
  },
];

const Logo = styled.img`
  height: 50px;
`;

const StyledNavBar = styled(Navbar)`
  z-index: 999;
  background-color: #1e465f;
`;

const StyledNav = styled(Nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  .nav-item {
    width: 100%;
    
    a {
      display: flex;
      justify-content: center;  
    }
  }
`;

const NavbarToggler = styled(FontAwesomeIcon)`
  color: #b7a43a;
  @media(min-width: 992px) {
    display: none;
  }
`;

const StyledNavbarText = styled(NavbarText)`
  color: #b7a43a;
  font-weight: 700;
  font-size: 1.5rem;
`;

const HotelAddressGroup = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  text-decoration: none;
  
  @media(max-width: 1335px) {
    display: none;
  }
  
  @media(max-width: 991px) {
    display: flex;
  }
  
  @media(max-width: 650px) {
    display: none;
  }
`;

const HotelAddressLine = styled.p`
 padding: 0;
 margin: 0;
 color: #b7a43a;
`;

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledNavBar expand="lg">
      <NavbarBrand href="/">
        <Logo src={logo} alt={`logo`}/>
      </NavbarBrand>
      <StyledNavbarText>Feb 14-16, 2020</StyledNavbarText>
      <HotelAddressGroup
        href={`https://www.google.com/maps/dir/41.87706,-87.634235/marriott+sheraton+brookfield+wi/@42.4594149,-88.4855225,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8805066a15624b75:0xbf0f0d2ba2a3fa80!2m2!1d-88.1080261!2d43.0270865`}
        target={`_blank`}
      >
        <HotelAddressLine>
          Sheraton Milwaukee Brookfield Hotel
        </HotelAddressLine>
        <HotelAddressLine>
          375 S Moorland Rd.
        </HotelAddressLine>
        <HotelAddressLine>
          Brookfield, WI 53005
        </HotelAddressLine>
      </HotelAddressGroup>
      <NavbarToggler onClick={toggleMenu} icon={faBars} size={`2x`}/>
      <Collapse isOpen={menuOpen} navbar>
        <StyledNav className="ml-auto" navbar>
          {menus.map((menu, key) => {
            return <StyledMenuItem node={menu} key={key}/>;
          })}
        </StyledNav>
      </Collapse>
    </StyledNavBar>
  )
}

const MenuItem = ({node}) => {
  switch (node.type) {
    case "menu":
      return <MenuLink node={node}/>;
    case "submenu":
      return <MenuDropdown node={node}/>;
    default:
      return null;
  }
};

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDropdownMenu = styled(DropdownMenu)`
  background-color: #1e465f;
`;

const MenuDropdown = ({node: {label, items}}) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav>
        <LinkButton short>{label}</LinkButton>
      </DropdownToggle>
      <StyledDropdownMenu right>
        {items.map((item, key) => {
          return (
            <DropdownItem key={key}>
              <Link to={item.to}>{item.label}</Link>
            </DropdownItem>
          );
        })}
      </StyledDropdownMenu>
    </UncontrolledDropdown>
  );
};

const MenuLink = ({node: {label, to}}) => {
  return (
    <NavItem>
      <LinkButton className={`nav-link`} short to={to}>{label}</LinkButton>
    </NavItem>
  )
};

export default NavBar;