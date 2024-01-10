import Link from "next/link";

export default function Meal({ params }) {
  return (
    <>
      <h1>{params.meal}</h1>
      <Link href={"/"}>Go Home</Link>
    </>
  );
}
