'use strict';
let Component = require('@jatahworx/bhive-toolkits').Component;
let Attribute = require('@jatahworx/bhive-toolkits').Attribute;
//__append_require_start

module.exports = class cardLoder_Componet extends Component {
    constructor() {
        const name = 'cardLoder_Componet';
        const designerTemplate = `<div class=".ad-flex">
                            <div class="margin-right background-Templateimg background-image-position" ></div>
                            <div class="margin-right">Loding</div>
                            </div>`;
        const paletteTemplate = 'cardLoder_Componet';
        const componentLabel = 'cardLoder_Componet';
        const templateUrl = 'articles/#!components-guide-8/cardLoder_Componet';
        super({
            name,
            designerTemplate,
            paletteTemplate,
            componentLabel,
            templateUrl
        });

        super.addAttribute(
            new Attribute({
                key: 'componentLabel',
                value: 'cardLoder_Componet',
                type: 'kv',
                useAsLabel: true
            })
        );
        super.addAttribute(
            new Attribute({
                key: '(click)',
                value: '',
                type: 'kv',
            })
        );

        super.addAttribute(
            new Attribute({
                key: '[disabled]',
                value: '',
                type: 'kv'
            })
        );

        //__append__Attribute


        super.setType(Component.COMPONENT_TYPE_TITLES.OTHERS.val);
    }
    get template() {
        return `<cardLoder_Componet %bCustomProps% %[disabled]% %style% %class% %(click)%>

<div fxLayout="column wrap" fxLayoutAlign="start stretch" [fxShow]="true" style="height:100vh">
   <div fxLayout="row wrap" style="height: 12%; display: flex; flex-direction: column; justify-content: center; 00000align-items: center;" class="container" fxLayoutAlign="start stretch" [fxShow]="true">
      <div fxLayout="column wrap" style="width: 220px; height: 80px;" class="post" fxFlex="10%" fxLayoutAlign="start stretch" [fxShow]="true">
         <div fxLayout="row wrap" style="float: left; width: 52px; height: 52px; background-color: #ccc; border-radius: 25%; margin: 8px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-avatar 1.6s infinite linear;" class="avatar" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-lines 1.6s infinite linear;" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-color: #ddd" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
      </div>
   </div>
   <div fxLayout="row wrap" style="height: 12%; display: flex; flex-direction: column; justify-content: center; 00000align-items: center;" class="container" fxLayoutAlign="start stretch" [fxShow]="true">
      <div fxLayout="column wrap" style="width: 220px; height: 80px;" class="post" fxFlex="10%" fxLayoutAlign="start stretch" [fxShow]="true">
         <div fxLayout="row wrap" style="float: left; width: 52px; height: 52px; background-color: #ccc; border-radius: 25%; margin: 8px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-avatar 1.6s infinite linear;" class="avatar" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-lines 1.6s infinite linear;" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-color: #ddd" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
      </div>
   </div>
   <div fxLayout="row wrap" style="height: 12%; display: flex; flex-direction: column; justify-content: center; 00000align-items: center;" class="container" fxLayoutAlign="start stretch" [fxShow]="true">
      <div fxLayout="column wrap" style="width: 220px; height: 80px;" class="post" fxFlex="10%" fxLayoutAlign="start stretch" [fxShow]="true">
         <div fxLayout="row wrap" style="float: left; width: 52px; height: 52px; background-color: #ccc; border-radius: 25%; margin: 8px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-avatar 1.6s infinite linear;" class="avatar" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-lines 1.6s infinite linear;" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-color: #ddd" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
      </div>
   </div>
   <div fxLayout="row wrap" style="height: 12%; display: flex; flex-direction: column; justify-content: center; 00000align-items: center;" class="container" fxLayoutAlign="start stretch" [fxShow]="true">
      <div fxLayout="column wrap" style="width: 220px; height: 80px;" class="post" fxFlex="10%" fxLayoutAlign="start stretch" [fxShow]="true">
         <div fxLayout="row wrap" style="float: left; width: 52px; height: 52px; background-color: #ccc; border-radius: 25%; margin: 8px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-avatar 1.6s infinite linear;" class="avatar" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-lines 1.6s infinite linear;" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-color: #ddd" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
      </div>
   </div>
   <div fxLayout="row wrap" style="height: 12%; display: flex; flex-direction: column; justify-content: center; 00000align-items: center;" class="container" fxLayoutAlign="start stretch" [fxShow]="true">
      <div fxLayout="column wrap" style="width: 220px; height: 80px;" class="post" fxFlex="10%" fxLayoutAlign="start stretch" [fxShow]="true">
         <div fxLayout="row wrap" style="float: left; width: 52px; height: 52px; background-color: #ccc; border-radius: 25%; margin: 8px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-avatar 1.6s infinite linear;" class="avatar" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-lines 1.6s infinite linear;" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-color: #ddd" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
      </div>
   </div>
   <div fxLayout="row wrap" style="height: 12%; display: flex; flex-direction: column; justify-content: center; 00000align-items: center;" class="container" fxLayoutAlign="start stretch" [fxShow]="true">
      <div fxLayout="column wrap" style="width: 220px; height: 80px;" class="post" fxFlex="10%" fxLayoutAlign="start stretch" [fxShow]="true">
         <div fxLayout="row wrap" style="float: left; width: 52px; height: 52px; background-color: #ccc; border-radius: 25%; margin: 8px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-avatar 1.6s infinite linear;" class="avatar" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-lines 1.6s infinite linear;" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-color: #ddd" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
      </div>
   </div>
   <div fxLayout="row wrap" style="height: 12%; display: flex; flex-direction: column; justify-content: center; 00000align-items: center;" class="container" fxLayoutAlign="start stretch" [fxShow]="true">
      <div fxLayout="column wrap" style="width: 220px; height: 80px;" class="post" fxFlex="10%" fxLayoutAlign="start stretch" [fxShow]="true">
         <div fxLayout="row wrap" style="float: left; width: 52px; height: 52px; background-color: #ccc; border-radius: 25%; margin: 8px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-avatar 1.6s infinite linear;" class="avatar" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px); background-size: 600px; animation: shine-lines 1.6s infinite linear;" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
         <div fxLayout="row wrap" style="float: left; width: 200px; height: 16px; margin-top: 12px; border-radius: 7px; background-color: #ddd" class="line" fxLayoutAlign="start stretch" [fxShow]="true"></div>
      </div>
   </div>
  
   
</div>
<style>
  @keyframes shine-lines {
    0% {
      background-position: -100px;
    }
    40%, 100% {
      background-position: 140px;
    }
  }
  @keyframes shine-avatar {
    0% {
      background-position: -32px;
    }
    40%, 100% {
      background-position: 208px;
    }
  }
  </style>
            </cardLoder_Componet>`
    }
    set template(templateString) { }

    //__append_flows_start

};