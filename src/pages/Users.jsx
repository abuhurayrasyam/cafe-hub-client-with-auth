import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const initialUsersData = useLoaderData();
    const [usersData, setUsersData] = useState(initialUsersData);

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
                                    <button className="btn btn-xs">X</button>
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