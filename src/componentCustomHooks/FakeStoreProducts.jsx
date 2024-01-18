import LoadingIcon from '../components/LoadingIcon';
import useFetchApi from './useFetchApi'

function FakeStoreProducts() {
    let {apiData, isLoading, isError} = useFetchApi("https://api.github.com/users");
    // console.log(isLoading)
  return (
    <div>
      {isLoading && <LoadingIcon/>}
      {isError && <h1 style={{color : "red", marginTop: "200px"}}>Something went wrong...!!!</h1>}
      {apiData.map(({id, avatar_url})=>{
         return <img key={id} src={avatar_url} alt='No Pic' width={200} height={200}/>
      })}
    </div>
  )
}

export default FakeStoreProducts
