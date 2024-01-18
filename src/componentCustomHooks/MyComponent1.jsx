import useFetch from "./useFetch1"
// Example usage of the custom hook
 function MyComponent1() {
  const apiUrl = 'https://api.github.com/users';
  const { data, loading, error } = useFetch(apiUrl);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render your component with the fetched data
  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent1