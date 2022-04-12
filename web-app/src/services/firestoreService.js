import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import "firebase/auth"
// var cors = require('cors');    

const firebaseConfig = {
    "type": "service_account",
    "projectId": "onewheelnews-1ca02",
    "private_key_id": "3be615b405d6799eca05cd83e7cca205a429fe9f",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCPV839tANNmqVZ\nj1kIeT1TH2Qybks1umKS3zmSoS6QtCrixLg5yO1zbgGlgpFer54RUXFSuDVSr1a6\nQzvaYQnYuBVQdyVlEGJDn6Fjl/ZHyfyd0sz1JZAis4UFJPD+WBv5kjLLgp1MhEMc\nJPi1SqzHiGws3ptmu6CCFn4bk5aePtmNQcDQ8Biz/RoiC2NchhmW+kiOKW7dwgTx\n8trFwGs9T/GxdUEMxlY9AAWc4ZoOBt+apnOptAC/ZrmEG+gj+z2LzkNx8rYOlz+E\nlrn2DBjmUxreqgi/UpKKNDloUuNJajHSLDnYijgMR7LOvk1YYustslMSCyrouIEc\nLOsXtJpRAgMBAAECggEAFp0Qhzy15LFH8qgVsKuHzCxAn2AdB13fHTKQH5zD/tod\nhebo9VzIcRRiuBywGFL2Sd8iVJ1w9BlrQjlHIP18Ey9/VVFmmdoK1oZBbLfVh5/K\n9Y8C/I2vfnn5u0UHq+h0iVvSHZ7+d8rJ14/RmLAuL9BK2I1J0Nw6xysLPAh9k3s0\nUZ2yynuR1QghQyvFmI+fjKIFnXdIXGD2ux6bKo1V1v08qDZ4CypkJnmRNFfkAtvf\n9C4oxPxMknEEMU7J51QKDXkAorfjLJ8EaOV9aeb5c6TYayEfcaCTXYJdPE8utc0a\nqJnUvAXPci+yGRqG2Q1MKakS+EAvn9B8GEZbNUaVrQKBgQDH+hNwaZBjJhEO6bkl\nFzd7QvZj/kMa+wohY9ROTMBC4vBcPZ1vKy8W48qGEfUlYavDWV3a/xhFI1d4GTqX\nU3o9mefa3Q6gsN5bP4esrIZGJ4wlST1rmYMlR66Q0HQgirUvPhkzq+r19gOdu1dA\nUoRSOPPMyFWLkBqMLsGstm+KRwKBgQC3gBC3DoxxnwH/zEPc9AmO8gxOJ2/tPIqy\ns00qd1qfiub7zUAhRdX1UUrmOib00M5s2XWjHKEXk7NgwaRM3+gLRcmiTjYRilYL\n6eSHvlVupcL4p5XNI9Q0rgO+9c00eIpDCaAmvPaHGEr1b8svGp2FchnzLVR3Atfy\nx3l4FNBqpwKBgDmY8ZhjD08/W5JsBwOD2FsMQmMyjKlsvNI5KqESwh2Bt7EZngqy\n6XEyUtaivXTy2MH/L2UwLBFdyIey3IlRZdfwSDNlkB0AVEr71VwKpPH32gmzOpmP\nMZK/Pqw/HfNxgBYHUMLtNVN6dDguCUdhfPMhrDbDTMBR1ROjM+1G7oFpAoGBAKmb\nXlfEw701amSjycoNalRMl2EZhJOzlMNNhTKONR4oBg2RjgfzA6sGo4MfFujLozDq\n4peMG72uEGuLMDC5+EGLFK7HOaSGx7elTUzGeTKXVhn81DJTPo4elWnIyg4IqEsE\nN5n2qKr/ojEvTo9QO26foyqoqFyELVPCWhzKqEUbAoGAJjUvrMTp0phH0V1zG38Y\n5nRgt9YITc9AhbUqFPbWvBtnEmXE4MMKWAUBQ17Lnbw+mHTdU/mVyuvlXLKSUw5U\nqV3aUFCGPatG6RjM4ZwPiyhQRXQ5ASQwzcaXLGSp8l/3ZCLsScOc6NQGtkuAYbiw\nf0xwQuDJ2gu/7YiWjghnLPQ=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-c6ijk@onewheelnews-1ca02.iam.gserviceaccount.com",
    "client_id": "109764414586951192771",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-c6ijk%40onewheelnews-1ca02.iam.gserviceaccount.com"
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
    .collection('riders')
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

export const addLikeToArticle  =  async articleId  =>  {
  const addLikeToArticle = firebase.functions().httpsCallable('addLikeToArticle');
  await addLikeToArticle(articleId);
}

export const addLikeToInterview = async interviewId => {
  const addLikeToInterview = firebase.functions().httpsCallable('addLikeToInterview');
  await addLikeToInterview(interviewId);
}
