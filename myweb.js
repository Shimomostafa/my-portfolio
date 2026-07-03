 var type = new Typed(".text", {
     strings: ['shimaa mostafa'],
     showCursor: false,
    typeSpeed: 150,
     backSpeed: 80,
    backDelay: 2000,
     loop: false
  });
    var tyoe  = new  Typed(".text2", {
     strings: ['front end developer'],
     showCursor: false,
    typeSpeed: 30,
     backSpeed: 100,
    backDelay: 1000,
     loop: false
    });
    var tyoe  = new  Typed(".text3", {
     strings: ['hello my name is<span style="color: #8549d4;"> shimaa mostafa</span> i\'m 19 years old and i\'m a front end developer<span style="color: silver;"> (beginner)'],
     showCursor: false,
    typeSpeed: 30,
     backSpeed: 100,
    backDelay: 1000,
     loop: false
    });
    var tyoe  = new  Typed(".text4", {
     strings: ['I am a Computer Science student, currently focusing on building a strong foundation in programming and logic.'],
     showCursor: false,
    typeSpeed: 30,
     backSpeed: 100,
    startDelay: 4000,
     loop: false
    });
    var tyoe  = new  Typed(".text5", {
     strings: ['I spend my time practicing problem-solving and exploring the basics of Data Structures to prepare for future challenges I have a strong interest in Software Engineering and AI.'],
     showCursor: false,
    typeSpeed: 30,
     backSpeed: 100,
    startDelay: 8000,
     loop: false
    });
    var tyoe  = new  Typed(".text6", {
     strings: ['My goal is to turn your ideas into responsive, user-friendly, and practical web interfaces that do more than just look great. I focus on creating websites that support your business goals, provide a seamless user experience, and reflect your brand professionally. I pay close attention to clean, maintainable code, well-organized layouts, and responsive design to ensure your website performs well across all devices .i am committed to understanding your project requirements, maintaining clear communication, and delivering high-quality work on time.'],
     showCursor: false,
    typeSpeed: 10,
     backSpeed: 100,
    startDelay: 10000,
     loop: false
    });

    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // أول ما السيكشن يظهر، ضيف كلاس show
            entry.target.classList.add('show');
        } else {
            // لو عاوزة الحركة تتكرر كل ما تطلعي وتنزيلي، شيلي الكومنت عن السطر اللي تحت
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.2 }); // هيشتغل لما يظهر 20% من السيكشن

// حددي العناصر اللي عاوزاها تتحرك
const hiddenElements = document.querySelectorAll('.skill-bar, .radial-bar, .education-main-container, .about-img img');
hiddenElements.forEach((el) => observer.observe(el));