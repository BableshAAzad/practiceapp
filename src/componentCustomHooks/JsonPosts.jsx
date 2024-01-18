import useFetchApi from './useFetchApi'

function JsonPosts() {
    let apiData = useFetchApi("https://jsonplaceholder.typicode.com/posts");
    // console.log(apiData)
  return (
    <div>
      {apiData.map(({id, title})=>{
         return <h2 key={id}>{title}</h2>
      })}
    </div>
  )
}

export default JsonPosts
