import React, { useEffect } from 'react';
import AuthActions from 'redux-store/models/auth';
import { connect } from 'react-redux';
import '../style.css';
import { Form, DatePicker, Table, Button } from 'antd';
import { Trans } from '@lingui/macro';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: <Trans>Per favore scegli!</Trans>
    },
  ],
};

const UserList = ({ getUserList, userList }) => {
  useEffect(() => {getUserList()}, []);
  // getUserList();
console.log("userList",userList);
  return (
    <>
      <Form
        name="filters"
        {...formItemLayout}
        // onFinish={onFinish}
        className="reportSFilters"
      >
        <Form.Item name="date-picker-from" label={<Trans>Dal</Trans>} {...config}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="date-picker-to" label={<Trans>Al</Trans>} {...config}>
          <DatePicker />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Button type="primary" htmlType="submit">
            <Trans>Filtro</Trans>
          </Button>
        </Form.Item>
      </Form>

      <Table columns={columns} dataSource={userList} />
    </>
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
