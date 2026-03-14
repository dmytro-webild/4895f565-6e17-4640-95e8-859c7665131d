"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardTwelve from "@/components/sections/feature/FeatureCardTwelve";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  const navItemsWithLinks = navItems.map((item) => ({
    ...item,
    href:
      item.id === "home"
        ? "/"
        : item.id === "menu"
          ? "/menu"
          : item.id === "about"
            ? "/about"
            : item.id === "gallery"
              ? "/gallery"
              : item.id === "reviews"
                ? "/reviews"
                : item.id === "contact"
                  ? "/contact"
                  : "#",
  }));

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
          brandName="Joy's Grill"
          navItems={navItems}
          button={{
            text: "Order Online",
            href: "/menu",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="about-hero" data-section="about-hero">
        <HeroLogoBillboardSplit
          logoText="About Joy's Grill"
          description="Learn the story behind our passion for perfect burgers and exceptional service."
          background={{ variant: "noise" }}
          buttons={[
            {
              text: "Our Story",
              href: "#story",
            },
          ]}
          buttonAnimation="slide-up"
          layoutOrder="reverse"
          imageSrc="http://img.b2bpic.net/free-photo/delicious-burger-fries-with-salad-table_613910-7485.jpg?_wi=1"
          imageAlt="Joy's Grill restaurant interior"
          mediaAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="about-story" data-section="about-story">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",
              content:
                "Our Passion for Perfect Burgers\nAt Joy's Grill & Burger House, we believe that a great burger starts with quality ingredients and ends with a satisfied customer. Every patty is hand-cut from premium beef, grilled to perfection, and topped with fresh, locally-sourced ingredients. We're not just making burgers - we're creating moments of joy for our community, one delicious bite at a time.",
            },
          ]}
          buttons={[
            {
              text: "Contact Us",
              href: "/contact",
            },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="about-values" data-section="about-values">
        <FeatureCardTwelve
          title="Our Core Values"
          description="These principles guide everything we do at Joy's Grill & Burger House."
          features={[
            {
              id: "fresh-ingredients-value",
              label: "Quality",
              title: "Fresh Ingredients",
              items: [
                "Hand-selected beef daily",
                "Farm-fresh produce",
                "Artisan suppliers only",
              ],
            },
            {
              id: "local-community-value",
              label: "Community",
              title: "Supporting Local",
              items: [
                "Local supplier partnerships",
                "Community involvement",
                "Neighborhood pride",
              ],
            },
            {
              id: "customer-service-value",
              label: "Service",
              title: "Exceptional Service",
              items: [
                "Friendly, attentive staff",
                "Quick, accurate orders",
                "Customer satisfaction first",
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="about-footer" data-section="about-footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Restaurant",
              items: [
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Menu",
                  href: "/menu",
                },
                {
                  label: "About Us",
                  href: "/about",
                },
                {
                  label: "Gallery",
                  href: "/gallery",
                },
              ],
            },
            {
              title: "Visit Us",
              items: [
                {
                  label: "4401 Carlisle Pike Suite G",
                  href: "#",
                },
                {
                  label: "Camp Hill, PA 17011",
                  href: "#",
                },
                {
                  label: "+1 (717) 761-7661",
                  href: "tel:+17177617661",
                },
                {
                  label: "Open Daily until 8 PM",
                  href: "#",
                },
              ],
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Reviews",
                  href: "/reviews",
                },
                {
                  label: "Contact",
                  href: "/contact",
                },
                {
                  label: "Instagram",
                  href: "#",
                },
                {
                  label: "Facebook",
                  href: "#",
                },
              ],
            },
          ]}
          copyrightText="© 2024 Joy's Grill & Burger House. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}