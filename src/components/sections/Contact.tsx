import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactTitle } from "../contact/ContactTitle";
import { ContactCTA } from "../contact/ContactCTA";
import { ContactInfo } from "../contact/ContactInfo";
import { ContactFooter } from "../contact/ContactFooter";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-line", {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".contact-main", start: "top 75%" },
      });
      gsap.from(".contact-info > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".contact-info", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={root}
      className="relative border-t border-line py-25 pb-14 md:py-40"
    >
      <div className="mx-auto w-full max-w-360 px-5 md:px-8">
        <div className="mb-20 flex items-center justify-between font-mono text-[12px] uppercase tracking-widest text-fg-dim">
          <span className="eyebrow">Contact — 05</span>
          <span>{new Date().getFullYear()} · all rights reserved</span>
        </div>

        <ContactTitle />
        <ContactCTA />
        <ContactInfo />
        <ContactFooter />
      </div>
    </section>
  );
}
