import React, { Component } from 'react';
import Space from '../components/Space'
import { DragDropContext } from 'react-beautiful-dnd';


class Cupboard extends Component {
    render() {
        return (
            <DragDropContext>
                <div className="Сupboard">
                    <Space spaceId="1"/>
                    <Space spaceId="2"/>
                    <Space spaceId="3"/>
                    <Space spaceId="4"/>
                    <div className="Shelf"></div>
                    <Space spaceId="5"/>
                    <Space spaceId="6"/>
                    <Space spaceId="7"/>
                    <Space spaceId="8"/>
                    <div className="Shelf"></div>
                </div>
            </DragDropContext>
        )
    }
}

export default Cupboard;