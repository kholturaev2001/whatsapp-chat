import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useConversations } from "../context/ConversationsProvider";

const OpenConversation = () => {
  const [text, setText] = useState("");
  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
  }
  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="m-2">
            <InputGroup>
              <Form.Control
                as="textarea"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ height: "75px", resize: "none" }}
              />
              {/* <InputGroup.Append> */}
              <Button type="submit">Send</Button>
              {/* </InputGroup.Append> */}
            </InputGroup>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default OpenConversation;
