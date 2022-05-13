class Node {
    constructor(title, id, parent){
        this.title = title
        this.id = id
        this.parent = parent 
    }

    setParent(parent){
        this.parent = parent
    }

    getTitle(){
        return this.title
    }
}

class Row { 

    constructor() { 
        this.nodes = new Array()
    }
    appendNode(node){
        this.nodes.push(node)
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
B = new Node('B', 2, 1)
C = new Node('C', 3, 1)
// D = new Node('D', 4, 3)
// E = new Node('E', 5, 1)

G = new Node('G', 6, null)
// H = new Node('H', 7, 6)



row = new Row()
row.appendNode(A)

row.appendNode([B,C])
row.appendNode(G)


console.log(row); 

function getTitle(item) {
    return item.title
}
arr = row.getNodes() 


function makeList(array) {
    // Create the list element:
    var list = document.createElement('ul');
    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li'); 

        if(Array.isArray(array[i]))
        list.appendChild(makeList(array[i]) );
        else
{        // Set its contents:
        item.appendChild(document.createTextNode(array[i].getTitle()));

        // Add it to the list: 
        list.appendChild(item );
        console.log(array[i].getTitle());
        item.addEventListener('click',()=>{console.log('>> TEST');});
    }
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('category').appendChild(makeList(arr));

// document.getElementById("category").innerHTML = list;