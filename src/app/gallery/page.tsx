"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function GalleryPage() {
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
      background="circleGradient"
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

      <div id="gallery-hero" data-section="gallery-hero">
        <HeroLogoBillboardSplit
          logoText="Gallery"
          description="Explore the artistry and passion that goes into every dish at Joy's Grill & Burger House."
          background={{ variant: "noise" }}
          buttons={[
            {
              text: "See More",
              href: "#gallery",
            },
          ]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/top-view-woman-having-lunch-with-salmon-with-brown-noodles-soup-berry-salad-cocktail_141793-2455.jpg"
          imageAlt="Professional food plating"
          mediaAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="gallery-showcase" data-section="gallery-showcase">
        <BlogCardOne
          title="Food Gallery"
          description="Discover the visual feast behind Joy's Grill & Burger House."
          blogs={[
            {
              id: "burger-artistry",
              category: "Signature Dishes",
              title: "Burger Craftsmanship",
              excerpt:
                "Each burger is an art form. Hand-selected beef, perfectly grilled, topped with premium ingredients.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/hamburger-with-black-bun-blue-background_23-2148258531.jpg",
              imageAlt: "Signature Burger",
              authorName: "Joy's Team",
              authorAvatar:
                "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1628.jpg",
              date: "2024",
            },
            {
              id: "crispy-sides",
              category: "Sides",
              title: "Perfectly Crispy Sides",
              excerpt:
                "Golden fries and crispy onion rings that complement every burger perfectly.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/top-view-french-fries-basket-with-ketchup-board_141793-4001.jpg",
              imageAlt: "Loaded Fries",
              authorName: "Joy's Team",
              authorAvatar:
                "http://img.b2bpic.net/free-photo/indoor-portrait-gorgeous-young-caucasian-female-student-with-perfect-healthy-skin_273609-9035.jpg",
              date: "2024",
            },
            {
              id: "refreshing-drinks",
              category: "Beverages",
              title: "Refreshing Beverages",
              excerpt:
                "Creamy milkshakes, cold soft drinks, and fresh iced tea to complete your meal.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/closeup-refreshing-drinks-with-fruits-jar-table-sunlight_181624-21431.jpg",
              imageAlt: "Drink Selection",
              authorName: "Joy's Team",
              authorAvatar:
                "http://img.b2bpic.net/free-photo/close-up-man-that-works-home_329181-14524.jpg",
              date: "2024",
            },
            {
              id: "kitchen-prep",
              category: "Behind the Scenes",
              title: "Expert Preparation",
              excerpt:
                "Fresh ingredients prepared with care and expertise by our skilled team.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/man-holds-burger-with-hands-potato-chip_1150-1863.jpg",
              imageAlt: "Kitchen Preparation",
              authorName: "Joy's Team",
              authorAvatar:
                "http://img.b2bpic.net/free-photo/sonrisa-belleza-gente-alegria-chicas_1301-1166.jpg",
              date: "2024",
            },
            {
              id: "ambiance",
              category: "Restaurant",
              title: "Welcoming Atmosphere",
              excerpt:
                "A friendly, clean, and comfortable space where families and friends gather to enjoy great food.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/delicious-burger-fries-with-salad-table_613910-7485.jpg",
              imageAlt: "Restaurant Interior",
              authorName: "Joy's Team",
              authorAvatar:
                "http://img.b2bpic.net/free-photo/smiling-man-his-work-time-office-job_23-2149571041.jpg",
              date: "2024",
            },
            {
              id: "customer-favorites",
              category: "Community",
              title: "Customer Favorites",
              excerpt:
                "Serving smiles and satisfaction to our community, one burger at a time.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/smiley-friends-restaurant-together_23-2148395393.jpg",
              imageAlt: "Happy Customers",
              authorName: "Joy's Team",
              authorAvatar:
                "http://img.b2bpic.net/free-photo/cheerful-young-businesswoman-smiling-camera_74855-4022.jpg",
              date: "2024",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="gallery-footer" data-section="gallery-footer">
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