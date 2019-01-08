import React from "react";

function Header() {
    return (
        <header>
            <nav className="navbar-dark bg-dark fixed-top">
                <div className="container-fluid my-3">
                    <div className="row align-items-center justify-content-between text-white">
                        <div className="col-sm-auto">
                            <a className="navbar-brand" href="/"><h1>Clicky Game</h1></a>
                        </div>
                        <div className="col-sm-auto">
                            <p className="mb-0">Click an image to begin! To earn points avoid clicking the same image more than once.</p>
                        </div>
                        <div className="col-sm-auto">
                            <p className="mb-0"><strong>Score:</strong> 0  <strong>| Top Score:</strong> 12 </p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;