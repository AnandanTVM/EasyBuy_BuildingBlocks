"use strict";
let Component = require("@jatahworx/bhive-toolkits").Component;
let Attribute = require("@jatahworx/bhive-toolkits").Attribute;
//__append_require_start

module.exports = class transactioncard_Componet extends Component {
  constructor() {
    const name = "transactioncard_Componet";
    const designerTemplate = `<div class=".ad-flex">
                            <div class="margin-right background-Templateimg background-image-position" ></div>
                            <div class="margin-right"> Transaction Card  </div>
                            </div>`;
    const paletteTemplate = "transactioncard_Componet";
    const componentLabel = "transactioncard_Componet";
    const templateUrl =
      "articles/#!components-guide-8/transactioncard_Componet";
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
        value: "transactioncard_Componet",
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
        key: "ProductImage",
        value: "",
        type: "a",
      })
    );
    super.addAttribute(
      new Attribute({
        key: "customerNumber",
        value: "",
        type: "a",
      })
    );
    super.addAttribute(
      new Attribute({
        key: "time",
        value: "",
        type: "a",
      })
    );
    super.addAttribute(
      new Attribute({
        key: "totalAmount",
        value: "",
        type: "a",
      })
    );
    super.addAttribute(
      new Attribute({
        key: "Paymentcolor",
        value: "",
        type: "a",
      })
    );
    //__append__Attribute

    super.setType(Component.COMPONENT_TYPE_TITLES.OTHERS.val);
  }
  get template() {
    return `<transactioncard_Componet %bCustomProps% %[disabled]% %style% %class% %(click)%>
        <div fxLayout="row wrap" style="height:100px;width:100%;padding:10px;" class="shadow-box" fxFlex="100" fxLayoutAlign="space-between center" [fxShow]="true">
        <img [src]=%ProductImage% style="height:100%;border-radius:10px;">
        <div>
          <div style="font-weight: 600; font-size: 16px;">
            %customerNumber%
          </div>
          <div style="font-weight: 400; font-size: 10px;">
            Mode of paymetn: Phonepay</div>
          <div style="font-weight: 400; font-size: 10px;">
            Time: %time%</div>
        </div>
        <div style="color:%Paymentcolor%">
        %totalAmount%
        </div>
      </div>
            </transactioncard_Componet>`;
  }
  set template(templateString) {}

  //__append_flows_start
};
