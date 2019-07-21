import styles from './index.css';
import CommonLayout from '../components/layouts/CommonLayout'
function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <CommonLayout children={props.children} props={props}/>      
    </div>
  );
}

export default BasicLayout;
