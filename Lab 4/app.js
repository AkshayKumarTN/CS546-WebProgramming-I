
import * as moviesMethods from '././data/movies.js';
import { dbConnection, closeConnection } from './config/mongoConnection.js';


const db = await dbConnection();
await db.dropDatabase();

//console.log("Let's add some Movies!");

//....................createMovie

// try {
//     // Should Pass
//     let expected = {
//         _id: "",
//         title: "Hackers",
//         plot: "Hackers are blamed for making a virus that will capsize five oil tankers.",
//         genres: ["Crime", "Drama", "Romance"],
//         rating: "PG-13",
//         studio: "United Artists",
//         director: "Iain Softley",
//         castMembers: ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"],
//         dateReleased: "09/15/1995",
//         runtime: "1h 45min"
//     };
//     //console.log(`Input : ${JSON.stringify(first)}`);
//     const result = await moviesMethods.createMovie(" Hackers ", "  Hackers are blamed for making a virus that will capsize five oil tankers.  ", [" Crime ", " Drama ", " Romance "], " PG-13 ", " United Artists ", " Iain Softley ", [" Jonny Miller ", " Angelina Jolie ", " Matthew Lillard ", " Fisher Stevens "], " 09/15/1995 ", " 1h 45min ");
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.error(`${'-'.repeat(40)}`);
//     result._id = "";
//     console.log(`CustomOutput : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
//     console.log(`Passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let expected = {
//         _id: "",
//         title: "Hackers1",
//         plot: "Hackers are blamed for making a virus that will capsize five oil tankers.",
//         genres: ["Crime", "Drama", "Romance"],
//         rating: "PG-13",
//         studio: "United Artists",
//         director: "Iain Softley",
//         castMembers: ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"],
//         dateReleased: "09/15/1995",
//         runtime: "1h 45min"
//     };
//     //console.log(`Input : ${JSON.stringify(first)}`);
//     const result = await moviesMethods.createMovie("Hackers1", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.error(`${'-'.repeat(40)}`);
//     result._id = "";
//     console.log(`CustomOutput : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
//     console.log(`Passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let expected = {
//         _id: "",
//         title: "42",
//         plot: "Hackers are blamed for making a virus that will capsize five oil tankers.",
//         genres: ["Crime", "Drama", "Romance"],
//         rating: "PG-13",
//         studio: "United Artists",
//         director: "Iain Softley",
//         castMembers: ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"],
//         dateReleased: "09/15/1995",
//         runtime: "1h 45min"
//     };
//     //console.log(`Input : ${JSON.stringify(first)}`);
//     const result = await moviesMethods.createMovie("42", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.error(`${'-'.repeat(40)}`);
//     result._id = "";
//     console.log(`CustomOutput : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
//     console.log(`Passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let expected = {
//         _id: "",      
//         title: "The Breakfast Club",
//         plot: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
//         genres: ["Comedy", "Drama"],
//         rating: "R",
//         studio: "Universal Pictures",
//         director: "John Hughes",
//         castMembers: ["Judd Nelson", "Molly Ringwald", "Ally Sheedy", "Anthony Hall", "Emilio Estevez"],
//         dateReleased: "02/07/1985",
//         runtime: "1h 37min"
//     } ;
//     //const result = await moviesMethods.createMovie("The Breakfast Club", "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.", ["Comedy", "Drama"], "R", "Universal Pictures", "John Hughes", ["Judd Nelson", "Molly Ringwald", "Ally Sheedy", "Anthony Hall", "Emilio Estevez"], "02/07/1985", "1h 37min");
//     const result = await moviesMethods.createMovie(
//         expected.title,
//         expected.plot,
//         expected.genres,
//         expected.rating,
//         expected.studio,
//         expected.director,
//         expected.castMembers,
//         expected.dateReleased,
//         expected.runtime
//     );
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.error(`${'-'.repeat(40)}`);
//     result._id = "";
//     console.log(`CustomOutput : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
//     console.log(`Passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     let expected = {
//         _id: "",      
//         title: "The Breakfast Club",
//         plot: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
//         genres: ["Comedy", "Drama","jvjhvj khbjkb"],
//         rating: "NC-17",
//         studio: "Universal Pictures",
//         director: "John Hughes",
//         castMembers: ["Judd Nelson", "Molly Ringwald", "Ally Sheedy", "Anthony Hall", "Emilio Estevez"],
//         dateReleased: "02/07/1900",
//         runtime: "00h 31min"
//     } ;
//     //const result = await moviesMethods.createMovie("The Breakfast Club", "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.", ["Comedy", "Drama"], "R", "Universal Pictures", "John Hughes", ["Judd Nelson", "Molly Ringwald", "Ally Sheedy", "Anthony Hall", "Emilio Estevez"], "02/07/1985", "1h 37min");
//     const result = await moviesMethods.createMovie(
//         expected.title,
//         expected.plot,
//         expected.genres,
//         expected.rating,
//         expected.studio,
//         expected.director,
//         expected.castMembers,
//         expected.dateReleased,
//         expected.runtime
//     );
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.error(`${'-'.repeat(40)}`);
//     result._id = "";
//     console.log(`CustomOutput : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
//     console.log(`Passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     let expected = {
//         _id: "",     
//         title: "Hackers",
//         plot: "Hackers are blamed for making a virus that will capsize five oil tankers.",
//         genres: ["Crime", "Drama", "Romance"],
//         rating: "PG-13",
//         studio: "United Artists",
//         director: "Iain Softley",
//         castMembers: ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"],
//         dateReleased: "09/15/1995",
//         runtime: "1h 45min"
//     };
//     //const result = await moviesMethods.createMovie("The Breakfast Club", "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.", ["Comedy", "Drama"], "R", "Universal Pictures", "John Hughes", ["Judd Nelson", "Molly Ringwald", "Ally Sheedy", "Anthony Hall", "Emilio Estevez"], "02/07/1985", "1h 37min");
//     const result = await moviesMethods.createMovie(
//         expected.title,
//         expected.plot,
//         expected.genres,
//         expected.rating,
//         expected.studio,
//         expected.director,
//         expected.castMembers,
//         expected.dateReleased,
//         expected.runtime
//     );
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.error(`${'-'.repeat(40)}`);
//     result._id = "";
//     console.log(`CustomOutput : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
//     console.log(`Passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let expected = {
//         _id: "",      
//         title: "42",
//         plot: "In 1947, Jackie Robinson becomes the first African-American to play in Major League Baseball in the modern era when he was signed by the Brooklyn Dodgers and faces considerable racism in the process.",
//         genres: ["Biography", "Drama", "Sport"],
//         rating: "PG-13",
//         studio: "Warner Brothers",
//         director: "Brian Helgeland",
//         castMembers: ["Chadwick Boseman", "Harrison Ford", "Nicole Beharie", "Christopher Meloni"],
//         dateReleased: "04/09/2013",
//         runtime: "2h 8min"
//     };
//     //const result = await moviesMethods.createMovie("The Breakfast Club", "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.", ["Comedy", "Drama"], "R", "Universal Pictures", "John Hughes", ["Judd Nelson", "Molly Ringwald", "Ally Sheedy", "Anthony Hall", "Emilio Estevez"], "02/07/1985", "1h 37min");
//     const result = await moviesMethods.createMovie(
//         expected.title,
//         expected.plot,
//         expected.genres,
//         expected.rating,
//         expected.studio,
//         expected.director,
//         expected.castMembers,
//         expected.dateReleased,
//         expected.runtime
//     );
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.error(`${'-'.repeat(40)}`);
//     result._id = "";
//     console.log(`CustomOutput : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
//     console.log(`Passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let expected = {
//         _id: "",      
//         title: "The Breakfast Club",
//         plot: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
//         genres: ["Comedy", "Drama"],
//         rating: "R",
//         studio: "Universal Pictures",
//         director: "John Hughes",
//         castMembers: ["Judd Nelson", "Molly Ringwald", "Ally Sheedy", "Anthony Hall", "Emilio Estevez"],
//         dateReleased: "02/07/1985",
//         runtime: "1h 37min"
//     };
//     //const result = await moviesMethods.createMovie("The Breakfast Club", "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.", ["Comedy", "Drama"], "R", "Universal Pictures", "John Hughes", ["Judd Nelson", "Molly Ringwald", "Ally Sheedy", "Anthony Hall", "Emilio Estevez"], "02/07/1985", "1h 37min");
//     const result = await moviesMethods.createMovie(
//         expected.title,
//         expected.plot,
//         expected.genres,
//         expected.rating,
//         expected.studio,
//         expected.director,
//         expected.castMembers,
//         expected.dateReleased,
//         expected.runtime
//     );
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.error(`${'-'.repeat(40)}`);
//     result._id = "";
//     console.log(`CustomOutput : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
//     console.log(`Passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }


