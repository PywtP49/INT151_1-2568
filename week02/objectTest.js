//1.object literal
// const book={isbn:12345678, title:'Introduction to JS', getISBN:function(){return this.isbn}}

//2. constructor function
// function Book(isbn, title){
//     this.isbn=isbn
//     this.title=title
// }
// const b1=new Book(123, 'JS')
// const b2=new Book(888, 'CSS')
// console.log(b1)
// console.log(b2)
//3.class
class Book{
    constructor(isbn, title){
        this.isbn=isbn
        this.title=title
    }
    getISBN(){
        return this.isbn
    }
    setTitle(title){
        this.title=title
    }
    getBookInfo(){
        return `isbn: ${this.isbn}, title: ${this.title}`
    }
}
const myBook=new Book(12345678, 'JS Beginner')
// console.log(myBook.getBookInfo())
// console.log(myBook.getISBN())
// console.log(myBook.setTitle('JS for Beginner'))
// console.log(myBook.getBookInfo())

//4. using Object.create(existingObj)
const journal=Object.create(myBook)
journal.ISSN=587904
console.log(journal)
console.log(journal.isbn)
console.log(journal.title)

const car01={isbn:123, title:"BMW"}
const car01={isbn:123, title:"BENZ"}

function compare(car1, car2) {
    return car01.isbn === car02.isbn?true:false
}

// const b1={isbn:123, title:"JS"}
// const b2={isbn:123, title:"JS"}

// const keys=Object.keys(b1) //array of keys //[ 'isbn', 'title' ]
// const values=Object.values(b1) //array of values//[ 123, 'JS' ]
// console.log(keys)
// console.log(values)