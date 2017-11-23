import lodash from 'lodash';
export default function getFormItemApi(formItemApi = {}, value) {
    if (lodash.isEmpty(formItemApi)) {
        return null;
    }

    const newFormItemApi = { ...formItemApi };

    const { extra } = formItemApi;

    if (extra && lodash.isFunction(extra)) {
        newFormItemApi.extra = formItemApi.extra(value);
    }

    return newFormItemApi;
}