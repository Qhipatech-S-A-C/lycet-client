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
 * @interface DetailAttribute
 */
export interface DetailAttribute {

    /**
     * @type {string}
     * @memberof DetailAttribute
     */
    code?: string;

    /**
     * @type {string}
     * @memberof DetailAttribute
     */
    name?: string;

    /**
     * @type {string}
     * @memberof DetailAttribute
     */
    value?: string;

    /**
     * @type {Date}
     * @memberof DetailAttribute
     */
    fecInicio?: Date;

    /**
     * @type {Date}
     * @memberof DetailAttribute
     */
    fecFin?: Date;

    /**
     * @type {number}
     * @memberof DetailAttribute
     */
    duracion?: number;
}
