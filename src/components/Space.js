import React, { Component } from 'react';
import Box from './Box.js';
import { Droppable } from 'react-beautiful-dnd';

class Space extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spaceId: props.spaceId
        };
    }


    render() {
        return (
            <Droppable droppableId={this.state.spaceId} type="SPACE" isDropDisabled= {true}>
                {(provided, snapshot) => (
                    <div className="Space" ref={provided.innerRef} {...provided.droppableProps}>
                        <Box boxId={this.state.spaceId}/>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        )
    }
}

export default Space;