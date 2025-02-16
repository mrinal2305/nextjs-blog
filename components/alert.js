import styles from './alert.module.css';
import { clsx } from 'clsx';
import {useState} from 'react'
 
export default function Alert({ children, type }) {
  const [data, setData] = useState(4)
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
      {data}
    </div>
  );
}