export interface Offer {
  id: number
  title: string
  salary: string
}

export interface ApiResponse {
  offers: Offer[]
}
