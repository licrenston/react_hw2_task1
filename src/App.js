import {useEffect, useState} from "react";
import {getUser, getUsers} from "./services/user.service";
import UserComponents from "./components/UserComponents";

function App() {

  let [users, setUsers] = useState([]);
  let [chosenUser, setChosenUseer] = useState(null);

  useEffect(() => {
    getUsers().then(value => setUsers(value.data));
  }, [])

  const chooseUser = (id) => {
    getUser(id).then(value => setChosenUseer(value.data));
  }

  return (
      <div>
        <hr/>
          {chosenUser && (<div>{JSON.stringify(chosenUser)}</div>)}
        <hr/>
        {users.map(value => <UserComponents
            key={value.id}
            item={value}
            chooseUser={chooseUser}
        />)}
      </div>
  );
}

export default App;
