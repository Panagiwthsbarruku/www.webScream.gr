function handleChoice(choice) {
  if (choice === 'accept') {
    alert("Μπράβο! Ετοιμάσου για την περιπέτεια!");
    showContent(); // Εμφάνισε το περιεχόμενο
  } else if (choice === 'decline') {
    alert("Ουφ! Είναι καλύτερα να μην πάμε εκεί...");
    showContent(); // Εμφάνισε το περιεχόμενο
  }
  hideCard();
}
function hideCard() {
  const card = document.getElementById("horror-card");
  card.style.display = "none";
}
function showContent() {
  const content = document.getElementById("content");
  content.classList.remove("hidden");
}
//Μετά το πάτημα του sumbit//
 function showAlert(){
  alert("Ευχαριστώ για το σχόλιο! Υπενθύμηση:Να κρατάς τα παράθυρα κλειστά την νύχτα.ΧΑΧΑΧΑΧΑΧ")
}
