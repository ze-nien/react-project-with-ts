import type { AdminInfoList } from "./type";

type AdminInfo = {
  admin: AdminInfoList;
};

const AdminInfo: React.FC<AdminInfo> = ({ admin }) => {
  return (
    <div>
      <h1>{admin.id}</h1>
      <h1>{admin.name}</h1>
      <h1>{admin.email}</h1>
      <h1>{admin.role}</h1>
      <h1>{admin.lastlogin.toLocaleString()}</h1>
    </div>
  );
};

export default AdminInfo;
