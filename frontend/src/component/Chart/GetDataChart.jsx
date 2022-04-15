import React, { Component, useState } from "react";

import axios from "axios";
import Chart from "./ChartView";

const GetChartData = () => {
  const [set, setState] = useState();
  axios
    .get("http://www.json-generator.com/api/json/get/coXIyroYAy?indent=2")
    .then((res) => {
      const coin = res.data;
      let labels = [];
      let data = [];
      coin.forEach((element) => {
        labels.push(element.labels);
        data.push(element.data);
      });

      console.log(coin);
      setState({
        chartData: {
          labels: labels,
          datasets: [
            {
              label: "Population",
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 99, 132, 0.6)",
              ],
            },
          ],
        },
      });
    });

  return (
    <div className="App">
      {Object.keys(this.state.chartData).length && (
        <Chart
          chartData={this.state.chartData}
          location="Massachusetts"
          legendPosition="bottom"
        />
      )}
    </div>
  );
};

export default GetChartData;
