import React,{Component} from 'react';
import {AppContext} from '../Context';

class AddUser extends Component {
    static contextType = AppContext;

    insertUser = (event) => {
        this.context.insertUser(event,this.first_name.value,this.last_name.value,this.useremail.value);
    }

    render(){
        return (
            <form onSubmit={this.insertUser}>
            <div className="form-row">
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">First Name</label>
                    <input type="text" name="first_name" ref={(val) => this.first_name = val} className="form-control" placeholder="First Name"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Last Name</label>
                    <input type="text" name="last_name" ref={(val) => this.last_name = val} className="form-control" placeholder="Last Name"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Email</label>
                    <input type="email" name="useremail" ref={(val) => this.useremail = val} className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary">Add user</button>
                </div>
            </div>
        </form>  
        );
    }
}
export default AddUser;