import Link from "next/link";
import Date from "../components/date";

export default function FirstPost() {
  return <h1>First Post</h1>;
}

<li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>;
