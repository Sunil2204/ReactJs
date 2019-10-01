import React, {Component} from 'react';
import '../App.css';

export default class Form extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          edit: false,
          id: null,
          
          mockData: [{
            id: '1',
            title: 'Buy Milk.',
            done: false,
            date: new Date()
          }, {
            id: '2',
            title: 'Meeting with Ali.',
            done: false,
            date: new Date()
          }, {
            id: '3',
            title: 'Tea break.',
            done: false,
            date: new Date()
          }, {
            id: '4',
            title: 'Go for a run.',
            done: false,
            date: new Date()
          }]
        }
      }
    
    onSubmitHandle(event) {
        event.preventDefault();

        this.setState({
            mockData: [...this.state.mockData, {
                id: Date.now(),
                title: event.target.item.value,
                done: false,
                date: new Date()
            }]
        });
        event.target.item.value = '';

    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmitHandle.bind(this)}>
                    <label className="input-label">Name</label>
                   
                    <input className="input-type" type="text" name="name" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}