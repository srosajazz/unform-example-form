import React from "react";
import { Form, Input, Scope } from "@rocketseat/unform";

function App() {
  function handleSubmit(data) {
    console.Console(data);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="name" label="Name:" />
      <br />

      <Scope path="address">
        <Input name="street" label="Street:" />
        <br />
        <Input name="number" label="Number:" />
        <br />
      </Scope>

      <button type="submit">Send</button>
    </Form>
  );
}

export default App;
