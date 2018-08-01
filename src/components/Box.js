import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import Fruit from './Fruit';

class Box extends Component {
    render() {
        return (
            <Draggable draggableId={`BOX_${this.props.boxId}`} index={0}>
                {(provided, snapshot) => {
                    const style = {
                        width: `${50 * this.props.box.sizze}px`,
                        ...provided.draggableProps.style,
                    };
                    return (
                        <div className="Box" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={style} >
                            <Droppable droppableId={`BOX_SPACE_${this.props.boxId}`} type="BOX_SPACE" direction="horizontal" >
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps} >
                                        <div className="BoxSpace">
                                            {this.props.box.items.map((fruit, index) =>
                                                <Fruit key={index} boxId={this.props.boxId} fruitId={index} />
                                            )}
                                            {provided.placeholder}
                                        </div>
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    );
                }}
            </Draggable >
        )
    }
}

export default connect(
    (state, ownProps) => ({
        ...ownProps,
        box: state.cupboard.get(Number(ownProps.boxId)).toJS()
    })
)(Box);