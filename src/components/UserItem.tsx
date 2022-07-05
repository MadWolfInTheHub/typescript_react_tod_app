import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemsProps {
  user: IUser;
}

const UserItem: FC<UserItemsProps> = ({user}) => {
  return (
    <div style={{padding: 15, border: '1px solid gray'}}>
      {user.id}. {user.name} lives in {user.address.city} on {user.address.street} street.
    </div>
  );
};

export default UserItem;