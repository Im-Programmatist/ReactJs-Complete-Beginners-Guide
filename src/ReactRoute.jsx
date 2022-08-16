import React from 'react';
import styled from 'styled-components';
import {  useParams, useLocation, useHistory, useRouteMatch  } from 'react-router-dom';

const GridWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(25px, auto);
`;

const Pre = styled.pre`
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    margin-bottom: 10px;
    overflow: auto;
    width: auto;
    padding: 5px;
    background-color: #eee;
    width: 650px!ie7;
    padding-bottom: 20px!ie7;
    max-height: 600px;
  `;

export const ReactRoute = () => {
    //Using useLocation Hook
    const location = useLocation();
    console.log("location - ", location);

    //Using useParam Hook
    const {testHook} = useParams();
    console.log("if Param paased then value is ",testHook);

    //using useHistory Hook
    const history = useHistory(); //this history object is mutable means we can change it 
    console.log("histoty", history);

    //using useRouteMatch
    const routeMatch = useRouteMatch("/user/:testHook");

    return(
        <div>        
            <p><b> If you do not need to pass props then use Component Route else while passing props then use Render Route</b></p>
            <p> When we use component in route(insted of render or children,below), the router uses React.createElement to create a new react element from the given component.</p>
            <p> That means if you provides an inline fucntion to the component prop, you would create a new component every render. this result in the existing component unmounting and the new component mounting insted of just updating the existing component</p>
            <p> When using an inline function for inline rendering, use Render Route  </p>
            <h3>React Router Hooks</h3>
            <br/>
            <h4 style={{color:"red"}}>useParams</h4>
            <ul>
                <li>The useParams Hook returns an object containing key-value pairs of the passed parameters in a dynamic URL.</li>
                <li><b> variable name should be same as param name passed</b></li>
                <li>it replace the match.param functionality</li>  
                <li> {testHook} - is param passed </li>  
            </ul>
            <Pre>
                {`
                 ## using match
                 export const Home = ({match}) => {
                     //     return (
                     //     <div>
                     //         <p><b> Hii Welcome {match.params.name} , </b></p>
                     //     </div>
                     //     );
                     // }

                     -------------------------

                 ## using useParam Hook
                 export const Home = () => {
                     //using useParam Hooks
                     const {fname, lname} = useParams(); //{fname, lname } variable name should be same as param name passed
                     console.log(fname, typeof(fname));
                     console.log(lname, typeof(lname));
                     if (fname !== '' && lname !== '') {
                         return (
                             <div>
                                 <p><b> Hii Welcome {fname} {lname}</b></p>
                             </div>
                         )
                     }
                 }
                <Route path="/user/:id">
                <User />
                </Route>

                Import the useParam Hook from react-router-dom package.
                import { useParams } from "react-router-dom";
            
                Now you can use the Hook, as shown below.

                const User = () => {
                    const params = useParams();
                    console.log(params);
                    return (
                        // ...
                    )
                }
                So if you were to pass 3 as ID in the user URL (/user/3) then console will be
                { id: 3 }

                display user information from server
                <div>current user Id - {params.id}</div>

                `}
            </Pre>
            <br/>

            <h4 style={{color:"red"}}>useLocation</h4>
            <ul>
                <li> The useLocation Hook allows you to access the location object that represents the active URL. </li>
                <li> The value of the location object changes whenever the user navigates to a new URL. </li>
                <li> The useLocation Hook can be convenient when you have to trigger any event whenever the URL changes. </li>
                <li><b> Use to find out current location path</b></li>
                <li><b><ul><i>We can get location from history hook object but, this location hook is recommonded</i></ul></b></li>
                <li>location object has `{'{pathname: "/hooks/readfy", search: "", hash: "", state: undefined}'}` </li>               
                <li>My current path is - {location.pathname}</li>
                <li> If you want to place condition using location - way like below</li>
                {location.pathname === '/route/chetan' ?
                    (<button onClick={() => alert('you are chetan')} > Click Only For CHetan </button>)
                    :<label>button is visible only for chetan param</label>
                }                
            </ul>
            <Pre>
                {`

                    ## using match
                    //Using useLocation Hook
                    const location = useLocation();
                    console.log("location - ", location);

                    Consider that you have to keep track of views on users’ profile pages. You can detect changes in the location object using the useEffect Hook, which comes with React.
                    import {
                    // ...
                    useLocation,
                    } from "react-router-dom";
                    
                    const User = () => {
                    const history = useHistory();
                    const params = useParams();
                    const location = useLocation();
                    
                    useEffect(() => {
                        console.log(location.pathname);
                        // Send request to your server to increment page view count
                    }, [location]);
                    
                    const handleBack = () => {
                        history.goBack();
                    };
                    
                    const handleNavigation = () => {
                        history.push("/user/5");
                    };
                    
                    return (
                        <div>
                        <div>This is the user page</div>
                        <div>current user Id - {params.id}</div>
                        <div>
                            <button onClick={handleBack}>Go Back</button>
                        </div>
                        <div>
                            <button onClick={handleNavigation}>Go To Different User</button>
                        </div>
                        </div>
                    );
                    };
                `}
            </Pre>
            <br/>

            <h4 style={{color:"red"}}>useHistory</h4>
            <ul>
                <li>The useHistory Hooks return the history object, which the router uses internally to handle the route changes. The history object is used for managing session history.</li>
                <li> you can use the history.push() method to add a new entry to the history stack and navigate the user from the current route</li>
                <li><b><ul><i>We can get location from history hook object but, this object is mutable meanse it can be change so dont use location from history object to find current path</i></ul></b></li>
                <li><button onClick={() => history.goBack()}>Let me go back</button></li>
                <li><button onClick={() => history.push("/forms")}>go to Form Page</button></li>
            </ul>
            <Pre>
                {`
                    import {
                        // ...
                        useHistory,
                    } from "react-router-dom";
                    
                    const User = () => {
                        const history = useHistory();
                        const params = useParams();
                    
                        const handleBack = () => {
                        history.goBack();
                        };
                    
                        const handleNavigation = () => {
                        history.push("/user/5");
                        };
                    
                        return (
                        <div>
                            <div>This is the user page</div>
                            <div>current user Id - {params.id}</div>
                            <div>
                            <button onClick={handleBack}>Go Back</button>
                            </div>
                            <div>
                            <button onClick={handleNavigation}>Go To Different User</button>
                            </div>
                        </div>
                        );
                    };
                    //The history.goBack() method navigates the user to the previous page and goes back one entry in the history stack.
                `}
            </Pre>
            <br/>

            <h4 style={{color:"red"}}>useRouteMatch</h4>
            <ul>
                <li> The useRouteMatch Hook matches the active URL with a given path, similarly to how the Route component works. </li>
                <li> You can get rid of the unnecessary Route component and access the match object. </li>
                <li>The useParams hook will not return an empty object since the Route component did not have any route params specified. Instead, you now have access to params in the routeMatch object.</li>
            </ul>
            {routeMatch ? (
                <div>user Id - {routeMatch.params.id}</div>
            ) : (
                <div>You are viewing your profile</div>
            )}
            <Pre>
                {`
                    You can now change the path in the user page’s route component to simply /user
                    <Route path="/user/">
                        <User />
                    </Route>

                    Then, use the routeMatch Hook, as shown below:

                    import {
                        // ...
                        useRouteMatch,
                    } from "react-router-dom";

                    const User = () => {
                    const history = useHistory();

                    const routeMatch = useRouteMatch("/user/:id");
                    const location = useLocation();

                    useEffect(() => {
                        console.log(location);
                    }, [location]);

                    const handleBack = () => {
                        history.goBack();
                    };

                    const handleNavigation = () => {
                        history.push("/user/5");
                    };

                    return (
                            <div>
                            <div>This is the user page</div>
                            {routeMatch ? (
                                <div>user Id - {routeMatch.params.id}</div>
                            ) : (
                                <div>You are viewing your profile</div>
                            )}

                            <div>
                                <button onClick={handleBack}>Go Back</button>
                            </div>
                            <div>
                                <button onClick={handleNavigation}>Go To Different User</button>
                            </div>
                            </div>
                        );
                    };
                `}
            </Pre>
            <br/>
        </div>
    )
}