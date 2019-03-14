
import styles from './_layout.css';
// umi 里约定目录下有 _layout.js 时会生成嵌套路由，以 _layout.js 为该目录的 layout 。
export default function(props) {
  return (
    <div className={styles.normal}>
      <h1>Page _layout</h1>
      <h1>{props.children}</h1>
    </div>
  );
}
