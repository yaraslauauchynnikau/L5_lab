const Status = Object.freeze(
    {
        PENDING: Symbol("Pending"),
        ACCEPTED: Symbol("Accepted"),
        RECIEVED: Symbol("Recieved"),
        CLOSED: Symbaol("Closed")
    });

class Order {
    #pay;

    constructor(status = Status.PENDING, pay = 1337, items) {
        this.status = status;
        this.pay = pay;
        this.itemList = [...items];
    }

    get pay() {
        return this.#pay;
    }


    get itemList() {
        return this._itemList;
    }

    set itemList(items) {
        this._itemList = [...items];
    }

    
    get status() {
        return this._status;
    }

    set status(value) {
        const allowed = Object.values(Status);

        if (!allowed.includes(value)) {
            throw new Error(`No-no-no mister fish, you will come back to your ${value}, you won't come to my {status}`);
        }

        this._status = value;
    }

    show() {
        console.log(
            {
                status: this.status,
                pay: this.pay,
                items: this.itemList
            });
    }

    delete() {
        Object.freeze(this);
    }

    copy() {
        return this;
    }

    #payForOrder() {
        this.pay = 0;
    }

    pay() {
        this.#payForOrder();
    }

    static clone(order) {
        cloned = new Order();
        cloned.status = order.status;
        cloned.pay = other.pay;
        cloned.itemList = other.itemList;

        return cloned;
    }
}