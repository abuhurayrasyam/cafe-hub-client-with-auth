import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {

    const initialUsersData = useLoaderData();
    const [usersData, setUsersData] = useState(initialUsersData);

    const [search, setSearch] = useState([]);

    useEffect(() => {
        fetch(`https://cafe-hub-server-with-auth.vercel.app/users?searchQuery=${search}`)
        .then(res => res.json())
        .then(data => {
        setUsersData(data);
        });
    }, [search])

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
                fetch(`https://cafe-hub-server-with-auth.vercel.app/users/${_id}`, {
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
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input onChange={(e) => setSearch(e.target.value)} type="search" name='search' required placeholder="Search" />
            </label>
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