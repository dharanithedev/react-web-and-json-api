import React from 'react';
import { Link as Redirect } from 'react-router-dom';
import user from '../images/profile.png'

const ContactRow = (props) => {
    const { id, name, contactNumber }  = props.contact; 
    return (
        <tr>
            <td className="center aligned" data-label="Name"><img src={user} className="ui avatar image center aligned" alt="profile"/></td>
            <td data-label="Name">
                <Redirect to={{pathname:'/details/${id}', state:{contact:props.contact}}}>
                {name}
                </Redirect>
            </td>
            <td data-label="Contact">{contactNumber}</td>
            <td className="center aligned" data-label="Contact">
                <i 
                    className="trash alternate outline icon red trash-custom" 
                    onClick={() => props.clickHandler(id)}
                ></i>
            </td>
        </tr>
    );
}

export default ContactRow;