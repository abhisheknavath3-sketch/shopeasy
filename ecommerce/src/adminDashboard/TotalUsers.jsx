// import { FaTrash, FaUserShield, FaUser } from "react-icons/fa";

// const TotalUsers = ({
//   users,
//   handleDeleteUser,
// }) => {
//   return (
//     <>
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-800">
//             Users Management
//           </h2>

//           <p className="text-gray-500 mt-1">
//             Manage all registered users
//           </p>
//         </div>

//         <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-semibold">
//           Total Users: {users.length}
//         </div>
//       </div>

//       <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-gray-50 border-b">
//               <th className="text-left px-6 py-4 font-semibold text-gray-700">
//                 User
//               </th>

//               <th className="text-left px-6 py-4 font-semibold text-gray-700">
//                 Email
//               </th>

//               <th className="text-left px-6 py-4 font-semibold text-gray-700">
//                 Role
//               </th>

//               <th className="text-center px-6 py-4 font-semibold text-gray-700">
//                 Action
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.map((user) => (
//               <tr
//                 key={user._id}
//                 className="border-b hover:bg-gray-50 transition"
//               >
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-11 h-11 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold">
//                       {user.username?.charAt(0).toUpperCase()}
//                     </div>

//                     <div>
//                       <h3 className="font-semibold text-gray-800">
//                         {user.username}
//                       </h3>

//                       <p className="text-sm text-gray-500">
//                         User Account
//                       </p>
//                     </div>
//                   </div>
//                 </td>

//                 <td className="px-6 py-4 text-gray-600">
//                   {user.email}
//                 </td>

//                 <td className="px-6 py-4">
//                   {user.role === "admin" ? (
//                     <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
//                       <FaUserShield />
//                       Admin
//                     </span>
//                   ) : (
//                     <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
//                       <FaUser />
//                       User
//                     </span>
//                   )}
//                 </td>

//                 <td className="px-6 py-4 text-center">
//                   <button
//                     onClick={() =>
//                       handleDeleteUser(user._id)
//                     }
//                     className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition flex items-center gap-2 mx-auto"
//                   >
//                     <FaTrash />
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {users.length === 0 && (
//           <div className="text-center py-12 text-gray-500">
//             No Users Found
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default TotalUsers;

import {
  FaTrash,
  FaUserShield,
  FaUser,
} from "react-icons/fa";

const TotalUsers = ({
  users,
  handleDeleteUser,
}) => {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Users Management
          </h2>

          <p className="text-gray-500 mt-2">
            Manage all registered users
          </p>
        </div>

        <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-2xl shadow-lg min-w-40">

          <p className="text-xs uppercase tracking-wider opacity-80">
            Total Users
          </p>

          <h3 className="text-3xl font-bold">
            {users.length}
          </h3>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-xl">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-linear-to-r from-slate-50 to-blue-50 border-b">

                <th className="text-left px-6 py-5 font-semibold text-gray-700">
                  User
                </th>

                <th className="text-left px-6 py-5 font-semibold text-gray-700">
                  Email
                </th>

                <th className="text-left px-6 py-5 font-semibold text-gray-700">
                  Role
                </th>

                <th className="text-center px-6 py-5 font-semibold text-gray-700">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user._id}
                  className="border-b border-gray-100 hover:bg-blue-50/40 transition duration-300"
                >

                  {/* User */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-2xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg flex items-center justify-center text-white font-bold text-lg">

                        {user.username
                          ?.charAt(0)
                          .toUpperCase()}
                      </div>

                      <div>

                        <h3 className="font-semibold text-gray-800">
                          {user.username}
                        </h3>

                        <p className="text-sm text-gray-500">
                          ID :
                          {" "}
                          {user._id.slice(-6)}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Email */}

                  <td className="px-6 py-5 text-gray-600">
                    {user.email}
                  </td>
                                    {/* Role */}

                  <td className="px-6 py-5">

                    {user.role === "admin" ? (

                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold text-sm">

                        <FaUserShield />

                        Admin

                      </span>

                    ) : (

                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-100 to-emerald-100 text-green-700 font-semibold text-sm">

                        <FaUser />
                        User
                     </span>

                    )}

                  </td>

                  {/* Action */}

                  <td className="px-6 py-5 text-center">

                    <button
                      onClick={() =>
                        handleDeleteUser(user._id)
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-red-500 to-rose-600 text-white shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
                    >
                      <FaTrash />

                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {users.length === 0 && (

          <div className="py-16 flex flex-col items-center justify-center">

            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-4xl mb-4">
              👥
            </div>

            <h3 className="text-2xl font-bold text-gray-700">
              No Users Found
            </h3>

            <p className="text-gray-500 mt-2">
              Registered users will appear here.
            </p>

          </div>

        )}

      </div>

    </>
  );
};

export default TotalUsers;