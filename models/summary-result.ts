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

 /**
 * 
 *
 * @export
 * @interface SummaryResult
 */
export interface SummaryResult {

    /**
     * @type {boolean}
     * @memberof SummaryResult
     */
    success?: boolean;

    /**
     * @type {Error}
     * @memberof SummaryResult
     */
    error?: Error;

    /**
     * @type {string}
     * @memberof SummaryResult
     */
    ticket?: string;
}
