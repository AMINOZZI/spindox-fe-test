import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class SenderService {
    public name :{
        first:string,
        last:string
    }
    public email:string
    public date:string;
    public location :{
        street :{
            number:number;
            name:string;
        }
       
    }
    public phone:string;
    public login:{
        password:string;
    }
    constructor(){}
}