//....................getAllMovies

try {
    // Should Pass
    let expected = [{
        _id: "",
        title: "Hackers",
        plot: "Hackers are blamed for making a virus that will capsize five oil tankers.",
        genres: ["Crime", "Drama", "Romance"],
        rating: "PG-13",
        studio: "United Artists",
        director: "Iain Softley",
        castMembers: ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"],
        dateReleased: "09/15/1995",
        runtime: "1h 45min"
    },
    {
        _id: "",
        title: "42",
        plot: "In 1947, Jackie Robinson becomes the first African-American to play in Major League Baseball in the modern era when he was signed by the Brooklyn Dodgers and faces considerable racism in the process.",
        genres: ["Biography", "Drama", "Sport"],
        rating: "PG-13",
        studio: "Warner Brothers",
        director: "Brian Helgeland",
        castMembers: ["Chadwick Boseman", "Harrison Ford", "Nicole Beharie", "Christopher Meloni"],
        dateReleased: "04/09/2013",
        runtime: "2h 8min"
    },
    {
        _id: "",
        title: "The Breakfast Club",
        plot: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
        genres: ["Comedy", "Drama"],
        rating: "R",
        studio: "Universal Pictures",
        director: "John Hughes",
        castMembers: ["Judd Nelson", "Molly Ringwald", "Ally Sheedy", "Anthony Hall", "Emilio Estevez"],
        dateReleased: "02/07/1985",
        runtime: "1h 37min"
    }
    ];
    const result = await moviesMethods.getAllMovies();
    console.error(`${'-'.repeat(40)}`);
    console.log(`Output : ${JSON.stringify(result)}`);
    console.error(`${'-'.repeat(40)}`);
    console.log(`Expected : ${JSON.stringify(expected)}`);
    console.error(`${'-'.repeat(40)}`);
    result.forEach(element => {
        element._id ="";
    });
    console.log(`CusromExpected : ${JSON.stringify(result)}`);
    console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
    console.error(`${'-'.repeat(40)}`);
    console.log(`Passed successfully \n${'-'.repeat(40)}`);
} catch (e) {
    console.error(`${e} \n${'-'.repeat(40)}`);
}

