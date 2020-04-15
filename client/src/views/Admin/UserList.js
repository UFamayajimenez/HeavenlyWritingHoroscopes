import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import {Form, FormControl} from 'react-bootstrap';
import axios from 'axios';
import './AdminPage.css'


const UserList = (props) => {

    const [filter, setFilter] = useState(''); 
    const [database, setDatabase] = useState([]);
    
    const filterUpdate = (e) => {
        //set appropriately once the form is figured out
        //setFilter(e);
        e.persist();
        console.log(e.target.value);
        setFilter(e.target.value);
    }
    
    const userlist = (e) => {
        
        axios.get('/api/users/userlist')
            .then(res => {
                console.log(res.data);
                setDatabase(res.data);
                return res.data;
            });
        
        const fullList = database.map(user => {
                if(user.name.first == null) {
                    return(
                        <tr></tr>
                    );
                }
                if(user.name.first.toLowerCase().includes(filter) || user.name.last.toLowerCase().includes(filter) ){
                    return(
                        <tr>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.DOB.month}/{user.DOB.day}/{user.DOB.year}</td>
                            <td>{user.location.city}, {user.location.state}</td>
                            <td>{user.email}</td>
                            <td>{user.number}</td>
                            <td>Yes</td>
                            <td>{user.admin ? "Yes" : "No"}</td>
                        </tr>
                    );
                }
            });

        return fullList;
    };

    return(
        <div className="adminBackground">
                <div className="datatable-container table-responsive" >
                    <div className="">
                        <h1 align="center" > List of Users </h1>
                    </div>
                    <div className="" style={{paddingTop:  "10px"}}>
                        <Form inline className="float-right" variant= "dark">
                            <FormControl 
                                type="text" 
                                placeholder="Search" 
                                className=" mr-sm-2" 
                                onChange={filterUpdate} 
                                   
                            />
                        </Form>
                    </div>
                    <div style={{padding: "10px"}}>
                        <Table striped bordered size="sm" variant="dark">
                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Date of Birth </th>
                                    <th> Location</th>
                                    <th> E-mail Address</th>
                                    <th> Phone Number</th>
                                    <th> Notification Settings</th>
                                    <th> Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userlist()}
                            </tbody>
                        </Table>
                        
                    </div>
                </div>
            </div>
        
    );
}

export default UserList;