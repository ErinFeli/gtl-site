// ===================================
// Navegação Mobile
// ===================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===================================
// Active Link na Navegação
// ===================================
const sections = document.querySelectorAll('section[id]');

function activateMenuAtCurrentSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateMenuAtCurrentSection);

// ===================================
// Header Scroll Effect
// ===================================
const header = document.querySelector('.header');
const whatsappFloat = document.querySelector('.whatsapp-float');
let lastScroll = 0;
let scrollTimeout;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
        header.style.padding = '0.875rem 0';
        header.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.classList.remove('scrolled');
        header.style.padding = '1.5rem 0';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    // Efeito de transparência no WhatsApp durante scroll
    if (whatsappFloat) {
        whatsappFloat.classList.add('scrolling');
        
        // Remove a transparência após parar de rolar
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            whatsappFloat.classList.remove('scrolling');
        }, 150);
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Animação de Contadores
// ===================================
const counters = document.querySelectorAll('.stat-number');
let animatedCounters = false;

function animateCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Observer para iniciar animação quando a seção estiver visível
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animatedCounters) {
                animateCounters();
                animatedCounters = true;
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// ===================================
// Animação de Entrada de Elementos
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elementos com animação de entrada
document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Animar cards ao aparecerem
document.querySelectorAll('.service-card, .stat-card, .feature-item').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Formulário de Contato
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Pegar dados do formulário
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            mensagem: document.getElementById('mensagem').value
        };
        
        // Criar mensagem para WhatsApp
        const whatsappMessage = `*Nova mensagem do site GTL*%0A%0A` +
            `*Nome:* ${formData.nome}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Telefone:* ${formData.telefone}%0A` +
            `*Mensagem:* ${formData.mensagem}`;
        
        // Redirecionar para WhatsApp
        window.open(`https://wa.me/5575998760620?text=${whatsappMessage}`, '_blank');
        
        // Limpar formulário
        contactForm.reset();
        
        // Mostrar mensagem de sucesso
        showNotification('Mensagem enviada! Você será redirecionado para o WhatsApp.', 'success');
    });
}

// ===================================
// Sistema de Notificações
// ===================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Adicionar estilos inline
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Adicionar CSS das notificações
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(notificationStyles);

// ===================================
// Carregamento de Imagens Lazy
// ===================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback para navegadores que não suportam lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Performance: Preload de Links Importantes
// ===================================
const importantLinks = document.querySelectorAll('a[href^="#"]');
importantLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
            const section = document.querySelector(href);
            if (section) {
                // Preload de imagens da seção
                const images = section.querySelectorAll('img');
                images.forEach(img => {
                    if (img.dataset.src && !img.src) {
                        img.src = img.dataset.src;
                    }
                });
            }
        }
    });
});

// ===================================
// Console Log de Boas-vindas
// ===================================
console.log('%c GTL Construções e Serviços ', 'background: #2563eb; color: white; font-size: 20px; padding: 10px;');
console.log('%c Site desenvolvido com ❤️ ', 'color: #f59e0b; font-size: 14px;');

// ===================================
// Debug Mode (apenas em desenvolvimento)
// ===================================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%c DEBUG MODE ATIVADO ', 'background: #ef4444; color: white; font-size: 12px; padding: 5px;');
    
    // Log de performance
    window.addEventListener('load', () => {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Tempo de carregamento da página: ${pageLoadTime}ms`);
    });
}