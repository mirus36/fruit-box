import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

class Fruit extends Component {
    render() {
        return (
            <Draggable draggableId={`FRUIT_${this.props.boxId}_${this.props.fruitId}`} index={this.props.fruitId}>
                {(provided, snapshot) => {
                    const style = {
                        width: `${this.props.size * 25}px`,
                        height: `${this.props.size * 25}px`
                    };
                    return (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className={this.props.type}  style={style}></div>
                        </div>
                    )
                }}
            </Draggable>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        ...ownProps,
        type: state.cupboard.get(ownProps.boxId).get('items').get(ownProps.fruitId).get('type'),
        size: state.cupboard.get(ownProps.boxId).get('items').get(ownProps.fruitId).get('sizze')
    })
)(Fruit);