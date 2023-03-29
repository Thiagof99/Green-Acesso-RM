import characterService from "../../services/CharacterServicce";
import { useEffect, useState } from "react";

const HomePage = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<any[]>([]);

    const getCharactersHandle = async () => {
        const characters = await characterService.getCharacters('1');
        setData(characters.characters);
        setIsLoading(false);
    }

    useEffect(() => {
        getCharactersHandle();
    }, [])

    const logCharacters = () => {
        console.log(data);
    }
    return (
        <div onClick={logCharacters}>
            <h1>Hello, world!</h1>
        </div>
    )
}


export default HomePage;