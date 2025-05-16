function delayedCallback(e) {
    setTimeout(e, 2000);
}

delayedCallback(() => console.log('Delay')); // delay for after 2 seconds
