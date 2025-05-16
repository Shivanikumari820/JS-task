function callbackToPromise(e) {
    return new Promise((resolve, reject) => {
        e(resolve, reject);
    });
}
