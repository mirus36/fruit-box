import React, { Component } from 'react';
import Space from '../components/Space';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { createReplaceBox } from '../actions';


class Cupboard extends Component {

    onDragEnd = (result) => {
        if (result.type === "CUPBOARD_SPACE" && result.destination !== null) {
            const from = Number(result.source.droppableId.replace("CUPBOARD_SPACE_",''));
            const to = Number(result.destination.droppableId.replace("CUPBOARD_SPACE_",''));
            this.props.replaceBox(from, to)
        }
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="Сupboard" >
                    <Space spaceId={0} />
                    <Space spaceId={1} />
                    <Space spaceId={2} />
                    <Space spaceId={3} />
                    <div className="Shelf"></div>
                    <Space spaceId={4} />
                    <Space spaceId={5} />
                    <Space spaceId={6} />
                    <Space spaceId={7} />
                    <div className="Shelf"></div>
                </div>
            </DragDropContext>
        )
    }
}

export default connect(
    state => state,
    (dispatch) => ({
        replaceBox: (from, to) => dispatch(createReplaceBox(from, to))
    })
)(Cupboard);