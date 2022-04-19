export class Job {
    jobName: string;
    jobTitle: string;
    jobCompany: string;
    companyLink: string;
    dateRange: string;
    description: Array<string>;

    constructor({
        jobName,
        jobTitle,
        jobCompany,
        companyLink,
        dateRange,
        description
    } : {
        jobName: string,
        jobTitle: string,
        jobCompany: string,
        companyLink?: string
        dateRange: string,
        description: Array<string>
    }) {
        this.jobName = jobName;
        this.jobTitle = jobTitle;
        this.jobCompany = jobCompany;
        this.dateRange = dateRange;
        this.description = description;
        this.companyLink = companyLink ?? ""
    }
}