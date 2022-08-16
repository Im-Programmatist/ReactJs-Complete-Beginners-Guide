import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ToDoListItem = (props) => {

    return <>
        <div className="todo_style">
            <Button>
                <DeleteForeverIcon onClick={() => {props.onSelect(props.id)}}//callback function used here because onclick can not pass props.id
                    //props are immutable , so need to call back function
                    //onClick={onSelect(props.id)} not work
                />
            </Button>           
            <li> { props.itemText }</li>
        </div>
    </>
};

export default ToDoListItem;