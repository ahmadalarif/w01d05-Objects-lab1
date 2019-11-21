// const book = 
// [
//     {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     alreadyRead: false ,
//     },
// ]
// for (const i in book){
//     console.log(book)
//     if(book[i].alreadyRead == true){
//         console.log(" i already read it" + book[i].title + " by " + book[i].author)


//     }else if (book[i].alreadyRead== false){
//         console.log(" i still need to read it" + book[i].title + " by " + book[i].author)
//     }
// }
// LAP 2


    const Movie = {
    title: "Taken",
    duration: 90,
    stars: ["LiamNisson", "Maggie grace", "famke janssen"]
    }
 function myfavMovie (obj){
    console.log(` ${Movie.title} lasts for ${Movie.duration} minutes. Stars: ${Movie.stars}`)
    }
    myfavMovie(Movie);
