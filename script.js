// Portfolio data with detailed information
const portfolioData = {
    1: {
        title: "وكالة التحقيق الفيدرالية",
        tags: ["تصميم", "شوت"],
        description: "حزمة FIB PACK تقدم تشكيلة ملابس احترافية مخصصة لوكالة التحقيق الفيدرالية داخل سيرفرات FiveM. تم تصميم الملابس بدقة عالية لتناسب أجواء الرول بلاي الواقعية، مع الاهتمام بأدق التفاصيل من حيث القصّات، الشعارات، وجودة الخامات.",
        details: [
            "ملابس رسمية وميدانية لعناصر FIB",
            "سترات تكتيكية وبدلات خاصة",
            "تصاميم متوافقة مع QBCore فقط",
            "أداء ممتاز بدون التأثير على السيرفر"
        ],
        images: [
            "https://i.postimg.cc/nrPrZjnf/FIB1.png", //1
            "https://i.postimg.cc/L5X5rBFF/FIB2.png", //2
            "https://i.postimg.cc/j2F2KwtB/FIB3.png", //3
            "https://i.postimg.cc/1XjXPnyS/FIB4.png", //4
            "https://i.postimg.cc/xj41XmVF/FIB5.png", //5
            "https://i.postimg.cc/BQPQHvqX/FIB6.png", //6
            "https://i.postimg.cc/wTRTLB6m/FIB7.png", //7
            "https://i.postimg.cc/J72zsXWh/FIB8.png", //8
            "https://i.postimg.cc/HkQYvP8y/FIB9.png"  //9
        ]
    },
    2: {
        title: "وحدة SSE العسكرية",
        tags: ["تصميم", "شوت"],
        description: "ملابس ومعدات الـ SSE (اختصار لـ SECRET SERVICE) التي تظهر في الصور تعكس تجهيزات قوات المهام الخاصة التي تعمل في بيئات عالية الخطورة. هذا النوع من اللباس لا يهدف فقط للتمويه، بل هو \"نظام عمل\" متكامل مصمم للسرعة والحماية.",
        details: [
            "النمط والتمويه (Pattern)",
            "الجزء العلوي (Combat Shirt & Headgear)",
            "التجهيزات التكتيكية (Load Bearing)"
        ],
        images: [
            "https://i.postimg.cc/gjFdKVc2/SSE1.png", //1
            "https://i.postimg.cc/QCGsqQNV/SSE2.png", //2
            "https://i.postimg.cc/L5KRVt4z/SSE3.png", //3
            "https://i.postimg.cc/8cQDbRkM/SSE4.png", //4
            "https://i.postimg.cc/MZVzpFtf/SSE5.png"  //5
        ]
    },
    3: {
        title: "ملابس حصرية لعصابة الـ BLOODS",
        tags: ["تصميم", "شوت"],
        description: "هذا الطقم صُمم ليكون \" هيبة تمشي على الأرض \". مخصص للسيرفرات اللي فيها \" حروب عصابات \" حقيقية. الفكرة هنا مو بس ألوان، الفكرة هي السيطرة البصرية. لما تدخل مكان بهذا الطقم، أنت ما تحتاج تتكلم.. ملابسك تقول \"أنا هنا، وأنا القائد\".",
        details: [
            "The Crown (القناع)",
            "The Statement (الصدر)",
            "The Masterpiece (الظهر)",
            "The Flow (التناسق)"
        ],
        images: [
            "https://i.postimg.cc/VLCHXx2s/BL1.png", //1
            "https://i.postimg.cc/wjFPBhS2/BL2.png", //2
            "https://i.postimg.cc/1Xx7dMN2/BL3.png", //3
            "https://i.postimg.cc/Y9Ly8Tj5/BL4.png"  //4
        ]
    },
    4: {
        title: "ملابس حصرية لعصابة الـ Vagos",
        tags: ["تصميم", "شوت"],
        description: "هذا الطقم صُمم ليمثل سطوة اللون الأصفر في الشوارع. مخصص لسيرفرات الـ Roleplay التي تبحث عن تميز بصري وهوية واضحة للعصابات اللاتينية. التصميم لا يعتمد فقط على الألوان، بل على التفاصيل التي تعطي انطباعاً بالقوة والولاء للعصابة.",
        details: [
            "The Crown (القناع)",
            "The Statement (الصدر)",
            "The Masterpiece (الظهر)",
            "The Flow (التناسق)"
        ],
        images: [
            "https://i.postimg.cc/cHG59XYs/V1.png", //1
            "https://i.postimg.cc/Wb1YHDD4/V2.png", //2
            "https://i.postimg.cc/3rBb1jw7/V3.png", //3
            "https://i.postimg.cc/hPtZ5JJ8/V4.png"  //4
        ]
    }
};


const modal = document.getElementById('portfolioModal');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');


document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        const itemId = this.dataset.id;
        const data = portfolioData[itemId];
        
        if (data) {
            
            document.getElementById('modalTitle').textContent = data.title;
            
            
            const modalTags = document.getElementById('modalTags');
            modalTags.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');
            
            
            document.getElementById('modalDescription').textContent = data.description;
            
            
            const modalDetails = document.getElementById('modalDetails');
            modalDetails.innerHTML = data.details.map(detail => `<li>${detail}</li>`).join('');
            
            
            updateModalImages(data.images);
            
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Update modal images
function updateModalImages(images) {
    const mainImage = document.getElementById('modalMainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Set main image
    mainImage.src = images[0];
    
    // Set thumbnails
    thumbnails.forEach((thumb, index) => {
        if (images[index]) {
            thumb.src = images[index];
            thumb.style.display = 'block';
        } else {
            thumb.style.display = 'none';
        }
    });
    
    // Set first thumbnail as active
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    if (thumbnails[0]) thumbnails[0].classList.add('active');
}

// Thumbnail click functionality
document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', function() {
        const mainImage = document.getElementById('modalMainImage');
        mainImage.src = this.src;
        
        // Update active thumbnail
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Modal action buttons
document.querySelector('.btn-primary')?.addEventListener('click', function() {
    const title = document.getElementById('modalTitle').textContent;
    showNotification(`تم إضافة "${title}" إلى قائمة الطلبات!`, 'success');
});

document.querySelector('.btn-secondary')?.addEventListener('click', function() {
    closeModal();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Portfolio item hover effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('يرجى ملء الحقول المطلوبة', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'جاري الإرسال...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً', 'success');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 500;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
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
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Lazy loading for images (if you add real images later)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Add typing effect to hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Copy contact information to clipboard
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        const text = this.querySelector('span').textContent;
        navigator.clipboard.writeText(text).then(() => {
            showNotification('تم نسخ النص: ' + text, 'success');
        }).catch(() => {
            showNotification('فشل نسخ النص', 'error');
        });
    });
});

// Add hover effect to contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.style.transition = 'background-color 0.3s ease';
    
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
        this.style.padding = '10px';
        this.style.borderRadius = '8px';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
        this.style.padding = '0';
        this.style.borderRadius = '0';
    });
});
