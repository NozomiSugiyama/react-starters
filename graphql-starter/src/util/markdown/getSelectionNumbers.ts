export default (element: HTMLInputElement | HTMLTextAreaElement) : [number, number] => ([
    element.selectionStart || 0 ,
    element.selectionEnd || 0
]);
