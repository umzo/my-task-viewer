import {ITicketSearchInputData} from '@domains/useCases/dto/TicketSearchInputData'


interface TicketSearchUseCase {
  handle(inputData: ITicketSearchInputData): void
}
export default TicketSearchUseCase