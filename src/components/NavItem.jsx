import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"; //Link used in old version , now NavLink in Used
import styled from "styled-components";

const NavIcon = styled.div`
    color: ##FFFFF;
`;

const StyledNavItem = styled.div`
    height: 40px;
    width: 45px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0;   /* Puts space between NavItems */
    a {
        font-size: 1.9em;
        color: ${(props) => props.active ? "white" : "#9FFFCB"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

export default class NavItem extends React.Component{
    
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }
    
    render(){
        const { active } = this.props;
        console.log("Active class is - ",active);
        return (
            // <StyledNavItem active={active}>
            //     <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
            //         <NavIcon></NavIcon>
            //     </Link>
            // </StyledNavItem>,
            <NavLink exact to={this.props.path} onClick={this.handleClick} activeClassName="active_class">
                <i className={this.props.css}></i> <span>{this.props.name}</span>
            </NavLink> //exact used to set active class to current page 
        );
    }
}