import React, { useEffect } from 'react';
import AuthActions from 'redux-store/models/auth';
import { connect } from 'react-redux';
import '../style.css';
import { Form, DatePicker, Table, Button } from 'antd';

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
      message: 'Per favore scegli!',
    },
  ],
};

const ReportSport = ({ getReportSport, reportSport }) => {
  useEffect(() => {}, [getReportSport, reportSport]);
  const onFinish = fieldsValue => {
    // Should format date value before submit.
    const values = {
      ...fieldsValue,
      datePickerFrom: fieldsValue['date-picker-from'].format('YYYY/MM/DD'),
      datePickerTo: fieldsValue['date-picker-to'].format('YYYY/MM/DD'),
    };
    getReportSport(values.datePickerFrom, values.datePickerTo);
    console.log('Received values of form: ', values);
  };
console.log("reportSport",reportSport);
  return (
    <>
      <Form
        name="filters"
        {...formItemLayout}
        onFinish={onFinish}
        className="reportSFilters"
      >
        <Form.Item name="date-picker-from" label="Dal" {...config}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="date-picker-to" label="Al" {...config}>
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
            Filter
          </Button>
        </Form.Item>
      </Form>

      <Table columns={columns} dataSource={data} />
    </>
  );
};

const columns = [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Account',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
    key: 'tipo',
  },
  {
    title: 'Coupon Chiusi',
    key: 'couponChiusi',
    dataIndex: 'couponChiusi',
  },
  {
    title: 'Coupon',
    dataIndex: 'coupon',
    key: 'coupon',
  },
  {
    title: 'In Gioco',
    dataIndex: 'inGioco',
    key: 'inGioco',
  },
  {
    title: 'Giocate Chiuse',
    dataIndex: 'giocateChiuse',
    key: 'giocateChiuse',
  },
  {
    title: 'Vinto',
    dataIndex: 'vinto',
    key: 'vinto',
  },
  {
    title: 'Utile',
    dataIndex: 'utile',
    key: 'utile',
  },
  {
    title: '%',
    dataIndex: 'percentuale',
    key: 'percentuale',
  },

  {
    title: 'Contabile',
    dataIndex: 'contabile',
    key: 'contabile',
  },
  {
    title: 'Provv Chiuse',
    dataIndex: 'provvChiuse',
    key: 'provvChiuse',
  },
  {
    title: 'Murato sett',
    dataIndex: 'muratoSett',
    key: 'muratoSett',
  },
  {
    title: 'Bonus Murato',
    dataIndex: 'bonusMurato',
    key: 'bonusMurato',
  },
  {
    title: 'Utile Neto',
    dataIndex: 'utileNeto',
    key: 'utileNeto',
  },
];
const data = [
  {
    key: '1',
    oggeto: 'John Brown',
    tipo: 32,
    dati: 'New York No. 1 Lake Park',
    avuti: ['nice', 'developer'],
    disponibilita: 'test',
    data: 'data test',
  },
  {
    key: '2',
    oggeto: 'Jim Green',
    tipo: 42,
    dati: 'London No. 1 Lake Park',
    avuti: ['loser'],
    disponibilita: 'test',
    data: 'data test',
  },
  {
    key: '3',
    oggeto: 'Joe Black',
    tipo: 32,
    dati: 'Sidney No. 1 Lake Park',
    avuti: ['cool', 'teacher'],
    disponibilita: 'test',
    data: 'data test',
  },
  {
    key: '4',
    oggeto: 'John Brown',
    tipo: 32,
    dati: 'New York No. 1 Lake Park',
    avuti: ['nice', 'developer'],
    disponibilita: 'test',
    data: 'data test',
  },
  {
    key: '5',
    oggeto: 'Jim Green',
    tipo: 42,
    dati: 'London No. 1 Lake Park',
    avuti: ['loser'],
    disponibilita: 'test',
    data: 'data test',
  },
  {
    key: '6',
    oggeto: 'Joe Black',
    tipo: 32,
    dati: 'Sidney No. 1 Lake Park',
    avuti: ['cool', 'teacher'],
    disponibilita: 'test',
    data: 'data test',
  },
  {
    key: '7',
    oggeto: 'John Brown',
    tipo: 32,
    dati: 'New York No. 1 Lake Park',
    avuti: ['nice', 'developer'],
    disponibilita: 'test',
    data: 'data test',
  },
  {
    key: '8',
    oggeto: 'Jim Green',
    tipo: 42,
    dati: 'London No. 1 Lake Park',
    avuti: ['loser'],
    disponibilita: 'test',
    data: 'data test',
  },
  {
    key: '9',
    oggeto: 'Joe Black',
    tipo: 32,
    dati: 'Sidney No. 1 Lake Park',
    avuti: ['cool', 'teacher'],
    disponibilita: 'test',
    data: 'data test',
  },
  {
    key: '10',
    oggeto: 'John Brown',
    tipo: 32,
    dati: 'New York No. 1 Lake Park',
    avuti: ['nice', 'developer'],
    disponibilita: 'test',
    data: 'data test',
  },
  {
    key: '11',
    oggeto: 'Jim Green',
    tipo: 42,
    dati: 'London No. 1 Lake Park',
    avuti: ['loser'],
    disponibilita: 'test',
    data: 'data test',
  },
  {
    key: '12',
    oggeto: 'Joe Black',
    tipo: 32,
    dati: 'Sidney No. 1 Lake Park',
    avuti: ['cool', 'teacher'],
    disponibilita: 'test',
    data: 'data test',
  },
];

const mpStP = state => ({
  reportSport: state.auth.reportSport,
});
export default connect(mpStP, AuthActions)(ReportSport);
