import type { GetServerSideProps } from 'next';
import { Error } from '#components/Error';
import { TrainSchedule } from '#components/TrainSchedule';
import { TrainPageInterface } from '#common/interfaces';

const Train = ({ data, error }: TrainPageInterface) => {
  if (error) return <Error error={error} />;
  return <TrainSchedule schedule={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const train = context?.params?.train || '';
  try {
    const res = await fetch(
      `http://www3.septa.org/hackathon/RRSchedules/${train}`
    );
    const data = await res.json();
    if (data?.error) return { props: { error: data?.error } };
    return { props: { data } };
  } catch (error) {
    return { props: { error: error?.message || '' } };
  }
};

export default Train;
