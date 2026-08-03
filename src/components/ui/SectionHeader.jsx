function SectionHeader({ headerTitle, headerNumber }) {
  return (
    <div className="text-upper mx-auto mb-12 max-w-4xl">
      <h2 className="d-divider d-divider-start text-neutral-content text-3xl font-semibold tracking-wider uppercase">
        <span className="text-primary font-primary text-xl">{headerNumber}</span>
        {headerTitle}
      </h2>
    </div>
  );
}

export default SectionHeader;
