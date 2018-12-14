
export class Item {
    public id: number;
    public name: string;
    public price: number;
}

// register
export class User{
    public id: number;
    public email: string;
    public password: string;
    public status: string;
    
    public id_stu: number;
    public first_name_stu: string;
    public last_name_stu: string;
    public gender_stu: string;
    public bd_stu: string;
    public address: string;
    public lat: number;
    public lon: number;
    public sick_stu: string;
    public school: string;
    public tel_stu: number;

    public id_par: number;
    public first_name_par: string;
	public last_name_par: string; 
	public gender_par: string;
	public tel_par: number;
    public tel_par_work: number;
    
    public id_dri: number;
    public first_name_dri: string;
    public last_name_dri: string;
    public bd_dri: string;
    public gender_dri: string;
    public id_card_dri: number;
    public tel_dri: number;
}

export class Parent{
    public id_par: number;
    public email_par: string;
    public password: string;
    public status: string;
    public first_name_stu: string;
    public last_name_stu: string;
    public gender_stu: string;
    public relation: string;
    public tel_par: number;
}
export class Driver{
    public id_dri: number;
    public email_dri: string;
    public password: string;
    public status: string;
    public first_name_dri: string;
    public last_name_dri: string;
    public gender_dri: string;
    public id_card_id: string;
    public tel_par: number;  
}
export class van{
    public id: number;
    public email: string;
    public password: string;
    public status: string;
    public first_name_stu: string;
    public last_name_stu: string;
    public gender_stu: string;
    public db_stu: string;
    public address: string;
    public lat: number;
    public lon: number;
    public sick_stu: string;
    public school: string;
    public tel_stu: number;
}
