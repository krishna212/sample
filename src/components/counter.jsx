import React, { Component } from 'react';
class Counter extends Component {
    
    state = {
        value: this.props.value,
      };

    styles = {
        fontSize : 35
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
        };
    handleDecrement = () => {
        if (this.state.value>0) {
        this.setState({value:this.state.value-=1})
        }
    }

   handleDelete = () =>{
    this.props.onDelete(this.props.id)
   }
    render() {
        return (
          <React.Fragment>
            <h2 style={{color:'teal'}}>Counter No : {this.props.id}</h2>
            <div>
            <button style = {this.styles} onClick={this.handleDecrement} 
            className="badge m-2 badge-danger">     -   </button>

            <span style= {{fontSize:30}} className={this.getBadgeClasses()}>{this.state.value}</span>

            <button style = {this.styles} onClick={this.handleIncrement} 
            className="badge m-2 badge-success">     +     </button>
            
            <button style = {{fontSize:20}} onClick={this.handleDelete}
            className="btn btn-warning btn-sm m-2"> Delete </button>

            </div> 

          </React.Fragment>
        );
      }
    
      getBadgeClasses() {
        let classes = "badge m2 badge-";
        classes += this.state.value === 0 ? "primary" : "secondary";
        return classes; 
      }   
       
}

export default Counter;
  
