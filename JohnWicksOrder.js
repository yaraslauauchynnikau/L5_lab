class JohnWicksOrder extends Order {
    #isForContinental;

    constructor(status, pay, items, isForContinental = false) {
        super(status, pay, items);
        this.isForContinental = isForContinental;
    }

    get isForContinental() {
        return this.#isForContinental;
    }

    set isForContinental(value) {
        this.#isForContinental = Boolean(value);
    }

    show() {
        super.show();
        console.log({
            isForContinental: this.isForContinental
        });
    }
}
