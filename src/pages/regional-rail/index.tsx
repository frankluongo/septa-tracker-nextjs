import type { GetServerSideProps } from 'next';
import { Error } from '#components/Error';
import { TrainsList } from '#components/TrainsList';
import { TrainInterface } from '#common/interfaces';

interface TrainPageInterface {
  trains: [] | [TrainInterface];
  error?: { message?: string };
}

const AllTrains = ({ trains, error }: TrainPageInterface) => {
  if (error) return <Error error={error?.message} />;
  return <TrainsList trains={trains} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch(`http://www3.septa.org/hackathon/TrainView/`);
    const data = await res.json();
    if (data?.error) return { props: { trains: [], error: data.error } };
    return { props: { trains: data || [] } };
  } catch (error) {
    return { props: { trains: [], error } };
  }
};

export default AllTrains;
