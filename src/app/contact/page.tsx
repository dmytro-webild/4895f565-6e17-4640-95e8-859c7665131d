"use client";

import Link from "next/link";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

const ContactPage = () => {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Restaurant",
      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "About Us", href: "/about" },
        { label: "Gallery", href: "/gallery" },
      ],
    },
    {
      title: "Visit Us",
      items: [
        { label: "4401 Carlisle Pike Suite G", href: "#" },
        { label: "Camp Hill, PA 17011", href: "#" },
        { label: "+1 (717) 761-7661", href: "tel:+17177617661" },
        { label: "Open Daily until 8 PM", href: "#" },
      ],
    },
    {
      title: "Connect",
      items: [
        { label: "Reviews", href: "/reviews" },
        { label: "Contact", href: "/contact" },
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="compact"
      sizing="largeSmallSizeMediumTitles"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={navItems}
          brandName="Joy's Grill"
          button={{ text: "Order Online", href: "/menu" }}
          animateOnLoad={true}
        />
      </div>

      <div id="contact-hero" data-section="contact-hero">
        <HeroLogoBillboardSplit
          logoText="Get In Touch"
          description="Have a question or ready to place an order? Contact Joy's Grill & Burger House today. We're always happy to hear from you!"
          background={{ variant: "plain" }}
          buttons={[{ text: "Contact Info", href: "#contact" }]}
          buttonAnimation="slide-up"
          layoutOrder="reverse"
          imageSrc="http://img.b2bpic.net/free-photo/delicious-burger-fries-with-salad-table_613910-7485.jpg?_wi=2"
          imageAlt="Contact us at Joy's Grill"
          mediaAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="contact-form" data-section="contact-form">
        <ContactCTA
          tag="Contact Information"
          title="Reach Out to Us"
          description="Joy's Grill & Burger House
4401 Carlisle Pike Suite G, Camp Hill, PA 17011
Phone: +1 (717) 761-7661
Open Daily: 10:30 AM - 8:00 PM

We're conveniently located in Camp Hill and ready to serve you. Call to place an order, make a reservation, or ask any questions."
          buttons={[
            { text: "Call +1 (717) 761-7661", href: "tel:+17177617661" },
            { text: "View Our Menu", href: "/menu" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="contact-footer" data-section="contact-footer">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2024 Joy's Grill & Burger House. All rights reserved. Fresh burgers. Premium quality. Local pride."
        />
      </div>
    </ThemeProvider>
  );
};

export default ContactPage;