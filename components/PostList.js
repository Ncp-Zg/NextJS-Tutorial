import React from 'react';
import Post from './Post';

const PostList = ({post}) => {
  return (
    
    <div>
        {post.map(post=>(
            <div className='grid' key={post.id}>
              <Post post={post}/>
            </div>
          ))}

          <style jsx>
              {`
                .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    max-width: 800px;
                  }
              `}
          </style>

    </div>
  
    );
};

export default PostList;
