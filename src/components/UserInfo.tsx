import type { Info } from "./type";

type UserIF = {
  user: Info;
};

// export type UserInfo = {
//   username: string;
//   email: string;
//   age: number;
//   location: string[];
// };

const UserInfo: React.FC<UserIF> = ({ user }) => {
  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default UserInfo;
