import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { carReducer } from "./features/car/CarSlice";
import { store } from "./features/car/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Home />
      </Provider>
      {/* <Section /> */}
    </div>
  );
}

export default App;
