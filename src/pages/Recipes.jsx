import React from "react";

const makhanaRecipes = [
  {
    title: "Masala Roasted Makhana",
    img: "https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp",
    desc: "A crunchy and spicy snack perfect for evening cravings.",
    steps: [
      "Roast makhana in ghee",
      "Add salt and spices",
      "Mix well and serve hot"
    ]
  },
  {
    title: "Makhana Kheer",
    img: "https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp",
    desc: "Traditional Indian dessert made with milk and roasted makhana.",
    steps: [
      "Roast makhana and crush lightly",
      "Boil milk and add makhana",
      "Add sugar and dry fruits"
    ]
  }
];

const RecipeCard = ({ item }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="recipe-card h-100">
        <img src={item.img} alt="" className="img-fluid recipe-img" />

        <div className="p-3">

          <h5 className="fw-bold">{item.title}</h5>

          <p className="text-muted small">
            {item.desc}
          </p>

          <ul className="recipe-steps">
            {item.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <button className="btn btn-success btn-sm mt-2">
            View Full Recipe
          </button>

        </div>
      </div>
    </div>
  );
};

const RecipeSection = ({ title, recipes }) => {
  return (
    <section className="container py-5">

      <h2 className="fw-bold text-center mb-5">
        {title}
      </h2>

      <div className="row g-4">
        {recipes.map((item, index) => (
          <RecipeCard item={item} key={index} />
        ))}
      </div>

    </section>
  );
};

const RecipePage = () => {
  return (
    <div>

      {/* HERO */}

      <section className="recipe-hero text-center text-white">

        <div className="container">

          <h1 className="fw-bold">
            NatNutri Recipes
          </h1>

          <p className="col-lg-6 mx-auto">
            Discover delicious and healthy recipes using NatNutri products like
            roasted makhana, atta, sattu and spices.
          </p>

        </div>

      </section>

      {/* QUICK CATEGORY NAV */}

      <section className="recipe-categories container text-center">

        <div className="row g-3">

          {["Makhana","Atta","Sattu","Masala"].map((cat)=>(
            <div className="col-md-3 col-6" key={cat}>
              <div className="category-box">
                {cat} Recipes
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* MAKHANA */}

      <RecipeSection
        title="Roasted Makhana Recipes"
        recipes={makhanaRecipes}
      />

      {/* ATTA */}

      <RecipeSection
        title="Atta Recipes"
        recipes={makhanaRecipes}
      />

      {/* SATTU */}

      <RecipeSection
        title="Sattu Recipes"
        recipes={makhanaRecipes}
      />

      {/* MASALA */}

      <RecipeSection
        title="Masala Recipes"
        recipes={makhanaRecipes}
      />

      {/* COOKING TIPS */}

      <section className="tips-section">

        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Healthy Cooking Tips
          </h2>

          <div className="row text-center g-4">

            <div className="col-md-4">
              <div className="tip-card">
                <h5>Use Less Oil</h5>
                <p>Healthy cooking starts with minimal oil usage.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="tip-card">
                <h5>Choose Natural Ingredients</h5>
                <p>Always prefer natural and chemical free products.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="tip-card">
                <h5>Balanced Diet</h5>
                <p>Include protein, fiber and vitamins in daily meals.</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="recipe-cta text-center text-white">

        <div className="container">

          <h2 className="fw-bold">
            Try These Recipes With NatNutri Products
          </h2>

          <p>
            Order NatNutri ingredients and cook delicious healthy meals today.
          </p>

          <button className="btn btn-light px-4">
            View Products
          </button>

        </div>

      </section>

    </div>
  );
};

export default RecipePage;