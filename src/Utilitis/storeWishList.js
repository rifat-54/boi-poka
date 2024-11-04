const storeWishLish=()=>{
    const storeData=localStorage.getItem('wish-list');
    if(storeData)
    {
        const data=JSON.parse(storeData);
        return data;
    }else{
        return [];
    }
}

const addToWishLish=(id)=>{
    const storeData=storeWishLish();
    if(storeData.includes(id))
    {
        console.log('already exit this wish list');
    }else{
        storeData.push(id);
        const data=JSON.stringify(storeData);
        localStorage.setItem('wish-list',data);
    }

}

export {addToWishLish};