function pulseImage(logoID) {
    let increase = true;
    setInterval(() => {
        const newWidth = increase ? '400px' : '380px';
        document.querySelector(logoID).style.width = newWidth;
        increase = !increase;
    }, 500);
}

console.log('Loaded logo.js')
pulseImage('#logo');
