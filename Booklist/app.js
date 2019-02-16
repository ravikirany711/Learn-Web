//Book class: It represents a book
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;

    }
}

//UI class: Handle UI tasks
class UI{
    static displayBooks(){
        const storedBooks=[
            {
            title:"book1",
            author:"danley",
            isbn:"1234"
            },
            {
                title:"book2",
                author:"danloop",
                isbn:"4567"
                }
        ];
        const books=storedBooks
        books.forEach((book)=>{
            UI.addBookToList(book)

        })

    }
   static addBookToList(book){
       const list=document.querySelector('#booklist')
       const row=document.createElement('tr')

        row.innerHTML=`
        <td> ${book.title}</td>
        <td> ${book.author}</td>
        <td> ${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        

        `;
        list.appendChild(row)
   }
}

//store class: Handles storage

//Event: To display a book
document.addEventListener("DOMContentLoades",UI.displayBooks)

//Event: To add a book

//Event: To remove a book
