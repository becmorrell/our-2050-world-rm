function copyToClipboard() {
    navigator.clipboard.writeText("https://our2050.world");
    showSnackbar();
}

function showSnackbar() {   
    // Get the snackbar DIV
    var el = document.getElementById("snackbar");
    if(!el) return null
    
    // Add the "show" class to DIV
    el.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ el.className = el.className.replace("show", ""); }, 3000);
}