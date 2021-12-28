
import React, { useEffect } from "react";
import AuthActions from "redux-store/models/auth";
import { connect } from "react-redux";
import "../style.css";
import "./movimenti.css";
import { Form, DatePicker,Select, Table, Button} from 'antd';
import { Trans,t } from '@lingui/macro';

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
      message: <Trans>Per favore scegli!</Trans>,
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

  return (
      <>
    <Form name="filters" {...formItemLayout} onFinish={onFinish} className="movimentiFilters">
      <Form.Item name="date-picker-from" label={t`Dal`} {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="date-picker-to" label={<Trans>Al</Trans>} {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="select"
        label={<Trans>Filtro</Trans>}
        hasFeedback
        rules={[{ required: true, message: <Trans>Per favore scegli!</Trans> }]}
      >
        <Select placeholder={<Trans>Seleziona</Trans>}>
          <Option value="1"><Trans>Contabili</Trans></Option>
          <Option value="3"><Trans>Fido</Trans></Option>
          <Option value="4"><Trans>Provvigioni</Trans></Option>
          <Option value="9"><Trans>Tutti</Trans></Option>
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
         Filtro
        </Button>
      </Form.Item>
    </Form>

<Table columns={columns} dataSource={movimenti} rowKey="id"/>
</>
  );
};

const betTypes={
  "ver":"versamento",
  "pre":"prelievo"
}
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
      title: <Trans>Tipo Operazione</Trans>,
      // eslint-disable-next-line no-unused-expressions
      // dataIndex: 'action',
      key: 'action',
      render: (text,row) => <>{betTypes[row["action"]]}</>,
    },
    {
      title: <Trans>Importo</Trans>,
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