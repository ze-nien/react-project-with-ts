import MyComponent from "./components/MyComponent";

const App = () => {
  return (
    <div>
      <MyComponent />
      {/* import Counter4_exportVer from "./components/Counter4_exportVer";
      <Counter4_exportVer /> */}

      {/* import Counter3 from "./components/Counter3";
      <Counter3 /> */}

      {/* import Counter2 from "./components/Counter2";
       <Counter2/> */}

      {/* import FormInput from "./components/FormInput";
          import ContactForm from "./components/ContactForm";
          import EventHandling from "./components/EventHandling";
      <FormInput />
      <ContactForm />
      <EventHandling /> */}

      {/* import From from "./components/From";
      <From /> */}

      {/* import Counter from "./components/Counter";
          import TodoList from "./components/TodoList";
          import UserProfile from "./components/UserProfile";
      <UserProfile /> 
      <TodoList /> 
      <Counter/> */}

      {/* import type{ Info, AdminInfoList } from "./components/type";
          import UserInfo from "./components/UserInfo";
          import AdminInfo from "./components/AdminInfo";
        const user: Info = {
          id: 1,
          name: "john",
          email: "john@gmail.com",
        };
        const admin: AdminInfoList = {
          id: 2,
          name: "jane",
          email: "jame@gmail.com",
          role: "admin",
          lastlogin: new Date(),
        };
      <UserInfo user={user} />
      <AdminInfo admin={admin} /> */}

      {/* import UserInfo2 from "./components/UserInfo2";
          import AdminInfo2 from "./components/AdminInfo2";
      <UserInfo2
        username="alex"
        email="alex@gmail.com"
        age={20}
        location={["Earth", "USA"]}
      />
      <AdminInfo2
        username="alex"
        email="alex@gmail.com"
        age={20}
        location={["Mars", "unkown"]}
        admin={true}
      /> */}
    </div>
  );
};

export default App;
