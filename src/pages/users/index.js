
import styles from './index.css';

import Link from 'umi/link'

import router from 'umi/router'

export default function () {
  const users = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'Jerry' }
  ]
  return (
    <div className={styles.normal}>
      <h1>Page Users List</h1>
      <ul>
        {
          users.map(user =>
            <li key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
              {user.name}
              {/* <Link to={`/users/${users.id}`}>{user.name}</Link> */}
            </li>
          )
        }
      </ul>
    </div>
  );
}
