import React, { useState } from 'react';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries/queries'
import * as compose from 'lodash.flowright';
import {graphql} from 'react-apollo'


function AddBook(props) {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    function displayAuthors(){
      if(props.getAuthorsQuery.loading){
          return <option disabled>Loading Authors..</option>
      }else{
        return props.getAuthorsQuery.authors.map(author =>{
            return (
            <option key={author.id} value={author.id}>{author.name}</option>
            )
        })
      }
        
      
    }

    function submitForm(e){
        e.preventDefault()
        props.addBookMutation({
            variables:{
                name:name,
                genre: genre,
                authorId: authorId
            },
            refetchQueries:[{query:getBooksQuery}]
        })
        e.target.reset();
    }
    return (
        
        <form id="add-book" onSubmit={(e)=>submitForm(e)}>
        <div className="field">
            <label>Book name:</label>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="field">
            <label>Genre:</label>
            <input type="text" onChange={(e)=> setGenre(e.target.value)}/>
        </div>
        <div className="field">
            <label>Author:</label>
            <select onChange={(e)=> setAuthorId(e.target.value)}>
                <option>Select author</option>
                { displayAuthors() }
            </select>
        </div>
        <button type="submit">+</button>

    </form>
    );
  }
  
  export default compose(
      graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
      graphql(addBookMutation, {name: "addBookMutation"})
    )(AddBook);