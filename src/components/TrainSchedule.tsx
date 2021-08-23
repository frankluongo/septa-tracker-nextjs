import { SingleTrainSchedule } from '#common/interfaces';
import css from '#styles/components/TrainSchedule.module.css';

export const TrainSchedule = ({
  schedule,
}: {
  schedule: [SingleTrainSchedule] | null;
}) => {
  if (!schedule) return null;
  return (
    <section className={css.TrainScheduleWrapper}>
      <table className={css.TrainSchedule}>
        <thead>
          <tr>
            <th>Station</th>
            <th>Scheduled Time</th>
            <th>Estimated Time</th>
            <th>Arrival Time</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item) => (
            <tr key={item.station}>
              <td>{item.station}</td>
              <td>{item.sched_tm}</td>
              <td>{item.est_tm}</td>
              <td>{item.act_tm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
