import Image from "next/image";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-6">My Portfolio</h1>
        <p className="text-xl text-gray-600">Welcome to my online portfolio!</p>
        <p className="text-xl text-gray-600">ポートフォリオサイトだよ！</p>
      </header>
      
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          豊田愛のポートフォリオサイトです。
        </p>
      </section>

      <footer className="mt-10 text-center">
        <p className="text-gray-500">© 2024 Ai Toyoda. All rights reserved.</p>
      </footer>
    </main>
  );
}
