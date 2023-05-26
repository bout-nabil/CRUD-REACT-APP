import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserList() {
    //data from store we use useSelector()
    const users = useSelector((data)=>data.users);
    return(
        <div>
            <h2>User List</h2>
            <div>
                <Link to="/add-user">
                    <button>Add user</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index)=> {
                                return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/update-user/${user.id}`}>
                                            <button>Edit</button>
                                        </Link>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                                )
                            }
                        ) 
                    } 
                </tbody>
            </table>
        </div>
    )
}

export default UserList;