const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titleList = function(){
  result = []
  result = this.films.map(function(film){
    return film.title;
  });
  return result
};

Cinema.prototype.findTitle = function(title){
  result = this.films.find(film => film.title === title);
  
  return result;
};

Cinema.prototype.filterGenre = function(genre){
  result = this.films.filter(film => film.genre === genre);
  return result;
}

Cinema.prototype.particularYear = function(year){
  result = this.films.some(film => film.year === year)
  return result;
};

Cinema.prototype.filmOverLength = function(length){
  result = this.films.every(film => film.length > length)
  return result;
};

Cinema.prototype.totalRunTime = function(){
  times = []
  times = this.films.map(function(film){
    return film.length;
  });
  result = times.reduce((total, time) => total + time);
  return result;

};

/*
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
*/

Cinema.prototype.filterByProperty = function(property, value){
  // console.log(property)
  result = this.films.filter((film) => {
    return film[property] === value;
  });
  return result
};
  

// Cinema.prototype.filmsByProperty = function (property, value) {
//   return this.films.filter((film) => {
//     return film[property] === value;
//   });
// };

module.exports = Cinema;

//Cinema:
// Add a another test, `'Cinema should be able to filter films by year'`.

// We already have a method that filters films by genre, the functionality of which is very similar. We don't want two separate methods as that wouldn't be DRY. Your task is get the final test to pass by to writing a new method called `filmsByProperty`, which takes two arguments:

// 1. the name of the property
// 2. the value being search for

// Once the final test is passing, modify the test `'Cinema should be able to filter films by genre'` to use the new `filmsByProperty` method.
//If you use reduce, remember that you will need to pass in the initial value of the accumulator as the second argument.