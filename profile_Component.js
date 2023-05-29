'use strict';
let Component = require('@jatahworx/bhive-toolkits').Component;
let Attribute = require('@jatahworx/bhive-toolkits').Attribute;
let profileFlow = require('./flow/profileFlow');
//__append_require_start

module.exports = class PROFILE extends Component {
    constructor() {
        const name = 'PROFILE';
        const designerTemplate = `<div class=".ad-flex">
                            <div class="margin-right background-Templateimg background-image-position" ></div>
                            <div class="margin-right">Profile</div>
                            </div>`;
        const paletteTemplate = 'PROFILE';
        const componentLabel = 'PROFILE';
        const templateUrl = 'articles/#!components-guide-8/PROFILE';
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
                value: 'PROFILE',
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
                key: 'profilePic',
                value: 'https://res.cloudinary.com/ddmc9b1yx/image/upload/v1685011079/profile_tws7m4.jpg',
                type: 'a',
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'profileName',
                value: '',
                type: 'a',
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'place',
                value: '',
                type: 'a',
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'profileHeading',
                value: '',
                type: 'a',
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'backgroundColour',
                value: '',
                type: 'a',
            })
        );

        //__append__Attribute


        super.setType(Component.COMPONENT_TYPE_TITLES.OTHERS.val);
    }
    get template() {
        return `<div fxLayout="column wrap" fxLayoutAlign="start stretch" [fxShow]="true">
        <div>
        <div style="text-align: center; font-family: 'Source Sans Pro', sans-serif;">
  <span style="display: block; font-style: normal; font-weight: 500; font-size: 16px; margin-bottom: 1rem; padding-top: 1rem;">
  %profileHeading%
  </span>
</div>
           <section style="display: flex;
              justify-content: start;
              align-items: center;
              background: %backgroundColour%;
              padding: 0.5rem;">
              <div style="background-image: url('%profilePic%');
                 background-size: cover;
                 background-repeat: no-repeat;
                 border-radius: 50%;
                 width: 4rem;
                 height: 4rem;
                 margin-left: 0.5rem;
                 margin-right: 10px;">
              </div>
              <div fxLayout="column wrap">
              <span style="text-align: center;
                 display: block;
                 font-family: 'Source Sans Pro', sans-serif; font-style: normal; font-weight: 500; font-size: 16px; float: right;
                 margin-right: 5px;">
             %profileName%</span>
             <span style="float: right;
                 margin-right: 5px; display: block;
                 font-style: normal;
                 font-weight: 400;
                 font-size: 14px;">
              %place%</span>
              </div>
           </section>
        </div>
        <div style="width: 100%">
        <div *ngFor="let item of page.settingList" style="width:100%;
           padding: 10px; margin: 0px 0px ;">
           <div fxLayout="row wrap" style="margin-top: 1rem;
              margin-right: 145px !important;" fxLayoutAlign="none stretch" [fxShow]="true"><img src="{{item.img}}"
              style="margin:0px 25px; height:22px!important;"><span style="float: right;
              margin-right: 5px;">
              {{item.settings}}</span>
           </div>
        </div>
        </div>
     </div>`
    }
    set template(templateString) { }

    //__append_flows_start

    get flows() {
        return {
            flow: profileFlow
        }
    }

};