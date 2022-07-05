import axios from 'axios';
import React,  { useState, useEffect} from 'react';
import { Card, CardVariantType } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {

  const [users, setUsers] = useState<IUser[]>([])


  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      
    }
  }
  
  return (
    <div className="App">
      <Card onClick={(num: number) => console.log('click', num) } variant={CardVariantType.primary} width='200px' height='200px'>
        <button>Button</button>
        <div>Hello</div>
      </Card>
      <UserList users={users}/>
    </div>
  );
}

export default App;
