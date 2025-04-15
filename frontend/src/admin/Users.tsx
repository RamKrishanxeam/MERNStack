import { useContext } from "react";
import { AuthContext } from "../store/auth";
import { Link } from "react-router-dom";

const Users = () => {
  const { users, deleteUserById }: any = useContext(AuthContext);

  return (
    <div className="users-container">
      <h2>Users Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: any, index: any) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
              </td>
              <td onClick={() => deleteUserById(user._id)}> Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Users;
