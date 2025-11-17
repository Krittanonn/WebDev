window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.services-section .fade-in');
    elements.forEach(el => {
        el.classList.add('show');
    });
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const fadeElements = document.querySelectorAll('.fade-in-package');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
        if(entry.isIntersecting){
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 800);
            obs.unobserve(entry.target);
        }
        
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

(function(){
      emailjs.init("Vjof-n5RjRIquAiUA");
  })();

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // ป้องกันหน้าเว็บรีเฟรช

        const subscribeInput = this.querySelector('input[name="subscribe"]');
        if (subscribeInput) {
            subscribeInput.value = subscribeInput.checked ? "Yes" : "No";
        }

        emailjs.sendForm('service_zg7s06f', 'template_5jlw5q2', this)
            .then(() => {
                alert("ส่งข้อความเรียบร้อย!");
                form.reset();
            })
            .catch(err => {
                console.error(err);
                alert("เกิดข้อผิดพลาด: " + err.text);
            });
    });
});
