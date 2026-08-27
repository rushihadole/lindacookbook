export default function RecipeMeta({ prepTime, cookTime, servings }) {
  const items = [
    { label: "prep", value: prepTime },
    { label: "cook", value: cookTime },
    { label: "serves", value: servings },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      {items.map(({ label, value }) => (
        <dl key={label} className="text-center">
          <dt className="text-base text-ink-faded">{label}</dt>
          <dd className="hand-title text-3xl text-rust">{value}</dd>
        </dl>
      ))}
    </div>
  );
}
