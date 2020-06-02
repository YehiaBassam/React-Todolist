import React , { Component } from 'react';
import './Addtodo.css';

class Addtodo extends Component {
    state = {
        id :'',
        name : '',
        date  : ''
    }


    handelChange = (e) => {
        this.setState({
            id : Math.random(),
            [e.target.id] : e.target.value
        });
    }

    handelSubmit = (e) => {
        e.preventDefault();
        if (this.state.name == '')
        alert('you should enter your todo list name');
        else if (this.state.date == '')
        alert('you should enter your todo list date');
        else
        this.props.addItem(this.state);
        this.setState({
                id :'',
                name : '',
                date  : ''
        });
    }

    


    render (){
        return (
            <div>
                <form onSubmit={this.handelSubmit} >
                    <input className='name' type='text' placeholder='your todo ...' onChange={this.handelChange} id='name' value={this.state.name}/>
                    <input className='date' type='date' onChange={this.handelChange} id='date' value={this.state.date} />
                    <input className='action add' type='submit' value='Add'></input>
                </form>
            </div>
        )
    }
}

export default Addtodo