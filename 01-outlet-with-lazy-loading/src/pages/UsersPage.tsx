import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/slices/users.slice";
import { RootState } from "../store";

function UsersPage() {
  // DISPATCH
  const dispatch = useDispatch();

  // SELECTORS
  const { users, usersLoading } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {!usersLoading ? (
        <ul className="my-5 list-disc">
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <h1>Loading Users...</h1>
      )}
    </div>
  );
}

export default UsersPage;
