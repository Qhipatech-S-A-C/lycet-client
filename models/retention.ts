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

import { Client } from './client';
import { Company } from './company';
import { RetentionDetail } from './retention-detail';
 /**
 * 
 *
 * @export
 * @interface Retention
 */
export interface Retention {

    /**
     * @type {string}
     * @memberof Retention
     */
    serie?: string;

    /**
     * @type {string}
     * @memberof Retention
     */
    correlativo?: string;

    /**
     * @type {Date}
     * @memberof Retention
     */
    fechaEmision?: Date;

    /**
     * @type {Client}
     * @memberof Retention
     */
    proveedor?: Client;

    /**
     * @type {Company}
     * @memberof Retention
     */
    company?: Company;

    /**
     * @type {string}
     * @memberof Retention
     */
    regimen?: string;

    /**
     * @type {number}
     * @memberof Retention
     */
    tasa?: number;

    /**
     * @type {number}
     * @memberof Retention
     */
    impRetenido?: number;

    /**
     * @type {number}
     * @memberof Retention
     */
    impPagado?: number;

    /**
     * @type {string}
     * @memberof Retention
     */
    observacion?: string;

    /**
     * @type {Array<RetentionDetail>}
     * @memberof Retention
     */
    details?: Array<RetentionDetail>;
}
