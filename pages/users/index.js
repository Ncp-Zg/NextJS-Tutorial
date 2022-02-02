import Head from 'next/head'
import Link from 'next/link';
import {URL} from "../../environment/index"

export default function Users({users}) {

    console.log(URL);
  return (
    <div>
      <Head>
        <title>Users</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {
            users?.map(usr => (
                <Link key={usr.id} href={`/users/${usr.id}`}>
                    <a>{usr.name}</a>
                </Link>
            ))
        }
      
    </div>
  )
}


export const getStaticProps = async () => {
    console.log(URL);
 const res = await fetch(`${URL}/api/users`);
const users = await res.json();

return {
  props:{
    users,
  }
}
}