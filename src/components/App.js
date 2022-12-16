import React from "react";
import Login from "./Login";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../context/ContactsProvider";
import { ConversationsProvider } from "../context/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ConversationsProvider>
      <ContactsProvider>
        <Dashboard id={id} />
      </ContactsProvider>
    </ConversationsProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
