import {getBookQuery} from '../queries/queries'
import {graphql} from 'react-apollo'


function BookDetails(props) {
        
    function displayDetails(){
      const{book}= props.data
      if(book){
          return(
              <div>
                  <h2>{book.name}</h2>
                  <p>{book.genre}</p>
                  <p>{book.author.name}</p>
                  <p>All books by this author:</p>
                  <ul className="other-books">
                      {book.author.books.map(book=>{
                          return<li key={book.id}>{book.name}</li>
                      })}
                  </ul>
              </div>
          )
      }else{
          return(
              <div>No book selected ...</div>
          )
      }
    }
    return (
        
      <div id="book-details">
          {displayDetails()}
    
      </div>
    );
  }
  
  export default graphql(getBookQuery, {
      options:(props)=>{
          return{
              variables:{
                  id:props.bookId
              }
          }
      }
  })(BookDetails);