import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const allusers = useSelector((state) => state.app.users)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
                  <h4 className="navbar-brand">RKT</h4>
                  
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Create Post</a>
        </li>
        <li className="nav-item">
                <a className="nav-link" href="#">All Post({allusers?.length})</a>
        </li>
                      </ul>
                      
        <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
