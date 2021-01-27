function Nav() {
    return (
        <div className="Nav">
            <header className="Nav-header">
                <img src={logo} className="Nav-logo" alt="logo" />
                <p>
                    Edit <code>src/Nav.js</code> and save to reload.
                </p>
                <a
                    className="Nav-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Nav;
