import type { Info } from "./UserInfo2";

type AInfo = Info & {
  admin: boolean;
};

const AdminInfo2 = ({ username, email, age, location, admin }: AInfo) => {
  return (
    <div>
      <h2>AdminInfo2</h2>
      <h3>{username}</h3>
      <h3>{email}</h3>
      <h3>{age}</h3>
      <h3>{JSON.stringify(location)}</h3>
      <h3>admin: {admin ? "yes" : "no"}</h3>
    </div>
  );
};

export default AdminInfo2;
