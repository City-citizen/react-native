export const ScheduleSchema = {
    name: 'Schedule',
    properties: {
      id: 'int',
      day: 'string',
      name: 'string',
      professor: 'string',
      room: 'string',
      start: 'string',
      end: 'string',
    },
    primaryKey: 'id',
  };