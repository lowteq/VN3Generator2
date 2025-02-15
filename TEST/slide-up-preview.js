class SlideUpPreview extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.classList.add('sup-container');

    container.innerHTML = `
      <div class="sup-header">
        <slot name="external-buttons"></slot> <!-- 開く/閉じるボタン用スロット -->
      </div>
      <div class="sup-content">
        <slot></slot>
      </div>
    `;

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'slide-up-preview.css');

    shadow.appendChild(link);
    shadow.appendChild(container);

    this._container = container;
  }

  /**
   * プレビューを開く関数
   */
  open() {
    this._container.classList.add('sup-open');
    this.dispatchEvent(new CustomEvent('opened'));
  }

  /**
   * プレビューを閉じる関数
   */
  close() {
    this._container.classList.remove('sup-open');
    this.dispatchEvent(new CustomEvent('closed'));
  }
}

customElements.define('slide-up-preview', SlideUpPreview);
