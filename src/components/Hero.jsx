/** 
 * @copyright 2024 Sandun Dissanayake 
 * @license Apache-2.0 
 */

const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/sandun.pdf"; // Reference file directly from public directory
    link.setAttribute("download", "sandun.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const Hero = () => {
    return (
        <section
            id="home"
            style={{
                paddingTop: "60px",
                paddingBottom: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div style={{ width: "90%", maxWidth: "1200px", display: "flex", flexDirection: "column", gap: "40px" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "40px",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Section */}
                    <div style={{ flex: 1, textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                            <img
                                src="/images/avatar-1.jpg"
                                alt="Sandun portrait"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    marginRight: "15px",
                                }}
                            />
                            <span
                                style={{
                                    backgroundColor: "#28a745",
                                    color: "#fff",
                                    padding: "5px 15px",
                                    borderRadius: "15px",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: "bold",
                                }}
                            >
                                {/* Yellow Blinking Dot */}
                                <span
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        backgroundColor: "#ffcc00",  // Yellow color
                                        borderRadius: "50%",
                                        marginRight: "10px",
                                        animation: "blink 1s infinite",  // Blinking animation
                                    }}
                                ></span>
                                Available for work
                            </span>
                        </div>
                        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", maxWidth: "600px" }}>
                            Building Scalable Modern Websites for the Future
                        </h1>
                        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                            {/* Download CV Button */}
                            <button
                                style={{
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    padding: "10px 20px",
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                                onClick={handleResumeDownload}
                            >
                                <span
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                        display: "inline-block",
                                        background: "url('/icons/download-icon.png') no-repeat center",
                                        backgroundSize: "contain",
                                    }}
                                ></span>
                                Download CV
                            </button>
                            {/* Scroll Down Button */}
                            <a
                                href="#about"
                                style={{
                                    backgroundColor: "transparent",
                                    border: "2px solid #6c757d",
                                    borderRadius: "5px",
                                    padding: "10px 20px",
                                    fontSize: "1rem",
                                    color: "#6c757d",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                            >
                                <span
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                        display: "inline-block",
                                        background: "url('/icons/arrow-down-icon.png') no-repeat center",
                                        backgroundSize: "contain",
                                    }}
                                ></span>
                                Scroll Down
                            </a>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div style={{ flex: 1, textAlign: "center" }}>
                        <img
                            src="/images/hero-banner.jpeg"
                            alt="Hero Banner"
                            style={{
                                width: "100%",
                                maxWidth: "480px",
                                borderRadius: "15px",
                                boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                    </div>
                </div>
            </div>
            <style>
                {`
                    @keyframes blink {
                        0%, 100% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0.5;
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default Hero;
