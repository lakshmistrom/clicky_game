import React from "react";

function Header(props) {
    return (
        <header>
            <nav className="navbar-dark bg-dark fixed-top">
                <div className="container-fluid my-3">
                    <div className="row align-items-center justify-content-between text-white">
                        <div className="col-sm-auto">
                            <a className="navbar-brand" href="/"><h1>Clicky Game</h1></a>
                        </div>
                        <div className="col-sm-auto">
                            <p className="mb-0">{props.guessedStatus}</p>
                        </div>
                        <div className="col-sm-auto">
                            <p className="mb-0"><strong>Score:</strong> {props.score}  <strong>| Top Score:</strong> {props.topScore} </p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;