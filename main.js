const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");
  const navLinkItems = document.querySelectorAll(".nav-links a");

  // Toggle menu when hamburger is clicked
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Optional: Change icon between bars and X
    const icon = navToggle.querySelector(".nav-icon");
    if (icon) {
      icon.innerHTML = navLinks.classList.contains("show") ? "&times;" : "&#9776;";
    }
  });

  // Hide menu when a link is clicked
  navLinkItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");

      // Reset icon to hamburger
      const icon = navToggle.querySelector(".nav-icon");
      if (icon) icon.innerHTML = "&#9776;";
    });
  });



// Change the header Background on scroll.
const nav = document.getElementsByClassName("site-header")[0];

window.addEventListener('scroll', () => {
    nav.classList.toString()
});


window.addEventListener('scroll', () => {
    nav.classList.toggle('window-scroll', window.scrollY > 10);
});


// Project Tabs

const projectTab = document.querySelectorAll('[role="tab"]');
const projectPanel = document.querySelectorAll('[role="tabpanel"]');

projectTab.forEach(tab => {
  tab.addEventListener('click', () => {

    //Deactivates All Tab
    projectTab.forEach(t => {
      t.setAttribute('aria-selected', 'false');
      t.classList.remove('active-tab');
    });

    //Hide All Panel
    projectPanel.forEach(panel => panel.classList.remove('active-panel'));

    //Activate Clicked tab
    tab.setAttribute('aria-selected', 'true');
    tab.classList.add('active-tab');

    //Activate Clicked Panel
    const panelID = tab.getAttribute('aria-controls');
    document.getElementById(panelID).classList.add('active-panel');
  });
});