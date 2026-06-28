// import AdminUsersTable from '@/components/dashbaord/AdminUsersTable';

import AdminUsersTable from "@/components/dashboard/AdminUsersTable";
import { getUsersList } from "@/lib/courses/action";



export default async function AdminUsersPage() {
    const data = await getUsersList();
    const users = data || [];
    // const users = data?.users || [];
    // const users = session?.users || [];

    return (
        <div className="min-h-screen bg-[#121212] p-8 text-slate-200">
            <div className="max-w-7xl mx-auto space-y-4">
                <h2 className="text-xl font-semibold tracking-tight text-slate-100">
                    User Management ({users.length})
                    user management
                </h2>

                <AdminUsersTable users={users} />
            </div>
        </div>
    );
}



// export default async function AdminUsersPage() {
//     const users = await getUsersList();

//     return (
//         <div className="p-8">
//             <h1 className="text-2xl font-bold mb-5">
//                 Total Users: {users.length}
//             </h1>

//             <table className="w-full border">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Role</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.role || "user"}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }