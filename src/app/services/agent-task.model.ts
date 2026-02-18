export interface AgentTask {
  id: string;
  description: string;
  assignedTo: string;
  dueDate: string; // Assuming LocalDateTime comes as string from API
  status: string;
  priority: string;
}
