import React from 'react';
import Table from 'react-bootstrap/Table';

const UserList = (props) => {

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
        <div style={{padding: "10px"}}>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th> First Name</th>
                        <th> Last Name</th>
                        <th> Date of Birth </th>
                        <th> Location of Birth</th>
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
                        <td>peepeepoopoo369</td>
                        <td>uhohstinky</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </Table>
            
        </div>
    );
}

export default UserList;