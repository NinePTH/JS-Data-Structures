function Queue() {
    this.Collection = []; // Array of queue elements

    this.print = function() {
        return this.Collection;
    }

    this.enqueue = function(value) {
        this.Collection.push(value);
    }

    this.dequeue = function() {
        return this.Collection.shift();
    }

    this.front = function() {
        return this.Collection[0];
    }

    this.size = function() {
        return this.Collection.length;
    }

    this.isEmpty = function() {
        return (this.Collection.length === 0);
    }
}

let myQueue = new Queue();
myQueue.enqueue("Nine");
myQueue.enqueue("Luna");
myQueue.enqueue("Bew");
console.log(myQueue.print());
console.log(myQueue.dequeue());
console.log(myQueue.print());
console.log(myQueue.dequeue());
console.log(myQueue.print());
console.log(myQueue.isEmpty());