"use strict";
let Component = require("@jatahworx/bhive-toolkits").Component;
let Attribute = require("@jatahworx/bhive-toolkits").Attribute;
//__append_require_start
let scannerFlow = require("./flow/ScannerFlow");

module.exports = class Scaner_Componet extends Component {
  constructor() {
    const name = "Scaner_Componet";
    const designerTemplate = `<div class=".ad-flex">
                            <div class="margin-right background-Templateimg background-image-position" ></div>
                            <div class="margin-right"> Scanner </div>
                            </div>`;
    const paletteTemplate = "Scaner_Componet";
    const componentLabel = "Scaner_Componet";
    const templateUrl = "articles/#!components-guide-8/Scaner_Componet";
    super({
      name,
      designerTemplate,
      paletteTemplate,
      componentLabel,
      templateUrl,
    });

    super.addAttribute(
      new Attribute({
        key: "componentLabel",
        value: "Scaner_Componet",
        type: "kv",
        useAsLabel: true,
      })
    );
    super.addAttribute(
      new Attribute({
        key: "(click)",
        value: "",
        type: "kv",
      })
    );

    super.addAttribute(
      new Attribute({
        key: "[disabled]",
        value: "",
        type: "kv",
      })
    );

    //__append__Attribute

    super.setType(Component.COMPONENT_TYPE_TITLES.OTHERS.val);
  }
  get template() {
    return `<Scaner_Componet %bCustomProps% %[disabled]% %style% %class% %(click)%>
    <bh-SubNavbar subNavTitle="Scanner" 
   // IconUrl="/Web/Icons/Cart.svg"
   textColor="white" goto="/ui/cart" backgroundColor="transparent"></bh-SubNavbar>
<div style=" width: 100%;
   height: 100%;
   min-width: 100px;
   min-height: 100px;
   position: relative;" class="div-ui-container">
   <div style="display:flex;align-items:center;justify-content:center;height:100%">
      <svg id="dce-loading" style="animation:turn 1.5s linear infinite;" viewBox="0 0 1024 1024" p-id="11986" width="200" height="200">
         <path d="M512.1 64.2c-35.4 0-64 28.7-64 64v128c0 35.4 28.7 64 64 64 35.4 0 64-28.7 64-64v-128c0-35.3-28.6-64-64-64zM320.4 328.3l-110.8-64c-30.6-17.7-69.8-7.2-87.4 23.4-17.7 30.6-7.2 69.8 23.4 87.4l110.8 64c30.6 17.7 69.8 7.2 87.4-23.4 17.7-30.6 7.2-69.8-23.4-87.4zM342.4 609.2c-17.7-30.6-56.8-41.1-87.4-23.4l-110.8 64c-30.6 17.7-41.1 56.8-23.4 87.4 17.7 30.6 56.8 41.1 87.4 23.4l110.8-64c30.6-17.7 41.1-56.8 23.4-87.4zM509.2 707.1c-35.4 0-64 28.7-64 64v128c0 35.4 28.7 64 64 64 35.4 0 64-28.7 64-64v-128c0-35.3-28.6-64-64-64zM875.8 652.2l-110.8-64c-30.6-17.7-69.8-7.2-87.4 23.4-17.7 30.6-7.2 69.8 23.4 87.4l110.8 64c30.6 17.7 69.8 7.2 87.4-23.4 17.7-30.6 7.2-69.7-23.4-87.4zM678.9 418.2c17.7 30.6 56.8 41.1 87.4 23.4l110.8-64c30.6-17.7 41.1-56.8 23.4-87.4-17.7-30.6-56.8-41.1-87.4-23.4l-110.8 64c-30.6 17.6-41.1 56.8-23.4 87.4z" p-id="11987" />
      </svg>
   </div>
   <div style=" width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;" class="dce-video-container">
   </div>
   <div style=" width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;" class="dce-scanarea">
   </div>
</div>
<div class="products-list-container">
   <bh-carrtItem (changeCount)="changeCount($event)" [value]="true" [product]="product" *ngFor="let product of page.products" (cancelProduct)="cancelProduct($event)"></bh-carrtItem>
</div>
            </Scaner_Componet>`;
  }
  set template(templateString) {}

  //__append_flows_start

  get flows() {
    return {
      flow: scannerFlow,
    };
  }
};
