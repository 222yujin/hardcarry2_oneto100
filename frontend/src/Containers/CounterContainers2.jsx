import React from "react";
import Counter2 from "../component/Counter2";
import { useSelector, useDispatch } from "react-redux";
import { increase } from "../module/counter2";
const CounterContainers2 = () => {
  const number2 = useSelector((state) => state.counter2);
  const dispatch = useDispatch();
  const onIncrease2 = (num) => {
    dispatch(increase(num));
  };
  return <Counter2 number2={number2.value} onIncrease2={onIncrease2} />;
};
export default CounterContainers2;
