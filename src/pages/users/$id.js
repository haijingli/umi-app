import styles from './$id.css';
// 动态路由,带 $ 前缀的目录或文件为动态路由。
export default function(props) {
  return (
    <div className={styles.normal}>
      <h1>Page user</h1>
      <h1>{props.match.params.id}</h1>
    </div>
  );
}