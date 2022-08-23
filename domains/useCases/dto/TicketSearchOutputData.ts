import Ticket from '@domains/entities/Ticket'

export interface ITicketSearchOutputData {
  readonly tickets: Ticket[]
}

export interface TicketSearchParams {
  readonly tickets: Ticket[]
}

class TicketSearchOutputData implements ITicketSearchOutputData {
  readonly tickets: Ticket[]
  readonly length: number

  constructor(params: TicketSearchParams) {
    this.tickets = params.tickets
    this.length = params.tickets.length
  }
}

export default TicketSearchOutputData