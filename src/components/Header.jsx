import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function Header() {
  return (
    <header>
      <div className="mx-auto max-w-5xl px-6 py-6 md:px-10">
        <Link
          to="/"
          className="hand-title text-3xl text-ink transition-colors hover:text-rust md:text-4xl"
        >
          {site.title}
        </Link>
      </div>
    </header>
  );
}
