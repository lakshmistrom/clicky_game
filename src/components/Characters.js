import React, { Component } from "react";
import CharacterImage from "./CharacterImage";
import API from "../utils/API";

class Characters extends Component {

    constructor(props) {
        super(props);
        this.clickedChars = {};
        this.state = {
            result: []
        };
    }

    //component has mounted
    componentDidMount() {
        this.searchCharacters();
    }
    searchCharacters = () => {
        API.search()
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };
    render() {
        const characters = this.state.result;
        console.log(characters);
        return (
            <div className="mt-5">
                {characters
                    .map((character) => {
                        return (
                            <CharacterImage
                                key={character.id}
                                name={character.name}
                                image={character.image}
                                onclick={() => this.handleClick(character.id)}
                            />
                        );
                    })
                }
            </div>
        );
    }
    shuffle() {
        let copy = this.state.result.slice();
        copy.sort(function (a, b) { return 0.5 - Math.random() });
        this.setState({ result: copy });
    }
    handleClick(charId) {
        console.log(charId);
        let clickedChar = charId;
        this.shuffle();
        if (!this.clickedChars[clickedChar]) {
            this.clickedChars[clickedChar] = true;
            this.props.onCorrectGuess();
        } else{
            this.clickedChars = {};
            this.props.onIncorrectGuess();
        }
    }
}

export default Characters;