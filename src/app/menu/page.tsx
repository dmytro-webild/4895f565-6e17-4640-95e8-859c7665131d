"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function MenuPage() {
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

      <div id="menu-hero" data-section="menu-hero">
        <HeroLogoBillboardSplit
          logoText="Our Menu"
          description="Explore our full selection of premium burgers, sides, and refreshing beverages. All items made fresh to order with the finest ingredients."
          background={{ variant: "plain" }}
          buttons={[
            { text: "Order Now", href: "#burgers" }
          ]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/man-holds-burger-with-hands-potato-chip_1150-1863.jpg?_wi=2"
          imageAlt="Fresh burger preparation"
          mediaAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="menu-burgers" data-section="menu-burgers">
        <ProductCardFour
          title="Signature Burgers"
          description="Our handcrafted burgers feature premium beef patties grilled to perfection."
          products={[
            {
              id: "peanut-butter-burger-menu",
              name: "Peanut Butter Burger",
              price: "$14.99",
              variant: "Premium Specialty",
              imageSrc: "http://img.b2bpic.net/free-photo/hamburger-with-black-bun-blue-background_23-2148258531.jpg?_wi=3",
              imageAlt: "Peanut Butter Burger"
            },
            {
              id: "roadhouse-burger-menu",
              name: "Roadhouse Burger",
              price: "$13.99",
              variant: "Classic",
              imageSrc: "http://img.b2bpic.net/free-photo/classic-meat-burger-with-french-fries-pickles_140725-9488.jpg?_wi=2",
              imageAlt: "Roadhouse Burger"
            },
            {
              id: "classic-cheeseburger-menu",
              name: "Classic Cheeseburger",
              price: "$11.99",
              variant: "Original",
              imageSrc: "http://img.b2bpic.net/free-photo/burger-with-tomatoes-pickles-lettuce-cheese_141793-532.jpg?_wi=2",
              imageAlt: "Classic Cheeseburger"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="menu-sides" data-section="menu-sides">
        <ProductCardFour
          title="Sides"
          description="Crispy, delicious sides that pair perfectly with our signature burgers."
          products={[
            {
              id: "french-fries-menu",
              name: "French Fries",
              price: "$5.99",
              variant: "Classic",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-french-fries-plate_23-2148262916.jpg",
              imageAlt: "Golden French Fries"
            },
            {
              id: "loaded-fries-menu",
              name: "Loaded Fries",
              price: "$8.99",
              variant: "Premium",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-french-fries-basket-with-ketchup-board_141793-4001.jpg?_wi=3",
              imageAlt: "Loaded Fries with Cheese & Bacon"
            },
            {
              id: "onion-rings-menu",
              name: "Onion Rings",
              price: "$6.99",
              variant: "Classic",
              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-onion-rings-fries_23-2148272989.jpg",
              imageAlt: "Crispy Onion Rings"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="menu-drinks" data-section="menu-drinks">
        <ProductCardFour
          title="Beverages"
          description="Refreshing drinks to complement your meal."
          products={[
            {
              id: "soft-drinks-menu",
              name: "Soft Drinks",
              price: "$2.99",
              variant: "Various Flavors",
              imageSrc: "http://img.b2bpic.net/free-photo/fizzy-cola-drink-macro-shot_53876-95403.jpg",
              imageAlt: "Soft Drinks"
            },
            {
              id: "milkshakes-menu",
              name: "Milkshakes",
              price: "$5.99",
              variant: "Premium Shakes",
              imageSrc: "http://img.b2bpic.net/free-photo/creamy-dessert-with-chocolate-cookies-blue-table_114579-10347.jpg",
              imageAlt: "Creamy Milkshakes"
            },
            {
              id: "iced-tea-menu",
              name: "Iced Tea",
              price: "$3.49",
              variant: "Freshly Brewed",
              imageSrc: "http://img.b2bpic.net/free-photo/cocktail_23-2148014895.jpg",
              imageAlt: "Refreshing Iced Tea"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="menu-footer" data-section="menu-footer">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2024 Joy's Grill & Burger House. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}