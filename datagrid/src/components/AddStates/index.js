import json from "../../assets/Sectorisation.json";


function goThroughArr(node, arr, state){
    node.forEach(element => {
        arr.find((i) => i.id === element.id).checkState = state;
        if(element.children.length > 0){
            goThroughArr(element.children, arr, state);
        }
    })
}

function goThroughArrParent(node, arr, state){
    var check = 0;
    node.forEach(element => {
        if(arr.find((i) => i.id === element.id).checkState === state || arr.find((i) => i.id === element.id).checkState === 'inbetween'){
            check = 1;
        }
        else if (element.children.length > 0){
            goThroughArrParent(element.children, arr, state);
        }
    })
    return check;
}

function getParents(arr, id) {
    const parentIds = [];
    
    arr.forEach(element => {
        if(element.id === id) {
            parentIds.push(element);
        }
        else if(element.children.length > 0) {
            const ids = getParents(element.children, id);
            if(ids.length){
                parentIds.push(element);
                ids.forEach(id => parentIds.push(id));
            } 
        }
    });

    return parentIds;
}


export const getStateById = (id, arr) => {
    var checkState = arr.find((i) => i.id === id);
    if(checkState !== undefined){
        return arr.find((i) => i.id === id).checkState;
    }
}

export const AddStates = (node, arr) => {
    const check = getStateById(node.id, arr);
    if (check === 'unchecked' || check === 'inbetween'){
        arr.find((i) => i.id === node.id).checkState = 'checked';
        if(node.children.length > 0){
            goThroughArr(node.children, arr, 'checked');
        }
        const parents = getParents(json.data.roots, node.id)
            if(parents.length > 1){
                parents.pop();
                parents.reverse();
                parents.forEach(parent => {
                    if(goThroughArrParent(parent.children, arr, 'unchecked') === 1){
                        arr.find((i) => i.id === parent.id).checkState = 'inbetween';
                    }
                    else {
                        arr.find((i) => i.id === parent.id).checkState = 'checked';
                    }
                })
            }
    }
    else if (check === 'checked'){
        arr.find((i) => i.id === node.id).checkState = 'unchecked';
        if(node.children.length > 0){
            goThroughArr(node.children, arr, 'unchecked');
        }
        const parents = getParents(json.data.roots, node.id)
            if(parents.length > 0){
                parents.pop();
                parents.reverse();
                parents.forEach(parent => {
                    if(goThroughArrParent(parent.children, arr, 'checked') === 1){
                        arr.find((i) => i.id === parent.id).checkState = 'inbetween';
                    }
                    else {
                        arr.find((i) => i.id === parent.id).checkState = 'unchecked';
                    }
                })
            }
    }
}