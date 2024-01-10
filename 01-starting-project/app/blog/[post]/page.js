export default function Post({ params }) {
  return (
    <main>
      <h1>Post</h1>
      <p>{params.post}</p>
    </main>
  );
}
