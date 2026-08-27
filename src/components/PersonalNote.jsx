export default function PersonalNote({ contributor, note }) {
  if (!note) return null;

  return (
    <section
      aria-label={`Personal note from ${contributor}`}
      className="notebook-page relative mt-14 rotate-1 md:mt-20"
    >
      <div className="tape" aria-hidden="true" />
      <h2 className="hand-title hand-underline inline-block text-4xl text-ink">
        A note from {contributor}
      </h2>
      <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-ink md:text-xl">
        {note}
      </p>
    </section>
  );
}
