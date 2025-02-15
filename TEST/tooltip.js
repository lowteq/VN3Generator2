class TooltipIcon extends HTMLElement {
    constructor() {
        super();

        // Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Create container
        const container = document.createElement('div');
        container.classList.add('tltp-icon');

        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.classList.add('tltp-tooltip');
        tooltip.innerHTML = this.innerHTML; // Set tooltip content
        this.innerHTML = ''; // Clear the initial content to avoid display in the main icon

        // Add image to container
        const image = document.createElement('img');
        image.src = 'https://via.placeholder.com/50'; // Replace with your desired icon URL
        image.alt = 'Icon';
        image.style.width = '100%';
        image.style.height = '100%';

        // Append elements
        container.appendChild(image);
        container.appendChild(tooltip);
        shadow.appendChild(container);

        // Add styles for tooltip visibility
        const style = document.createElement('style');
        style.textContent = `
            .tltp-icon {
                position: relative;
                display: inline-block;
                width: 50px;
                height: 50px;
                cursor: pointer;
            }
            .tltp-tooltip {
                position: absolute;
                bottom: 60px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #333;
                color: white;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 14px;
                white-space: nowrap;
                visibility: hidden;
                opacity: 0;
                transition: opacity 0.3s;
            }
            .tltp-icon:hover .tltp-tooltip {
                visibility: visible;
                opacity: 1;
            }
            .tltp-tooltip::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-width: 6px;
                border-style: solid;
                border-color: #333 transparent transparent transparent;
            }
        `;
        shadow.appendChild(style);
    }
}

// Define the custom element
customElements.define('tooltip-icon', TooltipIcon);
