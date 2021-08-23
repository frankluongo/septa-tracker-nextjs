import Link from 'next/link';
import { TrainInterface } from '#common/interfaces';

import css from '#styles/components/TrainsList.module.css';

const Train = ({ train }: { train: TrainInterface }) => {
  return (
    <article className={css.Train}>
      <header className={css.TrainHeader}>
        <h3 className={css.TrainHeaderName}>{train.line}</h3>
        <small className={css.TrainHeaderNo}>
          <strong className={css.TrainHeaderNoLabel}>Train</strong>
          {train.trainno}
        </small>
      </header>
      <section className={css.TrainDetails}>
        <strong>Service</strong>: {train.service}
      </section>
      <footer className={css.TrainFooter}>
        <Link href={`/regional-rail/${train.trainno}`}>
          <a className="button default filled-in">View Schedule</a>
        </Link>
      </footer>
    </article>
  );
};

export const TrainsList = ({ trains }: { trains: [TrainInterface] | [] }) => {
  return (
    <section className={css.TrainList}>
      {trains.map((train) => (
        <Train train={train} key={train?.trainno} />
      ))}
    </section>
  );
};
