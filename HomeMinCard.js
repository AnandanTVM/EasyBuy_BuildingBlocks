'use strict';
let Component = require('@jatahworx/bhive-toolkits').Component;
let Attribute = require('@jatahworx/bhive-toolkits').Attribute;
//__append_require_start

let Homeflow = require("easybuy/flow/homemincard")

module.exports = class HomeMinCard extends Component {
    constructor() {
        const name = 'HomeMinCard';
        const designerTemplate = `<div class=".ad-flex">
                            <div class="margin-right background-Templateimg background-image-position" ></div>
                            <div class="margin-right"> auto generated component </div>
                            </div>`;
        const paletteTemplate = 'HomeMinCard';
        const componentLabel = 'HomeMinCard';
        const templateUrl = 'articles/#!components-guide-8/HomeMinCard';
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
                value: 'HomeMinCard',
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
                key: 'ngForData',
                value: `page.statistics`,
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'background-color',
                value: `#ffff`,
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'valueColor',
                value: `#e7a960`,
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'marginContainer',
                value: `5px`,
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'NameColor',
                value: `black`,
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'boxShadow',
                value: `rgba(0, 0, 0, 0.35)`,
                type: 'a'
            })
        );

        //__append__Attribute


        super.setType(Component.COMPONENT_TYPE_TITLES.OTHERS.val);
    }
    get template() {
        return `<div fxLayout="row wrap" fxLayoutAlign="space-between center" [fxShow]="true">
        <div fxLayout="row wrap" style="padding: 15px;
        margin:%marginContainer%;
        border-radius: 15px;
        box-shadow: %boxShadow% 0px 5px 15px;" 
        fxFlex="{{statistic.fxFlex}}"
        fxLayoutAlign="space-around center"
        [fxShow]="true" 
        *ngFor="let statistic of %ngForData%">
        <img *ngIf="statistic.imageLink" src="{{statistic.imageLink}}">
        <img *ngIf="statistic.imageUrl" imgSrc="{{statistic.imageUrl}}">
          <div fxLayout="column wrap" 
          fxLayoutAlign="start stretch" 
          [fxShow]="true" 
          *ngFor="let detail of statistic.details">
          <span style="color:%NameColor%;font-weight: bold;">
            {{detail.tittle}}</span>
            <span style="color:%valueColor%;">
            {{detail.value}}
            </span></div>
            </div>
      </div>`
    }
    set template(templateString) { }

    //__append_flows_start

    get flows(){
        return{
            flow:Homeflow
        }
    }

};