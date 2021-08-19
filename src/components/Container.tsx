import React from 'react'

import css from "#styles/components/Container.module.css"

export const Container = ({ children }: any) => {
  return (
    <section className={css.Container}>
      {children}
    </section>
  )
}
