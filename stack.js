// * Create a stack

var stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let popResult = this.storage[this.count];
        delete this.storage[this.count];
        return popResult;
    }

    this.peek = function() {
        return this.storage[this.count-1]
    }

    this.size = function() {
        return this.count;
    }
}

// * Example implementation
// This show how to use the stack to solve palindrome problem

let letter = new stack();
let word = "ok";
let rword = "";
for (let i = 0; i<word.length; i++){
    letter.push(word[i]); 
    // console.log(letter.storage);
}

for (let i = 0; i<word.length; i++){
    let result = letter.pop();
    rword += result;
}

if (rword === word) {
    console.log(word + " is palindrome");
} else {
    console.log(word + " is not palindrome");
}