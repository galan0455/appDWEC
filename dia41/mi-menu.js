class MiMenu extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'})
        this.colorFondo = this.getAttribute('colorFondo')
        shadowRoot.innerHTML = this.template
    }
    get template(){
        return `<h1 style="background-color:${this.colorFondo}">adios
        <slot name="OtraCosa></slot>
        <button type="button">Pulsame</button></h1>`;
    }
}

let etiquetaMiMenu = window.customElements.define("mi-menu",MiMenu);
export {etiquetaMiMenu} 