//.................getMovieById

try {
    // Should Pass
    let expected = {
        _id: "",
        title: "Hackers",
        plot: "Hackers are blamed for making a virus that will capsize five oil tankers.",
        genres: ["Crime", "Drama", "Romance"],
        rating: "PG-13",
        studio: "United Artists",
        director: "Iain Softley",
        castMembers: ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"],
        dateReleased: "09/15/1995",
        runtime: "1h 45min"
    };
    const result = await moviesMethods.getMovieById("67c717a3a4d1fdb816b1d34f");
    console.error(`${'-'.repeat(40)}`);
    console.log(`Output : ${JSON.stringify(result)}`);
    console.error(`${'-'.repeat(40)}`);
    console.log(`Expected : ${JSON.stringify(expected)}`);
    console.error(`${'-'.repeat(40)}`);
    result._id = "";
    console.log(`CustomOutput : ${JSON.stringify(result)}`);
    console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
    console.error(`${'-'.repeat(40)}`);

    console.log(`Passed successfully \n${'-'.repeat(40)}`);
} catch (e) {
    console.error(`${e} \n${'-'.repeat(40)}`);
}


// try {
//     // Should Pass
//     let expected = {
//         _id: "",
//         title: "The Breakfast Club",
//         plot: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
//         genres: ["Comedy", "Drama"],
//         rating: "R",
//         studio: "Universal Pictures",
//         director: "John Hughes",
//         castMembers: ["Judd Nelson", "Molly Ringwald", "Ally Sheedy", "Anthony Hall", "Emilio Estevez"],
//         dateReleased: "02/07/1985",
//         runtime: "1h 37min"
//     };
//     const result = await moviesMethods.getMovieById("67c5edc2bf52aaa8e03fdd83");
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.error(`${'-'.repeat(40)}`);
//     result._id = "";
//     console.log(`CustomOutput : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
//     console.error(`${'-'.repeat(40)}`);

//     console.log(`Passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }


//...........removeMovie

// try {
//     // Should Pass
//     const result = await moviesMethods.removeMovie("67c5edc2bf52aaa8e03fdd83");
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }


//............renameMovie

// try {
//     // Should Pass
//     const result = await moviesMethods.renameMovie("67c5d44185db20c87a008029", "Forty Two");
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.error(`${'-'.repeat(40)}`);
//     console.log(`Passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

await closeConnection();
console.log('Done!');