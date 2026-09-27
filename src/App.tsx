import { BrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";

const App = () => {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
};

export default App;
