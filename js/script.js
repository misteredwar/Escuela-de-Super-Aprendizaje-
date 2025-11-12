document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de escuela de idiomas cargada correctamente');
    
    const idiomaCards = document.querySelectorAll('.idioma-card');
    
    idiomaCards.forEach(card => {
        card.addEventListener('click', function() {
            const idioma = this.querySelector('h3').textContent;
            alert(`¡Interesado en ${idioma}! Contáctanos para más información.`);
        });
    });
    
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const metodoItems = document.querySelectorAll('.metodo-item');
    
    metodoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    function actualizarReloj() {
        const ahora = new Date();
        const opciones = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        const fechaHora = ahora.toLocaleDateString('es-ES', opciones);
        
        const relojExistente = document.getElementById('reloj');
        if (relojExistente) {
            relojExistente.textContent = fechaHora;
        }
    }
    
    const footer = document.querySelector('footer .footer-content');
    if (footer) {
        const relojElement = document.createElement('div');
        relojElement.id = 'reloj';
        relojElement.style.marginTop = '1rem';
        relojElement.style.fontSize = '0.9rem';
        relojElement.style.color = '#ecf0f1';
        footer.appendChild(relojElement);
        
        actualizarReloj();
        setInterval(actualizarReloj, 60000);
    }
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255,255,255,0.98)';
            header.style.padding = '1rem 2rem';
        } else {
            header.style.background = 'rgba(255,255,255,0.95)';
            header.style.padding = '2rem';
        }
    });
    
    console.log('JavaScript de la escuela de idiomas activado');
});
