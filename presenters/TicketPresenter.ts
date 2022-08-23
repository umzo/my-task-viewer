import TicketPresenterAdapter from '@domains/useCases/adapters/TicketPresenterAdapter'
import TicketSearchOutputData from '@domains/useCases/dto/TicketSearchOutputData'

class TicketPresenter implements TicketPresenterAdapter {

  output(outputData: TicketSearchOutputData): void {
    // const ticketViewModels = outputData.tickets.map( ticket => {
    //   return {
    //     ticketId: String(ticket.ticketId),
    //     title: ticket.title,
    //     describe: ticket.describe,
    //     status: ticket.status,
    //     start: ticket.start,
    //     end: ticket.end,
    //   }
    // })
  }

}

export default TicketPresenter