import React from 'react';
// link to - 
const PostsItem = (props) => {
  console.log(props)
  const { Title, Content, Author } = props.article
  console.log("this console log", props.article) 
  
  return (
              <div>
                <h3>{Title}</h3>
                <p>{Content}</p>
                <p>{Author}</p>
                <button onClick={props.onclick}>ReadMore</button>
              </div>

  );
}

export default PostsItem;