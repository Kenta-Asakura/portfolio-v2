function SectionHeader({ headerTitle, headerNumber }) {
  return (
    <div className="text-upper max-w-4xl mx-auto mb-12">
        <h2 className="
          d-divider d-divider-start
          text-3xl font-semibold uppercase 
          tracking-wider text-neutral-content
        ">
            <span className="text-primary font-primary text-xl">{headerNumber}</span>{headerTitle}
        </h2>
    </div>
  )
}

export default SectionHeader;