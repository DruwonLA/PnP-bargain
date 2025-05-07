document.addEventListener('DOMContentLoaded', function() {
  // Data Arrays
  const galleryItems = [
    { id: 1, title: " ", image: "images/img1.jpg" },
    { id: 2, title: " ", image: "images/img2.jpg" },
    { id: 3, title: " ", image: "images/img3.jpg" },
    { id: 4, title: " ", image: "images/img4.jpg" },
    { id: 5, title: " ", image: "images/img5.jpg" }
  ];

  const processSteps = [
    { id: 1, title: "Mindmap & Research", description: "", image: "images/Mindmap&Research.JPG" },
    { id: 2, title: "Idea 1", description: "", image: "images/Idea1.JPG" },
    { id: 3, title: "Idea 2", description: "", image: "images/Idea2.JPG" },
    { id: 4, title: "Idea 3", description: "", image: "images/Idea3.JPG" },
    { id: 5, title: "Pose Board", description: "", image: "images/Pose Board.JPG" },
    { id: 6, title: "Style Board", description: "", image: "images/Style Board.png" },
    { id: 7, title: "Mood Board 1", description: "", image: "images/Mood Board1.JPG " },
    { id: 8, title: "Mood Board 2", description: "", image: "images/Mood Board2.JPG " },
    { id: 9, title: "Mockups", description: "", image: "images/Mockups.JPG" },
    { id: 10, title: "Final Sale Watching", description: "", image: "images/Final Sale Watching.JPG" },
    { id: 11, title: "Progress", description: "", image: "images/Progress.JPG" },
    { id: 12, title: "Final Draft", description: "", image: "images/Final.JPG" },
  ];

  const teamMembers = [
    { id: 1, name: "Jordan Ruedolf", role: "Designer in Visual Communication Design", image: "images/Jordan.jpg", bio: "I’m a second-year student, I study visual communication Design also known as graphic design. I enjoy designing and creating art pieces. I’m one of the learners, whose design was chosen for the topic bargain. My role in this project is to share my concept of my design for the other learners to base/include there ideas around it. I also had to refine my final work to make it look better or fix up any errors. " },
    { id: 2, name: "Druwon Lashawa", role: "ICT: Multimedia Applications Specialist", image: "images/Druwon.jpg", bio: "I am a third-year IT student specializing in Multimedia, where I develop web designs, digital content creation, and interactive media. My coursework has given me hands-on experience in building responsive websites, crafting engaging user experiences, and working with modern web technologies. My role in this project was to create a multimedia product, by combining all the existing documents and information from the other students, to present to a bigger audience." },
    { id: 3, name: "Mihlee Ndevu", role: "Stylist", image: "images/Mihlee.jpg", bio: "I’m a third 3 year student and a fashion enthusiast. I love exploring nuances of cultures, especially my South African and Ghanaian heritage. I enjoy connecting with others and learning new things every day. For this project, my responsibility was to style the fashion shoot. The goal was not to reinvent PNP through styling but rather to elevate despite us working with bargain, we wanted everything to look expensive and exclusive" },
    { id: 4, name: "Moesfeeka Johnson", role: "Photographer", image: "images/Moesfeeka.jpg", bio: "I'm doing my advanced diploma in Photography. I like exploring and meeting new people. I'm quite the social butterfly.I was the photographer for the PNP project where I had to take pictures of the models after the fashion student styled them. Working on this project was very fun. It was exciting to work with other creatives and also watching them do their part was extremely educational." },
    { id: 5, name: "Haroon Jacobs", role: "Film Production", image: "images/Haroon.jpg", bio: "I'm an aspiring  film student that wants to capture the world with my camera to show others the beauty that comes with film but I'm currently a third year student studying film production so my role was to cover behind the scenes footage of what happened from the planning up to the day we were shooting an at the end i sat with the footage analysing it all to come up with the perfect video to represent the process of everything." },
    { id: 6, name: "Joel Japhta", role: "Designer in Visual Communication Design", image: "images/Joel.jpg", bio: "I am a Visual Communication Design student, and I came up with one of the two the concepts used in this project. I was tasked to create an art piece that represents South Africa, and somehow incorporate that into Pick n Pay. I came up with the idea of seeing PnP as this giant corporate whale, that dishes out sales for everyone in South Africa to use to their advantage and enjoy." },
  ];

  // Image Modal System
  const createImageModal = () => {
    const modal = document.createElement('div');
    modal.className = 'process-modal';
    modal.innerHTML = `
      <div class="modal-container">
        <span class="close-modal">&times;</span>
        <img class="modal-image" id="expandedImage">
        <div class="modal-caption">
          <h3 id="expandedTitle"></h3>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    return modal;
  };

  const modal = createImageModal();
  const expandedImage = document.getElementById('expandedImage');
  const expandedTitle = document.getElementById('expandedTitle');
  const closeModal = document.querySelector('.close-modal');

  const modalFunctions = {
    open: (src, title) => {
      expandedImage.src = src;
      expandedTitle.textContent = title;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    },
    close: () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };

  closeModal.addEventListener('click', modalFunctions.close);
  modal.addEventListener('click', (e) => e.target === modal && modalFunctions.close());
  document.addEventListener('keydown', (e) => e.key === 'Escape' && modalFunctions.close());

  // Process Cards Creation
  const createProcessCards = () => {
    const processContainer = document.querySelector('.process-steps');
    
    processSteps.forEach(step => {
      const processCard = document.createElement('div');
      processCard.className = 'process-card fade-in';
      processCard.innerHTML = `
        <img src="${step.image}" alt="${step.title}" loading="lazy">
        <div class="p-3">
          <h5>${step.title}</h5>
          <p>${step.description || "Click to enlarge"}</p>
        </div>
      `;
      
      processCard.addEventListener('click', () => modalFunctions.open(step.image, step.title));
      processContainer.appendChild(processCard);
    });
  };

  // Gallery Creation
  const createGallery = () => {
    const galleryContainer = document.querySelector('.gallery-grid');
    
    galleryItems.forEach(item => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item fade-in';
      galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="gallery-caption">${item.title}</div>
      `;
      galleryContainer.appendChild(galleryItem);
    });
  };

