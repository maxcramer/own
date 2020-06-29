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
      console.log("these are the posts", posts);
    return posts;
    };


