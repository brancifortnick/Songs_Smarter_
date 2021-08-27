import { useLocation } from "react-router-dom";

const UserRow = ({ user }) => {
  const queryString = new URLSearchParams(useLocation().search).get("q") ?? "";

  if (
    !(
      user.name.includes(queryString) ||
      user.email.includes(queryString) ||
      String(user.id).includes(queryString)
    )
  ) {
    return null;
  }

  return (
    <div className="user_row">
      <h1>Active Users</h1>
      <div id="name" type="text" className="user_information">
        {user.id}
      </div>
    </div>
  );
};

export default UserRow;
