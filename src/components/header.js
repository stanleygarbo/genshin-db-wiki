import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    z-index: 6;
    nav{
      width: 100%;
      height:90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 20px 0px 20px;
      .navbar-logo{
        font-size: 30px;
        color: #ffdc63;
      }
      ul{
        display: flex;
        list-style-type: none;
        padding: 0;
        align-items: center;
        .nav-item{
          padding:0px 20px;
          .nav-link{
            font-size: 20px;
            color: #fff;
          }
        }
        .donate-link{
          text-decoration: none;
          border: 2px solid #fff;
          border-radius: 100px;
          font-size: 14px;
          padding: 8px 20px;
          text-transform: uppercase;
          font-weight: 600;
          margin-left: 100px;
          color:#fff;
        }
      }
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
      <nav>
        <Link className="navbar-logo" to="/">
          Genshin-DB
        </Link>
        <ul>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          {/* <a className="donate-link" href="dsad">
            Donate
          </a> */}
        </ul>
      </nav>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
