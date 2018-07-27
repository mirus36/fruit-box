import React, { Component } from 'react';
import Box from './Box.js'

class Cupboard extends Component {
    render() {
        return (
            <div className="Сupboard">
                <div className="Space">
                    <Box />
                </div>
                <div className="Space">
                    <Box />
                </div>
                <div className="Space">
                    <Box />
                </div>
                <div className="Space">
                    <Box />
                </div>
                <div className="Shelf"></div>
                <div className="Space">
                    <Box />
                </div>
                <div className="Space">
                    <Box />
                </div>
                <div className="Space">
                    <Box />}
                </div>
                <div className="Space">
                    <Box />
                </div>
                <div className="Shelf"></div>
            </div>
        )
    }
}

export default Cupboard;