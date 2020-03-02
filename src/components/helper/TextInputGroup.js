import React from 'react'
import classnames from 'classnames'

export default function TextInputGroup(props) {
    return (
        <div className="form-group">
          <label htmlFor={props.name}>{props.label}</label>
          <input type={props.type} 
          className={classnames('form-control',{
              'is-invalid': props.errors
          })}
           defaultValue={props.value} 
           name={props.name}
           onChange={props.onChange}/>
           <div className="invalid-feedback">{props.errors}</div>
        </div>
    )
}
