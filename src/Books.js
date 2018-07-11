import React from 'react'

function Book (props) {



  return(
    <li className="details" key={props.book.id}>
        <div className="status">
          <select value={props.shelf} onChange={(e) => props.onChangeShelf(props.book, e.target.value)}>
            <option value="disabled" disabled>Mark</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      <p>{props.book.title}</p>
      {props.book.authors && <p><span className="text">{props.book.authors[0]}</span></p> }
    </li>
  )
}

export default Book
