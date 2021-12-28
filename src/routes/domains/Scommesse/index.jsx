import React, { useEffect ,useState} from 'react';
import AuthActions from 'redux-store/models/auth';
import { connect } from 'react-redux';
import '../style.css';
import { Form, DatePicker, Table, Button ,Modal } from 'antd';
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
   };
   
   const handleOk = () => {
    setIsModalVisible(false);
   };
   
   const handleCancel = () => {
    setIsModalVisible(false);
   };
  const onFinish = fieldsValue => {
    const values = {
      ...fieldsValue,
      datePickerFrom: fieldsValue['date-picker-from'].format('YYYY/MM/DD'),
      datePickerTo: fieldsValue['date-picker-to'].format('YYYY/MM/DD'),
    };
    getReportSport(values.datePickerFrom, values.datePickerTo);

  };
 
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

      <Table columns={columns} dataSource={reportSport} onClick={showModal}/>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

const betTypes={
  "V":"versamento",
  "pre":"prelievo"
}

const columns = [
  {
    title: <Trans>Id Coupon</Trans>,
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: <Trans>Stato</Trans>,
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: <Trans>Utente</Trans>,
    dataIndex: 'user_name',
    key: 'user_name',

  },
  {
    title: <Trans>Giocato</Trans>,
    key: 'events_number',
    dataIndex: 'events_number',
  },
  {
    title: <Trans>Vinto</Trans>,
    dataIndex: 'win_amount',
    key: 'win_amount',
  },
  {
    title: <Trans>Massima Vincita</Trans>,
    dataIndex: 'maxwin',
    key: 'maxwin',
  },
  {
    title: <Trans>Eventi / Colonne</Trans>,
    dataIndex: 'columns_number',
    key: 'columns_number',
  },
  {
    title: <Trans>Bet tipo</Trans>,
    dataIndex: 'bet_type',
    key: 'bet_type',
  },
  {
    title: <Trans>Data</Trans>,
    dataIndex: 'data',
    key: 'data',
  },
  {
    title: 'DATA CHIUSURA',
    dataIndex: 'closing_date',
    key: 'closing_date',
  },

  // {
  //   title: <Trans>Azioni</Trans>,
  //   dataIndex: 'contabile',
  //   key: 'contabile',
  //   // eslint-disable-next-line no-undef
  //   render: (text,row) => <>{<Button type="primary" onClick={showModal}>Open Modal</Button>}</>,
  // }
];


const mpStP = state => ({
  reportSport: state.auth.reportSport,
});
export default connect(mpStP, AuthActions)(ReportSport);
