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
  nav.classList.toggle('window-scroll', window.scrollY > 0);
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

// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Get the modal, iframe, and close button elements
  const modal = document.getElementById("caseStudyModal");
  const frame = document.getElementById("caseStudyFrame");
  const closeBtn = document.querySelector(".iframe-close-btn");
  
  // Object mapping case study IDs to their respective URLs
  const caseStudyLinks = {
    portfolio1: "https://www.w3schools.com",
    landing1: "https://codecraftbymustee.vercel.app/",
    businessX: "https://google.com",
  };
  
  // Select all buttons with class 'btn-case-study' and add click event listeners
  document.querySelectorAll(".btn-case-study").forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default button action
      const id = button.dataset.id; // Get the data-id attribute of the clicked button
      const url = caseStudyLinks[id]; // Get the URL corresponding to the data-id
      
      if (!url) {
        console.log("Invalid case study ID:", id); // Log error if ID is invalid
        return; // Exit function if no URL is found
      }
      
      frame.src = url; // Set the iframe source to the selected URL
      frame.style.backgroundImage = "url('images/frame-loader.gif')"; // Set loading background
      
      modal.classList.remove("hidden"); // Remove hidden class to show modal
      modal.classList.add("show"); // Add show class to display modal
      
      // Remove the background image after 10 seconds
      setTimeout(() => {
        frame.style.backgroundImage = "none";
      }, 7000); // 7,000ms = 7s
    });
  });
  
  // Add click event to close button to trigger closeCaseStudy
  closeBtn.addEventListener("click", closeCaseStudy);
  
  // Add click event to modal to close if click is outside content
  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".modal-content")) closeCaseStudy();
  });
  
  // Add keydown event to close modal with Escape key
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCaseStudy();
  });
  
  // Function to close the modal and clear the iframe
  function closeCaseStudy() {
    modal.classList.remove("show"); // Remove show class to hide modal
    
    setTimeout(() => {
      frame.src = ""; // Clear iframe source after 300ms delay
    }, 300);
    
    frame.style.backgroundImage = "url('images/frame-loader.gif')"; // Reset background image
  }
});

//clear form after submit
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function () {
  setTimeout(() => {
    form.reset();
  }, 1000);
});