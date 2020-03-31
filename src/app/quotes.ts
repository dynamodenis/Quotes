export class Quotes {
    showQuote:boolean;
    constructor(public id:number,public date:Date, public name: string, public author:string,public quote:string){
        this.showQuote=false;
    }
}
