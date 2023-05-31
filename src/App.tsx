import "./App.css";
import { Button, Input } from "@nicosevilla-github/nico-component-library";

function App() {
  return (
    <>
      <h2>NICO COMPONENT LIBRARY DEMO</h2>

      <div>
        <Button text="Default" state="default" />
        <Button primary text="Primary" state="default" />
        <Button warning text="Warning" state="default" />
        <Button danger text="Danger" state="default" />
        <br />
        <br />
        <Input type="text" placeholder="Text" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <br />
        <Input type="text" placeholder="Default" />
        <Input focus type="text" placeholder="Focus" />
        <Input error type="text" placeholder="Error" />
      </div>
    </>
  );
}

export default App;
