interface ITicket {
  ticketId: TickdetId
  title: string
  describe: string
  status: string
  parentId: TickdetId
  schedule: ScheduleID
}

interface TickdetId {
  id: string
}

interface ScheduleID {
  id: string
}


class Ticket implements ITicket {
  ticketId: TickdetId
  title: string
  describe: string
  status: string
  parentId: TickdetId
  schedule: ScheduleID

  get start() {
    return new Date();
  }
  get end() {
    return new Date();
  }
}

export default Ticket