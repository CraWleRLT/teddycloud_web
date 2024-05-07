/* tslint:disable */
/* eslint-disable */
/**
 * TeddyCloud API
 * OpenAPI specification for TeddyCloud Backend API
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StatsItem } from './StatsItem';
import {
    StatsItemFromJSON,
    StatsItemFromJSONTyped,
    StatsItemToJSON,
} from './StatsItem';

/**
 * List of Stats Items.
 * @export
 * @interface StatsList
 */
export interface StatsList {
    /**
     * 
     * @type {Array<StatsItem>}
     * @memberof StatsList
     */
    stats?: Array<StatsItem>;
}

/**
 * Check if a given object implements the StatsList interface.
 */
export function instanceOfStatsList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatsListFromJSON(json: any): StatsList {
    return StatsListFromJSONTyped(json, false);
}

export function StatsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatsList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'stats': !exists(json, 'stats') ? undefined : ((json['stats'] as Array<any>).map(StatsItemFromJSON)),
    };
}

export function StatsListToJSON(value?: StatsList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'stats': value.stats === undefined ? undefined : ((value.stats as Array<any>).map(StatsItemToJSON)),
    };
}

