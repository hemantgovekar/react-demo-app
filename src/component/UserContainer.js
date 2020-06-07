import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../reducers/users/userAction";

const UserContainer = () => {
  const users = useSelector((state) => state.userData.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Test</h1>
      {users.map((user, i) => (
        <p key={i}>{user.name}</p>
      ))}
      <button onClick={() => dispatch({ type: "FETCH_USERS_SUCCESS" })}>Get Users</button>
    </div>
  );
};

export default UserContainer;
