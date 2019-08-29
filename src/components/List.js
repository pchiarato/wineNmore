import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem } from './../actions';


class List extends React.Component {
    state = {searchTerm: ''};
    addItem() {
        if(this.state.searchTerm) {
            this.props.addItem({title: this.props.list.length, value: this.state.searchTerm});
            this.setState({searchTerm: ''});
        } else {
            return;
        }
    }
    removeItem(index) {
        this.props.removeItem(index);
    }
    render () {
        return (
            <div>
                <div className="col md-4"></div>
                <div className="col md-4">
                    <input type="text" placeholder="What to do next?" value={ this.state.searchTerm } onChange={v => this.setState({searchTerm: v.target.value})} />
                    <button style={{marginLeft: '4px'}} className="btn-primary" onClick={() => {this.addItem()}}>Add to List</button>
                    {
                        this.props.list.length > 0 
                        ?
                            <ul className="item-list">
                                {this.props.list && this.props.list.map((item, index) => <li className="list-item" key={item.title}><span>{item.value}</span><button onClick={() => {this.removeItem(index)}}>X</button></li>)}
                            </ul>
                        :
                            <h3>Type something and add to the list</h3>
                    }
                </div>
                <div className="col md-4"></div>
            </div>
            )
    }
    
}
const mapStateToProps = ({list}) => {
    return {list};
}
export default connect(mapStateToProps, {addItem, removeItem})(List);