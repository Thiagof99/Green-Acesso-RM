import ApiRequest from "./ApiRequestService";
import ApiResponse from "../models/ApiResponseModel";
import Character from "../models/CaracterModel";
import { Filters } from "../pages/HomePage/Index";

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


    getCharacters = async (page?: string, filters?: Filters[], name?: string) => {

        try {
            let params: string;
            page ? params = `page=${page}` : params = '';
            if (name && name !== '') {
                page ? params += '&' : params += '?';
                params += `name=${name}`;
            }
            if (filters) {
                page || name ? params += '&' : params += '?';
                for (let i = 0; i < filters.length; i++) {
                    if (i > 0) {
                        params += '&';
                    }
                    params += `${filters[i].type}=${filters[i].filter}`
                }
            }
            const response = await this.getRequest({ endPoint: 'api/character', params: params });
            let characters = [];
            for (let character of Array.from(response.data.results)) {
                characters.push(Character.factoryCharacter(character));
            }
            return { 'characters': characters, 'pages': response.data.info.pages };
        } catch (error) {
            const apiResponse = ApiResponse.factoryApiResponse(error as any);
            throw apiResponse.error;
        }
    }

    getCharacter = async (id?: string) => {
        try {
            const response = await this.getRequest({ endPoint: 'api/character', id: id });
            const character = Character.factoryCharacter(response.data);
            return { 'character': character }
        } catch (error) {
            const apiResponse = ApiResponse.factoryApiResponse(error as any);
            throw apiResponse.error;
        }
    }
}

const characterService = CharacterService.getInstance();

export default characterService;
