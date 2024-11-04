function guessFavNumber() {
    let FavoriteNumber = 31;
    let guess = prompt("Guess My Favorite Number");
    while (guess != FavoriteNumber) {
        if (guess < FavoriteNumber) {
           alert("Too Low")
        } else {
           alert("Too High")
        }
        enter = "prompt"("Guess My Favorite Number.");
    }
    alert("Correct");
}
