import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
        { id: 1, value: 1},
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 9 }
        ]
        };

        handleDelete = (cid) => {
            let c = this.state.counters.filter(c => c.id!==cid)
            this.setState({counters:c})
            }

        render() {
        return (
        <div>
        { this.state.counters.map(counter => 
        <Counter key={counter.id} value = {counter.value} id={counter.id} onDelete = {this.handleDelete}/>
        )
        }
        </div>
        );
        }
}
 
export default Counters;