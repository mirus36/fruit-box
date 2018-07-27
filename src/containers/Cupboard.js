import React, { PureComponent } from 'react';
import Space from '../components/Space'
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux'
import { createReplaceBox } from '../actions'


class Cupboard extends PureComponent {

    onDragEnd = (result) => {
        if (result.type === "SPACE" && result.destination !== null) {
            this.props.replaceBox(Number(result.source.droppableId), Number(result.destination.droppableId))
        }
    }

    render() {
        console.log(this.props.cupboard.toJS())
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="Сupboard">
                    <Space spaceId="0" />
                    <Space spaceId="1" />
                    <Space spaceId="2" />
                    <Space spaceId="3" />
                    <div className="Shelf"></div>
                    <Space spaceId="4" />
                    <Space spaceId="5" />
                    <Space spaceId="6" />
                    <Space spaceId="7" />
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