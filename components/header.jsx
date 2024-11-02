import Link from "next/link";

export default function Header() {
    return (
        <>
            <header>
                <div className="left">
                    <div className="menuIcon">
                        <button>
                            <i class="fi fi-rr-menu-burger"></i>
                        </button>
                    </div>
                    <div className="logo">
                        <Link href="/">
                            <img src="/logo/black-text-logo.png" alt="CineCast" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}