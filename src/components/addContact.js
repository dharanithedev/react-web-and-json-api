import React from 'react';

class AddContact extends React.Component {
    state = {
        'name' : '',
        'contactNumber': ''
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.contactNumber === ''){
            alert('Invalid form');
            return;
        }
        // console.log(this.props);
        this.props.addContactHandler(this.state)
        this.setState({'name' : '', 'contactNumber': ''});
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="ui column stackable left aligned page grid">
                <div className="column">
                    <h3>Add Contact</h3>
                    <form className="ui form" onSubmit={this.add}>
                        <div className="field">
                            <label>Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name"
                                value={this.state.name}
                                onChange={(e) => this.setState({name : e.target.value})} 
                            />
                        </div>
                        <div className="field">
                            <label>Contact Number</label>
                            <input 
                                type="text" 
                                name="conactNumber" 
                                placeholder="Contact Number"
                                value={this.state.contactNumber}
                                onChange={(e) => this.setState({contactNumber : e.target.value})} 
                            />
                        </div>
                        <div className="field">
                            <button className="ui button red">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;