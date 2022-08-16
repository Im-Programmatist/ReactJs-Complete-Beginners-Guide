import React, { createContext } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

//User component import in App
import { Sidebar } from './components/Sidebar';
import { NavigationBar } from './components/NavigationBar';

//User Pages Import In APP
import { Home } from './Home';
import { ReactRoute } from './ReactRoute';
import { Hooks } from './Hooks';
import { Forms } from './Forms';
import { Spread } from './SpreadOperator';
import LifeCycle from './LifeCycle';
import { ToDoList } from './ToDoList';
import { ContextApi }  from './ContextApi';
import { ExportType }  from './ExportType';
import { AxiosHttpClientService } from './AxiosHttpClientService';
import { InvalidComp } from './InvalidComp';
import { LiveSearch } from './LiveSearch';
import { WeatherSearch } from './WeatherSearch';
import { ReactRedux } from './ReactRedux';
import { AdvancedReact } from './AdvancedReact';
import { Recoil } from './Recoil';

//import context in app
import { UserProvider } from './context/UserContext'
import NameProvider from './context/NameContext';
import AddressProvider from './context/AddressContext';

const Wrapper = styled.div`
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em;
`;

//for context example
//const Name = React.createContext([{}, () => {}]);
//const Address = React.createContext([{}, () => {}]);
//or by destructuring
//const { Name, Address } = createContext([{}, () => {}]);

function App() {
    const userContextData = { name: 'Patil', loggedIn: true }
    return (
        // <div className="App" id="outer-container">
        //     <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        //     <div id="page-wrap">
        //         <h1>Cool Restaurant</h1>
        //         <h2>Check out our offerings in the sidebar!</h2>
        //     </div>
        // </div>
        <React.Fragment>
            <Router>
                <Sidebar />
                <NavigationBar />
                <Wrapper>  
                    <NameProvider> {/*  Apply to all routes and component */}
                        <AddressProvider>                                              
                            <Switch>         
                                {/*  using component method of router */}
                                <Route exact path="/" component={Home} /> 
                                {/*Using default param and match in component*/}
                                {/* <Route exact path="/:fname/:lname" component={Home} /> */}
                                
                                <Route exact path="/route/:testHook?" component={ReactRoute} />                        
                                <Route exact path="/forms" component={Forms} />
                                <Route exact path="/spreadoperator" component={Spread} />
                                {/*  using render method of router - when pass props*/}
                                <Route exact path="/lifecycle" render={() => <LifeCycle name="Chetan" />} /> {/*passing props thats why use render*/}
                                <Route exact path="/todolist" component={ToDoList} />
                                <Route exact path="/exporttype" component={ExportType} />
                                <Route exact path="/axios" component={AxiosHttpClientService} />                                
                                <Route path="/contextapi" render={ (props)=> <ContextApi />} />
                                <Route path="/hooks" render={ (props)=> <Hooks />} />
                                <Route path="/livesearch" render={ (props)=> <LiveSearch />} />
                                <Route exact path="/weathersearch" component={WeatherSearch} />
                                <Route exact path="/reactredux" component={ReactRedux} />
                                <Route exact path="/advancedreact" component={AdvancedReact} />
                                <Route exact path="/recoillibrary" component={Recoil} />
                                
                                {/* <Name.Provider value={nameObj}>
                                    <Address.Provider value={addressObj}>   
                                        <Route path="/hooks" component="Hooks" />
                                    </Address.Provider>
                                </Name.Provider>  */}

                                <Route>
                                    <UserProvider value={userContextData}>
                                        <InvalidComp/>
                                    </UserProvider>
                                </Route> 
                            </Switch>
                        </AddressProvider>
                    </NameProvider>  
                </Wrapper>          
            </Router>            
        </React.Fragment>
    );
}

export default App;

//we have to export all the contex
//export {Name,Address};