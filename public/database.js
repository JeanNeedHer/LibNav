/* database.js - Mock Library Data */

const LibraryDB = {
    books: [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", shelf: "A-12" },
        { id: 2, title: "1984", author: "George Orwell", genre: "Fiction", shelf: "A-15" },
        { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", shelf: "A-12" },
        { id: 4, title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", shelf: "B-05" },
        { id: 5, title: "Cosmos", author: "Carl Sagan", genre: "Science", shelf: "D-02" },
        { id: 6, title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", shelf: "D-09" },
        { id: 7, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", shelf: "C-01" },
        { id: 8, title: "The Notebook", author: "Nicholas Sparks", genre: "Romance", shelf: "C-04" },
        { id: 9, title: "Dune", author: "Frank Herbert", genre: "Science", shelf: "D-02" },
        { id: 10, title: "The Guns of August", author: "Barbara Tuchman", genre: "History", shelf: "E-11" },
        { id: 11, title: "Atomic Habits", author: "James Clear", genre: "Non-Fiction", shelf: "B-11" },
        { id: 12, title: "Becoming", author: "Michelle Obama", genre: "Non-Fiction", shelf: "B-11" },
        { id: 13, title: "Silent Spring", author: "Rachel Carson", genre: "Science", shelf: "D-09" },
        { id: 14, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", shelf: "A-15" },
        { id: 15, title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fiction", shelf: "A-03" }
    ],

    getBooks: function() {
        return this.books;
    },

    getMapUrl: function(genre) {
        // Returns a placeholder map color based on genre
        // In a real app, this would return an image URL like 'assets/maps/fiction.jpg'
        return `https://via.placeholder.com/600x400/151e32/ffc4d6?text=Map+of+${genre}+Section`;
    }
};
