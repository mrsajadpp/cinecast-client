import Link from "next/link";
import '@/public/css/header.css'

export default function Header() {
    return (
        <>
            {/* Mobile Header */}
            <header>
                <div className="left">
                    <div className="menuIcon">
                        <button>
                            <i class="fi fi-ss-menu-burger"></i>
                        </button>
                    </div>
                    <div className="logo">
                        <Link href="/">
                            <img src="/logo/white-text-logo.png" alt="CineCast" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}