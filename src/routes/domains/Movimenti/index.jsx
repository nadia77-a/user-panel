
import React, { useEffect } from "react";
import AuthActions from "redux-store/models/auth";
import { connect } from "react-redux";
import "../style.css";
import "./movimenti.css";
import { Form, DatePicker,Select, Table, Button} from 'antd';
import { Trans, t } from '@lingui/macro';

const { Option } = Select;
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


const Movimenti = ({ getMovimenti, movimenti }) => {
  useEffect(() => {
 
  }, [getMovimenti, movimenti]);
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const values = {
      ...fieldsValue,
      'datePickerFrom': fieldsValue['date-picker-from'].format('YYYY/MM/DD'),
      'datePickerTo': fieldsValue['date-picker-to'].format('YYYY/MM/DD'),
      
    };
    getMovimenti(values.datePickerFrom,values.datePickerTo,parseInt(values.select));
  };
  console.log("movimenti",movimenti);
  return (
      <>
    <Form name="filters" {...formItemLayout} onFinish={onFinish} className="movimentiFilters">
      <Form.Item name="date-picker-from" label="Dal" {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="date-picker-to" label="Al" {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="select"
        label="Filtro"
        hasFeedback
        rules={[{ required: true, message: 'Per favore scegli!' }]}
      >
        <Select placeholder="Seleziona">
          <Option value="1">Contabili</Option>
          <Option value="3">Fido</Option>
          <Option value="4">Provvigioni</Option>
          <Option value="9">Tutti</Option>
        </Select>
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

<Table columns={columns} dataSource={movimenti} rowKey="id"/>
</>
  );
};


const columns = [
    {
      title: <Trans>Oggeto</Trans>,
      dataIndex: 'object',
      key: 'object',
    },
    {
      title: <Trans>Tipo</Trans>,
      dataIndex: 'causal_name',
      key: 'causal_name',
    },
    {
      title: <Trans>Dati</Trans>,
      dataIndex: 'action',
      key: 'action',
    },
    {
      title: <Trans>Avuti</Trans>,
      key: 'amount',
      dataIndex: 'amount',
      render: (text,row) => <>{row["amount"]} {row["currency"]}</>,
    },
    {
        title: <Trans>DISPONILITA` PREC</Trans>,
        dataIndex:  ['balance'],
        key: ['balance'],
        render: (text,row) => <>{row["balance"]} {row["currency"]}</>,
      },
      {
        title: <Trans>Data</Trans>,
        dataIndex: 'date',
        key: 'date',
      },
   
   
  ];


const mpStP = (state) => ({
  movimenti: state.auth.movimenti,
});
export default connect(mpStP, AuthActions)(Movimenti);