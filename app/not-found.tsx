import '@/public/css/not-found.css';
export default function Custom404() {
    return (
        <>
            <div className="notfound-container">
                <img src="/icons/graphics/broken.png" alt="Not Found Image" className="notfound-image" />
                <h1 className="notfound-title">404 - Not Found</h1>
                <p className="notfound-message">The page you are looking for doesn’t exist or an error occurred.</p>
            </div>
        </>
    )
}