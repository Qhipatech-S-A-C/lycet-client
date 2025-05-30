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
 * @interface QrParameter
 */
export interface QrParameter {

    /**
     * ruc del emisor
     *
     * @type {string}
     * @memberof QrParameter
     */
    ruc?: string;

    /**
     * tipo de comprobante
     *
     * @type {string}
     * @memberof QrParameter
     */
    tipo?: string;

    /**
     * @type {string}
     * @memberof QrParameter
     */
    serie?: string;

    /**
     * @type {string}
     * @memberof QrParameter
     */
    numero?: string;

    /**
     * fecha de emisión
     *
     * @type {string}
     * @memberof QrParameter
     */
    emision?: string;

    /**
     * @type {number}
     * @memberof QrParameter
     */
    igv?: number;

    /**
     * total importe de venta
     *
     * @type {number}
     * @memberof QrParameter
     */
    total?: number;

    /**
     * Tipo de documento del cliente
     *
     * @type {string}
     * @memberof QrParameter
     */
    clienteTipo?: string;

    /**
     * Numero de documento del cliente
     *
     * @type {string}
     * @memberof QrParameter
     */
    clienteNumero?: string;
}
