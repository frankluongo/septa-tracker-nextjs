import type { GetServerSideProps } from 'next';
import { DataError } from '#components/DataError';
import { TrainSchedule } from '#components/TrainSchedule';

interface TrainPageInterface {
  data: {
    error?: string;
  };
  error?: {
    message?: string;
  };
}

const Train = ({ data, error }: TrainPageInterface) => {
  if (data?.error) return <DataError error={data?.error} />;

  return <TrainSchedule schedule={data} />;

  return <div>lets get that train</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const train = context?.params?.train || '';
  try {
    const res = await fetch(
      `http://www3.septa.org/hackathon/RRSchedules/${train}`
    );
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    return { props: { error } };
  }
};

export default Train;
