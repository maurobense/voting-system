(function () {

    let playerId;
    let playerRef;
    firebase.auth().onAuthStateChanged((user) => {

        if (user) {
            //Logged in!
            playerId = user.uid;
            playerRef = firebase.database().ref(`players/${playerId}`);

            playerRef.set({
                id: playerId,
                name: "SOME",
                color: "red"
            })
            //Remove player when disconnected.
            console.log(user)
            playerRef.onDisconnect().remove();

        } else {
            //Logged out!

        }

        firebase.database().ref('competidores').on('value', (snap) => {
            console.log(snap.val());
        });
    })

    firebase.auth().signInAnonymously().catch(e => {
        let errorCode = e.code;
        let errorMessage = error.message;

        console.log(errorCode, errorMessage);
    });
})();