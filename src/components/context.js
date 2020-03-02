import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                contacts : state.contacts.filter((contact)=> contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                contacts : [action.payload, ...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return {
                contacts : state.contacts.map(contact => contact.id === action.payload.id ? contact=action.payload : contact)
            };
        default:
            return state;
    }
}

export class Provider extends Component {

    state = {
        contacts: [
            {id: 1 , phone: "066666666", email: "mail1@gmail.com"},
            {id: 2 , phone: "077777777", email: "mail2@gmail.com"},
            {id: 3 , phone: "088888888", email: "mail3@gmail.com"},
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

  async componentDidMount(){
      try{
        const res = await  axios.get('https://jsonplaceholder.typicode.com/users');

       this.setState({
        contacts: res.data
        }) 
      }catch(e){alert(e)}
           
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer ;
