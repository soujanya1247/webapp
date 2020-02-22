export class User{
    name:Name;
    location:Location;
    email:string;
    phone:string;
    picture:Picture;
}
export class Name{
    first:string;
    title:string;
    last:string;
}
export class Location{
    street:string;
    city:string;
    state:string;
    postcode:string;
}
export class Picture{
    large:string;
    medium:string;
    thumbnail:string;
}

export class Result{
results:User[];
info:Info;
}

export class Info{
    seed:string;
    results:number;
    page:number;
    version:string;
}