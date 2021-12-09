export type User = {
  id: number,
  email: string,
  username: string,
  firstname: string,
  lastname: string,
  mobile1: string,
  mobile2: string,
  display_name: string,
  account_type: string,
  confirm_plan: number,
  confirm_datetime: string,
  phone: string
  // Personal
  national_code: string,
  father_name: string,
  birthdate: string,
  address_id: string,
  // Organization
  organization: string,
  economic_code: string,
  national_id: string,
  registration_id: string,
}
