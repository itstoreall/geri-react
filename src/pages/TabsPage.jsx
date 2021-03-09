import React from "react";
import Tabs from "../components/Tabs";
import tabs from "../components/Tabs/tabs.json";

const TabsPage = () => {
  return (
    <>
      <h1>Tabs</h1>
      <Tabs items={tabs} />
    </>
  );
};

export default TabsPage;
