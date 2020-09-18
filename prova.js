function BinarySearchTree() {   
    var Node = function(key){
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null
    //var key = key.toUpperCase().charCodeAt(0);
    //console.log(key)

    this.insert = function(key){
        //Insere uma chave
        try{    
        // A letra virar numero
            key_1 = key.toUpperCase().charCodeAt(0);
           key = key_1

            var newNode = new Node(key)
            if(root === null){
                root = newNode
            }else{
                insertNode(root, newNode)
            }
        }catch(err){
            console.log(`${err} \nO valor digitado não é um valor aceitavel, tente novamente; \n`)
            return (`${err} \nO valor digitado não é um valor aceitavel, tente novamente; \n`)
            
        }
    }
//Função Auxiliar Inserção
    var insertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            }else{
                insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                insertNode(node.right, newNode)
            }
        }  
    }
   
    //Search
    this.search = function(key){
        
        //console.log(`Root -> ${root}\t Key -> ${key}`)
      //console.log(key)
        key_aux = key.toUpperCase().charCodeAt(0);
        //|console.log(root)
        //Busca uma chaave

        return searchNode(root, key_aux)

    }

    var searchNode = function(node, key){
        try{
            //console.log(node)
           //console.log("Chave "+key)//Numeero
            //console.log(node)
            if(node == null){
                return false;
            }
        
            if(node.key > key){
                console.log(searchNode(node.left, key));
                return searchNode(node.left, key)
            }else if(node.key < key){
                console.log(searchNode(node.right, key));
                return searchNode(node.right, key)
            }else{
                return true
            }
        }catch(err){
            console.log(`Entrou no catch erro =>  ${err}`)
        }
    }
    //Remove
    this.remove = function(key) {
        //console.log("KEY"+key)
        key_aux = key.toUpperCase().charCodeAt(0)
        //console.log(key_aux)
        root = removeNode(root, key_aux)
    }

    var removeNode = function(node, key) {
        try{
            if(node === null) {
                return null
            }
            //console.log('\nREMOÇÂO '+key, node.key+'\n ')
            if(key < node.key) {
                node.left = removeNode(node.left, key)
                return node
            } else if(key > node.key) {
                node.right = removeNode(node.right, key)
                return node
            } else {
                if(node.left === null && node.right === null) {
                    node = null
                    return node
                }
                if(node.left === null) {
                    node = node.right
                    return node
                } else if(node.right === null) {
                    node = node.left
                    return node
                }
                var aux = findMinNode(node.right)
                node.key = aux.key
                node.right = removeNode(node.right, aux.key)
                return node
            }
        }catch(err){
            console.log(`Erro no REMOVE -> ${err}`)
        }
    }
    //Find

    var findMinNode = function(node) {
        while(node && node.left !== null) {
            node = node.left
        }
        
        return node
    }
 //Min
    this.min = function() {
        return minNode(root)
    }
   
    var minNode = function(node) {
        console.log(node)
        if(node) {
            while(node && node.left !== null) {
                node = node.left
            }

            console.log(`A/O menor é a letra ${String.fromCharCode(node.key)}, e seu códico ASCII é ${node.key}`)
            return node.key
        }
        return null
    }
    //Max
    this.max = function() {
        return maxNode(root)
    }

    var maxNode = function(node) {
        if(node) {
            while(node && node.right !== null) {
                node = node.right
            }
            console.log(`A/O Maior é a letra ${String.fromCharCode(node.key)}, e seu códico ASCII é ${node.key}`)
            return node.key
        }
        return null
    }
    
    this.inOrderTraverse = function(callback){
        //Visita todos os nós da arvore usando um percurso em ordem
        inOrderTraverseNode(root, callback)
    }

    var inOrderTraverseNode = function(node, callback){

        if (node !== null){
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }

    this.preOrderTraverse = function(callback){
        //Visita todos os nós da arvore usando o percurso pre ordem
        preOrderTraverseNode(root,callback)

    }

    var preOrderTraverseNode = function(node, callback){

        if (node !== null){
            callback(node.key)
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }
    }

    this.postOrderTraverse = function(callback){
        //Visita todos os nós da arvore usando um percurso em ordem
        postOrderTraverseNode(root, callback)

    }

    var postOrderTraverseNode = function(node, callback){

        if (node !== null){
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
}
function printNode(value){
    value_aux = String.fromCharCode(value)
    console.log(value_aux)
    return value_aux;
}

var tree = new BinarySearchTree()
//tree.insert(11);
//tree.insert(7);
//tree.insert(15);
//tree.insert(5);
//tree.insert(3);
//tree.insert(6);
//tree.insert(9);
//tree.insert(8);
//tree.insert(10);
//tree.insert(13);
//tree.insert(12);
//tree.insert(14);
//tree.insert(20);
//tree.insert(18);
//tree.insert(25);
//console.log('Imprimir inOrder:')
//tree.inOrderTraverse(printNode);
//console.log('Imprimir preOrder:')
//tree.preOrderTraverse(printNode);
//console.log('Imprimir postOrder:')
//tree.postOrderTraverse(printNode);
//console.log('Imprime o maior:')
//console.log(tree.max());
//console.log('Imprime o menor:')
//console.log(tree.min());


//console.log(tree.search(6));

//tree.remove(6);
//tree.remove(5);
//tree.remove(15);


//console.log(tree.search(6));            


tree.insert('a');
tree.insert('B');
tree.insert('D');
tree.insert('C');
tree.insert('E');
tree.insert('f');
tree.insert('g');
tree.insert('h');
tree.insert('i');
tree.insert('j');
tree.insert('k');
tree.insert('l');
tree.insert('m');
tree.insert('n');
tree.insert('o');
tree.insert('p');
tree.insert('q');
tree.insert('r');
tree.insert('s');
tree.insert('t');


tree.min();
tree.max();
/*
tree.search('j');
tree.remove('m');
*/
 tree.inOrderTraverse(printNode);

//INSERT OK
//SERACH Ok
//REMOVE OK