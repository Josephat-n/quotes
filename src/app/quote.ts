export class Quote {
  public showDescription: boolean;
  constructor(public id: number,public name: string, public description: string, public author: string, public createDate: Date){
    this.showDescription=false;
  }
}
