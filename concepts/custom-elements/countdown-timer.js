class CountdownTimer extends HTMLElement {

    static get observedAttributes() {
        return ['from'];
    }

    constructor() {
        super();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // when "from" attribute changes, timer is started
        if (name === 'from') this.start();
    }

    start() {
        let time = this.getAttribute('from');
        this.innerHTML = `Countdown: ${time}`;
        if (this.interval) {
            // stop previous countdown
            this.stop();
        }
        this.interval = setInterval(() => {
            if (time > 0) {
                this.innerHTML = `Countdown: ${--time}`;
            } else {
                this.stop();
            }
        }, 1000)
    }

    stop(){
        clearInterval(this.interval);
    }
}

customElements.define('countdown-timer', CountdownTimer);
