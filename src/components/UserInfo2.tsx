export type Info = {
  username: string;
  email: string;
  age: number;
  location: string[];
};
const UserInfo2 = ({ username, email, age, location }: Info) => {
  return (
    <div>
      <h2>UserInfo2</h2>
      <h3>{username}</h3>
      <h3>{email}</h3>
      <h3>{age}</h3>
      <h3>{JSON.stringify(location)}</h3>
    </div>
  );
};

export default UserInfo2;
