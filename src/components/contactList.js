import React from 'react';
import { Link as Redirect } from 'react-router-dom';
import ContactRow from './contactCard';

const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler = (id) => {
        props.removeContactHandler(id);
    };

    const iterateContactList = props.contacts.map((contact) => {
        return (<ContactRow contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>);
    });

    return(
        <div className="ui page grid">
            <div className="column">
                <Redirect to='/add'>
                    <button className="ui button blue">Add Contact</button>
                </Redirect>
                
                <table className="ui celled table">
                    <thead>
                            <tr>
                                <th className="center aligned">Profile</th>
                            <th className="center aligned">Name</th>
                            <th className="center aligned">Contact</th>
                            <th className="center aligned">Action</th>
                        </tr>
                    </thead>
                <tbody>
                    {iterateContactList}
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContactList