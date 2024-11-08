const getStoreReadList =() => {
    const storedListStr = localStorage.getItem('read-;ist');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }

}

const addToStoreReadList = (id) =>{
    const storedList = getStoreReadList();
    if(storedList.includes(id)){
        console.log(id,'already exists in the read list')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast('This book is added to your read list.')

    }
}

export { addToStoreReadList,getStoreReadList}