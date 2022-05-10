import React from "react";
// import ReactEChartsCore from "echarts-for-react/lib/core";
// import * as echarts from "echarts/core";
// import { BarChart } from "echarts/charts";

import dynamic from "next/dynamic";

const EchartsCore = dynamic(() => import("echarts-for-react/lib/core"), {
  ssr: false,
});
const echarts = dynamic(() => import("echarts/core"), {
  ssr: false,
});
const PieChart = dynamic(() => import("echarts/charts"), {
  ssr: false,
});
const BarChart = dynamic(() => import("echarts/charts"), {
    ssr: false,
  });
const CanvasRenderer = dynamic(() => import("echarts/renderers"), {
  ssr: false,
});
const { TitleComponent, TooltipComponent, GridComponent, DatasetComponent } = dynamic(
  () => import("echarts/components"),
  {
    ssr: false,
  }
);

// Register the required components
// echarts.use([
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   BarChart,
//   CanvasRenderer,
// ]);

function TestPieChart() {
  return (
    // The usage of ReactEChartsCore are same with above.
    // <EchartsCore
    //   echarts={echarts}
    //   option={this.getOption()}
    //   notMerge={true}
    //   lazyUpdate={true}
    //   theme={"theme_name"}
    //   onChartReady={this.onChartReadyCallback}
    //   onEvents={EventsDict}
    // />
    <BarChart echarts={echarts}></BarChart>
  );
}

export default TestPieChart;
