import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/contact">Contact</Link>
      </aside>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
