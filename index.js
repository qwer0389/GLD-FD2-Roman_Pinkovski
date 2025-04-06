class Accordion {
    constructor(selector, options = { single: true }) {
        this.container = document.querySelector(selector);
        this.items = this.container.querySelectorAll('.accordion-item');
        this.single = options.single;
        this.init();
    }

    init() {
        this.items.forEach(item => {
            const header = item.querySelector('.accordion-header');
            header.addEventListener('click', () => this.toggleItem(item));
        });
    }

    toggleItem(item) {
        const isOpen = item.classList.contains('open');

        if (this.single) {
            this.closeAllItems();
        }

        if (!isOpen) {
            item.classList.add('open');
            const content = item.querySelector('.accordion-content');
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            item.classList.remove('open');
            const content = item.querySelector('.accordion-content');
            content.style.maxHeight = null;
        }
    }

    closeAllItems() {
        this.items.forEach(item => {
            item.classList.remove('open');
            const content = item.querySelector('.accordion-content');
            content.style.maxHeight = null;
        });
    }
}

// Пример использования:
document.addEventListener('DOMContentLoaded', () => {
    const accordion = new Accordion('.accordion-container', { single: true });
});