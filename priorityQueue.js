// * Create a priority queue

function priorityQueue() {
    this.Collection = [];

    this.queue = function() {
        return this.Collection;
    }

    this.enqueue = function(value) {
        if (this.Collection.length === 0) {
            this.Collection.push(value);
            return;
        }
        for (let i = 0; i < this.Collection.length; i++) { // Check the priority of the queue. If priority is less than the priority of i element, then insert the value
            if (value[1] < this.Collection[i][1]) {
                this.Collection.splice(i, 0, value);
                return;
            }
        }
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

let myQueue = new priorityQueue();
myQueue.enqueue(["Nine",2]);
myQueue.enqueue(["Bew",1]);
myQueue.enqueue(["Ok",3]);
myQueue.enqueue(["Luna",2]);
console.log(myQueue.queue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.queue());