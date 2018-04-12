import React, { Component } from 'react';
import './App.css';
import Inputbar from './Components/Inputbar/Inputbar';
import List from './Components/List/List';
import ClosedItems from './Components/ClosedItems/ClosedItems';
import Loopback from './util/Loopback';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      checkedItems: false,
      listItems: [],
      closedItems: []
    };
    this.showClosedSection = this.showClosedSection.bind(this);
    this.getList = this.getList.bind(this);
    this.addToList = this.addToList.bind(this);
  }

showClosedSection() {
  if (this.state.checkedItems === false) {
    this.setState({checkedItems: true});
  } else {
    this.setState({checkedItems: false});
  }
}

componentWillMount() {
  this.getList();
}

getList() {
 
  Loopback.displayItems().then(todo => {
    this.setState({listItems: todo});
  });
}

addToList(term) {
  Loopback.addItems(term).then(this.getList())
}

componentDidMount() {
  this.addToList();
}


addToCheckedSection() {

}



  render() {
    return (
      <div className="App">
          <nav>
            <div className="nav-wrapper blue darken-3">
              <a href="/" className="brand-logo center">TODO LIST</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/"><i className="fa fa-user"></i></a></li>
                
              </ul>
            </div>
          </nav>
          <Inputbar get={this.getList} addItems={this.addToList} />
          <List items={this.state.listItems}/>
          <div className="checked-btn">
            <a onClick={this.showClosedSection} className="waves-effect waves-light btn">Show checked items</a>
          </div>
          {
            this.state.checkedItems ? <ClosedItems /> : null
          }
          
          
      </div>
    );
  }
}

export default App;
