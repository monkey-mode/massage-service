import Header from "@/components/Header";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-screen h-screen bg-black opacity-60 -z-10"></div>
      <img
        className="w-screen object-cover -z-20 absolute"
        src="./93e024d5-5554-4d47-a331-4acad29d508f.jpg"
        alt="Background"
      />
      <Header />
      <ThemeSwitcher />
    </main>
  );
}
