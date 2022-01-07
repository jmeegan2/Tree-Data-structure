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
        else
            if(!this.root)
                this.root = node;
            else 
                return "Tried to store node at root when root already exist"
    }

    findBFS(data) {
        const queue = [this.root];
        let _node = null;

        this.traverseBFS((node) => {
            if(node.data == data)
                _node = node;
        })

        return _node;
    }

    traverseBFS(cb) { // cb means call back
        const queue = [this.root]

        if(cb)
            while(queue.length) {
                const node = queue.shift();

                cb(node)

                for(const child of node.children)
                    queue.push(child)
            }
    }
}

(function test() {
    let tree = new Tree();


    tree.add("Node1")
    tree.add("Node2", "Node1")
    tree.add("Node3", "Node1")
    tree.add("Node4", "Node2")
    tree.add("Node5", "Node2")
    tree.add("Node6", "Node3")

    tree.traverseBFS((node) => {console.log("Current node: ", node)})
})()

//used this video: https://www.youtube.com/watch?v=K7VnBuOlCI8