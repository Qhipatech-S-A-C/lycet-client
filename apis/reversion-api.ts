/* tslint:disable */
/* eslint-disable */
/**
 * Lycet API
 * API REST basado en Greenter - Facturación Electrónica.
 *
 * OpenAPI spec version: 1.3
 * Contact: giansalex@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Reversion } from '../models';
import { SummaryResponse } from '../models';
import { ValidationResponse } from '../models';
/**
 * ReversionApi - axios parameter creator
 * @export
 */
export const ReversionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retorna la respuesta de SUNAT y el XML firmado
         * @summary Enviar un Resumen de Reversiones
         * @param {Reversion} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendReversion: async (body: Reversion, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling sendReversion.');
            }
            const localVarPath = `/reversion/send`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("token")
                    : await configuration.apiKey;
                localVarQueryParameter["token"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReversionApi - functional programming interface
 * @export
 */
export const ReversionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retorna la respuesta de SUNAT y el XML firmado
         * @summary Enviar un Resumen de Reversiones
         * @param {Reversion} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendReversion(body: Reversion, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SummaryResponse>>> {
            const localVarAxiosArgs = await ReversionApiAxiosParamCreator(configuration).sendReversion(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ReversionApi - factory interface
 * @export
 */
export const ReversionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retorna la respuesta de SUNAT y el XML firmado
         * @summary Enviar un Resumen de Reversiones
         * @param {Reversion} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendReversion(body: Reversion, options?: AxiosRequestConfig): Promise<AxiosResponse<SummaryResponse>> {
            return ReversionApiFp(configuration).sendReversion(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReversionApi - object-oriented interface
 * @export
 * @class ReversionApi
 * @extends {BaseAPI}
 */
export class ReversionApi extends BaseAPI {
    /**
     * Retorna la respuesta de SUNAT y el XML firmado
     * @summary Enviar un Resumen de Reversiones
     * @param {Reversion} body Comprobante
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReversionApi
     */
    public async sendReversion(body: Reversion, options?: AxiosRequestConfig) : Promise<AxiosResponse<SummaryResponse>> {
        return ReversionApiFp(this.configuration).sendReversion(body, options).then((request) => request(this.axios, this.basePath));
    }
}
