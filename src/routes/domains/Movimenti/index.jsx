
import React from "react";
import "./movimenti.css";
import { Form, DatePicker,Select, Table, Button} from 'antd/lib';


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


const Movimenti = () => {
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const values = {
      ...fieldsValue,
      'date-picker-from': fieldsValue['date-picker-from'].format('YYYY-MM-DD'),
      'date-picker-to': fieldsValue['date-picker-to'].format('YYYY-MM-DD'),
      
    };
    console.log('Received values of form: ', values);
  };

  return (
      <>
    <Form name="movimentiFilters" {...formItemLayout} onFinish={onFinish}>
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
          <Option value="contabili">Contaboli</Option>
          <Option value="fidi">Fido</Option>
          <Option value="provvigioni">Provvigioni</Option>
          <Option value="tutti">Tutti</Option>
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
       
        <Button  className="submitBtn">
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
      title: 'Oggeto',
      dataIndex: 'oggeto',
      key: 'oggeto',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
    },
    {
      title: 'Dati',
      dataIndex: 'dati',
      key: 'dati',
    },
    {
      title: 'Avuti',
      key: 'avuti',
      dataIndex: 'avuti',
    },
    {
        title: 'DISPONILITA` PREC',
        dataIndex: 'disponibilita',
        key: 'disponibilita',
      },
      {
        title: 'Data',
        dataIndex: 'data',
        key: 'data',
      },
   
   
  ];
const data = [
    {
      key: '1',
      oggeto: 'John Brown',
      tipo: 32,
      dati: 'New York No. 1 Lake Park',
      avuti: ['nice', 'developer'],
      disponibilita:"test",
      data:"data test"
    },
    {
      key: '2',
      oggeto: 'Jim Green',
      tipo: 42,
      dati: 'London No. 1 Lake Park',
      avuti: ['loser'],
      disponibilita:"test",
      data:"data test"
    },
    {
      key: '3',
      oggeto: 'Joe Black',
      tipo: 32,
      dati: 'Sidney No. 1 Lake Park',
      avuti: ['cool', 'teacher'],
      disponibilita:"test",
      data:"data test"
    },
    {
        key: '4',
        oggeto: 'John Brown',
        tipo: 32,
        dati: 'New York No. 1 Lake Park',
        avuti: ['nice', 'developer'],
        disponibilita:"test",
        data:"data test"
      },
      {
        key: '5',
        oggeto: 'Jim Green',
        tipo: 42,
        dati: 'London No. 1 Lake Park',
        avuti: ['loser'],
        disponibilita:"test",
        data:"data test"
      },
      {
        key: '6',
        oggeto: 'Joe Black',
        tipo: 32,
        dati: 'Sidney No. 1 Lake Park',
        avuti: ['cool', 'teacher'],
        disponibilita:"test",
        data:"data test"
      },
      {
        key: '7',
        oggeto: 'John Brown',
        tipo: 32,
        dati: 'New York No. 1 Lake Park',
        avuti: ['nice', 'developer'],
        disponibilita:"test",
        data:"data test"
      },
      {
        key: '8',
        oggeto: 'Jim Green',
        tipo: 42,
        dati: 'London No. 1 Lake Park',
        avuti: ['loser'],
        disponibilita:"test",
        data:"data test"
      },
      {
        key: '9',
        oggeto: 'Joe Black',
        tipo: 32,
        dati: 'Sidney No. 1 Lake Park',
        avuti: ['cool', 'teacher'],
        disponibilita:"test",
        data:"data test"
      },
      {
        key: '10',
        oggeto: 'John Brown',
        tipo: 32,
        dati: 'New York No. 1 Lake Park',
        avuti: ['nice', 'developer'],
        disponibilita:"test",
        data:"data test"
      },
      {
        key: '11',
        oggeto: 'Jim Green',
        tipo: 42,
        dati: 'London No. 1 Lake Park',
        avuti: ['loser'],
        disponibilita:"test",
        data:"data test"
      },
      {
        key: '12',
        oggeto: 'Joe Black',
        tipo: 32,
        dati: 'Sidney No. 1 Lake Park',
        avuti: ['cool', 'teacher'],
        disponibilita:"test",
        data:"data test"
      },
  ];

export default Movimenti;