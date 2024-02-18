import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
const Create = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
  };
  return (
    <div>
      <form class="w-50 mx-auto my-5" onSubmit={handelSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            onChange={getUserData}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="text"
            class="form-control"
            name="email"
            onChange={getUserData}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="number"
            class="form-control"
            name="age"
            onChange={getUserData}
          />
        </div>
        <div class="mb-3 form-check">
          <label class="form-label"> Gender</label>
          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              onChange={getUserData}
            />
            <label class="form-check-label">Male</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              onChange={getUserData}
            />
            <label class="form-check-label">Female</label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
