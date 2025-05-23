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
import { Despatch } from '../models';
import { StatusResult } from '../models';
import { SummaryResponse } from '../models';
import { ValidationResponse } from '../models';
/**
 * DespatchApi - axios parameter creator
 * @export
 */
export const DespatchApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retorna el Pdf
         * @summary Generar el Pdf de una Guía de Remisión
         * @param {Despatch} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDespatchPdf: async (body: Despatch, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getDespatchPdf.');
            }
            const localVarPath = `/despatch/pdf`;
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
        /**
         * Retorna el CDR
         * @summary Obtiene el estado del ticket
         * @param {string} [ticket] Ticket del comprobante
         * @param {string} [ruc] RUC de empresa (Multiples Empresas)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDespatchStatus: async (ticket?: string, ruc?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/despatch/status`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("token")
                    : await configuration.apiKey;
                localVarQueryParameter["token"] = localVarApiKeyValue;
            }

            if (ticket !== undefined) {
                localVarQueryParameter['ticket'] = ticket;
            }

            if (ruc !== undefined) {
                localVarQueryParameter['ruc'] = ruc;
            }

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

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retorna el XML
         * @summary Generar el XML de una Guía de Remisión
         * @param {Despatch} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDespatchXml: async (body: Despatch, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getDespatchXml.');
            }
            const localVarPath = `/despatch/xml`;
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
        /**
         * Retorna la respuesta de SUNAT y el XML firmado
         * @summary Enviar una Guía de Remisión
         * @param {Despatch} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendDespatch: async (body: Despatch, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling sendDespatch.');
            }
            const localVarPath = `/despatch/send`;
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
 * DespatchApi - functional programming interface
 * @export
 */
export const DespatchApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retorna el Pdf
         * @summary Generar el Pdf de una Guía de Remisión
         * @param {Despatch} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDespatchPdf(body: Despatch, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DespatchApiAxiosParamCreator(configuration).getDespatchPdf(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retorna el CDR
         * @summary Obtiene el estado del ticket
         * @param {string} [ticket] Ticket del comprobante
         * @param {string} [ruc] RUC de empresa (Multiples Empresas)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDespatchStatus(ticket?: string, ruc?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<StatusResult>>> {
            const localVarAxiosArgs = await DespatchApiAxiosParamCreator(configuration).getDespatchStatus(ticket, ruc, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retorna el XML
         * @summary Generar el XML de una Guía de Remisión
         * @param {Despatch} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDespatchXml(body: Despatch, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DespatchApiAxiosParamCreator(configuration).getDespatchXml(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retorna la respuesta de SUNAT y el XML firmado
         * @summary Enviar una Guía de Remisión
         * @param {Despatch} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendDespatch(body: Despatch, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SummaryResponse>>> {
            const localVarAxiosArgs = await DespatchApiAxiosParamCreator(configuration).sendDespatch(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DespatchApi - factory interface
 * @export
 */
export const DespatchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retorna el Pdf
         * @summary Generar el Pdf de una Guía de Remisión
         * @param {Despatch} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDespatchPdf(body: Despatch, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DespatchApiFp(configuration).getDespatchPdf(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Retorna el CDR
         * @summary Obtiene el estado del ticket
         * @param {string} [ticket] Ticket del comprobante
         * @param {string} [ruc] RUC de empresa (Multiples Empresas)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDespatchStatus(ticket?: string, ruc?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<StatusResult>> {
            return DespatchApiFp(configuration).getDespatchStatus(ticket, ruc, options).then((request) => request(axios, basePath));
        },
        /**
         * Retorna el XML
         * @summary Generar el XML de una Guía de Remisión
         * @param {Despatch} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDespatchXml(body: Despatch, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DespatchApiFp(configuration).getDespatchXml(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Retorna la respuesta de SUNAT y el XML firmado
         * @summary Enviar una Guía de Remisión
         * @param {Despatch} body Comprobante
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendDespatch(body: Despatch, options?: AxiosRequestConfig): Promise<AxiosResponse<SummaryResponse>> {
            return DespatchApiFp(configuration).sendDespatch(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DespatchApi - object-oriented interface
 * @export
 * @class DespatchApi
 * @extends {BaseAPI}
 */
export class DespatchApi extends BaseAPI {
    /**
     * Retorna el Pdf
     * @summary Generar el Pdf de una Guía de Remisión
     * @param {Despatch} body Comprobante
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DespatchApi
     */
    public async getDespatchPdf(body: Despatch, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DespatchApiFp(this.configuration).getDespatchPdf(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retorna el CDR
     * @summary Obtiene el estado del ticket
     * @param {string} [ticket] Ticket del comprobante
     * @param {string} [ruc] RUC de empresa (Multiples Empresas)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DespatchApi
     */
    public async getDespatchStatus(ticket?: string, ruc?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<StatusResult>> {
        return DespatchApiFp(this.configuration).getDespatchStatus(ticket, ruc, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retorna el XML
     * @summary Generar el XML de una Guía de Remisión
     * @param {Despatch} body Comprobante
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DespatchApi
     */
    public async getDespatchXml(body: Despatch, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DespatchApiFp(this.configuration).getDespatchXml(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retorna la respuesta de SUNAT y el XML firmado
     * @summary Enviar una Guía de Remisión
     * @param {Despatch} body Comprobante
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DespatchApi
     */
    public async sendDespatch(body: Despatch, options?: AxiosRequestConfig) : Promise<AxiosResponse<SummaryResponse>> {
        return DespatchApiFp(this.configuration).sendDespatch(body, options).then((request) => request(this.axios, this.basePath));
    }
}
