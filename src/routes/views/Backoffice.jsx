import React from 'react';
import { Tabs } from 'antd';
import Header from 'routes/domains/Header';
import Movimenti from 'routes/domains/Movimenti';
const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

const Backoffice = () => (
  <>
    <Header></Header>
    <Tabs defaultActiveKey="1" onChange={callback} className="menuTabs">
      <TabPane tab="Movimenti" key="Movimenti" className="container">
        <Movimenti></Movimenti>
      </TabPane>
      <TabPane tab="Scommesse" key="Scommesse"  className="container">
        Scommesse
      </TabPane>
      <TabPane tab="ListaUtenti" key="ListaUtenti" className="container">
        ListaUtenti
      </TabPane>
      <TabPane tab="Report" key="Report" className="container">
        Report
      </TabPane>
      <TabPane tab="ReportSport" key="ReportSport" className="container">
        ReportSport
      </TabPane>
    </Tabs>
  </>
);

export default Backoffice;
