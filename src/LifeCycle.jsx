import React,{Component} from 'react'

class LifeCycle extends Component{

    /* MOUNTING COMPONENT */
    constructor(props){
        super(props);
        this.state = {name: "Patil", deleteComponent:true, btnText: "Remove Component"};
        console.log("1. Constructor Method Call First, Name is ", this.state.name);
    }

    static getDerivedStateFromProps(props, state){
        console.log("2. Get Derived State From Props Method Call Second, props name is -", props.name);
        //return {name:props.name}
        return {};
    }

    componentDidMount(){
        this.setState({name:"Korde"}); //***this setState can not call from render and componentWillUnmount method
        console.log("4. Component Did Mount Method Call Fourth - update state/props and update(update phase call) the component, new name ", this.state.name);
    }

    UNSAFE_componentWillMount() {
        console.log('Component is mounted in the DOM');
    }

    render() {
        //CAN NOT USE SetState METHOD HERE, we can change state i onclick and doubleClick like event 
        console.log("3. Render Method Call Third, name is ", this.state.name);
        return (
            <div>
                <h2>Mounting</h2>
                <ul>
                    <li><b><i>Mounting means putting elements into the DOM.</i></b></li>
                    <li>While mounting component, React has four built-in methods that gets called in below order</li>
                    <li><b> useEffect Hook for componentDidMount, componentDidUpdate, and componentWillUnmount combined </b></li>
                    <ol>
                        <li><b>constructor() </b> - 
                            <ol>
                                <li>Should always start by calling the super(props) before anything else</li>
                                <li>Method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.</li>
                            </ol>
                        </li>
                        <li><b>getDerivedStateFromProps() </b>-
                            <ol>
                                <li>method is called right before rendering the element(s) in the DOM.</li>
                                <li>set the state object based on the initial props. </li>
                                <li>takes props, state as argument and returns object with state value assigned from olb props/state</li>
                            </ol>
                        </li>
                        <li><b>render() </b> -  method is required and will always be called & method that actually outputs the HTML to the DOM.</li>
                        <li><b>componentDidMount() </b> - method is called after the component is rendered.</li>
                        <li><b> componentWillMount() </b> -
                            <ol>
                                <li>method allows us to execute the React code synchronously when the component gets loaded or mounted in the DOM (Document Object Model). </li>
                                <li>ComponentWillMount() will go to be deprecated in the future releases of the React as per this issue. It is suggested to use ComponentDidMount() or useEffect hook as its alternative but you can still use ComponentWillMount() by calling it as UNSAFE_ComponentWillMount().</li>
                                <li>ComponentWillMount() is generally used to show a loader when the component is being loaded or when the data from the server is being fetched but once it will get completely deprecated then we can use SuspenseAPI as a better alternative.</li>
                            </ol>
                        </li>
                    </ol>
                </ul>
                <h2>Updating</h2>
                <ul>
                    <li><b><i>A component is updated whenever there is a change in the component's state or props.</i></b></li>
                    <li>React has five built-in methods that gets called, in this order, when a component is updated:</li>
                    <ol>
                        <li><b>getDerivedStateFromProps() </b>-
                            <ol>
                                <li>Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.</li>
                                <li>This is still the natural place to set the state object based on the initial props.</li>
                            </ol>
                        </li>
                        
                        <li><b>shouldComponentUpdate() </b> - 
                            <ol>
                                <li>method you can return a Boolean value that specifies whether React should continue with the rendering or not.</li>
                                <li>The default value is true. If false is returned, Component#render, componentWillUpdate and componentDidUpdate will not be called.</li>
                            </ol>
                        </li>
                        <li><b>render() </b> - method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.</li>
                        <li><b>getSnapshotBeforeUpdate() </b> - 
                            <ol>
                                <li><b> Method you have access to the props and state before the update,you can check what the values were before the update.</b></li>
                                <li> When this method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.</li>
                            </ol>
                        </li>
                    </ol>
                </ul>
                <br/><br/>
                <h2>Component Unmount & Mount : </h2>
                {this.state.deleteComponent && <UnmountComp/> }                
                <button onClick={ () => { this.setState({deleteComponent: false, btnText: 'Doubleclick Add Component'}) } } onDoubleClick={ () => { this.setState({deleteComponent: true, btnText: 'Remove Component'}) } } >{this.state.btnText}</button>
                <br/><br/>
            </div>
        )
    }

    /*UPDATING COMPONENT*/
    shouldComponentUpdate(){
        console.log("5. Should Component Update Method Call Fifth - return true or false (always return true, If false is returned, Component#render, componentWillUpdate and componentDidUpdate will not be called.)");
        return true;
    }

    getSnapshotBeforeUpdate(preProps, preStates){
        console.log("6. Get Snapshot Before Update Method Call - always use with component did update");
        console.log("getSnapshotBeforeUpdate - Before the update, the Name props was - ", preProps.name);
        return {};
    }

    componentDidUpdate(){
        console.log("7. Component Did Update Method Call.");
        console.log("componentDidUpdate - The updated name is ",  this.state.name);
    }
}

export default LifeCycle;

export class UnmountComp extends React.Component{

    /*UMMOUNTING COMPONENT*/
    componentWillUnmount(){
        //CAN NOT USE SetState METHOD HERE
        console.log("8. Component Will Unmount Method Call.");
    }
    render(){
        return<div style={{backgroundColor:"Red"}}> <h3>Unmount component</h3> </div>
    }
}