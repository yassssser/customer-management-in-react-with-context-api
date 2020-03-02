import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Contact.css';
import { Consumer } from '../context';

import axios from 'axios'

class Contact extends Component {

    state = {
        showContactToggle: true
    }

    showContact(name){
        console.log('hello' , name )
        this.setState({
            showContactToggle: !this.state.showContactToggle
        })
    }

    delete =async (id, dispatch) => {
        try{
            const res = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
            
            dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
        } catch(e){
            alert(e)
        }
       
    }

    render() {
        const {id,name,email,phone} = this.props.data;
        return (
            <Consumer>
                {value => {  
                    const { dispatch } = value;
                    return (
                    <div className="card">
                        <h4 className="card-title">{ name } 
                            <i style={{ cursor: 'pointer' }} onClick={this.showContact.bind(this, "Yasweb")} className="fa fa-sort-down ml-2"></i>
                           
                            <i style={{ color:'red', float: 'right', cursor: 'pointer' }} className="fa fa-times"
                                onClick={this.delete.bind(this, id, dispatch)}
                            ></i>

                            <Link to={`contact/edit/${id}`}>
                                <i className="fa fa-pencil mx-2" style={{ color:'orange', float: 'right', cursor: 'pointer'  }}></i>
                            </Link>
                        </h4>
                        {(this.state.showContactToggle) ?
                            (
                        <div className="card-body">
                            <div className="card-text">
                                <ul class="list-group">
                                    <li class="list-group-item">{ email }</li>
                                    <li class="list-group-item">{ phone }</li>
                                </ul>
                            </div>   
                        </div>
                        ): null}
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.defaultProps = {
    tel: "99999999",
    email: "myemail@gmail.com"
}

export default Contact;