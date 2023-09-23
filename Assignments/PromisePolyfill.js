const STATE = {
    PENDING:'pending',
    FULLFILLED:'fullfilled',
    REJECTED:'rejected'
}

class MyPromise  {
    _state = STATE.PENDING;
    _value = null;
    _fullfilledCallbacks = [];
    _rejectedCallbacks = [];

constructor(executor) {
    try {
        executor(value =>this._resolve(value), value = this._reject(value));
    } catch (error) { this._reject(error); }

}

then(onFullfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
        this._fullfilledCallbacks.push(value => {
            try {
                resolve(onFullfilled(value));
            } catch (error) {
                reject(error);
            }
        });

        this._rejectedCallbacks.push(value => {
            try {
                reject(onRejected(value));
            } catch (error) {
                reject(error);
            }
        });

        switch (this._state) {
            case STATE.PENDING:
                this._fullfilledCallbacks.push(onFullfilled);
                this._rejectedCallbacks.push(onRejected);
                break;
            case STATE.FULLFILLED:
                onFullfilled(this._value);
                break;
            case STATE.REJECTED:
                onRejected(this._value);
                break;
        } 
    
    });
}

get state() {
    return this._state; 
}

get value() {
    return this._value;
}

_resolve(value) {
    if (this._state !== STATE.PENDING) return;
    this._state = STATE.FULLFILLED;
    this._value = value;
    this._fullfilledCallbacks.forEach(callback => callback(value));
}

_reject(value) {
    if (this._state !== STATE.PENDING) return;
    this._state = STATE.REJECTED;
    this._value = value;
    this._rejectedCallbacks.forEach(callback => callback(value));

}
}


const promiseValue = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
}).then(value => {
    console.log(value);
    return value + 1;
}).then(value => {
    console.log(value);
    return value + 1;
})

console.log(promiseValue);