import React, { useRef, useState, useEffect, useCallback } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useConversations } from "../context/ConversationsProvider";

const OpenConversation = () => {
  const [text, setText] = useState("");
  const lastMessageRef = useRef();
  const setRef = useCallback((node) => {
    console.log("node is", node);
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText("");
  }

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ smooth: true });
    }
  }, []);

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-end justify-content-end px-3">
          {selectedConversation.messages.map((message, index) => {
            // console.log('message is', message)
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className="my-1 d-flex flex-column"
              >
                <div
                  className={`rounded px-2 py-1 ${
                    message.fromMe ? "bg-primary text-white" : "border"
                  }`}
                  style={
                    message.fromMe
                      ? { backgroundColor: "blue", color: "white" }
                      : {}
                  }
                >
                  {message.text}
                </div>
                <div
                  className={`text-muted small ${
                    message.fromMe ? "text-end" : ""
                  }`}
                >
                  {message.fromMe ? "You" : message.senderName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
  );
};

export default OpenConversation;
