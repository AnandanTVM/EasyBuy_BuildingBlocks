'use strict';
let Component = require('@jatahworx/bhive-toolkits').Component;
let Attribute = require('@jatahworx/bhive-toolkits').Attribute;
//__append_require_start

let Homeflow = require("easybuy/flow/homecard")

module.exports = class HomeCard extends Component {
    constructor() {
        const name = 'HomeCard';
        const designerTemplate = `<div class=".ad-flex">
                            <div class="margin-right background-Templateimg background-image-position" ></div>
                            <div class="margin-right"> auto generated component </div>
                            </div>`;
        const paletteTemplate = 'HomeCard';
        const componentLabel = 'HomeCard';
        const templateUrl = 'articles/#!components-guide-8/HomeCard';
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
                value: 'Home',
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

        super.addAttribute(
            new Attribute({
                key: 'ImageLink',
                value: 'https://res.cloudinary.com/dc0agfvze/image/upload/v1684994324/home1_rr6k7p.jpg',
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'Main-Text',
                value: 'Jewellery',
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'Placeholder',
                value: 'Customer Number',
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'Button-Text',
                value: 'Next',
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'Button-Color',
                value: '#e7a960',
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'input-width',
                value: '94%',
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'button-click-function',
                value: 'gotoScan',
                type: 'a'
            })
        );

        //__append__Attribute


        super.setType(Component.COMPONENT_TYPE_TITLES.OTHERS.val);
    }
    get template() {
        return `<mat-card %bCustomProps% %[disabled]% %style% %class% %(click)% style="
        margin: 10px;
        border-radius: 10px !important;
        position: relative;">
        <img mat-card-image src=%ImageLink% >
    
        <mat-card-content style="
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);">
          <h1 style="color: white;
          font-size: 64px;
          font-family: Seaweed Script;
          font-weight: 400;">
            %Main-Text%</h1>
        </mat-card-content>
    
        <mat-card-actions style="margin:10px;">
        <input placeholder="%Placeholder%" type="number" [(ngModel)]="page.phoneNumber" style="display: block;
        border: 1px solid black !important;
        width: %input-width% !important;
        padding: 14px !important;
        padding-left: 30px !important;
        border-radius: 10px !important;
        margin-top: 20px !important;
        font-weight: 700 !important;">
          <p id="phoneNumberError" style="margin-bottom:10px;
          color: #f44336 ;
          font-size: small ;">
          </p><button mat-button style="margin:0px;
          background-color: %Button-Color%;
          border-radius: 10px !important;
          width: 100%;
          color: white;
          height: 50px;" (click)="%button-click-function%()">%Button-Text%</button>
        </mat-card-actions>
      </mat-card>`
    }
    set template(templateString) { }

    //__append_flows_start

    get flows(){
        return{
            flow:Homeflow
        }
    }

};