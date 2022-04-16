import React, { useEffect, useState } from "react";
import waiting from "../../images/waiting.gif";
import { useNavigate } from "react-router-dom";
import "./WaitForm.css";

const WaitForm = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const { state } = useLocation();
  setTimeout(() => {
    navigate("/result");
  }, 4000);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:5000/test/postTestArray", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          result: {
            1: state.select[0],
            2: state.select[1],
            3: state.select[2],
            4: state.select[3],
            5: state.select[4],
            6: state.select[5],
            7: state.select[6],
            8: state.select[7],
            9: state.select[8],
            10: state.select[9],
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            navigate("/result", { state: { result: data.data } });
          }, 4000);
        });

      if (!response.ok) {
        throw new Error("기능에 이상이 있습니다 !");
      }
      const responseData = await response.json();

      const loadedItems = [];
      for (const key in responseData) {
        loadedItems.push({
          id: key,
        });
      }
      setItems(loadedItems);
      setIsLoading(false);
    };
    fetchItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="ItemsLoading">
        <h1> Loading..</h1>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className="ItemsError">
        <h1>{httpError}</h1>
      </section>
    );
  }

  return (
    <div className="wait_layout">
      <div className="WaitForm">
        <div className="h3Container">
          <img className="resultimg" src={waiting} alt="img" />
          <h3 className="resultH3">결과를 분석하고 있어요</h3>
        </div>
      </div>
    </div>
  );
};

export default WaitForm;
