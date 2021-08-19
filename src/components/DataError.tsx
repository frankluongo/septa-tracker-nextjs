import css from '#styles/components/DataError.module.css';

export const DataError = ({ error }: { error: string }) => {
  return (
    <section className={css.DataError}>
      <p className={css.DataErrorText}>{error}</p>
    </section>
  );
};
