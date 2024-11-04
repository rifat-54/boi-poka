import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";

const getStoreList=()=>{
    const storeData=localStorage.getItem('read-text');
    if(storeData)
    {
        const data=JSON.parse(storeData);
        return data;
    }else{
        return [];
    }
}

const addToStoreList=(id)=>{
    const storeData=getStoreList();
    if(storeData.includes(id))
    {
        console.log('already exit this data', id);
    }else{
        storeData.push(id);
        const data=JSON.stringify(storeData);
        localStorage.setItem('read-text',data);
        // Toast('new book added')
        toast('new read book added')
    }
}

export {addToStoreList,getStoreList}