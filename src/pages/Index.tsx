import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const HERO_IMG = "https://cdn.poehali.dev/projects/e52344d3-35d4-4632-a1ca-5e98d7cd8d6c/files/9f7cce91-92d3-4b7f-99e8-84a3c2baa0f5.jpg";
const TRAINING_IMG = "https://cdn.poehali.dev/projects/e52344d3-35d4-4632-a1ca-5e98d7cd8d6c/files/b81f061a-f277-4ee0-8329-30f42c048c7d.jpg";
const GROUP_IMG = "https://cdn.poehali.dev/projects/e52344d3-35d4-4632-a1ca-5e98d7cd8d6c/files/75a6b0ee-39e0-48ed-9b50-f8c63a52095b.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "О нас", href: "#about" },
  { label: "Тренировки", href: "#training" },
  { label: "Цены", href: "#pricing" },
  { label: "Расписание", href: "#schedule" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

const TRAININGS = [
  { icon: "Dumbbell", title: "Тренажёрный зал", desc: "Современное оборудование от ведущих мировых брендов для силовых и кардио тренировок" },
  { icon: "Users", title: "Групповые программы", desc: "Йога, пилатес, кроссфит, функциональный тренинг, танцы и многое другое" },
  { icon: "UserCheck", title: "Персональный тренинг", desc: "Индивидуальные программы с сертифицированными тренерами под ваши цели" },
  { icon: "Heart", title: "Кардио зона", desc: "Беговые дорожки, эллипсоиды, велотренажёры с мультимедиа экранами" },
  { icon: "Flame", title: "Единоборства", desc: "Бокс, кикбоксинг, MMA — тренировки для любого уровня подготовки" },
  { icon: "Waves", title: "Бассейн и SPA", desc: "25-метровый бассейн, хаммам, сауна и зона релаксации" },
];

const PRICING = [
  {
    name: "Старт",
    price: "2 500",
    period: "месяц",
    features: ["Тренажёрный зал", "Кардио зона", "Раздевалка с душем", "Консультация тренера"],
    popular: false,
  },
  {
    name: "Оптимум",
    price: "4 500",
    period: "месяц",
    features: ["Всё из тарифа «Старт»", "Групповые программы", "Бассейн", "SPA-зона", "Заморозка до 7 дней"],
    popular: true,
  },
  {
    name: "Премиум",
    price: "7 000",
    period: "месяц",
    features: ["Всё из тарифа «Оптимум»", "4 персональные тренировки", "Полотенце и вода", "Гостевой визит", "Заморозка до 14 дней"],
    popular: false,
  },
  {
    name: "Годовой",
    price: "42 000",
    period: "год",
    features: ["Всё включено — полный доступ", "Безлимитные персональные", "Питание и диетолог", "VIP раздевалка", "Заморозка до 30 дней"],
    popular: false,
  },
];

const SCHEDULE = [
  { time: "07:00", mon: "Йога", tue: "—", wed: "Йога", thu: "—", fri: "Йога", sat: "Растяжка", sun: "—" },
  { time: "09:00", mon: "Кроссфит", tue: "Функц. тренинг", wed: "Кроссфит", thu: "Функц. тренинг", fri: "Кроссфит", sat: "Кроссфит", sun: "—" },
  { time: "11:00", mon: "Пилатес", tue: "Бокс", wed: "Пилатес", thu: "Бокс", fri: "Пилатес", sat: "Бассейн", sun: "Бассейн" },
  { time: "14:00", mon: "Силовая", tue: "Танцы", wed: "Силовая", thu: "Танцы", fri: "Силовая", sat: "—", sun: "—" },
  { time: "17:00", mon: "Бокс", tue: "Кроссфит", wed: "MMA", thu: "Кроссфит", fri: "Бокс", sat: "—", sun: "—" },
  { time: "19:00", mon: "Функц. тренинг", tue: "Йога", wed: "Функц. тренинг", thu: "Йога", fri: "Танцы", sat: "—", sun: "—" },
];

const GALLERY = [HERO_IMG, TRAINING_IMG, GROUP_IMG];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className="font-heading text-2xl font-bold tracking-wider text-primary">
          TITAN<span className="text-foreground"> FITNESS</span>
        </a>

        <nav className="hidden lg:flex gap-6">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <Button className="hidden lg:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider">
          ЗАПИСАТЬСЯ
        </Button>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 font-body text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button className="w-full mt-2 bg-primary text-primary-foreground font-heading tracking-wider">ЗАПИСАТЬСЯ</Button>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="TITAN Fitness зал" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-3xl">
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">Фитнес центр в Тольятти</p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6 animate-slide-up">
            СОЗДАЙ<br />
            <span className="text-primary">ЛУЧШУЮ</span><br />
            ВЕРСИЮ СЕБЯ
          </h1>
          <p className="font-body text-lg text-gray-300 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Современный фитнес центр с бассейном, SPA-зоной и лучшими тренерами города
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading text-lg tracking-wider px-8 py-6">
              НАЧАТЬ СЕЙЧАС
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-heading text-lg tracking-wider px-8 py-6">
              УЗНАТЬ БОЛЬШЕ
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary" />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-3">О нас</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              БОЛЬШЕ ЧЕМ<br /><span className="text-primary">ПРОСТО ЗАЛ</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              TITAN Fitness — это современное пространство площадью более 2000 м² в самом сердце Тольятти.
              Мы объединяем передовое оборудование, профессиональных тренеров и комфортную атмосферу,
              чтобы каждая тренировка приносила результат и удовольствие.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "2000+", label: "м² площадь" },
                { num: "15+", label: "тренеров" },
                { num: "50+", label: "тренажёров" },
                { num: "3000+", label: "клиентов" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-lg bg-card border border-border">
                  <p className="font-heading text-3xl font-bold text-primary">{s.num}</p>
                  <p className="font-body text-muted-foreground text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={TRAINING_IMG} alt="Тренировка" className="rounded-lg w-full object-cover aspect-[4/5]" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg hidden lg:block">
              <p className="font-heading text-4xl font-bold">7+</p>
              <p className="font-body text-sm">лет опыта</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrainingSection() {
  return (
    <section id="training" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-3">Направления</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            НАШИ <span className="text-primary">ТРЕНИРОВКИ</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAININGS.map((t) => (
            <Card key={t.title} className="bg-background border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon name={t.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{t.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-3">Абонементы</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            ВЫБЕРИ СВОЙ <span className="text-primary">ТАРИФ</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING.map((p) => (
            <Card
              key={p.name}
              className={`relative border transition-all duration-300 hover:-translate-y-1 ${
                p.popular ? "border-primary bg-primary/5" : "border-border bg-card"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-heading tracking-wider px-4 py-1 rounded-full">
                  ПОПУЛЯРНЫЙ
                </div>
              )}
              <CardContent className="p-8 text-center">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{p.name}</h3>
                <div className="mb-6">
                  <span className="font-heading text-4xl font-bold text-primary">{p.price}</span>
                  <span className="font-body text-muted-foreground text-sm ml-1">₽ / {p.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-heading tracking-wider ${
                    p.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  ВЫБРАТЬ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;

  return (
    <section id="schedule" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-3">Расписание</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            РАСПИСАНИЕ <span className="text-primary">ЗАНЯТИЙ</span>
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border">
                <th className="font-heading text-sm text-muted-foreground p-4 text-left">Время</th>
                {days.map((d) => (
                  <th key={d} className="font-heading text-sm text-muted-foreground p-4 text-center">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map((row) => (
                <tr key={row.time} className="border-b border-border/50 hover:bg-background/50 transition-colors">
                  <td className="font-heading text-primary font-semibold p-4">{row.time}</td>
                  {dayKeys.map((dk) => (
                    <td key={dk} className="font-body text-sm text-center p-4">
                      <span className={row[dk] === "—" ? "text-muted-foreground/40" : "text-foreground"}>
                        {row[dk]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-3">Галерея</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            НАШЕ <span className="text-primary">ПРОСТРАНСТВО</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {GALLERY.map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square">
              <img
                src={img}
                alt={`Фитнес зал ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-3">Контакты</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            СВЯЖИТЕСЬ <span className="text-primary">С НАМИ</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: "MapPin", title: "Адрес", text: "г. Тольятти, ул. Революционная, 52" },
              { icon: "Phone", title: "Телефон", text: "+7 (8482) 55-00-00" },
              { icon: "Mail", title: "E-mail", text: "info@titan-fitness.ru" },
              { icon: "Clock", title: "Время работы", text: "Пн-Пт: 06:00 — 23:00 | Сб-Вс: 08:00 — 22:00" },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name={c.icon} size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-heading text-foreground font-semibold mb-1">{c.title}</p>
                  <p className="font-body text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {[
                { icon: "MessageCircle", label: "Telegram" },
                { icon: "Instagram", label: "Instagram" },
                { icon: "Phone", label: "WhatsApp" },
              ].map((s) => (
                <button key={s.label} className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name={s.icon} size={20} className="text-foreground" />
                </button>
              ))}
            </div>
          </div>

          <Card className="bg-background border-border">
            <CardContent className="p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Запись на пробную тренировку</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <select className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-body text-muted-foreground focus:outline-none focus:border-primary transition-colors">
                  <option>Выберите направление</option>
                  <option>Тренажёрный зал</option>
                  <option>Групповые программы</option>
                  <option>Персональный тренинг</option>
                  <option>Бассейн</option>
                  <option>Единоборства</option>
                </select>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider py-6 text-lg">
                  ЗАПИСАТЬСЯ
                </Button>
                <p className="font-body text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <a href="#hero" className="font-heading text-xl font-bold tracking-wider text-primary">
          TITAN<span className="text-foreground"> FITNESS</span>
        </a>
        <p className="font-body text-sm text-muted-foreground">
          © 2025 TITAN Fitness. Все права защищены. г. Тольятти
        </p>
      </div>
    </footer>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <HeroSection />
      <AboutSection />
      <TrainingSection />
      <PricingSection />
      <ScheduleSection />
      <GallerySection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
