import React, {useState} from 'react';
import AdminNavBar from './AdminNavBar';
import UserList from './UserList';
import {Form, FormControl} from 'react-bootstrap'



const AdminPage = (props) => {

    const [filter, setFilter] = useState(''); 

    const filterUpdate = (e) => {
        //set appropriately once the form is figured out
        //setFilter(e);
        e.persist();
        console.log(e.target.value);
    }
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
            />
            <div>
                <AdminNavBar/>
            </div>
            <div>
                <div className="row" style={{padding: "40px", color:"white" }}>
                    <div className="col-sm-10 col-12">
                        <h1 align="center" > List of Users </h1>
                    </div>
                    <div className="col-sm-1 col-12" style={{paddingTop:  "10px"}}>
                        <Form inline className="float-right">
                            <FormControl 
                                type="text" 
                                placeholder="Search" 
                                className=" mr-sm-2" 
                                onChange={filterUpdate}    
                            />
                        </Form>
                    </div>
                </div>
                <UserList filter={filter}/>
            </div>
        </div>
    );
}

export default AdminPage;