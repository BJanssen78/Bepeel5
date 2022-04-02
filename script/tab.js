function opentab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tabbutton;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tabbutton = document.getElementsByClassName("tabbutton");
    for (i = 0; i < tabbutton.length; i++) {
      tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }