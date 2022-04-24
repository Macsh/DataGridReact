
function goThroughArr(node, arr, type, state){
    node.forEach(element => {
        if(type === 'read'){
            arr.find((i) => i.id === element.id).checkState = state;
            if(element.children.length > 0){
                goThroughArr(element.children, arr, 'read', state);
            }
        }
        else {
            arr.find((i) => i.id === element.id).checkState = state;
            if(element.children.length > 0){
                goThroughArr(element.children, arr, 'write', state);
            }
        }
    })
}

export const getStateById = (id, arr) => {
    var checkState = arr.find((i) => i.id === id);
    if(checkState !== undefined){
        return arr.find((i) => i.id === id).checkState;
    }
}

export const AddStates = (node, arr, type) => {
    const check = getStateById(node.id, arr);
    if (check === 'unchecked'){
        arr.find((i) => i.id === node.id).checkState = 'checked';
        if(node.children.length > 0){
            goThroughArr(node.children, arr, type, 'checked');
        }
    }
    else if (check === 'checked'){
        arr.find((i) => i.id === node.id).checkState = 'unchecked';
        if(node.children.length > 0){
            goThroughArr(node.children, arr, type, 'unchecked');
        }
    }
}