import { site } from "../data/site";
import { recipes } from "../data/recipes";
import RecipeGrid from "../components/RecipeGrid";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-4 md:px-10 md:pb-16 md:pt-8">
        <div className="notebook-page text-center">
          <p className="text-lg text-ink-faded md:text-xl">{site.dedication}</p>
          <h1 className="hand-title mt-2 text-6xl leading-none text-ink md:text-8xl">
            {site.title}
          </h1>
          <p className="hand-underline mx-auto mt-6 inline-block text-2xl text-rust md:text-3xl">
            {site.subtitle}
          </p>
          {site.intro && (
            <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-ink-light md:text-xl">
              {site.intro}
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="hand-title text-4xl text-ink md:text-5xl">
            The recipes
          </h2>
          <p className="text-lg text-ink-faded">
            {recipes.length} {recipes.length === 1 ? "recipe" : "recipes"}
          </p>
        </div>
        <RecipeGrid recipes={recipes} />
      </div>
    </main>
  );
}
