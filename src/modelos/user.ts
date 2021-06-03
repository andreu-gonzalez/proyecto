export class User{
    id:number;
    data_entered:Date;
    data_modified:Date;
    created_by:string;
    user_name:string;
    user_password:string;
    user_hash:string;
    firts_name:string;
    last_name:string;
    email_adress:string;
    title:string;
    status:string;
    is_abmin:number;
    description:string;
    adress_city:string;
    adress_state:string;
    adress_post:string;
    adress_country:string;


}

export function UserToAJSON(data):User[]{
    return data["users"].records.map((val)=>{
        return {
            id:val[0],
            data_entered:val[1],
            data_modified:val[2],
            created_by:val[3],
            user_name:val[4],
            user_password:val[5],
            user_hash:val[6],
            firts_name:val[7],
            last_name:val[8],
            email_adress:val[9],
            title:val[11],
            status:val[12],
            is_abmin:val[13],
            description:val[14],
            adress_city:val[15],
            adress_state:val[16],
            adress_post:val[17],
            adress_country:val[18],
        }
    })

}

