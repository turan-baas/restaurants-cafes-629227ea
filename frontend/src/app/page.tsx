"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-full">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-wide text-accent">
              The Terrace
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
              <a href="#home" className="hover:text-accent transition-colors">Home</a>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
              <a href="#testimonials" className="hover:text-accent transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
              <a
                href="#contact"
                className="rounded-full bg-accent px-5 py-2 text-white hover:bg-accent-light transition-colors"
              >
                Reserve a Table
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-zinc-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100 px-4 pb-4">
            <div className="flex flex-col gap-3 pt-3 text-sm font-medium text-zinc-700">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-accent">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-accent">About</a>
              <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-accent">Menu</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-accent">Reviews</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-accent">Contact</a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 rounded-full bg-accent px-5 py-2 text-center text-white hover:bg-accent-light transition-colors"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero Section ── */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-accent-light text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Fine Dining &middot; Open-Air Terrace
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            The Terrace Restaurant
          </h1>
          <p className="text-lg sm:text-xl text-zinc-200 mb-8 max-w-xl mx-auto">
            Mediterranean-inspired cuisine in an elegant open-air setting,
            where every dish tells a story and every evening is unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="rounded-full bg-accent px-8 py-3 text-white font-semibold hover:bg-accent-light transition-colors text-lg"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="rounded-full border-2 border-white px-8 py-3 text-white font-semibold hover:bg-white hover:text-zinc-900 transition-colors text-lg"
            >
              View Menu
            </a>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="py-20 px-4 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-2">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6">
              A Tradition of Culinary Excellence
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Nestled on a sun-drenched terrace overlooking the city, The Terrace
              Restaurant has been a beloved destination for discerning diners since
              2010. Our chef-driven kitchen celebrates the finest seasonal
              ingredients, transforming them into vibrant Mediterranean dishes that
              honour tradition while embracing innovation.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              From hand-made pastas to wood-fired seafood, every plate is crafted
              with care and served in an atmosphere that blends rustic warmth with
              modern elegance. Whether it&apos;s a romantic dinner for two or a lively
              gathering of friends, The Terrace is where memories are made.
            </p>
            <div className="flex gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-sm text-zinc-500">Years of Service</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">30k+</p>
                <p className="text-sm text-zinc-500">Happy Guests</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">4.8</p>
                <p className="text-sm text-zinc-500">Average Rating</p>
              </div>
            </div>
          </div>
          <div className="relative h-80 md:h-full min-h-[320px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
              alt="Beautifully plated dish at The Terrace Restaurant"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Menu Highlights ── */}
      <section id="menu" className="py-20 px-4">
        <div className="mx-auto max-w-6xl text-center mb-14">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-2">
            Our Menu
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Signature Dishes
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            A curated selection of our most beloved creations, showcasing the
            freshest seasonal ingredients and Mediterranean flavours.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Grilled Octopus",
              desc: "Tender chargrilled octopus with roasted peppers, capers, and lemon-herb vinaigrette.",
              price: "$28",
              img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Truffle Risotto",
              desc: "Creamy Arborio rice finished with black truffle, aged Parmigiano, and micro herbs.",
              price: "$32",
              img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Pan-Seared Sea Bass",
              desc: "Wild-caught sea bass on a bed of saffron fennel purée with citrus beurre blanc.",
              price: "$36",
              img: "https://images.unsplash.com/photo-1534766555764-ce878a4e947d?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Lamb Rack",
              desc: "Herb-crusted lamb rack with rosemary jus, roasted root vegetables, and mint gremolata.",
              price: "$42",
              img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Burrata Salad",
              desc: "Fresh burrata with heirloom tomatoes, basil oil, aged balsamic, and toasted pine nuts.",
              price: "$18",
              img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Tiramisu",
              desc: "Classic Italian tiramisu with espresso-soaked ladyfingers, mascarpone, and cocoa.",
              price: "$14",
              img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
            },
          ].map((dish) => (
            <div
              key={dish.name}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg text-zinc-900">
                    {dish.name}
                  </h3>
                  <span className="font-bold text-accent">{dish.price}</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-20 px-4 bg-[var(--section-alt)]">
        <div className="mx-auto max-w-6xl text-center mb-14">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            What Our Guests Say
          </h2>
        </div>

        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "An unforgettable dining experience. The octopus was the best I've ever had, and the terrace views at sunset are simply magical.",
              name: "Sarah M.",
              role: "Food Blogger",
            },
            {
              quote:
                "We celebrated our anniversary here and it was perfect — impeccable service, stunning ambiance, and every course was a masterpiece.",
              name: "James & Linda R.",
              role: "Anniversary Dinner",
            },
            {
              quote:
                "The truffle risotto alone is worth the visit. The Terrace has become our go-to spot for special occasions. Highly recommended!",
              name: "David K.",
              role: "Regular Guest",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-100"
            >
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-zinc-900">{t.name}</p>
                <p className="text-sm text-zinc-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact / Reservation Section ── */}
      <section id="contact" className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-2">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              Reservations &amp; Contact
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Book your table or reach out with any questions. We&apos;d love to
              hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reservation form */}
            <div className="bg-[var(--section-alt)] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-zinc-900 mb-6">
                Make a Reservation
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                      Time
                    </label>
                    <select className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white">
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                      <option>8:30 PM</option>
                      <option>9:00 PM</option>
                      <option>9:30 PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">
                    Number of Guests
                  </label>
                  <select className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6 Guests</option>
                    <option>7+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Allergies, celebrations, seating preferences..."
                    className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent py-3 text-white font-semibold hover:bg-accent-light transition-colors"
                >
                  Request Reservation
                </button>
              </form>
            </div>

            {/* Contact info + map */}
            <div className="flex flex-col gap-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">Address</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    42 Harbour View Drive<br />
                    Waterfront District<br />
                    New York, NY 10005
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">Contact</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Phone: (212) 555-0198<br />
                    Email: hello@theterrace.com
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">Opening Hours</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Mon &ndash; Fri: 5:00 PM &ndash; 11:00 PM<br />
                    Sat &ndash; Sun: 12:00 PM &ndash; 11:00 PM
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">Follow Us</h4>
                  <div className="flex gap-3">
                    {/* Instagram */}
                    <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:bg-accent hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    {/* Facebook */}
                    <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:bg-accent hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    {/* X / Twitter */}
                    <a href="#" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:bg-accent hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-zinc-200 flex-1 min-h-[250px]">
                <iframe
                  title="The Terrace Restaurant location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d-74.013!3d40.708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzI4LjgiTiA3NMKwMDAnNDYuOCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 250 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-zinc-900 text-zinc-300 pt-16 pb-8 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">The Terrace</h4>
              <p className="text-sm leading-relaxed text-zinc-400">
                Mediterranean-inspired fine dining with panoramic terrace views.
                An unforgettable culinary experience since 2010.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-accent-light transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-accent-light transition-colors">About Us</a></li>
                <li><a href="#menu" className="hover:text-accent-light transition-colors">Menu</a></li>
                <li><a href="#testimonials" className="hover:text-accent-light transition-colors">Reviews</a></li>
                <li><a href="#contact" className="hover:text-accent-light transition-colors">Reservations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Hours</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Monday &ndash; Friday</li>
                <li className="text-white">5:00 PM &ndash; 11:00 PM</li>
                <li className="mt-2">Saturday &ndash; Sunday</li>
                <li className="text-white">12:00 PM &ndash; 11:00 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>42 Harbour View Drive</li>
                <li>Waterfront District</li>
                <li>New York, NY 10005</li>
                <li className="mt-2 text-white">(212) 555-0198</li>
                <li className="text-white">hello@theterrace.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <p>&copy; {new Date().getFullYear()} The Terrace Restaurant. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
