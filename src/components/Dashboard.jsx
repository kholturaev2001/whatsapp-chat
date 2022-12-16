import React from "react";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";
import { useConversations } from "../context/ConversationsProvider";

const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();
  console.log("selectedConversation", selectedConversation)

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
};

export default Dashboard;
