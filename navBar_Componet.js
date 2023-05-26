"use strict";
let Component = require("@jatahworx/bhive-toolkits").Component;
let Attribute = require("@jatahworx/bhive-toolkits").Attribute;
//__append_require_start
let navbarFlow = require("./flow/navbar");
module.exports = class navBar_Componet extends Component {
  constructor() {
    const name = "navBar_Componet";
    const designerTemplate = `<div class=".ad-flex nav">
                            <div class="margin-right background-Templateimg background-image-position" ></div>
                            <div class="margin-right">NavBar</div>
                            </div>`;
    const paletteTemplate = "navBar_Componet";
    const componentLabel = "navBar_Componet";
    const templateUrl = "articles/#!components-guide-8/navBar_Componet";
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
        value: "navBar_Componet",
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
    super.addAttribute(
      new Attribute({
        key: "navColor",
        value: "white",
        type: "a",
      })
    );

    //__append__Attribute

    super.setType(Component.COMPONENT_TYPE_TITLES.OTHERS.val);
  }
  get template() {
    return `<navBar_Componet %bCustomProps% %[disabled]% %style% %class% %(click)%>
        <header>
    <nav style="  z-index: 100;
    background-color: %navColor%;
    position: fixed;
    height: auto;
    bottom: 0px;
    width: 100%;
    padding: 15px 15px 20px 15px;
    border-radius: 25px 25px 0 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
      <div fxLayout="row wrap" fxLayoutAlign="space-around center" [fxShow]="true">
        <div *ngFor="let item of page.navBar">
          <div routerLink="{{item.Link}}">
            <img src="{{item.img}}/">
          </div>
        </div>
      </div>
    </nav>
  </header>
            </navBar_Componet>`;
  }
  set template(templateString) {}

  //__append_flows_start

  get flows() {
    return {
      flow: navbarFlow,
    };
  }
};
