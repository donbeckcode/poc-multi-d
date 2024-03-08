import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          height: "100vh",
        }}
      >
        <Link href="http://domain1.localhost:3000">Domain 1</Link>
        <Link href="http://domain2.localhost:3000">Domain 2</Link>
      </div>
    </main>
  );
}
