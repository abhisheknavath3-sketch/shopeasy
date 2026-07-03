const filteredProducts = products.filter(
  (product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return (
      matchesSearch &&
      matchesCategory
    );
  }
);