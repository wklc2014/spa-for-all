import $ from 'jquery';
export default function getBaseEditorDom(id) {
    const $wraper = $(`#FormItem_${id}_Wraper .simditor`);
    return {
        body: $wraper.find(".simditor-body"),
        placeholder: $wraper.find(".simditor-placeholder"),
    };
}