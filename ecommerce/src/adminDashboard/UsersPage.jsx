import TotalUsers from "./TotalUsers";

const UsersPage = ({
  users,
  handleDeleteUser,
}) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <TotalUsers
        users={users}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
};

export default UsersPage;