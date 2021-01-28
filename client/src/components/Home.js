import React from "react";

export const greetingUser = (user) => {
    if (user.login) {
        return `Hello, ${user.login}!`
    } else {
        return ["Hello, Anonimus!", <br/>, "You can register or log in!"]
    }
}

function Home(props) {
    return (
        <div className="home">
            <span>{greetingUser(props.user)}</span>
        </div>
    );
}

export default Home;
