import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "./../context/ConversationsProvider";

const Conversations = () => {
  const { conversations, selectConversationIndex } = useConversations();
  console.log("conversations", conversations);

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, id) => (
        <ListGroup.Item
          key={id}
          action
          onClick={() => selectConversationIndex(id)}
          active={conversation.selected}
        >
          {conversation.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Conversations;
