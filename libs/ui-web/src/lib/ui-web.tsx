import styles from './ui-web.module.css';

/* eslint-disable-next-line */
export interface UiWebProps {}

export function UiWeb(props: UiWebProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiWeb!</h1>
    </div>
  );
}

export default UiWeb;
