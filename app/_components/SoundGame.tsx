'use client';

import { useState } from 'react';
import { cards } from '../data/Cards';

const SoundGame = () => {
    const [mode, setMode] = useState<'independent' | 'together'>('independent');
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedSound, setSelectedSound] = useState<'с' | 'ш'>('с');

    function toggleCard(id: number) {
        setIsChecked(false);
        setSelectedCards((current) =>
            current.includes(id)
                ? current.filter((cardId) => cardId !== id)
                : [...current, id],
        );
    }
    const correctAnswers = cards.filter((card) => {
        const isSelected = selectedCards.includes(card.id);
        const hasSound = card.sounds.includes(selectedSound);

        return isSelected === hasSound;
    }).length;

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
                <div className="mt-6">
                    <p className="mt-3 mb-3 font-bold text-center text-slate-600">
                        Який звук шукаємо?
                    </p>
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                setSelectedSound('с');
                                setSelectedCards([]);
                                setIsChecked(false);
                            }}
                            className={`rounded-full px-6 py-4 transition font-bold ${
                                selectedSound === 'с'
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-teal-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            звук С
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setSelectedSound('ш');
                                setSelectedCards([]);
                                setIsChecked(false);
                            }}
                            className={`rounded-full px-6 py-4 transition font-bold ${
                                selectedSound === 'ш'
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-teal-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            звук Ш
                        </button>
                    </div>
                </div>
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
                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {cards.map((card) => {
                        const isSelected = selectedCards.includes(card.id);
                        const hasSound = card.sounds.includes(selectedSound);
                        const isCorrect = hasSound === isSelected;

                        return (
                            <button
                                type="button"
                                key={card.id}
                                onClick={() => toggleCard(card.id)}
                                className={`rounded-2xl border-2 p-5 text-center transition ${
                                    isChecked
                                        ? isCorrect
                                            ? 'border-teal-500 bg-teal-50'
                                            : 'border-red-400 bg-red-50'
                                        : isSelected
                                          ? 'border-orange-500 bg-orange-50'
                                          : 'border-slate-100 bg-white hover:border-teal-400'
                                }`}
                            >
                                <span className="block text-5xl">
                                    {card.emoji}
                                </span>
                                <span className="mt-3 block text-slate-600 font-bold">
                                    {card.word}
                                </span>
                            </button>
                        );
                    })}
                </div>
                <div className="mt-8 text-center">
                    <button
                        type="button"
                        onClick={() => setIsChecked(true)}
                        className="rounded-full bg-teal-600 px-6 py-4 font-bold text-white transition hover:bg-teal-700"
                    >
                        Перевірити відповіді
                    </button>
                    {isChecked && (
                        <div
                            className="rounded-2xl mt-6 bg-teal-100 p-5 text-center"
                            role="status"
                        >
                            <h4 className="text-xl text-center text-teal-900">
                                Твій результат: {correctAnswers} із{' '}
                                {cards.length}
                            </h4>
                            <p className="mt-2 text-slate-600">
                                {correctAnswers === cards.length
                                    ? 'Чудова робота! Усі відповіді правильні!'
                                    : correctAnswers >= 3
                                      ? 'Молодець! Ти майже все виконав правильно!'
                                      : 'Спробуй ще раз! Уважно послухай слова.'}
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedCards([]);
                                    setIsChecked(false);
                                }}
                                className="mt-4 rounded-full bg-white px-6 py-3 font-bold text-teal-700 shadow-sm transition hover:bg-teal-100"
                            >
                                Спробувати ще раз
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SoundGame;
