'use strict';
let Component = require('@jatahworx/bhive-toolkits').Component;
let Attribute = require('@jatahworx/bhive-toolkits').Attribute;
//__append_require_start

module.exports = class autoGen_component extends Component {
    constructor() {
        const name = 'autoGen_component';
        const designerTemplate = `<div class=".ad-flex">
                            <div class="margin-right background-Templateimg background-image-position" ></div>
                            <div class="margin-right"> auto generated component </div>
                            </div>`;
        const paletteTemplate = 'autoGen_component';
        const componentLabel = 'autoGen_component';
        const templateUrl = 'articles/#!components-guide-8/autoGen_component';
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
                value: 'autoGen_component',
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
        return `<autoGen_component %bCustomProps% %[disabled]% %style% %class% %(click)%>
            </autoGen_component>`
    }
    set template(templateString) { }

    //__append_flows_start

};