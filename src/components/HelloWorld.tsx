import { defineComponent } from "vue";

const PropsType = {
  msg: String,
  age: {
    type: Number,
    required: true,
  },
};

export default defineComponent({
  props: PropsType,
  setup(props) {
    return () => {
      return <div>{props.age}</div>;
    };
  },
});
