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
import { Cuota } from './cuota';
import { Document } from './document';
import { Legend } from './legend';
import { PaymentTerms } from './payment-terms';
import { SaleDetail } from './sale-detail';
import { SalePerception } from './sale-perception';
 /**
 * 
 *
 * @export
 * @interface Note
 */
export interface Note {

    /**
     * @type {string}
     * @memberof Note
     */
    tipoDoc?: string;

    /**
     * @type {string}
     * @memberof Note
     */
    serie?: string;

    /**
     * @type {string}
     * @memberof Note
     */
    correlativo?: string;

    /**
     * @type {Date}
     * @memberof Note
     */
    fechaEmision?: Date;

    /**
     * @type {PaymentTerms}
     * @memberof Note
     */
    formaPago?: PaymentTerms;

    /**
     * @type {Array<Cuota>}
     * @memberof Note
     */
    cuotas?: Array<Cuota>;

    /**
     * @type {Client}
     * @memberof Note
     */
    client?: Client;

    /**
     * @type {Company}
     * @memberof Note
     */
    company?: Company;

    /**
     * @type {string}
     * @memberof Note
     */
    tipoMoneda?: string;

    /**
     * @type {number}
     * @memberof Note
     */
    sumOtrosCargos?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoOperGravadas?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoOperInafectas?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoOperExoneradas?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoOperExportacion?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoIGV?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoIGVGratuitas?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoISC?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoOtrosTributos?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    icbper?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoImpVenta?: number;

    /**
     * @type {Array<SaleDetail>}
     * @memberof Note
     */
    details?: Array<SaleDetail>;

    /**
     * @type {Array<Legend>}
     * @memberof Note
     */
    legends?: Array<Legend>;

    /**
     * @type {Array<Document>}
     * @memberof Note
     */
    guias?: Array<Document>;

    /**
     * @type {Array<Document>}
     * @memberof Note
     */
    relDocs?: Array<Document>;

    /**
     * @type {string}
     * @memberof Note
     */
    compra?: string;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoBaseIsc?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoBaseOth?: number;

    /**
     * @type {number}
     * @memberof Note
     */
    totalImpuestos?: number;

    /**
     * @type {string}
     * @memberof Note
     */
    ublVersion?: string;

    /**
     * @type {string}
     * @memberof Note
     */
    codMotivo?: string;

    /**
     * @type {string}
     * @memberof Note
     */
    desMotivo?: string;

    /**
     * @type {string}
     * @memberof Note
     */
    tipDocAfectado?: string;

    /**
     * @type {string}
     * @memberof Note
     */
    numDocfectado?: string;

    /**
     * @type {number}
     * @memberof Note
     */
    mtoOperGratuitas?: number;

    /**
     * @type {SalePerception}
     * @memberof Note
     */
    perception?: SalePerception;
}
