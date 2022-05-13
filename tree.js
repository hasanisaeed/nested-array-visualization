class Node {
    constructor(title, id){
        this.title = title
        this.id = id
    }

    getTitle(){
        return this.title
    }
}

/**********

A-->B
    C-->D
    E-->F
G-->H

***********/

A = new Node('A', 1)
B = new Node('B', 2)
C = new Node('C', 3)
D = new Node('D', 4)
E = new Node('E', 5)
F = new Node('F', 6)

G = new Node('G', 7)
H = new Node('H', 8)





categories = [A,[B,C,[D],E,[F]],G,[H]]


function makeList(array) {
    // Create the list element:
    var list = document.createElement('ul');
    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li'); 

        if(Array.isArray(array[i]))
            list.appendChild(makeList(array[i]) );
        else
	    {       
	        // Set `title` <li> ##### </li>
            item.appendChild(document.createTextNode(array[i].getTitle()));

            // Add it to the list: 
            list.appendChild(item );
        
            item.addEventListener('click',()=>{console.log('>> Clicked!');});
    	}
    }

    // Finally, return the constructed list:
    return list;
}

document.getElementById('category').appendChild(makeList(categories));
