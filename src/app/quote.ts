export class Quote {
  public showDescription: boolean;
  constructor(public id: number,public name: string, public author: string, public votes: number, public createDate: Date){
    this.showDescription=false;
  }
}
