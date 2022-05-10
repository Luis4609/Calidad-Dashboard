// import ReactEcharts from "echarts-for-react";
import dynamic from "next/dynamic";


const ReactEcharts = dynamic(() => import("echarts-for-react"), {
  ssr: false,
});

export const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

function Echarts() {
  return (
    <>
      <ReactEcharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
      />
    </>
  );
}

export default Echarts;
