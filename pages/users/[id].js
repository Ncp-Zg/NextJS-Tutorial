import React from 'react';
import {URL} from "../../environment/index"

const PostDetails = ({user}) => {
  return (
  <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
  </div>
  );
};


export default PostDetails;

// export const getServerSideProps = async(context)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//     const post = await res.json();

//     return {
//         props: {
//             post,
//         }
//     }
// }


export const getStaticPaths = async () => {
    const res = await fetch(`${URL}/api/users`);

    const users = await res.json();

    const paths = users.map(usr => {
        return {params : {id:usr.id.toString()}}
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ( context) => {

    const res = await fetch(`${URL}/api/users/${context.params.id}`);

    const user = await res.json();

    return {
        props: {
            user
        }
    }
}