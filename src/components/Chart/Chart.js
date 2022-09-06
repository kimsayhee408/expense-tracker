import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // array of objects ---> array of values
  const totalMaximum = Math.max(...dataPointValues); // finds biggest expense of year

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // label property on dataPoint object should be unique & so we can use as key
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        /> // each ChartBar represents a month (12 ChartBars always)
      ))}
    </div>
  );
}

export default Chart;
