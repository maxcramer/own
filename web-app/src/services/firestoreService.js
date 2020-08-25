import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
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


export const getPostList = async () => {
  const { docs } = await db
    .collection('articles')
    .orderBy('date', 'desc')
    .get();
    const posts = docs.map(doc => {
      return {
        ...doc.data(),
        _id: doc.id
      }
    })
  return posts;
};

export const getRiderList = async () => {
  const { docs } = await db
    .collection('riderInterviews')
    .orderBy('date', 'desc')
    .get();
    const interviews = docs.map(doc => {
      return {
        ...doc.data(),
        _id: doc.id
      }
    })
    return interviews
};


// export const getRiderList = async () => {
//   const { docs } = await db
//       .collection('riderInterviews')
//       .orderBy('date', 'desc')
//       .get()
//   const riderInterviews = docs.map(doc => {
//     return {
//       ...doc.data(),
//       _id: doc.id
//     }
//   })
//   return riderInterviews
// };

export const addLikeToArticle = async articleId => {
  const addLikeToArticle = firebase.functions().httpsCallable('addLikeToArticle');
  await addLikeToArticle(articleId);
}

export const addLikeToInterview = async interviewID => {
  const addLikeToInterview = firebase.functions().httpsCallable('addLikeToInterivew');
  await addLikeToInterview(interviewID);
}
