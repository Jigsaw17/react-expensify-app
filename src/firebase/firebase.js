import * as firebase from 'firebase';

  // Your web app's Firebase configuration
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

   
  googleAuthProvider.setCustomParameters({
    prompt: 'select_account'
  })
  
  export  { firebase, googleAuthProvider, database as default };
  






// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// // child_added

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })




///////<===== parse data =>////////////////////

// database.ref('expenses')
//    .once('value')
//    .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//           ...childSnapshot.val()
//       });
//     });
//       console.log(expenses)
//    });


// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//           ...childSnapshot.val()
//       });
//     });
//       console.log(expenses)
// })








// database.ref('expenses').push({
//   description: 'PS5',
//   note: 'Buy on Dec',
//   amount: 20000 ,
//   createdAt: 31000
// });


  //   database.ref().set({
  //   name: 'JigsSaW Alina',
  //   age: 27,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software developer',
  //     company: 'Google'
  //   },
  //   location: {
  //     city: 'Valenzuela',
  //     country: 'UN'
  //   }
  // }).then(() => {
  //   console.log('Data is saved')
  // }).catch((e) => {
  //   console.log('Jigs failed', e)
  // })
  

// ================>>>>>>>>>> fetch Data <====================== //
// ******* on , once , off *************

  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
  // });

  // setTimeout(() => {
  //   database.ref('name').set('JigsSaW Alina')
  // }, 3000);


  // database.ref('location/city')
  //    .once('value')
  //    .then((snapshot) => {
  //       const val = snapshot.val()
  //       console.log(val);
  //    }).catch((e) => {
  //       console.log('Error fetching data', e)
  //    })




// =>>>> update <====//

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });



// =>>>> Remove <<<<= //

//   database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.")
// }).catch((e) => {
//     console.log("Remove failed: ", e)
// })

// >======= reference ===========<

// database.ref('age').set('26')
// database.ref('location/city').set('New York')
// database.ref('attributes').set({
//   height: 165,
//   weight: 70
// })

