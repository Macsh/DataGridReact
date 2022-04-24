import { createPortal } from "react-dom";
import json from "../../assets/Sectorisation.json";


function goThroughArr(node, arr, state){
    node.forEach(element => {
        arr.find((i) => i.id === element.id).checkState = state;
        if(element.children.length > 0){
            goThroughArr(element.children, arr, state);
        }
    })
}

function goThroughArrParent(ids, node, arr, state){
    ids.forEach(id => {
        node.forEach(element => {
            arr.find((i) => i.id === element.id).checkState = state;
        })
    })
}

function getParents(arr, id) {
    const parentIds = [];
    
    arr.forEach(element => {
        if(element.id === id) {
            parentIds.push(element.id);
        }
        else if(element.children) {
            const ids = getParents(element.children, id);
            if(ids.length){
                parentIds.push(element.id);
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
    if (check === 'unchecked'){
        arr.find((i) => i.id === node.id).checkState = 'checked';
        if(node.children.length > 0){
            goThroughArr(node.children, arr, 'checked');
            const parents = getParents(json.data.roots, node.id)
            if(parents.length > 1){
                parents.pop();
                console.log(parents);
            }
        }
    }
    else if (check === 'checked'){
        arr.find((i) => i.id === node.id).checkState = 'unchecked';
        if(node.children.length > 0){
            goThroughArr(node.children, arr, 'unchecked');
            const parents = getParents(json.data.roots, node.id)
            if(parents.length > 1){
                parents.pop();
                console.log(parents);
            }
        }
    }
}