const FOO = 42;
class Bar {
    constructor(baz) {
        this.baz = baz;
    }

    log() {
        console.log(this.baz);
    }
}

export { FOO, Bar }
