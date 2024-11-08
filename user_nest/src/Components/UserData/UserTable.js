import React, { useState } from 'react';

export default function UserTable() {
   
    // Delete user function
    return (
        <>
            <table className="table table-bordered caption-top">
                <caption>Users List</caption>
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Nitin</td>
                            <td>34</td>
                            <td>Nitin@123</td>
                            <td>9996548599</td>
                            <td>
                                <button 
                                    className="btn btn-danger btn-sm" 
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                </tbody>
            </table>
        </>
    );
}
