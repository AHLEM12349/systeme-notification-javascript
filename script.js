Notification.requestPermission(function() {
    if(Notification.permission == "granted") {
    } else {
      console.log("La permission a était refusée ou non définie ")
    }
  })
let notification = new Notification("Notification de AmicalWorld",{
body:"Cliquer, ici vous avez reçu un message ", 
icon:"Unknown.png", 
})

notification.onclick = function(){
    window.open('notification.html','_blank');
}; 
