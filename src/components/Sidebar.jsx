import React from 'react';
//import { slide as Menu } from 'react-burger-menu';
//import { bubble as Menu } from 'react-burger-menu';
//import { elastic as Menu } from 'react-burger-menu';
import styled from "styled-components";
import NavItem from './NavItem';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 75px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 3.4em;      /* Stay at the top */
    background-color: #222; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/', /* path is used as id to check which NavItem is active basically */
                    name: 'Home',
                    css: 'fa fa-fw fa-home',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/route',
                    name: 'ReactRoute',
                    css: 'fa fa-route',
                    key: 2
                },
                {
                    path: '/hooks',
                    name: 'Hooks',
                    css: 'fas fa-hashtag',
                    key: 3
                },
                {
                    path: '/forms',
                    name: 'Forms',
                    css: 'fas fa-address-card',
                    key: 4
                },
                {
                    path: '/spreadoperator',
                    name: 'Spread',
                    css: 'fas fa-address-card',
                    key: 5
                },
                {
                    path: '/lifecycle',
                    name: 'LifeCycle',
                    css: 'fas fa-life-ring',
                    key: 6
                },
                {
                    path: '/todolist',
                    name: 'ToDoList',
                    css: 'fa fa-sticky-note',
                    key: 7
                },
                {
                    path: '/contextapi',
                    name: 'ContextApi',
                    css: 'fa fa-sitemap',
                    key: 8
                },
                {
                    path: '/exporttype',
                    name: 'ExportType',
                    css: 'fa fa-upload',
                    key: 9
                },
                {
                    path: '/axios',
                    name: 'AxiosHttpClient',
                    css: 'fa fa-upload',
                    key: 10
                },
                {
                    path: '/livesearch',
                    name: 'LiveSearch',
                    css: 'fa fa-search',
                    key: 11
                },
                {
                    path: '/weathersearch',
                    name: 'WeatherSearch',
                    css: 'fa fa-bolt',
                    key: 12
                },
                {
                    path: '/reactredux',
                    name: 'ReactRedux',
                    css: 'fa fa-compress',
                    key: 13
                },
                {
                    path: '/advancedreact',
                    name: 'AdvancedReact',
                    css: 'fa fa-arrow-up',
                    key: 14
                },
                {
                    path: '/recoillibrary',
                    name: 'Recoil',
                    css: 'fa fa-arrow-up',
                    key: 15
                },
                {
                    path: '/codespliting',
                    name: 'CodeSplit',
                    css: 'fa fa-arrow-up',
                    key: 16
                },
                {
                    path: '/tempconvert',
                    name: 'TempCalculator',
                    css: 'fa fa-arrow-up',
                    key: 17
                },
                {
                    path: '/tictacgame',
                    name: 'Game-Tictactoe',
                    css: 'fa fa-arrow-up',
                    key: 18
                },
                {
                    path: '/jsx',
                    name: 'JSX',
                    css: 'fa fa-points',
                    key: 19
                },
                {
                    path: '/createRef',
                    name: 'Create Reference',
                    css: 'fa fa-points',
                    key: 20
                }
            ]
        }
    }
    
    onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
    }

    render() {
        const { items, activePath } = this.state;
        return (
            <StyledSideNav>
                {
                    /* items = just array AND map() loops thru that array AND item is param of that loop */
                    items.map((item) => {
                        /* Return however many NavItems in array to be rendered */
                        return (
                            <NavItem key={item.key} path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath}/>
                        )
                    })
                }
            </StyledSideNav>
        );
    }
}

//You can get access to the history object’s properties and 
//the closest <Route>'s match via the withRouter higher-order component. 
//withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
const RouterSideNav = withRouter(SideNav);

export class Sidebar extends React.Component {
    render(props) {
    return (
        // <Menu>
        //     <a className="menu-item" href="/">
        //         Home
        // </a>
        //     <a className="menu-item" href="/salads">
        //         Salads
        // </a>
        //     <a className="menu-item" href="/pizzas">
        //         Pizzas
        // </a>
        //     <a className="menu-item" href="/desserts">
        //         Desserts
        // </a>
        // </Menu>
        <RouterSideNav></RouterSideNav>
    );
  }
}
