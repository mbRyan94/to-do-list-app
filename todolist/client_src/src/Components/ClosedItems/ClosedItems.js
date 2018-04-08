import React from 'react';
import './ClosedItems.css';
import Listitem from '../Listitem/Listitem';

class ClosedItems extends React.Component {
    render () {
        return (
            <div className="closed-section">
                <Listitem />
                <Listitem />
                <Listitem />
            </div>
        );
    }
}

export default ClosedItems;