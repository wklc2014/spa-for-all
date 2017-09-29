import $ from 'jquery';

function getEditorDom(id) {
    const selector = `#FormItem_${id}_Wraper .simditor`
    const $wraper = $(selector);
    const $body = $wraper.find(".simditor-body");
    const $placeholder = $wraper.find(".simditor-placeholder");
    return {
        body: $body,
        placeholder: $placeholder,
    };
}

export function getEditorBody(id) {
    return getEditorDom(id).body;
}

export function getEditorPlaceholder(id) {
    return getEditorDom(id).placeholder;
}
