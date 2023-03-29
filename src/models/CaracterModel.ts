class Character {
    id?: number;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: { name?: string, url?: string };
    location?: { name?: string, url?: string };
    image?: string;
    episode?: string[];
    url?: string;
    created?: string;

    constructor(
        id?: number,
        name?: string,
        status?: string,
        species?: string,
        type?: string,
        gender?: string,
        origin?: { name?: string, url?: string },
        location?: { name?: string, url?: string },
        image?: string,
        episode?: string[],
        url?: string,
        created?: string
    ) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
        this.type = type;
        this.gender = gender;
        this.origin = origin;
        this.location = location;
        this.image = image;
        this.episode = episode;
        this.url = url;
        this.created = created;
    }

    static factoryCharacter(dict: any) {
        const character = new Character();

        character.id = dict['id'];
        character.name = dict['name'];
        character.status = dict['status'];
        character.species = dict['species'];
        character.type = dict['type'];
        character.gender = dict['gender'];
        character.origin = dict['origin'];
        character.location = dict['location'];
        character.image = dict['image'];
        character.episode = dict['episode'];
        character.url = dict['url'];
        character.created = dict['created'];

        return character;
    }
}

export default Character;