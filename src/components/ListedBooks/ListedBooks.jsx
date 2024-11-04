import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreList } from "../../Utilitis/storeData";
import Book from "../Book/Book";
import sortBy from "sort-by";

const ListedBooks = () => {
  const allbooks = useLoaderData();
  const [readbook, setreadbook] = useState([]);
  const[sort,setSort]=useState('');

  useEffect(() => {
    const readList = getStoreList();
    const readListInt = readList.map((id) => parseInt(id));

    const selectedBooks = allbooks.filter((book) =>
      readListInt.includes(book.bookId)
    );
    setreadbook(selectedBooks);
  }, []);

  const handleSort=sortType=>{
        setSort(sortType);
        if(sortType==='page number'){
          const sortReadList=[...readbook].sort((a,b)=>a.totalPages-b.totalPages);
          setreadbook(sortReadList);
        }else if(sortType==='Rating'){
          const sortRatingList=[...readbook].sort((a,b)=>a.rating-b.rating);
          setreadbook(sortRatingList);
        }
  }

  // const selectedBooks=allbooks.map(book=>book.bookId);

  // console.log(selectedBooks,readListInt);

  return (
    <div>
      <h2>Listed Books</h2>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort?`sort by ${sort}`:'sort by'}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={()=>handleSort('Rating')}>
            <a>Rating</a>
          </li>
          <li onClick={()=>handleSort('page number')}>
            <a>Number of pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Read books list {readbook.length}</h2>
          <div>
            {readbook.map((b) => (
              <Book key={b.bookId} book={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wish book list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
