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
 * @interface Detraction
 */
export interface Detraction {

    /**
     * @type {number}
     * @memberof Detraction
     */
    percent?: number;

    /**
     * @type {number}
     * @memberof Detraction
     */
    mount?: number;

    /**
     * @type {string}
     * @memberof Detraction
     */
    ctaBanco?: string;

    /**
     * @type {string}
     * @memberof Detraction
     */
    codMedioPago?: string;

    /**
     * @type {string}
     * @memberof Detraction
     */
    codBienDetraccion?: string;

    /**
     * @type {number}
     * @memberof Detraction
     */
    valueRef?: number;
}
