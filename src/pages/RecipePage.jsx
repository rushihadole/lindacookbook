import { Link, useParams } from "react-router-dom";
import { recipes } from "../data/recipes";
import RecipeMeta from "../components/RecipeMeta";
import PersonalNote from "../components/PersonalNote";

export default function RecipePage() {
  const { slug } = useParams();
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10">
        <h1 className="hand-title text-5xl text-ink">
          Hmm, can&apos;t find that one...
        </h1>
        <Link
          to="/"
          className="hand-title mt-6 inline-block text-3xl text-rust transition-colors hover:text-rust-light"
        >
          ← back to the cookbook
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 md:px-10 md:pb-32">
      <article>
        <Link
          to="/"
          className="hand-title inline-block text-2xl text-ink-faded transition-colors hover:text-rust md:text-3xl"
        >
          ← all recipes
        </Link>

        <header className="notebook-page mt-6 text-center">
          <h1 className="hand-title text-6xl leading-none text-ink md:text-8xl">
            {recipe.title}
          </h1>
          <p className="mt-4 text-xl text-rust md:text-2xl">
            a recipe from {recipe.contributor}
          </p>
        </header>

        <div className="polaroid relative mx-auto mt-10 max-w-2xl">
          <div className="tape" aria-hidden="true" />
          <img
            src={recipe.image}
            alt={recipe.title}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <p className="mx-auto mt-10 max-w-xl whitespace-pre-line text-center text-xl leading-relaxed text-ink-light md:text-2xl">
          {recipe.description}
        </p>

        <div className="mt-10">
          <RecipeMeta
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
            servings={recipe.servings}
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 md:gap-14">
          <section className="notebook-page">
            <h2 className="hand-title hand-underline inline-block text-4xl text-ink">
              Ingredients
            </h2>
            <ul className="mt-6 space-y-2.5">
              {recipe.ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className="flex gap-3 text-lg leading-relaxed text-ink md:text-xl"
                >
                  <span className="text-rust" aria-hidden="true">
                    –
                  </span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </section>

          <section className="notebook-page">
            <h2 className="hand-title hand-underline inline-block text-4xl text-ink">
              How to make it
            </h2>
            <ol className="mt-6 space-y-5">
              {recipe.instructions.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 text-lg leading-relaxed text-ink md:text-xl"
                >
                  <span className="hand-title shrink-0 text-3xl leading-none text-rust">
                    {index + 1}.
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <PersonalNote contributor={recipe.contributor} note={recipe.note} />
      </article>
    </main>
  );
}
