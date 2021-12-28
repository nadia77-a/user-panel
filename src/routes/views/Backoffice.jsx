import React from 'react';
import { Tabs } from 'antd';
import Header from 'routes/domains/Header';
import Movimenti from 'routes/domains/Movimenti';
import ReportSport from 'routes/domains/ReportSport';
import UserList from 'routes/domains/UserList';
import Scommesse from 'routes/domains/Scommesse';

import { Trans} from '@lingui/macro';
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
        <Scommesse></Scommesse>
      </TabPane>
      <TabPane tab={<Trans>Lista Utenti</Trans>} key="ListaUtenti" className="container">
        <UserList></UserList>
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
