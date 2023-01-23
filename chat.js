var firebaseConfig = {
    apiKey: "AIzaSyCctPbdwvQxSEKnt8Ge-rqydR8OeF7FUAE",
    authDomain: "classtest-e34b7.firebaseapp.com",
    databaseURL: "https://classtest-e34b7-default-rtdb.firebaseio.com",
    projectId: "classtest-e34b7",
    storageBucket: "classtest-e34b7.appspot.com",
    messagingSenderId: "853588713260",
    appId: "1:853588713260:web:163e8149ab4adf584a5689"
};


firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name",user_name);
    window.location="chat_room.html"
}



