// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC0mmxFM65kMt4wDKA9Ct2HucCahktNuuw",
  authDomain: "project-94-95d8f.firebaseapp.com",
  projectId: "project-94-95d8f",
  storageBucket: "project-94-95d8f.appspot.com",
  messagingSenderId: "953754977734",
  appId: "1:953754977734:web:e0b721eda33ee66bae1ec7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {

  user_name = document.getElementById("user_name").value;

 firebase.database().ref("/").child(username).update({
   purpose:"adding user"});
  
    //window.location = "kwitter_selectroom.html";
}

  