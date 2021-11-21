const firebaseConfig = {
    apiKey: "AIzaSyCAD8TD_gKaG46Czb3aGCwVLPtcyA3dRjI",
    authDomain: "eco-semana1.firebaseapp.com",
    projectId: "eco-semana1",
    storageBucket: "eco-semana1.appspot.com",
    messagingSenderId: "787058741779",
    appId: "1:787058741779:web:3bf459d7935b2ac8a365e6"
  };

export function getFirebaseConfig(){
    if(!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    }else{
        return firebaseConfig;
    }
  }