export class External {
  icon: any;
  link: string;

  constructor({
    icon,
    link
  } : {
      icon: any,
      link: string
  }) {
      this.icon = icon;
      this.link = link;
  }
}