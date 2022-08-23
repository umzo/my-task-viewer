import {ITicketSearchInputData} from '@domains/useCases/dto/TicketSearchInputData'
import TicketSearchUseCase from '@domains/useCases/interfaces/TicketSearchUseCase'
import TicketGatewayAdapter from './adapters/TicketGatewayAdapter'
import TicketPresenterAdapter from './adapters/TicketPresenterAdapter'
import TicketSearchOutputData from '@domains/useCases/dto/TicketSearchOutputData'

class TicketSearchInteracter implements TicketSearchUseCase {
  constructor(
    private readonly gateway: TicketGatewayAdapter,
    private readonly prsenter: TicketPresenterAdapter
  ){}

  handle(inputData: ITicketSearchInputData): void {
    const searchPeriod = {
      start: inputData.start,
      end: inputData.end
    }
    const tickets = this.gateway.find(searchPeriod)

    const outputData = new TicketSearchOutputData({tickets})
    this.prsenter.output(outputData)

  }
}

export default TicketSearchInteracter