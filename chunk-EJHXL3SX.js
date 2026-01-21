import{a as T}from"./chunk-XRM6PKGS.js";import{b as C}from"./chunk-XHAM6T3I.js";import{e as _,f as M}from"./chunk-WZZJF4VT.js";import{a as Ii,c as yi,e as Ai}from"./chunk-AC7QKLRB.js";import{a as le,b as ee}from"./chunk-NZTJZNEO.js";import{$ as ai,A as je,F as Ft,G as Bt,H as kt,I as zt,J as jt,K as Kt,L as Qe,M as qe,N as Xt,O as Qt,Q as qt,R as Ye,aa as ni,ba as fi,ca as Si,ea as vi,fa as Je,ga as lt,ha as Ze,ia as Ce,ja as Ee,ka as ve,la as xe,ma as Ti,na as _i,oa as xi,p as wt,q as Re,r as He,s as ge,t as he,u as be,v as Lt,w as fe,x as We,y as Ue,z as ze}from"./chunk-HZCTH6KW.js";import{a as oi,b as ri,c as li,d as mi,e as pi,f as si,g as di,h as ci,i as ui,j as gi}from"./chunk-UISEXXDK.js";import{a as Pt,b as hi,c as bi,d as Mi,e as Ci,f as Ei}from"./chunk-LXNH35ZP.js";import{a as Nt,b as Ge,c as Rt,d as Ht,e as Vt,f as Gt,g as Wt,h as Xe,i as Ut}from"./chunk-5AGHB52E.js";import"./chunk-3XBGARNA.js";import{b as oe,c as re,d as Ke,e as Ot,f as Yt,g as Jt,h as Zt,i as $t,j as ei,k as ti,l as ii,m as Se}from"./chunk-NDYV2RWR.js";import{$a as xt,Ba as V,Bb as R,Cb as Q,Da as vt,Db as z,Ga as k,Ha as Tt,Hb as Dt,Ib as Ve,Jb as y,Ka as _t,Kb as A,La as de,Lb as P,Na as G,Oa as Mt,P as ft,Pa as ne,Pb as v,Qa as Be,Qb as K,Rb as X,Sa as ke,Va as Ct,W as St,Wa as Et,cb as It,eb as F,fb as ue,hb as W,jb as yt,ob as U,pb as At,tb as Oe,ub as N,w as bt,xb as L}from"./chunk-KLGXUUUF.js";import{o as Fe}from"./chunk-SJYD7TKV.js";import{Ab as g,Ca as Me,Cc as e,Dc as pe,Ec as D,Gb as S,Gc as E,Hc as x,Ic as I,Mc as gt,Nc as ht,Pb as ct,Qb as ut,Rb as Z,Sb as $,Ub as ae,Vb as q,Wb as Y,Wc as se,Xb as o,Xc as ot,Yb as t,Yc as Ne,Zb as i,_b as r,fc as O,ka as ie,kb as n,kd as rt,lc as u,nc as B,qa as b,ra as f,rc as we,sc as De,tc as Le,ub as ce,xc as w}from"./chunk-4VUSXYH3.js";import"./chunk-6NE7JDAX.js";var $e=`  import {Component} from '@angular/core';
    import {MatBadgeModule} from '@angular/material/badge';

    /**
     * @title Badge overview
     */
    @Component({
        selector: 'badge-overview-example',
        templateUrl: 'badge-overview-example.html',
        styleUrl: 'badge-overview-example.css',
        imports: [MatBadgeModule],
    })
    export class AppTextWithBadgeComponent {
        
    }
`,Pi=`  import {Component} from '@angular/core';
    import {MatBadgeModule} from '@angular/material/badge';
    import { MatButtonModule } from '@angular/material/button';

    /**
     * @title Badge overview
     */
    @Component({
        selector: 'badge-overview-example',
        templateUrl: 'badge-overview-example.html',
        styleUrl: 'badge-overview-example.css',
        imports: [MatBadgeModule, MatButtonModule],
    })
    export class AppTextWithBadgeComponent {
        
    }
`,wi=`  import {Component} from '@angular/core';
    import {MatBadgeModule} from '@angular/material/badge';
    import { MatButtonModule } from '@angular/material/button';

    /**
     * @title Badge overview
     */
    @Component({
        selector: 'badge-overview-example',
        templateUrl: 'badge-overview-example.html',
        styleUrl: 'badge-overview-example.css',
        imports: [MatBadgeModule, MatButtonModule],
    })
    export class AppTextWithBadgeComponent {
        toggleBadgeVisibility() {
            this.hidden = !this.hidden;
        }
    }
`;var Di=`  <div matBadge="4" matBadgeOverlap="false" class="d-inline">
            Text with a badge
        </div>
`,Li=`   <div matBadge="1" matBadgeSize="small" class="d-inline">
            Text with small badge
          </div>
          <div matBadge="1" matBadgeSize="large" class="d-inline">
            Text with large badge
          </div>
`,Ni=`   <p class="f-w-500 text-muted">
    Button with a badge on the left
    <button
        mat-flat-button
        color="primary"
        matBadge="8"
        matBadgePosition="before"
        matBadgeColor="accent"
    >
        Action
    </button>
    </p>
`,Fi=`  <p class="f-w-500 text-muted">
            Icon with a badge
            <mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>
          </p>
`,Bi=`  <p>
            Button toggles badge visibility
            <button
              mat-flat-button
              color="primary"
              matBadge="7"
              [matBadgeHidden]="hidden"
              (click)="toggleBadgeVisibility()"
            >
              Hide
            </button>
          </p>
`;var ki=(()=>{class l{constructor(){this.hidden=!1,this.codeForTextBadge=Di,this.codeForTextBadgeTs=$e,this.codeForSizeBadge=Li,this.codeForSizeBadgeTs=$e,this.codeForButtonBadge=Ni,this.codeForButtonBadgeTs=Pi,this.codeForIconBadge=Fi,this.codeForIconBadgeTs=$e,this.codeForButtonTogglesBadge=Bi,this.codeForButtonTogglesBadgeTs=wi}ngOnInit(){}toggleBadgeVisibility(){this.hidden=!this.hidden}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-badge"]],decls:85,vars:11,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24","d-flex","align-items-center","justify-content-between"],[1,"m-b-0"],[1,"b-t-1"],["output",""],["matBadge","4","matBadgeOverlap","false",1,"d-inline"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matBadge","1","matBadgeSize","small",1,"d-inline"],["matBadge","1","matBadgeSize","large",1,"d-inline"],[1,"f-w-500","text-muted"],["mat-flat-button","","color","primary","matBadge","8","matBadgePosition","before","matBadgeColor","accent"],["matBadge","15","matBadgeColor","warn"],["mat-flat-button","","color","primary","matBadge","7",3,"click","matBadgeHidden"]],template:function(m,a){m&1&&(t(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),e(3,"Badges"),i()(),t(4,"mat-card-content",3)(5,"app-code-view")(6,"div",4)(7,"div",5),e(8," Text with a badge "),i()(),t(9,"div",6)(10,"pre"),e(11,"          "),r(12,"code",7),e(13,`
        `),i()(),t(14,"div",8)(15,"pre"),e(16,"          "),r(17,"code",9),e(18,`
        `),i()()(),t(19,"app-code-view")(20,"div",4)(21,"div",10),e(22," Text with small badge "),i(),r(23,"br")(24,"br"),t(25,"div",11),e(26," Text with large badge "),i()(),t(27,"div",6)(28,"pre"),e(29,"          "),r(30,"code",7),e(31,`
        `),i()(),t(32,"div",8)(33,"pre"),e(34,"          "),r(35,"code",9),e(36,`
        `),i()()(),t(37,"app-code-view")(38,"div",4)(39,"p",12),e(40," Button with a badge on the left "),t(41,"button",13),e(42," Action "),i()()(),t(43,"div",6)(44,"pre"),e(45,"          "),r(46,"code",7),e(47,`
        `),i()(),t(48,"div",8)(49,"pre"),e(50,"          "),r(51,"code",9),e(52,`
        `),i()()(),t(53,"app-code-view")(54,"div",4)(55,"p",12),e(56," Icon with a badge "),t(57,"mat-icon",14),e(58,"home"),i()()(),t(59,"div",6)(60,"pre"),e(61,"          "),r(62,"code",7),e(63,`
        `),i()(),t(64,"div",8)(65,"pre"),e(66,"          "),r(67,"code",9),e(68,`
        `),i()()(),t(69,"app-code-view")(70,"div",4)(71,"p"),e(72," Button toggles badge visibility "),t(73,"button",15),u("click",function(){return a.toggleBadgeVisibility()}),e(74," Hide "),i()()(),t(75,"div",6)(76,"pre"),e(77,"          "),r(78,"code",7),e(79,`
        `),i()(),t(80,"div",8)(81,"pre"),e(82,"          "),r(83,"code",9),e(84,`
        `),i()()()()()),m&2&&(n(12),o("highlight",a.codeForTextBadge),n(5),o("highlightAuto",a.codeForTextBadgeTs),n(13),o("highlight",a.codeForSizeBadge),n(5),o("highlightAuto",a.codeForSizeBadgeTs),n(11),o("highlight",a.codeForButtonBadge),n(5),o("highlightAuto",a.codeForButtonBadgeTs),n(11),o("highlight",a.codeForIconBadge),n(5),o("highlightAuto",a.codeForTextBadgeTs),n(6),o("matBadgeHidden",a.hidden),n(5),o("highlight",a.codeForButtonTogglesBadge),n(5),o("highlightAuto",a.codeForButtonTogglesBadgeTs))},dependencies:[ni,ai,L,N,X,K,v,y,P,A,Se,_,M,C,ee,T],encapsulation:2})}}return l})();var mt=`  import {Component} from '@angular/core';
    import { MatChipsModule } from '@angular/material/chips';

    /**
     * @title chips overview
     */
    @Component({
        selector: 'app-chips',
          templateUrl: './chips.component.html',
          styleUrls: ['./chips.component.scss'],
          imports: [
            MatChipsModule,
          ],
          changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class AppChipsComponent {
        
    }
`,Oi=`  import {Component} from '@angular/core';
    import { MatChipsModule } from '@angular/material/chips';
    import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

    /**
     * @title chips overview
     */
    @Component({
        selector: 'app-chips',
          templateUrl: './chips.component.html',
          styleUrls: ['./chips.component.scss'],
          imports: [
            MatChipsModule,
            CdkDropList,
            CdkDragDrop,
            CdkDrag,
          ],
          changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class AppChipsComponent {
        // drag n drop
          readonly vegetables = signal<Vegetable[]>([
            { name: 'apple' },
            { name: 'banana' },
            { name: 'strawberry' },
            { name: 'orange' },
            { name: 'kiwi' },
            { name: 'cherry' },
          ]);
        
          drop(event: CdkDragDrop<Vegetable[]>) {
            this.vegetables.update((vegetables) => {
              moveItemInArray(vegetables, event.previousIndex, event.currentIndex);
              return [...vegetables];
            });
          }
    }
    function isDragDrop(object: any): object is CdkDragDrop<string[]> {
      return 'previousIndex' in object;
    }
`,Ri=`  import {Component} from '@angular/core';
    import { MatChipsModule } from '@angular/material/chips';
    import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

    /**
     * @title chips overview
     */
    @Component({
        selector: 'app-chips',
          templateUrl: './chips.component.html',
          styleUrls: ['./chips.component.scss'],
          imports: [
            MatChipsModule,
            CdkDropList,
            CdkDragDrop,
            CdkDrag,
          ],
          changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class AppChipsComponent {
        //
        // Stacked
        //
        readonly bestBoys: string[] = ['Samoyed', 'Akita Inu', 'Alaskan Malamute', 'Siberian Husky'];
    }
`,Hi=`  import {Component} from '@angular/core';
    import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';

    /**
     * @title chips overview
     */
    @Component({
        selector: 'app-chips',
          templateUrl: './chips.component.html',
          styleUrls: ['./chips.component.scss'],
          imports: [
            MatChipsModule,
          ],
          changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class AppChipsComponent {
        //
        //  chips with input
        //
        addOnBlur = true;
        readonly separatorKeysCodes = [ENTER, COMMA] as const;
        fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
      
        add(event: MatChipInputEvent): void {
          const value = (event.value || '').trim();
      
          // Add our fruit
          if (value) {
            this.fruits.push({ name: value });
          }
      
          // Clear the input value
          event.chipInput!.clear();
        }
      
        remove(fruit: Fruit): void {
          const index = this.fruits.indexOf(fruit);
      
          if (index >= 0) {
            this.fruits.splice(index, 1);
          }
        }
      
        edit(fruit: Fruit, event: MatChipEditedEvent) {
          const value = event.value.trim();
      
          // Remove fruit if it no longer has a name
          if (!value) {
            this.remove(fruit);
            return;
          }
      
          // Edit existing fruit
          const index = this.fruits.indexOf(fruit);
          if (index >= 0) {
            this.fruits[index].name = value;
          }
        }
`,Vi=`  import {Component} from '@angular/core';
    import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    /**
     * @title chips overview
     */
    @Component({
        selector: 'app-chips',
          templateUrl: './chips.component.html',
          styleUrls: ['./chips.component.scss'],
          imports: [
            MatChipsModule,
            FormsModule,
            ReactiveFormsModule,
          ],
          changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class AppChipsComponent {
      // form control
      
        readonly keywords = signal(['angular', 'how-to', 'tutorial', 'accessibility']);
        readonly formControl = new FormControl(['angular']);
      
        announcer = inject(LiveAnnouncer);
      
        removeKeyword(keyword: string) {
          this.keywords.update(keywords => {
            const index = keywords.indexOf(keyword);
            if (index < 0) {
              return keywords;
            }
      
            keywords.splice(index, 1);
            this.announcer.announce('removed keyword');
            return [...keywords];
          });
        }
      
        addForm(event: MatChipInputEvent): void {
          const value = (event.value || '').trim();
      
          // Add our keyword
          if (value) {
            this.keywords.update(keywords => [...keywords, value]);
          }
      
          // Clear the input value
          event.chipInput!.clear();
        }
    }
`;var Gi=`  <mat-chip-listbox aria-label="Fish selection">
                <mat-chip-option class="f-s-14" color="primary">One fish</mat-chip-option>
                <mat-chip-option class="f-s-14">Two fish</mat-chip-option>
                <mat-chip-option class="f-s-14" color="accent" selected>Accent fish</mat-chip-option>
                <mat-chip-option class="f-s-14" color="warn">Warn fish</mat-chip-option>
              </mat-chip-listbox>
`,Wi=`   <mat-chip-set aria-label="Dog selection">
                <mat-chip class="f-s-14">
                  <img matChipAvatar src="/assets/images/profile/user-1.jpg" alt="Photo of a Shiba Inu" />
                  Anderson
                </mat-chip>
                <mat-chip class="f-s-14" color="primary">
                  <img matChipAvatar src="/assets/images/profile/user-2.jpg" alt="Photo of a Shiba Inu" />
                  Monty
                </mat-chip>
                <mat-chip class="f-s-14" color="accent">
                  <img matChipAvatar src="/assets/images/profile/user-3.jpg" alt="Photo of a Shiba Inu" />
                  Mathew
                </mat-chip>
              </mat-chip-set>
`,Ui=`   <mat-chip-set class="example-chip" cdkDropList cdkDropListOrientation="horizontal"
              (cdkDropListDropped)="drop($event)">
              @for (vegetable of vegetables(); track vegetable.name) {
              <mat-chip class="example-box" cdkDrag>{{
                vegetable.name
                }}</mat-chip>
              }
`,zi=`   <mat-chip-listbox class="mat-mdc-chip-set-stacked" aria-label="Cutest dog breeds">
  @for (dog of bestBoys; track dog) {
    <mat-chip-option selected>{{dog}}</mat-chip-option>
  }
</mat-chip-listbox>
`,ji=`   <mat-form-field appearance="outline" class="w-100">
                <mat-label>Favorite Fruits</mat-label>
                <mat-chip-grid #chipGrid aria-label="Enter fruits">
                  @for(fruit of fruits; track fruit.name) {
                  <mat-chip-row (removed)="remove(fruit)" [editable]="true" (edited)="edit(fruit, $event)"
                    [aria-description]="'press enter to edit ' + fruit.name" class="f-s-14">
                    {{ fruit.name }}
                    <button matChipRemove [attr.aria-label]="'remove ' + fruit.name">
                      <mat-icon>cancel</mat-icon>
                    </button>
                  </mat-chip-row>
                  }
  
                  <input placeholder="New fruit..." [matChipInputFor]="chipGrid"
                    [matChipInputSeparatorKeyCodes]="separatorKeysCodes" [matChipInputAddOnBlur]="addOnBlur"
                    (matChipInputTokenEnd)="add($event)" />
                </mat-chip-grid>
              </mat-form-field>
`,Ki=`   <mat-form-field appearance="outline" class="w-100">
                <mat-label>Favorite Fruits</mat-label>
                <mat-chip-grid #chipGrid aria-label="Enter fruits">
                  @for(fruit of fruits; track fruit.name) {
                  <mat-chip-row (removed)="remove(fruit)" [editable]="true" (edited)="edit(fruit, $event)"
                    [aria-description]="'press enter to edit ' + fruit.name" class="f-s-14">
                    {{ fruit.name }}
                    <button matChipRemove [attr.aria-label]="'remove ' + fruit.name">
                      <mat-icon>cancel</mat-icon>
                    </button>
                  </mat-chip-row>
                  }
  
                  <input placeholder="New fruit..." [matChipInputFor]="chipGrid"
                    [matChipInputSeparatorKeyCodes]="separatorKeysCodes" [matChipInputAddOnBlur]="addOnBlur"
                    (matChipInputTokenEnd)="add($event)" />
                </mat-chip-grid>
              </mat-form-field>
`;var Xi=(l,c)=>c.name;function oo(l,c){if(l&1&&(t(0,"mat-chip",26),e(1),i()),l&2){let p=c.$implicit;n(),pe(p.name)}}function ro(l,c){if(l&1&&(t(0,"mat-chip-option",28),e(1),i()),l&2){let p=c.$implicit;n(),pe(p)}}function lo(l,c){if(l&1){let p=O();t(0,"mat-chip-row",41),u("removed",function(){let a=b(p).$implicit,d=B();return f(d.remove(a))})("edited",function(a){let d=b(p).$implicit,s=B();return f(s.edit(d,a))}),e(1),t(2,"button",42)(3,"mat-icon"),e(4,"cancel"),i()()()}if(l&2){let p=c.$implicit;o("editable",!0),ct("aria-description","press enter to edit "+p.name),n(),D(" ",p.name," "),n(),ut("aria-label","remove "+p.name)}}function mo(l,c){if(l&1){let p=O();t(0,"mat-chip-row",43),u("removed",function(){let a=b(p).$implicit,d=B();return f(d.removeKeyword(a))}),e(1),t(2,"button",44)(3,"mat-icon"),e(4,"cancel"),i()()()}if(l&2){let p=c.$implicit;n(),D(" ",p," ")}}var Qi=(()=>{class l{constructor(){this.codeForBasicChips=Gi,this.codeForBasicChipsTs=mt,this.codeForAvatarChips=Wi,this.codeForAvatarChipsTs=mt,this.codeForDragDropChips=Ui,this.codeForDragDropChipsTs=Oi,this.codeForStackedChips=zi,this.codeForStackedChipsTs=Ri,this.codeForInputChips=ji,this.codeForInputChipsTs=Hi,this.codeForFormControlChips=Ki,this.codeForFormControlChipsTs=Vi,this.vegetables=Me([{name:"apple"},{name:"banana"},{name:"strawberry"},{name:"orange"},{name:"kiwi"},{name:"cherry"}]),this.bestBoys=["Samoyed","Akita Inu","Alaskan Malamute","Siberian Husky"],this.addOnBlur=!0,this.separatorKeysCodes=[13,188],this.fruits=[{name:"Lemon"},{name:"Lime"},{name:"Apple"}],this.keywords=Me(["angular","how-to","tutorial","accessibility"]),this.formControl=new de(["angular"]),this.announcer=ie(bt)}drop(p){this.vegetables.update(m=>(Ii(m,p.previousIndex,p.currentIndex),[...m]))}add(p){let m=(p.value||"").trim();m&&this.fruits.push({name:m}),p.chipInput.clear()}remove(p){let m=this.fruits.indexOf(p);m>=0&&this.fruits.splice(m,1)}edit(p,m){let a=m.value.trim();if(!a){this.remove(p);return}let d=this.fruits.indexOf(p);d>=0&&(this.fruits[d].name=a)}removeKeyword(p){this.keywords.update(m=>{let a=m.indexOf(p);return a<0?m:(m.splice(a,1),this.announcer.announce(`removed ${p}`),[...m])})}addForm(p){let m=(p.value||"").trim();m&&this.keywords.update(a=>[...a,m]),p.chipInput.clear()}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-chips"]],decls:146,vars:24,consts:[["chipGrid",""],["formChip",""],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["aria-label","Fish selection"],["color","primary",1,"f-s-14"],[1,"f-s-14"],["color","accent","selected","",1,"f-s-14"],["color","warn",1,"f-s-14"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["aria-label","Dog selection"],["matChipAvatar","","src","/assets/images/profile/user-1.jpg","alt","Photo of a Shiba Inu"],["matChipAvatar","","src","/assets/images/profile/user-2.jpg","alt","Photo of a Shiba Inu"],["color","accent",1,"f-s-14"],["matChipAvatar","","src","/assets/images/profile/user-3.jpg","alt","Photo of a Shiba Inu"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"example-chip",3,"cdkDropListDropped"],["cdkDrag","",1,"example-box"],["aria-label","Cutest dog breeds",1,"mat-mdc-chip-set-stacked"],["selected",""],[1,"col-12"],["appearance","outline",1,"w-100"],["aria-label","Enter fruits"],[1,"f-s-14",3,"editable","aria-description"],["placeholder","New fruit...",3,"matChipInputTokenEnd","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],[1,"d-flex","gap-8"],["mat-stroked-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",3,"click"],["appearance","outline",1,"w-100","m-t-20"],["aria-label","Enter keywords",3,"formControl"],["placeholder","New keyword...",3,"matChipInputTokenEnd","matChipInputFor"],[1,"f-w-600"],[1,"f-s-14",3,"removed","edited","editable","aria-description"],["matChipRemove",""],[3,"removed"],["matChipRemove","","aria-label","'remove ' + keyword"]],template:function(m,a){if(m&1){let d=O();t(0,"mat-card",2)(1,"div",3)(2,"mat-card-title",4),e(3,"Chips"),i()(),t(4,"mat-card-content",5)(5,"div",6)(6,"div",7)(7,"app-code-view",8)(8,"h4",9),e(9," Basic "),i(),t(10,"div",10)(11,"mat-chip-listbox",11)(12,"mat-chip-option",12),e(13,"One fish"),i(),t(14,"mat-chip-option",13),e(15,"Two fish"),i(),t(16,"mat-chip-option",14),e(17,"Accent fish"),i(),t(18,"mat-chip-option",15),e(19,"Warn fish"),i()()(),t(20,"div",16)(21,"pre"),e(22,"              "),r(23,"code",17),e(24,`
            `),i()(),t(25,"div",18)(26,"pre"),e(27,"              "),r(28,"code",19),e(29,`
            `),i()()()(),t(30,"div",7)(31,"app-code-view",8)(32,"h4",9),e(33," Avatar "),i(),t(34,"div",10)(35,"mat-chip-set",20)(36,"mat-chip",13),r(37,"img",21),e(38," Anderson "),i(),t(39,"mat-chip",12),r(40,"img",22),e(41," Monty "),i(),t(42,"mat-chip",23),r(43,"img",24),e(44," Mathew "),i()()(),t(45,"div",16)(46,"pre"),e(47,"              "),r(48,"code",17),e(49,`
            `),i()(),t(50,"div",18)(51,"pre"),e(52,"              "),r(53,"code",19),e(54,`
            `),i()()()(),t(55,"div",7)(56,"app-code-view",8)(57,"h4",9),e(58," Drag n Drop "),i(),t(59,"div",10)(60,"mat-chip-set",25),u("cdkDropListDropped",function(h){return b(d),f(a.drop(h))}),q(61,oo,2,1,"mat-chip",26,Xi),i()(),t(63,"div",16)(64,"pre"),e(65,"              "),r(66,"code",17),e(67,`
            `),i()(),t(68,"div",18)(69,"pre"),e(70,"              "),r(71,"code",19),e(72,`
            `),i()()()(),t(73,"div",7)(74,"app-code-view",8)(75,"h4",9),e(76," Stacked "),i(),t(77,"div",10)(78,"mat-chip-listbox",27),q(79,ro,2,1,"mat-chip-option",28,ae),i()(),t(81,"div",16)(82,"pre"),e(83,"              "),r(84,"code",17),e(85,`
            `),i()(),t(86,"div",18)(87,"pre"),e(88,"              "),r(89,"code",19),e(90,`
            `),i()()()(),t(91,"div",29)(92,"app-code-view",8)(93,"h4",9),e(94," Input "),i(),t(95,"div",10)(96,"mat-form-field",30)(97,"mat-label"),e(98,"Favorite Fruits"),i(),t(99,"mat-chip-grid",31,0),q(101,lo,5,4,"mat-chip-row",32,Xi),t(103,"input",33),u("matChipInputTokenEnd",function(h){return b(d),f(a.add(h))}),i()()()(),t(104,"div",16)(105,"pre"),e(106,"              "),r(107,"code",17),e(108,`
            `),i()(),t(109,"div",18)(110,"pre"),e(111,"              "),r(112,"code",19),e(113,`
            `),i()()()(),t(114,"div",29)(115,"app-code-view",8)(116,"h4",9),e(117," Form Control "),i(),t(118,"div",10)(119,"div",34)(120,"button",35),u("click",function(){return b(d),f(a.formControl.disable())}),e(121," Disable form control "),i(),t(122,"button",36),u("click",function(){return b(d),f(a.formControl.enable())}),e(123," Enable form control "),i()(),t(124,"mat-form-field",37)(125,"mat-label"),e(126,"Video keywords"),i(),t(127,"mat-chip-grid",38,1),q(129,mo,5,1,"mat-chip-row",null,ae),i(),t(131,"input",39),u("matChipInputTokenEnd",function(h){return b(d),f(a.addForm(h))}),i()(),t(132,"p")(133,"span",40),e(134,"The following keywords are entered:"),i(),e(135),i()(),t(136,"div",16)(137,"pre"),e(138,"              "),r(139,"code",17),e(140,`
            `),i()(),t(141,"div",18)(142,"pre"),e(143,"              "),r(144,"code",19),e(145,`
            `),i()()()()()()()}if(m&2){let d=w(100),s=w(128);n(7),o("isTitle",!0),n(16),o("highlight",a.codeForBasicChips),n(5),o("highlightAuto",a.codeForBasicChipsTs),n(3),o("isTitle",!0),n(17),o("highlight",a.codeForAvatarChips),n(5),o("highlightAuto",a.codeForAvatarChipsTs),n(3),o("isTitle",!0),n(5),Y(a.vegetables()),n(5),o("highlight",a.codeForDragDropChips),n(5),o("highlightAuto",a.codeForDragDropChipsTs),n(3),o("isTitle",!0),n(5),Y(a.bestBoys),n(5),o("highlight",a.codeForStackedChips),n(5),o("highlightAuto",a.codeForStackedChipsTs),n(3),o("isTitle",!0),n(9),Y(a.fruits),n(2),o("matChipInputFor",d)("matChipInputSeparatorKeyCodes",a.separatorKeysCodes)("matChipInputAddOnBlur",a.addOnBlur),n(4),o("highlight",a.codeForInputChips),n(5),o("highlightAuto",a.codeForInputChipsTs),n(3),o("isTitle",!0),n(12),o("formControl",a.formControl),n(2),Y(a.keywords()),n(2),o("matChipInputFor",s),n(4),D(" ",a.formControl.value," "),n(4),o("highlight",a.codeForFormControlChips),n(5),o("highlightAuto",a.codeForFormControlChipsTs)}},dependencies:[R,U,W,gi,li,oi,ci,ui,di,mi,ri,pi,si,X,K,v,y,P,A,Ai,yi,F,k,ue,ke,L,N,_,M,C,T],styles:[".example-box.cdk-drag-animating[_ngcontent-%COMP%], .example-chip[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0})}}return l})();var qi=`  <div class="row">
                <div class="col-sm-6">
                  <button mat-flat-button color="primary" (click)="openDialog('0ms', '0ms')" class="w-100">
                    Open Dialog without animation
                  </button>
                </div>
                <div class="col-sm-6">
                  <button mat-flat-button color="accent" class="m-l-8" (click)="openDialog('3000ms', '1500ms')"
                    class="w-100">
                    Open Dialog slowly
                  </button>
                </div>
              </div>

              <!-- dialog view -->
              <h5 mat-dialog-title >Delete file</h5>
              <div mat-dialog-content class="f-s-14 lh-16">
                Would you like to delete cat.jpeg?
              </div>
              <div mat-dialog-actions class="p-24 p-t-0">
                <button mat-flat-button class="bg-error text-white" mat-dialog-close>
                  No
                </button>
                <button mat-flat-button mat-dialog-close cdkFocusInitial>Ok</button>
              </div>
`,Yi=`  <button mat-flat-button color="primary" (click)="openHeaderDialog()" class="w-100">
                Open Scrollable Dialog
              </button>

               <!-- dialog view -->
               <h2 mat-dialog-title>Install Angular</h2>
              <mat-dialog-content class="mat-typography">
                <h3 class="f-s-16 f-w-600 m-t-16">Develop across all platforms</h3>
                <p class="f-s-14 lh-24">
                  Learn one way to build applications with Angular and reuse your code and
                  abilities to build apps for any deployment target. For web, mobile web,
                  native mobile and native desktop.
                </p>

                <h3 class="f-s-16 f-w-600 m-t-16">Speed &amp; Performance</h3>
                <p class="f-s-14 lh-24">
                  Achieve the maximum speed possible on the Web Platform today, and take it
                  further, via Web Workers and server-side rendering. Angular puts you in
                  control over scalability. Meet huge data requirements by building data
                  models on RxJS, Immutable.js or another push-model.
                </p>

                <h3 class="f-s-16 f-w-600 m-t-16">Incredible tooling</h3>
                <p class="f-s-14 lh-24">
                  Build features quickly with simple, declarative templates. Extend the
                  template language with your own components and use a wide array of existing
                  components. Get immediate Angular-specific help and feedback with nearly
                  every IDE and editor. All this comes together so you can focus on building
                  amazing apps rather than trying to make the code work.
                </p>

                <h3 class="f-s-16 f-w-600 m-t-16">Loved by millions</h3>
                <p class="f-s-14 lh-24">
                  From prototype through global deployment, Angular delivers the productivity
                  and scalable infrastructure that supports Google's largest applications.
                </p>

                <h3 class="f-s-16 f-w-600 m-t-16">What is Angular?</h3>

                <p class="f-s-14 lh-24">
                  Angular is a platform that makes it easy to build applications with the web.
                  Angular combines declarative templates, dependency injection, end to end
                  tooling, and integrated best practices to solve development challenges.
                  Angular empowers developers to build applications that live on the web,
                  mobile, or the desktop
                </p>

                <h3 class="f-s-16 f-w-600 m-t-16">Architecture overview</h3>

                <p class="f-s-14 lh-24">
                  Angular is a platform and framework for building client applications in HTML
                  and TypeScript. Angular is itself written in TypeScript. It implements core
                  and optional functionality as a set of TypeScript libraries that you import
                  into your apps.
                </p>

                <p class="f-s-14 lh-24">
                  The basic building blocks of an Angular application are NgModules, which
                  provide a compilation context for components. NgModules collect related code
                  into functional sets; an Angular app is defined by a set of NgModules. An
                  app always has at least a root module that enables bootstrapping, and
                  typically has many more feature modules.
                </p>

                <p class="f-s-14 lh-24">
                  Components define views, which are sets of screen elements that Angular can
                  choose among and modify according to your program logic and data. Every app
                  has at least a root component.
                </p>

                <p class="f-s-14 lh-24">
                  Components use services, which provide specific functionality not directly
                  related to views. Service providers can be injected into components as
                  dependencies, making your code modular, reusable, and efficient.
                </p>

                <p class="f-s-14 lh-24">
                  Both components and services are simply classes, with decorators that mark
                  their type and provide metadata that tells Angular how to use them.
                </p>

                <p class="f-s-14 lh-24">
                  The metadata for a component class associates it with a template that
                  defines a view. A template combines ordinary HTML with Angular directives
                  and binding markup that allow Angular to modify the HTML before rendering it
                  for display.
                </p>

                <p class="f-s-14 lh-24">
                  The metadata for a service class provides the information Angular needs to
                  make it available to components through Dependency Injection (DI).
                </p>

                <p class="f-s-14 lh-24">
                  An app's components typically define many views, arranged hierarchically.
                  Angular provides the Router service to help you define navigation paths
                  among views. The router provides sophisticated in-browser navigational
                  capabilities.
                </p>
              </mat-dialog-content>
              <mat-dialog-actions align="end">
                <button mat-flat-button class="bg-error text-white" mat-dialog-close>Cancel</button>
                <button mat-flat-button [mat-dialog-close]="true" cdkFocusInitial>Install</button>
              </mat-dialog-actions>


`,Ji=`  <button mat-flat-button color="accent" (click)="openInjectDialog()" class="w-100">
                Open dialog
              </button>

              <!-- dialog view -->
              <h1 mat-dialog-title>Favorite Animal</h1>
              <div mat-dialog-content>
                My favorite animal is:
                <ul>
                  <li>
                    @if(data.animal === 'panda') {
                    <span>&#10003;</span>
                    } Panda
                  </li>
                  <li>
                    @if(data.animal === 'unicorn') {
                    <span>&#10003;</span>
                    } Unicorn
                  </li>
                  <li>
                    @if(data.animal === 'lion') {
                    <span>&#10003;</span>
                    } Lion
                  </li>
                </ul>
              </div>

`,Zi=`  <button mat-flat-button class="w-100" color="primary" [matMenuTriggerFor]="menu" #menuTrigger>
                Menu
              </button>
              <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="openMenuDialog()">
                  Open dialog
                </button>
              </mat-menu>

`,$i=`  <mat-form-field appearance="outline" class="w-100">
                <mat-label>What's your name?</mat-label>
                <input matInput [(ngModel)]="name" />
              </mat-form-field>
              <button mat-flat-button class="bg-primary w-100" (click)="openDialogEx()">Pick one</button>
              @if (animal()) {
              <span class="m-t-12 d-block">
                You chose: <span class="f-w-600">{{ animal() }}</span>
              </span>
              }

`;var ea=`  import {Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
    import {
      MatDialog,
      MatDialogRef,
      MatDialogActions,
      MatDialogClose,
      MatDialogTitle,
      MatDialogContent,
      MatDialogModule,
    } from '@angular/material/dialog';

    /**
     * @title chips overview
     */
    @Component({
        selector: 'app-dialog',
        templateUrl: 'dialog.component.html',
        imports: [
          MatButtonModule,
          MatDialogActions,
          MatDialogClose,
          MatDialogTitle,
          MatDialogContent,
          MatDialogModule,
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    })

    //  1
    @Component({
        selector: 'dialog-overview',
        imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
        templateUrl: 'dialog-overview.component.html'
    })
    export class AppDialogOverviewComponent {
      constructor(public dialogRef: MatDialogRef<AppDialogOverviewComponent>) {}
    }

    export class AppDialogComponent {
        // 1
          openDialog(
            enterAnimationDuration: string,
            exitAnimationDuration: string
          ): void {
            this.dialog.open(AppDialogOverviewComponent, {
              width: '290px',
              enterAnimationDuration,
              exitAnimationDuration,
            });
          }
    }
`,ta=`  import {Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
    import {
      MatDialog,
      MatDialogRef,
      MatDialogActions,
      MatDialogClose,
      MatDialogTitle,
      MatDialogContent,
      MatDialogModule,
    } from '@angular/material/dialog';

    /**
     * @title chips overview
     */
    @Component({
        selector: 'app-dialog',
        templateUrl: 'dialog.component.html',
        imports: [
          MatButtonModule,
          MatDialogActions,
          MatDialogClose,
          MatDialogTitle,
          MatDialogContent,
          MatDialogModule,
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    })

    /**
     * @title 2 Dialog with header, scrollable content and actions
     */
    @Component({
        selector: 'dialog-content',
        imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
        templateUrl: 'dialog-content.component.html'
    })
    export class AppDialogContentComponent {}

    export class AppDialogComponent {
        // 2
          openHeaderDialog() {
            const dialogRef = this.dialog.open(AppDialogContentComponent);
        
            dialogRef.afterClosed().subscribe((result) => {
              console.log('Dialog result: result');
            });
          }
    }
`,ia=`  import {Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
    import {
      MatDialog,
      MatDialogRef,
      MatDialogActions,
      MatDialogClose,
      MatDialogTitle,
      MatDialogContent,
      MatDialogModule,
    } from '@angular/material/dialog';

    export interface DialogData {
      animal: 'panda' | 'unicorn' | 'lion';
    }

    /**
     * @title chips overview
     */
    @Component({
        selector: 'app-dialog',
        templateUrl: 'dialog.component.html',
        imports: [
          MatButtonModule,
          MatDialogActions,
          MatDialogClose,
          MatDialogTitle,
          MatDialogContent,
          MatDialogModule,
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    })

    // 3
    @Component({
        selector: 'dialog-data-example-dialog',
        imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
        templateUrl: 'dialog-data.component.html'
    })
    export class AppDialogDataComponent {
      constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    }

    export class AppDialogComponent {
        // 3
          openInjectDialog() {
            this.dialog.open(AppDialogDataComponent, {
              data: {
                animal: 'panda',
              },
            });
          }
    }
`,aa=`  import {Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
    import {
      MatDialog,
      MatDialogRef,
      MatDialogActions,
      MatDialogClose,
      MatDialogTitle,
      MatDialogContent,
      MatDialogModule,
    } from '@angular/material/dialog';

    /**
     * @title chips overview
     */
    @Component({
        selector: 'app-dialog',
        templateUrl: 'dialog.component.html',
        imports: [
          MatButtonModule,
          MatDialogActions,
          MatDialogClose,
          MatDialogTitle,
          MatDialogContent,
          MatDialogModule,
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    })

    // 4
    @Component({
        selector: 'dialog-menu',
        imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
        templateUrl: 'dialog-menu.component.html'
    })
    export class AppDialogMenuComponent {}

    export class AppDialogComponent {
        // 4
        @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
      
        constructor(public dialog: MatDialog) {}

        openMenuDialog() {
            const dialogRef = this.dialog.open(AppDialogMenuComponent, {
              restoreFocus: false,
            });
        
            // Manually restore focus to the menu trigger since the element that
            // opens the dialog won't be in the DOM any more when the dialog closes.
            dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
        }
    }
`,na=`  import {Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
    import {
      MatDialog,
      MatDialogRef,
      MatDialogActions,
      MatDialogClose,
      MatDialogTitle,
      MatDialogContent,
      MatDialogModule,
    } from '@angular/material/dialog';

    @Component({
        selector: 'dialog-form-overview',
        templateUrl: 'dialog-form-overview.component.html',
        imports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatButtonModule,
            MatDialogTitle,
            MatDialogContent,
            MatDialogActions,
            MatDialogClose,
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class DialogOverviewExampleDialog {
      readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
      readonly data = inject<DialogData2>(MAT_DIALOG_DATA);
      readonly animal = model(this.data.animal);
    
      onNoClick(): void {
        this.dialogRef.close();
      }
    }

    // 5

    export interface DialogData2 {
      animal: any;
      name: string;
    }

    export class AppDialogComponent {
        // 5
          readonly animal = signal('');
          readonly name = model('');
          readonly dialogEx = inject(MatDialog);
        
          openDialogEx(): void {
            const dialogRef = this.dialogEx.open(DialogOverviewExampleDialog, {
              data: {name: this.name(), animal: this.animal()},
            });
        
            dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
              if (result !== undefined) {
                this.animal.set(result);
              }
            });
          }
    }
`;function so(l,c){l&1&&(t(0,"span"),e(1,"\u2713"),i())}function co(l,c){l&1&&(t(0,"span"),e(1,"\u2713"),i())}function uo(l,c){l&1&&(t(0,"span"),e(1,"\u2713"),i())}var go=["menuTrigger"];function ho(l,c){if(l&1&&(t(0,"span",24),e(1," You chose: "),t(2,"span",25),e(3),i()()),l&2){let p=B();n(3),pe(p.animal())}}var bo=(()=>{class l{constructor(p){this.dialogRef=p}static{this.\u0275fac=function(m){return new(m||l)(ce(Je))}}static{this.\u0275cmp=g({type:l,selectors:[["dialog-overview"]],decls:9,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"f-s-14","lh-16"],["mat-dialog-actions","",1,"p-24","p-t-0"],["mat-flat-button","","mat-dialog-close","",1,"bg-error","text-white"],["mat-flat-button","","mat-dialog-close","","cdkFocusInitial",""]],template:function(m,a){m&1&&(t(0,"h5",0),e(1,"Delete file"),i(),t(2,"div",1),e(3,` Would you like to delete cat.jpeg?
`),i(),t(4,"div",2)(5,"button",3),e(6," No "),i(),t(7,"button",4),e(8,"Ok"),i()())},dependencies:[xe,Ce,Ee,ve,L,N],encapsulation:2})}}return l})(),fo=(()=>{class l{static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["dialog-content"]],decls:46,vars:1,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"f-s-16","f-w-600","m-t-16"],[1,"f-s-14","lh-24"],["align","end"],["mat-flat-button","","mat-dialog-close","",1,"bg-error","text-white"],["mat-flat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(m,a){m&1&&(t(0,"h2",0),e(1,"Install Angular"),i(),t(2,"mat-dialog-content",1)(3,"h3",2),e(4,"Develop across all platforms"),i(),t(5,"p",3),e(6," Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop. "),i(),t(7,"h3",2),e(8,"Speed & Performance"),i(),t(9,"p",3),e(10," Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model. "),i(),t(11,"h3",2),e(12,"Incredible tooling"),i(),t(13,"p",3),e(14," Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work. "),i(),t(15,"h3",2),e(16,"Loved by millions"),i(),t(17,"p",3),e(18," From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications. "),i(),t(19,"h3",2),e(20,"What is Angular?"),i(),t(21,"p",3),e(22," Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop "),i(),t(23,"h3",2),e(24,"Architecture overview"),i(),t(25,"p",3),e(26," Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps. "),i(),t(27,"p",3),e(28," The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules. "),i(),t(29,"p",3),e(30," Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component. "),i(),t(31,"p",3),e(32," Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient. "),i(),t(33,"p",3),e(34," Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them. "),i(),t(35,"p",3),e(36," The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display. "),i(),t(37,"p",3),e(38," The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI). "),i(),t(39,"p",3),e(40," An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities. "),i()(),t(41,"mat-dialog-actions",4)(42,"button",5),e(43,"Cancel"),i(),t(44,"button",6),e(45,"Install"),i()()),m&2&&(n(44),o("mat-dialog-close",!0))},dependencies:[xe,Ce,Ee,ve,L,N],encapsulation:2})}}return l})(),So=(()=>{class l{constructor(p){this.data=p}static{this.\u0275fac=function(m){return new(m||l)(ce(lt))}}static{this.\u0275cmp=g({type:l,selectors:[["dialog-data-example-dialog"]],decls:14,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""]],template:function(m,a){m&1&&(t(0,"h1",0),e(1,"Favorite Animal"),i(),t(2,"div",1),e(3," My favorite animal is: "),t(4,"ul")(5,"li"),Z(6,so,2,0,"span"),e(7," Panda "),i(),t(8,"li"),Z(9,co,2,0,"span"),e(10," Unicorn "),i(),t(11,"li"),Z(12,uo,2,0,"span"),e(13," Lion "),i()()()),m&2&&(n(6),$(a.data.animal==="panda"?6:-1),n(3),$(a.data.animal==="unicorn"?9:-1),n(3),$(a.data.animal==="lion"?12:-1))},dependencies:[Ee,ve,L],encapsulation:2})}}return l})(),vo=(()=>{class l{static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["dialog-menu"]],decls:5,vars:0,consts:[[1,"f-s-14"],["mat-flat-button","","mat-dialog-close",""]],template:function(m,a){m&1&&(t(0,"mat-dialog-content",0),e(1," This is a dialog "),i(),t(2,"mat-dialog-actions")(3,"button",1),e(4,"Okay"),i()())},dependencies:[xe,Ce,ve,L,N],encapsulation:2})}}return l})(),To=(()=>{class l{constructor(){this.dialogRef=ie(Je),this.data=ie(lt),this.animal=rt(this.data.animal)}onNoClick(){this.dialogRef.close()}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["dialog-form-overview"]],inputs:{animal:[1,"animal"]},outputs:{animal:"animalChange"},decls:14,vars:3,consts:[["mat-dialog-title",""],["appearance","outline",1,"w-100"],["matInput","",3,"ngModelChange","ngModel"],["mat-flat-button","",1,"bg-error","text-white",3,"click"],["mat-flat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(m,a){m&1&&(t(0,"h2",0),e(1),i(),t(2,"mat-dialog-content")(3,"p"),e(4,"What's your favorite animal?"),i(),t(5,"mat-form-field",1)(6,"mat-label"),e(7,"Favorite Animal"),i(),t(8,"input",2),I("ngModelChange",function(s){return x(a.animal,s)||(a.animal=s),s}),i()()(),t(9,"mat-dialog-actions")(10,"button",3),u("click",function(){return a.onNoClick()}),e(11," No Thanks "),i(),t(12,"button",4),e(13," Ok "),i()()),m&2&&(n(),D("Hi ",a.data.name),n(7),E("ngModel",a.animal),n(4),o("mat-dialog-close",a.animal()))},dependencies:[R,U,W,z,Q,F,V,k,G,L,N,Ee,ve,xe,Ce],encapsulation:2,changeDetection:0})}}return l})(),oa=(()=>{class l{constructor(p){this.dialog=p,this.codeFordialogAnimations=qi,this.codeFordialogAnimationsTs=ea,this.codeForScrollable=Yi,this.codeForScrollableTs=ta,this.codeForInjecting=Ji,this.codeForInjectingTs=ia,this.codeForMenu=Zi,this.codeForMenuTs=aa,this.codeForOverview=$i,this.codeForOverviewTs=na,this.animal=Me(""),this.name=rt(""),this.dialogEx=ie(Ze)}openDialogEx(){this.dialogEx.open(To,{data:{name:this.name(),animal:this.animal()}}).afterClosed().subscribe(m=>{console.log("The dialog was closed"),m!==void 0&&this.animal.set(m)})}openDialog(p,m){this.dialog.open(bo,{width:"290px",enterAnimationDuration:p,exitAnimationDuration:m})}openHeaderDialog(){this.dialog.open(fo).afterClosed().subscribe(m=>{console.log(`Dialog result: ${m}`)})}openInjectDialog(){this.dialog.open(So,{data:{animal:"panda"}})}openMenuDialog(){this.dialog.open(vo,{restoreFocus:!1}).afterClosed().subscribe(()=>this.menuTrigger.focus())}static{this.\u0275fac=function(m){return new(m||l)(ce(Ze))}}static{this.\u0275cmp=g({type:l,selectors:[["app-dialog"]],viewQuery:function(m,a){if(m&1&&we(go,5),m&2){let d;De(d=Le())&&(a.menuTrigger=d.first)}},inputs:{name:[1,"name"]},outputs:{name:"nameChange"},decls:106,vars:18,consts:[["menuTrigger",""],["menu","matMenu"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-12"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"col-sm-6"],["mat-flat-button","","color","primary",1,"w-100",3,"click"],["mat-flat-button","","color","accent",1,"w-100",3,"click"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"col-lg-6"],["mat-flat-button","","color","primary",1,"w-100",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["appearance","outline",1,"w-100"],["matInput","",3,"ngModelChange","ngModel"],["mat-flat-button","",1,"bg-primary","w-100",3,"click"],[1,"m-t-12","d-block"],[1,"f-w-600"]],template:function(m,a){if(m&1){let d=O();t(0,"mat-card",2)(1,"div",3)(2,"mat-card-title",4),e(3,"Dialog"),i()(),t(4,"mat-card-content",5)(5,"div",6)(6,"div",7)(7,"app-code-view",8)(8,"h4",9),e(9," Animations "),i(),t(10,"div",10)(11,"div",6)(12,"div",11)(13,"button",12),u("click",function(){return b(d),f(a.openDialog("0ms","0ms"))}),e(14," Open Dialog without animation "),i()(),t(15,"div",11)(16,"button",13),u("click",function(){return b(d),f(a.openDialog("3000ms","1500ms"))}),e(17," Open Dialog slowly "),i()()()(),t(18,"div",14)(19,"pre"),e(20,"              "),r(21,"code",15),e(22,`
            `),i()(),t(23,"div",16)(24,"pre"),e(25,"              "),r(26,"code",17),e(27,`
            `),i()()()(),t(28,"div",18)(29,"app-code-view",8)(30,"h4",9),e(31," Scrollable content and actions "),i(),t(32,"div",10)(33,"button",12),u("click",function(){return b(d),f(a.openHeaderDialog())}),e(34," Open Scrollable Dialog "),i()(),t(35,"div",14)(36,"pre"),e(37,"              "),r(38,"code",15),e(39,`
            `),i()(),t(40,"div",16)(41,"pre"),e(42,"              "),r(43,"code",17),e(44,`
            `),i()()()(),t(45,"div",18)(46,"app-code-view",8)(47,"h4",9),e(48," Injecting data on Open "),i(),t(49,"div",10)(50,"button",13),u("click",function(){return b(d),f(a.openInjectDialog())}),e(51," Open dialog "),i()(),t(52,"div",14)(53,"pre"),e(54,"              "),r(55,"code",15),e(56,`
            `),i()(),t(57,"div",16)(58,"pre"),e(59,"              "),r(60,"code",17),e(61,`
            `),i()()()(),t(62,"div",18)(63,"app-code-view",8)(64,"h4",9),e(65," Dialog launched from a menu "),i(),t(66,"div",10)(67,"button",19,0),e(69," Menu "),i(),t(70,"mat-menu",null,1)(72,"button",20),u("click",function(){return b(d),f(a.openMenuDialog())}),e(73," Open dialog "),i()()(),t(74,"div",14)(75,"pre"),e(76,"              "),r(77,"code",15),e(78,`
            `),i()(),t(79,"div",16)(80,"pre"),e(81,"              "),r(82,"code",17),e(83,`
            `),i()()()(),t(84,"div",18)(85,"app-code-view",8)(86,"h4",9),e(87," Dialog Overview "),i(),t(88,"div",10)(89,"mat-form-field",21)(90,"mat-label"),e(91,"What's your name?"),i(),t(92,"input",22),I("ngModelChange",function(h){return b(d),x(a.name,h)||(a.name=h),f(h)}),i()(),t(93,"button",23),u("click",function(){return b(d),f(a.openDialogEx())}),e(94,"Pick one"),i(),Z(95,ho,4,1,"span",24),i(),t(96,"div",14)(97,"pre"),e(98,"              "),r(99,"code",15),e(100,`
            `),i()(),t(101,"div",16)(102,"pre"),e(103,"              "),r(104,"code",17),e(105,`
            `),i()()()()()()()}if(m&2){let d=w(71);n(7),o("isTitle",!0),n(14),o("highlight",a.codeFordialogAnimations),n(5),o("highlightAuto",a.codeFordialogAnimationsTs),n(3),o("isTitle",!0),n(9),o("highlight",a.codeForScrollable),n(5),o("highlightAuto",a.codeForScrollableTs),n(3),o("isTitle",!0),n(9),o("highlight",a.codeForInjecting),n(5),o("highlightAuto",a.codeForInjectingTs),n(3),o("isTitle",!0),n(4),o("matMenuTriggerFor",d),n(10),o("highlight",a.codeForMenu),n(5),o("highlightAuto",a.codeForMenuTs),n(3),o("isTitle",!0),n(7),E("ngModel",a.name),n(3),$(a.animal()?95:-1),n(4),o("highlight",a.codeForOverview),n(5),o("highlightAuto",a.codeForOverviewTs)}},dependencies:[L,N,je,Ue,We,ze,v,y,P,A,Ti,R,U,W,z,Q,F,V,k,G,_,M,C,T],encapsulation:2})}}return l})();var ra=`  <mat-list>
              <mat-list-item>Item 1</mat-list-item>
              <mat-divider></mat-divider>
              <mat-list-item>Item 2</mat-list-item>
              <mat-divider></mat-divider>
              <mat-list-item>Item 3</mat-list-item>
            </mat-list>
`,la=`  <mat-list>
                <mat-list-item>Home</mat-list-item>
                <mat-divider [inset]="true"></mat-divider>
                <mat-list-item>UI</mat-list-item>
                <mat-divider [inset]="true"></mat-divider>
                <mat-list-item>Forms</mat-list-item>
              </mat-list>
`,ma=`  <mat-list class="d-flex">
              <mat-list-item>Home</mat-list-item>
              <mat-divider [vertical]="true"></mat-divider>
              <mat-list-item>UI</mat-list-item>
              <mat-divider [vertical]="true"></mat-divider>
              <mat-list-item>Forms</mat-list-item>
            </mat-list>
`;var et=`  import {Component} from '@angular/core';
    import {MatDividerModule} from '@angular/material/divider';
    import { MatListModule } from '@angular/material/list';

    /**
     * @title Divider overview
     */
    @Component({
        selector: 'app-divider',
        imports: [MatDividerModule, MatListModule, MatCardModule],
        templateUrl: './divider.component.html'
    })
    export class AppDividerComponent {
        
    }
`;var pa=(()=>{class l{constructor(){this.codeForDividerBasic=ra,this.codeForDividerBasicTs=et,this.codeForDividerInset=la,this.codeForDividerInsetTs=et,this.codeForDividerVertical=ma,this.codeForDividerVerticalTs=et}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-divider"]],decls:78,vars:13,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[3,"inset"],[1,"d-flex"],[3,"vertical"]],template:function(m,a){m&1&&(t(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),e(3,"Divider"),i()(),t(4,"mat-card-content",3)(5,"div",4)(6,"div",5)(7,"app-code-view",6)(8,"h4",7),e(9," Basic "),i(),t(10,"div",8)(11,"mat-list")(12,"mat-list-item"),e(13,"Item 1"),i(),r(14,"mat-divider"),t(15,"mat-list-item"),e(16,"Item 2"),i(),r(17,"mat-divider"),t(18,"mat-list-item"),e(19,"Item 3"),i()()(),t(20,"div",9)(21,"pre"),e(22,"              "),r(23,"code",10),e(24,`
            `),i()(),t(25,"div",11)(26,"pre"),e(27,"              "),r(28,"code",12),e(29,`
            `),i()()()(),t(30,"div",5)(31,"app-code-view",6)(32,"h4",7),e(33," Inset "),i(),t(34,"div",8)(35,"mat-list")(36,"mat-list-item"),e(37,"Home"),i(),r(38,"mat-divider",13),t(39,"mat-list-item"),e(40,"UI"),i(),r(41,"mat-divider",13),t(42,"mat-list-item"),e(43,"Forms"),i()()(),t(44,"div",9)(45,"pre"),e(46,"              "),r(47,"code",10),e(48,`
            `),i()(),t(49,"div",11)(50,"pre"),e(51,"              "),r(52,"code",12),e(53,`
            `),i()()()(),t(54,"div",5)(55,"app-code-view",6)(56,"h4",7),e(57," Vertical "),i(),t(58,"div",8)(59,"mat-list",14)(60,"mat-list-item"),e(61,"Home"),i(),r(62,"mat-divider",15),t(63,"mat-list-item"),e(64,"UI"),i(),r(65,"mat-divider",15),t(66,"mat-list-item"),e(67,"Forms"),i()()(),t(68,"div",9)(69,"pre"),e(70,"              "),r(71,"code",10),e(72,`
            `),i()(),t(73,"div",11)(74,"pre"),e(75,"              "),r(76,"code",12),e(77,`
            `),i()()()()()()()),m&2&&(n(7),o("isTitle",!0),n(16),o("highlight",a.codeForDividerBasic),n(5),o("highlightAuto",a.codeForDividerBasicTs),n(3),o("isTitle",!0),n(7),o("inset",!0),n(3),o("inset",!0),n(6),o("highlight",a.codeForDividerInset),n(5),o("highlightAuto",a.codeForDividerInsetTs),n(3),o("isTitle",!0),n(7),o("vertical",!0),n(3),o("vertical",!0),n(6),o("highlight",a.codeForDividerVertical),n(5),o("highlightAuto",a.codeForDividerVerticalTs))},dependencies:[Ot,Ke,Ye,Qe,qe,v,y,P,A,_,M,C,T],encapsulation:2})}}return l})();var sa=`  import {Component} from '@angular/core';
    import { MatExpansionModule } from '@angular/material/expansion';

    /**
     * @title Expansion overview
     */
    @Component({
        selector: 'app-expansion',
            providers: [provideNativeDateAdapter()],
            imports: [
                MatExpansionModule,
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: './expansion.component.html'
    })
    export class AppExpansionComponent {
        // basic
        panelOpenState = false;
    }
`,da=`  import {Component} from '@angular/core';
    import { MatExpansionModule } from '@angular/material/expansion';

    /**
     * @title Expansion overview
     */
    @Component({
        selector: 'app-expansion',
            providers: [provideNativeDateAdapter()],
            imports: [
                MatExpansionModule,
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: './expansion.component.html'
    })
    export class AppExpansionComponent {
        // expand all
        @ViewChild(MatAccordion) accordion: MatAccordion;
        constructor() {}
    }
`,ca=`  import {Component} from '@angular/core';
    import { MatExpansionModule } from '@angular/material/expansion';

    /**
     * @title Expansion overview
     */
    @Component({
        selector: 'app-expansion',
            providers: [provideNativeDateAdapter()],
            imports: [
                MatExpansionModule,
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: './expansion.component.html'
    })
    export class AppExpansionComponent {
        // accordian
        step = 0;

        setStep(index: number) {
            this.step = index;
        }

        nextStep() {
            this.step++;
        }

        prevStep() {
            this.step--;
        }
    }
`;var ua=`  <mat-accordion>
            <mat-expansion-panel hideToggle class="cardWithShadow">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600 f-s-14">
                  This is the expansion title
                </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  This is a summary of the content
                </mat-panel-description>
              </mat-expansion-panel-header>
              <p>This is the primary content of the panel.</p>
            </mat-expansion-panel>
            <mat-expansion-panel class="cardWithShadow" (opened)="panelOpenState = true"
              (closed)="panelOpenState = false">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600 f-s-14">
                  Self aware panel
                </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  Currently I am {{panelOpenState ? 'open' : 'closed'}}
                </mat-panel-description>
              </mat-expansion-panel-header>
              <p>I'm visible because I am open</p>
            </mat-expansion-panel>
          </mat-accordion>
`,ga=`  <div class="d-flex align-items-center m-b-16">
            <button mat-flat-button color="primary" (click)="accordion.openAll()">
              Expand All
            </button>
            <button mat-stroked-button color="primary" (click)="accordion.closeAll()" class="m-l-8">
              Collapse All
            </button>
          </div>
          <mat-accordion multi>
            <!-- step 1 -->
            <mat-expansion-panel class="cardWithShadow">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600"> Personal data </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  Type your name and age
                  <mat-icon class="m-l-auto m-r-8">
                    <i-tabler name="user-circle" class="icon-20"></i-tabler>
                  </mat-icon>
                </mat-panel-description>
              </mat-expansion-panel-header>
  
              <div class="row">
                <div class="col-lg-6 col-sm-6">
                  <mat-form-field appearance="outline" color="primary" class="w-100">
                    <mat-label>First name</mat-label>
                    <input matInput />
                  </mat-form-field>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <mat-form-field appearance="outline" color="primary" class="w-100">
                    <mat-label>Age</mat-label>
                    <input matInput type="number" min="1" />
                  </mat-form-field>
                </div>
              </div>
            </mat-expansion-panel>
  
            <!-- step 2 -->
            <mat-expansion-panel disabled class="cardWithShadow">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600"> Destination </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  Type the country name
                  <mat-icon class="m-l-auto m-r-8">
                    <i-tabler name="current-location" class="icon-20"></i-tabler>
                  </mat-icon>
                </mat-panel-description>
              </mat-expansion-panel-header>
  
              <mat-form-field appearance="outline" color="primary">
                <mat-label>Country</mat-label>
                <input matInput />
              </mat-form-field>
            </mat-expansion-panel>
  
            <!-- step 3 -->
            <mat-expansion-panel class="cardWithShadow">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600">
                  Day of the trip
                </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  Inform the date you wish to travel
                  <mat-icon class="m-l-auto m-r-8">
                    <i-tabler name="calendar-due" class="icon-20"></i-tabler>
                  </mat-icon>
                </mat-panel-description>
              </mat-expansion-panel-header>
  
              <div class="row">
                <div class="col-lg-6 col-sm-6">
                  <mat-form-field appearance="outline" color="primary" class="w-100">
                    <mat-label>Date of Trip</mat-label>
                    <input matInput />
                  </mat-form-field>
                </div>
              </div>
            </mat-expansion-panel>
          </mat-accordion>
`,ha=`  <mat-accordion>
            <mat-expansion-panel hideToggle class="cardWithShadow">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600 f-s-14">
                  This is the expansion title
                </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  This is a summary of the content
                </mat-panel-description>
              </mat-expansion-panel-header>
              <p>This is the primary content of the panel.</p>
            </mat-expansion-panel>
            <mat-expansion-panel class="cardWithShadow" (opened)="panelOpenState = true"
              (closed)="panelOpenState = false">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600 f-s-14">
                  Self aware panel
                </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  Currently I am {{panelOpenState ? 'open' : 'closed'}}
                </mat-panel-description>
              </mat-expansion-panel-header>
              <p>I'm visible because I am open</p>
            </mat-expansion-panel>
          </mat-accordion>
`;var ba=(()=>{class l{constructor(){this.panelOpenState=!1,this.step=0,this.codeForBasicExpansion=ua,this.codeForBasicExpansionTs=sa,this.codeForExpandExpansion=ga,this.codeForExpandExpansionTs=da,this.codeForAccordianExpansion=ha,this.codeForAccordianExpansionTs=ca}setStep(p){this.step=p}nextStep(){this.step++}prevStep(){this.step--}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-expansion"]],viewQuery:function(m,a){if(m&1&&we(Xe,5),m&2){let d;De(d=Le())&&(a.accordion=d.first)}},features:[gt([vi()])],decls:174,vars:13,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["hideToggle","",1,"cardWithShadow"],[1,"f-w-600","f-s-14"],[1,"f-s-14"],[1,"cardWithShadow",3,"opened","closed"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"d-flex","align-items-center","m-b-16"],["mat-flat-button","","color","primary",3,"click"],["mat-stroked-button","","color","primary",1,"m-l-8",3,"click"],["multi",""],[1,"cardWithShadow"],[1,"f-w-600"],[1,"m-l-auto","m-r-8"],["name","user-circle",1,"icon-20"],[1,"row"],[1,"col-lg-6","col-sm-6"],["appearance","outline","color","primary",1,"w-100"],["matInput",""],["matInput","","type","number","min","1"],["disabled","",1,"cardWithShadow"],["name","current-location",1,"icon-20"],["appearance","outline","color","primary"],["name","calendar-due",1,"icon-20"],["hideToggle","",1,"cardWithShadow",3,"opened","expanded"],["mat-flat-button","","color","warn",3,"click"]],template:function(m,a){m&1&&(t(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),e(3,"Expansion Panel"),i()(),t(4,"mat-card-content",3)(5,"app-code-view",4)(6,"h4",5),e(7," Basic "),i(),t(8,"div",6)(9,"mat-accordion")(10,"mat-expansion-panel",7)(11,"mat-expansion-panel-header")(12,"mat-panel-title",8),e(13," This is the expansion title "),i(),t(14,"mat-panel-description",9),e(15," This is a summary of the content "),i()(),t(16,"p"),e(17,"This is the primary content of the panel."),i()(),t(18,"mat-expansion-panel",10),u("opened",function(){return a.panelOpenState=!0})("closed",function(){return a.panelOpenState=!1}),t(19,"mat-expansion-panel-header")(20,"mat-panel-title",8),e(21," Self aware panel "),i(),t(22,"mat-panel-description",9),e(23),i()(),t(24,"p"),e(25,"I'm visible because I am open"),i()()()(),t(26,"div",11)(27,"pre"),e(28,"          "),r(29,"code",12),e(30,`
        `),i()(),t(31,"div",13)(32,"pre"),e(33,"          "),r(34,"code",14),e(35,`
        `),i()()(),t(36,"app-code-view",4)(37,"h4",5),e(38," Expand/collapse all toggles "),i(),t(39,"div",6)(40,"div",15)(41,"button",16),u("click",function(){return a.accordion.openAll()}),e(42," Expand All "),i(),t(43,"button",17),u("click",function(){return a.accordion.closeAll()}),e(44," Collapse All "),i()(),t(45,"mat-accordion",18)(46,"mat-expansion-panel",19)(47,"mat-expansion-panel-header")(48,"mat-panel-title",20),e(49," Personal data "),i(),t(50,"mat-panel-description",9),e(51," Type your name and age "),t(52,"mat-icon",21),r(53,"i-tabler",22),i()()(),t(54,"div",23)(55,"div",24)(56,"mat-form-field",25)(57,"mat-label"),e(58,"First name"),i(),r(59,"input",26),i()(),t(60,"div",24)(61,"mat-form-field",25)(62,"mat-label"),e(63,"Age"),i(),r(64,"input",27),i()()()(),t(65,"mat-expansion-panel",28)(66,"mat-expansion-panel-header")(67,"mat-panel-title",20),e(68," Destination "),i(),t(69,"mat-panel-description",9),e(70," Type the country name "),t(71,"mat-icon",21),r(72,"i-tabler",29),i()()(),t(73,"mat-form-field",30)(74,"mat-label"),e(75,"Country"),i(),r(76,"input",26),i()(),t(77,"mat-expansion-panel",19)(78,"mat-expansion-panel-header")(79,"mat-panel-title",20),e(80," Day of the trip "),i(),t(81,"mat-panel-description",9),e(82," Inform the date you wish to travel "),t(83,"mat-icon",21),r(84,"i-tabler",31),i()()(),t(85,"div",23)(86,"div",24)(87,"mat-form-field",25)(88,"mat-label"),e(89,"Date of Trip"),i(),r(90,"input",26),i()()()()()(),t(91,"div",11)(92,"pre"),e(93,"          "),r(94,"code",12),e(95,`
        `),i()(),t(96,"div",13)(97,"pre"),e(98,"          "),r(99,"code",14),e(100,`
        `),i()()(),t(101,"app-code-view",4)(102,"h4",5),e(103," Accordian "),i(),t(104,"div",6)(105,"mat-accordion")(106,"mat-expansion-panel",32),u("opened",function(){return a.setStep(0)}),t(107,"mat-expansion-panel-header")(108,"mat-panel-title",20),e(109," Personal data "),i(),t(110,"mat-panel-description",9),e(111," Type your name and age "),t(112,"mat-icon",21),r(113,"i-tabler",22),i()()(),t(114,"div",23)(115,"div",24)(116,"mat-form-field",25)(117,"mat-label"),e(118,"First name"),i(),r(119,"input",26),i()(),t(120,"div",24)(121,"mat-form-field",25)(122,"mat-label"),e(123,"Age"),i(),r(124,"input",27),i()()(),t(125,"mat-action-row")(126,"button",16),u("click",function(){return a.nextStep()}),e(127," Next "),i()()(),t(128,"mat-expansion-panel",32),u("opened",function(){return a.setStep(1)}),t(129,"mat-expansion-panel-header")(130,"mat-panel-title",20),e(131," Destination "),i(),t(132,"mat-panel-description",9),e(133," Type the country name "),t(134,"mat-icon",21),r(135,"i-tabler",29),i()()(),t(136,"mat-form-field",25)(137,"mat-label"),e(138,"Country"),i(),r(139,"input",26),i(),t(140,"mat-action-row")(141,"button",33),u("click",function(){return a.prevStep()}),e(142," Previous "),i(),t(143,"button",16),u("click",function(){return a.nextStep()}),e(144," Next "),i()()(),t(145,"mat-expansion-panel",32),u("opened",function(){return a.setStep(2)}),t(146,"mat-expansion-panel-header")(147,"mat-panel-title",20),e(148," Day of the trip "),i(),t(149,"mat-panel-description",9),e(150," Inform the date you wish to travel "),t(151,"mat-icon",21),r(152,"i-tabler",31),i()()(),t(153,"div",23)(154,"div",24)(155,"mat-form-field",25)(156,"mat-label"),e(157,"Date of Trip"),i(),r(158,"input",26),i()()(),t(159,"mat-action-row")(160,"button",33),u("click",function(){return a.prevStep()}),e(161," Previous "),i(),t(162,"button",16),u("click",function(){return a.nextStep()}),e(163," End "),i()()()()(),t(164,"div",11)(165,"pre"),e(166,"          "),r(167,"code",12),e(168,`
        `),i()(),t(169,"div",13)(170,"pre"),e(171,"          "),r(172,"code",14),e(173,`
        `),i()()()()()),m&2&&(n(5),o("isTitle",!0),n(18),D(" Currently I am ",a.panelOpenState?"open":"closed"," "),n(6),o("highlight",a.codeForBasicExpansion),n(5),o("highlightAuto",a.codeForBasicExpansionTs),n(2),o("isTitle",!0),n(58),o("highlight",a.codeForExpandExpansion),n(5),o("highlightAuto",a.codeForExpandExpansionTs),n(2),o("isTitle",!0),n(5),o("expanded",a.step===0),n(22),o("expanded",a.step===1),n(17),o("expanded",a.step===2),n(22),o("highlight",a.codeForAccordianExpansion),n(5),o("highlightAuto",a.codeForAccordianExpansionTs))},dependencies:[L,N,Ut,Xe,Rt,Ht,Vt,Wt,Gt,X,K,R,U,W,z,Q,wt,ee,le,v,y,P,A,Se,_,M,C,T],encapsulation:2,changeDetection:0})}}return l})();var fa=`  <mat-list role="list">
                <mat-list-item role="listitem">Item 1</mat-list-item>
                <mat-list-item role="listitem">Item 2</mat-list-item>
                <mat-list-item role="listitem">Item 3</mat-list-item>
              </mat-list>
`,Sa=`  <mat-list>
                <mat-list-item>
                  <span matListItemTitle class="f-s-16 f-w-600">Title</span>
                  <span matListItemLine class="f-s-14">Second line</span>
                </mat-list-item>
                <mat-list-item>
                  <span matListItemTitle class="f-s-16 f-w-600">Title</span>
                  <span matListItemLine class="f-s-14">Second line</span>
                </mat-list-item>
              </mat-list>
`,va=`  <mat-list>
                <mat-list-item>
                  <span matListItemTitle class="f-s-16 f-w-600">Title</span>
                  <span matListItemLine class="f-s-14">Second line</span>
                  <span matListItemLine class="f-s-14">Third line</span>
                </mat-list-item>
                <mat-list-item>
                  <span matListItemTitle class="f-s-16 f-w-600">Title</span>
                  <span matListItemLine class="f-s-14"
                    >Second line. This line will truncate.</span
                  >
                  <span class="f-s-14">Third line</span>
                </mat-list-item>
              </mat-list>
`,Ta=`  <mat-list style="max-width: 500px">
              <mat-list-item lines="3">
                <span matListItemTitle class="f-s-16 f-w-600">Title</span>
                <span class="f-s-14"
                  >Secondary line that will wrap because the list lines is
                  explicitly set to 3 lines. Text inside of a 'matListItemTitle'
                  or 'matListItemLine' will never wrap.
                </span>
              </mat-list-item>
              <mat-list-item lines="3" class="f-s-14">
                <span matListItemTitle class="f-s-16 f-w-600">Title</span>
                <span class="f-s-14"
                  >Secondary line that will wrap because the list lines is
                  explicitly set to 3 lines. Text inside of a 'matListItemTitle'
                  or 'matListItemLine' will never wrap.
                </span>
              </mat-list-item>
            </mat-list>
`,_a=`  <mat-selection-list #shoes>
                @for(shoe of typesOfShoes; track shoe) {
                <mat-list-option>
                  {{ shoe }}
                </mat-list-option>
                }
              </mat-selection-list>
  
              <p class="f-s-14 f-w-600 p-16 bg-light-primary rounded">
                Options selected: {{ shoes.selectedOptions.selected.length }}
              </p>
`,Ma=`  <mat-selection-list #shoes2 [multiple]="false">
                @for(shoe of typesOfShoes; track shoe) {
                <mat-list-option [value]="shoe">
                  {{ shoe }}
                </mat-list-option>
                }
              </mat-selection-list>
  
              <p class="f-s-14 f-w-600 p-16 bg-light-primary rounded">
                Option selected:
                {{
                  shoes2.selectedOptions.hasValue()
                    ? shoes2.selectedOptions.selected[0].value
                    : "None"
                }}
              </p>
`,Ca=`  <mat-list>
                <div mat-subheader class="f-s-16 m-b-16 f-w-600">Folders</div>
                @for(folder of folders; track folder.name) {
                <mat-list-item>
                  <mat-icon matListItemIcon>folder</mat-icon>
                  <div matListItemTitle class="f-s-16 f-w-600">
                    {{ folder.name }}
                  </div>
                  <div matListItemLine class="f-s-14">
                    {{ folder.updated | date }}
                  </div>
                </mat-list-item>
                }
  
                <mat-divider></mat-divider>
                <div mat-subheader class="f-s-16 m-y-16 f-w-600">Notes</div>
                @for(note of notes; track note.name) {
                <mat-list-item>
                  <mat-icon matListItemIcon>note</mat-icon>
                  <div matListItemTitle class="f-s-16 f-w-600">
                    {{ note.name }}
                  </div>
                  <div matListItemLine class="f-s-14">
                    {{ note.updated | date }}
                  </div>
                </mat-list-item>
                }
              </mat-list>
`;var ye=`  import {Component} from '@angular/core';
    import { MatListModule } from '@angular/material/list';

    /**
     * @title List overview
     */
    @Component({
        selector: 'app-lists',
        imports: [MatListModule],
        templateUrl: './lists.component.html'
    })
    export class AppListsComponent {
        
    }
`,tt=`  import {Component} from '@angular/core';
    import { MatListModule } from '@angular/material/list';
    import { MaterialModule } from 'src/app/material.module';
    import {DatePipe} from '@angular/common';

    /**
     * @title List overview
     */
    @Component({
        selector: 'app-lists',
        imports: [MatListModule, MaterialModule, DatePipe],
        templateUrl: './lists.component.html'
    })
    export class AppListsComponent {
        typesOfShoes: string[] = ['Loafers', 'Sneakers'];
    }
`;var Ea=(l,c)=>c.name;function Co(l,c){if(l&1&&(t(0,"mat-list-option"),e(1),i()),l&2){let p=c.$implicit;n(),D(" ",p," ")}}function Eo(l,c){if(l&1&&(t(0,"mat-list-option",25),e(1),i()),l&2){let p=c.$implicit;o("value",p),n(),D(" ",p," ")}}function xo(l,c){if(l&1&&(t(0,"mat-list-item")(1,"mat-icon",29),e(2,"folder"),i(),t(3,"div",17),e(4),i(),t(5,"div",18),e(6),se(7,"date"),i()()),l&2){let p=c.$implicit;n(4),D(" ",p.name," "),n(2),D(" ",ot(7,2,p.updated)," ")}}function Io(l,c){if(l&1&&(t(0,"mat-list-item")(1,"mat-icon",29),e(2,"note"),i(),t(3,"div",17),e(4),i(),t(5,"div",18),e(6),se(7,"date"),i()()),l&2){let p=c.$implicit;n(4),D(" ",p.name," "),n(2),D(" ",ot(7,2,p.updated)," ")}}var xa=(()=>{class l{constructor(){this.codeForBasicList=fa,this.codeForBasicListTs=ye,this.codeForTwolineList=Sa,this.codeForTwolineListTs=ye,this.codeForThreelineList=va,this.codeForThreelineListTs=ye,this.codeForThreelineTextWrappingList=Ta,this.codeForThreelineTextWrappingListTs=ye,this.codeForSelectionList=_a,this.codeForSelectionListTs=tt,this.codeForSingleSelectionList=Ma,this.codeForSingleSelectionListTs=tt,this.codeForSectionsList=Ca,this.codeForSectionsListTs=tt,this.typesOfShoes=["Loafers","Sneakers"],this.folders=[{name:"Photos",updated:new Date("1/1/16")},{name:"Recipes",updated:new Date("1/17/16")},{name:"Work",updated:new Date("1/28/16")}],this.notes=[{name:"Vacation Itinerary",updated:new Date("2/20/16")},{name:"Kitchen Remodel",updated:new Date("1/18/16")}]}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-lists"]],decls:177,vars:24,consts:[["shoes",""],["shoes2",""],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["role","list"],["role","listitem"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matListItemTitle","",1,"f-s-16","f-w-600"],["matListItemLine","",1,"f-s-14"],[1,"f-s-14"],[2,"max-width","500px"],["lines","3"],["lines","3",1,"f-s-14"],[1,"f-s-14","f-w-600","p-16","bg-light-primary","rounded"],[3,"multiple"],[3,"value"],[1,"col-12"],["mat-subheader","",1,"f-s-16","m-b-16","f-w-600"],["mat-subheader","",1,"f-s-16","m-y-16","f-w-600"],["matListItemIcon",""]],template:function(m,a){if(m&1&&(t(0,"mat-card",2)(1,"div",3)(2,"mat-card-title",4),e(3,"Lists"),i()(),t(4,"mat-card-content",5)(5,"div",6)(6,"div",7)(7,"app-code-view",8)(8,"h4",9),e(9," Basic "),i(),t(10,"div",10)(11,"mat-list",11)(12,"mat-list-item",12),e(13,"Item 1"),i(),t(14,"mat-list-item",12),e(15,"Item 2"),i(),t(16,"mat-list-item",12),e(17,"Item 3"),i()()(),t(18,"div",13)(19,"pre"),e(20,"              "),r(21,"code",14),e(22,`
            `),i()(),t(23,"div",15)(24,"pre"),e(25,"              "),r(26,"code",16),e(27,`
            `),i()()()(),t(28,"div",7)(29,"app-code-view",8)(30,"h4",9),e(31," Two Line "),i(),t(32,"div",10)(33,"mat-list")(34,"mat-list-item")(35,"span",17),e(36,"Title"),i(),t(37,"span",18),e(38,"Second line"),i()(),t(39,"mat-list-item")(40,"span",17),e(41,"Title"),i(),t(42,"span",18),e(43,"Second line"),i()()()(),t(44,"div",13)(45,"pre"),e(46,"              "),r(47,"code",14),e(48,`
            `),i()(),t(49,"div",15)(50,"pre"),e(51,"              "),r(52,"code",16),e(53,`
            `),i()()()(),t(54,"div",7)(55,"app-code-view",8)(56,"h4",9),e(57," Three Line "),i(),t(58,"div",10)(59,"mat-list")(60,"mat-list-item")(61,"span",17),e(62,"Title"),i(),t(63,"span",18),e(64,"Second line"),i(),t(65,"span",18),e(66,"Third line"),i()(),t(67,"mat-list-item")(68,"span",17),e(69,"Title"),i(),t(70,"span",18),e(71,"Second line. This line will truncate."),i(),t(72,"span",19),e(73,"Third line"),i()()()(),t(74,"div",13)(75,"pre"),e(76,"              "),r(77,"code",14),e(78,`
            `),i()(),t(79,"div",15)(80,"pre"),e(81,"              "),r(82,"code",16),e(83,`
            `),i()()()(),t(84,"div",7)(85,"app-code-view",8)(86,"h4",9),e(87," Three Line with Text wrapping "),i(),t(88,"div",10)(89,"mat-list",20)(90,"mat-list-item",21)(91,"span",17),e(92,"Title"),i(),t(93,"span",19),e(94,"Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text inside of a `matListItemTitle` or `matListItemLine` will never wrap. "),i()(),t(95,"mat-list-item",22)(96,"span",17),e(97,"Title"),i(),t(98,"span",19),e(99,"Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text inside of a `matListItemTitle` or `matListItemLine` will never wrap. "),i()()()(),t(100,"div",13)(101,"pre"),e(102,"              "),r(103,"code",14),e(104,`
            `),i()(),t(105,"div",15)(106,"pre"),e(107,"              "),r(108,"code",16),e(109,`
            `),i()()()(),t(110,"div",7)(111,"app-code-view",8)(112,"h4",9),e(113," List with Selection "),i(),t(114,"div",10)(115,"mat-selection-list",null,0),q(117,Co,2,1,"mat-list-option",null,ae),i(),t(119,"p",23),e(120),i()(),t(121,"div",13)(122,"pre"),e(123,"              "),r(124,"code",14),e(125,`
            `),i()(),t(126,"div",15)(127,"pre"),e(128,"              "),r(129,"code",16),e(130,`
            `),i()()()(),t(131,"div",7)(132,"app-code-view",8)(133,"h4",9),e(134," List with single Selection "),i(),t(135,"div",10)(136,"mat-selection-list",24,1),q(138,Eo,2,2,"mat-list-option",25,ae),i(),t(140,"p",23),e(141),i()(),t(142,"div",13)(143,"pre"),e(144,"              "),r(145,"code",14),e(146,`
            `),i()(),t(147,"div",15)(148,"pre"),e(149,"              "),r(150,"code",16),e(151,`
            `),i()()()(),t(152,"div",26)(153,"app-code-view",8)(154,"h4",9),e(155," List with sections "),i(),t(156,"div",10)(157,"mat-list")(158,"div",27),e(159,"Folders"),i(),q(160,xo,8,4,"mat-list-item",null,Ea),r(162,"mat-divider"),t(163,"div",28),e(164,"Notes"),i(),q(165,Io,8,4,"mat-list-item",null,Ea),i()(),t(167,"div",13)(168,"pre"),e(169,"              "),r(170,"code",14),e(171,`
            `),i()(),t(172,"div",15)(173,"pre"),e(174,"              "),r(175,"code",16),e(176,`
            `),i()()()()()()()),m&2){let d=w(116),s=w(137);n(7),o("isTitle",!0),n(14),o("highlight",a.codeForBasicList),n(5),o("highlightAuto",a.codeForBasicListTs),n(3),o("isTitle",!0),n(18),o("highlight",a.codeForTwolineList),n(5),o("highlightAuto",a.codeForTwolineListTs),n(3),o("isTitle",!0),n(22),o("highlight",a.codeForThreelineList),n(5),o("highlightAuto",a.codeForThreelineListTs),n(3),o("isTitle",!0),n(18),o("highlight",a.codeForThreelineList),n(5),o("highlightAuto",a.codeForThreelineListTs),n(3),o("isTitle",!0),n(6),Y(a.typesOfShoes),n(3),D(" Options selected: ",d.selectedOptions.selected.length," "),n(4),o("highlight",a.codeForSelectionList),n(5),o("highlightAuto",a.codeForSelectionListTs),n(3),o("isTitle",!0),n(4),o("multiple",!1),n(2),Y(a.typesOfShoes),n(3),D(" Option selected: ",s.selectedOptions.hasValue()?s.selectedOptions.selected[0].value:"None"," "),n(4),o("highlight",a.codeForSingleSelectionList),n(5),o("highlightAuto",a.codeForSingleSelectionListTs),n(3),o("isTitle",!0),n(7),Y(a.folders),n(5),Y(a.notes),n(5),o("highlight",a.codeForSectionsList),n(5),o("highlightAuto",a.codeForSectionsListTs)}},dependencies:[Ye,Qe,qt,qe,Xt,Kt,Qt,Ke,jt,zt,v,y,P,A,X,K,xi,_,M,C,T,Fe],encapsulation:2})}}return l})();var Ia=`  <button mat-flat-button color="primary" class="m-t-8" [matMenuTriggerFor]="menu">
              Menu
            </button>
            <mat-menu #menu="matMenu" class="cardWithShadow">
              <button mat-menu-item>Item 1</button>
              <button mat-menu-item>Item 2</button>
            </mat-menu>
`,ya=`  <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
                <mat-icon>
                  <i-tabler name="dots" class="icon-20"></i-tabler>
                </mat-icon>
              </button>
              <mat-menu #menu="matMenu" class="cardWithShadow">
                <button mat-menu-item>
                  <mat-icon>dialpad</mat-icon>
                  <span>Redial</span>
                </button>
                <button mat-menu-item disabled>
                  <mat-icon>voicemail</mat-icon>
                  <span>Check voice mail</span>
                </button>
                <button mat-menu-item>
                  <mat-icon>notifications_off</mat-icon>
                  <span>Disable alerts</span>
                </button>
              </mat-menu>
`,Aa=`  <button mat-flat-button color="primary" [matMenuTriggerFor]="animals" class="m-t-8">
                Animal index
              </button>
              <mat-menu class="cardWithShadow" #animals="matMenu">
                <button mat-menu-item [matMenuTriggerFor]="vertebrates">
                  Vertebrates
                </button>
                <button mat-menu-item [matMenuTriggerFor]="invertebrates">
                  Invertebrates
                </button>
              </mat-menu>
  
              <mat-menu class="cardWithShadow" #vertebrates="matMenu">
                <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
                <button mat-menu-item [matMenuTriggerFor]="amphibians">
                  Amphibians
                </button>
                <button mat-menu-item [matMenuTriggerFor]="reptiles">
                  Reptiles
                </button>
                <button mat-menu-item>Birds</button>
                <button mat-menu-item>Mammals</button>
              </mat-menu>
  
              <mat-menu class="cardWithShadow" #invertebrates="matMenu">
                <button mat-menu-item>Insects</button>
                <button mat-menu-item>Molluscs</button>
                <button mat-menu-item>Crustaceans</button>
                <button mat-menu-item>Corals</button>
                <button mat-menu-item>Arachnids</button>
                <button mat-menu-item>Velvet worms</button>
                <button mat-menu-item>Horseshoe crabs</button>
              </mat-menu>
  
              <mat-menu class="cardWithShadow" #fish="matMenu">
                <button mat-menu-item>Baikal oilfish</button>
                <button mat-menu-item>Bala shark</button>
                <button mat-menu-item>Ballan wrasse</button>
                <button mat-menu-item>Bamboo shark</button>
                <button mat-menu-item>Banded killifish</button>
              </mat-menu>
  
              <mat-menu class="cardWithShadow" #amphibians="matMenu">
                <button mat-menu-item>Sonoran desert toad</button>
                <button mat-menu-item>Western toad</button>
                <button mat-menu-item>Arroyo toad</button>
                <button mat-menu-item>Yosemite toad</button>
              </mat-menu>
  
              <mat-menu class="cardWithShadow" #reptiles="matMenu">
                <button mat-menu-item>Banded Day Gecko</button>
                <button mat-menu-item>Banded Gila Monster</button>
                <button mat-menu-item>Black Tree Monitor</button>
                <button mat-menu-item>Blue Spiny Lizard</button>
                <button mat-menu-item disabled>Velociraptor</button>
              </mat-menu>
`,Pa=`  <div class="row">
                <div class="col-sm-3">
                  <button mat-flat-button color="primary" class="w-100" [matMenuTriggerFor]="aboveMenu">
                    Above
                  </button>
                  <mat-menu class="cardWithShadow" #aboveMenu="matMenu" yPosition="above">
                    <button mat-menu-item>Item 1</button>
                    <button mat-menu-item>Item 2</button>
                  </mat-menu>
                </div>
                <div class="col-sm-3">
                  <button mat-flat-button color="accent" class="w-100" [matMenuTriggerFor]="belowMenu">
                    Below
                  </button>
                  <mat-menu class="cardWithShadow" #belowMenu="matMenu" yPosition="below">
                    <button mat-menu-item>Item 1</button>
                    <button mat-menu-item>Item 2</button>
                  </mat-menu>
                </div>
                <div class="col-sm-3">
                  <button mat-flat-button color="warn" class="w-100" [matMenuTriggerFor]="beforeMenu">
                    Before
                  </button>
                  <mat-menu class="cardWithShadow" #beforeMenu="matMenu" xPosition="before">
                    <button mat-menu-item>Item 1</button>
                    <button mat-menu-item>Item 2</button>
                  </mat-menu>
                </div>
                <div class="col-sm-3">
                  <button mat-flat-button color="primary" class="w-100" [matMenuTriggerFor]="afterMenu">
                    After
                  </button>
                  <mat-menu class="cardWithShadow" #afterMenu="matMenu" xPosition="after">
                    <button mat-menu-item>Item 1</button>
                    <button mat-menu-item>Item 2</button>
                  </mat-menu>
                </div>
              </div>
`;var Ae=`  import {Component} from '@angular/core';
    import { MatButtonModule } from '@angular/material/button';
    import { MatIconModule } from '@angular/material/icon';
    import { MatMenuModule } from '@angular/material/menu';

    /**
     * @title Divider menu
     */
    @Component({
        selector: 'app-menu',
        imports: [ MatMenuModule, MatIconModule, MatButtonModule],
        templateUrl: './menu.component.html'
    })
    export class AppMenuComponent {
        constructor() {}
    }
`;var wa=(()=>{class l{constructor(){this.codeForMenuBasic=Ia,this.codeForMenuBasicTs=Ae,this.codeForMenuIcons=ya,this.codeForMenuIconsTs=Ae,this.codeForMenuNested=Aa,this.codeForMenuNestedTs=Ae,this.codeForMenuPositions=Pa,this.codeForMenuPositionsTs=Ae}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-menu"]],decls:201,vars:24,consts:[["menu","matMenu"],["animals","matMenu"],["vertebrates","matMenu"],["invertebrates","matMenu"],["fish","matMenu"],["amphibians","matMenu"],["reptiles","matMenu"],["aboveMenu","matMenu"],["belowMenu","matMenu"],["beforeMenu","matMenu"],["afterMenu","matMenu"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["mat-flat-button","","color","primary",1,"m-t-8",3,"matMenuTriggerFor"],[1,"cardWithShadow"],["mat-menu-item",""],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["name","dots",1,"icon-20"],["mat-menu-item","","disabled",""],["mat-menu-item","",3,"matMenuTriggerFor"],[1,"col-12"],[1,"col-sm-3"],["mat-flat-button","","color","primary",1,"w-100",3,"matMenuTriggerFor"],["yPosition","above",1,"cardWithShadow"],["mat-flat-button","","color","accent",1,"w-100",3,"matMenuTriggerFor"],["yPosition","below",1,"cardWithShadow"],["mat-flat-button","","color","warn",1,"w-100",3,"matMenuTriggerFor"],["xPosition","before",1,"cardWithShadow"],["xPosition","after",1,"cardWithShadow"]],template:function(m,a){if(m&1&&(t(0,"mat-card",11)(1,"div",12)(2,"mat-card-title",13),e(3,"Menu"),i()(),t(4,"mat-card-content",14)(5,"div",15)(6,"div",16)(7,"app-code-view",17)(8,"h4",18),e(9," Basic "),i(),t(10,"div",19)(11,"button",20),e(12," Menu "),i(),t(13,"mat-menu",21,0)(15,"button",22),e(16,"Item 1"),i(),t(17,"button",22),e(18,"Item 2"),i()()(),t(19,"div",23)(20,"pre"),e(21,"              "),r(22,"code",24),e(23,`
            `),i()(),t(24,"div",25)(25,"pre"),e(26,"              "),r(27,"code",26),e(28,`
            `),i()()()(),t(29,"div",16)(30,"app-code-view",17)(31,"h4",18),e(32," with Icons "),i(),t(33,"div",19)(34,"button",27)(35,"mat-icon"),r(36,"i-tabler",28),i()(),t(37,"mat-menu",21,0)(39,"button",22)(40,"mat-icon"),e(41,"dialpad"),i(),t(42,"span"),e(43,"Redial"),i()(),t(44,"button",29)(45,"mat-icon"),e(46,"voicemail"),i(),t(47,"span"),e(48,"Check voice mail"),i()(),t(49,"button",22)(50,"mat-icon"),e(51,"notifications_off"),i(),t(52,"span"),e(53,"Disable alerts"),i()()()(),t(54,"div",23)(55,"pre"),e(56,"              "),r(57,"code",24),e(58,`
            `),i()(),t(59,"div",25)(60,"pre"),e(61,"              "),r(62,"code",26),e(63,`
            `),i()()()(),t(64,"div",16)(65,"app-code-view",17)(66,"h4",18),e(67," Nested Menu "),i(),t(68,"div",19)(69,"button",20),e(70," Animal index "),i(),t(71,"mat-menu",21,1)(73,"button",30),e(74," Vertebrates "),i(),t(75,"button",30),e(76," Invertebrates "),i()(),t(77,"mat-menu",21,2)(79,"button",30),e(80,"Fishes"),i(),t(81,"button",30),e(82," Amphibians "),i(),t(83,"button",30),e(84," Reptiles "),i(),t(85,"button",22),e(86,"Birds"),i(),t(87,"button",22),e(88,"Mammals"),i()(),t(89,"mat-menu",21,3)(91,"button",22),e(92,"Insects"),i(),t(93,"button",22),e(94,"Molluscs"),i(),t(95,"button",22),e(96,"Crustaceans"),i(),t(97,"button",22),e(98,"Corals"),i(),t(99,"button",22),e(100,"Arachnids"),i(),t(101,"button",22),e(102,"Velvet worms"),i(),t(103,"button",22),e(104,"Horseshoe crabs"),i()(),t(105,"mat-menu",21,4)(107,"button",22),e(108,"Baikal oilfish"),i(),t(109,"button",22),e(110,"Bala shark"),i(),t(111,"button",22),e(112,"Ballan wrasse"),i(),t(113,"button",22),e(114,"Bamboo shark"),i(),t(115,"button",22),e(116,"Banded killifish"),i()(),t(117,"mat-menu",21,5)(119,"button",22),e(120,"Sonoran desert toad"),i(),t(121,"button",22),e(122,"Western toad"),i(),t(123,"button",22),e(124,"Arroyo toad"),i(),t(125,"button",22),e(126,"Yosemite toad"),i()(),t(127,"mat-menu",21,6)(129,"button",22),e(130,"Banded Day Gecko"),i(),t(131,"button",22),e(132,"Banded Gila Monster"),i(),t(133,"button",22),e(134,"Black Tree Monitor"),i(),t(135,"button",22),e(136,"Blue Spiny Lizard"),i(),t(137,"button",29),e(138,"Velociraptor"),i()()(),t(139,"div",23)(140,"pre"),e(141,"              "),r(142,"code",24),e(143,`
            `),i()(),t(144,"div",25)(145,"pre"),e(146,"              "),r(147,"code",26),e(148,`
            `),i()()()(),t(149,"div",31)(150,"app-code-view",17)(151,"h4",18),e(152," Positions "),i(),t(153,"div",19)(154,"div",15)(155,"div",32)(156,"button",33),e(157," Above "),i(),t(158,"mat-menu",34,7)(160,"button",22),e(161,"Item 1"),i(),t(162,"button",22),e(163,"Item 2"),i()()(),t(164,"div",32)(165,"button",35),e(166," Below "),i(),t(167,"mat-menu",36,8)(169,"button",22),e(170,"Item 1"),i(),t(171,"button",22),e(172,"Item 2"),i()()(),t(173,"div",32)(174,"button",37),e(175," Before "),i(),t(176,"mat-menu",38,9)(178,"button",22),e(179,"Item 1"),i(),t(180,"button",22),e(181,"Item 2"),i()()(),t(182,"div",32)(183,"button",33),e(184," After "),i(),t(185,"mat-menu",39,10)(187,"button",22),e(188,"Item 1"),i(),t(189,"button",22),e(190,"Item 2"),i()()()()(),t(191,"div",23)(192,"pre"),e(193,"              "),r(194,"code",24),e(195,`
            `),i()(),t(196,"div",25)(197,"pre"),e(198,"              "),r(199,"code",26),e(200,`
            `),i()()()()()()()),m&2){let d=w(14),s=w(72),h=w(78),nt=w(90),Zn=w(106),$n=w(118),eo=w(128),to=w(159),io=w(168),ao=w(177),no=w(186);n(7),o("isTitle",!0),n(4),o("matMenuTriggerFor",d),n(11),o("highlight",a.codeForMenuBasic),n(5),o("highlightAuto",a.codeForMenuBasicTs),n(3),o("isTitle",!0),n(4),o("matMenuTriggerFor",d),n(23),o("highlight",a.codeForMenuIcons),n(5),o("highlightAuto",a.codeForMenuIconsTs),n(3),o("isTitle",!0),n(4),o("matMenuTriggerFor",s),n(4),o("matMenuTriggerFor",h),n(2),o("matMenuTriggerFor",nt),n(4),o("matMenuTriggerFor",Zn),n(2),o("matMenuTriggerFor",$n),n(2),o("matMenuTriggerFor",eo),n(59),o("highlight",a.codeForMenuNested),n(5),o("highlightAuto",a.codeForMenuNestedTs),n(3),o("isTitle",!0),n(6),o("matMenuTriggerFor",to),n(9),o("matMenuTriggerFor",io),n(9),o("matMenuTriggerFor",ao),n(9),o("matMenuTriggerFor",no),n(11),o("highlight",a.codeForMenuPositions),n(5),o("highlightAuto",a.codeForMenuPositionsTs)}},dependencies:[v,y,P,A,je,Ue,We,ze,X,K,ee,le,L,N,Oe,_,M,C,T],encapsulation:2})}}return l})();var Da=`  <mat-paginator
          [length]="100"
          [pageSize]="10"
          [pageSizeOptions]="[5, 10, 25, 100]"
          aria-label="Select page"
        >
        </mat-paginator>
`;var La=`  import {Component} from '@angular/core';
    import { MatPaginatorModule} from '@angular/material/paginator';
    import {JsonPipe} from '@angular/common';
    import {MatSlideToggleModule} from '@angular/material/slide-toggle';
    import {FormsModule} from '@angular/forms';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';

    /**
     * @title Divider paginator
     */
    @Component({
      selector: 'app-paginator',
        imports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatSlideToggleModule,
            MatPaginatorModule,
            JsonPipe,
        ],
        templateUrl: './paginator.component.html'
    })
    export class AppPaginatorComponent {
        constructor() {}
    }
`;var yo=()=>[5,10,25,100],Na=(()=>{class l{constructor(){this.codeForPaginatorBasic=Da,this.codeForPaginatorBasicTs=La}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-paginator"]],decls:20,vars:7,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["aria-label","Select page",3,"length","pageSize","pageSizeOptions"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"]],template:function(m,a){m&1&&(t(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),e(3,"Paginator"),i()(),t(4,"mat-card-content",3)(5,"app-code-view",4)(6,"h4",5),e(7," Basic "),i(),t(8,"div",6),r(9,"mat-paginator",7),i(),t(10,"div",8)(11,"pre"),e(12,"          "),r(13,"code",9),e(14,`
        `),i()(),t(15,"div",10)(16,"pre"),e(17,"          "),r(18,"code",11),e(19,`
        `),i()()()()()),m&2&&(n(5),o("isTitle",!0),n(4),o("length",100)("pageSize",10)("pageSizeOptions",ht(6,yo)),n(4),o("highlight",a.codeForPaginatorBasic),n(5),o("highlightAuto",a.codeForPaginatorBasicTs))},dependencies:[R,z,F,Ge,Ei,Ci,v,y,P,A,_,M,C,T],encapsulation:2})}}return l})();var Fa=`  <mat-spinner></mat-spinner>
`,Ba=`  <h2 class="f-w-600 m-b-16 example-h2">Progress spinner configuration</h2>

        <section class="example-section">
          <label class="example-margin">Mode:</label>
          <mat-radio-group [(ngModel)]="mode">
            <mat-radio-button class="example-margin" value="determinate">
              Determinate
            </mat-radio-button>
            <mat-radio-button class="example-margin" value="indeterminate">
              Indeterminate
            </mat-radio-button>
          </mat-radio-group>
        </section>

        @if (mode === 'determinate') {
          <section class="example-section">
            <label class="example-margin">Progress:</label>
            <mat-slider class="example-margin">
              <input type="range" [(ngModel)]="value" matSliderThumb>
            </mat-slider>
          </section>
        }

        <div class="p-24 rounded bg-light-primary m-t-16">
          <h2 class="f-s-16 f-w-600 m-b-16 example-h2">Result</h2>

          <mat-progress-spinner
              class="example-margin"
              [mode]="mode"
              [value]="value">
          </mat-progress-spinner>
        </div>
`;var ka=`  import {Component} from '@angular/core';
    import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

    /**
     * @title Divider Progress snipper
     */
    @Component({
      selector: 'app-progress-snipper',
          imports: [MatProgressSpinnerModule],
          templateUrl: './progress-snipper.component.html'
    })
    export class AppProgressSnipperComponent {
        constructor() {}
    }
`,Oa=`  import {Component} from '@angular/core';
    import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

    /**
     * @title Divider Progress snipper
     */
    @Component({
      selector: 'app-progress-snipper',
        imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressSpinnerModule],
        templateUrl: './progress-snipper.component.html'
    })
    export class AppProgressSnipperComponent {
        constructor() {}

        mode: ProgressSpinnerMode = 'determinate';
        value = 50;

    }
`;function Po(l,c){if(l&1){let p=O();t(0,"section",12)(1,"label",13),e(2,"Progress:"),i(),t(3,"mat-slider",13)(4,"input",20),I("ngModelChange",function(a){b(p);let d=B();return x(d.value,a)||(d.value=a),f(a)}),i()()()}if(l&2){let p=B();n(4),E("ngModel",p.value)}}var Ha=(()=>{class l{constructor(){this.codeForProgressSpinnerBasic=Fa,this.codeForProgressSpinnerBasicTs=ka,this.codeForProgressSpinnerConfigurable=Ba,this.codeForProgressSpinnerConfigurableTs=Oa,this.mode="determinate",this.value=50}ngOnInit(){}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-progress-snipper"]],decls:49,vars:10,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"f-w-600","m-b-16","example-h2"],[1,"example-section"],[1,"example-margin"],[3,"ngModelChange","ngModel"],["value","determinate",1,"example-margin"],["value","indeterminate",1,"example-margin"],[1,"p-24","rounded","bg-light-primary","m-t-16"],[1,"f-s-16","f-w-600","m-b-16","example-h2"],[1,"example-margin",3,"mode","value"],["type","range","matSliderThumb","",3,"ngModelChange","ngModel"]],template:function(m,a){m&1&&(t(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),e(3,"Progress Spinner"),i()(),t(4,"mat-card-content",3)(5,"app-code-view",4)(6,"h4",5),e(7," Basic "),i(),t(8,"div",6),r(9,"mat-spinner"),i(),t(10,"div",7)(11,"pre"),e(12,"          "),r(13,"code",8),e(14,`
        `),i()(),t(15,"div",9)(16,"pre"),e(17,"          "),r(18,"code",10),e(19,`
        `),i()()(),t(20,"app-code-view",4)(21,"h4",5),e(22," Configurable "),i(),t(23,"div",6)(24,"h2",11),e(25,"Progress spinner configuration"),i(),t(26,"section",12)(27,"label",13),e(28,"Mode:"),i(),t(29,"mat-radio-group",14),I("ngModelChange",function(s){return x(a.mode,s)||(a.mode=s),s}),t(30,"mat-radio-button",15),e(31," Determinate "),i(),t(32,"mat-radio-button",16),e(33," Indeterminate "),i()()(),Z(34,Po,5,1,"section",12),t(35,"div",17)(36,"h2",18),e(37,"Result"),i(),r(38,"mat-progress-spinner",19),i()(),t(39,"div",7)(40,"pre"),e(41,"          "),r(42,"code",8),e(43,`
        `),i()(),t(44,"div",9)(45,"pre"),e(46,"          "),r(47,"code",10),e(48,`
        `),i()()()()()),m&2&&(n(5),o("isTitle",!0),n(8),o("highlight",a.codeForProgressSpinnerBasic),n(5),o("highlightAuto",a.codeForProgressSpinnerBasicTs),n(2),o("isTitle",!0),n(9),E("ngModel",a.mode),n(5),$(a.mode==="determinate"?34:-1),n(4),o("mode",a.mode)("value",a.value),n(4),o("highlight",a.codeForProgressSpinnerConfigurable),n(5),o("highlightAuto",a.codeForProgressSpinnerConfigurableTs))},dependencies:[v,y,P,A,ge,Re,He,F,V,Be,k,G,fe,he,be,bi,hi,_,M,C,T],encapsulation:2})}}return l})();var Va=`  <mat-progress-bar mode="determinate" value="40"></mat-progress-bar>
`,Ga=`  <mat-progress-bar mode="indeterminate"></mat-progress-bar>
`,Wa=`  <mat-progress-bar mode="query"></mat-progress-bar>
`,Ua=`  <mat-progress-bar mode="buffer"></mat-progress-bar>
`,za=`  <section class="example-section">
      <label class="example-margin">Mode:</label>
      <mat-radio-group [(ngModel)]="mode">
        <mat-radio-button class="example-margin" value="determinate">
          Determinate
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="indeterminate">
          Indeterminate
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="buffer">
          Buffer
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="query">
          Query
        </mat-radio-button>
      </mat-radio-group>
    </section>

    @if (mode === 'determinate' || mode === 'buffer') {
      <section class="example-section">
        <label class="example-margin">Progress:</label>
        <mat-slider class="example-margin">
          <input type="range" [(ngModel)]="value" matSliderThumb>
        </mat-slider>
      </section>
    }
    @if (mode === 'buffer') {
      <section class="example-section">
        <label class="example-margin">Buffer:</label>
        <mat-slider class="example-margin">
          <input type="range" [(ngModel)]="bufferValue" matSliderThumb>
        </mat-slider>
      </section>
    }

    <div class="p-24 rounded bg-light-primary m-t-16">
          <h2 class="f-s-16 f-w-600 m-b-16 example-h2">Result</h2>
          <section class="example-section">
            <mat-progress-bar
                class="example-margin"
                [mode]="mode"
                [value]="value"
                [bufferValue]="bufferValue">
            </mat-progress-bar>
          </section>
        </div>
`;var Pe=`  import {Component} from '@angular/core';
    import {MatProgressBarModule} from '@angular/material/progress-bar';

    /**
     * @title Divider Progress
     */
    @Component({
      selector: 'app-progress',
        imports: [MatProgressBarModule],
        templateUrl: './progress.component.html'
    })
    export class AppProgressComponent {
        constructor() {}
    }
`,ja=`  import {Component} from '@angular/core';
    import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
    import {MatSliderModule} from '@angular/material/slider';
    import {FormsModule} from '@angular/forms';
    import {MatRadioModule} from '@angular/material/radio';
    import {MatCardModule} from '@angular/material/card';

    /**
     * @title Divider Progress
     */
    @Component({
      selector: 'app-progress',
        imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressBarModule],
        templateUrl: './progress.component.html'
    })
    export class AppProgressComponent {
        constructor() {}

        mode: ProgressBarMode = 'determinate';
        value = 50;
        bufferValue = 75;
        
    }
`;function wo(l,c){if(l&1){let p=O();t(0,"section",15)(1,"label",16),e(2,"Progress:"),i(),t(3,"mat-slider",16)(4,"input",25),I("ngModelChange",function(a){b(p);let d=B();return x(d.value,a)||(d.value=a),f(a)}),i()()()}if(l&2){let p=B();n(4),E("ngModel",p.value)}}function Do(l,c){if(l&1){let p=O();t(0,"section",15)(1,"label",16),e(2,"Buffer:"),i(),t(3,"mat-slider",16)(4,"input",25),I("ngModelChange",function(a){b(p);let d=B();return x(d.bufferValue,a)||(d.bufferValue=a),f(a)}),i()()()}if(l&2){let p=B();n(4),E("ngModel",p.bufferValue)}}var Ka=(()=>{class l{constructor(){this.codeForProgressDeterminate=Va,this.codeForProgressDeterminateTs=Pe,this.codeForProgressIndeterminate=Ga,this.codeForProgressIndeterminateTs=Pe,this.codeForProgressQuery=Wa,this.codeForProgressQueryTs=Pe,this.codeForProgressBuffer=Ua,this.codeForProgressBufferTs=Pe,this.codeForProgressConfigurable=za,this.codeForProgressConfigurableTs=ja,this.mode="determinate",this.value=50,this.bufferValue=75}ngOnInit(){}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-progress"]],decls:98,vars:21,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["mode","determinate","value","40"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mode","indeterminate"],["mode","query"],["mode","buffer"],[1,"example-section"],[1,"example-margin"],[3,"ngModelChange","ngModel"],["value","determinate",1,"example-margin"],["value","indeterminate",1,"example-margin"],["value","buffer",1,"example-margin"],["value","query",1,"example-margin"],[1,"p-24","rounded","bg-light-primary","m-t-16"],[1,"f-s-16","f-w-600","m-b-16","example-h2"],[1,"example-margin",3,"mode","value","bufferValue"],["type","range","matSliderThumb","",3,"ngModelChange","ngModel"]],template:function(m,a){m&1&&(t(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),e(3,"Progress bar"),i()(),t(4,"mat-card-content",3)(5,"app-code-view",4)(6,"h4",5),e(7," Determinate "),i(),t(8,"div",6),r(9,"mat-progress-bar",7),i(),t(10,"div",8)(11,"pre"),e(12,"          "),r(13,"code",9),e(14,`
        `),i()(),t(15,"div",10)(16,"pre"),e(17,"          "),r(18,"code",11),e(19,`
        `),i()()(),t(20,"app-code-view",4)(21,"h4",5),e(22," Indeterminate "),i(),t(23,"div",6),r(24,"mat-progress-bar",12),i(),t(25,"div",8)(26,"pre"),e(27,"          "),r(28,"code",9),e(29,`
        `),i()(),t(30,"div",10)(31,"pre"),e(32,"          "),r(33,"code",11),e(34,`
        `),i()()(),t(35,"app-code-view",4)(36,"h4",5),e(37," Query "),i(),t(38,"div",6),r(39,"mat-progress-bar",13),i(),t(40,"div",8)(41,"pre"),e(42,"          "),r(43,"code",9),e(44,`
        `),i()(),t(45,"div",10)(46,"pre"),e(47,"          "),r(48,"code",11),e(49,`
        `),i()()(),t(50,"app-code-view",4)(51,"h4",5),e(52," Buffer "),i(),t(53,"div",6),r(54,"mat-progress-bar",14),i(),t(55,"div",8)(56,"pre"),e(57,"          "),r(58,"code",9),e(59,`
        `),i()(),t(60,"div",10)(61,"pre"),e(62,"          "),r(63,"code",11),e(64,`
        `),i()()(),t(65,"app-code-view",4)(66,"h4",5),e(67," Configurable "),i(),t(68,"div",6)(69,"section",15)(70,"label",16),e(71,"Mode:"),i(),t(72,"mat-radio-group",17),I("ngModelChange",function(s){return x(a.mode,s)||(a.mode=s),s}),t(73,"mat-radio-button",18),e(74," Determinate "),i(),t(75,"mat-radio-button",19),e(76," Indeterminate "),i(),t(77,"mat-radio-button",20),e(78," Buffer "),i(),t(79,"mat-radio-button",21),e(80," Query "),i()()(),Z(81,wo,5,1,"section",15),Z(82,Do,5,1,"section",15),t(83,"div",22)(84,"h2",23),e(85,"Result"),i(),t(86,"section",15),r(87,"mat-progress-bar",24),i()()(),t(88,"div",8)(89,"pre"),e(90,"          "),r(91,"code",9),e(92,`
        `),i()(),t(93,"div",10)(94,"pre"),e(95,"          "),r(96,"code",11),e(97,`
        `),i()()()()()),m&2&&(n(5),o("isTitle",!0),n(8),o("highlight",a.codeForProgressDeterminate),n(5),o("highlightAuto",a.codeForProgressDeterminateTs),n(2),o("isTitle",!0),n(8),o("highlight",a.codeForProgressIndeterminate),n(5),o("highlightAuto",a.codeForProgressIndeterminateTs),n(2),o("isTitle",!0),n(8),o("highlight",a.codeForProgressQuery),n(5),o("highlightAuto",a.codeForProgressQueryTs),n(2),o("isTitle",!0),n(8),o("highlight",a.codeForProgressBuffer),n(5),o("highlightAuto",a.codeForProgressBufferTs),n(2),o("isTitle",!0),n(7),E("ngModel",a.mode),n(9),$(a.mode==="determinate"||a.mode==="buffer"?81:-1),n(),$(a.mode==="buffer"?82:-1),n(5),o("mode",a.mode)("value",a.value)("bufferValue",a.bufferValue),n(4),o("highlight",a.codeForProgressConfigurable),n(5),o("highlightAuto",a.codeForProgressConfigurableTs))},dependencies:[Si,fi,v,y,P,A,F,V,Be,k,G,fe,he,be,ge,Re,He,_,M,C,T],encapsulation:2})}}return l})();var Xa=`  <mat-checkbox [(ngModel)]="centered" class="example-ripple-checkbox" color="primary">Centered</mat-checkbox>
    <mat-checkbox [(ngModel)]="disabled" class="example-ripple-checkbox" color="primary">Disabled</mat-checkbox>
    <mat-checkbox [(ngModel)]="unbounded" class="example-ripple-checkbox" color="primary">Unbounded</mat-checkbox>
    <div>
      <mat-form-field class="example-ripple-form-field" appearance="outline">
        <mat-label>Radius</mat-label>
        <input matInput [(ngModel)]="radius" type="number" />
      </mat-form-field>
      <mat-form-field class="example-ripple-form-field" appearance="outline">
        <mat-label>Color</mat-label>
        <input matInput [(ngModel)]="color" type="text" />
      </mat-form-field>
    </div>
    <div class="example-ripple-container cardWithShadow" matRipple [matRippleCentered]="centered"
      [matRippleDisabled]="disabled" [matRippleUnbounded]="unbounded" [matRippleRadius]="radius"
      [matRippleColor]="color">
      Click me
    </div>
`;var Qa=`  import {Component} from '@angular/core';
    import {MatRippleModule} from '@angular/material/core';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {FormsModule} from '@angular/forms';
    import { MatCardModule } from '@angular/material/card';
    import {MatCheckboxModule} from '@angular/material/checkbox';

    /**
     * @title Divider Progress snipper
     */
    @Component({
      selector: 'app-ripples',
        imports: [MatCheckboxModule, FormsModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatCardModule],
        templateUrl: './ripples.component.html',
        styleUrls: ['./ripples.component.scss']
    })
    export class AppRipplesComponent {
        constructor() {}

        centered = false;
        disabled = false;
        unbounded = false;

        radius: number;
        color: string;

    }
`;var qa=(()=>{class l{constructor(){this.codeForRipple=Xa,this.codeForRippleTs=Qa,this.centered=!1,this.disabled=!1,this.unbounded=!1}ngOnInit(){}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-ripples"]],decls:31,vars:13,consts:[[3,"isTitle"],["Ctitle",""],["output",""],["color","primary",1,"example-ripple-checkbox",3,"ngModelChange","ngModel"],["appearance","outline",1,"example-ripple-form-field"],["matInput","","type","number",3,"ngModelChange","ngModel"],["matInput","","type","text",3,"ngModelChange","ngModel"],["matRipple","",1,"example-ripple-container","cardWithShadow",3,"matRippleCentered","matRippleDisabled","matRippleUnbounded","matRippleRadius","matRippleColor"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"]],template:function(m,a){m&1&&(t(0,"app-code-view",0)(1,"h4",1),e(2," Ripples "),i(),t(3,"div",2)(4,"mat-checkbox",3),I("ngModelChange",function(s){return x(a.centered,s)||(a.centered=s),s}),e(5,"Centered"),i(),t(6,"mat-checkbox",3),I("ngModelChange",function(s){return x(a.disabled,s)||(a.disabled=s),s}),e(7,"Disabled"),i(),t(8,"mat-checkbox",3),I("ngModelChange",function(s){return x(a.unbounded,s)||(a.unbounded=s),s}),e(9,"Unbounded"),i(),t(10,"div")(11,"mat-form-field",4)(12,"mat-label"),e(13,"Radius"),i(),t(14,"input",5),I("ngModelChange",function(s){return x(a.radius,s)||(a.radius=s),s}),i()(),t(15,"mat-form-field",4)(16,"mat-label"),e(17,"Color"),i(),t(18,"input",6),I("ngModelChange",function(s){return x(a.color,s)||(a.color=s),s}),i()()(),t(19,"div",7),e(20," Click me "),i()(),t(21,"div",8)(22,"pre"),e(23,"      "),r(24,"code",9),e(25,`
    `),i()(),t(26,"div",10)(27,"pre"),e(28,"      "),r(29,"code",11),e(30,`
    `),i()()()),m&2&&(o("isTitle",!0),n(4),E("ngModel",a.centered),n(2),E("ngModel",a.disabled),n(2),E("ngModel",a.unbounded),n(6),E("ngModel",a.radius),n(4),E("ngModel",a.color),n(),o("matRippleCentered",a.centered)("matRippleDisabled",a.disabled)("matRippleUnbounded",a.unbounded)("matRippleRadius",a.radius)("matRippleColor",a.color),n(5),o("highlight",a.codeForRipple),n(5),o("highlightAuto",a.codeForRippleTs))},dependencies:[re,oe,F,V,ne,k,G,R,U,W,z,Q,At,ft,v,_,M,C,T],styles:[".example-ripple-container[_ngcontent-%COMP%]{cursor:pointer;text-align:center;width:300px;height:300px;line-height:300px;user-select:none;-webkit-user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:transparent}.example-ripple-checkbox[_ngcontent-%COMP%]{margin:6px 12px 6px 0}.example-ripple-form-field[_ngcontent-%COMP%]{margin:0 12px 0 0}"]})}}return l})();var Ya=`  <mat-slide-toggle color="primary">Slide me!</mat-slide-toggle>
`,Ja=`  <h4 class="f-w-500 f-s-16 m-b-16">Slide Toggle using a simple NgModel.</h4>

        <mat-slide-toggle [(ngModel)]="isChecked">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>

        <div class="row">
          <div class="col-md-6">
            <h4 class="f-w-500 f-s-16 m-b-16 m-t-20">Slide Toggle inside of a Template-driven form</h4>

            <form #form="ngForm" (ngSubmit)="alertFormValues(form.form)">
              <div class="d-flex flex-col gap-12">
                <mat-slide-toggle ngModel name="enableWifi">Enable Wifi</mat-slide-toggle>
                <mat-slide-toggle ngModel name="acceptTerms" required>Accept Terms of Service</mat-slide-toggle>
                <div>
                  <button mat-flat-button type="submit">Save Settings</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <h4 class="f-w-500 f-s-16 m-b-16 m-t-20">Slide Toggle inside of a Reactive form</h4>

            <form [formGroup]="formGroup" (ngSubmit)="alertFormValues(formGroup)" ngNativeValidate>
              <div class="d-flex flex-col gap-12">
                <mat-slide-toggle formControlName="enableWifi">Enable Wifi</mat-slide-toggle>
                <mat-slide-toggle formControlName="acceptTerms">Accept Terms of Service</mat-slide-toggle>

                <h4 class="f-w-500 f-s-16 m-b-16 m-t-20">Form Group Status: {{formGroup.status}}</h4>
                <div>
                  <button mat-flat-button type="submit">Save Settings</button>
                </div>
              </div>
            </form>
          </div>
        </div>
`,Za=`  <h2 class="example-h2 f-w-600 m-b-16">Slide toggle configuration</h2>

        <section class="example-section">
          <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
        </section>

        <section class="example-section">
          <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
        </section>

        <div class="p-24 rounded bg-light-primary m-t-16">
          <h2 class="f-s-16 f-w-600 m-b-16 example-h2">Result</h2>

          <section class="example-section">
            <mat-slide-toggle
                class="example-margin"
                [checked]="checked"
                [disabled]="disabled">
              Slide me!
            </mat-slide-toggle>
          </section>
`;var $a=`  import {Component} from '@angular/core';
    import {MatSlideToggleModule} from '@angular/material/slide-toggle';

    /**
     * @title slide-toggle
     */
    @Component({
      selector: 'app-slide-toggle',
        imports: [MatSlideToggleModule],
        templateUrl: './slide-toggle.component.html'
    })
    export class AppSlideToggleComponent {
        constructor() {}
    }
`,en=`  import {Component, inject} from '@angular/core';
    import {MatSlideToggleModule} from '@angular/material/slide-toggle';
    import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
    import {MatButtonModule} from '@angular/material/button';
    import { MatSlideToggleModule} from '@angular/material/slide-toggle';

    /**
     * @title Slide-toggle with forms
     */
    @Component({
      selector: 'app-slide-toggle',
        imports: [MatSlideToggleModule, FormsModule, MatButtonModule, ReactiveFormsModule,],
        templateUrl: './slide-toggle.component.html'
    })
    export class AppSlideToggleComponent {
        constructor() {}

        private _formBuilder = inject(FormBuilder);

        isChecked = true;
        formGroup = this._formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue],
        });

        alertFormValues(formGroup: FormGroup) {
            alert(JSON.stringify(formGroup.value, null, 2));
        }
    }
`,tn=`  import {Component} from '@angular/core';
    import {MatSlideToggleModule} from '@angular/material/slide-toggle';
    import {MatCheckboxModule} from '@angular/material/checkbox';
    import {FormsModule} from '@angular/forms';
    import {MatRadioModule} from '@angular/material/radio';
    import {MatCardModule} from '@angular/material/card';

    /**
     * @title Configurable slide-toggle
     */
    @Component({
      selector: 'app-slide-toggle',
        imports: [MatCardModule, MatRadioModule, FormsModule, MatCheckboxModule, MatSlideToggleModule],
        templateUrl: './slide-toggle.component.html'
    })
    export class AppSlideToggleComponent {
        constructor() {}

        checked = false;
        disabled = false;
    }
`;var an=(()=>{class l{constructor(){this.codeForSlideToggleBasic=Ya,this.codeForSlideToggleBasicTs=$a,this.codeForSlideToggleForm=Ja,this.codeForSlideToggleFormTs=en,this.codeForSlideToggleConfiguration=Za,this.codeForSlideToggleConfigurationTs=tn,this.checked=!1,this.disabled=!1,this._formBuilder=ie(It),this.isChecked=!0,this.formGroup=this._formBuilder.group({enableWifi:"",acceptTerms:["",vt.requiredTrue]})}alertFormValues(p){alert(JSON.stringify(p.value,null,2))}ngOnInit(){}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-slide-toggle"]],decls:95,vars:17,consts:[["form","ngForm"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["color","primary"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"f-w-500","f-s-16","m-b-16"],[3,"ngModelChange","ngModel"],[1,"row"],[1,"col-md-6"],[1,"f-w-500","f-s-16","m-b-16","m-t-20"],[3,"ngSubmit"],[1,"d-flex","flex-col","gap-12"],["ngModel","","name","enableWifi"],["ngModel","","name","acceptTerms","required",""],["mat-flat-button","","type","submit"],["ngNativeValidate","",3,"ngSubmit","formGroup"],["formControlName","enableWifi"],["formControlName","acceptTerms"],[1,"example-h2","f-w-600","m-b-16"],[1,"example-section"],[1,"example-margin",3,"ngModelChange","ngModel"],[1,"p-24","rounded","bg-light-primary","m-t-16"],[1,"f-s-16","f-w-600","m-b-16","example-h2"],[1,"example-margin",3,"checked","disabled"]],template:function(m,a){if(m&1){let d=O();t(0,"mat-card",1)(1,"div",2)(2,"mat-card-title",3),e(3,"Slide Toggle"),i()(),t(4,"mat-card-content",4)(5,"app-code-view",5)(6,"h4",6),e(7," Basic "),i(),t(8,"div",7)(9,"mat-slide-toggle",8),e(10,"Slide me!"),i()(),t(11,"div",9)(12,"pre"),e(13,"          "),r(14,"code",10),e(15,`
        `),i()(),t(16,"div",11)(17,"pre"),e(18,"          "),r(19,"code",12),e(20,`
        `),i()()(),t(21,"app-code-view",5)(22,"h4",6),e(23," Forms "),i(),t(24,"div",7)(25,"h4",13),e(26,"Slide Toggle using a simple NgModel."),i(),t(27,"mat-slide-toggle",14),I("ngModelChange",function(h){return b(d),x(a.isChecked,h)||(a.isChecked=h),f(h)}),e(28),i(),t(29,"div",15)(30,"div",16)(31,"h4",17),e(32,"Slide Toggle inside of a Template-driven form"),i(),t(33,"form",18,0),u("ngSubmit",function(){b(d);let h=w(34);return f(a.alertFormValues(h.form))}),t(35,"div",19)(36,"mat-slide-toggle",20),e(37,"Enable Wifi"),i(),t(38,"mat-slide-toggle",21),e(39,"Accept Terms of Service"),i(),t(40,"div")(41,"button",22),e(42,"Save Settings"),i()()()()(),t(43,"div",16)(44,"h4",17),e(45,"Slide Toggle inside of a Reactive form"),i(),t(46,"form",23),u("ngSubmit",function(){return b(d),f(a.alertFormValues(a.formGroup))}),t(47,"div",19)(48,"mat-slide-toggle",24),e(49,"Enable Wifi"),i(),t(50,"mat-slide-toggle",25),e(51,"Accept Terms of Service"),i(),t(52,"h4",17),e(53),i(),t(54,"div")(55,"button",22),e(56,"Save Settings"),i()()()()()()(),t(57,"div",9)(58,"pre"),e(59,"          "),r(60,"code",10),e(61,`
        `),i()(),t(62,"div",11)(63,"pre"),e(64,"          "),r(65,"code",12),e(66,`
        `),i()()(),t(67,"app-code-view",5)(68,"h4",6),e(69," Configuration "),i(),t(70,"div",7)(71,"h2",26),e(72,"Slide toggle configuration"),i(),t(73,"section",27)(74,"mat-checkbox",28),I("ngModelChange",function(h){return b(d),x(a.checked,h)||(a.checked=h),f(h)}),e(75,"Checked"),i()(),t(76,"section",27)(77,"mat-checkbox",28),I("ngModelChange",function(h){return b(d),x(a.disabled,h)||(a.disabled=h),f(h)}),e(78,"Disabled"),i()(),t(79,"div",29)(80,"h2",30),e(81,"Result"),i(),t(82,"section",27)(83,"mat-slide-toggle",31),e(84," Slide me! "),i()()()(),t(85,"div",9)(86,"pre"),e(87,"          "),r(88,"code",10),e(89,`
        `),i()(),t(90,"div",11)(91,"pre"),e(92,"          "),r(93,"code",12),e(94,`
        `),i()()()()()}m&2&&(n(5),o("isTitle",!0),n(9),o("highlight",a.codeForSlideToggleBasic),n(5),o("highlightAuto",a.codeForSlideToggleBasicTs),n(2),o("isTitle",!0),n(6),E("ngModel",a.isChecked),n(),D("Slide Toggle Checked: ",a.isChecked),n(18),o("formGroup",a.formGroup),n(7),D("Form Group Status: ",a.formGroup.status),n(7),o("highlight",a.codeForSlideToggleForm),n(5),o("highlightAuto",a.codeForSlideToggleFormTs),n(2),o("isTitle",!0),n(7),E("ngModel",a.checked),n(3),E("ngModel",a.disabled),n(6),o("checked",a.checked)("disabled",a.disabled),n(5),o("highlight",a.codeForSlideToggleConfiguration),n(5),o("highlightAuto",a.codeForSlideToggleConfigurationTs))},dependencies:[v,y,P,A,ge,F,Mt,k,Tt,xt,G,_t,re,oe,Ge,Nt,ue,Et,Ct,L,N,_,M,C,T],encapsulation:2})}}return l})();var nn=`  <div class="row">
          <div class="col-lg-3">
            <mat-form-field class="w-100" appearance="outline">
              <mat-label>Value</mat-label>
              <input matInput type="number" [(ngModel)]="value" />
            </mat-form-field>
          </div>
          <div class="col-lg-3">
            <mat-form-field class="w-100" appearance="outline">
              <mat-label>Min value</mat-label>
              <input matInput type="number" [(ngModel)]="min" />
            </mat-form-field>
          </div>
          <div class="col-lg-3">
            <mat-form-field class="w-100" appearance="outline">
              <mat-label>Max value</mat-label>
              <input matInput type="number" [(ngModel)]="max" />
            </mat-form-field>
          </div>
          <div class="col-lg-3">
            <mat-form-field class="w-100" appearance="outline">
              <mat-label>Step size</mat-label>
              <input matInput type="number" [(ngModel)]="step" />
            </mat-form-field>
          </div>
        </div>

        <section class="example-section">
          <mat-checkbox [(ngModel)]="showTicks" color="primary">Show ticks</mat-checkbox>
        </section>

        <section class="example-section">
          <mat-checkbox [(ngModel)]="thumbLabel" color="primary">Show thumb label</mat-checkbox>
        </section>

        <section class="example-section">
          <mat-checkbox [(ngModel)]="disabled" color="primary">Disabled</mat-checkbox>
        </section>

        <div class="p-24 rounded bg-light-primary m-t-16">
          <h2 class="f-s-16 f-w-600 m-b-16">Result</h2>

          <div>
            <label id="example-name-label" class="f-w-600 f-s-14">Value :
            </label>
            <label class="f-w-500 f-s-14">{{ value }}</label>
          </div>
          <mat-slider class="example-margin" [disabled]="disabled" [max]="max" [min]="min" [step]="step"
            [discrete]="thumbLabel" [showTickMarks]="showTicks">
            <input matSliderThumb [(ngModel)]="value" />
          </mat-slider>
        </div>
`,on=`  <mat-slider min="0" max="100000" step="1000" showTickMarks discrete [displayWith]="formatLabel">
              <input matSliderThumb />
            </mat-slider>
`,rn=`  <mat-slider>
              <input matSliderThumb />
            </mat-slider>
`,ln=`  <mat-slider min="200" max="500">
              <input value="300" matSliderStartThumb />
              <input value="400" matSliderEndThumb />
            </mat-slider>
`;var mn=`  import {Component} from '@angular/core';
    import {MatSliderModule} from '@angular/material/slider';
    import {MatCheckboxModule} from '@angular/material/checkbox';
    import {FormsModule} from '@angular/forms';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {MatCardModule} from '@angular/material/card';

    /**
     * @title Configurable slider
     */
    @Component({
      selector: 'app-slider',
        imports: [
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatCheckboxModule,
            MatSliderModule,
        ],
        templateUrl: './slider.component.html'
    })
    export class AppSliderComponent {
        constructor() {}

        disabled = false;
        max = 100;
        min = 0;
        showTicks = false;
        step = 1;
        thumbLabel = false;
        value = 0;
    }
`,pn=`  import {Component} from '@angular/core';
    import {MatSliderModule} from '@angular/material/slider';

    /**
     * @title Slider with custom thumb label formatting.
     */
    @Component({
      selector: 'app-slider',
        imports: [MatSliderModule],
        templateUrl: './slider.component.html'
    })
    export class AppSliderComponent {
        constructor() {}

        formatLabel(value: number): string {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }

        return '{value}';
        }
    }
`,dt=`  import {Component} from '@angular/core';
    import {MatSliderModule} from '@angular/material/slider';

    /**
     * @title Basic slider
     */
    @Component({
      selector: 'app-slider',
        imports: [MatSliderModule],
        templateUrl: './slider.component.html'
    })
    export class AppSliderComponent {
        constructor() {}
    }
`;var sn=(()=>{class l{formatLabel(p){return p>=1e3?Math.round(p/1e3)+"k":`${p}`}constructor(){this.codeForSliderConfiguration=nn,this.codeForSliderConfigurationTs=mn,this.codeForSliderCustomThumbLabel=on,this.codeForSliderCustomThumbLabelTs=pn,this.codeForSliderBasic=rn,this.codeForSliderBasicTs=dt,this.codeForSliderRange=ln,this.codeForSliderRangeTs=dt,this.disabled=!1,this.max=100,this.min=0,this.showTicks=!1,this.step=1,this.thumbLabel=!1,this.value=0}ngOnInit(){}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-slider"]],decls:112,vars:28,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"row"],[1,"col-lg-3"],["appearance","outline",1,"w-100"],["matInput","","type","number",3,"ngModelChange","ngModel"],[1,"example-section"],["color","primary",3,"ngModelChange","ngModel"],[1,"p-24","rounded","bg-light","m-t-16"],[1,"f-s-16","f-w-600","m-b-16"],["id","example-name-label",1,"f-w-600","f-s-14"],[1,"f-w-500","f-s-14"],[1,"example-margin",3,"disabled","max","min","step","discrete","showTickMarks"],["matSliderThumb","",3,"ngModelChange","ngModel"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"col-lg-6"],["min","0","max","100000","step","1000","showTickMarks","","discrete","",3,"displayWith"],["matSliderThumb",""],["min","200","max","500"],["value","300","matSliderStartThumb",""],["value","400","matSliderEndThumb",""]],template:function(m,a){m&1&&(t(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),e(3,"Slider"),i()(),t(4,"mat-card-content",3)(5,"app-code-view",4)(6,"h4",5),e(7," Configuration "),i(),t(8,"div",6)(9,"div",7)(10,"div",8)(11,"mat-form-field",9)(12,"mat-label"),e(13,"Value"),i(),t(14,"input",10),I("ngModelChange",function(s){return x(a.value,s)||(a.value=s),s}),i()()(),t(15,"div",8)(16,"mat-form-field",9)(17,"mat-label"),e(18,"Min value"),i(),t(19,"input",10),I("ngModelChange",function(s){return x(a.min,s)||(a.min=s),s}),i()()(),t(20,"div",8)(21,"mat-form-field",9)(22,"mat-label"),e(23,"Max value"),i(),t(24,"input",10),I("ngModelChange",function(s){return x(a.max,s)||(a.max=s),s}),i()()(),t(25,"div",8)(26,"mat-form-field",9)(27,"mat-label"),e(28,"Step size"),i(),t(29,"input",10),I("ngModelChange",function(s){return x(a.step,s)||(a.step=s),s}),i()()()(),t(30,"section",11)(31,"mat-checkbox",12),I("ngModelChange",function(s){return x(a.showTicks,s)||(a.showTicks=s),s}),e(32,"Show ticks"),i()(),t(33,"section",11)(34,"mat-checkbox",12),I("ngModelChange",function(s){return x(a.thumbLabel,s)||(a.thumbLabel=s),s}),e(35,"Show thumb label"),i()(),t(36,"section",11)(37,"mat-checkbox",12),I("ngModelChange",function(s){return x(a.disabled,s)||(a.disabled=s),s}),e(38,"Disabled"),i()(),t(39,"div",13)(40,"h2",14),e(41,"Result"),i(),t(42,"div")(43,"label",15),e(44,"Value : "),i(),t(45,"label",16),e(46),i()(),t(47,"mat-slider",17)(48,"input",18),I("ngModelChange",function(s){return x(a.value,s)||(a.value=s),s}),i()()()(),t(49,"div",19)(50,"pre"),e(51,"          "),r(52,"code",20),e(53,`
        `),i()(),t(54,"div",21)(55,"pre"),e(56,"          "),r(57,"code",22),e(58,`
        `),i()()(),t(59,"div",7)(60,"div",23)(61,"app-code-view",4)(62,"h4",5),e(63," Custom thumb label "),i(),t(64,"div",6)(65,"mat-slider",24),r(66,"input",25),i()(),t(67,"div",19)(68,"pre"),e(69,"              "),r(70,"code",20),e(71,`
            `),i()(),t(72,"div",21)(73,"pre"),e(74,"              "),r(75,"code",22),e(76,`
            `),i()()()(),t(77,"div",23)(78,"app-code-view",4)(79,"h4",5),e(80," Basic "),i(),t(81,"div",6)(82,"mat-slider"),r(83,"input",25),i()(),t(84,"div",19)(85,"pre"),e(86,"              "),r(87,"code",20),e(88,`
            `),i()(),t(89,"div",21)(90,"pre"),e(91,"              "),r(92,"code",22),e(93,`
            `),i()()()(),t(94,"div",23)(95,"app-code-view",4)(96,"h4",5),e(97," Range slider "),i(),t(98,"div",6)(99,"mat-slider",26),r(100,"input",27)(101,"input",28),i()(),t(102,"div",19)(103,"pre"),e(104,"              "),r(105,"code",20),e(106,`
            `),i()(),t(107,"div",21)(108,"pre"),e(109,"              "),r(110,"code",22),e(111,`
            `),i()()()()()()()),m&2&&(n(5),o("isTitle",!0),n(9),E("ngModel",a.value),n(5),E("ngModel",a.min),n(5),E("ngModel",a.max),n(5),E("ngModel",a.step),n(2),E("ngModel",a.showTicks),n(3),E("ngModel",a.thumbLabel),n(3),E("ngModel",a.disabled),n(9),pe(a.value),n(),o("disabled",a.disabled)("max",a.max)("min",a.min)("step",a.step)("discrete",a.thumbLabel)("showTickMarks",a.showTicks),n(),E("ngModel",a.value),n(4),o("highlight",a.codeForSliderConfiguration),n(5),o("highlightAuto",a.codeForSliderConfigurationTs),n(4),o("isTitle",!0),n(4),o("displayWith",a.formatLabel),n(5),o("highlight",a.codeForSliderCustomThumbLabel),n(5),o("highlightAuto",a.codeForSliderCustomThumbLabelTs),n(3),o("isTitle",!0),n(9),o("highlight",a.codeForSliderBasic),n(5),o("highlightAuto",a.codeForSliderBasicTs),n(3),o("isTitle",!0),n(10),o("highlight",a.codeForSliderRange),n(5),o("highlightAuto",a.codeForSliderRangeTs))},dependencies:[v,y,P,A,R,U,W,z,Q,F,V,ne,k,G,re,oe,fe,he,be,Lt,_,M,C,T],encapsulation:2})}}return l})();var dn=`  <div class="row">
          <div class="col-lg-4">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Message</mat-label>
              <input matInput value="Disco party!" #message />
            </mat-form-field>
          </div>
          <div class="col-lg-4">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Action</mat-label>
              <input matInput value="Dance" #action />
            </mat-form-field>
          </div>
          <div class="col-lg-4">
            <button mat-flat-button color="primary" (click)="openSnackBar(message.value, action.value)">
              Show snack-bar
            </button>
          </div>
        </div>
`,cn=`  <div class="row">
          <div class="col-lg-4">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Snack bar duration (seconds)</mat-label>
              <input type="number" [(ngModel)]="durationInSeconds" matInput />
            </mat-form-field>
          </div>
          <div class="col-lg-4">
            <button mat-flat-button color="accent" (click)="openCustomSnackBar()"
              aria-label="Show an example snack-bar">
              Pizza party
            </button>
          </div>
        </div>
`,un=`  <div class="row">
          <div class="col-lg-4">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Horizontal position</mat-label>
              <mat-select [(value)]="horizontalPosition">
                <mat-option value="start">Start</mat-option>
                <mat-option value="center">Center</mat-option>
                <mat-option value="end">End</mat-option>
                <mat-option value="left">Left</mat-option>
                <mat-option value="right">Right</mat-option>
              </mat-select>
            </mat-form-field>
          </div>
          <div class="col-lg-4">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Vertical position</mat-label>
              <mat-select [(value)]="verticalPosition">
                <mat-option value="top">Top</mat-option>
                <mat-option value="bottom">Bottom</mat-option>
              </mat-select>
            </mat-form-field>
          </div>
          <div class="col-lg-4">
            <button mat-flat-button color="primary" (click)="openConfigSnackBar()"
              aria-label="Show an example snack-bar">
              Pool party!
            </button>
          </div>
        </div>
`;var gn=`  import {Component, inject} from '@angular/core';
    import {MatSnackBar} from '@angular/material/snack-bar';
    import {MatButtonModule} from '@angular/material/button';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';

    /**
     * @title Basic snack-bar
     */
      @Component({
        selector: 'app-snackbar',
        imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
        templateUrl: './snackbar.component.html'
    })

    export class AppSnackbarComponent {
        constructor() {}

        private _snackBar = inject(MatSnackBar);

        openSnackBar(message: string, action: string) {
            this._snackBar.open(message, action);
        }
    }
`,hn=`  import {Component, inject} from '@angular/core';
    import {MatSnackBar} from '@angular/material/snack-bar';
    import {MatButtonModule} from '@angular/material/button';
    import {MatInputModule} from '@angular/material/input';
    import {FormsModule} from '@angular/forms';
    import {MatFormFieldModule} from '@angular/material/form-field';

    /**
     * @title Snack-bar with a custom component
     */
      @Component({
        selector: 'app-snackbar',
        imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
        templateUrl: './snackbar.component.html'
    })

    export class AppSnackbarComponent {
        constructor() {}

        private _snackBar = inject(MatSnackBar);

        durationInSeconds = 5;

        openSnackBar() {
            this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
            });
        }
    }

    @Component({
        selector: 'app-custom-snackbar',
        templateUrl: 'snackbar-custom.component.html',
        styles: [
            
          .example-pizza-party {
            color: hotpink;
          }
        ,
        ],
        standalone: false
    })
    export class PizzaPartyComponent {}
`,bn=`  import {Component, inject} from '@angular/core';
    import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
    } from '@angular/material/snack-bar';
    import {MatButtonModule} from '@angular/material/button';
    import {MatSelectModule} from '@angular/material/select';
    import {MatFormFieldModule} from '@angular/material/form-field';

    /**
     * @title Snack-bar with configurable position
     */
      @Component({
        selector: 'app-snackbar',
        imports: [MatFormFieldModule, MatSelectModule, MatButtonModule],
        templateUrl: './snackbar.component.html'
    })

    export class AppSnackbarComponent {
        constructor() {}

        private _snackBar = inject(MatSnackBar);

        horizontalPosition: MatSnackBarHorizontalPosition = 'start';
        verticalPosition: MatSnackBarVerticalPosition = 'bottom';

        openSnackBar() {
            this._snackBar.open('Cannonball!!', 'Splash', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            });
        }
    }
`;var Lo=(()=>{class l{static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-custom-snackbar"]],standalone:!1,decls:2,vars:0,template:function(m,a){m&1&&(t(0,"span"),e(1," Pizza party!!! \u{1F355} "),i())},styles:[".example-pizza-party[_ngcontent-%COMP%]{color:#ff69b4}"]})}}return l})(),fn=(()=>{class l{constructor(p){this._snackBar=p,this.codeForSnackbarBasic=dn,this.codeForSnackbarBasicTs=gn,this.codeForSnackbarCustomComponent=cn,this.codeForSnackbarCustomComponentTs=hn,this.codeForSnackbarConfigurable=un,this.codeForSnackbarConfigurableTs=bn,this.durationInSeconds=5,this.horizontalPosition="start",this.verticalPosition="bottom"}openSnackBar(p,m){this._snackBar.open(p,m)}openCustomSnackBar(){this._snackBar.openFromComponent(Lo,{duration:this.durationInSeconds*1e3})}openConfigSnackBar(){this._snackBar.open("Cannonball!!","Splash",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition})}static{this.\u0275fac=function(m){return new(m||l)(ce(_i))}}static{this.\u0275cmp=g({type:l,selectors:[["app-snackbar"]],decls:100,vars:12,consts:[["message",""],["action",""],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"row"],[1,"col-lg-4"],["appearance","outline",1,"w-100"],["matInput","","value","Disco party!"],["matInput","","value","Dance"],["mat-flat-button","","color","primary",3,"click"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["type","number","matInput","",3,"ngModelChange","ngModel"],["mat-flat-button","","color","accent","aria-label","Show an example snack-bar",3,"click"],[3,"valueChange","value"],["value","start"],["value","center"],["value","end"],["value","left"],["value","right"],["value","top"],["value","bottom"],["mat-flat-button","","color","primary","aria-label","Show an example snack-bar",3,"click"]],template:function(m,a){if(m&1){let d=O();t(0,"mat-card",2)(1,"div",3)(2,"mat-card-title",4),e(3,"Snackbar"),i()(),t(4,"mat-card-content",5)(5,"app-code-view",6)(6,"h4",7),e(7," Basic "),i(),t(8,"div",8)(9,"div",9)(10,"div",10)(11,"mat-form-field",11)(12,"mat-label"),e(13,"Message"),i(),r(14,"input",12,0),i()(),t(16,"div",10)(17,"mat-form-field",11)(18,"mat-label"),e(19,"Action"),i(),r(20,"input",13,1),i()(),t(22,"div",10)(23,"button",14),u("click",function(){b(d);let h=w(15),nt=w(21);return f(a.openSnackBar(h.value,nt.value))}),e(24," Show snack-bar "),i()()()(),t(25,"div",15)(26,"pre"),e(27,"          "),r(28,"code",16),e(29,`
        `),i()(),t(30,"div",17)(31,"pre"),e(32,"          "),r(33,"code",18),e(34,`
        `),i()()(),t(35,"app-code-view",6)(36,"h4",7),e(37," Custom Component "),i(),t(38,"div",8)(39,"div",9)(40,"div",10)(41,"mat-form-field",11)(42,"mat-label"),e(43,"Snack bar duration (seconds)"),i(),t(44,"input",19),I("ngModelChange",function(h){return b(d),x(a.durationInSeconds,h)||(a.durationInSeconds=h),f(h)}),i()()(),t(45,"div",10)(46,"button",20),u("click",function(){return b(d),f(a.openCustomSnackBar())}),e(47," Pizza party "),i()()()(),t(48,"div",15)(49,"pre"),e(50,"          "),r(51,"code",16),e(52,`
        `),i()(),t(53,"div",17)(54,"pre"),e(55,"          "),r(56,"code",18),e(57,`
        `),i()()(),t(58,"app-code-view",6)(59,"h4",7),e(60," Configurable "),i(),t(61,"div",8)(62,"div",9)(63,"div",10)(64,"mat-form-field",11)(65,"mat-label"),e(66,"Horizontal position"),i(),t(67,"mat-select",21),I("valueChange",function(h){return b(d),x(a.horizontalPosition,h)||(a.horizontalPosition=h),f(h)}),t(68,"mat-option",22),e(69,"Start"),i(),t(70,"mat-option",23),e(71,"Center"),i(),t(72,"mat-option",24),e(73,"End"),i(),t(74,"mat-option",25),e(75,"Left"),i(),t(76,"mat-option",26),e(77,"Right"),i()()()(),t(78,"div",10)(79,"mat-form-field",11)(80,"mat-label"),e(81,"Vertical position"),i(),t(82,"mat-select",21),I("valueChange",function(h){return b(d),x(a.verticalPosition,h)||(a.verticalPosition=h),f(h)}),t(83,"mat-option",27),e(84,"Top"),i(),t(85,"mat-option",28),e(86,"Bottom"),i()()()(),t(87,"div",10)(88,"button",29),u("click",function(){return b(d),f(a.openConfigSnackBar())}),e(89," Pool party! "),i()()()(),t(90,"div",15)(91,"pre"),e(92,"          "),r(93,"code",16),e(94,`
        `),i()(),t(95,"div",17)(96,"pre"),e(97,"          "),r(98,"code",18),e(99,`
        `),i()()()()()}m&2&&(n(5),o("isTitle",!0),n(23),o("highlight",a.codeForSnackbarBasic),n(5),o("highlightAuto",a.codeForSnackbarBasicTs),n(2),o("isTitle",!0),n(9),E("ngModel",a.durationInSeconds),n(7),o("highlight",a.codeForSnackbarCustomComponent),n(5),o("highlightAuto",a.codeForSnackbarCustomComponentTs),n(2),o("isTitle",!0),n(9),E("value",a.horizontalPosition),n(15),E("value",a.verticalPosition),n(11),o("highlight",a.codeForSnackbarConfigurable),n(5),o("highlightAuto",a.codeForSnackbarConfigurableTs))},dependencies:[R,U,W,F,V,ne,k,G,z,Q,L,N,Ve,Dt,St,v,y,P,A,_,M,C,T],encapsulation:2})}}return l})();var Sn=`  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start">
              <mat-tab label="Item One">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab label="Item Two">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab label="Item Three">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 3
                </div>
              </mat-tab>
            </mat-tab-group>
`,vn=`  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="center">
              <mat-tab label="Item One">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab label="Item Two">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab label="Item Three">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 3
                </div>
              </mat-tab>
            </mat-tab-group>
`,Tn=`  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="end">
              <mat-tab label="Item One">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab label="Item Two">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab label="Item Three">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 3
                </div>
              </mat-tab>
            </mat-tab-group>
`,_n=`  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start" animationDuration="0ms">
              <mat-tab label="Item One">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab label="Item Two">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab label="Item Three">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 3
                </div>
              </mat-tab>
            </mat-tab-group>
`,Mn=`  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start" animationDuration="2000ms">
              <mat-tab label="Item One">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab label="Item Two">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab label="Item Three">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 3
                </div>
              </mat-tab>
            </mat-tab-group>
`,Cn=`  <mat-tab-group>
              <mat-tab label="Item One">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab label="Item Two">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab label="Item Three">
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 3
                </div>
              </mat-tab>
            </mat-tab-group>
`,En=`  <mat-tab-group>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="phone" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item One
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="heart" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Two
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="user" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Three
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 3
                </div>
              </mat-tab>
            </mat-tab-group>
`,xn=`  <mat-tab-group>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="phone" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="heart" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="user" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 3
                </div>
              </mat-tab>
            </mat-tab-group>
`,In=`  <mat-tab-group headerPosition="below">
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="phone" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item One
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="heart" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Two
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="user" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Three
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 3
                </div>
              </mat-tab>
            </mat-tab-group>
`,yn=`  <mat-tab-group headerPosition="below">
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="phone" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="heart" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="user" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 3
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="file-description" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 4
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="archive" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 5
                </div>
              </mat-tab>
            </mat-tab-group>
`,An=`  <mat-tab-group headerPosition="below">
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="phone" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="heart" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="user" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 3
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="file-description" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 4
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="archive" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-b-12">
                  Content 5
                </div>
              </mat-tab>
            </mat-tab-group>
`,Pn=`  <mat-tab-group fitInkBarToContent>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="phone" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="heart" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="user" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 3
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="file-description" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 4
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="archive" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 5
                </div>
              </mat-tab>
            </mat-tab-group>
`,wn=`  <mat-tab-group>
              <mat-tab label="Item One">
                <ng-template matTabContent>
                  <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                    Content 1 - Loaded: {{ getTimeLoaded(1) | date : "medium" }}
                  </div>
                </ng-template>
              </mat-tab>
              <mat-tab label="Item Two">
                <ng-template matTabContent>
                  <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                    Content 2 - Loaded: {{ getTimeLoaded(2) | date : "medium" }}
                  </div>
                </ng-template>
              </mat-tab>
              <mat-tab label="Item Three">
                <ng-template matTabContent>
                  <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                    Content 3 - Loaded: {{ getTimeLoaded(3) | date : "medium" }}
                  </div>
                </ng-template>
              </mat-tab>
            </mat-tab-group>
`,Dn=`  <mat-tab-group>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="phone" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item One
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 1
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="heart" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Two
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 2
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="user" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Three
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 3
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="phone" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Four
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 4
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="heart" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Five
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 5
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="user" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Six
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 6
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="phone" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Seven
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 7
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="heart" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Eight
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 8
                </div>
              </mat-tab>
              <mat-tab>
                <ng-template mat-tab-label>
                  <div class="d-flex align-items-center">
                    <mat-icon>
                      <i-tabler name="user" class="icon-20 m-r-8"></i-tabler>
                    </mat-icon>
                  </div>
                  Item Nine
                </ng-template>
                <div class="bg-light-primary f-s-14 p-16 rounded m-t-12">
                  Content 9
                </div>
              </mat-tab>
            </mat-tab-group>
`,Ln=`  <nav mat-tab-nav-bar [backgroundColor]="background" [tabPanel]="tabPanel">
              @for(link of links; track link) {
              <a mat-tab-link (click)="activeLink = link" [active]="activeLink == link">
                {{ link }}
              </a>
              }

              <a mat-tab-link disabled>Disabled Link</a>
            </nav>
            <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
            <div class="m-t-12">
              <button mat-flat-button color="primary" (click)="toggleBackground()">
                Toggle background
              </button>
              <button mat-flat-button color="accent" (click)="addLink()" class="m-l-8">
                Add link
              </button>
            </div>
`;var J=`  import {Component} from '@angular/core';
    import {MatTabsModule} from '@angular/material/tabs';

    /**
     * @title Basic tabs
     */
    @Component({
        selector: 'app-tabs',
        imports: [MatTabsModule],
        templateUrl: './tabs.component.html'
    })

    export class AppTabsComponent {
        constructor() {}
    }
`,Nn=`  import {Component} from '@angular/core';
    import {MatTabsModule} from '@angular/material/tabs';

    /**
     * @title background tabs
     */
    @Component({
        selector: 'app-tabs',
        imports: [MatTabsModule],
        templateUrl: './tabs.component.html'
    })

    export class AppTabsComponent {
        constructor() {}

        links = ['Item One', 'Item Second', 'Item Third'];
          activeLink = this.links[0];
          background: ThemePalette = undefined;
        
          toggleBackground() {
            this.background = this.background ? undefined : 'primary';
          }
        
          addLink() {
            this.links.push('Link {this.links.length + 1}');
          }
    }
`,Fn=`  import {Component} from '@angular/core';
    import {DatePipe} from '@angular/common';
    import {MatTabsModule} from '@angular/material/tabs';

    /**
     * @title background tabs
     */
    @Component({
        selector: 'app-tabs',
        imports: [MatTabsModule, DatePipe],
        templateUrl: './tabs.component.html'
    })

    export class AppTabsComponent {
        constructor() {}

        tabLoadTimes: Date[] = [];

    getTimeLoaded(index: number) {
        if (!this.tabLoadTimes[index]) {
        this.tabLoadTimes[index] = new Date();
        }

        return this.tabLoadTimes[index];
    }
        }
`,Bn=`  import {Component} from '@angular/core';
    import {MatTabsModule} from '@angular/material/tabs';

    /**
     * @title Paginated tabs
     */
    @Component({
        selector: 'app-tabs',
        imports: [MatTabsModule],
        templateUrl: './tabs.component.html'
    })

    export class AppTabsComponent {
        constructor() {}

        lotsOfTabs = new Array(30).fill(0).map((_, index) => 'Tab {index}');
        
    }
`,kn=`  import {Component} from '@angular/core';
    import {MatTabsModule} from '@angular/material/tabs';

    /**
     * @title Navbar Background tabs
     */
    @Component({
        selector: 'app-tabs',
        imports: [MatTabsModule],
        templateUrl: './tabs.component.html'
    })

    export class AppTabsComponent {
        constructor() {}

        // background
          links = ['Item One', 'Item Second', 'Item Third'];
          activeLink = this.links[0];
          background: ThemePalette = undefined;
        
          toggleBackground() {
            this.background = this.background ? undefined : 'primary';
          }
        
          addLink() {
            this.links.push('Link {this.links.length + 1}');
          }
        
    }
`;function No(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",36),i()(),e(3," Item One "))}function Fo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",37),i()(),e(3," Item Two "))}function Bo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",38),i()(),e(3," Item Three "))}function ko(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",36),i()())}function Oo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",37),i()())}function Ro(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",38),i()())}function Ho(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",36),i()(),e(3," Item One "))}function Vo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",37),i()(),e(3," Item Two "))}function Go(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",38),i()(),e(3," Item Three "))}function Wo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",36),i()())}function Uo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",37),i()())}function zo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",38),i()())}function jo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",39),i()())}function Ko(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",40),i()())}function Xo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",36),i()(),e(3," Item One "))}function Qo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",37),i()(),e(3," Item Two "))}function qo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",38),i()(),e(3," Item Three "))}function Yo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",36),i()())}function Jo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",37),i()())}function Zo(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",38),i()())}function $o(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",39),i()())}function er(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",40),i()())}function tr(l,c){if(l&1&&(t(0,"div",12),e(1),se(2,"date"),i()),l&2){let p=B();n(),D(" Content 1 - Loaded: ",Ne(2,1,p.getTimeLoaded(1),"medium")," ")}}function ir(l,c){if(l&1&&(t(0,"div",12),e(1),se(2,"date"),i()),l&2){let p=B();n(),D(" Content 2 - Loaded: ",Ne(2,1,p.getTimeLoaded(2),"medium")," ")}}function ar(l,c){if(l&1&&(t(0,"div",12),e(1),se(2,"date"),i()),l&2){let p=B();n(),D(" Content 3 - Loaded: ",Ne(2,1,p.getTimeLoaded(3),"medium")," ")}}function nr(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",36),i()(),e(3," Item One "))}function or(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",37),i()(),e(3," Item Two "))}function rr(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",38),i()(),e(3," Item Three "))}function lr(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",36),i()(),e(3," Item Four "))}function mr(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",37),i()(),e(3," Item Five "))}function pr(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",38),i()(),e(3," Item Six "))}function sr(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",36),i()(),e(3," Item Seven "))}function dr(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",37),i()(),e(3," Item Eight "))}function cr(l,c){l&1&&(t(0,"div",35)(1,"mat-icon"),r(2,"i-tabler",38),i()(),e(3," Item Nine "))}function ur(l,c){if(l&1){let p=O();t(0,"a",41),u("click",function(){let a=b(p).$implicit,d=B();return f(d.activeLink=a)}),e(1),i()}if(l&2){let p=c.$implicit,m=B();o("active",m.activeLink==p),n(),D(" ",p," ")}}var On=(()=>{class l{constructor(){this.codeForTabsBasic=Sn,this.codeForTabsBasicTs=J,this.codeForTabsCenterAlign=vn,this.codeForTabsCenterAlignTs=J,this.codeForTabsRightAlign=Tn,this.codeForTabsRightAlignTs=J,this.codeForTabsNoAnimation=_n,this.codeForTabsNoAnimationTs=J,this.codeForTabsSlowAnimation=Mn,this.codeForTabsSlowAnimationTs=J,this.codeForTabsGroup=Cn,this.codeForTabsGroupTs=J,this.codeForTabsCusomLabel=En,this.codeForTabsCusomLabelTs=J,this.codeForTabsIcon=xn,this.codeForTabsIconTs=J,this.codeForTabsPosition=In,this.codeForTabsPositionTs=J,this.codeForTabsPositionWithIcon=yn,this.codeForTabsPositionWithIconTs=J,this.codeForTabsBackground=An,this.codeForTabsBackgroundTs=Nn,this.codeForTabsFitToBarContent=Pn,this.codeForTabsFitToBarContentTs=J,this.codeForTabsContentLoadedLazily=wn,this.codeForTabsContentLoadedLazilyTs=Fn,this.codeForTabsPaginated=Dn,this.codeForTabsPaginatedTs=Bn,this.codeForTabsNavbarBackground=Ln,this.codeForTabsNavbarBackgroundTs=kn,this.tabLoadTimes=[],this.links=["Item One","Item Second","Item Third"],this.activeLink=this.links[0],this.background=void 0}getTimeLoaded(p){return this.tabLoadTimes[p]||(this.tabLoadTimes[p]=new Date),this.tabLoadTimes[p]}toggleBackground(){this.background=this.background?void 0:"primary"}addLink(){this.links.push(`Link ${this.links.length+1}`)}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-tabs"]],decls:441,vars:47,consts:[["tabPanel",""],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["mat-stretch-tabs","false","mat-align-tabs","start"],["label","Item One"],[1,"bg-light-primary","f-s-14","p-16","rounded","m-t-12"],["label","Item Two"],["label","Item Three"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-stretch-tabs","false","mat-align-tabs","center"],["mat-stretch-tabs","false","mat-align-tabs","end"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","0ms"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","2000ms"],["mat-tab-label",""],["headerPosition","below"],[1,"bg-light-primary","f-s-14","p-16","rounded","m-b-12"],["backgroundColor","primary"],["fitInkBarToContent",""],["matTabContent",""],["mat-tab-nav-bar","",3,"backgroundColor","tabPanel"],["mat-tab-link","",3,"active"],["mat-tab-link","","disabled",""],[1,"m-t-12"],["mat-flat-button","","color","primary",3,"click"],["mat-flat-button","","color","accent",1,"m-l-8",3,"click"],[1,"d-flex","align-items-center"],["name","phone",1,"icon-20","m-r-8"],["name","heart",1,"icon-20","m-r-8"],["name","user",1,"icon-20","m-r-8"],["name","file-description",1,"icon-20","m-r-8"],["name","archive",1,"icon-20","m-r-8"],["mat-tab-link","",3,"click","active"]],template:function(m,a){if(m&1){let d=O();t(0,"mat-card",1)(1,"div",2)(2,"mat-card-title",3),e(3,"Tabs"),i()(),t(4,"mat-card-content",4)(5,"div",5)(6,"div",6)(7,"app-code-view",7)(8,"h4",8),e(9," Basic "),i(),t(10,"div",9)(11,"mat-tab-group",10)(12,"mat-tab",11)(13,"div",12),e(14," Content 1 "),i()(),t(15,"mat-tab",13)(16,"div",12),e(17," Content 2 "),i()(),t(18,"mat-tab",14)(19,"div",12),e(20," Content 3 "),i()()()(),t(21,"div",15)(22,"pre"),e(23,"              "),r(24,"code",16),e(25,`
            `),i()(),t(26,"div",17)(27,"pre"),e(28,"              "),r(29,"code",18),e(30,`
            `),i()()()(),t(31,"div",6)(32,"app-code-view",7)(33,"h4",8),e(34," Center Align "),i(),t(35,"div",9)(36,"mat-tab-group",19)(37,"mat-tab",11)(38,"div",12),e(39," Content 1 "),i()(),t(40,"mat-tab",13)(41,"div",12),e(42," Content 2 "),i()(),t(43,"mat-tab",14)(44,"div",12),e(45," Content 3 "),i()()()(),t(46,"div",15)(47,"pre"),e(48,"              "),r(49,"code",16),e(50,`
            `),i()(),t(51,"div",17)(52,"pre"),e(53,"              "),r(54,"code",18),e(55,`
            `),i()()()(),t(56,"div",6)(57,"app-code-view",7)(58,"h4",8),e(59," Right Align "),i(),t(60,"div",9)(61,"mat-tab-group",20)(62,"mat-tab",11)(63,"div",12),e(64," Content 1 "),i()(),t(65,"mat-tab",13)(66,"div",12),e(67," Content 2 "),i()(),t(68,"mat-tab",14)(69,"div",12),e(70," Content 3 "),i()()()(),t(71,"div",15)(72,"pre"),e(73,"              "),r(74,"code",16),e(75,`
            `),i()(),t(76,"div",17)(77,"pre"),e(78,"              "),r(79,"code",18),e(80,`
            `),i()()()(),t(81,"div",6)(82,"app-code-view",7)(83,"h4",8),e(84," No Animation "),i(),t(85,"div",9)(86,"mat-tab-group",21)(87,"mat-tab",11)(88,"div",12),e(89," Content 1 "),i()(),t(90,"mat-tab",13)(91,"div",12),e(92," Content 2 "),i()(),t(93,"mat-tab",14)(94,"div",12),e(95," Content 3 "),i()()()(),t(96,"div",15)(97,"pre"),e(98,"              "),r(99,"code",16),e(100,`
            `),i()(),t(101,"div",17)(102,"pre"),e(103,"              "),r(104,"code",18),e(105,`
            `),i()()()(),t(106,"div",6)(107,"app-code-view",7)(108,"h4",8),e(109," Slow Animation "),i(),t(110,"div",9)(111,"mat-tab-group",22)(112,"mat-tab",11)(113,"div",12),e(114," Content 1 "),i()(),t(115,"mat-tab",13)(116,"div",12),e(117," Content 2 "),i()(),t(118,"mat-tab",14)(119,"div",12),e(120," Content 3 "),i()()()(),t(121,"div",15)(122,"pre"),e(123,"              "),r(124,"code",16),e(125,`
            `),i()(),t(126,"div",17)(127,"pre"),e(128,"              "),r(129,"code",18),e(130,`
            `),i()()()(),t(131,"div",6)(132,"app-code-view",7)(133,"h4",8),e(134," Tab Group "),i(),t(135,"div",9)(136,"mat-tab-group")(137,"mat-tab",11)(138,"div",12),e(139," Content 1 "),i()(),t(140,"mat-tab",13)(141,"div",12),e(142," Content 2 "),i()(),t(143,"mat-tab",14)(144,"div",12),e(145," Content 3 "),i()()()(),t(146,"div",15)(147,"pre"),e(148,"              "),r(149,"code",16),e(150,`
            `),i()(),t(151,"div",17)(152,"pre"),e(153,"              "),r(154,"code",18),e(155,`
            `),i()()()(),t(156,"div",6)(157,"app-code-view",7)(158,"h4",8),e(159," Cusom Label "),i(),t(160,"div",9)(161,"mat-tab-group")(162,"mat-tab"),S(163,No,4,0,"ng-template",23),t(164,"div",12),e(165," Content 1 "),i()(),t(166,"mat-tab"),S(167,Fo,4,0,"ng-template",23),t(168,"div",12),e(169," Content 2 "),i()(),t(170,"mat-tab"),S(171,Bo,4,0,"ng-template",23),t(172,"div",12),e(173," Content 3 "),i()()()(),t(174,"div",15)(175,"pre"),e(176,"              "),r(177,"code",16),e(178,`
            `),i()(),t(179,"div",17)(180,"pre"),e(181,"              "),r(182,"code",18),e(183,`
            `),i()()()(),t(184,"div",6)(185,"app-code-view",7)(186,"h4",8),e(187," Icon "),i(),t(188,"div",9)(189,"mat-tab-group")(190,"mat-tab"),S(191,ko,3,0,"ng-template",23),t(192,"div",12),e(193," Content 1 "),i()(),t(194,"mat-tab"),S(195,Oo,3,0,"ng-template",23),t(196,"div",12),e(197," Content 2 "),i()(),t(198,"mat-tab"),S(199,Ro,3,0,"ng-template",23),t(200,"div",12),e(201," Content 3 "),i()()()(),t(202,"div",15)(203,"pre"),e(204,"              "),r(205,"code",16),e(206,`
            `),i()(),t(207,"div",17)(208,"pre"),e(209,"              "),r(210,"code",18),e(211,`
            `),i()()()(),t(212,"div",6)(213,"app-code-view",7)(214,"h4",8),e(215," Position "),i(),t(216,"div",9)(217,"mat-tab-group",24)(218,"mat-tab"),S(219,Ho,4,0,"ng-template",23),t(220,"div",25),e(221," Content 1 "),i()(),t(222,"mat-tab"),S(223,Vo,4,0,"ng-template",23),t(224,"div",25),e(225," Content 2 "),i()(),t(226,"mat-tab"),S(227,Go,4,0,"ng-template",23),t(228,"div",25),e(229," Content 3 "),i()()()(),t(230,"div",15)(231,"pre"),e(232,"              "),r(233,"code",16),e(234,`
            `),i()(),t(235,"div",17)(236,"pre"),e(237,"              "),r(238,"code",18),e(239,`
            `),i()()()(),t(240,"div",6)(241,"app-code-view",7)(242,"h4",8),e(243," Position with Icons "),i(),t(244,"div",9)(245,"mat-tab-group",24)(246,"mat-tab"),S(247,Wo,3,0,"ng-template",23),t(248,"div",25),e(249," Content 1 "),i()(),t(250,"mat-tab"),S(251,Uo,3,0,"ng-template",23),t(252,"div",25),e(253," Content 2 "),i()(),t(254,"mat-tab"),S(255,zo,3,0,"ng-template",23),t(256,"div",25),e(257," Content 3 "),i()(),t(258,"mat-tab"),S(259,jo,3,0,"ng-template",23),t(260,"div",25),e(261," Content 4 "),i()(),t(262,"mat-tab"),S(263,Ko,3,0,"ng-template",23),t(264,"div",25),e(265," Content 5 "),i()()()(),t(266,"div",15)(267,"pre"),e(268,"              "),r(269,"code",16),e(270,`
            `),i()(),t(271,"div",17)(272,"pre"),e(273,"              "),r(274,"code",18),e(275,`
            `),i()()()(),t(276,"div",6)(277,"app-code-view",7)(278,"h4",8),e(279," Background "),i(),t(280,"div",9)(281,"mat-tab-group",26)(282,"mat-tab"),S(283,Xo,4,0,"ng-template",23),t(284,"div",12),e(285," Content 1 "),i()(),t(286,"mat-tab"),S(287,Qo,4,0,"ng-template",23),t(288,"div",12),e(289," Content 2 "),i()(),t(290,"mat-tab"),S(291,qo,4,0,"ng-template",23),t(292,"div",12),e(293," Content 3 "),i()()()(),t(294,"div",15)(295,"pre"),e(296,"              "),r(297,"code",16),e(298,`
            `),i()(),t(299,"div",17)(300,"pre"),e(301,"              "),r(302,"code",18),e(303,`
            `),i()()()(),t(304,"div",6)(305,"app-code-view",7)(306,"h4",8),e(307," Fit to Bar Content "),i(),t(308,"div",9)(309,"mat-tab-group",27)(310,"mat-tab"),S(311,Yo,3,0,"ng-template",23),t(312,"div",12),e(313," Content 1 "),i()(),t(314,"mat-tab"),S(315,Jo,3,0,"ng-template",23),t(316,"div",12),e(317," Content 2 "),i()(),t(318,"mat-tab"),S(319,Zo,3,0,"ng-template",23),t(320,"div",12),e(321," Content 3 "),i()(),t(322,"mat-tab"),S(323,$o,3,0,"ng-template",23),t(324,"div",12),e(325," Content 4 "),i()(),t(326,"mat-tab"),S(327,er,3,0,"ng-template",23),t(328,"div",12),e(329," Content 5 "),i()()()(),t(330,"div",15)(331,"pre"),e(332,"              "),r(333,"code",16),e(334,`
            `),i()(),t(335,"div",17)(336,"pre"),e(337,"              "),r(338,"code",18),e(339,`
            `),i()()()(),t(340,"div",6)(341,"app-code-view",7)(342,"h4",8),e(343," Tab Content loaded lazily "),i(),t(344,"div",9)(345,"mat-tab-group")(346,"mat-tab",11),S(347,tr,3,4,"ng-template",28),i(),t(348,"mat-tab",13),S(349,ir,3,4,"ng-template",28),i(),t(350,"mat-tab",14),S(351,ar,3,4,"ng-template",28),i()()(),t(352,"div",15)(353,"pre"),e(354,"              "),r(355,"code",16),e(356,`
            `),i()(),t(357,"div",17)(358,"pre"),e(359,"              "),r(360,"code",18),e(361,`
            `),i()()()(),t(362,"div",6)(363,"app-code-view",7)(364,"h4",8),e(365," Paginated tabs "),i(),t(366,"div",9)(367,"mat-tab-group")(368,"mat-tab"),S(369,nr,4,0,"ng-template",23),t(370,"div",12),e(371," Content 1 "),i()(),t(372,"mat-tab"),S(373,or,4,0,"ng-template",23),t(374,"div",12),e(375," Content 2 "),i()(),t(376,"mat-tab"),S(377,rr,4,0,"ng-template",23),t(378,"div",12),e(379," Content 3 "),i()(),t(380,"mat-tab"),S(381,lr,4,0,"ng-template",23),t(382,"div",12),e(383," Content 4 "),i()(),t(384,"mat-tab"),S(385,mr,4,0,"ng-template",23),t(386,"div",12),e(387," Content 5 "),i()(),t(388,"mat-tab"),S(389,pr,4,0,"ng-template",23),t(390,"div",12),e(391," Content 6 "),i()(),t(392,"mat-tab"),S(393,sr,4,0,"ng-template",23),t(394,"div",12),e(395," Content 7 "),i()(),t(396,"mat-tab"),S(397,dr,4,0,"ng-template",23),t(398,"div",12),e(399," Content 8 "),i()(),t(400,"mat-tab"),S(401,cr,4,0,"ng-template",23),t(402,"div",12),e(403," Content 9 "),i()()()(),t(404,"div",15)(405,"pre"),e(406,"              "),r(407,"code",16),e(408,`
            `),i()(),t(409,"div",17)(410,"pre"),e(411,"              "),r(412,"code",18),e(413,`
            `),i()()()(),t(414,"div",6)(415,"app-code-view",7)(416,"h4",8),e(417," Tab Navbar Background "),i(),t(418,"div",9)(419,"nav",29),q(420,ur,2,2,"a",30,ae),t(422,"a",31),e(423,"Disabled Link"),i()(),r(424,"mat-tab-nav-panel",null,0),t(426,"div",32)(427,"button",33),u("click",function(){return b(d),f(a.toggleBackground())}),e(428," Toggle background "),i(),t(429,"button",34),u("click",function(){return b(d),f(a.addLink())}),e(430," Add link "),i()()(),t(431,"div",15)(432,"pre"),e(433,"              "),r(434,"code",16),e(435,`
            `),i()(),t(436,"div",17)(437,"pre"),e(438,"              "),r(439,"code",18),e(440,`
            `),i()()()()()()()}if(m&2){let d=w(425);n(7),o("isTitle",!0),n(17),o("highlight",a.codeForTabsBasic),n(5),o("highlightAuto",a.codeForTabsBasicTs),n(3),o("isTitle",!0),n(17),o("highlight",a.codeForTabsCenterAlign),n(5),o("highlightAuto",a.codeForTabsCenterAlignTs),n(3),o("isTitle",!0),n(17),o("highlight",a.codeForTabsRightAlign),n(5),o("highlightAuto",a.codeForTabsRightAlignTs),n(3),o("isTitle",!0),n(17),o("highlight",a.codeForTabsNoAnimation),n(5),o("highlightAuto",a.codeForTabsNoAnimationTs),n(3),o("isTitle",!0),n(17),o("highlight",a.codeForTabsSlowAnimation),n(5),o("highlightAuto",a.codeForTabsSlowAnimationTs),n(3),o("isTitle",!0),n(17),o("highlight",a.codeForTabsGroup),n(5),o("highlightAuto",a.codeForTabsGroupTs),n(3),o("isTitle",!0),n(20),o("highlight",a.codeForTabsCusomLabel),n(5),o("highlightAuto",a.codeForTabsCusomLabelTs),n(3),o("isTitle",!0),n(20),o("highlight",a.codeForTabsIcon),n(5),o("highlightAuto",a.codeForTabsIconTs),n(3),o("isTitle",!0),n(20),o("highlight",a.codeForTabsPosition),n(5),o("highlightAuto",a.codeForTabsPositionTs),n(3),o("isTitle",!0),n(28),o("highlight",a.codeForTabsPositionWithIcon),n(5),o("highlightAuto",a.codeForTabsPositionWithIconTs),n(3),o("isTitle",!0),n(20),o("highlight",a.codeForTabsBackground),n(5),o("highlightAuto",a.codeForTabsBackgroundTs),n(3),o("isTitle",!0),n(28),o("highlight",a.codeForTabsFitToBarContent),n(5),o("highlightAuto",a.codeForTabsFitToBarContentTs),n(3),o("isTitle",!0),n(14),o("highlight",a.codeForTabsContentLoadedLazily),n(5),o("highlightAuto",a.codeForTabsContentLoadedLazilyTs),n(3),o("isTitle",!0),n(44),o("highlight",a.codeForTabsPaginated),n(5),o("highlightAuto",a.codeForTabsPaginatedTs),n(3),o("isTitle",!0),n(4),o("backgroundColor",a.background)("tabPanel",d),n(),Y(a.links),n(14),o("highlight",a.codeForTabsNavbarBackground),n(5),o("highlightAuto",a.codeForTabsNavbarBackgroundTs)}},dependencies:[Se,Yt,Jt,Zt,$t,ei,ii,ti,v,y,P,A,X,K,ee,le,L,N,_,M,C,T,Fe],encapsulation:2})}}return l})();var Rn=`  <div class="row">
          <div class="col-lg-4">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Message</mat-label>
              <input matInput value="Disco party!" #message />
            </mat-form-field>
          </div>
          <div class="col-lg-4">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Action</mat-label>
              <input matInput value="Dance" #action />
            </mat-form-field>
          </div>
          <div class="col-lg-4">
            <button mat-flat-button color="primary" (click)="openSnackBar(message.value, action.value)">
              Show snack-bar
            </button>
          </div>
        </div>
`,Hn=`  <mat-toolbar color="primary">
          <mat-toolbar-row>
            <span>Custom Toolbar</span>
          </mat-toolbar-row>

          <mat-toolbar-row>
            <span>Second Line</span>
            <span class="m-l-auto"></span>
            <mat-icon class="example-icon" aria-hidden="false"
              aria-label="Example user verified icon">verified_user</mat-icon>
          </mat-toolbar-row>

          <mat-toolbar-row>
            <span>Third Line</span>
            <span class="m-l-auto"></span>
            <div class="d-flex gap-8 align-items-center">
              <mat-icon class="example-icon" aria-hidden="false" aria-label="Example heart icon">favorite</mat-icon>
              <mat-icon class="example-icon" aria-hidden="false" aria-label="Example delete icon">delete</mat-icon>
            </div>
          </mat-toolbar-row>
        </mat-toolbar>
`,Vn=`  <mat-toolbar>
          <span>Modernize</span>
        </mat-toolbar>
`;var it=`  import {Component, inject} from '@angular/core';
    import {MatIconModule} from '@angular/material/icon';
    import {MatButtonModule} from '@angular/material/button';
    import {MatToolbarModule} from '@angular/material/toolbar';

    /**
     * @title Basic toolbar
     */
    @Component({
        selector: 'app-toolbar',
        imports: [MatToolbarModule, MatButtonModule, MatIconModule],
        templateUrl: './toolbar.component.html'
    })

    export class AppToolbarComponent {
        constructor() {}
    }
`;var Gn=(()=>{class l{constructor(){this.codeForToolbarBasic=Rn,this.codeForToolbarBasicTs=it,this.codeForToolbarMultiRow=Hn,this.codeForToolbarMultiRowTs=it,this.codeForToolbarOnlyBrand=Vn,this.codeForToolbarOnlyBrandTs=it}ngOnInit(){}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-toolbar"]],decls:82,vars:9,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon"],["name","align-left",1,"icon-20"],[1,"m-l-auto"],["mat-icon-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon"],["name","heart-filled",1,"icon-20"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"],["name","share",1,"icon-20"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["color","primary"],["aria-hidden","false","aria-label","Example user verified icon",1,"example-icon"],[1,"d-flex","gap-8","align-items-center"],["aria-hidden","false","aria-label","Example heart icon",1,"example-icon"],["aria-hidden","false","aria-label","Example delete icon",1,"example-icon"]],template:function(m,a){m&1&&(t(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),e(3,"Toolbar"),i()(),t(4,"mat-card-content",3)(5,"app-code-view",4)(6,"h4",5),e(7," Basic "),i(),t(8,"div",6)(9,"mat-toolbar")(10,"button",7)(11,"mat-icon"),r(12,"i-tabler",8),i()(),t(13,"span"),e(14,"My App"),i(),r(15,"span",9),t(16,"button",10)(17,"mat-icon"),r(18,"i-tabler",11),i()(),t(19,"button",12)(20,"mat-icon"),r(21,"i-tabler",13),i()()()(),t(22,"div",14)(23,"pre"),e(24,"          "),r(25,"code",15),e(26,`
        `),i()(),t(27,"div",16)(28,"pre"),e(29,"          "),r(30,"code",17),e(31,`
        `),i()()(),t(32,"app-code-view",4)(33,"h4",5),e(34," Multi Row "),i(),t(35,"div",6)(36,"mat-toolbar",18)(37,"mat-toolbar-row")(38,"span"),e(39,"Custom Toolbar"),i()(),t(40,"mat-toolbar-row")(41,"span"),e(42,"Second Line"),i(),r(43,"span",9),t(44,"mat-icon",19),e(45,"verified_user"),i()(),t(46,"mat-toolbar-row")(47,"span"),e(48,"Third Line"),i(),r(49,"span",9),t(50,"div",20)(51,"mat-icon",21),e(52,"favorite"),i(),t(53,"mat-icon",22),e(54,"delete"),i()()()()(),t(55,"div",14)(56,"pre"),e(57,"          "),r(58,"code",15),e(59,`
        `),i()(),t(60,"div",16)(61,"pre"),e(62,"          "),r(63,"code",17),e(64,`
        `),i()()(),t(65,"app-code-view",4)(66,"h4",5),e(67," Only Brand "),i(),t(68,"div",6)(69,"mat-toolbar")(70,"span"),e(71,"Modernize"),i()()(),t(72,"div",14)(73,"pre"),e(74,"          "),r(75,"code",15),e(76,`
        `),i()(),t(77,"div",16)(78,"pre"),e(79,"          "),r(80,"code",17),e(81,`
        `),i()()()()()),m&2&&(n(5),o("isTitle",!0),n(20),o("highlight",a.codeForToolbarBasic),n(5),o("highlightAuto",a.codeForToolbarBasicTs),n(2),o("isTitle",!0),n(26),o("highlight",a.codeForToolbarMultiRow),n(5),o("highlightAuto",a.codeForToolbarMultiRowTs),n(2),o("isTitle",!0),n(10),o("highlight",a.codeForToolbarOnlyBrand),n(5),o("highlightAuto",a.codeForToolbarOnlyBrandTs))},dependencies:[kt,Bt,Ft,L,Oe,X,K,v,y,P,A,ee,le,_,M,C,T],encapsulation:2})}}return l})();var at=`  import {Component} from '@angular/core';
    import {MatTooltipModule} from '@angular/material/tooltip';
    import {MatButtonModule} from '@angular/material/button';

    /**
     * @title Basic tooltip
     */
    @Component({
        selector: 'app-tooltips',
        imports: [MatButtonModule, MatTooltipModule],
        templateUrl: './tooltips.component.html'
    })

    export class AppTooltipsComponent {
        constructor() {}
    }
`,Wn=`  import {Component} from '@angular/core';
    import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
    import {MatCheckboxModule} from '@angular/material/checkbox';
    import {MatTooltipModule} from '@angular/material/tooltip';
    import {MatButtonModule} from '@angular/material/button';

    /**
     * @title Tooltip that can be disabled
     */
    @Component({
        selector: 'app-tooltips',
        imports: [MatButtonModule, MatTooltipModule, MatCheckboxModule, FormsModule, ReactiveFormsModule],
        templateUrl: './tooltips.component.html'
    })

    export class AppTooltipsComponent {
        constructor() {}

        disabled = new FormControl(false);
    }
`,Un=`  import {Component} from '@angular/core';
    import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
    import {MatTooltipModule} from '@angular/material/tooltip';
    import {MatButtonModule} from '@angular/material/button';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';

    /**
     * @title Tooltip with a show and hide delay
     */
    @Component({
        selector: 'app-tooltips',
        imports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatTooltipModule,
        ],
        templateUrl: './tooltips.component.html'
    })

    export class AppTooltipsComponent {
        constructor() {}

        showDelay = new FormControl(1000);
        hideDelay = new FormControl(2000);
    }
`,zn=`  import {Component} from '@angular/core';
    import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
    import {MatTooltipModule} from '@angular/material/tooltip';
    import {MatButtonModule} from '@angular/material/button';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';

    /**
     * @title Tooltip with a changing message
     */
    @Component({
        selector: 'app-tooltips',
        imports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatTooltipModule,
        ],
        templateUrl: './tooltips.component.html'
    })

    export class AppTooltipsComponent {
        constructor() {}

        message = new FormControl('Info about the action');
    }
`;var jn=`  <button mat-flat-button color="primary" matTooltip="Info about the action">
              Button
            </button>
`,Kn=`  <button mat-flat-button color="primary" matTooltip="Info about the action">
              Button
            </button>
`,Xn=`  <button mat-flat-button color="primary" matTooltip="Info about the action"
              [matTooltipDisabled]="disabled.value" class="m-r-8">
              Action
            </button>

            <mat-checkbox [formControl]="disabled" class="example-disabled-checkbox">
              Tooltip disabled
            </mat-checkbox>
`,Qn=`  <button mat-flat-button color="primary" #tooltip="matTooltip" matTooltip="Info about the action"
              matTooltipPosition="below" matTooltipHideDelay="100000">
              Below
            </button>
            <button mat-flat-button color="accent" #tooltip="matTooltip" matTooltip="Info about the action"
              matTooltipPosition="above" class="m-l-8" matTooltipHideDelay="100000">
              Above
            </button>
            <button mat-flat-button color="warn" #tooltip="matTooltip" matTooltip="Info about the action"
              matTooltipPosition="left" class="m-l-8" matTooltipHideDelay="100000">
              Left
            </button>
            <button mat-flat-button color="primary" #tooltip="matTooltip" matTooltip="Info about the action"
              matTooltipPosition="right" class="m-l-8" matTooltipHideDelay="100000">
              Right
            </button>
`,qn=`  <div class="row">
              <div class="col-sm-4">
                <mat-form-field class="w-100" appearance="outline">
                  <mat-label>Show delay</mat-label>
                  <input matInput type="number" [formControl]="showDelay" />
                  <mat-hint>milliseconds</mat-hint>
                </mat-form-field>
              </div>
              <div class="col-sm-4">
                <mat-form-field class="w-100" appearance="outline">
                  <mat-label>Hide delay</mat-label>
                  <input matInput type="number" [formControl]="hideDelay2" />
                  <mat-hint>milliseconds</mat-hint>
                </mat-form-field>
              </div>
              <div class="col-sm-4">
                <button mat-flat-button color="primary" matTooltip="Info about the action"
                  [matTooltipShowDelay]="showDelay.value" [matTooltipHideDelay]="hideDelay2.value">
                  Action
                </button>
              </div>
            </div>
`,Yn=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Tooltip message</mat-label>
              <input matInput [formControl]="message" />
            </mat-form-field>

            <button mat-flat-button color="primary" [matTooltip]="message.value || ''"
              aria-label="Button that displays a tooltip with a custom message">
              Action
            </button>
`;var Jn=(()=>{class l{constructor(){this.codeForTooltipsBasic=jn,this.codeForTooltipsBasicTs=at,this.codeForTooltipsUppercase=Kn,this.codeForTooltipsUppercaseTs=at,this.codeForTooltipsDisabledClick=Xn,this.codeForTooltipsDisabledClickTs=Wn,this.codeForTooltipsPosition=Qn,this.codeForTooltipsPositionTs=at,this.codeForTooltipsShowAndHide=qn,this.codeForTooltipsShowAndHideTs=Un,this.codeForTooltipsChangeMessage=Yn,this.codeForTooltipsChangeMessageTs=zn,this.disabled=new de(!1),this.showDelay=new de(1e3),this.hideDelay2=new de(2e3),this.message=new de("Info about the action")}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-tooltips"]],decls:140,vars:26,consts:[["tooltip","matTooltip"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["mat-flat-button","","color","primary","matTooltip","Info about the action"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-flat-button","","color","primary","matTooltip","Info about the action","matTooltipClass","text-uppercase"],["mat-flat-button","","color","primary","matTooltip","Info about the action",1,"m-r-8",3,"matTooltipDisabled"],[1,"example-disabled-checkbox",3,"formControl"],["mat-flat-button","","color","primary","matTooltip","Info about the action","matTooltipPosition","below","matTooltipHideDelay","100000"],["mat-flat-button","","color","accent","matTooltip","Info about the action","matTooltipPosition","above","matTooltipHideDelay","100000",1,"m-l-8"],["mat-flat-button","","color","warn","matTooltip","Info about the action","matTooltipPosition","left","matTooltipHideDelay","100000",1,"m-l-8"],["mat-flat-button","","color","primary","matTooltip","Info about the action","matTooltipPosition","right","matTooltipHideDelay","100000",1,"m-l-8"],[1,"col-sm-4"],["appearance","outline",1,"w-100"],["matInput","","type","number",3,"formControl"],["mat-flat-button","","color","primary","matTooltip","Info about the action",3,"matTooltipShowDelay","matTooltipHideDelay"],["matInput","",3,"formControl"],["mat-flat-button","","color","primary","aria-label","Button that displays a tooltip with a custom message",3,"matTooltip"]],template:function(m,a){m&1&&(t(0,"mat-card",1)(1,"div",2)(2,"mat-card-title",3),e(3,"Tooltips"),i()(),t(4,"mat-card-content",4)(5,"div",5)(6,"div",6)(7,"app-code-view",7)(8,"h4",8),e(9," Basic "),i(),t(10,"div",9)(11,"button",10),e(12," Button "),i()(),t(13,"div",11)(14,"pre"),e(15,"              "),r(16,"code",12),e(17,`
            `),i()(),t(18,"div",13)(19,"pre"),e(20,"              "),r(21,"code",14),e(22,`
            `),i()()()(),t(23,"div",6)(24,"app-code-view",7)(25,"h4",8),e(26," Uppercase "),i(),t(27,"div",9)(28,"button",15),e(29," Button "),i()(),t(30,"div",11)(31,"pre"),e(32,"              "),r(33,"code",12),e(34,`
            `),i()(),t(35,"div",13)(36,"pre"),e(37,"              "),r(38,"code",14),e(39,`
            `),i()()()(),t(40,"div",6)(41,"app-code-view",7)(42,"h4",8),e(43," Disabled on click "),i(),t(44,"div",9)(45,"button",16),e(46," Action "),i(),t(47,"mat-checkbox",17),e(48," Tooltip disabled "),i()(),t(49,"div",11)(50,"pre"),e(51,"              "),r(52,"code",12),e(53,`
            `),i()(),t(54,"div",13)(55,"pre"),e(56,"              "),r(57,"code",14),e(58,`
            `),i()()()(),t(59,"div",6)(60,"app-code-view",7)(61,"h4",8),e(62," Position "),i(),t(63,"div",9)(64,"button",18,0),e(66," Below "),i(),t(67,"button",19,0),e(69," Above "),i(),t(70,"button",20,0),e(72," Left "),i(),t(73,"button",21,0),e(75," Right "),i()(),t(76,"div",11)(77,"pre"),e(78,"              "),r(79,"code",12),e(80,`
            `),i()(),t(81,"div",13)(82,"pre"),e(83,"              "),r(84,"code",14),e(85,`
            `),i()()()(),t(86,"div",6)(87,"app-code-view",7)(88,"h4",8),e(89," Show and Hide "),i(),t(90,"div",9)(91,"div",5)(92,"div",22)(93,"mat-form-field",23)(94,"mat-label"),e(95,"Show delay"),i(),r(96,"input",24),t(97,"mat-hint"),e(98,"milliseconds"),i()()(),t(99,"div",22)(100,"mat-form-field",23)(101,"mat-label"),e(102,"Hide delay"),i(),r(103,"input",24),t(104,"mat-hint"),e(105,"milliseconds"),i()()(),t(106,"div",22)(107,"button",25),e(108," Action "),i()()()(),t(109,"div",11)(110,"pre"),e(111,"              "),r(112,"code",12),e(113,`
            `),i()(),t(114,"div",13)(115,"pre"),e(116,"              "),r(117,"code",14),e(118,`
            `),i()()()(),t(119,"div",6)(120,"app-code-view",7)(121,"h4",8),e(122," Change Message "),i(),t(123,"div",9)(124,"mat-form-field",23)(125,"mat-label"),e(126,"Tooltip message"),i(),r(127,"input",26),i(),t(128,"button",27),e(129," Action "),i()(),t(130,"div",11)(131,"pre"),e(132,"              "),r(133,"code",12),e(134,`
            `),i()(),t(135,"div",13)(136,"pre"),e(137,"              "),r(138,"code",14),e(139,`
            `),i()()()()()()()),m&2&&(n(7),o("isTitle",!0),n(9),o("highlight",a.codeForTooltipsBasic),n(5),o("highlightAuto",a.codeForTooltipsBasicTs),n(3),o("isTitle",!0),n(9),o("highlight",a.codeForTooltipsUppercase),n(5),o("highlightAuto",a.codeForTooltipsUppercaseTs),n(3),o("isTitle",!0),n(4),o("matTooltipDisabled",a.disabled.value),n(2),o("formControl",a.disabled),n(5),o("highlight",a.codeForTooltipsDisabledClick),n(5),o("highlightAuto",a.codeForTooltipsDisabledClickTs),n(3),o("isTitle",!0),n(19),o("highlight",a.codeForTooltipsPosition),n(5),o("highlightAuto",a.codeForTooltipsPositionTs),n(3),o("isTitle",!0),n(9),o("formControl",a.showDelay),n(7),o("formControl",a.hideDelay2),n(4),o("matTooltipShowDelay",a.showDelay.value)("matTooltipHideDelay",a.hideDelay2.value),n(5),o("highlight",a.codeForTooltipsShowAndHide),n(5),o("highlightAuto",a.codeForTooltipsShowAndHideTs),n(3),o("isTitle",!0),n(7),o("formControl",a.message),n(),o("matTooltip",a.message.value||""),n(5),o("highlight",a.codeForTooltipsChangeMessage),n(5),o("highlightAuto",a.codeForTooltipsChangeMessageTs))},dependencies:[R,U,W,yt,Ve,F,V,ne,k,ue,ke,L,N,Mi,Pt,v,y,P,A,z,Q,re,oe,_,M,C,T],encapsulation:2})}}return l})();var Ad=[{path:"",children:[{path:"badge",component:ki,data:{title:"Badge",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Badge"}]}},{path:"expansion",component:ba,data:{title:"Expansion Panel",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Expansion Panel"}]}},{path:"chips",component:Qi,data:{title:"Chip",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Chip"}]}},{path:"dialog",component:oa,data:{title:"Dialog",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Dialog"}]}},{path:"lists",component:xa,data:{title:"Lists",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Lists"}]}},{path:"divider",component:pa,data:{title:"Divider",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Divider"}]}},{path:"menu",component:wa,data:{title:"Menu",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Menu"}]}},{path:"paginator",component:Na,data:{title:"Paginator",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Paginator"}]}},{path:"progress",component:Ka,data:{title:"Progress",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Progress"}]}},{path:"progress-spinner",component:Ha,data:{title:"Progress Spinner",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Progress Spinner"}]}},{path:"ripples",component:qa,data:{title:"Ripples",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Ripples"}]}},{path:"slide-toggle",component:an,data:{title:"Slide Toggle",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Slide Toggle"}]}},{path:"slider",component:sn,data:{title:"Slider",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Slider"}]}},{path:"snackbar",component:fn,data:{title:"Snackbar",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Snackbar"}]}},{path:"tabs",component:On,data:{title:"Tabs",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Tabs"}]}},{path:"toolbar",component:Gn,data:{title:"Toolbar",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Toolbar"}]}},{path:"tooltips",component:Jn,data:{title:"Tooltips",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Tooltips"}]}}]}];export{Ad as UiComponentsRoutes};
