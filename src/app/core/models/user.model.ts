export interface User {
  agent_type?: string,
  country: string,
  date_of_birth: string,
  email: string,
  firstname: string,
  gender: 0,
  lastname: string,
  mobile: string,
  mobile_country: string,
  nationality?: string,
  password: string,
  username: string
}
export interface SignIn {
  agent_type?: string,
  password: string,
  username: string
}


export interface UpdateUser {
  country: string,
  date_of_birth: string,
  email: string,
  firstname: string,
  gender: number,
  lastname: string,
  mobile: string,
  mobile_country: string,
  nationality?: string
}