import React from 'react';
import { Tabs } from 'antd';
import Header from 'routes/domains/Header';
import Movimenti from 'routes/domains/Movimenti';
import ReportSport from 'routes/domains/ReportSport';
import { Trans, t } from '@lingui/macro';
const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

const Backoffice = () => (
  <>
    <Header></Header>
    <Tabs defaultActiveKey="1" onChange={callback} className="menuTabs">
      <TabPane tab={<Trans>Movimenti</Trans>} key="Movimenti" className="container">
        <Movimenti></Movimenti>
      </TabPane>
      <TabPane tab={<Trans>Scommesse</Trans>} key="Scommesse"  className="container">
        Scommesse
      </TabPane>
      <TabPane tab={<Trans>Lista Utenti</Trans>} key="ListaUtenti" className="container">
        ListaUtenti
      </TabPane>
      <TabPane tab={<Trans>Report</Trans>} key="Report" className="container">
        Report
      </TabPane>
      <TabPane tab={<Trans>Report Sport</Trans>} key="ReportSport" className="container">
        <ReportSport></ReportSport>
      </TabPane>
    </Tabs>
  </>
);

export default Backoffice;
