import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-4">Ziri Dev 🚀</h1>
        <p className="text-xl text-slate-300 mb-8">WordPress • Next.js • React Native</p>
        <Link href="https://ziridev-fr.vercel.app" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
          Portfolio
        </Link>
      </div>
    </main>
  );
}
