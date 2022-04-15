import styled from "styled-components";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 2,
      data: [1, 2, 3, 4, 5],
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(255, 99, 132)",
      data: [1, 2, 3, 4, 5, 6],
      borderColor: "red",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(75, 192, 192)",
      data: [1, 2, 3, 4, 5, 6],
    },
  ],
};

const Chart = () => {
  return (
    <Container>
      <Line type="line" data={data} />
    </Container>
  );
};

export default Chart;

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;

// // 함수를 선언줘서 이용한다.
// // 차트 추가하기
// function addData(myChart, data) {
//   // 매개변수로 myChart를 넘겨주면
//   // myChart 객체의 data 의 datasets에 data를 넣어(push)준다라는 뜻이다.
//   myChart.data.datasets.push(data);
//   // chart update를 해주어야 해당 사항이 반영이 된다.
//   myChart.update();
// }
// // 차트 삭제하기
// function removeData(myChart, delData) {
//   // 위와 마찬가지로 삭제는 splice로 삭제해주면 되겠다.
//   myChart.data.datasets.splice(delData, 1);
//   myChart.update();
// }
// function updateConfigByMutating(myChart) {
//   myChart.options.plugins.title.text = "new title";
//   myChart.update();
// }

// function updateConfigAsNewObject(myChart) {
//   myChart.options = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: "myChart.js",
//       },
//     },
//     scales: {
//       x: {
//         display: true,
//       },
//       y: {
//         display: true,
//       },
//     },
//   };
//   myChart.update();
// }
// function updateScales(myChart) {
//   let xScale = myChart.scales.x;
//   let yScale = myChart.scales.y;
//   myChart.options.scales = {
//     newId: {
//       display: true,
//     },
//     y: {
//       display: true,
//       type: "logarithmic",
//     },
//   };
//   myChart.update();
//   // need to update the reference
//   xScale = myChart.scales.newId;
//   yScale = myChart.scales.y;
// }
// function updateScale(myChart) {
//   myChart.options.scales.y = {
//     type: "logarithmic",
//   };
//   myChart.update();
// }
// 이렇게 함수로 선언해서 사용하지 않고 직접 사용해도 무방하다.

// 따로 변수를 선언해서 사용해야 한다.
// let myChart;
// let ctx = document.getElementById("myChart").getContext("2d");
// myChart = new Chart(ctx, {

// const data = {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };
// const Chart = () => {
//   return (
//     <Container>
//       <Line type="bar" data={data} />
//     </Container>
//   );
// };

// export default Chart;

// const Container = styled.div`
//   width: 90vw;
//   max-width: 900px;
// `;
