import React from 'react';
import './List.css';
import Listitem from '../Listitem/Listitem';

class List extends React.Component {
    render () {
        return (
            <div className="list-section">
                {
                    this.props.items.map(item =>{
                        return <Listitem title={item.title} description={item.description} date={item.date} />
                    })
                }
            </div>
        );
    }
}

export default List;