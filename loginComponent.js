
'use strict';
let Component = require('@jatahworx/bhive-toolkits').Component;
let Attribute = require('@jatahworx/bhive-toolkits').Attribute;
let loginFlow = require('./flow/login.js')
//__append_require_start

module.exports = class Login extends Component {

    constructor() {
        const name = 'Login';
        
        const designerTemplate = `<div class=".ad-flex">
                            <div class="margin-right login-background-image-position" ></div>
                            <div class="margin-right"> Login </div>
                            </div>`;
        const paletteTemplate = 'Login';
        const componentLabel = 'Login';
        const templateUrl = 'articles/#!components-guide-8/Login';
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
                value: 'Login',
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
                key: 'backgroundImage',
                value: 'assets/Web/Resource/loginBackground.jfif',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'id',
                value: 'loginError',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'HeaderText',
                value: 'Jwellery',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: '(ngSubmit)',
                value: 'login($event)',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'bgColorLogin',
                value: 'white',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'Caption',
                value: 'Jwellery',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'CaptionColor',
                value: 'white',
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'PlaceholderID',
                value: 'Enter',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'PlaceholderPWD',
                value: 'Enter',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'buttonBGColor',
                value: '#e7a960',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'buttonColor',
                value: 'white',
                type: 'a'
            })
        );

        super.addAttribute(
            new Attribute({
                key: 'loginDivMaxWidth',
                value: '350px',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'loginDivPadding',
                value: '30px 40px 60px 40px',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'loginDivMaxHeight',
                value: '400px',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'txtIDPadding',
                value: '14px',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'txtPWDPadding',
                value: '14px',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'txtIDColor',
                value: 'black',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'txtPWDColor',
                value: 'black',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: '[(ngModelUser)]',
                value: 'page.credentials.EmployeeId',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: '[(ngModelPWD)]',
                value: 'page.credentials.Password',
                type: 'a'
            })
        );
        
        super.addAttribute(
            new Attribute({
                key: 'loginDivWidth',
                value: '90%',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'loginColor',
                value: 'black',
                type: 'a'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'loginErrorColor',
                value: 'red',
                type: 'a'
            })
        );

        //__append__Attribute
        
        super.setType(Component.COMPONENT_TYPE_TITLES.OTHERS.val);
    }

    get template() {
        return `<div fxLayout="column wrap" style="height:100vh;
        width:100vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;background-image:url('%backgroundImage%');" fxLayoutAlign="space-around center" [fxShow]="true">                
        <h1 style="color: %CaptionColor%;
        font-size: 64px;
        font-family: Seaweed Script;
        font-weight: 400;">
        %Caption%
        </h1>
    <div style="border-radius:15px;
        
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: %bgColorLogin%;
        width: %loginDivWidth%;
        max-width: %loginDivMaxWidth% !important;
        padding: %loginDivPadding% !important;
        max-height: %loginDivMaxHeight% !important;
        @media (min-width: 768px) {            
              width: 40%;
          }">
<form #loginForm="ngForm" (ngSubmit)="%(ngSubmit)%">
      <div fxLayout="column wrap" style="height:100%" fxLayoutAlign="space-around center" [fxShow]="true">
        <h2 style=" font-weight:700;
        color:%loginColor%;
        margin-bottom:10px;
        font-size:20px;">
          LOGIN</h2>
        <p id="%id%" style="color:%loginErrorColor%;"> </p>
        <mat-form-field style="display:block !important; margin:5px 0px !important;
        
        width:auto !important;
        display: block;
        border: 1px solid black !important;
        width: 100% !important;
        padding:%txtIDPadding% !important;
        padding-left: 30px !important;
        border-radius: 10px !important;
        margin-top: 20px !important;
        font-weight: 700 !important;" [appearance]="&apos;standard&apos;" [floatLabel]="&apos;auto&apos;" [hideRequiredMarker]="false">
          <input matInput [(ngModel)]="%[(ngModelUser)]%" name="EmployeeId" type="text" placeholder="%PlaceholderID%" [required]="true" #EmployeeID="ngModel">
          <mat-error align="start" *ngIf="EmployeeID.errors?.required &amp;&amp; EmployeeID.touched &amp;&amp; EmployeeID.dirty">Employee id is required</mat-error>
        </mat-form-field>
        <mat-form-field style="display: block !important; margin:5px 0px !important;width: auto !important;  display: block;
        
        border: 1px solid black !important;
        width: 100% !important;
        padding:%txtPWDPadding% !important;
        padding-left: 30px !important;
        border-radius: 10px !important;
        margin-top: 20px !important;
        font-weight: 700 !important;" [appearance]="&apos;standard&apos;" [floatLabel]="&apos;auto&apos;" [hideRequiredMarker]="false">
          <input matInput [(ngModel)]="%[(ngModelPWD)]%" name="Password" type="password" 
          placeholder="%PlaceholderPWD%" [required]="true" minlength="8" #Password="ngModel">
          <mat-error align="end" *ngIf="Password.errors?.minlength &amp;&amp; Password.touched &amp;&amp; Password.dirty">password must be at least 8 character</mat-error><mat-error align="start" *ngIf="Password.errors?.required &amp;&amp; Password.touched &amp;&amp; Password.dirty">Password must be required</mat-error>
        </mat-form-field>

        <button mat-button 
        style="margin-left: auto !important;
        text-decoration: underline !important;
        padding-right: 0px !important;
        margin-bottom: 10px !important;">Forgot Password?</button>
  
        <button mat-button style="background-color:%buttonBGColor%;
        border-radius: 10px !important;
        width: 100%;
        color: %buttonColor%;
        height: 50px;" [disabled]="loginForm.invalid" type="submit">NEXT</button>
        
    </div>
</form>   
    </div>          
    </div>`
    }
    
    set template(templateString) { }

    //__append_flows_start

    get flows(){
        return {
            flow:loginFlow
        }
    }

};