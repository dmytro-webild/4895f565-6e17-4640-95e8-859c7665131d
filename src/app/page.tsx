"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardTwelve from "@/components/sections/feature/FeatureCardTwelve";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function HomePage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" }
  ];

  const footerColumns = [
    {
      title: "Restaurant",
      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "About Us", href: "/about" },
        { label: "Gallery", href: "/gallery" }
      ]
    },
    {
      title: "Visit Us",
      items: [
        { label: "4401 Carlisle Pike Suite G", href: "#" },
        { label: "Camp Hill, PA 17011", href: "#" },
        { label: "+1 (717) 761-7661", href: "tel:+17177617661" },
        { label: "Open Daily until 8 PM", href: "#" }
      ]
    },
    {
      title: "Connect",
      items: [
        { label: "Reviews", href: "/reviews" },
        { label: "Contact", href: "/contact" },
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" }
      ]
    }
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
          button={{
            text: "Order Online",
            href: "/menu"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero-home" data-section="hero-home">
        <HeroLogoBillboardSplit
          logoText="Joy's Grill & Burger House"
          description="Premium gourmet burgers and grilled specialties crafted with fresh ingredients. Experience the perfect blend of smoky, juicy flavors in every bite. Open daily until 8 PM."
          background={{ variant: "plain" }}
          buttons={[
            { text: "View Menu", href: "/menu" },
            { text: "Order Online", href: "/menu" },
            { text: "Call Now", href: "tel:+17177617661" }
          ]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/front-view-fresh-beef-burgers-with-bacon-slate-board_23-2148784478.jpg"
          imageAlt="Gourmet burger with fresh toppings"
          mediaAnimation="slide-up"
          frameStyle="card"
          containerClassName="py-20"
        />
      </div>

      <div id="featured-products-home" data-section="featured-products-home">
        <ProductCardFour
          title="Featured Menu Items"
          description="Discover our most popular burgers and sides loved by customers."
          products={[
            {
              id: "peanut-butter-burger-prod",
              name: "Peanut Butter Burger",
              price: "$14.99",
              variant: "Premium",
              imageSrc: "http://img.b2bpic.net/free-photo/hamburger-with-black-bun-blue-background_23-2148258531.jpg",
              imageAlt: "Peanut Butter Burger"
            },
            {
              id: "roadhouse-burger-prod",
              name: "Roadhouse Burger",
              price: "$13.99",
              variant: "Classic",
              imageSrc: "http://img.b2bpic.net/free-photo/classic-meat-burger-with-french-fries-pickles_140725-9488.jpg",
              imageAlt: "Roadhouse Burger"
            },
            {
              id: "classic-cheeseburger-prod",
              name: "Classic Cheeseburger",
              price: "$11.99",
              variant: "Original",
              imageSrc: "http://img.b2bpic.net/free-photo/burger-with-tomatoes-pickles-lettuce-cheese_141793-532.jpg",
              imageAlt: "Classic Cheeseburger"
            },
            {
              id: "loaded-fries-prod",
              name: "Loaded Fries",
              price: "$8.99",
              variant: "Premium Sides",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-french-fries-basket-with-ketchup-board_141793-4001.jpg",
              imageAlt: "Loaded Fries with Cheese"
            }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Explore Full Menu", href: "/menu" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials-home" data-section="testimonials-home">
        <TestimonialCardFifteen
          testimonial="Wow. I searched for the best food near me and this place came up. Huge burgers, amazing taste, and great prices. Definitely worth the visit!"
          rating={5}
          author="Happy Customer"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1628.jpg", alt: "Customer 1" },
            { src: "http://img.b2bpic.net/free-photo/indoor-portrait-gorgeous-young-caucasian-female-student-with-perfect-healthy-skin_273609-9035.jpg", alt: "Customer 2" },
            { src: "http://img.b2bpic.net/free-photo/close-up-man-that-works-home_329181-14524.jpg", alt: "Customer 3" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="about-home" data-section="about-home">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",
              content: "Welcome to Joy's Grill & Burger House - Where Passion Meets Flavor"
            }
          ]}
          buttons={[
            { text: "Learn More About Us", href: "/about" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="gallery-preview-home" data-section="gallery-preview-home">
        <FeatureCardTwelve
          title="Experience Joy's Grill"
          description="From our state-of-the-art kitchen to your table, every burger is made with care and premium ingredients."
          features={[
            {
              id: "fresh-ingredients",
              label: "Premium Quality",
              title: "Fresh Ingredients Daily",
              items: [
                "Hand-cut beef patties",
                "Farm-fresh vegetables",
                "Artisan bread selection"
              ]
            },
            {
              id: "expert-preparation",
              label: "Skilled Chefs",
              title: "Expert Preparation",
              items: [
                "Perfect grill temperatures",
                "Precision cooking times",
                "Professional plating"
              ]
            },
            {
              id: "customer-satisfaction",
              label: "Guaranteed",
              title: "100% Satisfaction",
              items: [
                "4.9 stars from 382 reviews",
                "Fast, friendly service",
                "Every meal made to order"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "View Full Gallery", href: "/gallery" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="social-proof-home" data-section="social-proof-home">
        <SocialProofOne
          names={[
            "Local Choice",
            "Best Burgers",
            "Customer Favorite",
            "Top Rated",
            "Award Winner",
            "Trusted Local",
            "Premium Quality",
            "Family Approved"
          ]}
          title="Trusted by the Community"
          description="Serving Camp Hill and beyond with award-winning burgers since day one."
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
        />
      </div>

      <div id="contact-cta-home" data-section="contact-cta-home">
        <ContactCTA
          tag="Ready to Order?"
          title="Get Your Burger Now"
          description="Call us or visit our menu to place your order. Open daily until 8 PM. We're located at 4401 Carlisle Pike Suite G, Camp Hill, PA 17011."
          buttons={[
            { text: "Call +1 (717) 761-7661", href: "tel:+17177617661" },
            { text: "Visit Menu", href: "/menu" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer-home" data-section="footer-home">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2024 Joy's Grill & Burger House. All rights reserved. Fresh burgers. Premium quality. Local pride."
        />
      </div>
    </ThemeProvider>
  );
}