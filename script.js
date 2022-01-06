function Node(data){
    this.data = data;
    this.children = [];
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(data, toNodeData) {
        const node = new Node(data);
            //BFS is gonna find the node that contains the data we passed 
            /* 
            Breadth-first search is an algorithm for searching a tree data 
            structure for a node that satisfies a given property. It starts
            at the tree root and explores all nodes at the present depth
            prior to moving on to the nodes at the next depth leve
            */
        const parent = toNodeData ? this.findBFS(toNodeData) : null;

        if(parent) 
            parent.children.push(node)
    }
}

(function test() {
    console.log('test')
})()