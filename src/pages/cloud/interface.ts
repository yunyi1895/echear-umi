export interface RankingProps {
  style?: React.CSSProperties;
  chartData: DataOpt[];
}

export interface DataOpt {
  name: string;
  value: number;
  type: number;
}
