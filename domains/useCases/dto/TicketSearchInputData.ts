export interface ITicketSearchInputData {
  readonly start: Date
  readonly end: Date
}

export interface TicketSearchParams {
  readonly start: Date
  readonly end: Date
}

class TicketSearchInputData implements ITicketSearchInputData {
  readonly start: Date
  readonly end: Date

  constructor(params: TicketSearchParams) {
    this.start = params.start
    this.end = params.end
  }
}

export default TicketSearchInputData