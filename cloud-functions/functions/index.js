const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// Not optimized for scale, can be improved according to: 
// https://firebase.google.com/docs/firestore/solutions/counters

exports.addLikeToArticle = functions.https.onCall(async (articleId, context) => {
    const articleRef = admin.firestore().collection('articles').doc(articleId);
    const articleSnapshot = await articleRef.get();
    const article = articleSnapshot.data();
    await articleRef.update({
        likes: article.likes + 1
    });
});

exports.addLikeToInterview = functions.https.onCall(async (interviewId, context) => {
    console.log('interviewId: ', interviewId);
    const interviewRef = admin.firestore().collection('riderInterviews').doc(interviewId);
    console.log('interviewRef: ', interviewRef);
    const interviewSnapShot = await interviewRef.get();
    console.log('interviewSnapShot: ', interviewSnapShot);
    const interview = interviewSnapShot.data();
    console.log('interview: ', interview);
    await interviewRef.update({
        likes: interview.likes + 1
    });
    console.log('Done!?');
});
