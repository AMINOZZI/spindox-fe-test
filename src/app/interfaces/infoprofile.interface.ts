
export interface InfoProfile {
    picture:{
        large:string;
    }
    name:{
        first:string;
        last:string;
    }
    email:string;
    dob:{
        date:string;
    }
    location :{
        street :{
            number:number;
            name:string;
        }
       
    }
    phone:string;
    login:{
        password:string
    }
}
