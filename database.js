import Realm from 'realm';
import { ScheduleSchema } from './schema';

export const databaseOptions = {
  path: 'schedule.realm',
  schema: [ScheduleSchema],
  schemaVersion: 0,
};

export const insertSchedule = schedule => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      schedule.forEach(day => {
        day.classes.forEach(cls => {
          realm.create('Schedule', {
            id: cls.id,
            day: day.day,
            name: cls.name,
            professor: cls.professor,
            room: cls.room,
            start: cls.start,
            end: cls.end,
          }, 'modified');
        });
      });
      resolve();
    });
  }).catch(error => reject(error));
});

export const getSchedule = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    const data = realm.objects('Schedule').sorted('id');
    resolve(data);
  }).catch(error => reject(error));
});
``