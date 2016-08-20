'use strict';

export const CHANGE_NUMBER = "CHANGE_NUMBER";

export function changeNumber(number) {
	return {
		type: CHANGE_NUMBER,
		number
	}
}