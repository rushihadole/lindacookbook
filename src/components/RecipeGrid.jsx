import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }) {
  return (
    <section aria-label="Recipe collection" className="mt-10 md:mt-14">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
        {recipes.map((recipe, index) => (
          <RecipeCard key={recipe.slug} recipe={recipe} index={index} />
        ))}
      </div>
    </section>
  );
}
