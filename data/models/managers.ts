export interface Manager {
    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    username?: string;
    mobile1?: string;
    mobile2?: string;
    password?: string;
    national_code?: string;
    role_id?: number;
}

export interface StoreResponse {
    id: number;
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    mobile1: string;
    mobile2?: any;
    display_name?: any;
    account_type: number;
    confirm_plan?: any;
    confirm_datetime: string;
    created_at: string;
    updated_at: string;
    partyPersonal?: any;
    address?: any;
    access_token: string;
}

export interface Response<T> {
    "success": boolean,
    "data": T,
    "message": string,
    errors?: any
}