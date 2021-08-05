import React,{useState} from 'react'
import Movie from './Movie';
const App = (props)=>{
  const [movieState, setMovieState] =useState({
    movies: [
      { id: '0', name: 'The Shawshank Redemption', age: 1994 },
      { id: '1', name: 'The Godfather', age: 1972 },
      { id: '2', name: 'The Dark Knight', age: 2008 }
    ],
    showPersons: false
  })
/* _______________________________________________ */
const nameChangedHandler = ( event, id ) => {
  const listIndex = movieState.movies.findIndex(p => {
    return p.id === id;
  });
  const list = {
    ...movieState.movies[listIndex]
  };
  list.name = event.target.value;
  const myList = [...movieState.movies];
  myList[listIndex] = list;
  setMovieState( {showPersons: movieState.showPersons,movies:myList} );
}
/* _______________________________________________ */
const deletePersonHandler = (listIndex) => {
  const myList = [...movieState.movies];
  myList.splice(listIndex, 1);
  setMovieState({showPersons: movieState.showPersons,movies: myList});
}
/* _______________________________________________ */
const togglePersonsHandler = () => {
  setMovieState( { showPersons: !movieState.showPersons,movies:[...movieState.movies] } );
}
/* _______________________________________________ */
const style = {
  backgroundColor: 'black',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer',
  color:'orange'
};
/* _______________________________________________ */
  return (
    <div className="App">
    <h1>IMDb "Top 250" (Sorted by IMDb Rating Descending)</h1>
    <p>Alper's top 3</p>
    <button
      style={style}
      onClick={togglePersonsHandler}>Toggle Movies</button>
      {/* ______________________________________ */}
      {movieState.showPersons ? (
         <div>
         {movieState.movies.map((arg, index) => {
           return <Movie
             click={() => deletePersonHandler(index)}
             name={arg.name} 
             age={arg.age}
             key={arg.id}
             changed={(event) => nameChangedHandler(event, arg.id)} />
         })}
       </div>
      ) : null}
  </div>
  )
}
export default App
