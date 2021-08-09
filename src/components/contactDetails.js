import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/profile.png'


const ContactDetails = (props) => {
    const { name, contactNumber } = props.location.state.contact;
    return (
        <div className="ui card stackable center aligned">
            <div className="image">
                <img src={user} alt='Proile' />
            </div>
            <div className="content">
                <a className="header">{name}</a>
                <div className="meta">
                <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                    {contactNumber}
                </div>
            </div>
            <div className="extra content">
                <a>
                <i className="user icon"></i>
                22 Friends
                </a>
            </div>
            <Link to='/'>
                <button className='ui button blue center aligned'>Bact to List</button>
            </Link>
        </div>
    );
}

export default ContactDetails;