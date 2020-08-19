import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: 'AIzaSyBJNjzH9tWs-JbTEwPv8drNxu33kEwidnM',
  authDomain: 'onewheelnews.firebaseapp.com',
  databaseURL: 'https://onewheelnews.firebaseio.com',
  projectId: 'onewheelnews',
  storageBucket: 'onewheelnews.appspot.com',
  messagingSenderId: '828691903330',
  appId: '1:828691903330:web:f142486a957cc7520ff23b',
  measurementId: 'G-SZ8LJV3VJP'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()


export const createPostList = () => {
    return db.collection('articles')
        .add({
            created: firebase.firestore.FieldValue.serverTimestamp(),
        })
}

export const createRiderList = () => {
    return db.collection('riderInterviews')
    .add({
        created: firebase.firestore.FieldValue.serverTimestamp(),
    })
}

export const getPostList = async () => {
    const { docs } = await db
      .collection('articles')
      .orderBy('date', 'desc')
      .get();
      const posts = docs.map(doc => doc.data())
    return posts;
    };


export const getRiderList = async () => {
    const { docs } = await db
    .collection('riderInterviews')
    .orderBy('date', 'desc')
    .get()
    const riderInterviews = docs.map(doc => doc.data())
    console.log("These are the rider Interviews", riderInterviews);
    return riderInterviews
}

export const addLikeToPost = async postId => {
    console.log("button clicked")
}

// export const LikeButton = ({likes, setLikes}) => (
//     <div>
//       <button onClick={() => setLikes(likes +1 )}>
//         Like
//       </button>
//     </div>
//   );

// export const ConnectedLikes = ((props, ref) => ({
//     likes: 'likes',
//     setLikes: likes => ref('likes').set(likes + 1),
//   }))();


