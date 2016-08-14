'use strict';
export const set_active_toolbar = function ({ dispatch, state }, text) {
    dispatch('ACTIVE_TOOLBAR', text);
}