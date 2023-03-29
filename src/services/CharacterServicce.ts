import ApiRequest from "./ApiRequestService";
import ApiResponse from "../models/ApiResponseModel";
import Character from "../models/CaracterModel";

class CharacterService extends ApiRequest {

    private _characters?: Character[] = [];

    private static instance: CharacterService;

    static getInstance(): CharacterService {
        if (!CharacterService.instance) {
            CharacterService.instance = new CharacterService();
        }

        return CharacterService.instance;
    }

    public get character() {
        return this._characters;
    }

    public set character(character: Character[] | undefined) {
        if (!character)
            this._characters = [new Character()];
        else
            this._characters = character;
    }


    getCharacters = async (page?: string) => {

        try {
            let params: string;
            page ? params = `page=${page}` : params = '';

            const response = await this.getRequest({ endPoint: 'api/character', params: params });
            let characters = [];
            for (let character of Array.from(response.data.results)) {
                characters.push(Character.factoryCharacter(character));
            }
            return { 'characters': characters };
        } catch (error) {
            const apiResponse = ApiResponse.factoryApiResponse(error as any);
            throw apiResponse.error;
        }
    }
}

const characterService = CharacterService.getInstance();

export default characterService;