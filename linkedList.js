export class Node {
    constructor(value = null) {
        this.value = value
        this.nextNode = null
    }
}

export class LinkedList {
    constructor() {
        this.headNode = null
        this.length = 0
    }

    append(value){
        const newNode = new Node(value) 
        if (!this.headNode) {
            this.headNode = newNode
        } else {
            let currentNode = this.headNode 
            while(currentNode.nextNode) {
                currentNode = currentNode.nextNode 
            }
            currentNode.nextNode = newNode 
        }
        this.length++
    }

    prepend(value) {
        const newNode = new Node(value) 
        newNode.nextNode = this.headNode
        this.headNode = newNode 
        this.length++
    }

    size(){
        return this.length
    }

    head(){
        return this.headNode
    }

    tail(){
        if(!this.head) return null
        let currentNode = this.headNode 
        while(currentNode.nextNode) {
            currentNode = currentNode.nextNode 
        }
        return currentNode
    }

    at(index){
        if (index < 0 || index >= this.length) return null
        let currentNode = this.headNode 
        let counter = 0
        while(counter < index) {
            currentNode = currentNode.nextNode 
            counter++
        }
        return currentNode
    }

    pop(){
        if (!this.headNode) return null
        if (!this.headNode.nextNode) {
            this.headNode = null
        } else {
        let currentNode = this.headNode 
        while(currentNode.nextNode.nextNode) {
            currentNode  = currentNode.nextNode 
            }
        currentNode.nextNode = null
        }
        this.length--
    }

    contains(value){
        let currentNode = this.headNode 
        while (currentNode) {
            if (currentNode.value == value){
                return true
            }
            currentNode = currentNode.nextNode 
        }
        return false
    }

    find(value){
        let currentNode = this.headNode 
        let index = 0
        while (currentNode) {
            if (currentNode.value == value){
                return index
            }
            currentNode = currentNode.nextNode
            index++ 
        }
        return null
    }
    
    toString(){
        let currentNode = this.headNode 
        let result = ""
        while (currentNode) {
            result += `( ${currentNode.value} ) -> `
            currentNode = currentNode.nextNode
            
        }
        return result + "null"
    }
    
    insertAt(value, index) {
        if (index < 0 || index > this.length) return
        const newNode = new Node(value)
        if (index === 0) {
          newNode.nextNode = this.headNode
          this.headNode = newNode
        } else {
          let currentNode = this.headNode
          let counter = 0
          while (counter < index - 1) {
            currentNode = currentNode.nextNode
            counter++
          }
          newNode.nextNode = currentNode.nextNode
          currentNode.nextNode = newNode
        }
        this.length++
      }
      
      removeAt(index) {
        if (index < 0 || index >= this.length) return
        if (index === 0) {
          this.headNode = this.headNode.nextNode
        } else {
          let currentNode = this.headNode
          let counter = 0
          while (counter < index - 1) {
            currentNode = currentNode.nextNode
            counter++
          }
          currentNode.nextNode = currentNode.nextNode.nextNode
        }
        this.length--
      }
    }

