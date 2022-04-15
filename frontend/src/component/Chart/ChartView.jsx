import { useState, useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Case on Hold", "Submitted", "In Production", "Shipped"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: ["#F2CC59", "#BA68C8", "#407BFF", "#E6E5E6"],
      borderColor: ["#F2CC59", "#BA68C8", "#407BFF", "#E6E5E6"],
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          size: 12,
        },
      },
    },
  },
};

const ChartView = () => {
  const [charView, setChatView] = useState();
  const summaryRef = useRef(null);

  useEffect(() => {
    setChatView(summaryRef?.current?.legend?.legendItems);
  }, []);

  return (
    <div>
      <Pie data={data} options={pieOptions} ref={summaryRef} />
      {charView?.map((dat, i) => (
        <div display="flex" sx={{ mt: 2 }} key={i}>
          <div
            sx={{
              height: 16,
              width: 16,
              background: `${data?.fillStyle}`,
              borderRadius: 5,
              mr: 0.5,
            }}
          />
          <div variant="body2"> {data?.text}</div>
        </div>
      ))}
    </div>
  );
};
export default ChartView;
