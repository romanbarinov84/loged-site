import Link from "next/link";

const HeaderPage = () => {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl bg-white px-6 py-4 shadow-sm">
      <Link href="/" className="text-xl font-extrabold text-teal-700">
        Мовленнєвий простір
      </Link>

      <nav className="hidden items-center gap-6 md:flex">
        <a href="#services" className="text-slate-700 hover:text-teal-700">
          Послуги
        </a>

        <a href="#about" className="text-slate-700 hover:text-teal-700">
          Про мене
        </a>

        <a href="#games" className="text-slate-700 hover:text-teal-700">
          Ігри
        </a>

        <a href="#reviews" className="text-slate-700 hover:text-teal-700">
          Відгуки
        </a>

        <a href="#questions" className="text-slate-700 hover:text-teal-700">
          Запитання
        </a>

        <a
          href="#contacts"
          className="rounded-full bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
        >
          Записатися
        </a>
      </nav>
    </header>
  );
};

export default HeaderPage;