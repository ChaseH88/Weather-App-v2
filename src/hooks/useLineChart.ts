import { DailyForecast } from "Types/interfaces";
import moment from "moment";

type UseLineChart = (string | number)[][];

/**
 * Formats the daily forecast data for the line graph chart.
 * @param data DailyForecast Type
 * @returns an array containing the chart data
 */
const useLineChart = (data: DailyForecast): UseLineChart => {

  const chartData = data.data.map((day, index) => (
    [
      moment(day.valid_date).format('DD'),
      (day.low_temp+day.high_temp)/2,
      day.low_temp,
      day.high_temp, 
      day.high_temp,
      day.low_temp
    ]
  ));

  return chartData;
  
};

export { useLineChart };