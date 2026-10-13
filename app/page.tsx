import HeaderPage from "./_components/Header";
import ReviewsPage from "./_components/Reviews";
import Image from "next/image";



export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-6">
      <HeaderPage />

     <section className="mx-auto grid max-w-6xl py-16 items-center gap-12 md:grid-cols-2">
      <div>
         <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
    Розвиваємо мовлення дитини через гру!
  </h1>

   <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
    Цікаві заняття, турботлива підтримка та інтерактивні ігри
    для розвитку мовлення.
  </p>

  <a
    href="#games"
    className="mt-8 inline-block rounded-full bg-orange-500 px-7 py-4 font-bold text-white shadow-md transition hover:bg-orange-600"
  >
    Грати та навчатися
  </a>
      </div>
 

 
  <div className="relative min-h-80 overflow-hidden rounded-3xl">
   <Image
    src="/images/Мовленнєвий простір_ грайливе навчання.png"
    alt="Дитина грається з іграшковою машинкою"
    width={1536}
    height={1024}
    className="h-auto w-full rounded-3xl"
    priority
  />
  </div>
</section>
<section className="mx-auto max-w-6xl py-16">
  <div className="mb-10 text-center">
    <h2 className="text-3xl font-bold text-slate-600 md:text-4xl">
      Чим я можу допомогти
    </h2>
    <p className="mt-4 text-lg text-slate-500">
       Кожна дитина розвивається у власному темпі.
      Знайдемо шлях до успіху разом!
    </p>
  </div>
  <div className="grid gap-6 md:grid-cols-3">

    <div className="rounded-3xl bg-white p-8 shadow-sm hover:-translate-1 hover:shadow-md">

      <div className="mb-4 text-4xl">💬
        {/* block speak */}
        <h3 className="text-xl font-bold text-slate-600">
          Розвиток мовлення
        </h3>
        <p className="mt-3 text-xl leading-7 text-slate-400">
           Розширюємо словниковий запас і вчимося будувати речення.
        </p>
      </div>
      </div>
    {/* block sounds */}
      <div className="rounded-3xl bg-white p-8 shadow-sm hover:-translate-1 hover:shadow-md">
        <div className="mb-4 text-4xl">🗣️
          <h3>
    Постановка звуків
    </h3>
    <p className="mt-3 text-xl leading-7 text-slate-400">
      Працюємо над правильною вимовою звуків у цікавій формі.
    </p>
        </div>
    
      </div>
      <div className="rounded-3xl bg-white p-8 shadow-sm hover:-translate-1 hover:shadow-md">
        <div className="mb-4 text-4xl">🧩
          <h3 className="text-xl text-slate-600 leading-7">
            Мовленнєві ігри
          </h3>
          <p className="mt-3 text-xl leading-7 text-slate-400">
           Розвиваємо мовлення за допомогою ігор та інтерактивних вправ.
          </p>
        </div>
      </div>
    
  </div>

</section>
      <ReviewsPage/>
    </main>
  );
}