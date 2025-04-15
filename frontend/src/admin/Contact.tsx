import { useEffect, useState } from "react";
import { BaseUrl } from "../store/BaseUrl";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

type Contact = {
  _id(_id: any): void;
  username: string;
  email: string;
  message: string;
};

const ContactAdmin = () => {
  const [contactData, setContactData] = useState<Contact[] | null>(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const AuthorizationToken = `Bearer ${token}`;

  const getContactAllData = () => {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${BaseUrl}/admin/contact`, requestOptions)
      .then((response) => response.json())
      .then((result) => setContactData(result.contact))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getContactAllData();
    setToken(token);
  }, []);

  const contactDeleteById = (id: any) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", AuthorizationToken);

    const requestOptions: RequestInit = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${BaseUrl}/admin/contact/delete/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        toast.success(result.message);
        getContactAllData();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-container">
      <h2>Conact Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>email</th>
            <th>message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contactData &&
            contactData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td>
                  <Link
                    to="/admin/contact"
                    onClick={() => contactDeleteById(item?._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default ContactAdmin;
