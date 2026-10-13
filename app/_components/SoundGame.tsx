'use client';

import { useState } from 'react';

const SoundGame = () => {
    const [mode, setMode] = useState<'independent' | 'together'>('independent');

    return (
        <section id="games" className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-slate-600 md:text-4xl">
                    Ігровий простір
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-500">
                    Розвиваємо мовлення через цікаві завдання та гру.
                </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900">
                    Знайди звук
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                    Обирай картинки, у назвах яких є потрібний звук.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <button
                        onClick={() => setMode('independent')}
                        type="button"
                        className={`rounded-full px-6 py-3 font-bold transition ${
                            mode === 'independent'
                                ? 'bg-orange-400 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                    >
                        Самостійна гра
                    </button>

                    <button
                        onClick={() => setMode('together')}
                        type="button"
                        className={`rounded-full px-6 py-3 font-bold transition ${
                            mode === 'together'
                                ? 'bg-orange-500 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                    >
                        Заняття з дорослим
                    </button>
                </div>

                <div className="mt-6 rounded-2xl bg-amber-50 p-5 ">
                    {mode === 'independent' ? (
                        <p className="leading-7 text-slate-600">
                            Обирай картинки самостійно та перевіряй свої
                            відповіді.
                        </p>
                    ) : (
                        <p className="leading-7 text-slate-500">
                            Разом із дорослим вимовляй слова, слухай звук і
                            обговорюй відповіді.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SoundGame;
