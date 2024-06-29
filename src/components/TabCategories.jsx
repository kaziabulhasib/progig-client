import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
const TabCategories = () => {
  return (
    <Tabs>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-3xl w-1/2 mx-auto text-center font-semibold my-8'>
          Browse Jobs By Categories
        </h1>
        <p className='w-1/2 text-center mx-auto my-8'>
          Three categories available for the time being. They are Web
          Development, Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
        <div className='flex items-center justify-center'>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Web Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <h2>
            <JobCard></JobCard>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>Web Design</h2>
        </TabPanel>
        <TabPanel>
          <h2>Digital Marketing</h2>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
