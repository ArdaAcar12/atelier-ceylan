import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier Ceylan - İletişim",
  description: "Atelier Ceylan ile iletişime geçin, proje başvurusu yapın veya danışma kapasitensiziz alın.",
};

interface ContactField {
  id: number;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
}

const contactFields: ContactField[] = [
  {
    id: 1,
    label: "Adınız Soyadınız",
    placeholder: "Adınız ve soyadınız",
    type: "text",
  },
  {
    id: 2,
    label: "E-posta Adresiniz",
    placeholder: "example@email.com",
    type: "email",
  },
  {
    id: 3,
    label: "Telefon Numaranız",
    placeholder: "+90 536 391 70 44",
    type: "tel",
  },
  {
    id: 4,
    label: "Proje Hakkında",
    placeholder: "Proje talebinizi kısa olarak açıklayın",
    type: "textarea",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 transition-colors duration-300 dark:bg-gray-900/80">
        <div className="container flex items-center justify-between h-20 px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Atelier Ceylan"
              width={40}
              height={40}
              className="dark:invert"
            />
            <span className="text-xl font-semibold tracking-tight">Atelier Ceylan</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Ana Sayfa</Link>
            <Link href="/#projects" className="font-medium text-primary">Portfolyo</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">İletişim</Link>
          </nav>
          <Link href="/" className="btn-primary">
            Ana Sayfa
          </Link>
        </div>
      </header>

      <main className="pt-20 pb-12">
        <section className="container py-24 px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4">
              Bize Ulaşın
            </h1>
            <p className="text-lg text-muted/70 max-w-2xl mx-auto">
              Ceylan Atelier ile iletişime geçmek için aşağıdaki formu doldurabilir veya doğrudan bilgi kullanabilirsiniz.
            </p>
          </div>
        </section>

        <section className="container py-24 px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bold text-4xl md:text-5xl tracking-tight text-foreground mb-6">
                İletişim Bilgileri
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Image
                    src="/location.svg"
                    alt="Location"
                    width={24}
                    height={24}
                    className="text-primary flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium text-foreground">Ofis Adresi</p>
                    <p className="text-muted/70 text-sm">
                      Ceylan Atelier
                      <br />
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/phone.svg"
                    alt="Phone"
                    width={24}
                    height={24}
                    className="text-primary flex-shrink-0"
                  />
                  <a
                    href="tel:+905363917044"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +90 536 391 70 44
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/mail.svg"
                    alt="Mail"
                    width={24}
                    height={24}
                    className="text-primary flex-shrink-0"
                  />
                  <a
                    href="mailto:ardaceylan03@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    ardaceylan03@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="text-primary dark:invert flex-shrink-0"
                  />
                  <a
                    href="https://www.instagram.com/arda_ceyln/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-colors"
                  >
                    @arda_ceyln
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="text-primary dark:invert flex-shrink-0"
                  />
                  <a
                    href="https://www.linkedin.com/in/arda-ceylan-432851298/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-colors"
                  >
                    Arda Ceylan
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-4xl md:text-5xl tracking-tight text-foreground mb-6">
                İletişim Formu
              </h2>
              <form
                className="space-y-4"
                action="/api/contact"
              >
                {contactFields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label
                      htmlFor={`contact-${field.id}`}
                      className="block text-muted/70 text-sm font-medium mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      id={`contact-${field.id}`}
                      type={field.type}
                      name={field.label}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white dark:bg-gray-700 text-foreground placeholder-muted/50"
                      required
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="btn-primary w-full py-3 rounded-md font-medium transition-colors"
                >
                  Mesajı Gönder
                </button>
                <p className="text-xs text-muted/60">
                  Form submission handler needed
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}