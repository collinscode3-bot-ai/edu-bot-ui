export interface Metric {
  id: string;
  name: string;
  value: number;
  unit: string;
  timestamp: string; // Assuming timestamp comes as string from API
}
