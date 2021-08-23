import css from '#styles/components/Error.module.css';

export const Error = ({ error }: { error?: string }) => {
  return (
    <section className={css.Error}>
      <p className={css.ErrorText}>{error}</p>
    </section>
  );
};
