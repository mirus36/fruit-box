import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import Fruit from './Fruit';

class Box extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.boxId} index={0}>
                {(provided, snapshot) => {
                    const style = {
                        width: `${50 * this.props.box.sizze}px`,
                        ...provided.draggableProps.style,
                    };
                    return (
                        <div className="Box" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={style} >
                            <Droppable droppableId={this.props.boxId} type="BOX_SPACE" >
                                {(provided, snapshot) => (
                                    <div className="BoxSpace" ref={provided.innerRef} {...provided.droppableProps} >
                                        {this.props.box.items.map((fruit, index) =>
                                            <Fruit key={index} boxId={this.props.boxId} fruitId={index} />
                                        )}
                                        {provided.placeholder}
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