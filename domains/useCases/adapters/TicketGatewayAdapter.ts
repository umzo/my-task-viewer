import Ticket from '@domains/entities/Ticket'

interface TicketGatewayAdapter {
  find(period: {start: Date, end: Date}): Ticket[];
}

export default TicketGatewayAdapter