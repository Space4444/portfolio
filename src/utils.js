function waitFor(f, time=200) {
    return new Promise( (res, rej) => {
        const r = f();
        if (r) {
            res(r);
        } else {
            setTimeout( () => res( waitFor(f, time) ), time);
        }
    });
}


export {
    waitFor
}
