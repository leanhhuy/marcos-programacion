import{a as wi,c as Di,e as Li}from"./chunk-4AMEYDJJ.js";import{a as x}from"./chunk-BWXQIUC7.js";import{b as O}from"./chunk-INFJILZO.js";import{e as N,f as P}from"./chunk-Y7E7CANW.js";import{a as ge,b as le}from"./chunk-GJBHPO4L.js";import{$ as di,A as Je,F as Vt,G as Wt,H as Gt,I as Jt,J as Zt,K as $t,L as et,M as tt,N as ei,O as ti,Q as ii,R as it,aa as si,ba as ci,ca as ui,da as gi,ea as hi,fa as Si,ga as Ti,ha as vi,ia as bi,ja as fi,ka as _i,la as Ei,ma as Ci,oa as xi,p as Ut,pa as at,q as ze,qa as ct,r as je,ra as nt,s as fe,sa as Oe,t as _e,ta as Be,u as Me,ua as Ce,v as Rt,va as ye,w as Ie,wa as Ni,x as qe,xa as Pi,y as Qe,ya as Ai,z as Ye}from"./chunk-KEVDZ7EV.js";import{a as Ft,b as Mi,c as Ii,d as Oi,e as Bi,f as yi}from"./chunk-BPMXZUA6.js";import{d as Ht,e as Xe,f as jt,g as Kt,h as Xt,i as qt,j as Qt,k as $e,l as Yt}from"./chunk-B4UV4YR7.js";import{$ as Ct,$a as yt,$b as ee,B as It,Bb as Ge,Cb as k,Fb as U,Ga as K,Ia as xt,Jb as G,Kb as te,La as V,Lb as Y,Ma as Nt,Pa as Pt,Pb as kt,Qa as Te,Qb as Ke,Rb as w,Sa as X,Sb as D,Ta as Ot,Tb as L,U as Et,Ua as se,Va as Ve,Xa as We,Xb as C,Yb as Ze,Zb as zt,_a as Bt,_b as $,ac as ai,bc as ni,cc as oi,d as Mt,dc as ri,e as b,eb as At,ec as li,f as I,fc as pi,gc as mi,hb as wt,hc as Ee,jb as R,kb as be,mb as q,ob as Dt,tb as Q,ub as Lt,yb as ce,zb as ue}from"./chunk-ZDUEIW35.js";import{o as He}from"./chunk-F6ZH6GOJ.js";import{$b as bt,Bc as t,Ca as Pe,Cc as s,Dc as p,Ec as Z,Fb as E,Fc as B,Gc as y,Hc as A,Lc as ft,Mc as _t,Ob as Tt,Pb as ve,Qb as oe,Rb as re,Tb as de,Ub as ie,Vb as ae,Vc as n,Wb as l,Wc as o,Xb as i,Xc as Re,Yb as a,Zb as d,_b as vt,ec as W,jb as e,jd as st,ka as me,kc as T,mc as H,qa as _,qc as Fe,ra as M,rc as Ue,sc as ke,tb as Se,wc as F,zb as v}from"./chunk-UUJKCIGR.js";import"./chunk-6NE7JDAX.js";var ot=`  import {Component} from '@angular/core';
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
`,Fi=`  import {Component} from '@angular/core';
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
`,Ui=`  import {Component} from '@angular/core';
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
`;var ki=`  <div matBadge="4" matBadgeOverlap="false" class="d-inline">
            Text with a badge
        </div>
`,Ri=`   <div matBadge="1" matBadgeSize="small" class="d-inline">
            Text with small badge
          </div>
          <div matBadge="1" matBadgeSize="large" class="d-inline">
            Text with large badge
          </div>
`,Hi=`   <p class="f-w-500 text-muted">
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
`,Vi=`  <p class="f-w-500 text-muted">
            Icon with a badge
            <mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>
          </p>
`,Wi=`  <p>
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
`;var Gi=(()=>{class m{constructor(){this.hidden=!1,this.codeForTextBadge=ki,this.codeForTextBadgeTs=ot,this.codeForSizeBadge=Ri,this.codeForSizeBadgeTs=ot,this.codeForButtonBadge=Hi,this.codeForButtonBadgeTs=Fi,this.codeForIconBadge=Vi,this.codeForIconBadgeTs=ot,this.codeForButtonTogglesBadge=Wi,this.codeForButtonTogglesBadgeTs=Ui}ngOnInit(){}toggleBadgeVisibility(){this.hidden=!this.hidden}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-badge"]],decls:94,vars:38,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24","d-flex","align-items-center","justify-content-between"],[1,"m-b-0"],[1,"b-t-1"],["output",""],["matBadge","4","matBadgeOverlap","false",1,"d-inline"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matBadge","1","matBadgeSize","small",1,"d-inline"],["matBadge","1","matBadgeSize","large",1,"d-inline"],[1,"f-w-500","text-muted"],["mat-flat-button","","color","primary","matBadge","8","matBadgePosition","before","matBadgeColor","accent"],["matBadge","15","matBadgeColor","warn"],["mat-flat-button","","color","primary","matBadge","7",3,"click","matBadgeHidden"]],template:function(c,r){c&1&&(i(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",3)(6,"app-code-view")(7,"div",4)(8,"div",5),t(9),n(10,"translate"),a()(),i(11,"div",6)(12,"pre"),t(13,"          "),d(14,"code",7),t(15,`
        `),a()(),i(16,"div",8)(17,"pre"),t(18,"          "),d(19,"code",9),t(20,`
        `),a()()(),i(21,"app-code-view")(22,"div",4)(23,"div",10),t(24),n(25,"translate"),a(),d(26,"br")(27,"br"),i(28,"div",11),t(29),n(30,"translate"),a()(),i(31,"div",6)(32,"pre"),t(33,"          "),d(34,"code",7),t(35,`
        `),a()(),i(36,"div",8)(37,"pre"),t(38,"          "),d(39,"code",9),t(40,`
        `),a()()(),i(41,"app-code-view")(42,"div",4)(43,"p",12),t(44),n(45,"translate"),i(46,"button",13),t(47),n(48,"translate"),a()()(),i(49,"div",6)(50,"pre"),t(51,"          "),d(52,"code",7),t(53,`
        `),a()(),i(54,"div",8)(55,"pre"),t(56,"          "),d(57,"code",9),t(58,`
        `),a()()(),i(59,"app-code-view")(60,"div",4)(61,"p",12),t(62),n(63,"translate"),i(64,"mat-icon",14),t(65,"home"),a()()(),i(66,"div",6)(67,"pre"),t(68,"          "),d(69,"code",7),t(70,`
        `),a()(),i(71,"div",8)(72,"pre"),t(73,"          "),d(74,"code",9),t(75,`
        `),a()()(),i(76,"app-code-view")(77,"div",4)(78,"p"),t(79),n(80,"translate"),i(81,"button",15),T("click",function(){return r.toggleBadgeVisibility()}),t(82),n(83,"translate"),a()()(),i(84,"div",6)(85,"pre"),t(86,"          "),d(87,"code",7),t(88,`
        `),a()(),i(89,"div",8)(90,"pre"),t(91,"          "),d(92,"code",9),t(93,`
        `),a()()()()()),c&2&&(e(3),s(o(4,20,"UI_COMPONENTS.badge.title")),e(6),p(" ",o(10,22,"UI_COMPONENTS.badge.textWithBadge")," "),e(5),l("highlight",r.codeForTextBadge),e(5),l("highlightAuto",r.codeForTextBadgeTs),e(5),p(" ",o(25,24,"UI_COMPONENTS.badge.textWithSmallBadge")," "),e(5),p(" ",o(30,26,"UI_COMPONENTS.badge.textWithLargeBadge")," "),e(5),l("highlight",r.codeForSizeBadge),e(5),l("highlightAuto",r.codeForSizeBadgeTs),e(5),p(" ",o(45,28,"UI_COMPONENTS.badge.buttonWithBadgeOnLeft")," "),e(3),p(" ",o(48,30,"UI_COMPONENTS.badge.action")," "),e(5),l("highlight",r.codeForButtonBadge),e(5),l("highlightAuto",r.codeForButtonBadgeTs),e(5),p(" ",o(63,32,"UI_COMPONENTS.badge.iconWithBadge")," "),e(7),l("highlight",r.codeForIconBadge),e(5),l("highlightAuto",r.codeForTextBadgeTs),e(5),p(" ",o(80,34,"UI_COMPONENTS.badge.buttonTogglesBadgeVisibility")," "),e(2),l("matBadgeHidden",r.hidden),e(),p(" ",o(83,36,"UI_COMPONENTS.badge.hide")," "),e(5),l("highlight",r.codeForButtonTogglesBadge),e(5),l("highlightAuto",r.codeForButtonTogglesBadgeTs))},dependencies:[si,di,U,k,ee,$,C,w,L,D,Ee,N,P,O,le,x,I,b],encapsulation:2})}}return m})();var ut=`  import {Component} from '@angular/core';
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
`,zi=`  import {Component} from '@angular/core';
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
`,ji=`  import {Component} from '@angular/core';
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
`,Ki=`  import {Component} from '@angular/core';
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
`,Xi=`  import {Component} from '@angular/core';
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
`;var qi=`  <mat-chip-listbox aria-label="Fish selection">
                <mat-chip-option class="f-s-14" color="primary">One fish</mat-chip-option>
                <mat-chip-option class="f-s-14">Two fish</mat-chip-option>
                <mat-chip-option class="f-s-14" color="accent" selected>Accent fish</mat-chip-option>
                <mat-chip-option class="f-s-14" color="warn">Warn fish</mat-chip-option>
              </mat-chip-listbox>
`,Qi=`   <mat-chip-set aria-label="Dog selection">
                <mat-chip class="f-s-14">
                  <img matChipAvatar src="assets/images/profile/user-1.jpg" alt="Photo of a Shiba Inu" />
                  Anderson
                </mat-chip>
                <mat-chip class="f-s-14" color="primary">
                  <img matChipAvatar src="assets/images/profile/user-2.jpg" alt="Photo of a Shiba Inu" />
                  Monty
                </mat-chip>
                <mat-chip class="f-s-14" color="accent">
                  <img matChipAvatar src="assets/images/profile/user-3.jpg" alt="Photo of a Shiba Inu" />
                  Mathew
                </mat-chip>
              </mat-chip-set>
`,Yi=`   <mat-chip-set class="example-chip" cdkDropList cdkDropListOrientation="horizontal"
              (cdkDropListDropped)="drop($event)">
              @for (vegetable of vegetables(); track vegetable.name) {
              <mat-chip class="example-box" cdkDrag>{{
                vegetable.name
                }}</mat-chip>
              }
`,Ji=`   <mat-chip-listbox class="mat-mdc-chip-set-stacked" aria-label="Cutest dog breeds">
  @for (dog of bestBoys; track dog) {
    <mat-chip-option selected>{{dog}}</mat-chip-option>
  }
</mat-chip-listbox>
`,Zi=`   <mat-form-field appearance="outline" class="w-100">
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
`,$i=`   <mat-form-field appearance="outline" class="w-100">
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
`;var ea=(m,S)=>S.name;function uo(m,S){if(m&1&&(i(0,"mat-chip",26),t(1),a()),m&2){let u=S.$implicit;e(),s(u.name)}}function go(m,S){if(m&1&&(i(0,"mat-chip-option",28),t(1),a()),m&2){let u=S.$implicit;e(),s(u)}}function ho(m,S){if(m&1){let u=W();i(0,"mat-chip-row",41),T("removed",function(){let r=_(u).$implicit,h=H();return M(h.remove(r))})("edited",function(r){let h=_(u).$implicit,g=H();return M(g.edit(h,r))}),t(1),i(2,"button",42)(3,"mat-icon"),t(4,"cancel"),a()()()}if(m&2){let u=S.$implicit;l("editable",!0),Tt("aria-description","press enter to edit "+u.name),e(),p(" ",u.name," "),e(),ve("aria-label","remove "+u.name)}}function So(m,S){if(m&1){let u=W();i(0,"mat-chip-row",43),T("removed",function(){let r=_(u).$implicit,h=H();return M(h.removeKeyword(r))}),t(1),i(2,"button",44)(3,"mat-icon"),t(4,"cancel"),a()()()}if(m&2){let u=S.$implicit;e(),p(" ",u," ")}}var ta=(()=>{class m{constructor(){this.codeForBasicChips=qi,this.codeForBasicChipsTs=ut,this.codeForAvatarChips=Qi,this.codeForAvatarChipsTs=ut,this.codeForDragDropChips=Yi,this.codeForDragDropChipsTs=zi,this.codeForStackedChips=Ji,this.codeForStackedChipsTs=ji,this.codeForInputChips=Zi,this.codeForInputChipsTs=Ki,this.codeForFormControlChips=$i,this.codeForFormControlChipsTs=Xi,this.vegetables=Pe([{name:"apple"},{name:"banana"},{name:"strawberry"},{name:"orange"},{name:"kiwi"},{name:"cherry"}]),this.bestBoys=["Samoyed","Akita Inu","Alaskan Malamute","Siberian Husky"],this.addOnBlur=!0,this.separatorKeysCodes=[13,188],this.fruits=[{name:"Lemon"},{name:"Lime"},{name:"Apple"}],this.keywords=Pe(["angular","how-to","tutorial","accessibility"]),this.formControl=new Te(["angular"]),this.announcer=me(It)}drop(u){this.vegetables.update(c=>(wi(c,u.previousIndex,u.currentIndex),[...c]))}add(u){let c=(u.value||"").trim();c&&this.fruits.push({name:c}),u.chipInput.clear()}remove(u){let c=this.fruits.indexOf(u);c>=0&&this.fruits.splice(c,1)}edit(u,c){let r=c.value.trim();if(!r){this.remove(u);return}let h=this.fruits.indexOf(u);h>=0&&(this.fruits[h].name=r)}removeKeyword(u){this.keywords.update(c=>{let r=c.indexOf(u);return r<0?c:(c.splice(r,1),this.announcer.announce(`removed ${u}`),[...c])})}addForm(u){let c=(u.value||"").trim();c&&this.keywords.update(r=>[...r,c]),u.chipInput.clear()}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-chips"]],decls:164,vars:78,consts:[["chipGrid",""],["formChip",""],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["aria-label","Fish selection"],["color","primary",1,"f-s-14"],[1,"f-s-14"],["color","accent","selected","",1,"f-s-14"],["color","warn",1,"f-s-14"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["aria-label","Dog selection"],["matChipAvatar","","src","assets/images/profile/user-1.jpg","alt","Photo of a Shiba Inu"],["matChipAvatar","","src","assets/images/profile/user-2.jpg","alt","Photo of a Shiba Inu"],["color","accent",1,"f-s-14"],["matChipAvatar","","src","assets/images/profile/user-3.jpg","alt","Photo of a Shiba Inu"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"example-chip",3,"cdkDropListDropped"],["cdkDrag","",1,"example-box"],["aria-label","Cutest dog breeds",1,"mat-mdc-chip-set-stacked"],["selected",""],[1,"col-12"],["appearance","outline",1,"w-100"],["aria-label","Enter fruits"],[1,"f-s-14",3,"editable","aria-description"],[3,"matChipInputTokenEnd","placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],[1,"d-flex","gap-8"],["mat-stroked-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",3,"click"],["appearance","outline",1,"w-100","m-t-20"],["aria-label","Enter keywords",3,"formControl"],[3,"matChipInputTokenEnd","placeholder","matChipInputFor"],[1,"f-w-600"],[1,"f-s-14",3,"removed","edited","editable","aria-description"],["matChipRemove",""],[3,"removed"],["matChipRemove","","aria-label","'remove ' + keyword"]],template:function(c,r){if(c&1){let h=W();i(0,"mat-card",2)(1,"div",3)(2,"mat-card-title",4),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",5)(6,"div",6)(7,"div",7)(8,"app-code-view",8)(9,"h4",9),t(10),n(11,"translate"),a(),i(12,"div",10)(13,"mat-chip-listbox",11)(14,"mat-chip-option",12),t(15),n(16,"translate"),a(),i(17,"mat-chip-option",13),t(18),n(19,"translate"),a(),i(20,"mat-chip-option",14),t(21),n(22,"translate"),a(),i(23,"mat-chip-option",15),t(24),n(25,"translate"),a()()(),i(26,"div",16)(27,"pre"),t(28,"              "),d(29,"code",17),t(30,`
            `),a()(),i(31,"div",18)(32,"pre"),t(33,"              "),d(34,"code",19),t(35,`
            `),a()()()(),i(36,"div",7)(37,"app-code-view",8)(38,"h4",9),t(39),n(40,"translate"),a(),i(41,"div",10)(42,"mat-chip-set",20)(43,"mat-chip",13),d(44,"img",21),t(45," Anderson "),a(),i(46,"mat-chip",12),d(47,"img",22),t(48," Monty "),a(),i(49,"mat-chip",23),d(50,"img",24),t(51," Mathew "),a()()(),i(52,"div",16)(53,"pre"),t(54,"              "),d(55,"code",17),t(56,`
            `),a()(),i(57,"div",18)(58,"pre"),t(59,"              "),d(60,"code",19),t(61,`
            `),a()()()(),i(62,"div",7)(63,"app-code-view",8)(64,"h4",9),t(65),n(66,"translate"),a(),i(67,"div",10)(68,"mat-chip-set",25),T("cdkDropListDropped",function(f){return _(h),M(r.drop(f))}),ie(69,uo,2,1,"mat-chip",26,ea),a()(),i(71,"div",16)(72,"pre"),t(73,"              "),d(74,"code",17),t(75,`
            `),a()(),i(76,"div",18)(77,"pre"),t(78,"              "),d(79,"code",19),t(80,`
            `),a()()()(),i(81,"div",7)(82,"app-code-view",8)(83,"h4",9),t(84),n(85,"translate"),a(),i(86,"div",10)(87,"mat-chip-listbox",27),ie(88,go,2,1,"mat-chip-option",28,de),a()(),i(90,"div",16)(91,"pre"),t(92,"              "),d(93,"code",17),t(94,`
            `),a()(),i(95,"div",18)(96,"pre"),t(97,"              "),d(98,"code",19),t(99,`
            `),a()()()(),i(100,"div",29)(101,"app-code-view",8)(102,"h4",9),t(103),n(104,"translate"),a(),i(105,"div",10)(106,"mat-form-field",30)(107,"mat-label"),t(108),n(109,"translate"),a(),i(110,"mat-chip-grid",31,0),ie(112,ho,5,4,"mat-chip-row",32,ea),i(114,"input",33),n(115,"translate"),T("matChipInputTokenEnd",function(f){return _(h),M(r.add(f))}),a()()()(),i(116,"div",16)(117,"pre"),t(118,"              "),d(119,"code",17),t(120,`
            `),a()(),i(121,"div",18)(122,"pre"),t(123,"              "),d(124,"code",19),t(125,`
            `),a()()()(),i(126,"div",29)(127,"app-code-view",8)(128,"h4",9),t(129),n(130,"translate"),a(),i(131,"div",10)(132,"div",34)(133,"button",35),T("click",function(){return _(h),M(r.formControl.disable())}),t(134),n(135,"translate"),a(),i(136,"button",36),T("click",function(){return _(h),M(r.formControl.enable())}),t(137),n(138,"translate"),a()(),i(139,"mat-form-field",37)(140,"mat-label"),t(141),n(142,"translate"),a(),i(143,"mat-chip-grid",38,1),ie(145,So,5,1,"mat-chip-row",null,de),a(),i(147,"input",39),n(148,"translate"),T("matChipInputTokenEnd",function(f){return _(h),M(r.addForm(f))}),a()(),i(149,"p")(150,"span",40),t(151),n(152,"translate"),a(),t(153),a()(),i(154,"div",16)(155,"pre"),t(156,"              "),d(157,"code",17),t(158,`
            `),a()(),i(159,"div",18)(160,"pre"),t(161,"              "),d(162,"code",19),t(163,`
            `),a()()()()()()()}if(c&2){let h=F(111),g=F(144);e(3),s(o(4,42,"UI_COMPONENTS.chips.title")),e(5),l("isTitle",!0),e(2),p(" ",o(11,44,"UI_COMPONENTS.chips.basic")," "),e(5),s(o(16,46,"UI_COMPONENTS.chips.oneFish")),e(3),s(o(19,48,"UI_COMPONENTS.chips.twoFish")),e(3),s(o(22,50,"UI_COMPONENTS.chips.accentFish")),e(3),s(o(25,52,"UI_COMPONENTS.chips.warnFish")),e(5),l("highlight",r.codeForBasicChips),e(5),l("highlightAuto",r.codeForBasicChipsTs),e(3),l("isTitle",!0),e(2),p(" ",o(40,54,"UI_COMPONENTS.chips.avatar")," "),e(16),l("highlight",r.codeForAvatarChips),e(5),l("highlightAuto",r.codeForAvatarChipsTs),e(3),l("isTitle",!0),e(2),p(" ",o(66,56,"UI_COMPONENTS.chips.dragNDrop")," "),e(4),ae(r.vegetables()),e(5),l("highlight",r.codeForDragDropChips),e(5),l("highlightAuto",r.codeForDragDropChipsTs),e(3),l("isTitle",!0),e(2),p(" ",o(85,58,"UI_COMPONENTS.chips.stacked")," "),e(4),ae(r.bestBoys),e(5),l("highlight",r.codeForStackedChips),e(5),l("highlightAuto",r.codeForStackedChipsTs),e(3),l("isTitle",!0),e(2),p(" ",o(104,60,"UI_COMPONENTS.chips.input")," "),e(5),s(o(109,62,"UI_COMPONENTS.chips.favoriteFruits")),e(4),ae(r.fruits),e(2),l("placeholder",o(115,64,"UI_COMPONENTS.chips.newFruitPlaceholder"))("matChipInputFor",h)("matChipInputSeparatorKeyCodes",r.separatorKeysCodes)("matChipInputAddOnBlur",r.addOnBlur),e(5),l("highlight",r.codeForInputChips),e(5),l("highlightAuto",r.codeForInputChipsTs),e(3),l("isTitle",!0),e(2),p(" ",o(130,66,"UI_COMPONENTS.chips.formControl")," "),e(5),p(" ",o(135,68,"UI_COMPONENTS.chips.disableFormControl")," "),e(3),p(" ",o(138,70,"UI_COMPONENTS.chips.enableFormControl")," "),e(4),s(o(142,72,"UI_COMPONENTS.chips.videoKeywords")),e(2),l("formControl",r.formControl),e(2),ae(r.keywords()),e(2),l("placeholder",o(148,74,"UI_COMPONENTS.chips.newKeywordPlaceholder"))("matChipInputFor",g),e(4),s(o(152,76,"UI_COMPONENTS.chips.followingKeywordsEntered")),e(2),p(" ",r.formControl.value," "),e(4),l("highlight",r.codeForFormControlChips),e(5),l("highlightAuto",r.codeForFormControlChipsTs)}},dependencies:[G,Q,q,_i,gi,ci,bi,fi,vi,hi,ui,Si,Ti,ee,$,C,w,L,D,Li,Di,R,V,be,We,U,k,N,P,O,x,I,b],styles:[".example-box.cdk-drag-animating[_ngcontent-%COMP%], .example-chip[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0})}}return m})();var ia=`  <div class="row">
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
`,aa=`  <button mat-flat-button color="primary" (click)="openHeaderDialog()" class="w-100">
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


`,na=`  <button mat-flat-button color="accent" (click)="openInjectDialog()" class="w-100">
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

`,oa=`  <button mat-flat-button class="w-100" color="primary" [matMenuTriggerFor]="menu" #menuTrigger>
                Menu
              </button>
              <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="openMenuDialog()">
                  Open dialog
                </button>
              </mat-menu>

`,ra=`  <mat-form-field appearance="outline" class="w-100">
                <mat-label>What's your name?</mat-label>
                <input matInput [(ngModel)]="name" />
              </mat-form-field>
              <button mat-flat-button class="bg-primary w-100" (click)="openDialogEx()">Pick one</button>
              @if (animal()) {
              <span class="m-t-12 d-block">
                You chose: <span class="f-w-600">{{ animal() }}</span>
              </span>
              }

`;var la=`  import {Component} from '@angular/core';
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
`,pa=`  import {Component} from '@angular/core';
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
`,ma=`  import {Component} from '@angular/core';
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
`,da=`  import {Component} from '@angular/core';
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
`,sa=`  import {Component} from '@angular/core';
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
`;function vo(m,S){m&1&&(i(0,"span"),t(1,"\u2713"),a())}function bo(m,S){m&1&&(i(0,"span"),t(1,"\u2713"),a())}function fo(m,S){m&1&&(i(0,"span"),t(1,"\u2713"),a())}var _o=["menuTrigger"];function Mo(m,S){if(m&1&&(i(0,"span",24),t(1),n(2,"translate"),i(3,"span",25),t(4),a()()),m&2){let u=H();e(),p(" ",o(2,2,"UI_COMPONENTS.dialog.youChose")," "),e(3),s(u.animal())}}var Io=(()=>{class m{constructor(u){this.dialogRef=u}static{this.\u0275fac=function(c){return new(c||m)(Se(at))}}static{this.\u0275cmp=v({type:m,selectors:[["dialog-overview"]],decls:13,vars:12,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"f-s-14","lh-16"],["mat-dialog-actions","",1,"p-24","p-t-0"],["mat-flat-button","","mat-dialog-close","",1,"bg-error","text-white"],["mat-flat-button","","mat-dialog-close","","cdkFocusInitial",""]],template:function(c,r){c&1&&(i(0,"h5",0),t(1),n(2,"translate"),a(),i(3,"div",1),t(4),n(5,"translate"),a(),i(6,"div",2)(7,"button",3),t(8),n(9,"translate"),a(),i(10,"button",4),t(11),n(12,"translate"),a()()),c&2&&(e(),s(o(2,4,"UI_COMPONENTS.dialog.deleteFile")),e(3),p(" ",o(5,6,"UI_COMPONENTS.dialog.wouldYouLikeToDeleteCatJpeg"),`
`),e(4),p(" ",o(9,8,"UI_COMPONENTS.dialog.no")," "),e(3),s(o(12,10,"UI_COMPONENTS.dialog.ok")))},dependencies:[ye,Oe,Be,Ce,U,k,I,b],encapsulation:2})}}return m})(),Eo=(()=>{class m{static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["dialog-content"]],decls:68,vars:67,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"f-s-16","f-w-600","m-t-16"],[1,"f-s-14","lh-24"],["align","end"],["mat-flat-button","","mat-dialog-close","",1,"bg-error","text-white"],["mat-flat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(c,r){c&1&&(i(0,"h2",0),t(1),n(2,"translate"),a(),i(3,"mat-dialog-content",1)(4,"h3",2),t(5),n(6,"translate"),a(),i(7,"p",3),t(8),n(9,"translate"),a(),i(10,"h3",2),t(11),n(12,"translate"),a(),i(13,"p",3),t(14),n(15,"translate"),a(),i(16,"h3",2),t(17),n(18,"translate"),a(),i(19,"p",3),t(20),n(21,"translate"),a(),i(22,"h3",2),t(23),n(24,"translate"),a(),i(25,"p",3),t(26),n(27,"translate"),a(),i(28,"h3",2),t(29),n(30,"translate"),a(),i(31,"p",3),t(32),n(33,"translate"),a(),i(34,"h3",2),t(35),n(36,"translate"),a(),i(37,"p",3),t(38),n(39,"translate"),a(),i(40,"p",3),t(41),n(42,"translate"),a(),i(43,"p",3),t(44),n(45,"translate"),a(),i(46,"p",3),t(47),n(48,"translate"),a(),i(49,"p",3),t(50),n(51,"translate"),a(),i(52,"p",3),t(53),n(54,"translate"),a(),i(55,"p",3),t(56),n(57,"translate"),a(),i(58,"p",3),t(59),n(60,"translate"),a()(),i(61,"mat-dialog-actions",4)(62,"button",5),t(63),n(64,"translate"),a(),i(65,"button",6),t(66),n(67,"translate"),a()()),c&2&&(e(),s(o(2,23,"UI_COMPONENTS.dialog.installAngular")),e(4),s(o(6,25,"UI_COMPONENTS.dialog.developAcrossPlatforms")),e(3),p(" ",o(9,27,"UI_COMPONENTS.dialog.developAcrossPlatformsDesc")," "),e(3),s(o(12,29,"UI_COMPONENTS.dialog.speedPerformance")),e(3),p(" ",o(15,31,"UI_COMPONENTS.dialog.speedPerformanceDesc")," "),e(3),s(o(18,33,"UI_COMPONENTS.dialog.incredibleTooling")),e(3),p(" ",o(21,35,"UI_COMPONENTS.dialog.incredibleToolingDesc")," "),e(3),s(o(24,37,"UI_COMPONENTS.dialog.lovedByMillions")),e(3),p(" ",o(27,39,"UI_COMPONENTS.dialog.lovedByMillionsDesc")," "),e(3),s(o(30,41,"UI_COMPONENTS.dialog.whatIsAngular")),e(3),p(" ",o(33,43,"UI_COMPONENTS.dialog.whatIsAngularDesc")," "),e(3),s(o(36,45,"UI_COMPONENTS.dialog.architectureOverview")),e(3),p(" ",o(39,47,"UI_COMPONENTS.dialog.architectureDesc1")," "),e(3),p(" ",o(42,49,"UI_COMPONENTS.dialog.architectureDesc2")," "),e(3),p(" ",o(45,51,"UI_COMPONENTS.dialog.architectureDesc3")," "),e(3),p(" ",o(48,53,"UI_COMPONENTS.dialog.architectureDesc4")," "),e(3),p(" ",o(51,55,"UI_COMPONENTS.dialog.architectureDesc5")," "),e(3),p(" ",o(54,57,"UI_COMPONENTS.dialog.architectureDesc6")," "),e(3),p(" ",o(57,59,"UI_COMPONENTS.dialog.architectureDesc7")," "),e(3),p(" ",o(60,61,"UI_COMPONENTS.dialog.architectureDesc8")," "),e(4),s(o(64,63,"UI_COMPONENTS.dialog.cancel")),e(2),l("mat-dialog-close",!0),e(),s(o(67,65,"UI_COMPONENTS.dialog.install")))},dependencies:[ye,Oe,Be,Ce,U,k,I,b],encapsulation:2})}}return m})(),Co=(()=>{class m{constructor(u){this.data=u}static{this.\u0275fac=function(c){return new(c||m)(Se(ct))}}static{this.\u0275cmp=v({type:m,selectors:[["dialog-data-example-dialog"]],decls:19,vars:18,consts:[["mat-dialog-title",""],["mat-dialog-content",""]],template:function(c,r){c&1&&(i(0,"h1",0),t(1),n(2,"translate"),a(),i(3,"div",1),t(4),n(5,"translate"),i(6,"ul")(7,"li"),oe(8,vo,2,0,"span"),t(9),n(10,"translate"),a(),i(11,"li"),oe(12,bo,2,0,"span"),t(13),n(14,"translate"),a(),i(15,"li"),oe(16,fo,2,0,"span"),t(17),n(18,"translate"),a()()()),c&2&&(e(),s(o(2,8,"UI_COMPONENTS.dialog.favoriteAnimal")),e(3),p(" ",o(5,10,"UI_COMPONENTS.dialog.myFavoriteAnimalIs")," "),e(4),re(r.data.animal==="panda"?8:-1),e(),p(" ",o(10,12,"UI_COMPONENTS.dialog.panda")," "),e(3),re(r.data.animal==="unicorn"?12:-1),e(),p(" ",o(14,14,"UI_COMPONENTS.dialog.unicorn")," "),e(3),re(r.data.animal==="lion"?16:-1),e(),p(" ",o(18,16,"UI_COMPONENTS.dialog.lion")," "))},dependencies:[Be,Ce,U,I,b],encapsulation:2})}}return m})(),xo=(()=>{class m{static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["dialog-menu"]],decls:7,vars:6,consts:[[1,"f-s-14"],["mat-flat-button","","mat-dialog-close",""]],template:function(c,r){c&1&&(i(0,"mat-dialog-content",0),t(1),n(2,"translate"),a(),i(3,"mat-dialog-actions")(4,"button",1),t(5),n(6,"translate"),a()()),c&2&&(e(),p(" ",o(2,2,"UI_COMPONENTS.dialog.thisIsDialog")," "),e(4),s(o(6,4,"UI_COMPONENTS.dialog.okay")))},dependencies:[ye,Oe,Ce,U,k,I,b],encapsulation:2})}}return m})(),No=(()=>{class m{constructor(){this.dialogRef=me(at),this.data=me(ct),this.animal=st(this.data.animal)}onNoClick(){this.dialogRef.close()}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["dialog-form-overview"]],inputs:{animal:[1,"animal"]},outputs:{animal:"animalChange"},decls:19,vars:18,consts:[["mat-dialog-title",""],["appearance","outline",1,"w-100"],["matInput","",3,"ngModelChange","ngModel"],["mat-flat-button","",1,"bg-error","text-white",3,"click"],["mat-flat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(c,r){c&1&&(i(0,"h2",0),t(1),n(2,"translate"),a(),i(3,"mat-dialog-content")(4,"p"),t(5),n(6,"translate"),a(),i(7,"mat-form-field",1)(8,"mat-label"),t(9),n(10,"translate"),a(),i(11,"input",2),A("ngModelChange",function(g){return y(r.animal,g)||(r.animal=g),g}),a()()(),i(12,"mat-dialog-actions")(13,"button",3),T("click",function(){return r.onNoClick()}),t(14),n(15,"translate"),a(),i(16,"button",4),t(17),n(18,"translate"),a()()),c&2&&(e(),Z("",o(2,8,"UI_COMPONENTS.dialog.hi")," ",r.data.name),e(4),s(o(6,10,"UI_COMPONENTS.dialog.whatsYourFavoriteAnimal")),e(4),s(o(10,12,"UI_COMPONENTS.dialog.favoriteAnimal")),e(2),B("ngModel",r.animal),e(3),p(" ",o(15,14,"UI_COMPONENTS.dialog.noThanks")," "),e(2),l("mat-dialog-close",r.animal()),e(),p(" ",o(18,16,"UI_COMPONENTS.dialog.ok")," "))},dependencies:[G,Q,q,Y,te,R,K,V,X,U,k,Be,Ce,ye,Oe,I,b],encapsulation:2,changeDetection:0})}}return m})(),ca=(()=>{class m{constructor(u){this.dialog=u,this.codeFordialogAnimations=ia,this.codeFordialogAnimationsTs=la,this.codeForScrollable=aa,this.codeForScrollableTs=pa,this.codeForInjecting=na,this.codeForInjectingTs=ma,this.codeForMenu=oa,this.codeForMenuTs=da,this.codeForOverview=ra,this.codeForOverviewTs=sa,this.animal=Pe(""),this.name=st(""),this.dialogEx=me(nt)}openDialogEx(){this.dialogEx.open(No,{data:{name:this.name(),animal:this.animal()}}).afterClosed().subscribe(c=>{console.log("The dialog was closed"),c!==void 0&&this.animal.set(c)})}openDialog(u,c){this.dialog.open(Io,{width:"290px",enterAnimationDuration:u,exitAnimationDuration:c})}openHeaderDialog(){this.dialog.open(Eo).afterClosed().subscribe(c=>{console.log(`Dialog result: ${c}`)})}openInjectDialog(){this.dialog.open(Co,{data:{animal:"panda"}})}openMenuDialog(){this.dialog.open(xo,{restoreFocus:!1}).afterClosed().subscribe(()=>this.menuTrigger.focus())}static{this.\u0275fac=function(c){return new(c||m)(Se(nt))}}static{this.\u0275cmp=v({type:m,selectors:[["app-dialog"]],viewQuery:function(c,r){if(c&1&&Fe(_o,5),c&2){let h;Ue(h=ke())&&(r.menuTrigger=h.first)}},inputs:{name:[1,"name"]},outputs:{name:"nameChange"},decls:120,vars:60,consts:[["menuTrigger",""],["menu","matMenu"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-12"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"col-sm-6"],["mat-flat-button","","color","primary",1,"w-100",3,"click"],["mat-flat-button","","color","accent",1,"w-100",3,"click"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"col-lg-6"],["mat-flat-button","","color","primary",1,"w-100",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["appearance","outline",1,"w-100"],["matInput","",3,"ngModelChange","ngModel"],["mat-flat-button","",1,"bg-primary","w-100",3,"click"],[1,"m-t-12","d-block"],[1,"f-w-600"]],template:function(c,r){if(c&1){let h=W();i(0,"mat-card",2)(1,"div",3)(2,"mat-card-title",4),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",5)(6,"div",6)(7,"div",7)(8,"app-code-view",8)(9,"h4",9),t(10),n(11,"translate"),a(),i(12,"div",10)(13,"div",6)(14,"div",11)(15,"button",12),T("click",function(){return _(h),M(r.openDialog("0ms","0ms"))}),t(16),n(17,"translate"),a()(),i(18,"div",11)(19,"button",13),T("click",function(){return _(h),M(r.openDialog("3000ms","1500ms"))}),t(20),n(21,"translate"),a()()()(),i(22,"div",14)(23,"pre"),t(24,"              "),d(25,"code",15),t(26,`
            `),a()(),i(27,"div",16)(28,"pre"),t(29,"              "),d(30,"code",17),t(31,`
            `),a()()()(),i(32,"div",18)(33,"app-code-view",8)(34,"h4",9),t(35),n(36,"translate"),a(),i(37,"div",10)(38,"button",12),T("click",function(){return _(h),M(r.openHeaderDialog())}),t(39),n(40,"translate"),a()(),i(41,"div",14)(42,"pre"),t(43,"              "),d(44,"code",15),t(45,`
            `),a()(),i(46,"div",16)(47,"pre"),t(48,"              "),d(49,"code",17),t(50,`
            `),a()()()(),i(51,"div",18)(52,"app-code-view",8)(53,"h4",9),t(54),n(55,"translate"),a(),i(56,"div",10)(57,"button",13),T("click",function(){return _(h),M(r.openInjectDialog())}),t(58),n(59,"translate"),a()(),i(60,"div",14)(61,"pre"),t(62,"              "),d(63,"code",15),t(64,`
            `),a()(),i(65,"div",16)(66,"pre"),t(67,"              "),d(68,"code",17),t(69,`
            `),a()()()(),i(70,"div",18)(71,"app-code-view",8)(72,"h4",9),t(73),n(74,"translate"),a(),i(75,"div",10)(76,"button",19,0),t(78),n(79,"translate"),a(),i(80,"mat-menu",null,1)(82,"button",20),T("click",function(){return _(h),M(r.openMenuDialog())}),t(83),n(84,"translate"),a()()(),i(85,"div",14)(86,"pre"),t(87,"              "),d(88,"code",15),t(89,`
            `),a()(),i(90,"div",16)(91,"pre"),t(92,"              "),d(93,"code",17),t(94,`
            `),a()()()(),i(95,"div",18)(96,"app-code-view",8)(97,"h4",9),t(98),n(99,"translate"),a(),i(100,"div",10)(101,"mat-form-field",21)(102,"mat-label"),t(103),n(104,"translate"),a(),i(105,"input",22),A("ngModelChange",function(f){return _(h),y(r.name,f)||(r.name=f),M(f)}),a()(),i(106,"button",23),T("click",function(){return _(h),M(r.openDialogEx())}),t(107),n(108,"translate"),a(),oe(109,Mo,5,4,"span",24),a(),i(110,"div",14)(111,"pre"),t(112,"              "),d(113,"code",15),t(114,`
            `),a()(),i(115,"div",16)(116,"pre"),t(117,"              "),d(118,"code",17),t(119,`
            `),a()()()()()()()}if(c&2){let h=F(81);e(3),s(o(4,32,"UI_COMPONENTS.dialog.title")),e(5),l("isTitle",!0),e(2),p(" ",o(11,34,"UI_COMPONENTS.dialog.animations")," "),e(6),p(" ",o(17,36,"UI_COMPONENTS.dialog.openWithoutAnimation")," "),e(4),p(" ",o(21,38,"UI_COMPONENTS.dialog.openSlowly")," "),e(5),l("highlight",r.codeFordialogAnimations),e(5),l("highlightAuto",r.codeFordialogAnimationsTs),e(3),l("isTitle",!0),e(2),p(" ",o(36,40,"UI_COMPONENTS.dialog.scrollableContent")," "),e(4),p(" ",o(40,42,"UI_COMPONENTS.dialog.openScrollable")," "),e(5),l("highlight",r.codeForScrollable),e(5),l("highlightAuto",r.codeForScrollableTs),e(3),l("isTitle",!0),e(2),p(" ",o(55,44,"UI_COMPONENTS.dialog.injectingData")," "),e(4),p(" ",o(59,46,"UI_COMPONENTS.dialog.openDialog")," "),e(5),l("highlight",r.codeForInjecting),e(5),l("highlightAuto",r.codeForInjectingTs),e(3),l("isTitle",!0),e(2),p(" ",o(74,48,"UI_COMPONENTS.dialog.dialogFromMenu")," "),e(3),l("matMenuTriggerFor",h),e(2),p(" ",o(79,50,"UI_COMPONENTS.dialog.menu")," "),e(5),p(" ",o(84,52,"UI_COMPONENTS.dialog.openDialog")," "),e(5),l("highlight",r.codeForMenu),e(5),l("highlightAuto",r.codeForMenuTs),e(3),l("isTitle",!0),e(2),p(" ",o(99,54,"UI_COMPONENTS.dialog.dialogOverview")," "),e(5),s(o(104,56,"UI_COMPONENTS.dialog.whatsYourName")),e(2),B("ngModel",r.name),e(2),s(o(108,58,"UI_COMPONENTS.dialog.pickOne")),e(2),re(r.animal()?109:-1),e(4),l("highlight",r.codeForOverview),e(5),l("highlightAuto",r.codeForOverviewTs)}},dependencies:[U,k,Je,Qe,qe,Ye,C,w,L,D,Ni,G,Q,q,Y,te,R,K,V,X,N,P,O,x,I,b],encapsulation:2})}}return m})();var ua=`  <mat-list>
              <mat-list-item>Item 1</mat-list-item>
              <mat-divider></mat-divider>
              <mat-list-item>Item 2</mat-list-item>
              <mat-divider></mat-divider>
              <mat-list-item>Item 3</mat-list-item>
            </mat-list>
`,ga=`  <mat-list>
                <mat-list-item>Home</mat-list-item>
                <mat-divider [inset]="true"></mat-divider>
                <mat-list-item>UI</mat-list-item>
                <mat-divider [inset]="true"></mat-divider>
                <mat-list-item>Forms</mat-list-item>
              </mat-list>
`,ha=`  <mat-list class="d-flex">
              <mat-list-item>Home</mat-list-item>
              <mat-divider [vertical]="true"></mat-divider>
              <mat-list-item>UI</mat-list-item>
              <mat-divider [vertical]="true"></mat-divider>
              <mat-list-item>Forms</mat-list-item>
            </mat-list>
`;var rt=`  import {Component} from '@angular/core';
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
`;var Sa=(()=>{class m{constructor(){this.codeForDividerBasic=ua,this.codeForDividerBasicTs=rt,this.codeForDividerInset=ga,this.codeForDividerInsetTs=rt,this.codeForDividerVertical=ha,this.codeForDividerVerticalTs=rt}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-divider"]],decls:91,vars:52,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[3,"inset"],[1,"d-flex"],[3,"vertical"]],template:function(c,r){c&1&&(i(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",3)(6,"div",4)(7,"div",5)(8,"app-code-view",6)(9,"h4",7),t(10),n(11,"translate"),a(),i(12,"div",8)(13,"mat-list")(14,"mat-list-item"),t(15),n(16,"translate"),a(),d(17,"mat-divider"),i(18,"mat-list-item"),t(19),n(20,"translate"),a(),d(21,"mat-divider"),i(22,"mat-list-item"),t(23),n(24,"translate"),a()()(),i(25,"div",9)(26,"pre"),t(27,"              "),d(28,"code",10),t(29,`
            `),a()(),i(30,"div",11)(31,"pre"),t(32,"              "),d(33,"code",12),t(34,`
            `),a()()()(),i(35,"div",5)(36,"app-code-view",6)(37,"h4",7),t(38),n(39,"translate"),a(),i(40,"div",8)(41,"mat-list")(42,"mat-list-item"),t(43),n(44,"translate"),a(),d(45,"mat-divider",13),i(46,"mat-list-item"),t(47),n(48,"translate"),a(),d(49,"mat-divider",13),i(50,"mat-list-item"),t(51),n(52,"translate"),a()()(),i(53,"div",9)(54,"pre"),t(55,"              "),d(56,"code",10),t(57,`
            `),a()(),i(58,"div",11)(59,"pre"),t(60,"              "),d(61,"code",12),t(62,`
            `),a()()()(),i(63,"div",5)(64,"app-code-view",6)(65,"h4",7),t(66),n(67,"translate"),a(),i(68,"div",8)(69,"mat-list",14)(70,"mat-list-item"),t(71),n(72,"translate"),a(),d(73,"mat-divider",15),i(74,"mat-list-item"),t(75),n(76,"translate"),a(),d(77,"mat-divider",15),i(78,"mat-list-item"),t(79),n(80,"translate"),a()()(),i(81,"div",9)(82,"pre"),t(83,"              "),d(84,"code",10),t(85,`
            `),a()(),i(86,"div",11)(87,"pre"),t(88,"              "),d(89,"code",12),t(90,`
            `),a()()()()()()()),c&2&&(e(3),s(o(4,26,"UI_COMPONENTS.divider.title")),e(5),l("isTitle",!0),e(2),p(" ",o(11,28,"UI_COMPONENTS.divider.basic")," "),e(5),s(o(16,30,"UI_COMPONENTS.divider.item1")),e(4),s(o(20,32,"UI_COMPONENTS.divider.item2")),e(4),s(o(24,34,"UI_COMPONENTS.divider.item3")),e(5),l("highlight",r.codeForDividerBasic),e(5),l("highlightAuto",r.codeForDividerBasicTs),e(3),l("isTitle",!0),e(2),p(" ",o(39,36,"UI_COMPONENTS.divider.inset")," "),e(5),s(o(44,38,"UI_COMPONENTS.divider.home")),e(2),l("inset",!0),e(2),s(o(48,40,"UI_COMPONENTS.divider.ui")),e(2),l("inset",!0),e(2),s(o(52,42,"UI_COMPONENTS.divider.forms")),e(5),l("highlight",r.codeForDividerInset),e(5),l("highlightAuto",r.codeForDividerInsetTs),e(3),l("isTitle",!0),e(2),p(" ",o(67,44,"UI_COMPONENTS.divider.vertical")," "),e(5),s(o(72,46,"UI_COMPONENTS.divider.home")),e(2),l("vertical",!0),e(2),s(o(76,48,"UI_COMPONENTS.divider.ui")),e(2),l("vertical",!0),e(2),s(o(80,50,"UI_COMPONENTS.divider.forms")),e(5),l("highlight",r.codeForDividerVertical),e(5),l("highlightAuto",r.codeForDividerVerticalTs))},dependencies:[zt,Ze,it,et,tt,C,w,L,D,N,P,O,x,I,b],encapsulation:2})}}return m})();var Ta=`  import {Component} from '@angular/core';
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
`,va=`  import {Component} from '@angular/core';
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
`,ba=`  import {Component} from '@angular/core';
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
`;var fa=`  <mat-accordion>
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
`,_a=`  <div class="d-flex align-items-center m-b-16">
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
`,Ma=`  <mat-accordion>
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
`;var Ia=(()=>{class m{constructor(){this.panelOpenState=!1,this.step=0,this.codeForBasicExpansion=fa,this.codeForBasicExpansionTs=Ta,this.codeForExpandExpansion=_a,this.codeForExpandExpansionTs=va,this.codeForAccordianExpansion=Ma,this.codeForAccordianExpansionTs=ba}setStep(u){this.step=u}nextStep(){this.step++}prevStep(){this.step--}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-expansion"]],viewQuery:function(c,r){if(c&1&&Fe($e,5),c&2){let h;Ue(h=ke())&&(r.accordion=h.first)}},features:[ft([xi()])],decls:213,vars:128,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["hideToggle","",1,"cardWithShadow"],[1,"f-w-600","f-s-14"],[1,"f-s-14"],[1,"cardWithShadow",3,"opened","closed"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"d-flex","align-items-center","m-b-16"],["mat-flat-button","","color","primary",3,"click"],["mat-stroked-button","","color","primary",1,"m-l-8",3,"click"],["multi",""],[1,"cardWithShadow"],[1,"f-w-600"],[1,"m-l-auto","m-r-8"],["name","user-circle",1,"icon-20"],[1,"row"],[1,"col-lg-6","col-sm-6"],["appearance","outline","color","primary",1,"w-100"],["matInput",""],["matInput","","type","number","min","1"],["disabled","",1,"cardWithShadow"],["name","current-location",1,"icon-20"],["appearance","outline","color","primary"],["name","calendar-due",1,"icon-20"],["hideToggle","",1,"cardWithShadow",3,"opened","expanded"],["mat-flat-button","","color","warn",3,"click"]],template:function(c,r){c&1&&(i(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",3)(6,"app-code-view",4)(7,"h4",5),t(8),n(9,"translate"),a(),i(10,"div",6)(11,"mat-accordion")(12,"mat-expansion-panel",7)(13,"mat-expansion-panel-header")(14,"mat-panel-title",8),t(15),n(16,"translate"),a(),i(17,"mat-panel-description",9),t(18),n(19,"translate"),a()(),i(20,"p"),t(21),n(22,"translate"),a()(),i(23,"mat-expansion-panel",10),T("opened",function(){return r.panelOpenState=!0})("closed",function(){return r.panelOpenState=!1}),i(24,"mat-expansion-panel-header")(25,"mat-panel-title",8),t(26),n(27,"translate"),a(),i(28,"mat-panel-description",9),t(29),n(30,"translate"),n(31,"translate"),n(32,"translate"),a()(),i(33,"p"),t(34),n(35,"translate"),a()()()(),i(36,"div",11)(37,"pre"),t(38,"          "),d(39,"code",12),t(40,`
        `),a()(),i(41,"div",13)(42,"pre"),t(43,"          "),d(44,"code",14),t(45,`
        `),a()()(),i(46,"app-code-view",4)(47,"h4",5),t(48),n(49,"translate"),a(),i(50,"div",6)(51,"div",15)(52,"button",16),T("click",function(){return r.accordion.openAll()}),t(53),n(54,"translate"),a(),i(55,"button",17),T("click",function(){return r.accordion.closeAll()}),t(56),n(57,"translate"),a()(),i(58,"mat-accordion",18)(59,"mat-expansion-panel",19)(60,"mat-expansion-panel-header")(61,"mat-panel-title",20),t(62),n(63,"translate"),a(),i(64,"mat-panel-description",9),t(65),n(66,"translate"),i(67,"mat-icon",21),d(68,"i-tabler",22),a()()(),i(69,"div",23)(70,"div",24)(71,"mat-form-field",25)(72,"mat-label"),t(73),n(74,"translate"),a(),d(75,"input",26),a()(),i(76,"div",24)(77,"mat-form-field",25)(78,"mat-label"),t(79),n(80,"translate"),a(),d(81,"input",27),a()()()(),i(82,"mat-expansion-panel",28)(83,"mat-expansion-panel-header")(84,"mat-panel-title",20),t(85),n(86,"translate"),a(),i(87,"mat-panel-description",9),t(88),n(89,"translate"),i(90,"mat-icon",21),d(91,"i-tabler",29),a()()(),i(92,"mat-form-field",30)(93,"mat-label"),t(94),n(95,"translate"),a(),d(96,"input",26),a()(),i(97,"mat-expansion-panel",19)(98,"mat-expansion-panel-header")(99,"mat-panel-title",20),t(100),n(101,"translate"),a(),i(102,"mat-panel-description",9),t(103),n(104,"translate"),i(105,"mat-icon",21),d(106,"i-tabler",31),a()()(),i(107,"div",23)(108,"div",24)(109,"mat-form-field",25)(110,"mat-label"),t(111),n(112,"translate"),a(),d(113,"input",26),a()()()()()(),i(114,"div",11)(115,"pre"),t(116,"          "),d(117,"code",12),t(118,`
        `),a()(),i(119,"div",13)(120,"pre"),t(121,"          "),d(122,"code",14),t(123,`
        `),a()()(),i(124,"app-code-view",4)(125,"h4",5),t(126),n(127,"translate"),a(),i(128,"div",6)(129,"mat-accordion")(130,"mat-expansion-panel",32),T("opened",function(){return r.setStep(0)}),i(131,"mat-expansion-panel-header")(132,"mat-panel-title",20),t(133),n(134,"translate"),a(),i(135,"mat-panel-description",9),t(136),n(137,"translate"),i(138,"mat-icon",21),d(139,"i-tabler",22),a()()(),i(140,"div",23)(141,"div",24)(142,"mat-form-field",25)(143,"mat-label"),t(144),n(145,"translate"),a(),d(146,"input",26),a()(),i(147,"div",24)(148,"mat-form-field",25)(149,"mat-label"),t(150),n(151,"translate"),a(),d(152,"input",27),a()()(),i(153,"mat-action-row")(154,"button",16),T("click",function(){return r.nextStep()}),t(155),n(156,"translate"),a()()(),i(157,"mat-expansion-panel",32),T("opened",function(){return r.setStep(1)}),i(158,"mat-expansion-panel-header")(159,"mat-panel-title",20),t(160),n(161,"translate"),a(),i(162,"mat-panel-description",9),t(163),n(164,"translate"),i(165,"mat-icon",21),d(166,"i-tabler",29),a()()(),i(167,"mat-form-field",25)(168,"mat-label"),t(169),n(170,"translate"),a(),d(171,"input",26),a(),i(172,"mat-action-row")(173,"button",33),T("click",function(){return r.prevStep()}),t(174),n(175,"translate"),a(),i(176,"button",16),T("click",function(){return r.nextStep()}),t(177),n(178,"translate"),a()()(),i(179,"mat-expansion-panel",32),T("opened",function(){return r.setStep(2)}),i(180,"mat-expansion-panel-header")(181,"mat-panel-title",20),t(182),n(183,"translate"),a(),i(184,"mat-panel-description",9),t(185),n(186,"translate"),i(187,"mat-icon",21),d(188,"i-tabler",31),a()()(),i(189,"div",23)(190,"div",24)(191,"mat-form-field",25)(192,"mat-label"),t(193),n(194,"translate"),a(),d(195,"input",26),a()()(),i(196,"mat-action-row")(197,"button",33),T("click",function(){return r.prevStep()}),t(198),n(199,"translate"),a(),i(200,"button",16),T("click",function(){return r.nextStep()}),t(201),n(202,"translate"),a()()()()(),i(203,"div",11)(204,"pre"),t(205,"          "),d(206,"code",12),t(207,`
        `),a()(),i(208,"div",13)(209,"pre"),t(210,"          "),d(211,"code",14),t(212,`
        `),a()()()()()),c&2&&(e(3),s(o(4,50,"UI_COMPONENTS.expansion.title")),e(3),l("isTitle",!0),e(2),p(" ",o(9,52,"UI_COMPONENTS.expansion.basic")," "),e(7),p(" ",o(16,54,"UI_COMPONENTS.expansion.expansionTitle")," "),e(3),p(" ",o(19,56,"UI_COMPONENTS.expansion.summaryOfContent")," "),e(3),s(o(22,58,"UI_COMPONENTS.expansion.primaryContent")),e(5),p(" ",o(27,60,"UI_COMPONENTS.expansion.selfAwarePanel")," "),e(3),Z(" ",o(30,62,"UI_COMPONENTS.expansion.currentlyIAm")," ",r.panelOpenState?o(31,64,"UI_COMPONENTS.expansion.open"):o(32,66,"UI_COMPONENTS.expansion.closed")," "),e(5),s(o(35,68,"UI_COMPONENTS.expansion.visibleBecauseOpen")),e(5),l("highlight",r.codeForBasicExpansion),e(5),l("highlightAuto",r.codeForBasicExpansionTs),e(2),l("isTitle",!0),e(2),p(" ",o(49,70,"UI_COMPONENTS.expansion.expandCollapseToggles")," "),e(5),p(" ",o(54,72,"UI_COMPONENTS.expansion.expandAll")," "),e(3),p(" ",o(57,74,"UI_COMPONENTS.expansion.collapseAll")," "),e(6),p(" ",o(63,76,"UI_COMPONENTS.expansion.personalData")," "),e(3),p(" ",o(66,78,"UI_COMPONENTS.expansion.typeNameAndAge")," "),e(8),s(o(74,80,"UI_COMPONENTS.expansion.firstName")),e(6),s(o(80,82,"UI_COMPONENTS.expansion.age")),e(6),p(" ",o(86,84,"UI_COMPONENTS.expansion.destination")," "),e(3),p(" ",o(89,86,"UI_COMPONENTS.expansion.typeCountryName")," "),e(6),s(o(95,88,"UI_COMPONENTS.expansion.country")),e(6),p(" ",o(101,90,"UI_COMPONENTS.expansion.dayOfTrip")," "),e(3),p(" ",o(104,92,"UI_COMPONENTS.expansion.informDate")," "),e(8),s(o(112,94,"UI_COMPONENTS.expansion.dateOfTrip")),e(6),l("highlight",r.codeForExpandExpansion),e(5),l("highlightAuto",r.codeForExpandExpansionTs),e(2),l("isTitle",!0),e(2),p(" ",o(127,96,"UI_COMPONENTS.expansion.accordian")," "),e(4),l("expanded",r.step===0),e(3),p(" ",o(134,98,"UI_COMPONENTS.expansion.personalData")," "),e(3),p(" ",o(137,100,"UI_COMPONENTS.expansion.typeNameAndAge")," "),e(8),s(o(145,102,"UI_COMPONENTS.expansion.firstName")),e(6),s(o(151,104,"UI_COMPONENTS.expansion.age")),e(5),p(" ",o(156,106,"UI_COMPONENTS.expansion.next")," "),e(2),l("expanded",r.step===1),e(3),p(" ",o(161,108,"UI_COMPONENTS.expansion.destination")," "),e(3),p(" ",o(164,110,"UI_COMPONENTS.expansion.typeCountryName")," "),e(6),s(o(170,112,"UI_COMPONENTS.expansion.country")),e(5),p(" ",o(175,114,"UI_COMPONENTS.expansion.previous")," "),e(3),p(" ",o(178,116,"UI_COMPONENTS.expansion.next")," "),e(2),l("expanded",r.step===2),e(3),p(" ",o(183,118,"UI_COMPONENTS.expansion.dayOfTrip")," "),e(3),p(" ",o(186,120,"UI_COMPONENTS.expansion.informDate")," "),e(8),s(o(194,122,"UI_COMPONENTS.expansion.dateOfTrip")),e(5),p(" ",o(199,124,"UI_COMPONENTS.expansion.previous")," "),e(3),p(" ",o(202,126,"UI_COMPONENTS.expansion.end")," "),e(5),l("highlight",r.codeForAccordianExpansion),e(5),l("highlightAuto",r.codeForAccordianExpansionTs))},dependencies:[U,k,Yt,$e,jt,Kt,Xt,Qt,qt,ee,$,G,Q,q,Y,te,Ut,le,ge,C,w,L,D,Ee,N,P,O,x,I,b],encapsulation:2,changeDetection:0})}}return m})();var Ea=`  <mat-list role="list">
                <mat-list-item role="listitem">Item 1</mat-list-item>
                <mat-list-item role="listitem">Item 2</mat-list-item>
                <mat-list-item role="listitem">Item 3</mat-list-item>
              </mat-list>
`,Ca=`  <mat-list>
                <mat-list-item>
                  <span matListItemTitle class="f-s-16 f-w-600">Title</span>
                  <span matListItemLine class="f-s-14">Second line</span>
                </mat-list-item>
                <mat-list-item>
                  <span matListItemTitle class="f-s-16 f-w-600">Title</span>
                  <span matListItemLine class="f-s-14">Second line</span>
                </mat-list-item>
              </mat-list>
`,xa=`  <mat-list>
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
`,Na=`  <mat-list style="max-width: 500px">
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
`,Pa=`  <mat-selection-list #shoes>
                @for(shoe of typesOfShoes; track shoe) {
                <mat-list-option>
                  {{ shoe }}
                </mat-list-option>
                }
              </mat-selection-list>
  
              <p class="f-s-14 f-w-600 p-16 bg-light-primary rounded">
                Options selected: {{ shoes.selectedOptions.selected.length }}
              </p>
`,Oa=`  <mat-selection-list #shoes2 [multiple]="false">
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
`,Ba=`  <mat-list>
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
`;var we=`  import {Component} from '@angular/core';
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
`,lt=`  import {Component} from '@angular/core';
    import { MatListModule } from '@angular/material/list';
    import { MaterialModule } from '../../../../material.module';
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
`;var ya=(m,S)=>S.name;function Bo(m,S){if(m&1&&(i(0,"mat-list-option"),t(1),a()),m&2){let u=S.$implicit;e(),p(" ",u," ")}}function yo(m,S){if(m&1&&(i(0,"mat-list-option",25),t(1),a()),m&2){let u=S.$implicit;l("value",u),e(),p(" ",u," ")}}function Ao(m,S){if(m&1&&(i(0,"mat-list-item")(1,"mat-icon",29),t(2,"folder"),a(),i(3,"div",17),t(4),a(),i(5,"div",18),t(6),n(7,"date"),a()()),m&2){let u=S.$implicit;e(4),p(" ",u.name," "),e(2),p(" ",o(7,2,u.updated)," ")}}function wo(m,S){if(m&1&&(i(0,"mat-list-item")(1,"mat-icon",29),t(2,"note"),a(),i(3,"div",17),t(4),a(),i(5,"div",18),t(6),n(7,"date"),a()()),m&2){let u=S.$implicit;e(4),p(" ",u.name," "),e(2),p(" ",o(7,2,u.updated)," ")}}var Aa=(()=>{class m{constructor(){this.codeForBasicList=Ea,this.codeForBasicListTs=we,this.codeForTwolineList=Ca,this.codeForTwolineListTs=we,this.codeForThreelineList=xa,this.codeForThreelineListTs=we,this.codeForThreelineTextWrappingList=Na,this.codeForThreelineTextWrappingListTs=we,this.codeForSelectionList=Pa,this.codeForSelectionListTs=lt,this.codeForSingleSelectionList=Oa,this.codeForSingleSelectionListTs=lt,this.codeForSectionsList=Ba,this.codeForSectionsListTs=lt,this.typesOfShoes=["Loafers","Sneakers"],this.folders=[{name:"Photos",updated:new Date("1/1/16")},{name:"Recipes",updated:new Date("1/17/16")},{name:"Work",updated:new Date("1/28/16")}],this.notes=[{name:"Vacation Itinerary",updated:new Date("2/20/16")},{name:"Kitchen Remodel",updated:new Date("1/18/16")}]}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-lists"]],decls:207,vars:113,consts:[["shoes",""],["shoes2",""],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["role","list"],["role","listitem"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matListItemTitle","",1,"f-s-16","f-w-600"],["matListItemLine","",1,"f-s-14"],[1,"f-s-14"],[2,"max-width","500px"],["lines","3"],["lines","3",1,"f-s-14"],[1,"f-s-14","f-w-600","p-16","bg-light-primary","rounded"],[3,"multiple"],[3,"value"],[1,"col-12"],["mat-subheader","",1,"f-s-16","m-b-16","f-w-600"],["mat-subheader","",1,"f-s-16","m-y-16","f-w-600"],["matListItemIcon",""]],template:function(c,r){if(c&1&&(i(0,"mat-card",2)(1,"div",3)(2,"mat-card-title",4),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",5)(6,"div",6)(7,"div",7)(8,"app-code-view",8)(9,"h4",9),t(10),n(11,"translate"),a(),i(12,"div",10)(13,"mat-list",11)(14,"mat-list-item",12),t(15),n(16,"translate"),a(),i(17,"mat-list-item",12),t(18),n(19,"translate"),a(),i(20,"mat-list-item",12),t(21),n(22,"translate"),a()()(),i(23,"div",13)(24,"pre"),t(25,"              "),d(26,"code",14),t(27,`
            `),a()(),i(28,"div",15)(29,"pre"),t(30,"              "),d(31,"code",16),t(32,`
            `),a()()()(),i(33,"div",7)(34,"app-code-view",8)(35,"h4",9),t(36),n(37,"translate"),a(),i(38,"div",10)(39,"mat-list")(40,"mat-list-item")(41,"span",17),t(42),n(43,"translate"),a(),i(44,"span",18),t(45),n(46,"translate"),a()(),i(47,"mat-list-item")(48,"span",17),t(49),n(50,"translate"),a(),i(51,"span",18),t(52),n(53,"translate"),a()()()(),i(54,"div",13)(55,"pre"),t(56,"              "),d(57,"code",14),t(58,`
            `),a()(),i(59,"div",15)(60,"pre"),t(61,"              "),d(62,"code",16),t(63,`
            `),a()()()(),i(64,"div",7)(65,"app-code-view",8)(66,"h4",9),t(67),n(68,"translate"),a(),i(69,"div",10)(70,"mat-list")(71,"mat-list-item")(72,"span",17),t(73),n(74,"translate"),a(),i(75,"span",18),t(76),n(77,"translate"),a(),i(78,"span",18),t(79),n(80,"translate"),a()(),i(81,"mat-list-item")(82,"span",17),t(83),n(84,"translate"),a(),i(85,"span",18),t(86),n(87,"translate"),a(),i(88,"span",19),t(89),n(90,"translate"),a()()()(),i(91,"div",13)(92,"pre"),t(93,"              "),d(94,"code",14),t(95,`
            `),a()(),i(96,"div",15)(97,"pre"),t(98,"              "),d(99,"code",16),t(100,`
            `),a()()()(),i(101,"div",7)(102,"app-code-view",8)(103,"h4",9),t(104),n(105,"translate"),a(),i(106,"div",10)(107,"mat-list",20)(108,"mat-list-item",21)(109,"span",17),t(110),n(111,"translate"),a(),i(112,"span",19),t(113),n(114,"translate"),a()(),i(115,"mat-list-item",22)(116,"span",17),t(117),n(118,"translate"),a(),i(119,"span",19),t(120),n(121,"translate"),a()()()(),i(122,"div",13)(123,"pre"),t(124,"              "),d(125,"code",14),t(126,`
            `),a()(),i(127,"div",15)(128,"pre"),t(129,"              "),d(130,"code",16),t(131,`
            `),a()()()(),i(132,"div",7)(133,"app-code-view",8)(134,"h4",9),t(135),n(136,"translate"),a(),i(137,"div",10)(138,"mat-selection-list",null,0),ie(140,Bo,2,1,"mat-list-option",null,de),a(),i(142,"p",23),t(143),n(144,"translate"),a()(),i(145,"div",13)(146,"pre"),t(147,"              "),d(148,"code",14),t(149,`
            `),a()(),i(150,"div",15)(151,"pre"),t(152,"              "),d(153,"code",16),t(154,`
            `),a()()()(),i(155,"div",7)(156,"app-code-view",8)(157,"h4",9),t(158),n(159,"translate"),a(),i(160,"div",10)(161,"mat-selection-list",24,1),ie(163,yo,2,2,"mat-list-option",25,de),a(),i(165,"p",23),t(166),n(167,"translate"),n(168,"translate"),a()(),i(169,"div",13)(170,"pre"),t(171,"              "),d(172,"code",14),t(173,`
            `),a()(),i(174,"div",15)(175,"pre"),t(176,"              "),d(177,"code",16),t(178,`
            `),a()()()(),i(179,"div",26)(180,"app-code-view",8)(181,"h4",9),t(182),n(183,"translate"),a(),i(184,"div",10)(185,"mat-list")(186,"div",27),t(187),n(188,"translate"),a(),ie(189,Ao,8,4,"mat-list-item",null,ya),d(191,"mat-divider"),i(192,"div",28),t(193),n(194,"translate"),a(),ie(195,wo,8,4,"mat-list-item",null,ya),a()(),i(197,"div",13)(198,"pre"),t(199,"              "),d(200,"code",14),t(201,`
            `),a()(),i(202,"div",15)(203,"pre"),t(204,"              "),d(205,"code",16),t(206,`
            `),a()()()()()()()),c&2){let h=F(139),g=F(162);e(3),s(o(4,53,"UI_COMPONENTS.lists.title")),e(5),l("isTitle",!0),e(2),p(" ",o(11,55,"UI_COMPONENTS.lists.basic")," "),e(5),s(o(16,57,"UI_COMPONENTS.lists.item1")),e(3),s(o(19,59,"UI_COMPONENTS.lists.item2")),e(3),s(o(22,61,"UI_COMPONENTS.lists.item3")),e(5),l("highlight",r.codeForBasicList),e(5),l("highlightAuto",r.codeForBasicListTs),e(3),l("isTitle",!0),e(2),p(" ",o(37,63,"UI_COMPONENTS.lists.twoLine")," "),e(6),s(o(43,65,"UI_COMPONENTS.lists.listTitle")),e(3),s(o(46,67,"UI_COMPONENTS.lists.secondLine")),e(4),s(o(50,69,"UI_COMPONENTS.lists.listTitle")),e(3),s(o(53,71,"UI_COMPONENTS.lists.secondLine")),e(5),l("highlight",r.codeForTwolineList),e(5),l("highlightAuto",r.codeForTwolineListTs),e(3),l("isTitle",!0),e(2),p(" ",o(68,73,"UI_COMPONENTS.lists.threeLine")," "),e(6),s(o(74,75,"UI_COMPONENTS.lists.listTitle")),e(3),s(o(77,77,"UI_COMPONENTS.lists.secondLine")),e(3),s(o(80,79,"UI_COMPONENTS.lists.thirdLine")),e(4),s(o(84,81,"UI_COMPONENTS.lists.listTitle")),e(3),s(o(87,83,"UI_COMPONENTS.lists.secondLineTruncate")),e(3),s(o(90,85,"UI_COMPONENTS.lists.thirdLine")),e(5),l("highlight",r.codeForThreelineList),e(5),l("highlightAuto",r.codeForThreelineListTs),e(3),l("isTitle",!0),e(2),p(" ",o(105,87,"UI_COMPONENTS.lists.threeLineTextWrapping")," "),e(6),s(o(111,89,"UI_COMPONENTS.lists.listTitle")),e(3),p("",o(114,91,"UI_COMPONENTS.lists.wrappingText")," "),e(4),s(o(118,93,"UI_COMPONENTS.lists.listTitle")),e(3),p("",o(121,95,"UI_COMPONENTS.lists.wrappingText")," "),e(5),l("highlight",r.codeForThreelineList),e(5),l("highlightAuto",r.codeForThreelineListTs),e(3),l("isTitle",!0),e(2),p(" ",o(136,97,"UI_COMPONENTS.lists.listWithSelection")," "),e(5),ae(r.typesOfShoes),e(3),Z(" ",o(144,99,"UI_COMPONENTS.lists.optionsSelected")," ",h.selectedOptions.selected.length," "),e(5),l("highlight",r.codeForSelectionList),e(5),l("highlightAuto",r.codeForSelectionListTs),e(3),l("isTitle",!0),e(2),p(" ",o(159,101,"UI_COMPONENTS.lists.listWithSingleSelection")," "),e(3),l("multiple",!1),e(2),ae(r.typesOfShoes),e(3),Z(" ",o(167,103,"UI_COMPONENTS.lists.optionSelected")," ",g.selectedOptions.hasValue()?g.selectedOptions.selected[0].value:o(168,105,"UI_COMPONENTS.lists.none")," "),e(6),l("highlight",r.codeForSingleSelectionList),e(5),l("highlightAuto",r.codeForSingleSelectionListTs),e(3),l("isTitle",!0),e(2),p(" ",o(183,107,"UI_COMPONENTS.lists.listWithSections")," "),e(5),s(o(188,109,"UI_COMPONENTS.lists.folders")),e(2),ae(r.folders),e(4),s(o(194,111,"UI_COMPONENTS.lists.notes")),e(2),ae(r.notes),e(5),l("highlight",r.codeForSectionsList),e(5),l("highlightAuto",r.codeForSectionsListTs)}},dependencies:[it,et,ii,tt,ei,$t,ti,Ze,Zt,Jt,C,w,L,D,ee,$,Ai,N,P,O,x,He,b],encapsulation:2})}}return m})();var wa=`  <button mat-flat-button color="primary" class="m-t-8" [matMenuTriggerFor]="menu">
              Menu
            </button>
            <mat-menu #menu="matMenu" class="cardWithShadow">
              <button mat-menu-item>Item 1</button>
              <button mat-menu-item>Item 2</button>
            </mat-menu>
`,Da=`  <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
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
`,La=`  <button mat-flat-button color="primary" [matMenuTriggerFor]="animals" class="m-t-8">
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
`,Fa=`  <div class="row">
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
`;var De=`  import {Component} from '@angular/core';
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
`;var Ua=(()=>{class m{constructor(){this.codeForMenuBasic=wa,this.codeForMenuBasicTs=De,this.codeForMenuIcons=Da,this.codeForMenuIconsTs=De,this.codeForMenuNested=La,this.codeForMenuNestedTs=De,this.codeForMenuPositions=Fa,this.codeForMenuPositionsTs=De}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-menu"]],decls:253,vars:180,consts:[["menu","matMenu"],["animals","matMenu"],["vertebrates","matMenu"],["invertebrates","matMenu"],["fish","matMenu"],["amphibians","matMenu"],["reptiles","matMenu"],["aboveMenu","matMenu"],["belowMenu","matMenu"],["beforeMenu","matMenu"],["afterMenu","matMenu"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["mat-flat-button","","color","primary",1,"m-t-8",3,"matMenuTriggerFor"],[1,"cardWithShadow"],["mat-menu-item",""],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["name","dots",1,"icon-20"],["mat-menu-item","","disabled",""],["mat-menu-item","",3,"matMenuTriggerFor"],[1,"col-12"],[1,"col-sm-3"],["mat-flat-button","","color","primary",1,"w-100",3,"matMenuTriggerFor"],["yPosition","above",1,"cardWithShadow"],["mat-flat-button","","color","accent",1,"w-100",3,"matMenuTriggerFor"],["yPosition","below",1,"cardWithShadow"],["mat-flat-button","","color","warn",1,"w-100",3,"matMenuTriggerFor"],["xPosition","before",1,"cardWithShadow"],["xPosition","after",1,"cardWithShadow"]],template:function(c,r){if(c&1&&(i(0,"mat-card",11)(1,"div",12)(2,"mat-card-title",13),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",14)(6,"div",15)(7,"div",16)(8,"app-code-view",17)(9,"h4",18),t(10),n(11,"translate"),a(),i(12,"div",19)(13,"button",20),t(14),n(15,"translate"),a(),i(16,"mat-menu",21,0)(18,"button",22),t(19),n(20,"translate"),a(),i(21,"button",22),t(22),n(23,"translate"),a()()(),i(24,"div",23)(25,"pre"),t(26,"              "),d(27,"code",24),t(28,`
            `),a()(),i(29,"div",25)(30,"pre"),t(31,"              "),d(32,"code",26),t(33,`
            `),a()()()(),i(34,"div",16)(35,"app-code-view",17)(36,"h4",18),t(37),n(38,"translate"),a(),i(39,"div",19)(40,"button",27)(41,"mat-icon"),d(42,"i-tabler",28),a()(),i(43,"mat-menu",21,0)(45,"button",22)(46,"mat-icon"),t(47,"dialpad"),a(),i(48,"span"),t(49),n(50,"translate"),a()(),i(51,"button",29)(52,"mat-icon"),t(53,"voicemail"),a(),i(54,"span"),t(55),n(56,"translate"),a()(),i(57,"button",22)(58,"mat-icon"),t(59,"notifications_off"),a(),i(60,"span"),t(61),n(62,"translate"),a()()()(),i(63,"div",23)(64,"pre"),t(65,"              "),d(66,"code",24),t(67,`
            `),a()(),i(68,"div",25)(69,"pre"),t(70,"              "),d(71,"code",26),t(72,`
            `),a()()()(),i(73,"div",16)(74,"app-code-view",17)(75,"h4",18),t(76),n(77,"translate"),a(),i(78,"div",19)(79,"button",20),t(80),n(81,"translate"),a(),i(82,"mat-menu",21,1)(84,"button",30),t(85),n(86,"translate"),a(),i(87,"button",30),t(88),n(89,"translate"),a()(),i(90,"mat-menu",21,2)(92,"button",30),t(93),n(94,"translate"),a(),i(95,"button",30),t(96),n(97,"translate"),a(),i(98,"button",30),t(99),n(100,"translate"),a(),i(101,"button",22),t(102),n(103,"translate"),a(),i(104,"button",22),t(105),n(106,"translate"),a()(),i(107,"mat-menu",21,3)(109,"button",22),t(110),n(111,"translate"),a(),i(112,"button",22),t(113),n(114,"translate"),a(),i(115,"button",22),t(116),n(117,"translate"),a(),i(118,"button",22),t(119),n(120,"translate"),a(),i(121,"button",22),t(122),n(123,"translate"),a(),i(124,"button",22),t(125),n(126,"translate"),a(),i(127,"button",22),t(128),n(129,"translate"),a()(),i(130,"mat-menu",21,4)(132,"button",22),t(133),n(134,"translate"),a(),i(135,"button",22),t(136),n(137,"translate"),a(),i(138,"button",22),t(139),n(140,"translate"),a(),i(141,"button",22),t(142),n(143,"translate"),a(),i(144,"button",22),t(145),n(146,"translate"),a()(),i(147,"mat-menu",21,5)(149,"button",22),t(150),n(151,"translate"),a(),i(152,"button",22),t(153),n(154,"translate"),a(),i(155,"button",22),t(156),n(157,"translate"),a(),i(158,"button",22),t(159),n(160,"translate"),a()(),i(161,"mat-menu",21,6)(163,"button",22),t(164),n(165,"translate"),a(),i(166,"button",22),t(167),n(168,"translate"),a(),i(169,"button",22),t(170),n(171,"translate"),a(),i(172,"button",22),t(173),n(174,"translate"),a(),i(175,"button",29),t(176),n(177,"translate"),a()()(),i(178,"div",23)(179,"pre"),t(180,"              "),d(181,"code",24),t(182,`
            `),a()(),i(183,"div",25)(184,"pre"),t(185,"              "),d(186,"code",26),t(187,`
            `),a()()()(),i(188,"div",31)(189,"app-code-view",17)(190,"h4",18),t(191),n(192,"translate"),a(),i(193,"div",19)(194,"div",15)(195,"div",32)(196,"button",33),t(197),n(198,"translate"),a(),i(199,"mat-menu",34,7)(201,"button",22),t(202),n(203,"translate"),a(),i(204,"button",22),t(205),n(206,"translate"),a()()(),i(207,"div",32)(208,"button",35),t(209),n(210,"translate"),a(),i(211,"mat-menu",36,8)(213,"button",22),t(214),n(215,"translate"),a(),i(216,"button",22),t(217),n(218,"translate"),a()()(),i(219,"div",32)(220,"button",37),t(221),n(222,"translate"),a(),i(223,"mat-menu",38,9)(225,"button",22),t(226),n(227,"translate"),a(),i(228,"button",22),t(229),n(230,"translate"),a()()(),i(231,"div",32)(232,"button",33),t(233),n(234,"translate"),a(),i(235,"mat-menu",39,10)(237,"button",22),t(238),n(239,"translate"),a(),i(240,"button",22),t(241),n(242,"translate"),a()()()()(),i(243,"div",23)(244,"pre"),t(245,"              "),d(246,"code",24),t(247,`
            `),a()(),i(248,"div",25)(249,"pre"),t(250,"              "),d(251,"code",26),t(252,`
            `),a()()()()()()()),c&2){let h=F(17),g=F(83),f=F(91),dt=F(108),oo=F(131),ro=F(148),lo=F(162),po=F(200),mo=F(212),so=F(224),co=F(236);e(3),s(o(4,76,"UI_COMPONENTS.menu.title")),e(5),l("isTitle",!0),e(2),p(" ",o(11,78,"UI_COMPONENTS.menu.basic")," "),e(3),l("matMenuTriggerFor",h),e(),p(" ",o(15,80,"UI_COMPONENTS.menu.menuButton")," "),e(5),s(o(20,82,"UI_COMPONENTS.menu.item1")),e(3),s(o(23,84,"UI_COMPONENTS.menu.item2")),e(5),l("highlight",r.codeForMenuBasic),e(5),l("highlightAuto",r.codeForMenuBasicTs),e(3),l("isTitle",!0),e(2),p(" ",o(38,86,"UI_COMPONENTS.menu.withIcons")," "),e(3),l("matMenuTriggerFor",h),e(9),s(o(50,88,"UI_COMPONENTS.menu.redial")),e(6),s(o(56,90,"UI_COMPONENTS.menu.checkVoiceMail")),e(6),s(o(62,92,"UI_COMPONENTS.menu.disableAlerts")),e(5),l("highlight",r.codeForMenuIcons),e(5),l("highlightAuto",r.codeForMenuIconsTs),e(3),l("isTitle",!0),e(2),p(" ",o(77,94,"UI_COMPONENTS.menu.nestedMenu")," "),e(3),l("matMenuTriggerFor",g),e(),p(" ",o(81,96,"UI_COMPONENTS.menu.animalIndex")," "),e(4),l("matMenuTriggerFor",f),e(),p(" ",o(86,98,"UI_COMPONENTS.menu.vertebrates")," "),e(2),l("matMenuTriggerFor",dt),e(),p(" ",o(89,100,"UI_COMPONENTS.menu.invertebrates")," "),e(4),l("matMenuTriggerFor",oo),e(),s(o(94,102,"UI_COMPONENTS.menu.fishes")),e(2),l("matMenuTriggerFor",ro),e(),p(" ",o(97,104,"UI_COMPONENTS.menu.amphibians")," "),e(2),l("matMenuTriggerFor",lo),e(),p(" ",o(100,106,"UI_COMPONENTS.menu.reptiles")," "),e(3),s(o(103,108,"UI_COMPONENTS.menu.birds")),e(3),s(o(106,110,"UI_COMPONENTS.menu.mammals")),e(5),s(o(111,112,"UI_COMPONENTS.menu.insects")),e(3),s(o(114,114,"UI_COMPONENTS.menu.molluscs")),e(3),s(o(117,116,"UI_COMPONENTS.menu.crustaceans")),e(3),s(o(120,118,"UI_COMPONENTS.menu.corals")),e(3),s(o(123,120,"UI_COMPONENTS.menu.arachnids")),e(3),s(o(126,122,"UI_COMPONENTS.menu.velvetWorms")),e(3),s(o(129,124,"UI_COMPONENTS.menu.horseshoeCrabs")),e(5),s(o(134,126,"UI_COMPONENTS.menu.baikalOilfish")),e(3),s(o(137,128,"UI_COMPONENTS.menu.balaShark")),e(3),s(o(140,130,"UI_COMPONENTS.menu.ballanWrasse")),e(3),s(o(143,132,"UI_COMPONENTS.menu.bambooShark")),e(3),s(o(146,134,"UI_COMPONENTS.menu.bandedKillifish")),e(5),s(o(151,136,"UI_COMPONENTS.menu.sonoranDesertToad")),e(3),s(o(154,138,"UI_COMPONENTS.menu.westernToad")),e(3),s(o(157,140,"UI_COMPONENTS.menu.arroyoToad")),e(3),s(o(160,142,"UI_COMPONENTS.menu.yosemiteToad")),e(5),s(o(165,144,"UI_COMPONENTS.menu.bandedDayGecko")),e(3),s(o(168,146,"UI_COMPONENTS.menu.bandedGilaMonster")),e(3),s(o(171,148,"UI_COMPONENTS.menu.blackTreeMonitor")),e(3),s(o(174,150,"UI_COMPONENTS.menu.blueSpinyLizard")),e(3),s(o(177,152,"UI_COMPONENTS.menu.velociraptor")),e(5),l("highlight",r.codeForMenuNested),e(5),l("highlightAuto",r.codeForMenuNestedTs),e(3),l("isTitle",!0),e(2),p(" ",o(192,154,"UI_COMPONENTS.menu.positions")," "),e(5),l("matMenuTriggerFor",po),e(),p(" ",o(198,156,"UI_COMPONENTS.menu.above")," "),e(5),s(o(203,158,"UI_COMPONENTS.menu.item1")),e(3),s(o(206,160,"UI_COMPONENTS.menu.item2")),e(3),l("matMenuTriggerFor",mo),e(),p(" ",o(210,162,"UI_COMPONENTS.menu.below")," "),e(5),s(o(215,164,"UI_COMPONENTS.menu.item1")),e(3),s(o(218,166,"UI_COMPONENTS.menu.item2")),e(3),l("matMenuTriggerFor",so),e(),p(" ",o(222,168,"UI_COMPONENTS.menu.before")," "),e(5),s(o(227,170,"UI_COMPONENTS.menu.item1")),e(3),s(o(230,172,"UI_COMPONENTS.menu.item2")),e(3),l("matMenuTriggerFor",co),e(),p(" ",o(234,174,"UI_COMPONENTS.menu.after")," "),e(5),s(o(239,176,"UI_COMPONENTS.menu.item1")),e(3),s(o(242,178,"UI_COMPONENTS.menu.item2")),e(5),l("highlight",r.codeForMenuPositions),e(5),l("highlightAuto",r.codeForMenuPositionsTs)}},dependencies:[C,w,L,D,Je,Qe,qe,Ye,ee,$,le,ge,U,k,Ge,N,P,O,x,I,b],encapsulation:2})}}return m})();var ka=`  <mat-paginator
          [length]="100"
          [pageSize]="10"
          [pageSizeOptions]="[5, 10, 25, 100]"
          aria-label="Select page"
        >
        </mat-paginator>
`;var Ra=`  import {Component} from '@angular/core';
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
`;var Do=()=>[5,10,25,100],Ha=(()=>{class m{constructor(){this.codeForPaginatorBasic=ka,this.codeForPaginatorBasicTs=Ra}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-paginator"]],decls:23,vars:16,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],[3,"length","pageSize","pageSizeOptions"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"]],template:function(c,r){c&1&&(i(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",3)(6,"app-code-view",4)(7,"h4",5),t(8),n(9,"translate"),a(),i(10,"div",6),d(11,"mat-paginator",7),n(12,"translate"),a(),i(13,"div",8)(14,"pre"),t(15,"          "),d(16,"code",9),t(17,`
        `),a()(),i(18,"div",10)(19,"pre"),t(20,"          "),d(21,"code",11),t(22,`
        `),a()()()()()),c&2&&(e(3),s(o(4,9,"UI_COMPONENTS.paginator.title")),e(3),l("isTitle",!0),e(2),p(" ",o(9,11,"UI_COMPONENTS.paginator.basic")," "),e(3),l("length",100)("pageSize",10)("pageSizeOptions",_t(15,Do)),ve("aria-label",o(12,13,"UI_COMPONENTS.paginator.selectPage")),e(5),l("highlight",r.codeForPaginatorBasic),e(5),l("highlightAuto",r.codeForPaginatorBasicTs))},dependencies:[G,Y,R,Xe,yi,Bi,C,w,L,D,N,P,O,x,I,b],encapsulation:2})}}return m})();var Va=`  <mat-spinner></mat-spinner>
`,Wa=`  <h2 class="f-w-600 m-b-16 example-h2">Progress spinner configuration</h2>

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
`;var Ga=`  import {Component} from '@angular/core';
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
`,za=`  import {Component} from '@angular/core';
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
`;function Fo(m,S){if(m&1){let u=W();i(0,"section",12)(1,"label",13),t(2),n(3,"translate"),a(),i(4,"mat-slider",13)(5,"input",20),A("ngModelChange",function(r){_(u);let h=H();return y(h.value,r)||(h.value=r),M(r)}),a()()()}if(m&2){let u=H();e(2),s(o(3,2,"UI_COMPONENTS.progressSpinner.progress")),e(3),B("ngModel",u.value)}}var Ka=(()=>{class m{constructor(){this.codeForProgressSpinnerBasic=Va,this.codeForProgressSpinnerBasicTs=Ga,this.codeForProgressSpinnerConfigurable=Wa,this.codeForProgressSpinnerConfigurableTs=za,this.mode="determinate",this.value=50}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-progress-snipper"]],decls:57,vars:34,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"f-w-600","m-b-16","example-h2"],[1,"example-section"],[1,"example-margin"],[3,"ngModelChange","ngModel"],["value","determinate",1,"example-margin"],["value","indeterminate",1,"example-margin"],[1,"p-24","rounded","bg-light-primary","m-t-16"],[1,"f-s-16","f-w-600","m-b-16","example-h2"],[1,"example-margin",3,"mode","value"],["type","range","matSliderThumb","",3,"ngModelChange","ngModel"]],template:function(c,r){c&1&&(i(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",3)(6,"app-code-view",4)(7,"h4",5),t(8),n(9,"translate"),a(),i(10,"div",6),d(11,"mat-spinner"),a(),i(12,"div",7)(13,"pre"),t(14,"          "),d(15,"code",8),t(16,`
        `),a()(),i(17,"div",9)(18,"pre"),t(19,"          "),d(20,"code",10),t(21,`
        `),a()()(),i(22,"app-code-view",4)(23,"h4",5),t(24),n(25,"translate"),a(),i(26,"div",6)(27,"h2",11),t(28),n(29,"translate"),a(),i(30,"section",12)(31,"label",13),t(32),n(33,"translate"),a(),i(34,"mat-radio-group",14),A("ngModelChange",function(g){return y(r.mode,g)||(r.mode=g),g}),i(35,"mat-radio-button",15),t(36),n(37,"translate"),a(),i(38,"mat-radio-button",16),t(39),n(40,"translate"),a()()(),oe(41,Fo,6,4,"section",12),i(42,"div",17)(43,"h2",18),t(44),n(45,"translate"),a(),d(46,"mat-progress-spinner",19),a()(),i(47,"div",7)(48,"pre"),t(49,"          "),d(50,"code",8),t(51,`
        `),a()(),i(52,"div",9)(53,"pre"),t(54,"          "),d(55,"code",10),t(56,`
        `),a()()()()()),c&2&&(e(3),s(o(4,18,"UI_COMPONENTS.progressSpinner.title")),e(3),l("isTitle",!0),e(2),p(" ",o(9,20,"UI_COMPONENTS.progressSpinner.basic")," "),e(7),l("highlight",r.codeForProgressSpinnerBasic),e(5),l("highlightAuto",r.codeForProgressSpinnerBasicTs),e(2),l("isTitle",!0),e(2),p(" ",o(25,22,"UI_COMPONENTS.progressSpinner.configurable")," "),e(4),s(o(29,24,"UI_COMPONENTS.progressSpinner.configuration")),e(4),s(o(33,26,"UI_COMPONENTS.progressSpinner.mode")),e(2),B("ngModel",r.mode),e(2),p(" ",o(37,28,"UI_COMPONENTS.progressSpinner.determinate")," "),e(3),p(" ",o(40,30,"UI_COMPONENTS.progressSpinner.indeterminate")," "),e(2),re(r.mode==="determinate"?41:-1),e(3),s(o(45,32,"UI_COMPONENTS.progressSpinner.result")),e(2),l("mode",r.mode)("value",r.value),e(4),l("highlight",r.codeForProgressSpinnerConfigurable),e(5),l("highlightAuto",r.codeForProgressSpinnerConfigurableTs))},dependencies:[C,w,L,D,fe,ze,je,R,K,Ve,V,X,Ie,_e,Me,Ii,Mi,N,P,O,x,I,b],encapsulation:2})}}return m})();var Xa=`  <mat-progress-bar mode="determinate" value="40"></mat-progress-bar>
`,qa=`  <mat-progress-bar mode="indeterminate"></mat-progress-bar>
`,Qa=`  <mat-progress-bar mode="query"></mat-progress-bar>
`,Ya=`  <mat-progress-bar mode="buffer"></mat-progress-bar>
`,Ja=`  <section class="example-section">
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
`;var Le=`  import {Component} from '@angular/core';
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
`,Za=`  import {Component} from '@angular/core';
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
`;function Uo(m,S){if(m&1){let u=W();i(0,"section",15)(1,"label",16),t(2),n(3,"translate"),a(),i(4,"mat-slider",16)(5,"input",25),A("ngModelChange",function(r){_(u);let h=H();return y(h.value,r)||(h.value=r),M(r)}),a()()()}if(m&2){let u=H();e(2),s(o(3,2,"UI_COMPONENTS.progressBar.progress")),e(3),B("ngModel",u.value)}}function ko(m,S){if(m&1){let u=W();i(0,"section",15)(1,"label",16),t(2),n(3,"translate"),a(),i(4,"mat-slider",16)(5,"input",25),A("ngModelChange",function(r){_(u);let h=H();return y(h.bufferValue,r)||(h.bufferValue=r),M(r)}),a()()()}if(m&2){let u=H();e(2),s(o(3,2,"UI_COMPONENTS.progressBar.bufferLabel")),e(3),B("ngModel",u.bufferValue)}}var $a=(()=>{class m{constructor(){this.codeForProgressDeterminate=Xa,this.codeForProgressDeterminateTs=Le,this.codeForProgressIndeterminate=qa,this.codeForProgressIndeterminateTs=Le,this.codeForProgressQuery=Qa,this.codeForProgressQueryTs=Le,this.codeForProgressBuffer=Ya,this.codeForProgressBufferTs=Le,this.codeForProgressConfigurable=Ja,this.codeForProgressConfigurableTs=Za,this.mode="determinate",this.value=50,this.bufferValue=75}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-progress"]],decls:110,vars:57,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["mode","determinate","value","40"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mode","indeterminate"],["mode","query"],["mode","buffer"],[1,"example-section"],[1,"example-margin"],[3,"ngModelChange","ngModel"],["value","determinate",1,"example-margin"],["value","indeterminate",1,"example-margin"],["value","buffer",1,"example-margin"],["value","query",1,"example-margin"],[1,"p-24","rounded","bg-light-primary","m-t-16"],[1,"f-s-16","f-w-600","m-b-16","example-h2"],[1,"example-margin",3,"mode","value","bufferValue"],["type","range","matSliderThumb","",3,"ngModelChange","ngModel"]],template:function(c,r){c&1&&(i(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",3)(6,"app-code-view",4)(7,"h4",5),t(8),n(9,"translate"),a(),i(10,"div",6),d(11,"mat-progress-bar",7),a(),i(12,"div",8)(13,"pre"),t(14,"          "),d(15,"code",9),t(16,`
        `),a()(),i(17,"div",10)(18,"pre"),t(19,"          "),d(20,"code",11),t(21,`
        `),a()()(),i(22,"app-code-view",4)(23,"h4",5),t(24),n(25,"translate"),a(),i(26,"div",6),d(27,"mat-progress-bar",12),a(),i(28,"div",8)(29,"pre"),t(30,"          "),d(31,"code",9),t(32,`
        `),a()(),i(33,"div",10)(34,"pre"),t(35,"          "),d(36,"code",11),t(37,`
        `),a()()(),i(38,"app-code-view",4)(39,"h4",5),t(40),n(41,"translate"),a(),i(42,"div",6),d(43,"mat-progress-bar",13),a(),i(44,"div",8)(45,"pre"),t(46,"          "),d(47,"code",9),t(48,`
        `),a()(),i(49,"div",10)(50,"pre"),t(51,"          "),d(52,"code",11),t(53,`
        `),a()()(),i(54,"app-code-view",4)(55,"h4",5),t(56),n(57,"translate"),a(),i(58,"div",6),d(59,"mat-progress-bar",14),a(),i(60,"div",8)(61,"pre"),t(62,"          "),d(63,"code",9),t(64,`
        `),a()(),i(65,"div",10)(66,"pre"),t(67,"          "),d(68,"code",11),t(69,`
        `),a()()(),i(70,"app-code-view",4)(71,"h4",5),t(72),n(73,"translate"),a(),i(74,"div",6)(75,"section",15)(76,"label",16),t(77),n(78,"translate"),a(),i(79,"mat-radio-group",17),A("ngModelChange",function(g){return y(r.mode,g)||(r.mode=g),g}),i(80,"mat-radio-button",18),t(81),n(82,"translate"),a(),i(83,"mat-radio-button",19),t(84),n(85,"translate"),a(),i(86,"mat-radio-button",20),t(87),n(88,"translate"),a(),i(89,"mat-radio-button",21),t(90),n(91,"translate"),a()()(),oe(92,Uo,6,4,"section",15),oe(93,ko,6,4,"section",15),i(94,"div",22)(95,"h2",23),t(96),n(97,"translate"),a(),i(98,"section",15),d(99,"mat-progress-bar",24),a()()(),i(100,"div",8)(101,"pre"),t(102,"          "),d(103,"code",9),t(104,`
        `),a()(),i(105,"div",10)(106,"pre"),t(107,"          "),d(108,"code",11),t(109,`
        `),a()()()()()),c&2&&(e(3),s(o(4,33,"UI_COMPONENTS.progressBar.title")),e(3),l("isTitle",!0),e(2),p(" ",o(9,35,"UI_COMPONENTS.progressBar.determinate")," "),e(7),l("highlight",r.codeForProgressDeterminate),e(5),l("highlightAuto",r.codeForProgressDeterminateTs),e(2),l("isTitle",!0),e(2),p(" ",o(25,37,"UI_COMPONENTS.progressBar.indeterminate")," "),e(7),l("highlight",r.codeForProgressIndeterminate),e(5),l("highlightAuto",r.codeForProgressIndeterminateTs),e(2),l("isTitle",!0),e(2),p(" ",o(41,39,"UI_COMPONENTS.progressBar.query")," "),e(7),l("highlight",r.codeForProgressQuery),e(5),l("highlightAuto",r.codeForProgressQueryTs),e(2),l("isTitle",!0),e(2),p(" ",o(57,41,"UI_COMPONENTS.progressBar.buffer")," "),e(7),l("highlight",r.codeForProgressBuffer),e(5),l("highlightAuto",r.codeForProgressBufferTs),e(2),l("isTitle",!0),e(2),p(" ",o(73,43,"UI_COMPONENTS.progressBar.configurable")," "),e(5),s(o(78,45,"UI_COMPONENTS.progressBar.mode")),e(2),B("ngModel",r.mode),e(2),p(" ",o(82,47,"UI_COMPONENTS.progressBar.determinate")," "),e(3),p(" ",o(85,49,"UI_COMPONENTS.progressBar.indeterminate")," "),e(3),p(" ",o(88,51,"UI_COMPONENTS.progressBar.buffer")," "),e(3),p(" ",o(91,53,"UI_COMPONENTS.progressBar.query")," "),e(2),re(r.mode==="determinate"||r.mode==="buffer"?92:-1),e(),re(r.mode==="buffer"?93:-1),e(3),s(o(97,55,"UI_COMPONENTS.progressBar.result")),e(3),l("mode",r.mode)("value",r.value)("bufferValue",r.bufferValue),e(4),l("highlight",r.codeForProgressConfigurable),e(5),l("highlightAuto",r.codeForProgressConfigurableTs))},dependencies:[Ci,Ei,C,w,L,D,R,K,Ve,V,X,Ie,_e,Me,fe,ze,je,N,P,O,x,I,b],encapsulation:2})}}return m})();var en=`  <mat-checkbox [(ngModel)]="centered" class="example-ripple-checkbox" color="primary">Centered</mat-checkbox>
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
`;var tn=`  import {Component} from '@angular/core';
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
`;var an=(()=>{class m{constructor(){this.codeForRipple=en,this.codeForRippleTs=tn,this.centered=!1,this.disabled=!1,this.unbounded=!1}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-ripples"]],decls:38,vars:34,consts:[[3,"isTitle"],["Ctitle",""],["output",""],["color","primary",1,"example-ripple-checkbox",3,"ngModelChange","ngModel"],["appearance","outline",1,"example-ripple-form-field"],["matInput","","type","number",3,"ngModelChange","ngModel"],["matInput","","type","text",3,"ngModelChange","ngModel"],["matRipple","",1,"example-ripple-container","cardWithShadow",3,"matRippleCentered","matRippleDisabled","matRippleUnbounded","matRippleRadius","matRippleColor"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"]],template:function(c,r){c&1&&(i(0,"app-code-view",0)(1,"h4",1),t(2),n(3,"translate"),a(),i(4,"div",2)(5,"mat-checkbox",3),A("ngModelChange",function(g){return y(r.centered,g)||(r.centered=g),g}),t(6),n(7,"translate"),a(),i(8,"mat-checkbox",3),A("ngModelChange",function(g){return y(r.disabled,g)||(r.disabled=g),g}),t(9),n(10,"translate"),a(),i(11,"mat-checkbox",3),A("ngModelChange",function(g){return y(r.unbounded,g)||(r.unbounded=g),g}),t(12),n(13,"translate"),a(),i(14,"div")(15,"mat-form-field",4)(16,"mat-label"),t(17),n(18,"translate"),a(),i(19,"input",5),A("ngModelChange",function(g){return y(r.radius,g)||(r.radius=g),g}),a()(),i(20,"mat-form-field",4)(21,"mat-label"),t(22),n(23,"translate"),a(),i(24,"input",6),A("ngModelChange",function(g){return y(r.color,g)||(r.color=g),g}),a()()(),i(25,"div",7),t(26),n(27,"translate"),a()(),i(28,"div",8)(29,"pre"),t(30,"      "),d(31,"code",9),t(32,`
    `),a()(),i(33,"div",10)(34,"pre"),t(35,"      "),d(36,"code",11),t(37,`
    `),a()()()),c&2&&(l("isTitle",!0),e(2),p(" ",o(3,20,"UI_COMPONENTS.ripples.title")," "),e(3),B("ngModel",r.centered),e(),s(o(7,22,"UI_COMPONENTS.ripples.centered")),e(2),B("ngModel",r.disabled),e(),s(o(10,24,"UI_COMPONENTS.ripples.disabled")),e(2),B("ngModel",r.unbounded),e(),s(o(13,26,"UI_COMPONENTS.ripples.unbounded")),e(5),s(o(18,28,"UI_COMPONENTS.ripples.radius")),e(2),B("ngModel",r.radius),e(3),s(o(23,30,"UI_COMPONENTS.ripples.color")),e(2),B("ngModel",r.color),e(),l("matRippleCentered",r.centered)("matRippleDisabled",r.disabled)("matRippleUnbounded",r.unbounded)("matRippleRadius",r.radius)("matRippleColor",r.color),e(),p(" ",o(27,32,"UI_COMPONENTS.ripples.clickMe")," "),e(5),l("highlight",r.codeForRipple),e(5),l("highlightAuto",r.codeForRippleTs))},dependencies:[ue,ce,R,K,se,V,X,G,Q,q,Y,te,Lt,Et,C,N,P,O,x,I,b],styles:[".example-ripple-container[_ngcontent-%COMP%]{cursor:pointer;text-align:center;width:300px;height:300px;line-height:300px;user-select:none;-webkit-user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:transparent}.example-ripple-checkbox[_ngcontent-%COMP%]{margin:6px 12px 6px 0}.example-ripple-form-field[_ngcontent-%COMP%]{margin:0 12px 0 0}"]})}}return m})();var nn=`  <mat-slide-toggle color="primary">Slide me!</mat-slide-toggle>
`,on=`  <h4 class="f-w-500 f-s-16 m-b-16">Slide Toggle using a simple NgModel.</h4>

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
`,rn=`  <h2 class="example-h2 f-w-600 m-b-16">Slide toggle configuration</h2>

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
`;var ln=`  import {Component} from '@angular/core';
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
`,pn=`  import {Component, inject} from '@angular/core';
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
`,mn=`  import {Component} from '@angular/core';
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
`;var dn=(()=>{class m{constructor(){this.codeForSlideToggleBasic=nn,this.codeForSlideToggleBasicTs=ln,this.codeForSlideToggleForm=on,this.codeForSlideToggleFormTs=pn,this.codeForSlideToggleConfiguration=rn,this.codeForSlideToggleConfigurationTs=mn,this.checked=!1,this.disabled=!1,this._formBuilder=me(wt),this.isChecked=!0,this.formGroup=this._formBuilder.group({enableWifi:"",acceptTerms:["",xt.requiredTrue]})}alertFormValues(u){alert(JSON.stringify(u.value,null,2))}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-slide-toggle"]],decls:116,vars:80,consts:[["form","ngForm"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["color","primary"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"f-w-500","f-s-16","m-b-16"],[3,"ngModelChange","ngModel"],[1,"row"],[1,"col-md-6"],[1,"f-w-500","f-s-16","m-b-16","m-t-20"],[3,"ngSubmit"],[1,"d-flex","flex-col","gap-12"],["ngModel","","name","enableWifi"],["ngModel","","name","acceptTerms","required",""],["mat-flat-button","","type","submit"],["ngNativeValidate","",3,"ngSubmit","formGroup"],["formControlName","enableWifi"],["formControlName","acceptTerms"],[1,"example-h2","f-w-600","m-b-16"],[1,"example-section"],[1,"example-margin",3,"ngModelChange","ngModel"],[1,"p-24","rounded","bg-light-primary","m-t-16"],[1,"f-s-16","f-w-600","m-b-16","example-h2"],[1,"example-margin",3,"checked","disabled"]],template:function(c,r){if(c&1){let h=W();i(0,"mat-card",1)(1,"div",2)(2,"mat-card-title",3),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",4)(6,"app-code-view",5)(7,"h4",6),t(8),n(9,"translate"),a(),i(10,"div",7)(11,"mat-slide-toggle",8),t(12),n(13,"translate"),a()(),i(14,"div",9)(15,"pre"),t(16,"          "),d(17,"code",10),t(18,`
        `),a()(),i(19,"div",11)(20,"pre"),t(21,"          "),d(22,"code",12),t(23,`
        `),a()()(),i(24,"app-code-view",5)(25,"h4",6),t(26),n(27,"translate"),a(),i(28,"div",7)(29,"h4",13),t(30),n(31,"translate"),a(),i(32,"mat-slide-toggle",14),A("ngModelChange",function(f){return _(h),y(r.isChecked,f)||(r.isChecked=f),M(f)}),t(33),n(34,"translate"),a(),i(35,"div",15)(36,"div",16)(37,"h4",17),t(38),n(39,"translate"),a(),i(40,"form",18,0),T("ngSubmit",function(){_(h);let f=F(41);return M(r.alertFormValues(f.form))}),i(42,"div",19)(43,"mat-slide-toggle",20),t(44),n(45,"translate"),a(),i(46,"mat-slide-toggle",21),t(47),n(48,"translate"),a(),i(49,"div")(50,"button",22),t(51),n(52,"translate"),a()()()()(),i(53,"div",16)(54,"h4",17),t(55),n(56,"translate"),a(),i(57,"form",23),T("ngSubmit",function(){return _(h),M(r.alertFormValues(r.formGroup))}),i(58,"div",19)(59,"mat-slide-toggle",24),t(60),n(61,"translate"),a(),i(62,"mat-slide-toggle",25),t(63),n(64,"translate"),a(),i(65,"h4",17),t(66),n(67,"translate"),a(),i(68,"div")(69,"button",22),t(70),n(71,"translate"),a()()()()()()(),i(72,"div",9)(73,"pre"),t(74,"          "),d(75,"code",10),t(76,`
        `),a()(),i(77,"div",11)(78,"pre"),t(79,"          "),d(80,"code",12),t(81,`
        `),a()()(),i(82,"app-code-view",5)(83,"h4",6),t(84),n(85,"translate"),a(),i(86,"div",7)(87,"h2",26),t(88),n(89,"translate"),a(),i(90,"section",27)(91,"mat-checkbox",28),A("ngModelChange",function(f){return _(h),y(r.checked,f)||(r.checked=f),M(f)}),t(92),n(93,"translate"),a()(),i(94,"section",27)(95,"mat-checkbox",28),A("ngModelChange",function(f){return _(h),y(r.disabled,f)||(r.disabled=f),M(f)}),t(96),n(97,"translate"),a()(),i(98,"div",29)(99,"h2",30),t(100),n(101,"translate"),a(),i(102,"section",27)(103,"mat-slide-toggle",31),t(104),n(105,"translate"),a()()()(),i(106,"div",9)(107,"pre"),t(108,"          "),d(109,"code",10),t(110,`
        `),a()(),i(111,"div",11)(112,"pre"),t(113,"          "),d(114,"code",12),t(115,`
        `),a()()()()()}c&2&&(e(3),s(o(4,38,"UI_COMPONENTS.slideToggle.title")),e(3),l("isTitle",!0),e(2),p(" ",o(9,40,"UI_COMPONENTS.slideToggle.basic")," "),e(4),s(o(13,42,"UI_COMPONENTS.slideToggle.slideMe")),e(5),l("highlight",r.codeForSlideToggleBasic),e(5),l("highlightAuto",r.codeForSlideToggleBasicTs),e(2),l("isTitle",!0),e(2),p(" ",o(27,44,"UI_COMPONENTS.slideToggle.forms")," "),e(4),s(o(31,46,"UI_COMPONENTS.slideToggle.usingNgModel")),e(2),B("ngModel",r.isChecked),e(),Z("",o(34,48,"UI_COMPONENTS.slideToggle.slideToggleChecked")," ",r.isChecked),e(5),s(o(39,50,"UI_COMPONENTS.slideToggle.templateDrivenForm")),e(6),s(o(45,52,"UI_COMPONENTS.slideToggle.enableWifi")),e(3),s(o(48,54,"UI_COMPONENTS.slideToggle.acceptTerms")),e(4),s(o(52,56,"UI_COMPONENTS.slideToggle.saveSettings")),e(4),s(o(56,58,"UI_COMPONENTS.slideToggle.reactiveForm")),e(2),l("formGroup",r.formGroup),e(3),s(o(61,60,"UI_COMPONENTS.slideToggle.enableWifi")),e(3),s(o(64,62,"UI_COMPONENTS.slideToggle.acceptTerms")),e(3),Z("",o(67,64,"UI_COMPONENTS.slideToggle.formGroupStatus")," ",r.formGroup.status),e(4),s(o(71,66,"UI_COMPONENTS.slideToggle.saveSettings")),e(5),l("highlight",r.codeForSlideToggleForm),e(5),l("highlightAuto",r.codeForSlideToggleFormTs),e(2),l("isTitle",!0),e(2),p(" ",o(85,68,"UI_COMPONENTS.slideToggle.configuration")," "),e(4),s(o(89,70,"UI_COMPONENTS.slideToggle.configurationTitle")),e(3),B("ngModel",r.checked),e(),s(o(93,72,"UI_COMPONENTS.slideToggle.checked")),e(3),B("ngModel",r.disabled),e(),s(o(97,74,"UI_COMPONENTS.slideToggle.disabled")),e(4),s(o(101,76,"UI_COMPONENTS.slideToggle.result")),e(3),l("checked",r.checked)("disabled",r.disabled),e(),p(" ",o(105,78,"UI_COMPONENTS.slideToggle.slideMe")," "),e(5),l("highlight",r.codeForSlideToggleConfiguration),e(5),l("highlightAuto",r.codeForSlideToggleConfigurationTs))},dependencies:[C,w,L,D,fe,R,Ot,V,Nt,At,X,Pt,ue,ce,Xe,Ht,be,yt,Bt,U,k,N,P,O,x,I,b],encapsulation:2})}}return m})();var sn=`  <div class="row">
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
`,cn=`  <mat-slider min="0" max="100000" step="1000" showTickMarks discrete [displayWith]="formatLabel">
              <input matSliderThumb />
            </mat-slider>
`,un=`  <mat-slider>
              <input matSliderThumb />
            </mat-slider>
`,gn=`  <mat-slider min="200" max="500">
              <input value="300" matSliderStartThumb />
              <input value="400" matSliderEndThumb />
            </mat-slider>
`;var hn=`  import {Component} from '@angular/core';
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
`,Sn=`  import {Component} from '@angular/core';
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
`,St=`  import {Component} from '@angular/core';
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
`;var Tn=(()=>{class m{formatLabel(u){return u>=1e3?Math.round(u/1e3)+"k":`${u}`}constructor(){this.codeForSliderConfiguration=sn,this.codeForSliderConfigurationTs=hn,this.codeForSliderCustomThumbLabel=cn,this.codeForSliderCustomThumbLabelTs=Sn,this.codeForSliderBasic=un,this.codeForSliderBasicTs=St,this.codeForSliderRange=gn,this.codeForSliderRangeTs=St,this.disabled=!1,this.max=100,this.min=0,this.showTicks=!1,this.step=1,this.thumbLabel=!1,this.value=0}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-slider"]],decls:126,vars:70,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"row"],[1,"col-lg-3"],["appearance","outline",1,"w-100"],["matInput","","type","number",3,"ngModelChange","ngModel"],[1,"example-section"],["color","primary",3,"ngModelChange","ngModel"],[1,"p-24","rounded","bg-light","m-t-16"],[1,"f-s-16","f-w-600","m-b-16"],["id","example-name-label",1,"f-w-600","f-s-14"],[1,"f-w-500","f-s-14"],[1,"example-margin",3,"disabled","max","min","step","discrete","showTickMarks"],["matSliderThumb","",3,"ngModelChange","ngModel"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"col-lg-6"],["min","0","max","100000","step","1000","showTickMarks","","discrete","",3,"displayWith"],["matSliderThumb",""],["min","200","max","500"],["value","300","matSliderStartThumb",""],["value","400","matSliderEndThumb",""]],template:function(c,r){c&1&&(i(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",3)(6,"app-code-view",4)(7,"h4",5),t(8),n(9,"translate"),a(),i(10,"div",6)(11,"div",7)(12,"div",8)(13,"mat-form-field",9)(14,"mat-label"),t(15),n(16,"translate"),a(),i(17,"input",10),A("ngModelChange",function(g){return y(r.value,g)||(r.value=g),g}),a()()(),i(18,"div",8)(19,"mat-form-field",9)(20,"mat-label"),t(21),n(22,"translate"),a(),i(23,"input",10),A("ngModelChange",function(g){return y(r.min,g)||(r.min=g),g}),a()()(),i(24,"div",8)(25,"mat-form-field",9)(26,"mat-label"),t(27),n(28,"translate"),a(),i(29,"input",10),A("ngModelChange",function(g){return y(r.max,g)||(r.max=g),g}),a()()(),i(30,"div",8)(31,"mat-form-field",9)(32,"mat-label"),t(33),n(34,"translate"),a(),i(35,"input",10),A("ngModelChange",function(g){return y(r.step,g)||(r.step=g),g}),a()()()(),i(36,"section",11)(37,"mat-checkbox",12),A("ngModelChange",function(g){return y(r.showTicks,g)||(r.showTicks=g),g}),t(38),n(39,"translate"),a()(),i(40,"section",11)(41,"mat-checkbox",12),A("ngModelChange",function(g){return y(r.thumbLabel,g)||(r.thumbLabel=g),g}),t(42),n(43,"translate"),a()(),i(44,"section",11)(45,"mat-checkbox",12),A("ngModelChange",function(g){return y(r.disabled,g)||(r.disabled=g),g}),t(46),n(47,"translate"),a()(),i(48,"div",13)(49,"h2",14),t(50),n(51,"translate"),a(),i(52,"div")(53,"label",15),t(54),n(55,"translate"),a(),i(56,"label",16),t(57),a()(),i(58,"mat-slider",17)(59,"input",18),A("ngModelChange",function(g){return y(r.value,g)||(r.value=g),g}),a()()()(),i(60,"div",19)(61,"pre"),t(62,"          "),d(63,"code",20),t(64,`
        `),a()(),i(65,"div",21)(66,"pre"),t(67,"          "),d(68,"code",22),t(69,`
        `),a()()(),i(70,"div",7)(71,"div",23)(72,"app-code-view",4)(73,"h4",5),t(74),n(75,"translate"),a(),i(76,"div",6)(77,"mat-slider",24),d(78,"input",25),a()(),i(79,"div",19)(80,"pre"),t(81,"              "),d(82,"code",20),t(83,`
            `),a()(),i(84,"div",21)(85,"pre"),t(86,"              "),d(87,"code",22),t(88,`
            `),a()()()(),i(89,"div",23)(90,"app-code-view",4)(91,"h4",5),t(92),n(93,"translate"),a(),i(94,"div",6)(95,"mat-slider"),d(96,"input",25),a()(),i(97,"div",19)(98,"pre"),t(99,"              "),d(100,"code",20),t(101,`
            `),a()(),i(102,"div",21)(103,"pre"),t(104,"              "),d(105,"code",22),t(106,`
            `),a()()()(),i(107,"div",23)(108,"app-code-view",4)(109,"h4",5),t(110),n(111,"translate"),a(),i(112,"div",6)(113,"mat-slider",26),d(114,"input",27)(115,"input",28),a()(),i(116,"div",19)(117,"pre"),t(118,"              "),d(119,"code",20),t(120,`
            `),a()(),i(121,"div",21)(122,"pre"),t(123,"              "),d(124,"code",22),t(125,`
            `),a()()()()()()()),c&2&&(e(3),s(o(4,42,"UI_COMPONENTS.slider.title")),e(3),l("isTitle",!0),e(2),p(" ",o(9,44,"UI_COMPONENTS.slider.configuration")," "),e(7),s(o(16,46,"UI_COMPONENTS.slider.value")),e(2),B("ngModel",r.value),e(4),s(o(22,48,"UI_COMPONENTS.slider.minValue")),e(2),B("ngModel",r.min),e(4),s(o(28,50,"UI_COMPONENTS.slider.maxValue")),e(2),B("ngModel",r.max),e(4),s(o(34,52,"UI_COMPONENTS.slider.stepSize")),e(2),B("ngModel",r.step),e(2),B("ngModel",r.showTicks),e(),s(o(39,54,"UI_COMPONENTS.slider.showTicks")),e(3),B("ngModel",r.thumbLabel),e(),s(o(43,56,"UI_COMPONENTS.slider.showThumbLabel")),e(3),B("ngModel",r.disabled),e(),s(o(47,58,"UI_COMPONENTS.slider.disabled")),e(4),s(o(51,60,"UI_COMPONENTS.slider.result")),e(4),p("",o(55,62,"UI_COMPONENTS.slider.valueLabel")," "),e(3),s(r.value),e(),l("disabled",r.disabled)("max",r.max)("min",r.min)("step",r.step)("discrete",r.thumbLabel)("showTickMarks",r.showTicks),e(),B("ngModel",r.value),e(4),l("highlight",r.codeForSliderConfiguration),e(5),l("highlightAuto",r.codeForSliderConfigurationTs),e(4),l("isTitle",!0),e(2),p(" ",o(75,64,"UI_COMPONENTS.slider.customThumbLabel")," "),e(3),l("displayWith",r.formatLabel),e(5),l("highlight",r.codeForSliderCustomThumbLabel),e(5),l("highlightAuto",r.codeForSliderCustomThumbLabelTs),e(3),l("isTitle",!0),e(2),p(" ",o(93,66,"UI_COMPONENTS.slider.basic")," "),e(8),l("highlight",r.codeForSliderBasic),e(5),l("highlightAuto",r.codeForSliderBasicTs),e(3),l("isTitle",!0),e(2),p(" ",o(111,68,"UI_COMPONENTS.slider.rangeSlider")," "),e(9),l("highlight",r.codeForSliderRange),e(5),l("highlightAuto",r.codeForSliderRangeTs))},dependencies:[C,w,L,D,G,Q,q,Y,te,R,K,se,V,X,ue,ce,Ie,_e,Me,Rt,N,P,O,x,I,b],encapsulation:2})}}return m})();var vn=`  <div class="row">
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
`,bn=`  <div class="row">
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
`,fn=`  <div class="row">
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
`;var _n=`  import {Component, inject} from '@angular/core';
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
`,Mn=`  import {Component, inject} from '@angular/core';
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
`,In=`  import {Component, inject} from '@angular/core';
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
`;var Ro=(()=>{class m{static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-custom-snackbar"]],decls:3,vars:3,template:function(c,r){c&1&&(vt(0,"span"),t(1),n(2,"translate"),bt()),c&2&&(e(),p(" ",o(2,1,"UI_COMPONENTS.snackbar.pizzaParty")," "))},dependencies:[I,b],styles:[".example-pizza-party[_ngcontent-%COMP%]{color:#ff69b4}"]})}}return m})(),En=(()=>{class m{constructor(u,c){this._snackBar=u,this.translate=c,this.codeForSnackbarBasic=vn,this.codeForSnackbarBasicTs=_n,this.codeForSnackbarCustomComponent=bn,this.codeForSnackbarCustomComponentTs=Mn,this.codeForSnackbarConfigurable=fn,this.codeForSnackbarConfigurableTs=In,this.durationInSeconds=5,this.horizontalPosition="start",this.verticalPosition="bottom"}openSnackBar(u,c){this._snackBar.open(u,c)}openCustomSnackBar(){this._snackBar.openFromComponent(Ro,{duration:this.durationInSeconds*1e3})}openConfigSnackBar(){this._snackBar.open(this.translate.instant("snackbar_cannonball"),this.translate.instant("snackbar_splash"),{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition})}static{this.\u0275fac=function(c){return new(c||m)(Se(Pi),Se(Mt))}}static{this.\u0275cmp=v({type:m,selectors:[["app-snackbar"]],decls:119,vars:69,consts:[["message",""],["action",""],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"row"],[1,"col-lg-4"],["appearance","outline",1,"w-100"],["matInput","","value","Disco party!"],["matInput","","value","Dance"],["mat-flat-button","","color","primary",3,"click"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["type","number","matInput","",3,"ngModelChange","ngModel"],["mat-flat-button","","color","accent","aria-label","Show an example snack-bar",3,"click"],[3,"valueChange","value"],["value","start"],["value","center"],["value","end"],["value","left"],["value","right"],["value","top"],["value","bottom"],["mat-flat-button","","color","primary","aria-label","Show an example snack-bar",3,"click"]],template:function(c,r){if(c&1){let h=W();i(0,"mat-card",2)(1,"div",3)(2,"mat-card-title",4),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",5)(6,"app-code-view",6)(7,"h4",7),t(8),n(9,"translate"),a(),i(10,"div",8)(11,"div",9)(12,"div",10)(13,"mat-form-field",11)(14,"mat-label"),t(15),n(16,"translate"),a(),d(17,"input",12,0),a()(),i(19,"div",10)(20,"mat-form-field",11)(21,"mat-label"),t(22),n(23,"translate"),a(),d(24,"input",13,1),a()(),i(26,"div",10)(27,"button",14),T("click",function(){_(h);let f=F(18),dt=F(25);return M(r.openSnackBar(f.value,dt.value))}),t(28),n(29,"translate"),a()()()(),i(30,"div",15)(31,"pre"),t(32,"          "),d(33,"code",16),t(34,`
        `),a()(),i(35,"div",17)(36,"pre"),t(37,"          "),d(38,"code",18),t(39,`
        `),a()()(),i(40,"app-code-view",6)(41,"h4",7),t(42),n(43,"translate"),a(),i(44,"div",8)(45,"div",9)(46,"div",10)(47,"mat-form-field",11)(48,"mat-label"),t(49),n(50,"translate"),a(),i(51,"input",19),A("ngModelChange",function(f){return _(h),y(r.durationInSeconds,f)||(r.durationInSeconds=f),M(f)}),a()()(),i(52,"div",10)(53,"button",20),T("click",function(){return _(h),M(r.openCustomSnackBar())}),t(54),n(55,"translate"),a()()()(),i(56,"div",15)(57,"pre"),t(58,"          "),d(59,"code",16),t(60,`
        `),a()(),i(61,"div",17)(62,"pre"),t(63,"          "),d(64,"code",18),t(65,`
        `),a()()(),i(66,"app-code-view",6)(67,"h4",7),t(68),n(69,"translate"),a(),i(70,"div",8)(71,"div",9)(72,"div",10)(73,"mat-form-field",11)(74,"mat-label"),t(75),n(76,"translate"),a(),i(77,"mat-select",21),A("valueChange",function(f){return _(h),y(r.horizontalPosition,f)||(r.horizontalPosition=f),M(f)}),i(78,"mat-option",22),t(79),n(80,"translate"),a(),i(81,"mat-option",23),t(82),n(83,"translate"),a(),i(84,"mat-option",24),t(85),n(86,"translate"),a(),i(87,"mat-option",25),t(88),n(89,"translate"),a(),i(90,"mat-option",26),t(91),n(92,"translate"),a()()()(),i(93,"div",10)(94,"mat-form-field",11)(95,"mat-label"),t(96),n(97,"translate"),a(),i(98,"mat-select",21),A("valueChange",function(f){return _(h),y(r.verticalPosition,f)||(r.verticalPosition=f),M(f)}),i(99,"mat-option",27),t(100),n(101,"translate"),a(),i(102,"mat-option",28),t(103),n(104,"translate"),a()()()(),i(105,"div",10)(106,"button",29),T("click",function(){return _(h),M(r.openConfigSnackBar())}),t(107),n(108,"translate"),a()()()(),i(109,"div",15)(110,"pre"),t(111,"          "),d(112,"code",16),t(113,`
        `),a()(),i(114,"div",17)(115,"pre"),t(116,"          "),d(117,"code",18),t(118,`
        `),a()()()()()}c&2&&(e(3),s(o(4,31,"UI_COMPONENTS.snackbarDemo.title")),e(3),l("isTitle",!0),e(2),p(" ",o(9,33,"UI_COMPONENTS.snackbarDemo.basic")," "),e(7),s(o(16,35,"UI_COMPONENTS.snackbarDemo.message")),e(7),s(o(23,37,"UI_COMPONENTS.snackbarDemo.action")),e(6),p(" ",o(29,39,"UI_COMPONENTS.snackbarDemo.showSnackBar")," "),e(5),l("highlight",r.codeForSnackbarBasic),e(5),l("highlightAuto",r.codeForSnackbarBasicTs),e(2),l("isTitle",!0),e(2),p(" ",o(43,41,"UI_COMPONENTS.snackbarDemo.customComponent")," "),e(7),s(o(50,43,"UI_COMPONENTS.snackbarDemo.snackBarDuration")),e(2),B("ngModel",r.durationInSeconds),e(3),p(" ",o(55,45,"UI_COMPONENTS.snackbarDemo.pizzaPartyButton")," "),e(5),l("highlight",r.codeForSnackbarCustomComponent),e(5),l("highlightAuto",r.codeForSnackbarCustomComponentTs),e(2),l("isTitle",!0),e(2),p(" ",o(69,47,"UI_COMPONENTS.snackbarDemo.configurable")," "),e(7),s(o(76,49,"UI_COMPONENTS.snackbarDemo.horizontalPosition")),e(2),B("value",r.horizontalPosition),e(2),s(o(80,51,"UI_COMPONENTS.snackbarDemo.start")),e(3),s(o(83,53,"UI_COMPONENTS.snackbarDemo.center")),e(3),s(o(86,55,"UI_COMPONENTS.snackbarDemo.end")),e(3),s(o(89,57,"UI_COMPONENTS.snackbarDemo.left")),e(3),s(o(92,59,"UI_COMPONENTS.snackbarDemo.right")),e(5),s(o(97,61,"UI_COMPONENTS.snackbarDemo.verticalPosition")),e(2),B("value",r.verticalPosition),e(2),s(o(101,63,"UI_COMPONENTS.snackbarDemo.top")),e(3),s(o(104,65,"UI_COMPONENTS.snackbarDemo.bottom")),e(4),p(" ",o(108,67,"UI_COMPONENTS.snackbarDemo.poolParty")," "),e(5),l("highlight",r.codeForSnackbarConfigurable),e(5),l("highlightAuto",r.codeForSnackbarConfigurableTs))},dependencies:[G,Q,q,R,K,se,V,X,Y,te,U,k,Ke,kt,Ct,C,w,L,D,N,P,O,x,I,b],encapsulation:2})}}return m})();var Cn=`  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start">
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
`,xn=`  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="center">
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
`,Nn=`  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="end">
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
`,Pn=`  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start" animationDuration="0ms">
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
`,On=`  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start" animationDuration="2000ms">
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
`,Bn=`  <mat-tab-group>
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
`,yn=`  <mat-tab-group>
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
`,An=`  <mat-tab-group>
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
`,wn=`  <mat-tab-group headerPosition="below">
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
`,Dn=`  <mat-tab-group headerPosition="below">
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
`,Ln=`  <mat-tab-group headerPosition="below">
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
`,Fn=`  <mat-tab-group fitInkBarToContent>
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
`,Un=`  <mat-tab-group>
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
`,kn=`  <mat-tab-group>
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
`,Rn=`  <nav mat-tab-nav-bar [backgroundColor]="background" [tabPanel]="tabPanel">
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
`;var ne=`  import {Component} from '@angular/core';
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
`,Hn=`  import {Component} from '@angular/core';
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
`,Vn=`  import {Component} from '@angular/core';
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
`,Wn=`  import {Component} from '@angular/core';
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
`,Gn=`  import {Component} from '@angular/core';
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
`;function Ho(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",34),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemOne")," "))}function Vo(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",35),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemTwo")," "))}function Wo(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",36),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemThree")," "))}function Go(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",34),a()())}function zo(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",35),a()())}function jo(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",36),a()())}function Ko(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",34),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemOne")," "))}function Xo(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",35),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemTwo")," "))}function qo(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",36),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemThree")," "))}function Qo(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",34),a()())}function Yo(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",35),a()())}function Jo(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",36),a()())}function Zo(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",37),a()())}function $o(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",38),a()())}function er(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",34),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemOne")," "))}function tr(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",35),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemTwo")," "))}function ir(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",36),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemThree")," "))}function ar(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",34),a()())}function nr(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",35),a()())}function or(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",36),a()())}function rr(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",37),a()())}function lr(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",38),a()())}function pr(m,S){if(m&1&&(i(0,"div",12),t(1),n(2,"translate"),n(3,"date"),a()),m&2){let u=H();e(),Z(" ",o(2,2,"UI_COMPONENTS.tabs.content1Loaded")," ",Re(3,4,u.getTimeLoaded(1),"medium")," ")}}function mr(m,S){if(m&1&&(i(0,"div",12),t(1),n(2,"translate"),n(3,"date"),a()),m&2){let u=H();e(),Z(" ",o(2,2,"UI_COMPONENTS.tabs.content2Loaded")," ",Re(3,4,u.getTimeLoaded(2),"medium")," ")}}function dr(m,S){if(m&1&&(i(0,"div",12),t(1),n(2,"translate"),n(3,"date"),a()),m&2){let u=H();e(),Z(" ",o(2,2,"UI_COMPONENTS.tabs.content3Loaded")," ",Re(3,4,u.getTimeLoaded(3),"medium")," ")}}function sr(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",34),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemOne")," "))}function cr(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",35),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemTwo")," "))}function ur(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",36),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemThree")," "))}function gr(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",34),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemFour")," "))}function hr(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",35),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemFive")," "))}function Sr(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",36),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemSix")," "))}function Tr(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",34),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemSeven")," "))}function vr(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",35),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemEight")," "))}function br(m,S){m&1&&(i(0,"div",33)(1,"mat-icon"),d(2,"i-tabler",36),a()(),t(3),n(4,"translate")),m&2&&(e(3),p(" ",o(4,1,"UI_COMPONENTS.tabs.itemNine")," "))}function fr(m,S){if(m&1){let u=W();i(0,"a",39),T("click",function(){let r=_(u).$implicit,h=H();return M(h.activeLink=r)}),t(1),a()}if(m&2){let u=S.$implicit,c=H();l("active",c.activeLink==u),e(),p(" ",u," ")}}var zn=(()=>{class m{constructor(){this.codeForTabsBasic=Cn,this.codeForTabsBasicTs=ne,this.codeForTabsCenterAlign=xn,this.codeForTabsCenterAlignTs=ne,this.codeForTabsRightAlign=Nn,this.codeForTabsRightAlignTs=ne,this.codeForTabsNoAnimation=Pn,this.codeForTabsNoAnimationTs=ne,this.codeForTabsSlowAnimation=On,this.codeForTabsSlowAnimationTs=ne,this.codeForTabsGroup=Bn,this.codeForTabsGroupTs=ne,this.codeForTabsCusomLabel=yn,this.codeForTabsCusomLabelTs=ne,this.codeForTabsIcon=An,this.codeForTabsIconTs=ne,this.codeForTabsPosition=wn,this.codeForTabsPositionTs=ne,this.codeForTabsPositionWithIcon=Dn,this.codeForTabsPositionWithIconTs=ne,this.codeForTabsBackground=Ln,this.codeForTabsBackgroundTs=Hn,this.codeForTabsFitToBarContent=Fn,this.codeForTabsFitToBarContentTs=ne,this.codeForTabsContentLoadedLazily=Un,this.codeForTabsContentLoadedLazilyTs=Vn,this.codeForTabsPaginated=kn,this.codeForTabsPaginatedTs=Wn,this.codeForTabsNavbarBackground=Rn,this.codeForTabsNavbarBackgroundTs=Gn,this.tabLoadTimes=[],this.links=["Item One","Item Second","Item Third"],this.activeLink=this.links[0],this.background=void 0}getTimeLoaded(u){return this.tabLoadTimes[u]||(this.tabLoadTimes[u]=new Date),this.tabLoadTimes[u]}toggleBackground(){this.background=this.background?void 0:"primary"}addLink(){this.links.push(`Link ${this.links.length+1}`)}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-tabs"]],decls:530,vars:314,consts:[["tabPanel",""],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["mat-stretch-tabs","false","mat-align-tabs","start"],[3,"label"],[1,"bg-light-primary","f-s-14","p-16","rounded","m-t-12"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-stretch-tabs","false","mat-align-tabs","center"],["mat-stretch-tabs","false","mat-align-tabs","end"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","0ms"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","2000ms"],["mat-tab-label",""],["headerPosition","below"],[1,"bg-light-primary","f-s-14","p-16","rounded","m-b-12"],["backgroundColor","primary"],["fitInkBarToContent",""],["matTabContent",""],["mat-tab-nav-bar","",3,"backgroundColor","tabPanel"],["mat-tab-link","",3,"active"],["mat-tab-link","","disabled",""],[1,"m-t-12"],["mat-flat-button","","color","primary",3,"click"],["mat-flat-button","","color","accent",1,"m-l-8",3,"click"],[1,"d-flex","align-items-center"],["name","phone",1,"icon-20","m-r-8"],["name","heart",1,"icon-20","m-r-8"],["name","user",1,"icon-20","m-r-8"],["name","file-description",1,"icon-20","m-r-8"],["name","archive",1,"icon-20","m-r-8"],["mat-tab-link","",3,"click","active"]],template:function(c,r){if(c&1){let h=W();i(0,"mat-card",1)(1,"div",2)(2,"mat-card-title",3),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",4)(6,"div",5)(7,"div",6)(8,"app-code-view",7)(9,"h4",8),t(10),n(11,"translate"),a(),i(12,"div",9)(13,"mat-tab-group",10)(14,"mat-tab",11),n(15,"translate"),i(16,"div",12),t(17),n(18,"translate"),a()(),i(19,"mat-tab",11),n(20,"translate"),i(21,"div",12),t(22),n(23,"translate"),a()(),i(24,"mat-tab",11),n(25,"translate"),i(26,"div",12),t(27),n(28,"translate"),a()()()(),i(29,"div",13)(30,"pre"),t(31,"              "),d(32,"code",14),t(33,`
            `),a()(),i(34,"div",15)(35,"pre"),t(36,"              "),d(37,"code",16),t(38,`
            `),a()()()(),i(39,"div",6)(40,"app-code-view",7)(41,"h4",8),t(42),n(43,"translate"),a(),i(44,"div",9)(45,"mat-tab-group",17)(46,"mat-tab",11),n(47,"translate"),i(48,"div",12),t(49),n(50,"translate"),a()(),i(51,"mat-tab",11),n(52,"translate"),i(53,"div",12),t(54),n(55,"translate"),a()(),i(56,"mat-tab",11),n(57,"translate"),i(58,"div",12),t(59),n(60,"translate"),a()()()(),i(61,"div",13)(62,"pre"),t(63,"              "),d(64,"code",14),t(65,`
            `),a()(),i(66,"div",15)(67,"pre"),t(68,"              "),d(69,"code",16),t(70,`
            `),a()()()(),i(71,"div",6)(72,"app-code-view",7)(73,"h4",8),t(74),n(75,"translate"),a(),i(76,"div",9)(77,"mat-tab-group",18)(78,"mat-tab",11),n(79,"translate"),i(80,"div",12),t(81),n(82,"translate"),a()(),i(83,"mat-tab",11),n(84,"translate"),i(85,"div",12),t(86),n(87,"translate"),a()(),i(88,"mat-tab",11),n(89,"translate"),i(90,"div",12),t(91),n(92,"translate"),a()()()(),i(93,"div",13)(94,"pre"),t(95,"              "),d(96,"code",14),t(97,`
            `),a()(),i(98,"div",15)(99,"pre"),t(100,"              "),d(101,"code",16),t(102,`
            `),a()()()(),i(103,"div",6)(104,"app-code-view",7)(105,"h4",8),t(106),n(107,"translate"),a(),i(108,"div",9)(109,"mat-tab-group",19)(110,"mat-tab",11),n(111,"translate"),i(112,"div",12),t(113),n(114,"translate"),a()(),i(115,"mat-tab",11),n(116,"translate"),i(117,"div",12),t(118),n(119,"translate"),a()(),i(120,"mat-tab",11),n(121,"translate"),i(122,"div",12),t(123),n(124,"translate"),a()()()(),i(125,"div",13)(126,"pre"),t(127,"              "),d(128,"code",14),t(129,`
            `),a()(),i(130,"div",15)(131,"pre"),t(132,"              "),d(133,"code",16),t(134,`
            `),a()()()(),i(135,"div",6)(136,"app-code-view",7)(137,"h4",8),t(138),n(139,"translate"),a(),i(140,"div",9)(141,"mat-tab-group",20)(142,"mat-tab",11),n(143,"translate"),i(144,"div",12),t(145),n(146,"translate"),a()(),i(147,"mat-tab",11),n(148,"translate"),i(149,"div",12),t(150),n(151,"translate"),a()(),i(152,"mat-tab",11),n(153,"translate"),i(154,"div",12),t(155),n(156,"translate"),a()()()(),i(157,"div",13)(158,"pre"),t(159,"              "),d(160,"code",14),t(161,`
            `),a()(),i(162,"div",15)(163,"pre"),t(164,"              "),d(165,"code",16),t(166,`
            `),a()()()(),i(167,"div",6)(168,"app-code-view",7)(169,"h4",8),t(170),n(171,"translate"),a(),i(172,"div",9)(173,"mat-tab-group")(174,"mat-tab",11),n(175,"translate"),i(176,"div",12),t(177),n(178,"translate"),a()(),i(179,"mat-tab",11),n(180,"translate"),i(181,"div",12),t(182),n(183,"translate"),a()(),i(184,"mat-tab",11),n(185,"translate"),i(186,"div",12),t(187),n(188,"translate"),a()()()(),i(189,"div",13)(190,"pre"),t(191,"              "),d(192,"code",14),t(193,`
            `),a()(),i(194,"div",15)(195,"pre"),t(196,"              "),d(197,"code",16),t(198,`
            `),a()()()(),i(199,"div",6)(200,"app-code-view",7)(201,"h4",8),t(202),n(203,"translate"),a(),i(204,"div",9)(205,"mat-tab-group")(206,"mat-tab"),E(207,Ho,5,3,"ng-template",21),i(208,"div",12),t(209),n(210,"translate"),a()(),i(211,"mat-tab"),E(212,Vo,5,3,"ng-template",21),i(213,"div",12),t(214),n(215,"translate"),a()(),i(216,"mat-tab"),E(217,Wo,5,3,"ng-template",21),i(218,"div",12),t(219),n(220,"translate"),a()()()(),i(221,"div",13)(222,"pre"),t(223,"              "),d(224,"code",14),t(225,`
            `),a()(),i(226,"div",15)(227,"pre"),t(228,"              "),d(229,"code",16),t(230,`
            `),a()()()(),i(231,"div",6)(232,"app-code-view",7)(233,"h4",8),t(234),n(235,"translate"),a(),i(236,"div",9)(237,"mat-tab-group")(238,"mat-tab"),E(239,Go,3,0,"ng-template",21),i(240,"div",12),t(241),n(242,"translate"),a()(),i(243,"mat-tab"),E(244,zo,3,0,"ng-template",21),i(245,"div",12),t(246),n(247,"translate"),a()(),i(248,"mat-tab"),E(249,jo,3,0,"ng-template",21),i(250,"div",12),t(251),n(252,"translate"),a()()()(),i(253,"div",13)(254,"pre"),t(255,"              "),d(256,"code",14),t(257,`
            `),a()(),i(258,"div",15)(259,"pre"),t(260,"              "),d(261,"code",16),t(262,`
            `),a()()()(),i(263,"div",6)(264,"app-code-view",7)(265,"h4",8),t(266),n(267,"translate"),a(),i(268,"div",9)(269,"mat-tab-group",22)(270,"mat-tab"),E(271,Ko,5,3,"ng-template",21),i(272,"div",23),t(273),n(274,"translate"),a()(),i(275,"mat-tab"),E(276,Xo,5,3,"ng-template",21),i(277,"div",23),t(278),n(279,"translate"),a()(),i(280,"mat-tab"),E(281,qo,5,3,"ng-template",21),i(282,"div",23),t(283),n(284,"translate"),a()()()(),i(285,"div",13)(286,"pre"),t(287,"              "),d(288,"code",14),t(289,`
            `),a()(),i(290,"div",15)(291,"pre"),t(292,"              "),d(293,"code",16),t(294,`
            `),a()()()(),i(295,"div",6)(296,"app-code-view",7)(297,"h4",8),t(298),n(299,"translate"),a(),i(300,"div",9)(301,"mat-tab-group",22)(302,"mat-tab"),E(303,Qo,3,0,"ng-template",21),i(304,"div",23),t(305),n(306,"translate"),a()(),i(307,"mat-tab"),E(308,Yo,3,0,"ng-template",21),i(309,"div",23),t(310),n(311,"translate"),a()(),i(312,"mat-tab"),E(313,Jo,3,0,"ng-template",21),i(314,"div",23),t(315),n(316,"translate"),a()(),i(317,"mat-tab"),E(318,Zo,3,0,"ng-template",21),i(319,"div",23),t(320),n(321,"translate"),a()(),i(322,"mat-tab"),E(323,$o,3,0,"ng-template",21),i(324,"div",23),t(325),n(326,"translate"),a()()()(),i(327,"div",13)(328,"pre"),t(329,"              "),d(330,"code",14),t(331,`
            `),a()(),i(332,"div",15)(333,"pre"),t(334,"              "),d(335,"code",16),t(336,`
            `),a()()()(),i(337,"div",6)(338,"app-code-view",7)(339,"h4",8),t(340),n(341,"translate"),a(),i(342,"div",9)(343,"mat-tab-group",24)(344,"mat-tab"),E(345,er,5,3,"ng-template",21),i(346,"div",12),t(347),n(348,"translate"),a()(),i(349,"mat-tab"),E(350,tr,5,3,"ng-template",21),i(351,"div",12),t(352),n(353,"translate"),a()(),i(354,"mat-tab"),E(355,ir,5,3,"ng-template",21),i(356,"div",12),t(357),n(358,"translate"),a()()()(),i(359,"div",13)(360,"pre"),t(361,"              "),d(362,"code",14),t(363,`
            `),a()(),i(364,"div",15)(365,"pre"),t(366,"              "),d(367,"code",16),t(368,`
            `),a()()()(),i(369,"div",6)(370,"app-code-view",7)(371,"h4",8),t(372),n(373,"translate"),a(),i(374,"div",9)(375,"mat-tab-group",25)(376,"mat-tab"),E(377,ar,3,0,"ng-template",21),i(378,"div",12),t(379),n(380,"translate"),a()(),i(381,"mat-tab"),E(382,nr,3,0,"ng-template",21),i(383,"div",12),t(384),n(385,"translate"),a()(),i(386,"mat-tab"),E(387,or,3,0,"ng-template",21),i(388,"div",12),t(389),n(390,"translate"),a()(),i(391,"mat-tab"),E(392,rr,3,0,"ng-template",21),i(393,"div",12),t(394),n(395,"translate"),a()(),i(396,"mat-tab"),E(397,lr,3,0,"ng-template",21),i(398,"div",12),t(399),n(400,"translate"),a()()()(),i(401,"div",13)(402,"pre"),t(403,"              "),d(404,"code",14),t(405,`
            `),a()(),i(406,"div",15)(407,"pre"),t(408,"              "),d(409,"code",16),t(410,`
            `),a()()()(),i(411,"div",6)(412,"app-code-view",7)(413,"h4",8),t(414),n(415,"translate"),a(),i(416,"div",9)(417,"mat-tab-group")(418,"mat-tab",11),n(419,"translate"),E(420,pr,4,7,"ng-template",26),a(),i(421,"mat-tab",11),n(422,"translate"),E(423,mr,4,7,"ng-template",26),a(),i(424,"mat-tab",11),n(425,"translate"),E(426,dr,4,7,"ng-template",26),a()()(),i(427,"div",13)(428,"pre"),t(429,"              "),d(430,"code",14),t(431,`
            `),a()(),i(432,"div",15)(433,"pre"),t(434,"              "),d(435,"code",16),t(436,`
            `),a()()()(),i(437,"div",6)(438,"app-code-view",7)(439,"h4",8),t(440),n(441,"translate"),a(),i(442,"div",9)(443,"mat-tab-group")(444,"mat-tab"),E(445,sr,5,3,"ng-template",21),i(446,"div",12),t(447),n(448,"translate"),a()(),i(449,"mat-tab"),E(450,cr,5,3,"ng-template",21),i(451,"div",12),t(452),n(453,"translate"),a()(),i(454,"mat-tab"),E(455,ur,5,3,"ng-template",21),i(456,"div",12),t(457),n(458,"translate"),a()(),i(459,"mat-tab"),E(460,gr,5,3,"ng-template",21),i(461,"div",12),t(462),n(463,"translate"),a()(),i(464,"mat-tab"),E(465,hr,5,3,"ng-template",21),i(466,"div",12),t(467),n(468,"translate"),a()(),i(469,"mat-tab"),E(470,Sr,5,3,"ng-template",21),i(471,"div",12),t(472),n(473,"translate"),a()(),i(474,"mat-tab"),E(475,Tr,5,3,"ng-template",21),i(476,"div",12),t(477),n(478,"translate"),a()(),i(479,"mat-tab"),E(480,vr,5,3,"ng-template",21),i(481,"div",12),t(482),n(483,"translate"),a()(),i(484,"mat-tab"),E(485,br,5,3,"ng-template",21),i(486,"div",12),t(487),n(488,"translate"),a()()()(),i(489,"div",13)(490,"pre"),t(491,"              "),d(492,"code",14),t(493,`
            `),a()(),i(494,"div",15)(495,"pre"),t(496,"              "),d(497,"code",16),t(498,`
            `),a()()()(),i(499,"div",6)(500,"app-code-view",7)(501,"h4",8),t(502),n(503,"translate"),a(),i(504,"div",9)(505,"nav",27),ie(506,fr,2,2,"a",28,de),i(508,"a",29),t(509),n(510,"translate"),a()(),d(511,"mat-tab-nav-panel",null,0),i(513,"div",30)(514,"button",31),T("click",function(){return _(h),M(r.toggleBackground())}),t(515),n(516,"translate"),a(),i(517,"button",32),T("click",function(){return _(h),M(r.addLink())}),t(518),n(519,"translate"),a()()(),i(520,"div",13)(521,"pre"),t(522,"              "),d(523,"code",14),t(524,`
            `),a()(),i(525,"div",15)(526,"pre"),t(527,"              "),d(528,"code",16),t(529,`
            `),a()()()()()()()}if(c&2){let h=F(512);e(3),s(o(4,136,"UI_COMPONENTS.tabs.title")),e(5),l("isTitle",!0),e(2),p(" ",o(11,138,"UI_COMPONENTS.tabs.basic")," "),e(4),l("label",o(15,140,"UI_COMPONENTS.tabs.itemOne")),e(3),p(" ",o(18,142,"UI_COMPONENTS.tabs.content1")," "),e(2),l("label",o(20,144,"UI_COMPONENTS.tabs.itemTwo")),e(3),p(" ",o(23,146,"UI_COMPONENTS.tabs.content2")," "),e(2),l("label",o(25,148,"UI_COMPONENTS.tabs.itemThree")),e(3),p(" ",o(28,150,"UI_COMPONENTS.tabs.content3")," "),e(5),l("highlight",r.codeForTabsBasic),e(5),l("highlightAuto",r.codeForTabsBasicTs),e(3),l("isTitle",!0),e(2),p(" ",o(43,152,"UI_COMPONENTS.tabs.centerAlign")," "),e(4),l("label",o(47,154,"UI_COMPONENTS.tabs.itemOne")),e(3),p(" ",o(50,156,"UI_COMPONENTS.tabs.content1")," "),e(2),l("label",o(52,158,"UI_COMPONENTS.tabs.itemTwo")),e(3),p(" ",o(55,160,"UI_COMPONENTS.tabs.content2")," "),e(2),l("label",o(57,162,"UI_COMPONENTS.tabs.itemThree")),e(3),p(" ",o(60,164,"UI_COMPONENTS.tabs.content3")," "),e(5),l("highlight",r.codeForTabsCenterAlign),e(5),l("highlightAuto",r.codeForTabsCenterAlignTs),e(3),l("isTitle",!0),e(2),p(" ",o(75,166,"UI_COMPONENTS.tabs.rightAlign")," "),e(4),l("label",o(79,168,"UI_COMPONENTS.tabs.itemOne")),e(3),p(" ",o(82,170,"UI_COMPONENTS.tabs.content1")," "),e(2),l("label",o(84,172,"UI_COMPONENTS.tabs.itemTwo")),e(3),p(" ",o(87,174,"UI_COMPONENTS.tabs.content2")," "),e(2),l("label",o(89,176,"UI_COMPONENTS.tabs.itemThree")),e(3),p(" ",o(92,178,"UI_COMPONENTS.tabs.content3")," "),e(5),l("highlight",r.codeForTabsRightAlign),e(5),l("highlightAuto",r.codeForTabsRightAlignTs),e(3),l("isTitle",!0),e(2),p(" ",o(107,180,"UI_COMPONENTS.tabs.noAnimation")," "),e(4),l("label",o(111,182,"UI_COMPONENTS.tabs.itemOne")),e(3),p(" ",o(114,184,"UI_COMPONENTS.tabs.content1")," "),e(2),l("label",o(116,186,"UI_COMPONENTS.tabs.itemTwo")),e(3),p(" ",o(119,188,"UI_COMPONENTS.tabs.content2")," "),e(2),l("label",o(121,190,"UI_COMPONENTS.tabs.itemThree")),e(3),p(" ",o(124,192,"UI_COMPONENTS.tabs.content3")," "),e(5),l("highlight",r.codeForTabsNoAnimation),e(5),l("highlightAuto",r.codeForTabsNoAnimationTs),e(3),l("isTitle",!0),e(2),p(" ",o(139,194,"UI_COMPONENTS.tabs.slowAnimation")," "),e(4),l("label",o(143,196,"UI_COMPONENTS.tabs.itemOne")),e(3),p(" ",o(146,198,"UI_COMPONENTS.tabs.content1")," "),e(2),l("label",o(148,200,"UI_COMPONENTS.tabs.itemTwo")),e(3),p(" ",o(151,202,"UI_COMPONENTS.tabs.content2")," "),e(2),l("label",o(153,204,"UI_COMPONENTS.tabs.itemThree")),e(3),p(" ",o(156,206,"UI_COMPONENTS.tabs.content3")," "),e(5),l("highlight",r.codeForTabsSlowAnimation),e(5),l("highlightAuto",r.codeForTabsSlowAnimationTs),e(3),l("isTitle",!0),e(2),p(" ",o(171,208,"UI_COMPONENTS.tabs.tabGroup")," "),e(4),l("label",o(175,210,"UI_COMPONENTS.tabs.itemOne")),e(3),p(" ",o(178,212,"UI_COMPONENTS.tabs.content1")," "),e(2),l("label",o(180,214,"UI_COMPONENTS.tabs.itemTwo")),e(3),p(" ",o(183,216,"UI_COMPONENTS.tabs.content2")," "),e(2),l("label",o(185,218,"UI_COMPONENTS.tabs.itemThree")),e(3),p(" ",o(188,220,"UI_COMPONENTS.tabs.content3")," "),e(5),l("highlight",r.codeForTabsGroup),e(5),l("highlightAuto",r.codeForTabsGroupTs),e(3),l("isTitle",!0),e(2),p(" ",o(203,222,"UI_COMPONENTS.tabs.customLabel")," "),e(7),p(" ",o(210,224,"UI_COMPONENTS.tabs.content1")," "),e(5),p(" ",o(215,226,"UI_COMPONENTS.tabs.content2")," "),e(5),p(" ",o(220,228,"UI_COMPONENTS.tabs.content3")," "),e(5),l("highlight",r.codeForTabsCusomLabel),e(5),l("highlightAuto",r.codeForTabsCusomLabelTs),e(3),l("isTitle",!0),e(2),p(" ",o(235,230,"UI_COMPONENTS.tabs.icon")," "),e(7),p(" ",o(242,232,"UI_COMPONENTS.tabs.content1")," "),e(5),p(" ",o(247,234,"UI_COMPONENTS.tabs.content2")," "),e(5),p(" ",o(252,236,"UI_COMPONENTS.tabs.content3")," "),e(5),l("highlight",r.codeForTabsIcon),e(5),l("highlightAuto",r.codeForTabsIconTs),e(3),l("isTitle",!0),e(2),p(" ",o(267,238,"UI_COMPONENTS.tabs.position")," "),e(7),p(" ",o(274,240,"UI_COMPONENTS.tabs.content1")," "),e(5),p(" ",o(279,242,"UI_COMPONENTS.tabs.content2")," "),e(5),p(" ",o(284,244,"UI_COMPONENTS.tabs.content3")," "),e(5),l("highlight",r.codeForTabsPosition),e(5),l("highlightAuto",r.codeForTabsPositionTs),e(3),l("isTitle",!0),e(2),p(" ",o(299,246,"UI_COMPONENTS.tabs.positionWithIcons")," "),e(7),p(" ",o(306,248,"UI_COMPONENTS.tabs.content1")," "),e(5),p(" ",o(311,250,"UI_COMPONENTS.tabs.content2")," "),e(5),p(" ",o(316,252,"UI_COMPONENTS.tabs.content3")," "),e(5),p(" ",o(321,254,"UI_COMPONENTS.tabs.content4")," "),e(5),p(" ",o(326,256,"UI_COMPONENTS.tabs.content5")," "),e(5),l("highlight",r.codeForTabsPositionWithIcon),e(5),l("highlightAuto",r.codeForTabsPositionWithIconTs),e(3),l("isTitle",!0),e(2),p(" ",o(341,258,"UI_COMPONENTS.tabs.background")," "),e(7),p(" ",o(348,260,"UI_COMPONENTS.tabs.content1")," "),e(5),p(" ",o(353,262,"UI_COMPONENTS.tabs.content2")," "),e(5),p(" ",o(358,264,"UI_COMPONENTS.tabs.content3")," "),e(5),l("highlight",r.codeForTabsBackground),e(5),l("highlightAuto",r.codeForTabsBackgroundTs),e(3),l("isTitle",!0),e(2),p(" ",o(373,266,"UI_COMPONENTS.tabs.fitToBar")," "),e(7),p(" ",o(380,268,"UI_COMPONENTS.tabs.content1")," "),e(5),p(" ",o(385,270,"UI_COMPONENTS.tabs.content2")," "),e(5),p(" ",o(390,272,"UI_COMPONENTS.tabs.content3")," "),e(5),p(" ",o(395,274,"UI_COMPONENTS.tabs.content4")," "),e(5),p(" ",o(400,276,"UI_COMPONENTS.tabs.content5")," "),e(5),l("highlight",r.codeForTabsFitToBarContent),e(5),l("highlightAuto",r.codeForTabsFitToBarContentTs),e(3),l("isTitle",!0),e(2),p(" ",o(415,278,"UI_COMPONENTS.tabs.lazyContent")," "),e(4),l("label",o(419,280,"UI_COMPONENTS.tabs.itemOne")),e(3),l("label",o(422,282,"UI_COMPONENTS.tabs.itemTwo")),e(3),l("label",o(425,284,"UI_COMPONENTS.tabs.itemThree")),e(6),l("highlight",r.codeForTabsContentLoadedLazily),e(5),l("highlightAuto",r.codeForTabsContentLoadedLazilyTs),e(3),l("isTitle",!0),e(2),p(" ",o(441,286,"UI_COMPONENTS.tabs.paginatedTabs")," "),e(7),p(" ",o(448,288,"UI_COMPONENTS.tabs.content1")," "),e(5),p(" ",o(453,290,"UI_COMPONENTS.tabs.content2")," "),e(5),p(" ",o(458,292,"UI_COMPONENTS.tabs.content3")," "),e(5),p(" ",o(463,294,"UI_COMPONENTS.tabs.content4")," "),e(5),p(" ",o(468,296,"UI_COMPONENTS.tabs.content5")," "),e(5),p(" ",o(473,298,"UI_COMPONENTS.tabs.content6")," "),e(5),p(" ",o(478,300,"UI_COMPONENTS.tabs.content7")," "),e(5),p(" ",o(483,302,"UI_COMPONENTS.tabs.content8")," "),e(5),p(" ",o(488,304,"UI_COMPONENTS.tabs.content9")," "),e(5),l("highlight",r.codeForTabsPaginated),e(5),l("highlightAuto",r.codeForTabsPaginatedTs),e(3),l("isTitle",!0),e(2),p(" ",o(503,306,"UI_COMPONENTS.tabs.navbarBackground")," "),e(3),l("backgroundColor",r.background)("tabPanel",h),e(),ae(r.links),e(3),s(o(510,308,"UI_COMPONENTS.tabs.disabledLink")),e(6),p(" ",o(516,310,"UI_COMPONENTS.tabs.toggleBackground")," "),e(3),p(" ",o(519,312,"UI_COMPONENTS.tabs.addLink")," "),e(5),l("highlight",r.codeForTabsNavbarBackground),e(5),l("highlightAuto",r.codeForTabsNavbarBackgroundTs)}},dependencies:[Ee,ai,ni,oi,ri,li,mi,pi,C,w,L,D,ee,$,le,ge,U,k,N,P,O,x,I,He,b],encapsulation:2})}}return m})();var jn=`  <div class="row">
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
`,Kn=`  <mat-toolbar color="primary">
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
`,Xn=`  <mat-toolbar>
          <span>Modernize</span>
        </mat-toolbar>
`;var pt=`  import {Component, inject} from '@angular/core';
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
`;var qn=(()=>{class m{constructor(){this.codeForToolbarBasic=jn,this.codeForToolbarBasicTs=pt,this.codeForToolbarMultiRow=Kn,this.codeForToolbarMultiRowTs=pt,this.codeForToolbarOnlyBrand=Xn,this.codeForToolbarOnlyBrandTs=pt}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-toolbar"]],decls:91,vars:36,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon"],["name","align-left",1,"icon-20"],[1,"m-l-auto"],["mat-icon-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon"],["name","heart-filled",1,"icon-20"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"],["name","share",1,"icon-20"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["color","primary"],["aria-hidden","false","aria-label","Example user verified icon",1,"example-icon"],[1,"d-flex","gap-8","align-items-center"],["aria-hidden","false","aria-label","Example heart icon",1,"example-icon"],["aria-hidden","false","aria-label","Example delete icon",1,"example-icon"]],template:function(c,r){c&1&&(i(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",3)(6,"app-code-view",4)(7,"h4",5),t(8),n(9,"translate"),a(),i(10,"div",6)(11,"mat-toolbar")(12,"button",7)(13,"mat-icon"),d(14,"i-tabler",8),a()(),i(15,"span"),t(16),n(17,"translate"),a(),d(18,"span",9),i(19,"button",10)(20,"mat-icon"),d(21,"i-tabler",11),a()(),i(22,"button",12)(23,"mat-icon"),d(24,"i-tabler",13),a()()()(),i(25,"div",14)(26,"pre"),t(27,"          "),d(28,"code",15),t(29,`
        `),a()(),i(30,"div",16)(31,"pre"),t(32,"          "),d(33,"code",17),t(34,`
        `),a()()(),i(35,"app-code-view",4)(36,"h4",5),t(37),n(38,"translate"),a(),i(39,"div",6)(40,"mat-toolbar",18)(41,"mat-toolbar-row")(42,"span"),t(43),n(44,"translate"),a()(),i(45,"mat-toolbar-row")(46,"span"),t(47),n(48,"translate"),a(),d(49,"span",9),i(50,"mat-icon",19),t(51,"verified_user"),a()(),i(52,"mat-toolbar-row")(53,"span"),t(54),n(55,"translate"),a(),d(56,"span",9),i(57,"div",20)(58,"mat-icon",21),t(59,"favorite"),a(),i(60,"mat-icon",22),t(61,"delete"),a()()()()(),i(62,"div",14)(63,"pre"),t(64,"          "),d(65,"code",15),t(66,`
        `),a()(),i(67,"div",16)(68,"pre"),t(69,"          "),d(70,"code",17),t(71,`
        `),a()()(),i(72,"app-code-view",4)(73,"h4",5),t(74),n(75,"translate"),a(),i(76,"div",6)(77,"mat-toolbar")(78,"span"),t(79),n(80,"translate"),a()()(),i(81,"div",14)(82,"pre"),t(83,"          "),d(84,"code",15),t(85,`
        `),a()(),i(86,"div",16)(87,"pre"),t(88,"          "),d(89,"code",17),t(90,`
        `),a()()()()()),c&2&&(e(3),s(o(4,18,"UI_COMPONENTS.toolbar.title")),e(3),l("isTitle",!0),e(2),p(" ",o(9,20,"UI_COMPONENTS.toolbar.basic")," "),e(8),s(o(17,22,"UI_COMPONENTS.toolbar.myApp")),e(12),l("highlight",r.codeForToolbarBasic),e(5),l("highlightAuto",r.codeForToolbarBasicTs),e(2),l("isTitle",!0),e(2),p(" ",o(38,24,"UI_COMPONENTS.toolbar.multiRow")," "),e(6),s(o(44,26,"UI_COMPONENTS.toolbar.customToolbar")),e(4),s(o(48,28,"UI_COMPONENTS.toolbar.secondLine")),e(7),s(o(55,30,"UI_COMPONENTS.toolbar.thirdLine")),e(11),l("highlight",r.codeForToolbarMultiRow),e(5),l("highlightAuto",r.codeForToolbarMultiRowTs),e(2),l("isTitle",!0),e(2),p(" ",o(75,32,"UI_COMPONENTS.toolbar.onlyBrand")," "),e(5),s(o(80,34,"UI_COMPONENTS.toolbar.modernize")),e(5),l("highlight",r.codeForToolbarOnlyBrand),e(5),l("highlightAuto",r.codeForToolbarOnlyBrandTs))},dependencies:[Gt,Wt,Vt,U,Ge,ee,$,C,w,L,D,le,ge,N,P,O,x,I,b],encapsulation:2})}}return m})();var mt=`  import {Component} from '@angular/core';
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
`,Qn=`  import {Component} from '@angular/core';
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
`,Yn=`  import {Component} from '@angular/core';
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
`,Jn=`  import {Component} from '@angular/core';
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
`;var Zn=`  <button mat-flat-button color="primary" matTooltip="Info about the action">
              Button
            </button>
`,$n=`  <button mat-flat-button color="primary" matTooltip="Info about the action">
              Button
            </button>
`,eo=`  <button mat-flat-button color="primary" matTooltip="Info about the action"
              [matTooltipDisabled]="disabled.value" class="m-r-8">
              Action
            </button>

            <mat-checkbox [formControl]="disabled" class="example-disabled-checkbox">
              Tooltip disabled
            </mat-checkbox>
`,to=`  <button mat-flat-button color="primary" #tooltip="matTooltip" matTooltip="Info about the action"
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
`,io=`  <div class="row">
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
`,ao=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Tooltip message</mat-label>
              <input matInput [formControl]="message" />
            </mat-form-field>

            <button mat-flat-button color="primary" [matTooltip]="message.value || ''"
              aria-label="Button that displays a tooltip with a custom message">
              Action
            </button>
`;var no=(()=>{class m{constructor(){this.codeForTooltipsBasic=Zn,this.codeForTooltipsBasicTs=mt,this.codeForTooltipsUppercase=$n,this.codeForTooltipsUppercaseTs=mt,this.codeForTooltipsDisabledClick=eo,this.codeForTooltipsDisabledClickTs=Qn,this.codeForTooltipsPosition=to,this.codeForTooltipsPositionTs=mt,this.codeForTooltipsShowAndHide=io,this.codeForTooltipsShowAndHideTs=Yn,this.codeForTooltipsChangeMessage=ao,this.codeForTooltipsChangeMessageTs=Jn,this.disabled=new Te(!1),this.showDelay=new Te(1e3),this.hideDelay2=new Te(2e3),this.message=new Te("Info about the action")}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=v({type:m,selectors:[["app-tooltips"]],decls:171,vars:119,consts:[["tooltip","matTooltip"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["mat-flat-button","","color","primary",3,"matTooltip"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-flat-button","","color","primary","matTooltipClass","text-uppercase",3,"matTooltip"],["mat-flat-button","","color","primary",1,"m-r-8",3,"matTooltip","matTooltipDisabled"],[1,"example-disabled-checkbox",3,"formControl"],["mat-flat-button","","color","primary","matTooltipPosition","below","matTooltipHideDelay","100000",3,"matTooltip"],["mat-flat-button","","color","accent","matTooltipPosition","above","matTooltipHideDelay","100000",1,"m-l-8",3,"matTooltip"],["mat-flat-button","","color","warn","matTooltipPosition","left","matTooltipHideDelay","100000",1,"m-l-8",3,"matTooltip"],["mat-flat-button","","color","primary","matTooltipPosition","right","matTooltipHideDelay","100000",1,"m-l-8",3,"matTooltip"],[1,"col-sm-4"],["appearance","outline",1,"w-100"],["matInput","","type","number",3,"formControl"],["mat-flat-button","","color","primary",3,"matTooltip","matTooltipShowDelay","matTooltipHideDelay"],["matInput","",3,"formControl"]],template:function(c,r){c&1&&(i(0,"mat-card",1)(1,"div",2)(2,"mat-card-title",3),t(3),n(4,"translate"),a()(),i(5,"mat-card-content",4)(6,"div",5)(7,"div",6)(8,"app-code-view",7)(9,"h4",8),t(10),n(11,"translate"),a(),i(12,"div",9)(13,"button",10),n(14,"translate"),t(15),n(16,"translate"),a()(),i(17,"div",11)(18,"pre"),t(19,"              "),d(20,"code",12),t(21,`
            `),a()(),i(22,"div",13)(23,"pre"),t(24,"              "),d(25,"code",14),t(26,`
            `),a()()()(),i(27,"div",6)(28,"app-code-view",7)(29,"h4",8),t(30),n(31,"translate"),a(),i(32,"div",9)(33,"button",15),n(34,"translate"),t(35),n(36,"translate"),a()(),i(37,"div",11)(38,"pre"),t(39,"              "),d(40,"code",12),t(41,`
            `),a()(),i(42,"div",13)(43,"pre"),t(44,"              "),d(45,"code",14),t(46,`
            `),a()()()(),i(47,"div",6)(48,"app-code-view",7)(49,"h4",8),t(50),n(51,"translate"),a(),i(52,"div",9)(53,"button",16),n(54,"translate"),t(55),n(56,"translate"),a(),i(57,"mat-checkbox",17),t(58),n(59,"translate"),a()(),i(60,"div",11)(61,"pre"),t(62,"              "),d(63,"code",12),t(64,`
            `),a()(),i(65,"div",13)(66,"pre"),t(67,"              "),d(68,"code",14),t(69,`
            `),a()()()(),i(70,"div",6)(71,"app-code-view",7)(72,"h4",8),t(73),n(74,"translate"),a(),i(75,"div",9)(76,"button",18,0),n(78,"translate"),t(79),n(80,"translate"),a(),i(81,"button",19,0),n(83,"translate"),t(84),n(85,"translate"),a(),i(86,"button",20,0),n(88,"translate"),t(89),n(90,"translate"),a(),i(91,"button",21,0),n(93,"translate"),t(94),n(95,"translate"),a()(),i(96,"div",11)(97,"pre"),t(98,"              "),d(99,"code",12),t(100,`
            `),a()(),i(101,"div",13)(102,"pre"),t(103,"              "),d(104,"code",14),t(105,`
            `),a()()()(),i(106,"div",6)(107,"app-code-view",7)(108,"h4",8),t(109),n(110,"translate"),a(),i(111,"div",9)(112,"div",5)(113,"div",22)(114,"mat-form-field",23)(115,"mat-label"),t(116),n(117,"translate"),a(),d(118,"input",24),i(119,"mat-hint"),t(120),n(121,"translate"),a()()(),i(122,"div",22)(123,"mat-form-field",23)(124,"mat-label"),t(125),n(126,"translate"),a(),d(127,"input",24),i(128,"mat-hint"),t(129),n(130,"translate"),a()()(),i(131,"div",22)(132,"button",25),n(133,"translate"),t(134),n(135,"translate"),a()()()(),i(136,"div",11)(137,"pre"),t(138,"              "),d(139,"code",12),t(140,`
            `),a()(),i(141,"div",13)(142,"pre"),t(143,"              "),d(144,"code",14),t(145,`
            `),a()()()(),i(146,"div",6)(147,"app-code-view",7)(148,"h4",8),t(149),n(150,"translate"),a(),i(151,"div",9)(152,"mat-form-field",23)(153,"mat-label"),t(154),n(155,"translate"),a(),d(156,"input",26),a(),i(157,"button",10),n(158,"translate"),t(159),n(160,"translate"),a()(),i(161,"div",11)(162,"pre"),t(163,"              "),d(164,"code",12),t(165,`
            `),a()(),i(166,"div",13)(167,"pre"),t(168,"              "),d(169,"code",14),t(170,`
            `),a()()()()()()()),c&2&&(e(3),s(o(4,57,"UI_COMPONENTS.tooltips.title")),e(5),l("isTitle",!0),e(2),p(" ",o(11,59,"UI_COMPONENTS.tooltips.basic")," "),e(3),l("matTooltip",o(14,61,"UI_COMPONENTS.tooltips.infoAboutAction")),e(2),p(" ",o(16,63,"UI_COMPONENTS.tooltips.button")," "),e(5),l("highlight",r.codeForTooltipsBasic),e(5),l("highlightAuto",r.codeForTooltipsBasicTs),e(3),l("isTitle",!0),e(2),p(" ",o(31,65,"UI_COMPONENTS.tooltips.uppercase")," "),e(3),l("matTooltip",o(34,67,"UI_COMPONENTS.tooltips.infoAboutAction")),e(2),p(" ",o(36,69,"UI_COMPONENTS.tooltips.button")," "),e(5),l("highlight",r.codeForTooltipsUppercase),e(5),l("highlightAuto",r.codeForTooltipsUppercaseTs),e(3),l("isTitle",!0),e(2),p(" ",o(51,71,"UI_COMPONENTS.tooltips.disabledOnClick")," "),e(3),l("matTooltip",o(54,73,"UI_COMPONENTS.tooltips.infoAboutAction"))("matTooltipDisabled",r.disabled.value),e(2),p(" ",o(56,75,"UI_COMPONENTS.tooltips.action")," "),e(2),l("formControl",r.disabled),e(),p(" ",o(59,77,"UI_COMPONENTS.tooltips.tooltipDisabled")," "),e(5),l("highlight",r.codeForTooltipsDisabledClick),e(5),l("highlightAuto",r.codeForTooltipsDisabledClickTs),e(3),l("isTitle",!0),e(2),p(" ",o(74,79,"UI_COMPONENTS.tooltips.position")," "),e(3),l("matTooltip",o(78,81,"UI_COMPONENTS.tooltips.infoAboutAction")),e(3),p(" ",o(80,83,"UI_COMPONENTS.tooltips.below")," "),e(2),l("matTooltip",o(83,85,"UI_COMPONENTS.tooltips.infoAboutAction")),e(3),p(" ",o(85,87,"UI_COMPONENTS.tooltips.above")," "),e(2),l("matTooltip",o(88,89,"UI_COMPONENTS.tooltips.infoAboutAction")),e(3),p(" ",o(90,91,"UI_COMPONENTS.tooltips.left")," "),e(2),l("matTooltip",o(93,93,"UI_COMPONENTS.tooltips.infoAboutAction")),e(3),p(" ",o(95,95,"UI_COMPONENTS.tooltips.right")," "),e(5),l("highlight",r.codeForTooltipsPosition),e(5),l("highlightAuto",r.codeForTooltipsPositionTs),e(3),l("isTitle",!0),e(2),p(" ",o(110,97,"UI_COMPONENTS.tooltips.showAndHide")," "),e(7),s(o(117,99,"UI_COMPONENTS.tooltips.showDelay")),e(2),l("formControl",r.showDelay),e(2),s(o(121,101,"UI_COMPONENTS.tooltips.milliseconds")),e(5),s(o(126,103,"UI_COMPONENTS.tooltips.hideDelay")),e(2),l("formControl",r.hideDelay2),e(2),s(o(130,105,"UI_COMPONENTS.tooltips.milliseconds")),e(3),l("matTooltip",o(133,107,"UI_COMPONENTS.tooltips.infoAboutAction"))("matTooltipShowDelay",r.showDelay.value)("matTooltipHideDelay",r.hideDelay2.value),e(2),p(" ",o(135,109,"UI_COMPONENTS.tooltips.action")," "),e(5),l("highlight",r.codeForTooltipsShowAndHide),e(5),l("highlightAuto",r.codeForTooltipsShowAndHideTs),e(3),l("isTitle",!0),e(2),p(" ",o(150,111,"UI_COMPONENTS.tooltips.changeMessage")," "),e(5),s(o(155,113,"UI_COMPONENTS.tooltips.tooltipMessage")),e(2),l("formControl",r.message),e(),l("matTooltip",r.message.value||""),ve("aria-label",o(158,115,"UI_COMPONENTS.tooltips.tooltipWithCustomMessage")),e(2),p(" ",o(160,117,"UI_COMPONENTS.tooltips.action")," "),e(5),l("highlight",r.codeForTooltipsChangeMessage),e(5),l("highlightAuto",r.codeForTooltipsChangeMessageTs))},dependencies:[G,Q,q,Dt,Ke,R,K,se,V,be,We,U,k,Oi,Ft,C,w,L,D,Y,te,ue,ce,N,P,O,x,I,b],encapsulation:2})}}return m})();var J0=[{path:"",children:[{path:"badge",component:Gi,data:{title:"Badge",urls:[{title:"Home",url:""},{title:"Badge"}]}},{path:"expansion",component:Ia,data:{title:"Expansion Panel",urls:[{title:"Home",url:""},{title:"Expansion Panel"}]}},{path:"chips",component:ta,data:{title:"Chip",urls:[{title:"Home",url:""},{title:"Chip"}]}},{path:"dialog",component:ca,data:{title:"Dialog",urls:[{title:"Home",url:""},{title:"Dialog"}]}},{path:"lists",component:Aa,data:{title:"Lists",urls:[{title:"Home",url:""},{title:"Lists"}]}},{path:"divider",component:Sa,data:{title:"Divider",urls:[{title:"Home",url:""},{title:"Divider"}]}},{path:"menu",component:Ua,data:{title:"Menu",urls:[{title:"Home",url:""},{title:"Menu"}]}},{path:"paginator",component:Ha,data:{title:"Paginator",urls:[{title:"Home",url:""},{title:"Paginator"}]}},{path:"progress",component:$a,data:{title:"Progress",urls:[{title:"Home",url:""},{title:"Progress"}]}},{path:"progress-spinner",component:Ka,data:{title:"Progress Spinner",urls:[{title:"Home",url:""},{title:"Progress Spinner"}]}},{path:"ripples",component:an,data:{title:"Ripples",urls:[{title:"Home",url:""},{title:"Ripples"}]}},{path:"slide-toggle",component:dn,data:{title:"Slide Toggle",urls:[{title:"Home",url:""},{title:"Slide Toggle"}]}},{path:"slider",component:Tn,data:{title:"Slider",urls:[{title:"Home",url:""},{title:"Slider"}]}},{path:"snackbar",component:En,data:{title:"Snackbar",urls:[{title:"Home",url:""},{title:"Snackbar"}]}},{path:"tabs",component:zn,data:{title:"Tabs",urls:[{title:"Home",url:""},{title:"Tabs"}]}},{path:"toolbar",component:qn,data:{title:"Toolbar",urls:[{title:"Home",url:""},{title:"Toolbar"}]}},{path:"tooltips",component:no,data:{title:"Tooltips",urls:[{title:"Home",url:""},{title:"Tooltips"}]}}]}];export{J0 as UiComponentsRoutes};
