function SectionHeader({ headerTitle, headerNumber }) {
  return (
    <div className="font-heading text-upper max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-neutral-content">
            <span className="text-primary font-mono text-xl mr-2">{headerNumber}</span>{headerTitle}
        </h2>
        <div className="h-px bg-base-300 mt-4 ml-24"></div>
    </div>
  )
}

export default SectionHeader;