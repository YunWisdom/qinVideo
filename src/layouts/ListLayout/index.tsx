import React, { FC, ReactNode } from "react";
import styles from "./index.less";

interface PropsType {
  options: ReactNode;
  search: ReactNode;
  setting: ReactNode;
  children: ReactNode;
}

export const ListLayout: FC<PropsType> = props => {
  const { options, search, setting, children } = props;

  return (
    <main className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.options}>{options}</div>
        <div className={styles.search}>
          {search}
          <span className={styles.setting}>{setting}</span>
        </div>
      </div>
      <div className={styles.table}>{children}</div>
    </main>
  );
};
