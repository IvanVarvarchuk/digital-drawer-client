import { Container, Row, Tab, Tabs } from 'react-bootstrap';
import styles from './conversion-history.module.css';
import ConvertionsList from './components/convertions-list/convertions-list';
import DetetedConvertionsList from './components/deteted-convertions-list/deteted-convertions-list';

/* eslint-disable-next-line */
export interface ConversionHistoryProps {}

export function ConversionHistory(props: ConversionHistoryProps) {
  return (
    <Tabs
      defaultActiveKey="all"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="all" title="All convertions">
        <ConvertionsList/>
      </Tab>
      <Tab eventKey="deleted" title="Deleted Convertions">
        <DetetedConvertionsList/>
      </Tab>
    </Tabs>
  );
}

export default ConversionHistory;
