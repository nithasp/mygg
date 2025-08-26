export interface MainIssue {
  id: string
  name: string
  code_no: string
  description: string
  sub_issue: any
}


export interface TicketBody {
  id?: string
  ticket_number: string
  closed_at?: string
  game: string
  type?: string
  email: string
  steam_id?: string
  steam_link?: string
  ip?: string
  location?: Location
  country: string
  platform?: string
  main_issue: string
  sub_issue: string
  subject: string
  description: string
  remark: string
  issue_date?: string
  attached?: any
  priority?: number
  assigned?: string
  status?: string
}

export interface Location {
  lat: string
  lng: string
}
