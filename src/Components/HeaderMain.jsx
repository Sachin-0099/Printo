import React, { useState } from "react";

const categories = [
  {
    name: "Same Day Delivery",
    link: "/acrylic",
    subcategories: ["Business Cards", "Flyers", "Brochures"],
  },
  {
    name: "Stationary",
    link: "/shop",
    subcategories: ["Notebooks", "Envelopes", "Letterheads"],
  },
  {
    name: "Corporate Gift",
    link: "/photography",
    subcategories: ["Pens", "Gift Sets", "Custom Mugs"],
  },
  {
    name: "Drinkware",
    link: "/others",
    subcategories: ["Mugs", "Bottles", "Tumblers"],
  },
  {
    name: "Labels & Packaging",
    link: "/others",
    subcategories: ["Stickers", "Boxes", "Wraps"],
  },
  {
    name: "Apparels",
    link: "/others",
    subcategories: ["T-Shirts", "Hoodies", "Caps"],
  },
  {
    name: "Signages",
    link: "/others",
    subcategories: ["Indoor Signs", "Outdoor Signs", "Banners"],
  },
  {
    name: "Marketing & Promo",
    link: "/others",
    subcategories: ["Posters", "Flyers", "Standees"],
  },
  {
    name: "Photo Gifts",
    link: "/others",
    subcategories: ["Photo Frames", "Canvas Prints", "Calendars"],
  },
];

const HeaderMain = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="App flex justify-center items-center  relative border border-gray-400 bg-gray-100">
      <nav className="navbar  p-2 w-full max-w-5xl relative overflow-visible">
        <div className="flex justify-center space-x-4 py-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 px-3 border-black h-full hover:border-b-2"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href={category.link} className="text-black text-base sm:text-sm">
                {category.name}
              </a>
              {activeDropdown === index && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-40 z-50">
                  {category.subcategories.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href={`${category.link}/${sub.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default HeaderMain;
