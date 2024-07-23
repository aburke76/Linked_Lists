class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        console.log(`List count is ${count}`);
        return count;
    }

    headNode() {
        const firstNode = this.head.value;
        console.log(`The head node is ${firstNode}`);
        return firstNode;
    }

    tailNode() {
        let current = this.head;
        while (current !== null) {
            current = current.next;
            if (current.next === null) {
                console.log(`The tail node is ${current.value}`);
                return current.value;
            }
        }
    }

    at(index) {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
            if (count === index) {
                console.log(`The value at index ${index} is ${current.value}`);
            }
        }
        return current;
    }

    pop() {
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
        return current;
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            current = current.next;
            if (current.value === value) {
                console.log("Value found");
                return true;
            } else {
                console.log("Value not found");
                return false;
            }
        }
    }

    find(value) {
        let index = 0;
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                console.log(`Value is at index ${index}`);
                return index;
            } else {
                current = current.next;
                index++;
            }
        }
    }

    toString() {
        let string = "";
        let current = this.head;
        while (current !== null) {
            if (!current.next) {
                string += `(${current.value}) -> null`;
            } else {
                string += `(${current.value}) -> `;
            }
            current = current.next;
        }
        console.log(string);
    }
}

const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(10);
linkedList.append(12);
linkedList.prepend(7);
linkedList.size();
linkedList.headNode();
linkedList.tailNode();
linkedList.at(1);
linkedList.pop();
linkedList.size();
linkedList.contains(5);
linkedList.find(7);
linkedList.find(5);
linkedList.find(10);
linkedList.toString();
