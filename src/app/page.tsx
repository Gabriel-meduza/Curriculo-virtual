import Imagem from '@/components/Imagem';
import Button from '@/components/button';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#000969] to-[#000000]">
      <div className="flex flex-col py-24 items-center gap-8">
        <Imagem />
        <Button />
      </div>

      <div className="flex justify-center text-white py-4">
        <footer className="">
          Feito por
          <a
            className="px-1"
            href="https://github.com/Gabriel-meduza"
            target="_blank"
          >
            Gabriel Ortiz
          </a>
        </footer>
      </div>
    </div>
  );
}
