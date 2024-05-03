import { Tabs, Tab, TabList, TabPanel } from './Tabs/Tabs'
function App() {

  return (
    <Tabs>
      <TabList>
        <Tab index={0}>Tab 1</Tab>
        <Tab index={1}>Tab 2</Tab>
      </TabList>
      <TabPanel index={0}>Content 1</TabPanel>
      <TabPanel index={1}>Content 2</TabPanel>
    </Tabs>
  )
}

export default App
