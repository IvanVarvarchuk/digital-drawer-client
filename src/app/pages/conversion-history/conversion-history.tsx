import { Container, Row, Tab, Tabs } from 'react-bootstrap';
import styles from './conversion-history.module.css';
import ConvertionsList from './components/convertions-list/convertions-list';
import DetetedConvertionsList from './components/deteted-convertions-list/deteted-convertions-list';
import useConvertionHistoryState, { ConvertionHistoryStateProvider } from './state/use-convertion-history-state/use-convertion-history-state';
import React, { useEffect } from 'react';

/* eslint-disable-next-line */
export interface ConversionHistoryProps {}

export function ConversionHistoryTabs(props: ConversionHistoryProps) {
  const { state: { deletedFiles } } = useConvertionHistoryState();
  const [activeTab, setActiveTab] = React.useState<string>('all');
  const handleSelect = (key: string|null) => {
    setActiveTab(key ?? 'all');
  };
  useEffect(() => {
    if(deletedFiles.length === 0) {
      setActiveTab('all');
    }
  }, [deletedFiles.length]);
  return (
    <Tabs defaultActiveKey="all" activeKey={activeTab} onSelect={handleSelect} id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="all" title="All convertions">
        <ConvertionsList />
      </Tab>
      {deletedFiles.length > 0 && <Tab eventKey="deleted" title="Deleted Convertions">
        <DetetedConvertionsList />
      </Tab>}
    </Tabs>
  );
}

export function ConversionHistory() {
  return (
    <ConvertionHistoryStateProvider>
      <ConversionHistoryTabs />
    </ConvertionHistoryStateProvider>
  );
}

export default ConversionHistory;
