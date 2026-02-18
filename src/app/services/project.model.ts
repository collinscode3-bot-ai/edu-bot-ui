export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string; // Assuming LocalDate comes as string from API
  endDate: string;   // Assuming LocalDate comes as string from API
  status: string;
}
