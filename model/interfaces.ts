export interface IJob {
  companyName: string;
  companyLink?: string;
  companyAddress: string;
  positionTitle: string;
  dateRange: string;
  description: Array<string>;
  technologies: Array<string>
}