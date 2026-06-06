import React from "react";


function ReactList() {
    const fruits = ['Apple', 'Orange', 'Banana', 'Cherry', 'Grapes', 'Melon', 'Avacado'];
    const users = [
        { id: 1, name: 'geeks', age: 30 },
        { id: 2, name: 'Joseph', age: 26 },
        { id: 3, name: 'Sanjay', age: 22 },
        { id: 4, name: 'Greeks', age: 45 },
        { id: 5, name: 'John', age: 45 },
        { id: 6, name: 'Vijay', age: 45 },
    ];

    return (
        <div>
            <h1>Fruits</h1>
            <ul>
                {fruits.map((f, index) => (
                    <li key={index}>{f}</li>
                ))}
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>SID</th>
                        <th>Name</th>
                        <th>Age</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user) =>
                    (<tr key={user.id} >
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>

                    </tr>)
                    )}
                </tbody>



            </table>
            <ul>
                {users.map((user) =>
                user.age>30?(
                    <li key={user.id}>{user.name} is over 30 years old.</li>)
                    :(<li keys={user.id}>{user.name} is under 30 years old.</li>)
                 )}       
            </ul>
                
        </div>
    )
};

export default ReactList;
