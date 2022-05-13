class Node {
    constructor(title, id, parent){
        this.title = title
        this.id = id
        this.parent = parent 
    }

    setParent(parent){
        this.parent = parent
    }

    eClick(){
        console.log(this.id + ' Clicked');
    }
}

class Row { 

    constructor() { 
        this.nodes = new Array()
    }
    appendNode(node){
        this.nodes.push(node)
    }
    deleteNode(node){
        this.nodes.remove(node)
    }

    getNodes(){
        return this.nodes
    }
}

/**********

A-->B
    C-->D
    E-->F
G-->H

***********/
A = new Node('A', 1, null)
// B = new Node('B', 2, 1)
// C = new Node('C', 3, 1)
// D = new Node('D', 4, 3)
// E = new Node('E', 5, 1)

G = new Node('G', 6, null)
// H = new Node('H', 7, 6)



row = new Row()
row.appendNode(A)
row.appendNode(G)

console.log(row); 
document.getElementById("category").innerHTML = JSON.stringify(row.getNodes(), null, 2);