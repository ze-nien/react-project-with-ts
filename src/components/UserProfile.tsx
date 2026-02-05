import React, { useState } from "react";

interface UserProfileState {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfileState>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile((prev) => ({ ...prev, name }));
  };

  const updateAge = (age: string) => {
    setProfile((prev) => ({ ...prev, age: +age }));
  };

  const updateEmail = (email: string) => {
    setProfile((prev) => ({ ...prev, email }));
  };

  return (
    <div>
      <h2>UserProfile</h2>
      <input
        type="text"
        placeholder="name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />

      <p>Name: {profile.name}</p>
      <p>age: {profile.age}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default UserProfile;
