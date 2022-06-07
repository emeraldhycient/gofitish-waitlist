import { useState } from "react";
import Waitlist from "./pages/waitlist";

function App() {
  const [count, setCount] = useState(0);

  return <Waitlist />;
}

export default App;
