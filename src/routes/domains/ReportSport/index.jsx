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

const ReportSport = ({ getReportSport, reportSport }) => {
  useEffect(() => {}, [getReportSport, reportSport]);
  const onFinish = fieldsValue => {
    const values = {
      ...fieldsValue,
      datePickerFrom: fieldsValue['date-picker-from'].format('YYYY/MM/DD'),
      datePickerTo: fieldsValue['date-picker-to'].format('YYYY/MM/DD'),
    };
    getReportSport(values.datePickerFrom, values.datePickerTo);
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

      <Table columns={columns} dataSource={data} />
    </>
  );
};

const columns = [
  {
    title: <Trans>User</Trans>,
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: <Trans>Account</Trans>,
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: <Trans>Tipo</Trans>,
    dataIndex: 'tipo',
    key: 'tipo',
  },
  {
    title: <Trans>Coupon Chiusi</Trans>,
    key: 'couponChiusi',
    dataIndex: 'couponChiusi',
  },
  {
    title: <Trans>Coupon</Trans>,
    dataIndex: 'coupon',
    key: 'coupon',
  },
  {
    title: <Trans>In Gioco</Trans>,
    dataIndex: 'inGioco',
    key: 'inGioco',
  },
  {
    title: <Trans>Giocate Chiuse</Trans>,
    dataIndex: 'giocateChiuse',
    key: 'giocateChiuse',
  },
  {
    title: <Trans>Vinto</Trans>,
    dataIndex: 'vinto',
    key: 'vinto',
  },
  {
    title: <Trans>Utile</Trans>,
    dataIndex: 'utile',
    key: 'utile',
  },
  {
    title: '%',
    dataIndex: 'percentuale',
    key: 'percentuale',
  },

  {
    title: <Trans>Contabile</Trans>,
    dataIndex: 'contabile',
    key: 'contabile',
  },
  {
    title: <Trans>Provv Chiuse</Trans>,
    dataIndex: 'provvChiuse',
    key: 'provvChiuse',
  },
  {
    title: <Trans>Murato sett</Trans>,
    dataIndex: 'muratoSett',
    key: 'muratoSett',
  },
  {
    title: <Trans>Bonus Murato</Trans>,
    dataIndex: 'bonusMurato',
    key: 'bonusMurato',
  },
  {
    title: <Trans>Utile Neto</Trans>,
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
