import axios from 'axios';
import React,  { useState, useEffect} from 'react';
import { Card, CardVariantType } from './components/Card';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
// import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';

function App() {

  const [users, setUsers] = useState<IUser[]>([])
  const [todo, setTodo] = useState<ITodo[]>([])


  useEffect(() => {
    fetchUsers()
    fetchTodo()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      
    }
  }
  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodo(response.data)
    } catch (error) {
      
    }
  }
  // Hello
  return (
    <div className="App">
      <Card onClick={(num: number) => console.log('click', num) } variant={CardVariantType.primary} width='200px' height='200px'>
        <button>Button</button>
        <div>Hello</div>
      </Card>
      {/* <UserList users={users}/> */}
      <List 
      items={users} 
      renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
      <List 
      items={todo} 
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
    </div>
  );
}

export default App;
