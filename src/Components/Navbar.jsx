import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
                  <h4 class="navbar-brand">RKT</h4>
                  
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Create Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">All Post</a>
        </li>
                      </ul>
                      
        <input class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
