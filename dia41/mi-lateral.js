class MiLateral extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = this.template
    }
    get template(){
        return `<img src="../aplicacion_Zapas/af1.jpg">`;
    }
}

let etiquetaMiLateral = window.customElements.define("mi-lateral",MiLateral);
export {etiquetaMiLateral}