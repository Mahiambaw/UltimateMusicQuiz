import Questions from "./Components/Questions/Questions";
import { getToken } from "./auth/auth";

import "./App.css";

function App() {
  getToken();

  return (
    <>
      <Questions />
    </>
  );
}

export default App;
