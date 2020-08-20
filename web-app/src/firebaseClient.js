// import firebase from 'firebase';

// let db;

// const data = {};

// const setup = () => {
// 	if (!firebase.apps.length) {
// 		firebase.initializeApp({
// 			apiKey: "AIzaSyBJNjzH9tWs-JbTEwPv8drNxu33kEwidnM",
// 			authDomain: "onewheelnews.firebaseapp.com",
// 			databaseURL: "https://onewheelnews.firebaseio.com",
// 			projectId: "onewheelnews",
// 			storageBucket: "onewheelnews.appspot.com",
// 			messagingSenderId: "828691903330",
// 			appId: "1:828691903330:web:f142486a957cc7520ff23b",
// 			measurementId: "G-SZ8LJV3VJP"
// 		});
// 		db = firebase.firestore();
// 	}
// };

// const getCollection = async collectionName => {
// 	const collection = db.collection(collectionName);
// 	const snapshot = await collection.get();
// 	const data = snapshot.docs.map(doc => doc.data());
// 	return data;
// };

// const loadDatabase = async () => {
// 	if (!data.articles) data.articles = await getCollection('articles');
// 	if (!data.riderInterviews) data.riderInterviews = await getCollection('riderInterviews');
// 	return data;
// };

// export default {
// 	setup, loadDatabase
// };