import { defineComponent, ref } from "vue";
import HelloWorld from "./components/HelloWorld";

const img = require("./assets/logo.png");
const App = defineComponent({
  setup() {
    const name = ref("123");
    return () => {
      // const n = name.value;
      return (
        <div id="app">
          <img src={img} alt="" />
          <p>{name.value}</p>
          <HelloWorld age={28} />
        </div>
      );
    };
  },
});

export default App;
