import { useEffect, useState } from "react";
import { BaseUrl } from "../store/BaseUrl";

type Contact = {
  username: string;
  email: string;
  message: string;
};

const ContactAdmin = () => {
  const [contactData, setContactData] = useState<Contact[] | null>(null);

  useEffect(() => {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${BaseUrl}/admin/contact`, requestOptions)
      .then((response) => response.json())
      .then((result) => setContactData(result.contact))
      .catch((error) => console.error(error));
  }, []);

  console.log(contactData, "conactData");

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
          {contactData
            ? contactData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                  <td>Delete</td>
                </tr>
              ))
            : "N/A"}
        </tbody>
      </table>
    </div>
  );
};
export default ContactAdmin;
