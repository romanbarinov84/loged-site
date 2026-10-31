'use client'

import Link from 'next/link';
import { useState } from 'react';

const HeaderPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    function openMenu() {
        setIsOpen((prev) => !prev);
    }

    return (
        <main className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 mt-4 mb-4 shadow-sm ">
            <Link
                href="/"
                className=" px-6 py-2 text-xl font-extrabold text-teal-700"
            >
                Мовленнєвий простір
            </Link>

            
            <nav className="hidden items-center gap-6 md:flex">
                <Link
                    href="/services"
                    className="text-slate-700 hover:text-teal-700"
                >
                    Послуги
                </Link>

                <Link
                    href="/about"
                    className="text-slate-700 hover:text-teal-700"
                >
                    Про мене
                </Link>

                <Link
                    href="/games"
                    className="text-slate-700 hover:text-teal-700"
                >
                    Ігри
                </Link>
                <Link
                    href="/materials"
                    className="text-slate-700 hover:text-teal-700"
                >
                    Матеріали
                </Link>

                <Link
                    href="/reviews"
                    className="text-slate-700 hover:text-teal-700"
                >
                    Відгуки
                </Link>

                <Link
                    href="/questions"
                    className="text-slate-700 hover:text-teal-700"
                >
                    Запитання
                </Link>

                <Link
                    href="/contacts"
                    className="rounded-full bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
                >
                    Записатися
                </Link>
            </nav>
            
        <button 
            onClick={openMenu}
            className="rounded-full bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700 md:hidden">
                Меню
            </button>

            {isOpen && (
              <nav className='w-full flex flex-col gap-4 md:hidden border-2 border-gray-300 shadow-md p-3 m-2 rounded-lg bg-slate-50 transition'>
                
       <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 hover:text-teal-700"
                >
                    Послуги
                </Link>

                <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 hover:text-teal-700"
                >
                    Про мене
                </Link>

                <Link
                    href="/games"
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 hover:text-teal-700"
                >
                    Ігри
                </Link>
                <Link
                    href="/materials"
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 hover:text-teal-700"
                >
                    Матеріали
                </Link>

                <Link
                    href="/reviews"
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 hover:text-teal-700"
                >
                    Відгуки
                </Link>

                <Link
                    href="/questions"
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 hover:text-teal-700"
                >
                    Запитання
                </Link>

                <Link
                    href="/contacts"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
                >
                    Записатися
                </Link>

    

                
              </nav>
            )}
      
           
        </main>
    );
};

export default HeaderPage;
