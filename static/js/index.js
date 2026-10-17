// Copy BibTeX to clipboard
function copyBibTeX() {
    const bibtexElement = document.getElementById('bibtex-code');
    const button = document.querySelector('.copy-bibtex-btn');
    const copyText = button.querySelector('.copy-text');

    function done() {
        button.classList.add('copied');
        copyText.textContent = 'Cop';
        setTimeout(function() {
            button.classList.remove('copied');
            copyText.textContent = 'Copy';
        }, 2000);
    }

    if (!bibtexElement) return;
    navigator.clipboard.writeText(bibtexElement.textContent).then(done).catch(function() {
        // Fallback for browsers without the async clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = bibtexElement.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        done();
    });
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

// Highlight the nav link of the section currently in view
function setupNavHighlight() {
    const links = Array.from(document.querySelectorAll('.hc-nav-links a'));
    const sections = links.map(function(a) { return document.querySelector(a.getAttribute('href')); });
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) return;
            links.forEach(function(a, i) { a.classList.toggle('is-current', sections[i] === entry.target); });
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function(s) { if (s) observer.observe(s); });
}

// Render LaTeX with KaTeX auto-render (loaded from CDN)
function renderMath() {
    if (typeof renderMathInElement !== 'function') return;
    renderMathInElement(document.body, {
        delimiters: [
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false
    });
}

// Tabs for the result tables (WAI-ARIA tabs pattern)
function setupTabs() {
    document.querySelectorAll('[data-tabbed]').forEach(function(box) {
        const tabs = Array.from(box.querySelectorAll('[role="tab"]'));

        function select(tab) {
            tabs.forEach(function(t) {
                const on = t === tab;
                t.classList.toggle('is-active', on);
                t.setAttribute('aria-selected', on ? 'true' : 'false');
                t.tabIndex = on ? 0 : -1;
                document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
            });
        }

        tabs.forEach(function(tab, i) {
            tab.addEventListener('click', function() { select(tab); });
            tab.addEventListener('keydown', function(e) {
                let next = null;
                if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
                if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
                if (e.key === 'Home') next = tabs[0];
                if (e.key === 'End') next = tabs[tabs.length - 1];
                if (next) {
                    e.preventDefault();
                    select(next);
                    next.focus();
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderMath();
    setupNavHighlight();
    setupTabs();
});
