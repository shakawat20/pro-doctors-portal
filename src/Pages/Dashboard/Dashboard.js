import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth'
const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-left">
        {/* <!-- Page content here --> */}
        <h1 className='text-3xl font-bold text-purple-500'>dashboard</h1>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to="/dashboard">My Appointment</Link></li>
          <li><Link to="/dashboard/review">My Reviews</Link></li>
          <li><Link to="/dashboard/history">My History</Link></li>
          {admin && <>
          <li><Link to="/dashboard/users">All Users</Link></li>
          <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
          <li><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>
          </> }
        
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;