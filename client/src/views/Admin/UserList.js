import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import {Form, FormControl} from 'react-bootstrap'

const UserList = (props) => {

    const [filter, setFilter] = useState(''); 

    
    const filterUpdate = (e) => {
        //set appropriately once the form is figured out
        //setFilter(e);
        e.persist();
        console.log(e.target.value);
        setFilter(e.target.value);
    }
    // const userlist = props.data.map( list => {
    //     return (
    //         <tr>
    //             <td></td>
    //             <td></td>
    //             <td></td>
    //             <td></td>
    //             <td></td>
    //             <td></td>
    //             <td></td>
    //             <td></td>
    //             <td></td>
    //         </tr>
    //     );
    //     }
    // );
    return(
        <div className="adminBackground">
                <div className="container row" >
                    <div className="">
                        <h1 align="center" > List of Users </h1>
                    </div>
                    <div className="" style={{paddingTop:  "10px"}}>
                        
                        <form inline className="float-right">
                            <input type="text" className="form-control" placeholder="Name" required
                            onChange={filterUpdate}
                            />
                        </form>
                    </div>
                    <div style={{padding: "10px"}}>
                        <table striped bordered hover size="sm" style={{background: "black", color: "white"}}>
                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Date of Birth </th>
                                    <th> Location</th>
                                    <th> E-mail Address</th>
                                    <th> Phone Number</th>
                                    <th> Username</th>
                                    <th> Password</th>
                                    <th> Notification Settings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*userlist-->*/}
                                <tr>
                                    <td>Sample</td>
                                    <td>Data</td>
                                    <td>1/1/1998</td>
                                    <td>Reno, CA</td>
                                    <td>hello@yahoo.com</td>
                                    <td>867-5309</td>
                                    <td>kitty123</td>
                                    <td>password123</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Other</td>
                                    <td>Person</td>
                                    <td>2/3/2010</td>
                                    <td>Reno, CA</td>
                                    <td>klondike@gmail.com</td>
                                    <td>867-5309</td>
                                    <td>puppy321</td>
                                    <td>drowssap321</td>
                                    <td>No</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
        
    );
}

export default UserList;