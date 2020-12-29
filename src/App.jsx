import { Provider } from "react-redux"
import { createStore } from "redux";
import { Reducer } from "./redux/reducer/reducer";
const { default: Wrapper } = require("./component/wrapper/wrapper");


const store = createStore(Reducer)
 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Wrapper></Wrapper>
      </div>
    </Provider>
  );
}

export default App;
