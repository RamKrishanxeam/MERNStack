import { useContext, useEffect, useState } from "react";
import { BaseUrl } from "../store/BaseUrl";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../store/auth";

type User = {
  _id: string;
  username: string;
  email: string;
  phone: string;
};
const AdminUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState<User | null>(null);
  const AuthorizationToken = `Bearer ${token}`;
  const { allUserData }: any = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setToken(token);
    if (id) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", AuthorizationToken);

      const requestOptions: RequestInit = {
        method: "GET",
        headers: myHeaders,
      };

      fetch(`${BaseUrl}/admin/users/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result: User) => {
          setUserData(result);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      setFormData({
        username: userData.username || "",
        email: userData.email || "",
        phone: userData.phone || "",
      });
    }
  }, [userData]);

  const updateUserId = (e: any) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", AuthorizationToken);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formData);

    const requestOptions: RequestInit = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
    };

    fetch(`${BaseUrl}/admin/users/update/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          navigate("/admin/users");
          allUserData();
          setTimeout(() => {
            toast.success("user update successfully");
          }, 1000);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="update-form">
        <div className="update-form-container">
          <h3>Update User</h3>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, username: e.target.value }))
                }
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                maxLength={10}
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            </label>

            <button type="submit" onClick={updateUserId}>
              Edit Users
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AdminUpdate;
