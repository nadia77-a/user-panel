import React, { useEffect } from 'react';
import AuthActions from 'redux-store/models/auth';
import { connect } from 'react-redux';
import '../style.css';
import {Table} from 'antd';
import { Trans } from '@lingui/macro';


const UserList = ({ getUserList, userList }) => {
  useEffect(() => {getUserList()}, [getUserList]);
  // getUserList();
// console.log("userList",userList);

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};


console.log("userList",groupBy(userList,"parent"));

  return (
    

     <Table columns={columns} dataSource={userList} /> 
    
  );
};

const columns = [
  {
    title: <Trans>Parent</Trans>,
    dataIndex: 'parent',
    key: 'parent',
  },
  {
    title: <Trans>Id</Trans>,
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: <Trans>Username</Trans>,
    dataIndex: 'userid',
    key: 'userid',
  },
  {
    title: <Trans>Tipo</Trans>,
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: <Trans>Email</Trans>,
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: <Trans>Nome</Trans>,
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: <Trans>Cognome</Trans>,
    dataIndex: 'lastname',
    key: 'lastname',
  },
  {
    title: <Trans>Cita</Trans>,
    dataIndex: 'city',
    key: 'city',
  }
];

const mpStP = state => ({
  userList: state.auth.userList,
});

export default connect(mpStP, AuthActions)(UserList);
