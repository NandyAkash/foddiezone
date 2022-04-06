import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import './firebaseconfig';
const auth = getAuth();

const Register = async(name, email, password) => {
   await createUserWithEmailAndPassword(auth, email, password)
   await updateProfile(auth.currentUser,{displayName: name})
  
}




//Sign In
const Signin = ( email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  });
}

//Update Profile
const update = (name) => {
    updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
}
export {Register, Signin, update};