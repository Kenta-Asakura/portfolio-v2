import { SOCIAL_LINKS } from "../../data/social";

function SocialLinks() {
    return (
        <>
            {SOCIAL_LINKS.map((social) => (
                <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        flex items-center justify-center
                        w-10 h-10 rounded-full
                        bg-gray-500 hover:bg-base-300
                        hover:text-primary transition-colors
                        focus:outline-none focus:ring-2 focus:ring-primary
                        text-sm
                        cursor-pointer"
                    aria-label={`Visit my ${social.name} profile`}
                >
                    <span className="font-bold text-xl">
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="size-6"
                        >
                            <path d={social.iconPath} />
                        </svg>
                    </span>
                </a>
            ))}
        </>
    )
}

export default SocialLinks;