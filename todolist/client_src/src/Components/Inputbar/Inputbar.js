import React from 'react';
import './Inputbar.css';

class Inputbar extends React.Component {

    constructor(props) {
        super(props);
        this.state={term: ''}
        this.handleTermChange = this.handleTermChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleTermChange(event) {
        console.log(this.state.term);
        this.setState({term: event.target.value}); 
    }

    addItem() {
        this.props.addItems(this.state.term);
    }

    render() {
        return (
            <div className="header">
                <div className="input-section">
                    <h2>Enter your next task</h2>
                    <div className="input-submit">
                        <input onChange={this.handleTermChange} className="input" type="text" placeholder="E.g. Learn React" />
                        <a get={this.props.get} onClick={this.addItem} className="btn-large waves-light waves-effects"><i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                    
                    </div>
            </div>

        );
    }
}

export default Inputbar;