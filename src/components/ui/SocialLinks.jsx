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
                        d-btn d-btn-lg d-btn-circle
                        bg-base-300/50 
                        border-2 border-base-300
                        text-base-content hover:text-primary
                        transition-all duration-300 ease-in-out
                        hover:scale-110 hover:shadow-lg
                        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                        group
                    "
                    aria-label={`Visit my ${social.name} profile`}
                >
                    <span className="font-bold text-xl">
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="
                                size-5
                                transition-transform duration-300
                                group-hover:scale-110
                            "
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