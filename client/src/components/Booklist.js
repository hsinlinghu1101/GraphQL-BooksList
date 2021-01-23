import React, { useState } from 'react';
import {getBooksQuery} from '../queries/queries'
import BookDetails from './BookDetails'
import {graphql} from 'react-apollo'


function Booklist(props) {
    const [bookId, setBookId] = useState('');

    
    function displayBooks(){
      if(props.data.loading){
          return <div>Loading Books..</div>
      }else{
        return props.data.books.map(book =>{
            return (
            <li onClick={(e)=>setBookId(book.id)} key={book.id}>{book.name}</li>
            )
        })
      }
        
      
    }
    return (
        
      <div>
         <ul id='book-list'>
             {displayBooks()}
         </ul>
         <BookDetails bookId={bookId}/>
      </div>
    );
  }
  
  export default graphql(getBooksQuery)(Booklist);