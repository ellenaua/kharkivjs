class CountdownTimer extends HTMLElement {

    static get observedAttributes() {
        return ['from'];
    }

    constructor() {
        super();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'from') {
            this.start(newValue);
        }
    }

    start(from) {
        let time = from;
        this.innerHTML = `Countdown: ${time}`;
        this.interval = setInterval(() => {
            console.log('Tick')
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

    restart(){
        clearInterval(this.interval);
        this.start(this.getAttribute('from'));
    }
}

customElements.define('countdown-timer', CountdownTimer);
