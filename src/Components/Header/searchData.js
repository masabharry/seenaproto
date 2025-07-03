import dropdownContent from "./DropdownContent";

const searchData = [];

for (const key in dropdownContent) {
  const category = dropdownContent[key];
  category.sections.forEach((section) => {
    section.items.forEach((item) => {
      searchData.push({
        label: item.label,
        href: item.href,
        group: key, // optional: Product, About, etc.
      });
    });
  });
}

export default searchData;

