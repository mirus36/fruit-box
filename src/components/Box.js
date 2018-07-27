import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

class Box extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxId: props.boxId
        };
    }


    render() {
        return (
            <Draggable draggableId={this.state.boxId} index={0}>
                {(provided, snapshot) => (
                    <div className="Box" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    </div>
                )}
            </Draggable>
        )
    }
}

export default Box;