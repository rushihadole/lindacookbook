import { Link } from "react-router-dom";

const tilts = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-0"];

export default function RecipeCard({ recipe, index = 0 }) {
  const tilt = tilts[index % tilts.length];

  return (
    <article className={`flex h-full flex-col ${tilt} transition-transform hover:rotate-0`}>
      <Link to={`/${recipe.slug}`} className="group flex h-full flex-col">
        <div className="polaroid relative">
          <div className="tape" aria-hidden="true" />
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-1 flex-col px-1">
          <h2 className="hand-title text-3xl leading-tight text-ink transition-colors group-hover:text-rust md:text-4xl">
            {recipe.title}
          </h2>
          <p className="mt-1 text-lg text-ink-faded">
            from {recipe.contributor}
          </p>
        </div>
      </Link>
    </article>
  );
}
