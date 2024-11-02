import Link from "next/link";
import '@/public/css/footer.css';

export default function Footer() {
    return (
        <footer className="cinecast-footer">
            <div className="footer-content">
                {/* Cinecast Logo */}
                <img src="/logo/white-text-logo.png" alt="Cinecast Logo" className="cinecast-logo" />

                {/* Footer Text */}
                <p className="footer-text">
                    Developed and maintained by <a href="https://www.grovixlab.com" target="_blank" className="grovix-link">Grovix Lab</a>
                </p>

                {/* Copyright */}
                <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} Grovix lab. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
