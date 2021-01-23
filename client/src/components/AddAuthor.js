import React, { useState } from 'react';
import {getAuthorsQuery, addAuthorMutation} from '../queries/queries'
import * as compose from 'lodash.flowright';
import {graphql} from 'react-apollo'


function AddAuthor(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    

    function submitForm(e){
        e.preventDefault()
        props.addAuthorMutation({
            variables:{
                name:name,
                age: parseInt(age)
            },
            refetchQueries:[{query:getAuthorsQuery}]
        })
        e.target.reset();
       
    }
    return (
        
    <form id="add-author" onSubmit={(e)=>submitForm(e)}>
        <div className="field">
            <label>Author name:</label>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="field">
            <label>Author age:</label>
            <input type="number" onChange={(e)=> setAge(e.target.value)}/>
        </div>
        <button type="submit">+</button>

    </form>
    );
  }
  
  export default compose(
      graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
      graphql(addAuthorMutation, {name: "addAuthorMutation"})
    )(AddAuthor);