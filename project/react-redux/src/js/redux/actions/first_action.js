'use strict';
export const INFO = "INFO";

export function updateJson(string) {
    return {
        type: INFO,
        payload: string
    }
}
