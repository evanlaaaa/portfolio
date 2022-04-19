import { External } from "./external";

export class Project {
  projectName: string;
  projectDescription: string;
  imageUrl: string;
  technologies: Array<string>;
  gallery?: Array<string>;
  external?: Array<External>;

  constructor({
    projectName,
    projectDescription,
    imageUrl,
    technologies,
    gallery,
    external
  } : {
    projectName: string,
    projectDescription: string,
    imageUrl: string,
    technologies: Array<string>,
    gallery?: Array<string>,
    external?: Array<External>
  }) {
    this.projectName = projectName;
    this.projectDescription = projectDescription;
    this.imageUrl = imageUrl;
    this.technologies = technologies;
    this.gallery = gallery ?? [];
    this.external = external
  }
}