import "./App.css";
import DateFnsExample from "./Components/DateFns/DateFnsExample";
import MomentExample from "./Components/Moment/MomentExample";
import DayjsExample from "./Components/Dayjs/DayjsExample";

function App() {
  return (
    <div className="App">
      <DateFnsExample />
      <DayjsExample />
      <MomentExample />
    </div>
  );
}

export default App;
