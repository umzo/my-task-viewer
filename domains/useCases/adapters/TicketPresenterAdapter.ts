import TicketSearchOutputData from '@domains/useCases/dto/TicketSearchOutputData'

export interface TicketPresenterAdapter {
  output(outputData: TicketSearchOutputData): void
}

export default TicketPresenterAdapter