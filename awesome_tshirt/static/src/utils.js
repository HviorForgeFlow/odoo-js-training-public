/** @odoo-module **/

const { onMounted, useRef } = owl;

export function useAutoFocus(name) {
    const ref = useRef(name);
    onMounted(() => ref.el && ref.el.focus());
}