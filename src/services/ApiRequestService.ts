import axios, { AxiosError } from "axios";

const BASEURL = 'https://rickandmortyapi.com';

class ApiRequestService {

    private createUrl(endPoint?: string, params?: string) {
        let url = ''

        if (BASEURL) url += BASEURL;
        if (endPoint) url += `/${endPoint}`;
        if (params) url += `?${params}`;

        return url;
    }

    async getRequest({ endPoint, params }: { endPoint: string, params?: string }) {
        try {
            const url = this.createUrl(endPoint, params);
            const response = await axios.get(url);
            return response;
        } catch (error) {
            const err = error as AxiosError;
            const response = err.response as any;

            if (response) {
                throw response;
            } else {
                throw new AxiosError("Não foi possível conectar-se ao servidor!");
            }
        }
    }
}

export default ApiRequestService;