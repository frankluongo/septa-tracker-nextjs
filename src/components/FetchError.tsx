import css from '#styles/components/FetchError.module.css';

export const FetchError = ({ error }: { error?: string }) => {
  return (
    <section className={css.FetchError}>
      <p className={css.FetchErrorText}>{error}</p>
    </section>
  );
};
