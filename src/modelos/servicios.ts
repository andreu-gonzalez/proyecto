export class Servicio{
    id:number;
    date_created:string;
    deleted:number;
    name:string;
    type:string;
    entry_date:string;
    deperture_date:string;
    problem_description:string;
    solution_description:string;
    status:string;
    id_customer:number;
    id_vehicles:number;

}

export class newServicio{
    id:number;
    date_created:string;
    deleted:number;
    name:string;
    type:string;
    entry_date:string;
    deperture_date:string;
    problem_description:string;
    solution_description:string;
    status:string;
    id_customer:number;
    id_vehicles:number;

}

export function EmpleadosToAJSON(data):Servicio[]{
    return data["services"].records.map((val)=>{
        return {
            id: val[0],
            date_created:val[1],
            deleted:val[2],
            name:val[3],
            type:val[4],
            entry_date:val[5],
            deperture_date:val[6],
            problem_description:val[7],
            solution_description:val[8],
            status:val[9],
            id_customer:val[10],
            id_vehicles:val[11],
        }
    })

}