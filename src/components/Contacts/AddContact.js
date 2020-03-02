import React, { Component } from 'react'

import { Consumer } from '../context';
import TextInputGroup from '../helper/TextInputGroup';
import axios from 'axios'

class AddContact extends Component {

    state = {
        phone : '',
        email: '',
        name: '',
        errors: {}
    }

    onChangeInput = (e) => this.setState({[e.target.name] : e.target.value})
    submit =async (dispatch, size, e) => {
        e.preventDefault()
        const {phone,name,email} = this.state;

        if(phone == ""){
            this.setState({errors: {phone: "field required"}})
            return ;
        }

        if(name == ""){
            this.setState({errors: {name: "field required"}})
            return ;
        }
        if(email == ""){
            this.setState({errors: {email: "field required"}})
            return ;
        }

        const newContact = {
            phone,
            email,
            name
        }

        try{
            
            const res = await axios.post('https://jsonplaceholder.typicode.com/users/', newContact)
            dispatch({
                type : 'ADD_CONTACT', 
                payload: res.data
                })

        } catch(e){alert(e)}
       
        
        this.setState({
            phone : '',
            email: '',
            name : '',
            errors: {}
        })

        this.props.history.push('/');
    }

    render() {
        const {phone,email,name,errors} = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                        return (
                            <div>
                                <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Create new contact</h4>
                                            <div className="card-text">
                                               <TextInputGroup 
                                                    label="Phone"
                                                    name="phone"
                                                    type="text"
                                                    value={phone}
                                                    onChange={this.onChangeInput}
                                                    errors={errors.phone}
                                               />
                                               <TextInputGroup 
                                                    label="Name"
                                                    name="name"
                                                    type="text"
                                                    value={name}
                                                    onChange={this.onChangeInput}
                                                    errors={errors.name}
                                               />
                                                <TextInputGroup 
                                                    label="email"
                                                    name="email"
                                                    type="email"
                                                    value={email}
                                                    onChange={this.onChangeInput}
                                                    errors={errors.email}
                                               />
                                                <button className="btn btn-success btn-block my-2">Add new Contact</button>
                                            </div>
                                        </div>
                                    </div>
                               </form>
                            </div>
                        )
                }}
            </Consumer>
        )

    }
}

export default AddContact;