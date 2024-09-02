import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-6">My Portfolio</h1>
        <p className="text-xl text-gray-600">Welcome to my online portfolio!</p>
      </header>
      
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          I ’m a web developer with a passion for creating beautiful and functional websites. 
          I specialize in React, Next.js, and modern web technologies.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600">A brief description of your project.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600">A brief description of your project.</p>
          </div>
        </div>
      </section>

      <footer className="mt-10 text-center">
        <p className="text-gray-500">© 2024 Your Name. All rights reserved.</p>
      </footer>
    </main>
  );
}
