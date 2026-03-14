"use client";

import Link from "next/link";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

const ReviewsPage = () => {
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
      background="noise"
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

      <div id="reviews-hero" data-section="reviews-hero">
        <HeroLogoBillboardSplit
          logoText="Customer Reviews"
          description="Loved by 382+ happy customers with a 4.9 star rating. Read what people are saying about Joy's Grill & Burger House."
          background={{ variant: "noise" }}
          buttons={[{ text: "Our Testimonials", href: "#reviews" }]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/smiley-friends-restaurant-together_23-2148395393.jpg"
          imageAlt="Happy customers enjoying food"
          mediaAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="reviews-testimonials" data-section="reviews-testimonials">
        <TestimonialCardFifteen
          testimonial="Wow. I searched for the best food near me and this place came up. Huge burgers, amazing taste, and great prices. Definitely worth the visit! The staff is super friendly and the atmosphere is perfect for family dinners or hanging out with friends."
          rating={5}
          author="Sarah Johnson"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1628.jpg", alt: "Sarah J." },
            { src: "http://img.b2bpic.net/free-photo/indoor-portrait-gorgeous-young-caucasian-female-student-with-perfect-healthy-skin_273609-9035.jpg", alt: "Customer" },
            { src: "http://img.b2bpic.net/free-photo/close-up-man-that-works-home_329181-14524.jpg", alt: "Customer" },
            { src: "http://img.b2bpic.net/free-photo/sonrisa-belleza-gente-alegria-chicas_1301-1166.jpg", alt: "Customer" },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="reviews-faq" data-section="reviews-faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about Joy's Grill & Burger House."
          faqs={[
            {
              id: "faq-1",
              title: "What are your opening hours?",
              content: "We're open daily from 10:30 AM to 8:00 PM. We pride ourselves on serving fresh, hot food during our full operating hours.",
            },
            {
              id: "faq-2",
              title: "Do you offer takeout and online ordering?",
              content: "Yes! We offer both takeout and online ordering options. Visit our menu page to place your order or call us directly at +1 (717) 761-7661.",
            },
            {
              id: "faq-3",
              title: "Are your burgers made fresh to order?",
              content: "Absolutely! Every burger is made fresh when you order. We use premium ingredients and hand-cut beef patties grilled to perfection.",
            },
            {
              id: "faq-4",
              title: "What's your price range?",
              content: "Our meals are priced between $10-$20 per person, offering great value for high-quality, gourmet food.",
            },
            {
              id: "faq-5",
              title: "Do you have vegetarian options?",
              content: "We offer sides like fries and onion rings, as well as custom orders. Please contact us for specific vegetarian meal options.",
            },
            {
              id: "faq-6",
              title: "Can I reserve a table for a large group?",
              content: "Please call us at +1 (717) 761-7661 to discuss group reservations and special arrangements.",
            },
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="reviews-footer" data-section="reviews-footer">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2024 Joy's Grill & Burger House. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
};

export default ReviewsPage;