import { useContext } from "react";
import { AuthContext } from "../store/auth";

const Users = () => {
  const { users }: any = useContext(AuthContext);
  console.log(users, "users");

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
          {users.map((user: any, index: any) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Users;
