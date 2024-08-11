function openSidebar() {
    document.getElementById("mySidenav").style.width = "45%";
    document.getElementById("menuButton").style.display = "none";
    document.getElementById("closeButton").style.display = "block";
    document.getElementById("sideNavBarrier").style.display = "block";
  }
  
  function closeSidebar() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menuButton").style.display = "block";
    document.getElementById("closeButton").style.display = "none";
    document.getElementById("sideNavBarrier").style.display = "none";
  }