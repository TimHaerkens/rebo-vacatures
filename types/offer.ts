export interface Offer {
  id: number
  title: string
  salary: {
    min: number | null
    max: number | null
    currency: string
  }
  min_hours: number
  max_hours: number
  experience_code: string
  location: string
  remote: boolean
  hybrid: boolean
}

export enum ExperienceCode {
  ENTRY_LEVEL = 'junior',
  MID_LEVEL = 'mid',
  SENIOR = 'senior',
}

export interface ApiResponse {
  offers: Offer[]
}
