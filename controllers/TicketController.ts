import TicketSearchInputData, {TicketSearchParams} from '@domains/useCases/dto/TicketSearchInputData'
import TicketSearchUseCase from '@domains/useCases/interfaces/TicketSearchUseCase'

class TicketController {
  private ticketSearchUseCase: TicketSearchUseCase

  searchTickets(start: Date, end: Date) {
    const params: TicketSearchParams = {start, end};
    const inputData = new TicketSearchInputData(params);
    this.ticketSearchUseCase.handle(inputData);
  }
}

export default TicketController