import React, {Component} from 'react';
import '../App.css';

class UserTable extends Component {

   /*  constructor(props) {
        super(props);
        this.state = {userData: []};
    } */

    render(){
        return(
            <>
<table>
        <thead>
            <tr>
                <th>UserName</th>
                <th>UserId</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
            {this.props.users.map(user => 
                            <tr key={user.id}>
                            <td> {user.name} </td>
                            <td> {user.username} </td>
                            <td>
<button onClick={() => this.props.editRow(user)} className="button muted-button">Edit</button>
<button onClick={() => this.props.deleteUser(user.id)} className="button muted-button">Delete</button>
                            </td>
                        </tr>
            
                )}
        </tbody>
    </table>
</>
    )
}


/*     <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td> Your Name 1 </td>
                <td> Your Name 2 </td>
                <td>
                    <button className="button muted-button">Edit</button>
                    <button className="button muted-button">Delete</button>
                </td>
            </tr>
        </tbody>
    </table> */

}

export default UserTable;