import React, { Component } from 'react'

import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {


    deleteChild(id){
        const { contacts }= this.state;
        const newList = contacts.filter((contact)=> contact.id !== id);
        this.setState({
            contacts : newList
        })
    }
    render() {
        return (
            <Consumer>
            { value => (
                <div>
                { value.contacts.map((contact) => (
                    <Contact key={contact.id} data={contact} onDeleteChild={this.deleteChild.bind(this, contact.id)} />
                )) }
                </div>
            )}
            </Consumer>
        )
    }
}

export default Contacts;