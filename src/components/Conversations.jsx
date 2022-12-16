import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "./../context/ConversationsProvider";

const Conversations = () => {
  const { conversations } = useConversations();
  console.log("conversations", conversations);

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, id) => (
        <ListGroup.Item key={id}>
          {conversation.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Conversations;
