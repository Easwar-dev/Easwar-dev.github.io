document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Update Copyright Year
    const yearSpan = document.getElementById("year");
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. SMART MOBILE SCROLL
    // Only scroll down if we are on Mobile AND NOT on the Home Page
    if (window.innerWidth < 800) {
        
        // Get the current file name (e.g., "index.html", "cv.html")
        const path = window.location.pathname;
        
        // Check if we are on the Home Page
        // (Checks for "index.html" OR if the path is just "/" like easwar.me/)
        const isHomePage = path.endsWith("index.html") || path.endsWith("/");

        // If we are NOT on the home page, scroll to content
        if (!isHomePage) {
            const content = document.querySelector('article.page');
            if (content) {
                setTimeout(() => {
                    content.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        }
    }
    
    console.log("Smart navigation loaded.");
});