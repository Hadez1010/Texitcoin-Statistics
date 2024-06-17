import { ApexOptions } from 'apexcharts';

import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chart: {
    categories?: string[];
    colors?: string[];
    series: {
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ApexOptions;
  };
}

export default function ChartWidget({ title, subheader, chart, ...other }: Props) {
  const { colors, categories, series, options } = chart;

  const chartOptions = useChart({
    colors,
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
    xaxis: {
      categories,
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      {series.map((item) => (
        <Chart
          dir="ltr"
          type="area"
          series={item.data}
          options={chartOptions}
          width="100%"
          height={364}
        />
      ))}
    </Card>
  );
}
