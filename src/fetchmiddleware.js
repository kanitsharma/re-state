export default state => action => dispatch => (
  action.type === 'FETCH_DATA' &&
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCHED_DATA', payload: { apiData: json } }))
)
