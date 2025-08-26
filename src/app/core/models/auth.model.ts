export interface SignInReturn {
    success: boolean
    message: string
    token: Token
    data: UserReturn
  }
  
  export interface Token {
    access: string
    refresh: string
  }
  
  export interface UserReturn {
    id: string
    username: string
    firstname: string
    lastname: string
    email: string
    role: string
    mobile: string
    mobile_country: string
    country: string
    nationality: string
    date_of_birth: string
    gender: number
  }
  