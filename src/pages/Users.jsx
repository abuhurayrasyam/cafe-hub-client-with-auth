import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {

    const initialUsersData = useLoaderData();
    const [usersData, setUsersData] = useState(initialUsersData);

    const handleDeleteUser = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                // delete from db
                fetch(`http://localhost:3000/users/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        Swal.fire({ // Its Part of Sweet Alert
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });

                        // remove the user form the state
                        const remainingUsers = usersData.filter(user => user._id !== _id);
                        setUsersData(remainingUsers);
                    }
                })
            }
         });
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Serial No.</th>
                        <th>Name and Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((user, index) => 
                            <tr key={user._id}>
                                <th>
                                    {
                                        index + 1
                                    }
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle object-cover h-12 w-12">
                                            <img src={user.photo} alt="" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">{user.name}</div>
                                        <div className="text-sm opacity-50">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.address}</td>
                                <td>{user.phoneNumber}</td>
                                <th className='space-x-3'>
                                    <button className="btn btn-xs">V</button>
                                    <button className="btn btn-xs">E</button>
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn btn-xs">X</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;