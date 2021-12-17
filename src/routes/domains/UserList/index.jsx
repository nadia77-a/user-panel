import React, { useEffect } from 'react';
import AuthActions from 'redux-store/models/auth';
import { connect } from 'react-redux';
import '../style.css';
import {Table} from 'antd';
import { Trans } from '@lingui/macro';


const UserList = ({ getUserList, userList }) => {
  useEffect(() => {getUserList()}, [getUserList]);
  // getUserList();
console.log("userList",userList);
  return (
    

     <Table columns={columns} dataSource={userList} /> 
    
  );
};

const columns = [
  {
    title: <Trans>User</Trans>,
    dataIndex: 'user_name',
    key: 'user',
  },
  {
    title: <Trans>Account</Trans>,
    dataIndex: 'account',
    key: 'account',
  }
];

const mpStP = state => ({
  userList: state.auth.userList,
});

export default connect(mpStP, AuthActions)(UserList);
