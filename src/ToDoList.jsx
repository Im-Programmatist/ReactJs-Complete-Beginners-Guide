import React,{useState} from "react";
import ToDoListItem from "./ToDoListItem";
// import './Form.css';
import styled from 'styled-components';
import "./todolist.css";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Button from '@material-ui/core/Button';
//import Toaster, { ToastStyles } from 'react-native-toaster'



const Wrapper = styled.div`
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em;
`;

export const ToDoList = () => {

    const [inputlist, setInputList] = useState();
    const [items, setItems] = useState([]);

    const getItemByEvent = (event) => {
        //console.log(event.target.name,event.target.value);
        setInputList(event.target.value);
    }
    const listOfItem = (inputText) => {
        if(inputText !== undefined){
            setItems( (oldItems) => {
                console.log('setItems oldItems', oldItems[0]);
                console.log('inputlist ', inputlist);
                return [
                    ...oldItems,
                    inputlist
                ];
            });
            setInputList("");
        }
        else{
            // <Toaster message="Please enter something there...!" />
        }       
    };

    const deleteItem = (id) => {
        console.log("Item deleted..");
        setItems( (oldItems) => {
            console.log('deleteItem setItem oldItems', oldItems);
            // <Toaster message="Item deleted successfully...!" />
            return oldItems.filter( (arrElem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>   
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <input type="text" name="" placeholder="Add an item here.." onChange={getItemByEvent} value={inputlist}/>
                    <Button onClick={() => listOfItem(inputlist)}> 
                        <NoteAddIcon/>
                    </Button>
                    <ol>
                        {/* <li> {inputlist} </li> */}                        
                        { 
                            items.map( (itemVal, index) => {
                                return <ToDoListItem 
                                        key={index} 
                                        id={index}
                                        itemText={itemVal}
                                        onSelect={deleteItem}
                                    />
                            }) 
                        }
                    </ol>
                </div>
            </div>
        </>
    );
};