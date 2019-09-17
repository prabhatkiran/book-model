import React from 'react'

    const Books = ({ books }) => {
      return (
        <div>
          <center><h1>Book catalog</h1></center>
          {books.map((book) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{book.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{book.isbn}</h6>
              </div>
            </div>
          ))}
        </div>
      )
    };

export default Books