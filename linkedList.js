export class Node {
    constructor() {
        this.value = null
        this.nextNode = null
        this.prevNode = null
    }
}

export class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }


    append(value){}
    prepend(value) {}
    size(){}
    head(){}
    tail(){}
    at(index){}
    pop(){}
    contains(value){}
    find(value){}
    toString(){
        // ( value ) -> ( value ) -> ( value ) -> null
    }
    insertAt(value, index) {}
    removeAt(index){}

    // Some of the nodes will need their nextNode link updated.
}