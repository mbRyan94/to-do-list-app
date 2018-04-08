import React from 'react';
import './Listitem.css';

class Listitem extends React.Component {
    render() {
        return (
            <div className="listitem">
                <div className="item-inner">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span></span>
                        </label>
                        <p className="title">{this.props.title}</p>
                        <p className="date">{this.props.date}</p>
                        </p>
                    </form>
                </div>
            </div>
        );

    }
}
export default Listitem;