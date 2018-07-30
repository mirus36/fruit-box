import React, { Component } from 'react';
import Box from './Box';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

class Space extends Component {
    render() {
        return (
            <Droppable droppableId={`${this.props.spaceId}`} type="CUPBOARD_SPACE" isDropDisabled={this.props.box !== null}>
                {(provided, snapshot) => (
                    <div className="Space" ref={provided.innerRef} {...provided.droppableProps} >
                        {this.props.box !== null
                            ? (<Box boxId={this.props.spaceId} />)
                            : null
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        )
    }
}

export default connect(
    (state, ownProps) => ({
        ...ownProps,
        box: state.cupboard.get(ownProps.spaceId)
    })
)(Space);