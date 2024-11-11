import React, { useState } from "react";

export default function UserTable({ users = [], deleteUser }) {
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
        {Array.isArray(users) && users.length > 0 ? (
                    users.map((user, index) =>(
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td>
                                <button 
                                    className="btn btn-danger btn-sm" 
                                    onClick={() => deleteUser(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6">No users available</td>
                    </tr>
                )}
        </tbody>
      </table>
    </>
  );
}