// Team Members Creation with Hover Effect
const createTeamMembers = () => {
  const teamContainer = document.querySelector('.team-members');
  
  teamMembers.forEach((member, index) => {
    const memberCard = document.createElement('div');
    memberCard.className = 'profile-card';
    memberCard.style.setProperty('--delay', `${index * 0.1}s`);
    
    memberCard.innerHTML = `
      <div class="profile-image-container">
        <img src="${member.image}" alt="${member.name}" class="profile-image" loading="lazy">
        <div class="profile-accent-bar"></div>
      </div>
      <div class="profile-content">
        <h3 class="profile-name">${member.name}</h3>
        <p class="profile-role">${member.role}</p>
        <p class="profile-bio">${member.bio}</p>
      </div>
    `;

    // Add subtle hover animation
    memberCard.addEventListener('mousemove', (e) => {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      memberCard.style.transform = `perspective(1000px) rotateX(${(y - 150) / 20}deg) rotateY(${(x - 150) / 20}deg) translateY(-5px)`;
    });
    
    memberCard.addEventListener('mouseleave', () => {
      memberCard.style.transform = '';
    });

    teamContainer.appendChild(memberCard);
  });
};

document.addEventListener('DOMContentLoaded', createTeamMembers);
  // Video Initialization
  const initVideo = () => {
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
      heroVideo.setAttribute('playsinline', '');
      heroVideo.setAttribute('muted', '');
      heroVideo.setAttribute('autoplay', '');
      heroVideo.setAttribute('loop', '');
      
      // Fallback for autoplay restrictions
      const playPromise = heroVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log('Video autoplay was prevented');
        });
      }
    }
  };

  // Smooth Scrolling
  const initSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // Initialize all components
  createProcessCards();
  createGallery();
  createTeamMembers();
  initVideo();
  initSmoothScrolling();
});

function initFinalVideo() {
  const videoCard = document.querySelector('.video-card');
  const finalVideo = document.querySelector('.final-video');
  
  // Intersection Observer for scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  if (videoCard) {
    observer.observe(videoCard);
  }

  // Video initialization
  if (finalVideo) {
    finalVideo.setAttribute('playsinline', '');
    finalVideo.setAttribute('controls', '');
    const playPromise = finalVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log('Autoplay prevented, showing controls');
      });
    }
  }
}
initFinalVideo();

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Helper functions 
function getRoleColor(role) {
  const roleColors = {
    'designer': '#FFC72C',
    'stylist': '#D4002F',
    'photographer': '#005692',
    'developer': '#005692',
    'film': '#4A4A4A'
  };
  
  const lowerRole = role.toLowerCase();
  for (const [key, value] of Object.entries(roleColors)) {
    if (lowerRole.includes(key)) return value;
  }
  return '#005692'; 
}

function truncateBio(bio, length) {
  return bio.length > length ? bio.substring(0, length) + '...' : bio;
}
 document.addEventListener('DOMContentLoaded', function() {
  const welcomeText = document.querySelector('.welcome-text');
  
  // Make the welcome message disappear after 3 seconds
  setTimeout(() => {
    welcomeText.classList.add('fade-out');
    setTimeout(() => {
      welcomeText.style.display = 'none';
    }, 800);
  }, 3000);
});