import * as firebase from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom';

const ConnectedCounter = ({ count, setCount }) => (
  <div>
    <p>Count: {count || 0}</p>
    <button
      onClick={async () => {
        var db = firebase.firestore();
        let setDoc = db
          .collection('counts')
          .doc('likes')
          .set(count - 1);
      }}
    >
      Decrement
    </button>
    <button
      onClick={async () => {
        var db = firebase.firestore();
        let setDoc = db
          .collection('counts')
          .doc('likes')
          .set(count + 1);
      }}
    >
      Increment
    </button>
  </div>
);

// const ConnectedCounter = connect((props, ref) => ({
//   count: 'counterValue',
//   setCount: count => ref('counterValue').set(count)
// }))(Counter);

export default ConnectedCounter;

ReactDOM.render(<ConnectedCounter />, document.getElementById('root'));



// import * as firebase from 'firebase/app'
// import React from 'react';
// import ReactDOM from 'react-dom'



// firebase.initializeApp({
//   databaseURL: 'https://onewheelnews.firebaseio.com'
// });

// const { connect } = firebase;

// const Counter = ({ count, setCount }) => (
//   <div>
//     <p>Count: {count || 0}</p>
//     <button onClick={() => setCount(count - 1)}>Decrement</button>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//   </div>
// );

// const ConnectedCounter = connect((props, ref) => ({
//   count: 'counterValue',
//   setCount: count => ref('counterValue').set(count)
// }))(Counter);

// export default ConnectedCounter;

// ReactDOM.render(<ConnectedCounter />, document.getElementById('root'));

// import React from 'react';
// import * as firebase from 'firebase/app';
// import { connect } from 'firebase'

// import Like from '../../Images/Facebook-Like-PNG-HD.png';
// import './LikeButton.css';


// firebase.initializeApp({
//     databaseURL: 'https://onewheelnews.firebaseio.com'
// });
// const { connect } = reactFirebase;

// const Counter = ({ count, setCounter }) => (
//     <div>
//         <p>Count: { count || 0 }</p>
//         <button onClick={() => setCounter(count + 1)}>Increment</button>
//     </div>
// )

// const ConnectedCounter = connect((props, ref) => ({
//     count: 'counterValue',
//     setCount: count => ref('counterValue').set(count),
// }))(Counter)
    

// export default ConnectedCounter;
    // class Counter extends React.Component {
    // state = {
    //     count: 0
    // }

    // handleClick = () => {
    //     this.setState(prev => ({ count: prev.count + 1}));
    // }

    // render() {
    //     return (
    //         <div className="like_button_container">
    //             <button className="like_button" onClick={this.handleClick}>
    //                 <img className="like_button_img" src={Like} alt=""/>
    //             </button>
    //             <p>{this.state.count}</p>
    //         </div>
    //     );
    // }
// }

// export default Counter;