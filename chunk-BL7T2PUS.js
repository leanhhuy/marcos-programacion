import{a as bi,b as vi,d as hi}from"./chunk-7GYE7L6R.js";import{a as _}from"./chunk-BWXQIUC7.js";import{b as y}from"./chunk-INFJILZO.js";import{a as at,c as fi}from"./chunk-EBAQCRRN.js";import{e as T,f as C}from"./chunk-Y7E7CANW.js";import"./chunk-7UZYWCAJ.js";import"./chunk-CJPLD6EO.js";import{a as ui}from"./chunk-GG7NGRB4.js";import{a as fe,b as be}from"./chunk-GJBHPO4L.js";import{S as oi,T as ri,U as mi,V as pi,W as di,Y as si,Z as ci,a as Ut,b as mt,c as zt,d as Kt,e as me,f as pe,g as qt,h as de,i as Jt,j as Xt,k as Zt,l as Qt,m as $t,n as ei,o as ti,oa as ue,p as se,q as X,r as Z,s as ii,ya as F}from"./chunk-KEVDZ7EV.js";import"./chunk-BPMXZUA6.js";import{a as Vt,b as Yt,d as ai,f as Je,g as Xe,h as Ze,j as Qe,k as $e}from"./chunk-B4UV4YR7.js";import{$ as ae,$a as oe,$b as et,Bb as Ce,Cb as L,Db as Wt,Eb as jt,Ga as ne,Ia as Me,Jb as ce,Kb as W,La as O,Lb as ye,Ma as J,Na as je,Pa as ze,Pb as Oe,Qa as B,Rb as k,Sa as Ee,Sb as j,Ta as Ie,Tb as w,Ub as ni,Xa as Fe,Xb as li,Z as Ht,_a as le,_b as Q,cc as tt,d as Nt,dc as it,e as I,eb as ke,f as Lt,hb as we,jb as R,kb as N,mb as G,nb as Ke,ob as qe,pb as _e,qb as re,tb as U,yb as Te,zb as Gt}from"./chunk-ZDUEIW35.js";import{m as At,q as We,v as xe}from"./chunk-F6ZH6GOJ.js";import{Bc as a,Ca as Ge,Cc as p,D as Ot,Dc as d,Ec as Se,Fb as he,Fc as V,Gc as H,Hc as Y,Lc as q,Pb as K,Qb as Ae,Rb as Ne,Tb as z,Ub as D,Vb as P,Vc as n,Wb as r,Wc as l,X as Pe,Xb as e,Yb as i,Zb as o,bd as Pt,db as Dt,ec as A,fa as Rt,ja as Bt,jb as t,kc as S,mc as Ue,qa as v,ra as h,t as De,tb as te,wc as g,zb as E}from"./chunk-UUJKCIGR.js";import{a as yt}from"./chunk-6NE7JDAX.js";var Si=`  import {Component, OnInit} from '@angular/core';
    import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
    import {Observable} from 'rxjs';
    import {map, startWith} from 'rxjs/operators';
    import {AsyncPipe} from '@angular/common';
    import {MatAutocompleteModule} from '@angular/material/autocomplete';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';

    /**
     * @title Highlight the first autocomplete option
     */
    @Component({
        selector: 'app-autocomplete',
        imports: [
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatAutocompleteModule,
            ReactiveFormsModule,
            AsyncPipe,
        ],
        templateUrl: './autocomplete.component.html'
    })
    export class AppAutocompleteComponent implements OnInit {

        firstControl = new FormControl('');
        firstoption: string[] = ['One', 'Two', 'Three'];
        filteredOptions: Observable<string[]>;

        ngOnInit() {
            // first option
            this.filteredOptions = this.firstControl.valueChanges.pipe(
              startWith(''),
              map((value) => this._filter(value || ''))
            );
        }

        private _filter(value: string): string[] {
            const filterValue = value.toLowerCase();

            return this.firstoption.filter((option) =>
            option.toLowerCase().includes(filterValue)
            );
        }
    }
`,gi=`  import {Component, OnInit, inject} from '@angular/core';
    import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
    import {Observable} from 'rxjs';
    import {startWith, map} from 'rxjs/operators';
    import {AsyncPipe} from '@angular/common';
    import {MatAutocompleteModule} from '@angular/material/autocomplete';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';

    // option group
    export interface StateGroup {
        letter: string;
        names: string[];
    }

    export const _filter = (opt: string[], value: string): string[] => {
        const filterValue = value.toLowerCase();

        return opt.filter((item) => item.toLowerCase().includes(filterValue));
    };

    /**
     * @title Option groups autocomplete
     */
    @Component({
        selector: 'app-autocomplete',
        imports: [
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatAutocompleteModule,
            AsyncPipe,
        ],
        templateUrl: './autocomplete.component.html'
    })
    export class AppAutocompleteComponent implements OnInit {

        // option group
        stateForm = this._formBuilder.group({
        stateGroup: '',
        });
    
        stateGroups: StateGroup[] = [
        {
            letter: 'A',
            names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
        },
        {
            letter: 'C',
            names: ['California', 'Colorado', 'Connecticut'],
        },
        {
            letter: 'D',
            names: ['Delaware'],
        },
        {
            letter: 'F',
            names: ['Florida'],
        },
        {
            letter: 'G',
            names: ['Georgia'],
        },
        {
            letter: 'H',
            names: ['Hawaii'],
        },
        {
            letter: 'I',
            names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
        },
        {
            letter: 'K',
            names: ['Kansas', 'Kentucky'],
        },
        {
            letter: 'L',
            names: ['Louisiana'],
        },
        {
            letter: 'M',
            names: [
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            ],
        },
        {
            letter: 'N',
            names: [
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            ],
        },
        {
            letter: 'O',
            names: ['Ohio', 'Oklahoma', 'Oregon'],
        },
        {
            letter: 'P',
            names: ['Pennsylvania'],
        },
        {
            letter: 'R',
            names: ['Rhode Island'],
        },
        {
            letter: 'S',
            names: ['South Carolina', 'South Dakota'],
        },
        {
            letter: 'T',
            names: ['Tennessee', 'Texas'],
        },
        {
            letter: 'U',
            names: ['Utah'],
        },
        {
            letter: 'V',
            names: ['Vermont', 'Virginia'],
        },
        {
            letter: 'W',
            names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
        },
        ];

        stateGroupOptions: Observable<StateGroup[]>;

          ngOnInit() {
              // option group
              this.stateGroupOptions = this.stateForm
                .get('stateGroup')!
                .valueChanges.pipe(
                  startWith(''),
                  map((value) => this._filterGroup(value || ''))
                );
            }

            // option group
              private _filterGroup(value: string): StateGroup[] {
                if (value) {
                  return this.stateGroups
                    .map((group) => ({
                      letter: group.letter,
                      names: _filter(group.names, value),
                    }))
                    .filter((group) => group.names.length > 0);
                }
            
                return this.stateGroups;
              }
        
    }
`,xi=`  import {Component, OnInit} from '@angular/core';
    import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
    import {Observable} from 'rxjs';
    import {map, startWith} from 'rxjs/operators';
    import {AsyncPipe} from '@angular/common';
    import {MatAutocompleteModule} from '@angular/material/autocomplete';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';

    /**
     * @title Filter autocomplete
     */
    @Component({
        selector: 'app-autocomplete',
        imports: [
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatAutocompleteModule,
            ReactiveFormsModule,
            AsyncPipe,
        ],
        templateUrl: './autocomplete.component.html'
    })
    export class AppAutocompleteComponent implements OnInit {

        // filter option
        filterControl = new FormControl('');
        searchoption: string[] = ['One', 'Two', 'Three'];
        searchfilteredOptions: Observable<string[]>;

        ngOnInit() {
            // filter option
            this.searchfilteredOptions = this.filterControl.valueChanges.pipe(
                startWith(''),
                map((value) => this._searchfilter(value || ''))
            );
        }

        // filter option
        private _searchfilter(value: string): string[] {
            const searchfilterValue = value.toLowerCase();

            return this.searchoption.filter((searchoption) =>
            searchoption.toLowerCase().includes(searchfilterValue)
            );
        }
    }
`,Mi=`  import {Component} from '@angular/core';
    import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
    import {Observable} from 'rxjs';
    import {map, startWith} from 'rxjs/operators';
    import {MatSlideToggleModule} from '@angular/material/slide-toggle';
    import {AsyncPipe} from '@angular/common';
    import {MatAutocompleteModule} from '@angular/material/autocomplete';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';

    export interface State {
        flag: string;
        name: string;
        population: string;
    }

    /**
     * @title Autocomplete overview
     */
    @Component({
        selector: 'app-autocomplete',
        imports: [
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatAutocompleteModule,
            ReactiveFormsModule,
            MatSlideToggleModule,
            AsyncPipe,
        ],
        templateUrl: './autocomplete.component.html'
    })
    export class AppAutocompleteComponent implements OnInit {

        // state
          stateCtrl = new FormControl('');
          filteredStates: Observable<State[]>;
        
          states: State[] = [
            {
              name: 'Arkansas',
              population: '2.978M',
              // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
              flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
            },
            {
              name: 'California',
              population: '39.14M',
              // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
              flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
            },
            {
              name: 'Florida',
              population: '20.27M',
              // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
              flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
            },
            {
              name: 'Texas',
              population: '27.47M',
              // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
              flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
            },
          ];
        
          constructor(private _formBuilder: FormBuilder) {
            this.filteredStates = this.stateCtrl.valueChanges.pipe(
              startWith(''),
              map((state) => (state ? this._filterStates(state) : this.states.slice()))
            );
          }
        
          private _filterStates(value: string): State[] {
            const filterValue = value.toLowerCase();
        
            return this.states.filter((state) =>
              state.name.toLowerCase().includes(filterValue)
            );
          }
    }
`;var Ei=`  <form>
              <mat-form-field class="w-100" appearance="outline">
                <mat-label>Number</mat-label>
                <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="firstControl"
                  [matAutocomplete]="auto" />
                <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
                  @for(firstoption of filteredOptions | async; track
                  firstoption) {
                  <mat-option [value]="firstoption">
                    {{ firstoption }}
                  </mat-option>
                  }
                </mat-autocomplete>
              </mat-form-field>
            </form>
`,Ii=`  <form [formGroup]="stateForm">
              <mat-form-field appearance="outline" class="w-100">
                <mat-label>States Group</mat-label>
                <input type="text" matInput formControlName="stateGroup" required [matAutocomplete]="autoGroup" />
                <mat-autocomplete #autoGroup="matAutocomplete">
                  @for(group of stateGroupOptions | async; track group) {
                  <mat-optgroup [label]="group.letter">
                    @for(name of group.names; track name) {
                    <mat-option [value]="name">
                      {{ name }}
                    </mat-option>
                    }
                  </mat-optgroup>
                  }
                </mat-autocomplete>
              </mat-form-field>
            </form>
`,Fi=`  <form>
              <mat-form-field class="w-100" appearance="outline">
                <mat-label>Number</mat-label>
                <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="filterControl"
                  [matAutocomplete]="auto3" />
                <mat-autocomplete #auto3="matAutocomplete">
                  @for(searchoption of searchfilteredOptions | async; track
                  searchoption) {
                  <mat-option [value]="searchoption">
                    {{ searchoption }}
                  </mat-option>
                  }
                </mat-autocomplete>
              </mat-form-field>
            </form>
`,ki=`  <form>
              <mat-form-field class="w-100" appearance="outline">
                <mat-label>State</mat-label>
                <input matInput aria-label="State" [matAutocomplete]="auto2" [formControl]="stateCtrl" />
                <mat-autocomplete #auto2="matAutocomplete">
                  @for(state of filteredStates | async; track state.name) {
                  <mat-option [value]="state.name" class="d-flex align-items-center">
                    <img alt="" class="m-r-8" [src]="state.flag" height="25" />

                    <span>{{ state.name }}</span> |
                    <small>Population: {{ state.population }}</small>
                  </mat-option>
                  }
                </mat-autocomplete>
              </mat-form-field>

              <br />

              <mat-slide-toggle [checked]="stateCtrl.disabled" (change)="
                  stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()
                ">
                Disable Input?
              </mat-slide-toggle>
            </form>
`;var cn=(s,x)=>x.name;function un(s,x){if(s&1&&(e(0,"mat-option",16),a(1),i()),s&2){let c=x.$implicit;r("value",c),t(),d(" ",c," ")}}function fn(s,x){if(s&1&&(e(0,"mat-option",16),a(1),i()),s&2){let c=x.$implicit;r("value",c),t(),d(" ",c," ")}}function bn(s,x){if(s&1&&(e(0,"mat-optgroup",23),D(1,fn,2,2,"mat-option",16,z),i()),s&2){let c=x.$implicit;r("label",c.letter),t(),P(c.names)}}function vn(s,x){if(s&1&&(e(0,"mat-option",16),a(1),i()),s&2){let c=x.$implicit;r("value",c),t(),d(" ",c," ")}}function hn(s,x){if(s&1&&(e(0,"mat-option",25),o(1,"img",27),e(2,"span"),a(3),i(),a(4," | "),e(5,"small"),a(6),i()()),s&2){let c=x.$implicit;r("value",c.name),t(),r("src",c.flag,Dt),t(2),p(c.name),t(3),d("Population: ",c.population)}}var Sn=(s,x)=>{let c=x.toLowerCase();return s.filter(u=>u.toLowerCase().includes(c))},_i=(()=>{class s{constructor(c){this._formBuilder=c,this.codeForFirstAutocompleteOption=Ei,this.codeForFirstAutocompleteOptionTs=Si,this.codeForOptionGroup=Ii,this.codeForOptionGroupTs=gi,this.codeForFilter=Fi,this.codeForFilterTs=xi,this.codeForOverview=ki,this.codeForOverviewTs=Mi,this.firstControl=new B(""),this.firstoption=["One","Two","Three"],this.stateForm=this._formBuilder.group({stateGroup:""}),this.stateGroups=[{letter:"A",names:["Alabama","Alaska","Arizona","Arkansas"]},{letter:"C",names:["California","Colorado","Connecticut"]},{letter:"D",names:["Delaware"]},{letter:"F",names:["Florida"]},{letter:"G",names:["Georgia"]},{letter:"H",names:["Hawaii"]},{letter:"I",names:["Idaho","Illinois","Indiana","Iowa"]},{letter:"K",names:["Kansas","Kentucky"]},{letter:"L",names:["Louisiana"]},{letter:"M",names:["Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana"]},{letter:"N",names:["Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota"]},{letter:"O",names:["Ohio","Oklahoma","Oregon"]},{letter:"P",names:["Pennsylvania"]},{letter:"R",names:["Rhode Island"]},{letter:"S",names:["South Carolina","South Dakota"]},{letter:"T",names:["Tennessee","Texas"]},{letter:"U",names:["Utah"]},{letter:"V",names:["Vermont","Virginia"]},{letter:"W",names:["Washington","West Virginia","Wisconsin","Wyoming"]}],this.filterControl=new B(""),this.searchoption=["One","Two","Three"],this.stateCtrl=new B(""),this.states=[{name:"Arkansas",population:"2.978M",flag:"https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg"},{name:"California",population:"39.14M",flag:"https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg"},{name:"Florida",population:"20.27M",flag:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg"},{name:"Texas",population:"27.47M",flag:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg"}],this.filteredStates=this.stateCtrl.valueChanges.pipe(Pe(""),De(u=>u?this._filterStates(u):this.states.slice()))}_filterStates(c){let u=c.toLowerCase();return this.states.filter(m=>m.name.toLowerCase().includes(u))}ngOnInit(){this.filteredOptions=this.firstControl.valueChanges.pipe(Pe(""),De(c=>this._filter(c||""))),this.stateGroupOptions=this.stateForm.get("stateGroup").valueChanges.pipe(Pe(""),De(c=>this._filterGroup(c||""))),this.searchfilteredOptions=this.filterControl.valueChanges.pipe(Pe(""),De(c=>this._searchfilter(c||"")))}_filter(c){let u=c.toLowerCase();return this.firstoption.filter(m=>m.toLowerCase().includes(u))}_filterGroup(c){return c?this.stateGroups.map(u=>({letter:u.letter,names:Sn(u.names,c)})).filter(u=>u.names.length>0):this.stateGroups}_searchfilter(c){let u=c.toLowerCase();return this.searchoption.filter(m=>m.toLowerCase().includes(u))}static{this.\u0275fac=function(u){return new(u||s)(te(we))}}static{this.\u0275cmp=E({type:s,selectors:[["app-autocomplete"]],decls:121,vars:65,consts:[["auto","matAutocomplete"],["autoGroup","matAutocomplete"],["auto3","matAutocomplete"],["auto2","matAutocomplete"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-sm-6"],[3,"isTitle"],["Ctitle",""],["output",""],["appearance","outline",1,"w-100"],["type","text","aria-label","Number","matInput","",3,"placeholder","formControl","matAutocomplete"],["autoActiveFirstOption",""],[3,"value"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[3,"formGroup"],["type","text","matInput","","formControlName","stateGroup","required","",3,"matAutocomplete"],[3,"label"],["matInput","","aria-label","State",3,"matAutocomplete","formControl"],[1,"d-flex","align-items-center",3,"value"],[3,"change","checked"],["alt","","height","25",1,"m-r-8",3,"src"]],template:function(u,m){if(u&1){let b=A();e(0,"mat-card",4)(1,"div",5)(2,"mat-card-title",6),a(3),n(4,"translate"),i()(),e(5,"mat-card-content",7)(6,"div",8)(7,"div",9)(8,"app-code-view",10)(9,"h4",11),a(10),n(11,"translate"),i(),e(12,"div",12)(13,"form")(14,"mat-form-field",13)(15,"mat-label"),a(16),n(17,"translate"),i(),o(18,"input",14),n(19,"translate"),e(20,"mat-autocomplete",15,0),D(22,un,2,2,"mat-option",16,z),n(24,"async"),i()()()(),e(25,"div",17)(26,"pre"),a(27,"              "),o(28,"code",18),a(29,`
            `),i()(),e(30,"div",19)(31,"pre"),a(32,"              "),o(33,"code",20),a(34,`
            `),i()()()(),e(35,"div",9)(36,"app-code-view",10)(37,"h4",11),a(38),n(39,"translate"),i(),e(40,"div",12)(41,"form",21)(42,"mat-form-field",13)(43,"mat-label"),a(44),n(45,"translate"),i(),o(46,"input",22),e(47,"mat-autocomplete",null,1),D(49,bn,3,1,"mat-optgroup",23,z),n(51,"async"),i()()()(),e(52,"div",17)(53,"pre"),a(54,"              "),o(55,"code",18),a(56,`
            `),i()(),e(57,"div",19)(58,"pre"),a(59,"              "),o(60,"code",20),a(61,`
            `),i()()()(),e(62,"div",9)(63,"app-code-view",10)(64,"h4",11),a(65),n(66,"translate"),i(),e(67,"div",12)(68,"form")(69,"mat-form-field",13)(70,"mat-label"),a(71),n(72,"translate"),i(),o(73,"input",14),n(74,"translate"),e(75,"mat-autocomplete",null,2),D(77,vn,2,2,"mat-option",16,z),n(79,"async"),i()()()(),e(80,"div",17)(81,"pre"),a(82,"              "),o(83,"code",18),a(84,`
            `),i()(),e(85,"div",19)(86,"pre"),a(87,"              "),o(88,"code",20),a(89,`
            `),i()()()(),e(90,"div",9)(91,"app-code-view",10)(92,"h4",11),a(93),n(94,"translate"),i(),e(95,"div",12)(96,"form")(97,"mat-form-field",13)(98,"mat-label"),a(99),n(100,"translate"),i(),o(101,"input",24),e(102,"mat-autocomplete",null,3),D(104,hn,7,4,"mat-option",25,cn),n(106,"async"),i()(),o(107,"br"),e(108,"mat-slide-toggle",26),S("change",function(){return v(b),h(m.stateCtrl.disabled?m.stateCtrl.enable():m.stateCtrl.disable())}),a(109),n(110,"translate"),i()()(),e(111,"div",17)(112,"pre"),a(113,"              "),o(114,"code",18),a(115,`
            `),i()(),e(116,"div",19)(117,"pre"),a(118,"              "),o(119,"code",20),a(120,`
            `),i()()()()()()()}if(u&2){let b=g(21),f=g(48),M=g(76),Ye=g(103);t(3),p(l(4,33,"FORMS.autocomplete.title")),t(5),r("isTitle",!0),t(2),d(" ",l(11,35,"FORMS.autocomplete.firstOption")," "),t(6),p(l(17,37,"FORMS.autocomplete.number")),t(2),r("placeholder",l(19,39,"FORMS.placeholders.pickOne"))("formControl",m.firstControl)("matAutocomplete",b),t(4),P(l(24,41,m.filteredOptions)),t(6),r("highlight",m.codeForFirstAutocompleteOption),t(5),r("highlightAuto",m.codeForFirstAutocompleteOptionTs),t(3),r("isTitle",!0),t(2),d(" ",l(39,43,"FORMS.autocomplete.optionGroups")," "),t(3),r("formGroup",m.stateForm),t(3),p(l(45,45,"FORMS.autocomplete.statesGroup")),t(2),r("matAutocomplete",f),t(3),P(l(51,47,m.stateGroupOptions)),t(6),r("highlight",m.codeForOptionGroup),t(5),r("highlightAuto",m.codeForOptionGroupTs),t(3),r("isTitle",!0),t(2),d(" ",l(66,49,"FORMS.autocomplete.filter")," "),t(6),p(l(72,51,"FORMS.autocomplete.number")),t(2),r("placeholder",l(74,53,"FORMS.placeholders.pickOne"))("formControl",m.filterControl)("matAutocomplete",M),t(4),P(l(79,55,m.searchfilteredOptions)),t(6),r("highlight",m.codeForFilter),t(5),r("highlightAuto",m.codeForFilterTs),t(3),r("isTitle",!0),t(2),d(" ",l(94,57,"FORMS.autocomplete.overview")," "),t(6),p(l(100,59,"FORMS.labels.state")),t(2),r("matAutocomplete",Ye)("formControl",m.stateCtrl),t(3),P(l(106,61,m.filteredStates)),t(4),r("checked",m.stateCtrl.disabled),t(),d(" ",l(110,63,"FORMS.autocomplete.disableInput")," "),t(5),r("highlight",m.codeForOverview),t(5),r("highlightAuto",m.codeForOverviewTs)}},dependencies:[F,Vt,ae,Ht,Yt,U,G,W,ai,k,w,j,R,Ie,ne,O,J,ke,ze,N,Fe,oe,le,xe,T,C,y,_,I,At],encapsulation:2})}}return s})();var ie=`  import {Component} from '@angular/core';
    import {MatButtonModule} from '@angular/material/button';
    import {MatIconModule} from '@angular/material/icon';
    import { TablerIconsModule } from 'angular-tabler-icons';

    /**
     * @title Basic buttons
     */
    @Component({
        selector: 'app-button',
        imports: [MatButtonModule, MatIconModule, TablerIconsModule],
        templateUrl: './button.component.html'
    })
    export class AppButtonComponent {
        constructor() {}
    }
`,Ve=`  import {Component} from '@angular/core';
    import {MatButtonToggleModule} from '@angular/material/button-toggle';
    import {MatIconModule} from '@angular/material/icon';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

    /**
     * @title Basic button-toggles
     */
    @Component({
        selector: 'app-button',
        imports: [MatButtonToggleModule, MatIconModule, FormsModule, ReactiveFormsModule],
        templateUrl: './button.component.html'
    })
    export class AppButtonComponent {
        constructor() {}
        
        //   reactive form
        fontStyleControl = new FormControl('');
        fontStyle?: string;
    }
`;var Ti=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8">
              <button mat-button>Basic</button>
              <button mat-button disabled>Disabled</button>
              <a mat-button href="https://www.google.com/" target="_blank">Link</a>
            </div>
`,Ci=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8">
              <button mat-raised-button>Basic</button>
              <button mat-raised-button disabled>Disabled</button>
              <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
            </div>
`,yi=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8 flex-wrap">
              <button mat-stroked-button>Primary</button>
              <button mat-button class="b-1 border-secondary text-secondary">
                Secondary
              </button>
              <button mat-button class="b-1 border-warning text-warning">
                Warning
              </button>
              <button mat-button class="b-1 border-error text-error">
                Error
              </button>
              <button mat-button class="b-1 border-success text-success">
                Success
              </button>
              <button mat-button disabled>Disabled</button>
              <a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>
            </div>
`,Oi=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8 flex-wrap">
              <button mat-flat-button>Primary</button>
              <button mat-flat-button class="bg-secondary text-white">Secondary</button>
              <button mat-flat-button class="bg-warning text-white">Warning</button>
              <button mat-flat-button class="bg-error text-white">Error</button>
              <button mat-flat-button class="bg-success text-white">Success</button>
              <button mat-flat-button disabled>Disabled</button>
              <a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>
            </div>
`,Ri=`  <div class="d-flex gap-8 justify-content-center">
              <button mat-icon-button class="d-flex" aria-label="Example icon button with a vertical three dot icon">
                <i-tabler name="home-2" class="icon-20"></i-tabler>
              </button>
              <button mat-icon-button color="primary" class="d-flex" aria-label="Example icon button with a home icon">
                <i-tabler name="adjustments-alt" class="icon-20"></i-tabler>
              </button>
              <button mat-icon-button color="accent" class="d-flex" aria-label="Example icon button with a menu icon">
                <i-tabler name="apps" class="icon-20"></i-tabler>
              </button>
              <button mat-icon-button color="warn" class="d-flex" aria-label="Example icon button with a heart icon">
                <i-tabler name="heart-filled" class="icon-20"></i-tabler>
              </button>
              <button mat-icon-button disabled class="d-flex"
                aria-label="Example icon button with a open in new tab icon">
                <i-tabler name="message-2" class="icon-20"></i-tabler>
              </button>
            </div>
`,Bi=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8">
              <button mat-fab class="bg-primary text-white" aria-label="Example icon button with a delete icon">
                <i-tabler name="trash"></i-tabler>
              </button>

              <button mat-fab class="bg-secondary text-white" aria-label="Example icon button with a bookmark icon">
                <i-tabler name="bookmark"></i-tabler>
              </button>

              <button mat-fab class="bg-warning text-white" aria-label="Example icon button with a home icon">
                <i-tabler name="home-2"></i-tabler>
              </button>

              <button mat-fab class="bg-error text-white" aria-label="Example icon button with a heart icon">
                <i-tabler name="heart-filled"></i-tabler>
              </button>

              <button mat-fab class="bg-success text-white" aria-label="Example icon button with a heart icon">
                <i-tabler name="access-point"></i-tabler>
              </button>

              <button mat-fab disabled aria-label="Example icon button with a heart icon">
                <i-tabler name="accessible"></i-tabler>
              </button>
            </div>
`,Di=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8">
              <button mat-mini-fab class="bg-primary text-white" aria-label="Example icon button with a delete icon">
                <i-tabler class="icon-20 d-flex" name="trash"></i-tabler>
              </button>

              <button mat-mini-fab class="bg-secondary text-white"
                aria-label="Example icon button with a bookmark icon">
                <i-tabler class="icon-20 d-flex" name="bookmark"></i-tabler>
              </button>

              <button mat-mini-fab class="bg-warning text-white" aria-label="Example icon button with a home icon">
                <i-tabler class="icon-20 d-flex" name="home-2"></i-tabler>
              </button>

              <button mat-mini-fab class="bg-error text-white" aria-label="Example icon button with a home icon">
                <i-tabler class="icon-20 d-flex" name="access-point"></i-tabler>
              </button>

              <button mat-mini-fab class="bg-success text-white" aria-label="Example icon button with a home icon">
                <i-tabler class="icon-20 d-flex" name="home-2"></i-tabler>
              </button>

              <button mat-mini-fab disabled aria-label="Example icon button with a heart icon">
                <i-tabler class="icon-20 d-flex" name="accessible"></i-tabler>
              </button>
            </div>
`,Pi=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8">
              <button mat-fab extended aria-label="Example icon button with a delete icon">
                <div class="d-flex align-items-center">
                  <i-tabler class="icon-20 m-r-4" name="trash"></i-tabler><span> Delete</span>
                </div>
              </button>

              <button mat-fab extended aria-label="Example icon button with a bookmark icon">
                <div class="d-flex align-items-center">
                  <i-tabler class="icon-20 m-r-4" name="bookmark"></i-tabler>
                  Bookmark
                </div>
              </button>

              <button mat-fab extended aria-label="Example icon button with a home icon">
                <div class="d-flex align-items-center">
                  <i-tabler class="icon-20 m-r-4" name="home-2"></i-tabler> Home
                </div>
              </button>

              <button mat-fab extended disabled aria-label="Example icon button with a heart icon">
                <div class="d-flex align-items-center">
                  <i-tabler class="icon-20 m-r-4" name="heart-filled"></i-tabler>
                  Heart
                </div>
              </button>
            </div>
`,Ai=`  <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
              <mat-button-toggle value="bold">Bold</mat-button-toggle>
              <mat-button-toggle value="italic">Italic</mat-button-toggle>
              <mat-button-toggle value="underline">Underline</mat-button-toggle>
            </mat-button-toggle-group>
`,Ni=`  <mat-button-toggle-group name="fontStyle" aria-label="Font Style" multiple>
              <mat-button-toggle value="flour">Flour</mat-button-toggle>
              <mat-button-toggle value="eggs">Eggs</mat-button-toggle>
              <mat-button-toggle value="sugar">Sugar</mat-button-toggle>
            </mat-button-toggle-group>
`,Li=`  <mat-button-toggle-group [formControl]="fontStyleControl" aria-label="Font Style">
              <mat-button-toggle value="bold">Bold</mat-button-toggle>
              <mat-button-toggle value="italic">Italic</mat-button-toggle>
              <mat-button-toggle value="underline">Underline</mat-button-toggle>
            </mat-button-toggle-group>
            <p class="f-s-14 f-w-600 m-t-12">
              Chosen value is : {{ fontStyleControl.value }}
            </p>
`,Hi=`  <mat-button-toggle-group #group="matButtonToggleGroup">
              <mat-button-toggle value="left" aria-label="Text align left">
                <mat-icon>format_align_left</mat-icon>
              </mat-button-toggle>
              <mat-button-toggle value="center" aria-label="Text align center">
                <mat-icon>format_align_center</mat-icon>
              </mat-button-toggle>
              <mat-button-toggle value="right" aria-label="Text align right">
                <mat-icon>format_align_right</mat-icon>
              </mat-button-toggle>
              <mat-button-toggle value="justify" disabled aria-label="Text align justify">
                <mat-icon>format_align_justify</mat-icon>
              </mat-button-toggle>
            </mat-button-toggle-group>
            <div class="f-s-14 f-w-600 m-t-12">
              Selected value: {{ group.value }}
            </div>
`;var Vi=(()=>{class s{constructor(){this.codeForBasicButtons=Ti,this.codeForBasicButtonsTs=ie,this.codeForRaisedButtons=Ci,this.codeForRaisedButtonsTs=ie,this.codeForOutlinedButtons=yi,this.codeForOutlinedButtonsTs=ie,this.codeForFlatButtons=Oi,this.codeForFlatButtonsTs=ie,this.codeForIconButtons=Ri,this.codeForIconButtonsTs=ie,this.codeForFabButtons=Bi,this.codeForFabButtonsTs=ie,this.codeForMiniFabButtons=Di,this.codeForMiniFabButtonsTs=ie,this.codeForExtendedFabButtons=Pi,this.codeForExtendedFabButtonsTs=ie,this.codeForBasicToggleButtons=Ai,this.codeForBasicToggleButtonsTs=Ve,this.codeForMultipleSelectToggleButtons=Ni,this.codeForMultipleSelectToggleButtonsTs=Ve,this.codeForReactiveFormToggleButtons=Li,this.codeForReactiveFormToggleButtonsTs=Ve,this.codeForExclusiveSelectionToggleButtons=Hi,this.codeForExclusiveSelectionToggleButtonsTs=Ve,this.fontStyleControl=new B("")}static{this.\u0275fac=function(u){return new(u||s)}}static{this.\u0275cmp=E({type:s,selectors:[["app-button"]],decls:379,vars:186,consts:[["group","matButtonToggleGroup"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"d-flex","flex-sm-row","flex-col","align-items-center","justify-content-center","gap-8"],["mat-button",""],["mat-button","","disabled",""],["mat-button","","href","https://www.google.com/","target","_blank"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-raised-button",""],["mat-raised-button","","disabled",""],["mat-raised-button","","href","https://www.google.com/","target","_blank"],[1,"d-flex","flex-sm-row","flex-col","align-items-center","justify-content-center","gap-8","flex-wrap"],["mat-stroked-button",""],["mat-button","",1,"b-1","border-secondary","text-secondary"],["mat-button","",1,"b-1","border-warning","text-warning"],["mat-button","",1,"b-1","border-error","text-error"],["mat-button","",1,"b-1","border-success","text-success"],["mat-stroked-button","","href","https://www.google.com/","target","_blank"],["mat-flat-button",""],["mat-flat-button","",1,"bg-secondary","text-white"],["mat-flat-button","",1,"bg-warning","text-white"],["mat-flat-button","",1,"bg-error","text-white"],["mat-flat-button","",1,"bg-success","text-white"],["mat-flat-button","","disabled",""],["mat-flat-button","","href","https://www.google.com/","target","_blank"],[1,"d-flex","gap-8","justify-content-center"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",1,"d-flex"],["name","home-2",1,"icon-20"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",1,"d-flex"],["name","adjustments-alt",1,"icon-20"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",1,"d-flex"],["name","apps",1,"icon-20"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",1,"d-flex"],["name","heart-filled",1,"icon-20"],["mat-icon-button","","disabled","","aria-label","Example icon button with a open in new tab icon",1,"d-flex"],["name","message-2",1,"icon-20"],["mat-fab","","aria-label","Example icon button with a delete icon",1,"bg-primary","text-white"],["name","trash"],["mat-fab","","aria-label","Example icon button with a bookmark icon",1,"bg-secondary","text-white"],["name","bookmark"],["mat-fab","","aria-label","Example icon button with a home icon",1,"bg-warning","text-white"],["name","home-2"],["mat-fab","","aria-label","Example icon button with a heart icon",1,"bg-error","text-white"],["name","heart-filled"],["mat-fab","","aria-label","Example icon button with a heart icon",1,"bg-success","text-white"],["name","access-point"],["mat-fab","","disabled","","aria-label","Example icon button with a heart icon"],["name","accessible"],["mat-mini-fab","","aria-label","Example icon button with a delete icon",1,"bg-primary","text-white"],["name","trash",1,"icon-20","d-flex"],["mat-mini-fab","","aria-label","Example icon button with a bookmark icon",1,"bg-secondary","text-white"],["name","bookmark",1,"icon-20","d-flex"],["mat-mini-fab","","aria-label","Example icon button with a home icon",1,"bg-warning","text-white"],["name","home-2",1,"icon-20","d-flex"],["mat-mini-fab","","aria-label","Example icon button with a home icon",1,"bg-error","text-white"],["name","access-point",1,"icon-20","d-flex"],["mat-mini-fab","","aria-label","Example icon button with a home icon",1,"bg-success","text-white"],["mat-mini-fab","","disabled","","aria-label","Example icon button with a heart icon"],["name","accessible",1,"icon-20","d-flex"],["mat-fab","","extended","","aria-label","Example icon button with a delete icon"],[1,"d-flex","align-items-center"],["name","trash",1,"icon-20","m-r-4"],["mat-fab","","extended","","aria-label","Example icon button with a bookmark icon"],["name","bookmark",1,"icon-20","m-r-4"],["mat-fab","","extended","","aria-label","Example icon button with a home icon"],["name","home-2",1,"icon-20","m-r-4"],["mat-fab","","extended","","disabled","","aria-label","Example icon button with a heart icon"],["name","heart-filled",1,"icon-20","m-r-4"],[1,"col-sm-6"],["name","fontStyle","aria-label","Font Style"],["value","bold"],["value","italic"],["value","underline"],["name","fontStyle","aria-label","Font Style","multiple",""],["value","flour"],["value","eggs"],["value","sugar"],["aria-label","Font Style",3,"formControl"],[1,"f-s-14","f-w-600","m-t-12"],["value","left","aria-label","Text align left"],["value","center","aria-label","Text align center"],["value","right","aria-label","Text align right"],["value","justify","disabled","","aria-label","Text align justify"]],template:function(u,m){if(u&1&&(e(0,"mat-card",1)(1,"div",2)(2,"mat-card-title",3),a(3),n(4,"translate"),i()(),e(5,"mat-card-content",4)(6,"div",5)(7,"div",6)(8,"app-code-view",7)(9,"h4",8),a(10),n(11,"translate"),i(),e(12,"div",9)(13,"div",10)(14,"button",11),a(15),n(16,"translate"),i(),e(17,"button",12),a(18),n(19,"translate"),i(),e(20,"a",13),a(21),n(22,"translate"),i()()(),e(23,"div",14)(24,"pre"),a(25,"              "),o(26,"code",15),a(27,`
            `),i()(),e(28,"div",16)(29,"pre"),a(30,"              "),o(31,"code",17),a(32,`
            `),i()()()(),e(33,"div",6)(34,"app-code-view",7)(35,"h4",8),a(36),n(37,"translate"),i(),e(38,"div",9)(39,"div",10)(40,"button",18),a(41),n(42,"translate"),i(),e(43,"button",19),a(44),n(45,"translate"),i(),e(46,"a",20),a(47),n(48,"translate"),i()()(),e(49,"div",14)(50,"pre"),a(51,"              "),o(52,"code",15),a(53,`
            `),i()(),e(54,"div",16)(55,"pre"),a(56,"              "),o(57,"code",17),a(58,`
            `),i()()()(),e(59,"div",6)(60,"app-code-view",7)(61,"h4",8),a(62),n(63,"translate"),i(),e(64,"div",9)(65,"div",21)(66,"button",22),a(67),n(68,"translate"),i(),e(69,"button",23),a(70),n(71,"translate"),i(),e(72,"button",24),a(73),n(74,"translate"),i(),e(75,"button",25),a(76),n(77,"translate"),i(),e(78,"button",26),a(79),n(80,"translate"),i(),e(81,"button",12),a(82),n(83,"translate"),i(),e(84,"a",27),a(85),n(86,"translate"),i()()(),e(87,"div",14)(88,"pre"),a(89,"              "),o(90,"code",15),a(91,`
            `),i()(),e(92,"div",16)(93,"pre"),a(94,"              "),o(95,"code",17),a(96,`
            `),i()()()(),e(97,"div",6)(98,"app-code-view",7)(99,"h4",8),a(100),n(101,"translate"),i(),e(102,"div",9)(103,"div",21)(104,"button",28),a(105),n(106,"translate"),i(),e(107,"button",29),a(108),n(109,"translate"),i(),e(110,"button",30),a(111),n(112,"translate"),i(),e(113,"button",31),a(114),n(115,"translate"),i(),e(116,"button",32),a(117),n(118,"translate"),i(),e(119,"button",33),a(120),n(121,"translate"),i(),e(122,"a",34),a(123),n(124,"translate"),i()()(),e(125,"div",14)(126,"pre"),a(127,"              "),o(128,"code",15),a(129,`
            `),i()(),e(130,"div",16)(131,"pre"),a(132,"              "),o(133,"code",17),a(134,`
            `),i()()()(),e(135,"div",6)(136,"app-code-view",7)(137,"h4",8),a(138),n(139,"translate"),i(),e(140,"div",9)(141,"div",35)(142,"button",36),o(143,"i-tabler",37),i(),e(144,"button",38),o(145,"i-tabler",39),i(),e(146,"button",40),o(147,"i-tabler",41),i(),e(148,"button",42),o(149,"i-tabler",43),i(),e(150,"button",44),o(151,"i-tabler",45),i()()(),e(152,"div",14)(153,"pre"),a(154,"              "),o(155,"code",15),a(156,`
            `),i()(),e(157,"div",16)(158,"pre"),a(159,"              "),o(160,"code",17),a(161,`
            `),i()()()(),e(162,"div",6)(163,"app-code-view",7)(164,"h4",8),a(165),n(166,"translate"),i(),e(167,"div",9)(168,"div",10)(169,"button",46),o(170,"i-tabler",47),i(),e(171,"button",48),o(172,"i-tabler",49),i(),e(173,"button",50),o(174,"i-tabler",51),i(),e(175,"button",52),o(176,"i-tabler",53),i(),e(177,"button",54),o(178,"i-tabler",55),i(),e(179,"button",56),o(180,"i-tabler",57),i()()(),e(181,"div",14)(182,"pre"),a(183,"              "),o(184,"code",15),a(185,`
            `),i()(),e(186,"div",16)(187,"pre"),a(188,"              "),o(189,"code",17),a(190,`
            `),i()()()(),e(191,"div",6)(192,"app-code-view",7)(193,"h4",8),a(194),n(195,"translate"),i(),e(196,"div",9)(197,"div",10)(198,"button",58),o(199,"i-tabler",59),i(),e(200,"button",60),o(201,"i-tabler",61),i(),e(202,"button",62),o(203,"i-tabler",63),i(),e(204,"button",64),o(205,"i-tabler",65),i(),e(206,"button",66),o(207,"i-tabler",63),i(),e(208,"button",67),o(209,"i-tabler",68),i()()(),e(210,"div",14)(211,"pre"),a(212,"              "),o(213,"code",15),a(214,`
            `),i()(),e(215,"div",16)(216,"pre"),a(217,"              "),o(218,"code",17),a(219,`
            `),i()()()(),e(220,"div",6)(221,"app-code-view",7)(222,"h4",8),a(223),n(224,"translate"),i(),e(225,"div",9)(226,"div",10)(227,"button",69)(228,"div",70),o(229,"i-tabler",71),e(230,"span"),a(231),n(232,"translate"),i()()(),e(233,"button",72)(234,"div",70),o(235,"i-tabler",73),a(236),n(237,"translate"),i()(),e(238,"button",74)(239,"div",70),o(240,"i-tabler",75),a(241),n(242,"translate"),i()(),e(243,"button",76)(244,"div",70),o(245,"i-tabler",77),a(246),n(247,"translate"),i()()()(),e(248,"div",14)(249,"pre"),a(250,"              "),o(251,"code",15),a(252,`
            `),i()(),e(253,"div",16)(254,"pre"),a(255,"              "),o(256,"code",17),a(257,`
            `),i()()()()()()(),e(258,"mat-card",1)(259,"div",2)(260,"mat-card-title",3),a(261),n(262,"translate"),i()(),e(263,"mat-card-content",4)(264,"div",5)(265,"div",78)(266,"app-code-view",7)(267,"h4",8),a(268),n(269,"translate"),i(),e(270,"div",9)(271,"mat-button-toggle-group",79)(272,"mat-button-toggle",80),a(273),n(274,"translate"),i(),e(275,"mat-button-toggle",81),a(276),n(277,"translate"),i(),e(278,"mat-button-toggle",82),a(279),n(280,"translate"),i()()(),e(281,"div",14)(282,"pre"),a(283,"              "),o(284,"code",15),a(285,`
            `),i()(),e(286,"div",16)(287,"pre"),a(288,"              "),o(289,"code",17),a(290,`
            `),i()()()(),e(291,"div",78)(292,"app-code-view",7)(293,"h4",8),a(294),n(295,"translate"),i(),e(296,"div",9)(297,"mat-button-toggle-group",83)(298,"mat-button-toggle",84),a(299),n(300,"translate"),i(),e(301,"mat-button-toggle",85),a(302),n(303,"translate"),i(),e(304,"mat-button-toggle",86),a(305),n(306,"translate"),i()()(),e(307,"div",14)(308,"pre"),a(309,"              "),o(310,"code",15),a(311,`
            `),i()(),e(312,"div",16)(313,"pre"),a(314,"              "),o(315,"code",17),a(316,`
            `),i()()()(),e(317,"div",78)(318,"app-code-view",7)(319,"h4",8),a(320),n(321,"translate"),i(),e(322,"div",9)(323,"mat-button-toggle-group",87)(324,"mat-button-toggle",80),a(325),n(326,"translate"),i(),e(327,"mat-button-toggle",81),a(328),n(329,"translate"),i(),e(330,"mat-button-toggle",82),a(331),n(332,"translate"),i()(),e(333,"p",88),a(334),n(335,"translate"),i()(),e(336,"div",14)(337,"pre"),a(338,"              "),o(339,"code",15),a(340,`
            `),i()(),e(341,"div",16)(342,"pre"),a(343,"              "),o(344,"code",17),a(345,`
            `),i()()()(),e(346,"div",78)(347,"app-code-view",7)(348,"h4",8),a(349),n(350,"translate"),i(),e(351,"div",9)(352,"mat-button-toggle-group",null,0)(354,"mat-button-toggle",89)(355,"mat-icon"),a(356,"format_align_left"),i()(),e(357,"mat-button-toggle",90)(358,"mat-icon"),a(359,"format_align_center"),i()(),e(360,"mat-button-toggle",91)(361,"mat-icon"),a(362,"format_align_right"),i()(),e(363,"mat-button-toggle",92)(364,"mat-icon"),a(365,"format_align_justify"),i()()(),e(366,"div",88),a(367),n(368,"translate"),i()(),e(369,"div",14)(370,"pre"),a(371,"              "),o(372,"code",15),a(373,`
            `),i()(),e(374,"div",16)(375,"pre"),a(376,"              "),o(377,"code",17),a(378,`
            `),i()()()()()()()),u&2){let b=g(353);t(3),p(l(4,88,"FORMS.button.buttonsTitle")),t(5),r("isTitle",!0),t(2),d(" ",l(11,90,"FORMS.button.basic")," "),t(5),p(l(16,92,"FORMS.button.basic")),t(3),p(l(19,94,"FORMS.button.disabled")),t(3),p(l(22,96,"FORMS.button.link")),t(5),r("highlight",m.codeForBasicButtons),t(5),r("highlightAuto",m.codeForBasicButtonsTs),t(3),r("isTitle",!0),t(2),d(" ",l(37,98,"FORMS.button.raised")," "),t(5),p(l(42,100,"FORMS.button.basic")),t(3),p(l(45,102,"FORMS.button.disabled")),t(3),p(l(48,104,"FORMS.button.link")),t(5),r("highlight",m.codeForRaisedButtons),t(5),r("highlightAuto",m.codeForRaisedButtonsTs),t(3),r("isTitle",!0),t(2),d(" ",l(63,106,"FORMS.button.outlined")," "),t(5),p(l(68,108,"FORMS.button.primary")),t(3),d(" ",l(71,110,"FORMS.button.secondary")," "),t(3),d(" ",l(74,112,"FORMS.button.warning")," "),t(3),d(" ",l(77,114,"FORMS.button.error")," "),t(3),d(" ",l(80,116,"FORMS.button.success")," "),t(3),p(l(83,118,"FORMS.button.disabled")),t(3),p(l(86,120,"FORMS.button.link")),t(5),r("highlight",m.codeForOutlinedButtons),t(5),r("highlightAuto",m.codeForOutlinedButtonsTs),t(3),r("isTitle",!0),t(2),d(" ",l(101,122,"FORMS.button.flat")," "),t(5),p(l(106,124,"FORMS.button.primary")),t(3),p(l(109,126,"FORMS.button.secondary")),t(3),p(l(112,128,"FORMS.button.warning")),t(3),p(l(115,130,"FORMS.button.error")),t(3),p(l(118,132,"FORMS.button.success")),t(3),p(l(121,134,"FORMS.button.disabled")),t(3),p(l(124,136,"FORMS.button.link")),t(5),r("highlight",m.codeForFlatButtons),t(5),r("highlightAuto",m.codeForFlatButtonsTs),t(3),r("isTitle",!0),t(2),d(" ",l(139,138,"FORMS.button.icon")," "),t(17),r("highlight",m.codeForIconButtons),t(5),r("highlightAuto",m.codeForIconButtonsTs),t(3),r("isTitle",!0),t(2),d(" ",l(166,140,"FORMS.button.fab")," "),t(19),r("highlight",m.codeForFabButtons),t(5),r("highlightAuto",m.codeForFabButtonsTs),t(3),r("isTitle",!0),t(2),d(" ",l(195,142,"FORMS.button.miniFab")," "),t(19),r("highlight",m.codeForMiniFabButtons),t(5),r("highlightAuto",m.codeForMiniFabButtonsTs),t(3),r("isTitle",!0),t(2),d(" ",l(224,144,"FORMS.button.extendedFab")," "),t(8),d(" ",l(232,146,"FORMS.button.delete")),t(5),d(" ",l(237,148,"FORMS.button.bookmark")," "),t(5),d(" ",l(242,150,"FORMS.button.home")," "),t(5),d(" ",l(247,152,"FORMS.button.heart")," "),t(5),r("highlight",m.codeForExtendedFabButtons),t(5),r("highlightAuto",m.codeForExtendedFabButtonsTs),t(5),p(l(262,154,"FORMS.button.buttonToggle")),t(5),r("isTitle",!0),t(2),d(" ",l(269,156,"FORMS.button.basic")," "),t(5),p(l(274,158,"FORMS.button.bold")),t(3),p(l(277,160,"FORMS.button.italic")),t(3),p(l(280,162,"FORMS.button.underline")),t(5),r("highlight",m.codeForBasicToggleButtons),t(5),r("highlightAuto",m.codeForBasicToggleButtonsTs),t(3),r("isTitle",!0),t(2),d(" ",l(295,164,"FORMS.button.multipleSelect")," "),t(5),p(l(300,166,"FORMS.button.flour")),t(3),p(l(303,168,"FORMS.button.eggs")),t(3),p(l(306,170,"FORMS.button.sugar")),t(5),r("highlight",m.codeForMultipleSelectToggleButtons),t(5),r("highlightAuto",m.codeForMultipleSelectToggleButtonsTs),t(3),r("isTitle",!0),t(2),d(" ",l(321,172,"FORMS.button.reactiveForm")," "),t(3),r("formControl",m.fontStyleControl),t(2),p(l(326,174,"FORMS.button.bold")),t(3),p(l(329,176,"FORMS.button.italic")),t(3),p(l(332,178,"FORMS.button.underline")),t(3),Se(" ",l(335,180,"FORMS.button.chosenValueIs")," ",m.fontStyleControl.value," "),t(5),r("highlight",m.codeForReactiveFormToggleButtons),t(5),r("highlightAuto",m.codeForReactiveFormToggleButtonsTs),t(3),r("isTitle",!0),t(2),d(" ",l(350,182,"FORMS.button.exclusiveSelection")," "),t(18),Se(" ",l(368,184,"FORMS.button.selectedValue")," ",b.value," "),t(5),r("highlight",m.codeForExclusiveSelectionToggleButtons),t(5),r("highlightAuto",m.codeForExclusiveSelectionToggleButtonsTs)}},dependencies:[R,O,N,Fe,F,k,w,j,L,jt,Ce,Wt,si,ci,Q,be,fe,T,C,y,_,I],encapsulation:2})}}return s})();var Yi=`  import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
    import { ThemePalette } from '@angular/material/core';
    import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { CommonModule } from '@angular/common';

    export interface Task {
        name: string;
        completed: boolean;
        subtasks?: Task[];
    }

    /**
     * @title Basic checkboxes
     */
    @Component({
        selector: 'app-checkbox',
        imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './checkbox.component.html'
    })
    export class AppCheckboxComponent {
        readonly task = signal<Task>({
            name: 'Parent task',
            completed: false,
            subtasks: [
            {name: 'Child task 1', completed: false},
            {name: 'Child task 2', completed: false},
            {name: 'Child task 3', completed: false},
            ],
        });

        readonly partiallyComplete = computed(() => {
            const task = this.task();
            if (!task.subtasks) {
            return false;
            }
            return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
        });

        update(completed: boolean, index?: number) {
            this.task.update(task => {
            if (index === undefined) {
                task.completed = completed;
                task.subtasks?.forEach(t => (t.completed = completed));
            } else {
                task.subtasks![index].completed = completed;
                task.completed = task.subtasks?.every(t => t.completed) ?? true;
            }
            return {...task};
            });
        }
    }
`,Gi=`  import {Component} from '@angular/core';
    import { ThemePalette } from '@angular/material/core';
    import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { CommonModule } from '@angular/common';

    /**
     * @title Configurable checkbox
     */
    @Component({
        selector: 'app-checkbox',
        imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
        templateUrl: './checkbox.component.html'
    })
    export class AppCheckboxComponent {
        constructor() {}

        checked = false;
        indeterminate = false;
        labelPosition: 'before' | 'after' = 'after';
        disabled = false;
    }
`,Ui=`  import {Component} from '@angular/core';
    import { ThemePalette } from '@angular/material/core';
    import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { CommonModule } from '@angular/common';

    /**
     * @title Configurable checkbox
     */
    @Component({
        selector: 'app-checkbox',
        imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
        templateUrl: './checkbox.component.html'
    })
    export class AppCheckboxComponent {
        constructor() {}

        toppings = this._formBuilder.group({
            pepperoni: false,
            extracheese: false,
            mushroom: false,
        });
    }
`;var Wi=`  <section class="example-section">
          <mat-checkbox class="example-margin">Check me!</mat-checkbox>
          <mat-checkbox class="example-margin" [disabled]="true">Disabled</mat-checkbox>
        </section>
        
        <section class="example-section">
          <span class="example-list-section">
            <mat-checkbox
              class="example-margin"
              [checked]="task().completed"
              [indeterminate]="partiallyComplete()"
              (change)="update($event.checked)"
            >
              {{task().name}}
            </mat-checkbox>
          </span>
          <span class="example-list-section">
            <div class="m-l-24">
              @for (subtask of task().subtasks; track subtask; let i = $index) {
                <div>
                  <mat-checkbox [checked]="subtask.completed" (change)="update($event.checked, i)">
                    {{subtask.name}}
                  </mat-checkbox>
                </div>
              }
            </div>
          </span>
        </section>

`,ji=`  <div>
          <label class="f-w-600">Align:</label>
          <mat-radio-group [(ngModel)]="labelPosition">
            <mat-radio-button value="after" color="primary">After</mat-radio-button>
            <mat-radio-button value="before" color="primary">Before</mat-radio-button>
          </mat-radio-group>
        </div>

        <div>
          <mat-checkbox [(ngModel)]="checked" color="primary">Checked</mat-checkbox>
          <mat-checkbox [(ngModel)]="indeterminate" color="primary">Indeterminate</mat-checkbox>
          <mat-checkbox [(ngModel)]="disabled" color="primary">Disabled</mat-checkbox>
        </div>

        <div class="p-24 rounded bg-light m-t-16">
          <h2 class="f-s-16 f-w-600 m-b-16">Result</h2>
          <mat-checkbox [(ngModel)]="checked" color="primary" [(indeterminate)]="indeterminate"
            [labelPosition]="labelPosition" [disabled]="disabled">
            I'm a checkbox
          </mat-checkbox>
        </div>
`,zi=`  <div [formGroup]="toppings">
          <h4 class="f-s-14 f-w-600">Select your toppings:</h4>
          <p>
            <mat-checkbox formControlName="pepperoni" color="primary">Pepperoni</mat-checkbox>
          </p>
          <p>
            <mat-checkbox formControlName="extracheese" color="primary">Extra Cheese</mat-checkbox>
          </p>
          <p>
            <mat-checkbox formControlName="mushroom" color="primary">Mushroom</mat-checkbox>
          </p>
        </div>
        <div class="p-24 rounded bg-light m-t-16" [formGroup]="toppings">
          <h2 class="f-s-16 f-w-600 m-b-16">You chose:</h2>
          {{ toppings.value | json }}
        </div>
`;function gn(s,x){if(s&1){let c=A();e(0,"div")(1,"mat-checkbox",31),S("change",function(m){let b=v(c).$index,f=Ue();return h(f.update(m.checked,b))}),a(2),i()()}if(s&2){let c=x.$implicit;t(),r("checked",c.completed),t(),d(" ",c.name," ")}}var qi=(()=>{class s{constructor(c){this._formBuilder=c,this.codeForBasicCheckbox=Wi,this.codeForBasicCheckboxTs=Yi,this.codeForConfigurableCheckbox=ji,this.codeForConfigurableCheckboxTs=Gi,this.codeForReactiveFormCheckbox=zi,this.codeForReactiveFormCheckboxTs=Ui,this.toppings=this._formBuilder.group({pepperoni:!1,extracheese:!1,mushroom:!1}),this.checked=!1,this.indeterminate=!1,this.labelPosition="after",this.disabled=!1,this.task=Ge({name:"Parent task",completed:!1,subtasks:[{name:"Child task 1",completed:!1},{name:"Child task 2",completed:!1},{name:"Child task 3",completed:!1}]}),this.partiallyComplete=Pt(()=>{let u=this.task();return u.subtasks?u.subtasks.some(m=>m.completed)&&!u.subtasks.every(m=>m.completed):!1})}update(c,u){this.task.update(m=>(u===void 0?(m.completed=c,m.subtasks?.forEach(b=>b.completed=c)):(m.subtasks[u].completed=c,m.completed=m.subtasks?.every(b=>b.completed)??!0),yt({},m)))}static{this.\u0275fac=function(u){return new(u||s)(te(we))}}static{this.\u0275cmp=E({type:s,selectors:[["app-checkbox"]],decls:116,vars:83,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"example-section"],[1,"example-margin"],[1,"example-margin",3,"disabled"],[1,"example-list-section"],[1,"example-margin",3,"change","checked","indeterminate"],[1,"m-l-24"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"f-w-600"],[3,"ngModelChange","ngModel"],["value","after","color","primary"],["value","before","color","primary"],["color","primary",3,"ngModelChange","ngModel"],[1,"p-24","rounded","bg-light","m-t-16"],[1,"f-s-16","f-w-600","m-b-16"],["color","primary",3,"ngModelChange","indeterminateChange","ngModel","indeterminate","labelPosition","disabled"],[3,"formGroup"],[1,"f-s-14","f-w-600"],["formControlName","pepperoni","color","primary"],["formControlName","extracheese","color","primary"],["formControlName","mushroom","color","primary"],[1,"p-24","rounded","bg-light","m-t-16",3,"formGroup"],[3,"change","checked"]],template:function(u,m){u&1&&(e(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),a(3),n(4,"translate"),i()(),e(5,"mat-card-content",3)(6,"app-code-view",4)(7,"h4",5),a(8),n(9,"translate"),i(),e(10,"div",6)(11,"section",7)(12,"mat-checkbox",8),a(13),n(14,"translate"),i(),e(15,"mat-checkbox",9),a(16),n(17,"translate"),i()(),e(18,"section",7)(19,"span",10)(20,"mat-checkbox",11),S("change",function(f){return m.update(f.checked)}),a(21),i()(),e(22,"span",10)(23,"div",12),D(24,gn,3,2,"div",null,z),i()()()(),e(26,"div",13)(27,"pre"),a(28,"          "),o(29,"code",14),a(30,`
        `),i()(),e(31,"div",15)(32,"pre"),a(33,"          "),o(34,"code",16),a(35,`
        `),i()()(),e(36,"app-code-view",4)(37,"h4",5),a(38),n(39,"translate"),i(),e(40,"div",6)(41,"div")(42,"label",17),a(43),n(44,"translate"),i(),e(45,"mat-radio-group",18),Y("ngModelChange",function(f){return H(m.labelPosition,f)||(m.labelPosition=f),f}),e(46,"mat-radio-button",19),a(47),n(48,"translate"),i(),e(49,"mat-radio-button",20),a(50),n(51,"translate"),i()()(),e(52,"div")(53,"mat-checkbox",21),Y("ngModelChange",function(f){return H(m.checked,f)||(m.checked=f),f}),a(54),n(55,"translate"),i(),e(56,"mat-checkbox",21),Y("ngModelChange",function(f){return H(m.indeterminate,f)||(m.indeterminate=f),f}),a(57),n(58,"translate"),i(),e(59,"mat-checkbox",21),Y("ngModelChange",function(f){return H(m.disabled,f)||(m.disabled=f),f}),a(60),n(61,"translate"),i()(),e(62,"div",22)(63,"h2",23),a(64),n(65,"translate"),i(),e(66,"mat-checkbox",24),Y("ngModelChange",function(f){return H(m.checked,f)||(m.checked=f),f})("indeterminateChange",function(f){return H(m.indeterminate,f)||(m.indeterminate=f),f}),a(67),n(68,"translate"),i()()(),e(69,"div",13)(70,"pre"),a(71,"          "),o(72,"code",14),a(73,`
        `),i()(),e(74,"div",15)(75,"pre"),a(76,"          "),o(77,"code",16),a(78,`
        `),i()()(),e(79,"app-code-view",4)(80,"h4",5),a(81),n(82,"translate"),i(),e(83,"div",6)(84,"div",25)(85,"h4",26),a(86),n(87,"translate"),i(),e(88,"p")(89,"mat-checkbox",27),a(90),n(91,"translate"),i()(),e(92,"p")(93,"mat-checkbox",28),a(94),n(95,"translate"),i()(),e(96,"p")(97,"mat-checkbox",29),a(98),n(99,"translate"),i()()(),e(100,"div",30)(101,"h2",23),a(102),n(103,"translate"),i(),a(104),n(105,"json"),i()(),e(106,"div",13)(107,"pre"),a(108,"          "),o(109,"code",14),a(110,`
        `),i()(),e(111,"div",15)(112,"pre"),a(113,"          "),o(114,"code",16),a(115,`
        `),i()()()()()),u&2&&(t(3),p(l(4,43,"FORMS.radioCheckbox.checkboxTitle")),t(3),r("isTitle",!0),t(2),d(" ",l(9,45,"FORMS.radioCheckbox.basicTitle")," "),t(5),p(l(14,47,"FORMS.radioCheckbox.checkMe")),t(2),r("disabled",!0),t(),p(l(17,49,"FORMS.radioCheckbox.disabled")),t(4),r("checked",m.task().completed)("indeterminate",m.partiallyComplete()),t(),d(" ",m.task().name," "),t(3),P(m.task().subtasks),t(5),r("highlight",m.codeForBasicCheckbox),t(5),r("highlightAuto",m.codeForBasicCheckboxTs),t(2),r("isTitle",!0),t(2),d(" ",l(39,51,"FORMS.radioCheckbox.configuration")," "),t(5),p(l(44,53,"FORMS.radioCheckbox.align")),t(2),V("ngModel",m.labelPosition),t(2),p(l(48,55,"FORMS.radioCheckbox.after")),t(3),p(l(51,57,"FORMS.radioCheckbox.before")),t(3),V("ngModel",m.checked),t(),p(l(55,59,"FORMS.radioCheckbox.checked")),t(2),V("ngModel",m.indeterminate),t(),p(l(58,61,"FORMS.radioCheckbox.indeterminate")),t(2),V("ngModel",m.disabled),t(),p(l(61,63,"FORMS.radioCheckbox.disabled")),t(4),p(l(65,65,"FORMS.radioCheckbox.result")),t(2),V("ngModel",m.checked)("indeterminate",m.indeterminate),r("labelPosition",m.labelPosition)("disabled",m.disabled),t(),d(" ",l(68,67,"FORMS.radioCheckbox.imACheckbox")," "),t(5),r("highlight",m.codeForConfigurableCheckbox),t(5),r("highlightAuto",m.codeForConfigurableCheckboxTs),t(2),r("isTitle",!0),t(2),d(" ",l(82,69,"FORMS.radioCheckbox.reactiveForm")," "),t(3),r("formGroup",m.toppings),t(2),p(l(87,71,"FORMS.radioCheckbox.selectToppings")),t(4),p(l(91,73,"FORMS.radioCheckbox.pepperoni")),t(4),p(l(95,75,"FORMS.radioCheckbox.extraCheese")),t(4),p(l(99,77,"FORMS.radioCheckbox.mushroom")),t(2),r("formGroup",m.toppings),t(2),p(l(103,79,"FORMS.radioCheckbox.youChose")),t(2),d(" ",l(105,81,m.toppings.value)," "),t(5),r("highlight",m.codeForReactiveFormCheckbox),t(5),r("highlightAuto",m.codeForReactiveFormCheckboxTs))},dependencies:[F,Te,X,Z,k,w,j,R,O,J,Ee,N,oe,le,xe,T,C,y,_,I,We],encapsulation:2})}}return s})();var Ji=`  import {Component} from '@angular/core';
    import {MatRadioModule} from '@angular/material/radio';

    /**
     * @title Basic radios
     */
    @Component({
        selector: 'app-radio',
        imports: [MatRadioModule],
        templateUrl: './radio.component.html'
    })
    export class AppRadioComponent {
        constructor() {}
    }
`,Xi=`  import {Component} from '@angular/core';
    import {FormsModule} from '@angular/forms';
    import {MatRadioModule} from '@angular/material/radio';

    /**
     * @title Radios with ngModel
     */
    @Component({
        selector: 'app-radio',
        imports: [MatRadioModule, FormsModule],
        templateUrl: './radio.component.html'
    })
    export class AppRadioComponent {
        constructor() {}

        favoriteSeason: string;
        seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
`;var Zi=`  <mat-radio-group aria-label="Select an option">
          <mat-radio-button value="1" color="primary">Option 1</mat-radio-button>
          <mat-radio-button value="2" color="primary">Option 2</mat-radio-button>
        </mat-radio-group>
`,Qi=`  <label id="example-radio-group-label" class="f-w-600 d-block f-s-14">Pick your favorite season</label>
        <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group"
          [(ngModel)]="favoriteSeason">
          @for(season of seasons; track season) {
          <mat-radio-button class="example-radio-button" color="primary" [value]="season">
            {{ season }}
          </mat-radio-button>
          }
        </mat-radio-group>
        <div class="p-24 rounded bg-light m-t-16">
          <div class="f-w-600 f-s-14">
            Your favorite season is: {{ favoriteSeason }}
          </div>
        </div>
`;function xn(s,x){if(s&1&&(e(0,"mat-radio-button",16),a(1),i()),s&2){let c=x.$implicit;r("value",c),t(),d(" ",c," ")}}var $i=(()=>{class s{constructor(){this.codeForBasicRadio=Zi,this.codeForBasicRadioTs=Ji,this.codeForngModelRadio=Qi,this.codeForngModelRadioTs=Xi,this.seasons=["Winter","Spring","Summer","Autumn"]}static{this.\u0275fac=function(u){return new(u||s)}}static{this.\u0275cmp=E({type:s,selectors:[["app-radio"]],decls:52,vars:26,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["aria-label","Select an option"],["value","1","color","primary"],["value","2","color","primary"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["id","example-radio-group-label",1,"f-w-600","d-block","f-s-14"],["aria-labelledby","example-radio-group-label",1,"example-radio-group",3,"ngModelChange","ngModel"],["color","primary",1,"example-radio-button",3,"value"],[1,"p-24","rounded","bg-light","m-t-16"],[1,"f-w-600","f-s-14"]],template:function(u,m){u&1&&(e(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),a(3),n(4,"translate"),i()(),e(5,"mat-card-content",3)(6,"app-code-view",4)(7,"h4",5),a(8),n(9,"translate"),i(),e(10,"div",6)(11,"mat-radio-group",7)(12,"mat-radio-button",8),a(13),n(14,"translate"),i(),e(15,"mat-radio-button",9),a(16),n(17,"translate"),i()()(),e(18,"div",10)(19,"pre"),a(20,"          "),o(21,"code",11),a(22,`
        `),i()(),e(23,"div",12)(24,"pre"),a(25,"          "),o(26,"code",13),a(27,`
        `),i()()(),e(28,"app-code-view",4)(29,"h4",5),a(30," ngModel "),i(),e(31,"div",6)(32,"label",14),a(33),n(34,"translate"),i(),e(35,"mat-radio-group",15),Y("ngModelChange",function(f){return H(m.favoriteSeason,f)||(m.favoriteSeason=f),f}),D(36,xn,2,2,"mat-radio-button",16,z),i(),e(38,"div",17)(39,"div",18),a(40),n(41,"translate"),i()()(),e(42,"div",10)(43,"pre"),a(44,"          "),o(45,"code",11),a(46,`
        `),i()(),e(47,"div",12)(48,"pre"),a(49,"          "),o(50,"code",13),a(51,`
        `),i()()()()()),u&2&&(t(3),p(l(4,14,"FORMS.radioCheckbox.radioTitle")),t(3),r("isTitle",!0),t(2),d(" ",l(9,16,"FORMS.radioCheckbox.basicTitle")," "),t(5),p(l(14,18,"FORMS.radioCheckbox.option1")),t(3),p(l(17,20,"FORMS.radioCheckbox.option2")),t(5),r("highlight",m.codeForBasicRadio),t(5),r("highlightAuto",m.codeForBasicRadioTs),t(2),r("isTitle",!0),t(5),p(l(34,22,"FORMS.radioCheckbox.pickFavSeason")),t(2),V("ngModel",m.favoriteSeason),t(),P(m.seasons),t(4),Se(" ",l(41,24,"FORMS.radioCheckbox.favSeasonIs")," ",m.favoriteSeason," "),t(5),r("highlight",m.codeForngModelRadio),t(5),r("highlightAuto",m.codeForngModelRadioTs))},dependencies:[F,X,Z,k,w,j,R,O,Ee,N,T,C,y,_,I],encapsulation:2})}}return s})();var st=`  import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {provideNativeDateAdapter} from '@angular/material/core';

    /**
     * @title Basic datepicker */
     */
    @Component({
        selector: 'app-datepicker',
        imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
        templateUrl: './datepicker.component.html',
        styleUrls: ['datepicker.component.scss'],
    })
    export class AppDatepickerComponent {
        constructor() {}
    }
`,ea=`  import {ChangeDetectionStrategy, Component, Injectable, inject} from '@angular/core';
    import {DateAdapter, provideNativeDateAdapter} from '@angular/material/core';
    import {
    DateRange,
    MAT_DATE_RANGE_SELECTION_STRATEGY,
    MatDateRangeSelectionStrategy,
    MatDatepickerModule,
    } from '@angular/material/datepicker';
    import {MatFormFieldModule} from '@angular/material/form-field';

    @Injectable()
    export class FiveDayRangeSelectionStrategy<D>
      implements MatDateRangeSelectionStrategy<D> {
      constructor(private _dateAdapter: DateAdapter<D>) { }
    
      selectionFinished(date: D | null): DateRange<D> {
        return this._createFiveDayRange(date);
      }
    
      createPreview(activeDate: D | null): DateRange<D> {
        return this._createFiveDayRange(activeDate);
      }
    
      private _createFiveDayRange(date: D | null): DateRange<D> {
        if (date) {
          const start = this._dateAdapter.addCalendarDays(date, -2);
          const end = this._dateAdapter.addCalendarDays(date, 2);
          return new DateRange<D>(start, end);
        }
    
        return new DateRange<D>(null, null);
      }
    }

    /**
     * @title Date range picker with a custom selection strategy */
     */
    @Component({
        selector: 'app-datepicker',
        imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
        templateUrl: './datepicker.component.html',
        styleUrls: ['datepicker.component.scss'],
        providers: [
            {
            provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
            useClass: FiveDayRangeSelectionStrategy,
            },
            provideNativeDateAdapter(),
        ],
        imports: [MatFormFieldModule, MatDatepickerModule],
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
    export class AppDatepickerComponent {
        constructor() {}
    }
`,ta=`  import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {JsonPipe} from '@angular/common';
    import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
    import {provideNativeDateAdapter} from '@angular/material/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatFormFieldModule} from '@angular/material/form-field';

    /**
     * @title Date range picker forms integration */
     */
    @Component({
        selector: 'app-datepicker',
        imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe],
        templateUrl: './datepicker.component.html',
        styleUrls: ['datepicker.component.scss'],
    })
    export class AppDatepickerComponent {
        constructor() {}

        range = new FormGroup({
            start: new FormControl<Date | null>(null),
            end: new FormControl<Date | null>(null),
        });
    }
`,Be=`  import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {MatButtonModule} from '@angular/material/button';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatInputModule} from '@angular/material/input';
    import {MatIconModule} from '@angular/material/icon';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {provideNativeDateAdapter} from '@angular/material/core';

    /**
     * @title Datepicker action buttons */
     */
    @Component({
        selector: 'app-datepicker',
        imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, MatIconModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [provideNativeDateAdapter()],
        templateUrl: './datepicker.component.html',
        styleUrls: ['datepicker.component.scss'],
    })
    export class AppDatepickerComponent {
        constructor() {}
    }
`,ia=`  import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
    import {provideNativeDateAdapter} from '@angular/material/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatFormFieldModule} from '@angular/material/form-field';

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    /**
     * @title Datepicker action buttons */
     */
    @Component({
        selector: 'app-datepicker',
        providers: [provideNativeDateAdapter()],
        imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './datepicker.component.html',
        styleUrls: ['datepicker.component.scss'],
    })
    export class AppDatepickerComponent {
        constructor() {}

        campaignOne = new FormGroup({
            start: new FormControl(new Date(year, month, 13)),
            end: new FormControl(new Date(year, month, 16)),
          });
          campaignTwo = new FormGroup({
            start: new FormControl(new Date(year, month, 15)),
            end: new FormControl(new Date(year, month, 19)),
        });
    }
`,aa=`  import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
    import {provideNativeDateAdapter} from '@angular/material/core';
    import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {MatInputModule} from '@angular/material/input';

    /**
     * @title Datepicker with custom date classes */
     */
    @Component({
        selector: 'app-datepicker',
        encapsulation: ViewEncapsulation.None,
        providers: [provideNativeDateAdapter()],
        imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './datepicker.component.html',
        styleUrls: ['datepicker.component.scss'],
    })
    export class AppDatepickerComponent {
        constructor() {}

        dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
            // Only highligh dates inside the month view.
            if (view === 'month') {
              const date = cellDate.getDate();
        
              // Highlight the 1st and 20th day of each month.
              return date === 1 || date === 20 ? 'example-custom-date-class' : '';
            }
        
            return '';
        };
    }
`,na=`  import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
    import {provideNativeDateAdapter} from '@angular/material/core';
    import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {MatInputModule} from '@angular/material/input';

    /**
     * @title Datepicker input and change events */
     */
    @Component({
        selector: 'app-datepicker',
        providers: [provideNativeDateAdapter()],
        imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './datepicker.component.html',
        styleUrls: ['datepicker.component.scss'],
    })
    export class AppDatepickerComponent {
        constructor() {}

        events: string[] = [];
        
          addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
            this.events.push('{type}: {event.value}');
        }
    }
`,la=`  import {ChangeDetectionStrategy, Component, model} from '@angular/core';
    import {MatCardModule} from '@angular/material/card';
    import {provideNativeDateAdapter} from '@angular/material/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';

    /**
     * @title Datepicker inline calendar example */
     */
    @Component({
        selector: 'app-datepicker',
        providers: [provideNativeDateAdapter()],
        imports: [MatCardModule, MatDatepickerModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './datepicker.component.html',
        styleUrls: ['datepicker.component.scss'],
    })
    export class AppDatepickerComponent {
        constructor() {}

        selected: Date | null;
    }
`,oa=`  import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {provideNativeDateAdapter} from '@angular/material/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {MatInputModule} from '@angular/material/input';

    /**
     * @title Datepicker start date */
     */
    @Component({
        selector: 'app-datepicker',
        providers: [provideNativeDateAdapter()],
        imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './datepicker.component.html',
        styleUrls: ['datepicker.component.scss'],
    })
    export class AppDatepickerComponent {
        constructor() {}

        startDate = new Date(1990, 0, 1);
    }
`;var ra=`  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="picker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>
`,ma=`  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Enter a date range</mat-label>
              <mat-date-range-input [rangePicker]="custompicker">
                <input matStartDate placeholder="Start date" />
                <input matEndDate placeholder="End date" />
              </mat-date-range-input>
              <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="custompicker"></mat-datepicker-toggle>
              <mat-date-range-picker #custompicker></mat-date-range-picker>
            </mat-form-field>
`,pa=`  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Enter a date range</mat-label>
              <mat-date-range-input [formGroup]="range" [rangePicker]="formpicker">
                <input matStartDate formControlName="start" placeholder="Start date" />
                <input matEndDate formControlName="end" placeholder="End date" />
              </mat-date-range-input>
              <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="formpicker"></mat-datepicker-toggle>
              <mat-date-range-picker #formpicker></mat-date-range-picker>
              @if(range.controls.start.hasError('matStartDateInvalid')) {
              <mat-error>Invalid start date</mat-error>
              } @if(range.controls.end.hasError('matEndDateInvalid')) {
              <mat-error>Invalid end date</mat-error>
              }
            </mat-form-field>
            <div class="p-24 rounded bg-light m-t-16">
              <p class="f-s-14 f-w-600">
                Selected range: {{ range.value | json }}
              </p>
            </div>
`,da=`  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="datepicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="datepicker"></mat-datepicker-toggle>
              <mat-datepicker #datepicker>
                <mat-datepicker-actions>
                  <button mat-button matDatepickerCancel>Cancel</button>
                  <button mat-raised-button color="primary" matDatepickerApply>
                    Apply
                  </button>
                </mat-datepicker-actions>
              </mat-datepicker>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Enter a date range</mat-label>
              <mat-date-range-input [rangePicker]="rangePicker">
                <input matStartDate placeholder="Start date" />
                <input matEndDate placeholder="End date" />
              </mat-date-range-input>
              <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="rangePicker"></mat-datepicker-toggle>
              <mat-date-range-picker #rangePicker>
                <mat-date-range-picker-actions>
                  <button mat-button matDateRangePickerCancel>Cancel</button>
                  <button mat-raised-button color="primary" matDateRangePickerApply>
                    Apply
                  </button>
                </mat-date-range-picker-actions>
              </mat-date-range-picker>
            </mat-form-field>
`,sa=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>First campaign</mat-label>
              <mat-date-range-input [formGroup]="campaignOne" [rangePicker]="campaignOnePicker"
                [comparisonStart]="campaignTwo.value.start" [comparisonEnd]="campaignTwo.value.end">
                <input matStartDate placeholder="Start date" formControlName="start" />
                <input matEndDate placeholder="End date" formControlName="end" />
              </mat-date-range-input>
              <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="campaignOnePicker"></mat-datepicker-toggle>
              <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>
            </mat-form-field>

            <mat-form-field class="w-100 m-t-20" appearance="outline">
              <mat-label>Second campaign</mat-label>
              <mat-date-range-input [formGroup]="campaignTwo" [rangePicker]="campaignTwoPicker"
                [comparisonStart]="campaignOne.value.start" [comparisonEnd]="campaignOne.value.end">
                <input matStartDate placeholder="Start date" formControlName="start" />
                <input matEndDate placeholder="End date" formControlName="end" />
              </mat-date-range-input>
              <mat-datepicker-toggle matIconSuffix [for]="campaignTwoPicker"></mat-datepicker-toggle>
              <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>
              <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>
            </mat-form-field>
`,ca=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="openpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker #openpicker></mat-datepicker>
            </mat-form-field>
            <button mat-flat-button color="primary" (click)="openpicker.open()">
              Open
            </button>
`,ua=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="iconpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="iconpicker">
                <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>
              </mat-datepicker-toggle>
              <mat-datepicker #iconpicker></mat-datepicker>
            </mat-form-field>
`,fa=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="customdatepicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="customdatepicker"></mat-datepicker-toggle>
              <mat-datepicker [dateClass]="dateClass" #customdatepicker></mat-datepicker>
            </mat-form-field>
`,ba=`  <mat-form-field color="accent" appearance="outline" class="w-100">
              <mat-label>Inherited calendar color</mat-label>
              <input matInput [matDatepicker]="picker1" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="picker1"></mat-datepicker-toggle>
              <mat-datepicker #picker1></mat-datepicker>
            </mat-form-field>

            <mat-form-field color="accent" appearance="outline" class="w-100 m-t-20">
              <mat-label>Custom calendar color</mat-label>
              <input matInput [matDatepicker]="picker2" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="picker2"></mat-datepicker-toggle>
              <mat-datepicker #picker2 color="primary"></mat-datepicker>
            </mat-form-field>
`,va=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Input & change events</mat-label>
              <input matInput [matDatepicker]="eventpicker" (dateInput)="addEvent('input', $event)"
                (dateChange)="addEvent('change', $event)" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="eventpicker"></mat-datepicker-toggle>
              <mat-datepicker #eventpicker></mat-datepicker>
            </mat-form-field>

            <div class="bg-light rounded p-24 m-t-16">
              <h2 class="f-s-16 f-w-600 m-b-16">Logs:</h2>
              @for(e of events; track e) {
              <div>{{ e }}</div>
              }
            </div>
`,ha=`  <p>
              <mat-form-field class="w-100" appearance="outline">
                <mat-label>Completely disabled</mat-label>
                <input matInput [matDatepicker]="dp1" disabled />
                <mat-hint>MM/DD/YYYY</mat-hint>
                <mat-datepicker-toggle matIconSuffix [for]="dp1"></mat-datepicker-toggle>
                <mat-datepicker #dp1></mat-datepicker>
              </mat-form-field>
            </p>

            <p>
              <mat-form-field class="w-100" appearance="outline">
                <mat-label>Popup disabled</mat-label>
                <input matInput [matDatepicker]="dp2" />
                <mat-hint>MM/DD/YYYY</mat-hint>
                <mat-datepicker-toggle matIconSuffix [for]="dp2" disabled></mat-datepicker-toggle>
                <mat-datepicker #dp2></mat-datepicker>
              </mat-form-field>
            </p>

            <p>
              <mat-form-field class="w-100" appearance="outline">
                <mat-label>Input disabled</mat-label>
                <input matInput [matDatepicker]="dp3" disabled />
                <mat-hint>MM/DD/YYYY</mat-hint>
                <mat-datepicker-toggle matIconSuffix [for]="dp3"></mat-datepicker-toggle>
                <mat-datepicker #dp3 disabled="false"></mat-datepicker>
              </mat-form-field>
            </p>
`,Sa=`  <mat-card class="demo-inline-calendar-card cardWithShadow">
              <mat-calendar [(selected)]="selected"></mat-calendar>
            </mat-card>
            <p class="f-s-14 f-w-600 m-t-16">
              Selected date: {{ selected }}
            </p>
`,ga=`  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="startpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="startpicker"></mat-datepicker-toggle>
              <mat-datepicker #startpicker startView="year" [startAt]="startDate"></mat-datepicker>
            </mat-form-field>
`,xa=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="touchpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="touchpicker"></mat-datepicker-toggle>
              <mat-datepicker touchUi #touchpicker></mat-datepicker>
            </mat-form-field>
`;function Mn(s,x){s&1&&(e(0,"mat-error"),a(1),n(2,"translate"),i()),s&2&&(t(),p(l(2,1,"FORMS.datepicker.invalidStartDate")))}function En(s,x){s&1&&(e(0,"mat-error"),a(1),n(2,"translate"),i()),s&2&&(t(),p(l(2,1,"FORMS.datepicker.invalidEndDate")))}function In(s,x){if(s&1&&(e(0,"div"),a(1),i()),s&2){let c=x.$implicit;t(),p(c)}}var Ma=new Date,ot=Ma.getMonth(),rt=Ma.getFullYear(),Fn=(()=>{class s{constructor(c){this._dateAdapter=c}selectionFinished(c){return this._createFiveDayRange(c)}createPreview(c){return this._createFiveDayRange(c)}_createFiveDayRange(c){if(c){let u=this._dateAdapter.addCalendarDays(c,-2),m=this._dateAdapter.addCalendarDays(c,2);return new mt(u,m)}return new mt(null,null)}static{this.\u0275fac=function(u){return new(u||s)(Bt(Ut))}}static{this.\u0275prov=Rt({token:s,factory:s.\u0275fac})}}return s})(),Ea=(()=>{class s{addEvent(c,u){this.events.push(`${c}: ${u.value}`)}constructor(){this.codeForBasicDatepicker=ra,this.codeForBasicDatepickerTs=st,this.codeForCustomSelectionDatepicker=ma,this.codeForCustomSelectionDatepickerTs=ea,this.codeForFormsIntegrationDatepicker=pa,this.codeForFormsIntegrationDatepickerTs=ta,this.codeForActionButtonsDatepicker=da,this.codeForActionButtonsDatepickerTs=Be,this.codeForDateRangePickerDatepicker=sa,this.codeForDateRangePickerDatepickerTs=ia,this.codeForOpenMethodDatepicker=ca,this.codeForOpenMethodDatepickerTs=Be,this.codeForCustomIconDatepicker=ua,this.codeForCustomIconDatepickerTs=Be,this.codeForCustomDateClassesDatepicker=fa,this.codeForCustomDateClassesDatepickerTs=aa,this.codeForPalleteColorsDatepicker=ba,this.codeForPalleteColorsDatepickerTs=Be,this.codeForChangeEventsDatepicker=va,this.codeForChangeEventsDatepickerTs=na,this.codeForDisabledDatepicker=ha,this.codeForDisabledDatepickerTs=st,this.codeForInlineDatepicker=Sa,this.codeForInlineDatepickerTs=la,this.codeForStartDateDatepicker=ga,this.codeForStartDateDatepickerTs=oa,this.codeForTouchUIDatepicker=xa,this.codeForTouchUIDatepickerTs=Be,this.startDate=new Date(1990,0,1),this.campaignOne=new je({start:new B(new Date(rt,ot,13)),end:new B(new Date(rt,ot,16))}),this.campaignTwo=new je({start:new B(new Date(rt,ot,15)),end:new B(new Date(rt,ot,19))}),this.range=new je({start:new B(null),end:new B(null)}),this.dateClass=(c,u)=>{if(u==="month"){let m=c.getDate();return m===1||m===20?"example-custom-date-class":""}return""},this.events=[]}static{this.\u0275fac=function(u){return new(u||s)}}static{this.\u0275cmp=E({type:s,selectors:[["app-datepicker"]],features:[q([ue(),{provide:zt,useClass:Fn}])],decls:460,vars:216,consts:[["picker",""],["custompicker",""],["formpicker",""],["datepicker",""],["rangePicker",""],["campaignOnePicker",""],["campaignTwoPicker",""],["openpicker",""],["iconpicker",""],["customdatepicker",""],["picker1",""],["picker2",""],["eventpicker",""],["dp1",""],["dp2",""],["dp3",""],["startpicker",""],["touchpicker",""],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["appearance","outline",1,"w-100"],["matInput","",3,"matDatepicker"],["matIconSuffix","",3,"for"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[3,"rangePicker"],["matStartDate","",3,"placeholder"],["matEndDate","",3,"placeholder"],[3,"formGroup","rangePicker"],["matStartDate","","formControlName","start",3,"placeholder"],["matEndDate","","formControlName","end",3,"placeholder"],[1,"p-24","rounded","bg-light","m-t-16"],[1,"f-s-14","f-w-600"],["mat-button","","matDatepickerCancel",""],["mat-raised-button","","color","primary","matDatepickerApply",""],["mat-button","","matDateRangePickerCancel",""],["mat-raised-button","","color","primary","matDateRangePickerApply",""],[3,"formGroup","rangePicker","comparisonStart","comparisonEnd"],["appearance","outline",1,"w-100","m-t-20"],["mat-flat-button","","color","primary",3,"click"],["matDatepickerToggleIcon",""],[3,"dateClass"],["color","accent","appearance","outline",1,"w-100"],["color","accent","appearance","outline",1,"w-100","m-t-20"],["color","primary"],["matInput","",3,"dateInput","dateChange","matDatepicker"],[1,"bg-light","rounded","p-24","m-t-16"],[1,"f-s-16","f-w-600","m-b-16"],["matInput","","disabled","",3,"matDatepicker"],["matIconSuffix","","disabled","",3,"for"],["disabled","false"],[1,"demo-inline-calendar-card","cardWithShadow"],[3,"selectedChange","selected"],[1,"f-s-14","f-w-600","m-t-16"],["startView","year",3,"startAt"],["touchUi",""]],template:function(u,m){if(u&1){let b=A();e(0,"mat-card",18)(1,"div",19)(2,"mat-card-title",20),a(3),n(4,"translate"),i()(),e(5,"mat-card-content",21)(6,"div",22)(7,"div",23)(8,"app-code-view",24)(9,"h4",25),a(10),n(11,"translate"),i(),e(12,"div",26)(13,"mat-form-field",27)(14,"mat-label"),a(15),n(16,"translate"),i(),o(17,"input",28),e(18,"mat-hint"),a(19,"MM/DD/YYYY"),i(),o(20,"mat-datepicker-toggle",29)(21,"mat-datepicker",null,0),i()(),e(23,"div",30)(24,"pre"),a(25,"              "),o(26,"code",31),a(27,`
            `),i()(),e(28,"div",32)(29,"pre"),a(30,"              "),o(31,"code",33),a(32,`
            `),i()()()(),e(33,"div",23)(34,"app-code-view",24)(35,"h4",25),a(36),n(37,"translate"),i(),e(38,"div",26)(39,"mat-form-field",27)(40,"mat-label"),a(41),n(42,"translate"),i(),e(43,"mat-date-range-input",34),o(44,"input",35),n(45,"translate"),o(46,"input",36),n(47,"translate"),i(),e(48,"mat-hint"),a(49,"MM/DD/YYYY \u2013 MM/DD/YYYY"),i(),o(50,"mat-datepicker-toggle",29)(51,"mat-date-range-picker",null,1),i()(),e(53,"div",30)(54,"pre"),a(55,"              "),o(56,"code",31),a(57,`
            `),i()(),e(58,"div",32)(59,"pre"),a(60,"              "),o(61,"code",33),a(62,`
            `),i()()()(),e(63,"div",23)(64,"app-code-view",24)(65,"h4",25),a(66),n(67,"translate"),i(),e(68,"div",26)(69,"mat-form-field",27)(70,"mat-label"),a(71),n(72,"translate"),i(),e(73,"mat-date-range-input",37),o(74,"input",38),n(75,"translate"),o(76,"input",39),n(77,"translate"),i(),e(78,"mat-hint"),a(79,"MM/DD/YYYY \u2013 MM/DD/YYYY"),i(),o(80,"mat-datepicker-toggle",29)(81,"mat-date-range-picker",null,2),Ae(83,Mn,3,3,"mat-error"),Ae(84,En,3,3,"mat-error"),i(),e(85,"div",40)(86,"p",41),a(87),n(88,"translate"),n(89,"json"),i()()(),e(90,"div",30)(91,"pre"),a(92,"              "),o(93,"code",31),a(94,`
            `),i()(),e(95,"div",32)(96,"pre"),a(97,"              "),o(98,"code",33),a(99,`
            `),i()()()(),e(100,"div",23)(101,"app-code-view",24)(102,"h4",25),a(103),n(104,"translate"),i(),e(105,"div",26)(106,"mat-form-field",27)(107,"mat-label"),a(108),n(109,"translate"),i(),o(110,"input",28),e(111,"mat-hint"),a(112,"MM/DD/YYYY"),i(),o(113,"mat-datepicker-toggle",29),e(114,"mat-datepicker",null,3)(116,"mat-datepicker-actions")(117,"button",42),a(118),n(119,"translate"),i(),e(120,"button",43),a(121),n(122,"translate"),i()()()(),e(123,"mat-form-field",27)(124,"mat-label"),a(125),n(126,"translate"),i(),e(127,"mat-date-range-input",34),o(128,"input",35),n(129,"translate"),o(130,"input",36),n(131,"translate"),i(),e(132,"mat-hint"),a(133,"MM/DD/YYYY \u2013 MM/DD/YYYY"),i(),o(134,"mat-datepicker-toggle",29),e(135,"mat-date-range-picker",null,4)(137,"mat-date-range-picker-actions")(138,"button",44),a(139),n(140,"translate"),i(),e(141,"button",45),a(142),n(143,"translate"),i()()()()(),e(144,"div",30)(145,"pre"),a(146,"              "),o(147,"code",31),a(148,`
            `),i()(),e(149,"div",32)(150,"pre"),a(151,"              "),o(152,"code",33),a(153,`
            `),i()()()(),e(154,"div",23)(155,"app-code-view",24)(156,"h4",25),a(157),n(158,"translate"),i(),e(159,"div",26)(160,"mat-form-field",27)(161,"mat-label"),a(162),n(163,"translate"),i(),e(164,"mat-date-range-input",46),o(165,"input",38),n(166,"translate"),o(167,"input",39),n(168,"translate"),i(),e(169,"mat-hint"),a(170,"MM/DD/YYYY \u2013 MM/DD/YYYY"),i(),o(171,"mat-datepicker-toggle",29)(172,"mat-date-range-picker",null,5),i(),e(174,"mat-form-field",47)(175,"mat-label"),a(176),n(177,"translate"),i(),e(178,"mat-date-range-input",46),o(179,"input",38),n(180,"translate"),o(181,"input",39),n(182,"translate"),i(),o(183,"mat-datepicker-toggle",29),e(184,"mat-hint"),a(185,"MM/DD/YYYY \u2013 MM/DD/YYYY"),i(),o(186,"mat-date-range-picker",null,6),i()(),e(188,"div",30)(189,"pre"),a(190,"              "),o(191,"code",31),a(192,`
            `),i()(),e(193,"div",32)(194,"pre"),a(195,"              "),o(196,"code",33),a(197,`
            `),i()()()(),e(198,"div",23)(199,"app-code-view",24)(200,"h4",25),a(201," Open Method "),i(),e(202,"div",26)(203,"mat-form-field",27)(204,"mat-label"),a(205),n(206,"translate"),i(),o(207,"input",28),e(208,"mat-hint"),a(209,"MM/DD/YYYY"),i(),o(210,"mat-datepicker",null,7),i(),e(212,"button",48),S("click",function(){v(b);let M=g(211);return h(M.open())}),a(213),n(214,"translate"),i()(),e(215,"div",30)(216,"pre"),a(217,"              "),o(218,"code",31),a(219,`
            `),i()(),e(220,"div",32)(221,"pre"),a(222,"              "),o(223,"code",33),a(224,`
            `),i()()()(),e(225,"div",23)(226,"app-code-view",24)(227,"h4",25),a(228," Custom Icon "),i(),e(229,"div",26)(230,"mat-form-field",27)(231,"mat-label"),a(232),n(233,"translate"),i(),o(234,"input",28),e(235,"mat-hint"),a(236,"MM/DD/YYYY"),i(),e(237,"mat-datepicker-toggle",29)(238,"mat-icon",49),a(239,"keyboard_arrow_down"),i()(),o(240,"mat-datepicker",null,8),i()(),e(242,"div",30)(243,"pre"),a(244,"              "),o(245,"code",31),a(246,`
            `),i()(),e(247,"div",32)(248,"pre"),a(249,"              "),o(250,"code",33),a(251,`
            `),i()()()(),e(252,"div",23)(253,"app-code-view",24)(254,"h4",25),a(255," Custom Date Classes "),i(),e(256,"div",26)(257,"mat-form-field",27)(258,"mat-label"),a(259),n(260,"translate"),i(),o(261,"input",28),e(262,"mat-hint"),a(263,"MM/DD/YYYY"),i(),o(264,"mat-datepicker-toggle",29)(265,"mat-datepicker",50,9),i()(),e(267,"div",30)(268,"pre"),a(269,"              "),o(270,"code",31),a(271,`
            `),i()(),e(272,"div",32)(273,"pre"),a(274,"              "),o(275,"code",33),a(276,`
            `),i()()()(),e(277,"div",23)(278,"app-code-view",24)(279,"h4",25),a(280," Pallete Colors "),i(),e(281,"div",26)(282,"mat-form-field",51)(283,"mat-label"),a(284),n(285,"translate"),i(),o(286,"input",28),e(287,"mat-hint"),a(288,"MM/DD/YYYY"),i(),o(289,"mat-datepicker-toggle",29)(290,"mat-datepicker",null,10),i(),e(292,"mat-form-field",52)(293,"mat-label"),a(294),n(295,"translate"),i(),o(296,"input",28),e(297,"mat-hint"),a(298,"MM/DD/YYYY"),i(),o(299,"mat-datepicker-toggle",29)(300,"mat-datepicker",53,11),i()(),e(302,"div",30)(303,"pre"),a(304,"              "),o(305,"code",31),a(306,`
            `),i()(),e(307,"div",32)(308,"pre"),a(309,"              "),o(310,"code",33),a(311,`
            `),i()()()(),e(312,"div",23)(313,"app-code-view",24)(314,"h4",25),a(315," Change Events "),i(),e(316,"div",26)(317,"mat-form-field",27)(318,"mat-label"),a(319),n(320,"translate"),i(),e(321,"input",54),S("dateInput",function(M){return v(b),h(m.addEvent("input",M))})("dateChange",function(M){return v(b),h(m.addEvent("change",M))}),i(),e(322,"mat-hint"),a(323,"MM/DD/YYYY"),i(),o(324,"mat-datepicker-toggle",29)(325,"mat-datepicker",null,12),i(),e(327,"div",55)(328,"h2",56),a(329),n(330,"translate"),i(),D(331,In,2,1,"div",null,z),i()(),e(333,"div",30)(334,"pre"),a(335,"              "),o(336,"code",31),a(337,`
            `),i()(),e(338,"div",32)(339,"pre"),a(340,"              "),o(341,"code",33),a(342,`
            `),i()()()(),e(343,"div",23)(344,"app-code-view",24)(345,"h4",25),a(346," Disabled "),i(),e(347,"div",26)(348,"p")(349,"mat-form-field",27)(350,"mat-label"),a(351),n(352,"translate"),i(),o(353,"input",57),e(354,"mat-hint"),a(355,"MM/DD/YYYY"),i(),o(356,"mat-datepicker-toggle",29)(357,"mat-datepicker",null,13),i()(),e(359,"p")(360,"mat-form-field",27)(361,"mat-label"),a(362),n(363,"translate"),i(),o(364,"input",28),e(365,"mat-hint"),a(366,"MM/DD/YYYY"),i(),o(367,"mat-datepicker-toggle",58)(368,"mat-datepicker",null,14),i()(),e(370,"p")(371,"mat-form-field",27)(372,"mat-label"),a(373),n(374,"translate"),i(),o(375,"input",57),e(376,"mat-hint"),a(377,"MM/DD/YYYY"),i(),o(378,"mat-datepicker-toggle",29)(379,"mat-datepicker",59,15),i()()(),e(381,"div",30)(382,"pre"),a(383,"              "),o(384,"code",31),a(385,`
            `),i()(),e(386,"div",32)(387,"pre"),a(388,"              "),o(389,"code",33),a(390,`
            `),i()()()(),e(391,"div",23)(392,"app-code-view",24)(393,"h4",25),a(394," Inline "),i(),e(395,"div",26)(396,"mat-card",60)(397,"mat-calendar",61),Y("selectedChange",function(M){return v(b),H(m.selected,M)||(m.selected=M),h(M)}),i()(),e(398,"p",62),a(399),i()(),e(400,"div",30)(401,"pre"),a(402,"              "),o(403,"code",31),a(404,`
            `),i()(),e(405,"div",32)(406,"pre"),a(407,"              "),o(408,"code",33),a(409,`
            `),i()()()(),e(410,"div",23)(411,"app-code-view",24)(412,"h4",25),a(413," Start Date "),i(),e(414,"div",26)(415,"mat-form-field",27)(416,"mat-label"),a(417),n(418,"translate"),i(),o(419,"input",28),e(420,"mat-hint"),a(421,"MM/DD/YYYY"),i(),o(422,"mat-datepicker-toggle",29)(423,"mat-datepicker",63,16),i()(),e(425,"div",30)(426,"pre"),a(427,"              "),o(428,"code",31),a(429,`
            `),i()(),e(430,"div",32)(431,"pre"),a(432,"              "),o(433,"code",33),a(434,`
            `),i()()()(),e(435,"div",23)(436,"app-code-view",24)(437,"h4",25),a(438," Touch Ui "),i(),e(439,"div",26)(440,"mat-form-field",27)(441,"mat-label"),a(442),n(443,"translate"),i(),o(444,"input",28),e(445,"mat-hint"),a(446,"MM/DD/YYYY"),i(),o(447,"mat-datepicker-toggle",29)(448,"mat-datepicker",64,17),i()(),e(450,"div",30)(451,"pre"),a(452,"              "),o(453,"code",31),a(454,`
            `),i()(),e(455,"div",32)(456,"pre"),a(457,"              "),o(458,"code",33),a(459,`
            `),i()()()()()()()}if(u&2){let b=g(22),f=g(52),M=g(82),Ye=g(115),ht=g(136),St=g(173),gt=g(187),sn=g(211),xt=g(241),Mt=g(266),Et=g(291),It=g(301),Ft=g(326),kt=g(358),wt=g(369),_t=g(380),Tt=g(424),Ct=g(449);t(3),p(l(4,132,"FORMS.datepicker.title")),t(5),r("isTitle",!0),t(2),d(" ",l(11,134,"FORMS.datepicker.basic")," "),t(5),p(l(16,136,"FORMS.datepicker.chooseDate")),t(2),r("matDatepicker",b),t(3),r("for",b),t(6),r("highlight",m.codeForBasicDatepicker),t(5),r("highlightAuto",m.codeForBasicDatepickerTs),t(3),r("isTitle",!0),t(2),d(" ",l(37,138,"FORMS.datepicker.customSelection")," "),t(5),p(l(42,140,"FORMS.datepicker.enterDateRange")),t(2),r("rangePicker",f),t(),r("placeholder",l(45,142,"FORMS.datepicker.startDate")),t(2),r("placeholder",l(47,144,"FORMS.datepicker.endDate")),t(4),r("for",f),t(6),r("highlight",m.codeForCustomSelectionDatepicker),t(5),r("highlightAuto",m.codeForCustomSelectionDatepickerTs),t(3),r("isTitle",!0),t(2),d(" ",l(67,146,"FORMS.datepicker.formsIntegration")," "),t(5),p(l(72,148,"FORMS.datepicker.enterDateRange")),t(2),r("formGroup",m.range)("rangePicker",M),t(),r("placeholder",l(75,150,"FORMS.datepicker.startDate")),t(2),r("placeholder",l(77,152,"FORMS.datepicker.endDate")),t(4),r("for",M),t(3),Ne(m.range.controls.start.hasError("matStartDateInvalid")?83:-1),t(),Ne(m.range.controls.end.hasError("matEndDateInvalid")?84:-1),t(3),Se(" ",l(88,154,"FORMS.datepicker.selectedRange")," ",l(89,156,m.range.value)," "),t(6),r("highlight",m.codeForFormsIntegrationDatepicker),t(5),r("highlightAuto",m.codeForFormsIntegrationDatepickerTs),t(3),r("isTitle",!0),t(2),d(" ",l(104,158,"FORMS.datepicker.actionButtons")," "),t(5),p(l(109,160,"FORMS.datepicker.chooseDate")),t(2),r("matDatepicker",Ye),t(3),r("for",Ye),t(5),p(l(119,162,"FORMS.buttons.cancel")),t(3),d(" ",l(122,164,"FORMS.datepicker.apply")," "),t(4),p(l(126,166,"FORMS.datepicker.enterDateRange")),t(2),r("rangePicker",ht),t(),r("placeholder",l(129,168,"FORMS.datepicker.startDate")),t(2),r("placeholder",l(131,170,"FORMS.datepicker.endDate")),t(4),r("for",ht),t(5),p(l(140,172,"FORMS.buttons.cancel")),t(3),d(" ",l(143,174,"FORMS.datepicker.apply")," "),t(5),r("highlight",m.codeForActionButtonsDatepicker),t(5),r("highlightAuto",m.codeForActionButtonsDatepickerTs),t(3),r("isTitle",!0),t(2),d(" ",l(158,176,"FORMS.datepicker.dateRangePicker")," "),t(5),p(l(163,178,"FORMS.datepicker.firstCampaign")),t(2),r("formGroup",m.campaignOne)("rangePicker",St)("comparisonStart",m.campaignTwo.value.start)("comparisonEnd",m.campaignTwo.value.end),t(),r("placeholder",l(166,180,"FORMS.datepicker.startDate")),t(2),r("placeholder",l(168,182,"FORMS.datepicker.endDate")),t(4),r("for",St),t(5),p(l(177,184,"FORMS.datepicker.secondCampaign")),t(2),r("formGroup",m.campaignTwo)("rangePicker",gt)("comparisonStart",m.campaignOne.value.start)("comparisonEnd",m.campaignOne.value.end),t(),r("placeholder",l(180,186,"FORMS.datepicker.startDate")),t(2),r("placeholder",l(182,188,"FORMS.datepicker.endDate")),t(2),r("for",gt),t(8),r("highlight",m.codeForDateRangePickerDatepicker),t(5),r("highlightAuto",m.codeForDateRangePickerDatepickerTs),t(3),r("isTitle",!0),t(6),p(l(206,190,"FORMS.datepicker.chooseDate")),t(2),r("matDatepicker",sn),t(6),d("",l(214,192,"FORMS.datepicker.open")," "),t(5),r("highlight",m.codeForOpenMethodDatepicker),t(5),r("highlightAuto",m.codeForOpenMethodDatepickerTs),t(3),r("isTitle",!0),t(6),p(l(233,194,"FORMS.datepicker.chooseDate")),t(2),r("matDatepicker",xt),t(3),r("for",xt),t(8),r("highlight",m.codeForCustomIconDatepicker),t(5),r("highlightAuto",m.codeForCustomIconDatepickerTs),t(3),r("isTitle",!0),t(6),p(l(260,196,"FORMS.datepicker.chooseDate")),t(2),r("matDatepicker",Mt),t(3),r("for",Mt),t(),r("dateClass",m.dateClass),t(5),r("highlight",m.codeForCustomDateClassesDatepicker),t(5),r("highlightAuto",m.codeForCustomDateClassesDatepickerTs),t(3),r("isTitle",!0),t(6),p(l(285,198,"FORMS.datepicker.inheritedCalendarColor")),t(2),r("matDatepicker",Et),t(3),r("for",Et),t(5),p(l(295,200,"FORMS.datepicker.customCalendarColor")),t(2),r("matDatepicker",It),t(3),r("for",It),t(6),r("highlight",m.codeForPalleteColorsDatepicker),t(5),r("highlightAuto",m.codeForPalleteColorsDatepickerTs),t(3),r("isTitle",!0),t(6),p(l(320,202,"FORMS.datepicker.inputAndChangeEvents")),t(2),r("matDatepicker",Ft),t(3),r("for",Ft),t(5),p(l(330,204,"FORMS.datepicker.logs")),t(2),P(m.events),t(5),r("highlight",m.codeForChangeEventsDatepicker),t(5),r("highlightAuto",m.codeForChangeEventsDatepickerTs),t(3),r("isTitle",!0),t(7),p(l(352,206,"FORMS.datepicker.completelyDisabled")),t(2),r("matDatepicker",kt),t(3),r("for",kt),t(6),p(l(363,208,"FORMS.datepicker.popupDisabled")),t(2),r("matDatepicker",wt),t(3),r("for",wt),t(6),p(l(374,210,"FORMS.datepicker.inputDisabled")),t(2),r("matDatepicker",_t),t(3),r("for",_t),t(6),r("highlight",m.codeForDisabledDatepicker),t(5),r("highlightAuto",m.codeForDisabledDatepickerTs),t(3),r("isTitle",!0),t(5),V("selected",m.selected),t(2),d(" Selected date: ",m.selected," "),t(4),r("highlight",m.codeForInlineDatepicker),t(5),r("highlightAuto",m.codeForInlineDatepickerTs),t(3),r("isTitle",!0),t(6),p(l(418,212,"FORMS.datepicker.chooseDate")),t(2),r("matDatepicker",Tt),t(3),r("for",Tt),t(),r("startAt",m.startDate),t(5),r("highlight",m.codeForStartDateDatepicker),t(5),r("highlightAuto",m.codeForStartDateDatepickerTs),t(3),r("isTitle",!0),t(6),p(l(443,214,"FORMS.datepicker.chooseDate")),t(2),r("matDatepicker",Ct),t(3),r("for",Ct),t(6),r("highlight",m.codeForTouchUIDatepicker),t(5),r("highlightAuto",m.codeForTouchUIDatepickerTs)}},dependencies:[F,Kt,me,pe,de,qt,Jt,Xt,Zt,Qt,ti,ei,$t,U,G,qe,Ke,re,W,k,w,j,L,Q,R,ne,O,J,N,oe,le,xe,ce,se,T,C,y,_,I,We],styles:[`button.example-custom-date-class{background:orange;border-radius:100%}.demo-inline-calendar-card{width:300px}
`],encapsulation:2})}}return s})();var Ia=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-form-horizontal',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './form-horizontal.component.html',
})
export class AppFormHorizontalComponent {
  constructor() {}
 
}

`,Fa=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-form-horizontal',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    TablerIconsModule
  ],
  templateUrl: './form-horizontal.component.html',
})
export class AppFormHorizontalComponent {
  constructor() {}
 
}

`,ut=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-form-horizontal',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    TablerIconsModule,
    MatDatepickerModule
  ],
  templateUrl: './form-horizontal.component.html',
  providers: [provideNativeDateAdapter()],
})
export class AppFormHorizontalComponent {
  constructor() {}
 
}

`,ft=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-form-horizontal',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    TablerIconsModule,
    MatDatepickerModule
  ],
  templateUrl: './form-horizontal.component.html',
  providers: [provideNativeDateAdapter()],
})
export class AppFormHorizontalComponent {
  constructor() {}

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

  panelOpenState = false;
 
}

`;var ka=`    <form>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Name</mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="John Deo" />
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Company</mat-label
              >
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="ACME Inc." />
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Email</mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="john.deo" type="email" />
                <span matTextSuffix>&#64;exmaple.com</span>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Phone No</mat-label
              >
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="123 4561 123" />
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Message
              </mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <textarea
                  rows="5"
                  matInput
                  placeholder="Hi, Do you have a moment to talk Deo ?"
                ></textarea>
              </mat-form-field>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-sm-8">
              <button mat-flat-button>Send</button>
            </div>
          </div>
        </form>
`,wa=`    <form>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Name</mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="John Deo" />
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="user" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Company</mat-label
              >
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="ACME Inc." />
                <mat-icon matPrefix class="op-5">
                  <i-tabler
                    name="building-arch"
                    class="icon-20 d-flex"
                  ></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Email</mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="john.deo" type="email" />
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="mail" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Phone No</mat-label
              >
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="123 4561 123" />
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="phone" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Message
              </mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <textarea
                  rows="5"
                  matInput
                  placeholder="Hi, Do you have a moment to talk Deo ?"
                ></textarea>
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="message-2" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-sm-8">
              <button mat-flat-button>Send</button>
            </div>
          </div>
        </form>
`,_a=`    <mat-card>
          <mat-card-content>
            <h4 class="f-s-16 f-w-600 m-b-16">Account Details</h4>

            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Username
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Email</mat-label
                >
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="john.deo" type="email" />
                  <span matTextSuffix>&#64;exmaple.com</span>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Password
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [type]="hide ? 'password' : 'text'" />
                  <button
                    mat-icon-button
                    matSuffix
                    (click)="hide = !hide"
                    [attr.aria-label]="'Hide password'"
                    [attr.aria-pressed]="hide"
                  >
                    <mat-icon class="op-5">{{
                      hide ? "visibility_off" : "visibility"
                    }}</mat-icon>
                  </button>
                </mat-form-field>
              </div>
            </div>
          </mat-card-content>
          <mat-card-content class="b-t-1">
            <h4 class="f-s-16 f-w-600 m-b-16">Personal Info</h4>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Full Name
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Country
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <mat-select value="0">
                    <mat-option value="0"></mat-option>
                    <mat-option value="1">India</mat-option>
                    <mat-option value="2">Africa</mat-option>
                    <mat-option value="3">United Kingdom</mat-option>
                  </mat-select>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Birth Date
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [matDatepicker]="birthpicker" />
                  <mat-datepicker-toggle
                    matIconSuffix
                    [for]="birthpicker"
                  ></mat-datepicker-toggle>
                  <mat-datepicker #birthpicker></mat-datepicker>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Phone no
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="123 4567 123" />
                </mat-form-field>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-sm-8">
                <button mat-flat-button>Submit</button>
                <button mat-flat-button class="bg-error text-white m-l-8">
                  Cancel
                </button>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
`,Ta=`    <mat-card>
          <mat-card-content>
            <h4 class="f-s-16 m-0 f-w-600 m-b-16">Account Details</h4>

            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Username
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Email</mat-label
                >
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="john.deo" type="email" />
                  <span matTextSuffix>&#64;exmaple.com</span>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Password
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [type]="alignhide ? 'password' : 'text'" />
                  <button
                    mat-icon-button
                    matSuffix
                    (click)="alignhide = !alignhide"
                    [attr.aria-label]="'Hide password'"
                    [attr.aria-pressed]="alignhide"
                  >
                    <mat-icon class="op-5">{{
                      alignhide ? "visibility_off" : "visibility"
                    }}</mat-icon>
                  </button>
                </mat-form-field>
              </div>
            </div>
          </mat-card-content>
          <mat-card-content class="b-t-1">
            <h4 class="f-s-16 m-0 f-w-600 m-b-16">Personal Info</h4>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Full Name
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Country
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <mat-select value="0">
                    <mat-option value="0"></mat-option>
                    <mat-option value="1">India</mat-option>
                    <mat-option value="2">Africa</mat-option>
                    <mat-option value="3">United Kingdom</mat-option>
                  </mat-select>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Birth Date
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [matDatepicker]="birthpicker2" />
                  <mat-datepicker-toggle
                    matIconSuffix
                    [for]="birthpicker2"
                  ></mat-datepicker-toggle>
                  <mat-datepicker #birthpicker2></mat-datepicker>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Phone no
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="123 4567 123" />
                </mat-form-field>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-sm-8">
                <button mat-flat-button>Submit</button>
                <button mat-flat-button class="bg-error text-white m-l-8">
                  Cancel
                </button>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
`,Ca=`    <mat-accordion>
      <mat-expansion-panel
        class="cardWithShadow"
        [expanded]="step === 0"
        (opened)="panelOpenState = true"
        (closed)="panelOpenState = false"
        hideToggle
      >
        <mat-expansion-panel-header>
          <mat-panel-title class="f-w-600 f-s-16"
            >Delivery Address
          </mat-panel-title>
        </mat-expansion-panel-header>

        <div class="row">
          <div class="col-lg-6 col-sm-6">
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Full Name
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Address
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="150 Foot Ring Road" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >City
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="Jackson" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Address Type
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-radio-group aria-label="Select an option" class="m-t-8">
                  <mat-radio-button value="1" color="primary"
                    >Home (All day delivery)</mat-radio-button
                  >
                  <mat-radio-button value="2" color="primary"
                    >Office (Delivery between 10 AM - 5 PM)</mat-radio-button
                  >
                </mat-radio-group>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Phone
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="123 4561 213" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Pincode
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="630012" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Landmark
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="Nr. wall street" />
                </mat-form-field>
              </div>
            </div>
          </div>
        </div>

        <mat-action-row>
          <button mat-flat-button (click)="nextStep()">Next</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel
        class="cardWithShadow"
        [expanded]="step === 1"
        (opened)="panelOpenState = true"
        (closed)="panelOpenState = false"
        hideToggle
      >
        <mat-expansion-panel-header>
          <mat-panel-title class="f-w-600 f-s-16"
            >Delivery Options
          </mat-panel-title>
        </mat-expansion-panel-header>

        <mat-radio-group aria-label="Select an option" class="m-t-8">
          <mat-radio-button value="1" color="primary"
            >Standard 3-5 Days</mat-radio-button
          >
          <mat-radio-button value="2" color="primary">Express</mat-radio-button>
          <mat-radio-button value="3" color="primary"
            >Overnight</mat-radio-button
          >
        </mat-radio-group>

        <mat-action-row>
          <button
            mat-flat-button
            class="bg-error text-white"
            (click)="prevStep()"
          >
            Previous
          </button>
          <button mat-flat-button (click)="nextStep()">Next</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel
        class="cardWithShadow"
        [expanded]="step === 2"
        (opened)="panelOpenState = true"
        (closed)="panelOpenState = false"
        hideToggle
      >
        <mat-expansion-panel-header>
          <mat-panel-title class="f-w-600 f-s-16"
            >Payment Method
          </mat-panel-title>
        </mat-expansion-panel-header>

        <mat-radio-group aria-label="Select an option" class="m-t-8">
          <mat-radio-button value="1" color="primary"
            >Credit/Debit/ATM Card
          </mat-radio-button>
          <mat-radio-button value="2" color="primary"
            >Cash on Delivery</mat-radio-button
          >
        </mat-radio-group>

        <div class="row m-t-12">
          <div class="col-sm-9">
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
              >Card Number</mat-label
            >
            <mat-form-field appearance="outline" class="w-100" color="primary">
              <input matInput type="text" placeholder="123 200 540 620" />
            </mat-form-field>
            <div class="row m-t-12">
              <div class="col-sm-6">
                <!-- input -->
                <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Name</mat-label>
                <mat-form-field
                  appearance="outline"
                  class="w-100"
                >
                  <input matInput type="text" placeholder="John Deo" />
                </mat-form-field>
              </div>
              <div class="col-sm-3">
                <!-- input -->
                <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
                  >Exp. Date</mat-label
                >
                <mat-form-field
                  appearance="outline"
                  class="w-100"
                >
                  <input matInput type="text" placeholder="MM/YY" />
                </mat-form-field>
              </div>
              <div class="col-sm-3">
                <!-- input -->
                <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
                  >CCV Code</mat-label
                >
                <mat-form-field
                  appearance="outline"
                  class="w-100"
                >
                  <input matInput type="text" placeholder="2501" />
                  <mat-icon matSuffix class="op-5">
                    <i-tabler
                      name="info-square-rounded"
                      class="icon-20 d-flex"
                    ></i-tabler>
                  </mat-icon>
                </mat-form-field>
              </div>
            </div>
          </div>
        </div>

        <mat-action-row>
          <button
            mat-flat-button
            class="bg-error text-white"
            (click)="prevStep()"
          >
            Previous
          </button>
          <button mat-flat-button (click)="nextStep()">End</button>
        </mat-action-row>
      </mat-expansion-panel>
    </mat-accordion>
`,ya=`    <mat-card class="cardWithShadow">
      <mat-tab-group
        mat-stretch-tabs="false"
        mat-align-tabs="start"
        animationDuration="0ms"
      >
        <mat-tab label="Personal Info">
          <mat-card-content>
            <div class="row">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >First Name
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="John" />
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Country
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <mat-select value="1">
                        <mat-option value="1"></mat-option>
                        <mat-option value="in">India</mat-option>
                        <mat-option value="fr">France</mat-option>
                        <mat-option value="af">Africa</mat-option>
                      </mat-select>
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Birth Date
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput [matDatepicker]="birthpicker3" />
                      <mat-datepicker-toggle
                        matIconSuffix
                        [for]="birthpicker3"
                      ></mat-datepicker-toggle>
                      <mat-datepicker #birthpicker3></mat-datepicker>
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Last Name
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="Deo" />
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Language
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <mat-select value="en">
                        <mat-option value="en">English</mat-option>
                        <mat-option value="fr">French</mat-option>
                      </mat-select>
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Phone no
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="123 4560 123" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-t-12 text-right">
              <button mat-flat-button>Submit</button>
              <button mat-flat-button class="bg-error text-white m-l-8">
                Cancel
              </button>
            </div>
          </mat-card-content>
        </mat-tab>
        <mat-tab label="Account Details">
          <mat-card-content>
            <div class="row">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Username
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="John.Deo" />
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Password
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput [type]="hide2 ? 'password' : 'text'" />
                      <button
                        mat-icon-button
                        matSuffix
                        (click)="hide2 = !hide2"
                        [attr.aria-label]="'Hide password'"
                        [attr.aria-pressed]="hide2"
                      >
                        <mat-icon class="op-5">{{
                          hide2 ? "visibility_off" : "visibility"
                        }}</mat-icon>
                      </button>
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Email
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="john.deo" />
                      <span matTextSuffix>&#64;exmaple.com</span>
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Confirm
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput [type]="hide ? 'password' : 'text'" />
                      <button
                        mat-icon-button
                        matSuffix
                        (click)="conhide = !conhide"
                        [attr.aria-label]="'Hide password'"
                        [attr.aria-pressed]="conhide"
                      >
                        <mat-icon class="op-5">{{
                          conhide ? "visibility_off" : "visibility"
                        }}</mat-icon>
                      </button>
                    </mat-form-field>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-t-12 text-right">
              <button mat-flat-button>Submit</button>
              <button mat-flat-button class="bg-error text-white m-l-8">
                Cancel
              </button>
            </div>
          </mat-card-content>
        </mat-tab>
        <mat-tab label="Social Links">
          <mat-card-content>
            <div class="row">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Twitter
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="https://twitter.com/abc" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Facebook
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="https://facebook.com/abc" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Google
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input
                        matInput
                        placeholder="https://plus.google.com/abc"
                      />
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Linkedin
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="https://linkedin.com/abc" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Instagram
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="https://instagram.com/abc" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Quora
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="https://quora.com/abc" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-t-12 text-right">
              <button mat-flat-button>Submit</button>
              <button mat-flat-button class="bg-error text-white m-l-8">
                Cancel
              </button>
            </div>
          </mat-card-content>
        </mat-tab>
      </mat-tab-group>
    </mat-card>
`;var Ra=(()=>{class s{constructor(){this.hide=!0,this.hide2=!0,this.conhide=!0,this.alignhide=!0,this.step=0,this.panelOpenState=!1,this.codeForBasicLayout=ka,this.codeForBasicLayoutTs=Ia,this.codeForBasicwithIcons=wa,this.codeForBasicwithIconsTs=Fa,this.codeForFormSeparator=_a,this.codeForFormSeparatorTs=ut,this.codeForFormLabelAlign=Ta,this.codeForFormLabelAlignTs=ut,this.codeForCollpaseForm=Ca,this.codeForCollpaseFormTs=ft,this.codeForFormwithTabs=ya,this.codeForFormwithTabsTs=ft}setStep(c){this.step=c}nextStep(){this.step++}prevStep(){this.step--}static{this.\u0275fac=function(u){return new(u||s)}}static{this.\u0275cmp=E({type:s,selectors:[["app-form-horizontal"]],features:[q([ue()])],decls:737,vars:382,consts:[["birthpicker",""],["birthpicker2",""],["birthpicker3",""],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"col-sm-4","d-flex","align-items-center"],[1,"f-s-14","f-w-600","d-block","m-b-16"],[1,"col-sm-8"],["appearance","outline",1,"w-100"],["matInput","","placeholder","John Deo"],["matInput","","placeholder","ACME Inc."],["matInput","","placeholder","john.deo","type","email"],["matTextSuffix",""],["matInput","","placeholder","123 4561 123"],["rows","5","matInput","",3,"placeholder"],[1,"row","justify-content-end"],["mat-flat-button",""],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matPrefix","",1,"op-5"],["name","user",1,"icon-20","d-flex"],["name","building-arch",1,"icon-20","d-flex"],["name","mail",1,"icon-20","d-flex"],["name","phone",1,"icon-20","d-flex"],["name","message-2",1,"icon-20","d-flex"],[1,"f-s-16","f-w-600","m-b-16"],[1,"f-s-14","f-w-600","d-block","m-b-24"],["matInput","",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],[1,"op-5"],[1,"b-t-1"],["matInput","",3,"placeholder"],["value","0"],["value","1"],["value","2"],["value","3"],["matInput","",3,"matDatepicker"],["matIconSuffix","",3,"for"],["mat-flat-button","",1,"bg-error","text-white","m-l-8"],[1,"f-s-16","m-0","f-w-600","m-b-16"],[1,"col-sm-4","d-flex","align-items-center","justify-content-end"],["matInput","","type","email",3,"placeholder"],["matInput","","placeholder","123 4567 123"],[1,"mat-headline-6","m-y-24"],["hideToggle","",1,"cardWithShadow",3,"opened","closed","expanded"],[1,"f-w-600","f-s-16"],[1,"col-lg-6","col-sm-6"],["matInput","","placeholder","150 Foot Ring Road"],["matInput","","placeholder","Jackson"],["aria-label","Select an option",1,"m-t-8"],["value","1","color","primary"],["value","2","color","primary"],["matInput","","placeholder","123 4561 213"],["matInput","","placeholder","630012"],["matInput","","placeholder","Nr. wall street"],["mat-flat-button","",3,"click"],["value","3","color","primary"],["mat-flat-button","",1,"bg-error","text-white",3,"click"],[1,"row","m-t-12"],[1,"col-sm-9"],[1,"f-s-14","f-w-600","m-b-8","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","type","text","placeholder","123 200 540 620"],[1,"col-sm-6"],["matInput","","type","text","placeholder","John Deo"],[1,"col-sm-3"],["matInput","","type","text",3,"placeholder"],["matSuffix","",1,"op-5"],["name","info-square-rounded",1,"icon-20","d-flex"],[1,"cardWithShadow"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","0ms"],[3,"label"],[1,"col-sm-3","d-flex","align-items-center"],["matInput","","placeholder","John"],["value","in"],["value","fr"],["value","af"],["matInput","","placeholder","Deo"],["value","en"],["matInput","","placeholder","123 4560 123"],[1,"m-t-12","text-right"],["matInput","","placeholder","John.Deo"],["matInput","","placeholder","john.deo"],["matInput","","placeholder","https://twitter.com/abc"],["matInput","","placeholder","https://facebook.com/abc"],["matInput","","placeholder","https://plus.google.com/abc"],["matInput","","placeholder","https://linkedin.com/abc"],["matInput","","placeholder","https://instagram.com/abc"],["matInput","","placeholder","https://quora.com/abc"]],template:function(u,m){if(u&1){let b=A();e(0,"div",3)(1,"div",4)(2,"app-code-view",5)(3,"h4",6),a(4),n(5,"translate"),i(),e(6,"div",7)(7,"form")(8,"div",3)(9,"div",8)(10,"mat-label",9),a(11),n(12,"translate"),i()(),e(13,"div",10)(14,"mat-form-field",11),o(15,"input",12),i()()(),e(16,"div",3)(17,"div",8)(18,"mat-label",9),a(19),n(20,"translate"),i()(),e(21,"div",10)(22,"mat-form-field",11),o(23,"input",13),i()()(),e(24,"div",3)(25,"div",8)(26,"mat-label",9),a(27),n(28,"translate"),i()(),e(29,"div",10)(30,"mat-form-field",11),o(31,"input",14),e(32,"span",15),a(33,"@exmaple.com"),i()()()(),e(34,"div",3)(35,"div",8)(36,"mat-label",9),a(37),n(38,"translate"),i()(),e(39,"div",10)(40,"mat-form-field",11),o(41,"input",16),i()()(),e(42,"div",3)(43,"div",8)(44,"mat-label",9),a(45),n(46,"translate"),i()(),e(47,"div",10)(48,"mat-form-field",11),o(49,"textarea",17),n(50,"translate"),i()()(),e(51,"div",18)(52,"div",10)(53,"button",19),a(54),n(55,"translate"),i()()()()(),e(56,"div",20)(57,"pre"),a(58,"          "),o(59,"code",21),a(60,`
        `),i()(),e(61,"div",22)(62,"pre"),a(63,"          "),o(64,"code",23),a(65,`
        `),i()()()(),e(66,"div",4)(67,"app-code-view",5)(68,"h4",6),a(69),n(70,"translate"),i(),e(71,"div",7)(72,"form")(73,"div",3)(74,"div",8)(75,"mat-label",9),a(76),n(77,"translate"),i()(),e(78,"div",10)(79,"mat-form-field",11),o(80,"input",12),e(81,"mat-icon",24),o(82,"i-tabler",25),i()()()(),e(83,"div",3)(84,"div",8)(85,"mat-label",9),a(86),n(87,"translate"),i()(),e(88,"div",10)(89,"mat-form-field",11),o(90,"input",13),e(91,"mat-icon",24),o(92,"i-tabler",26),i()()()(),e(93,"div",3)(94,"div",8)(95,"mat-label",9),a(96),n(97,"translate"),i()(),e(98,"div",10)(99,"mat-form-field",11),o(100,"input",14),e(101,"mat-icon",24),o(102,"i-tabler",27),i()()()(),e(103,"div",3)(104,"div",8)(105,"mat-label",9),a(106),n(107,"translate"),i()(),e(108,"div",10)(109,"mat-form-field",11),o(110,"input",16),e(111,"mat-icon",24),o(112,"i-tabler",28),i()()()(),e(113,"div",3)(114,"div",8)(115,"mat-label",9),a(116),n(117,"translate"),i()(),e(118,"div",10)(119,"mat-form-field",11),o(120,"textarea",17),n(121,"translate"),e(122,"mat-icon",24),o(123,"i-tabler",29),i()()()(),e(124,"div",18)(125,"div",10)(126,"button",19),a(127),n(128,"translate"),i()()()()(),e(129,"div",20)(130,"pre"),a(131,"          "),o(132,"code",21),a(133,`
        `),i()(),e(134,"div",22)(135,"pre"),a(136,"          "),o(137,"code",23),a(138,`
        `),i()()()(),e(139,"div",4)(140,"app-code-view",5)(141,"h4",6),a(142),n(143,"translate"),i(),e(144,"div",7)(145,"mat-card")(146,"mat-card-content")(147,"h4",30),a(148),n(149,"translate"),i(),e(150,"div",3)(151,"div",8)(152,"mat-label",31),a(153),n(154,"translate"),i()(),e(155,"div",10)(156,"mat-form-field",11),o(157,"input",12),i()()(),e(158,"div",3)(159,"div",8)(160,"mat-label",31),a(161),n(162,"translate"),i()(),e(163,"div",10)(164,"mat-form-field",11),o(165,"input",14),e(166,"span",15),a(167,"@exmaple.com"),i()()()(),e(168,"div",3)(169,"div",8)(170,"mat-label",31),a(171),n(172,"translate"),i()(),e(173,"div",10)(174,"mat-form-field",11),o(175,"input",32),e(176,"button",33),n(177,"translate"),S("click",function(){return v(b),h(m.hide=!m.hide)}),e(178,"mat-icon",34),a(179),i()()()()()(),e(180,"mat-card-content",35)(181,"h4",30),a(182),n(183,"translate"),i(),e(184,"div",3)(185,"div",8)(186,"mat-label",31),a(187),n(188,"translate"),i()(),e(189,"div",10)(190,"mat-form-field",11),o(191,"input",36),n(192,"translate"),i()()(),e(193,"div",3)(194,"div",8)(195,"mat-label",31),a(196),n(197,"translate"),i()(),e(198,"div",10)(199,"mat-form-field",11)(200,"mat-select",37),o(201,"mat-option",37),e(202,"mat-option",38),a(203),n(204,"translate"),i(),e(205,"mat-option",39),a(206),n(207,"translate"),i(),e(208,"mat-option",40),a(209),n(210,"translate"),i()()()()(),e(211,"div",3)(212,"div",8)(213,"mat-label",31),a(214),n(215,"translate"),i()(),e(216,"div",10)(217,"mat-form-field",11),o(218,"input",41)(219,"mat-datepicker-toggle",42)(220,"mat-datepicker",null,0),i()()(),e(222,"div",3)(223,"div",8)(224,"mat-label",31),a(225),n(226,"translate"),i()(),e(227,"div",10)(228,"mat-form-field",11),o(229,"input",36),n(230,"translate"),i()()(),e(231,"div",18)(232,"div",10)(233,"button",19),a(234),n(235,"translate"),i(),e(236,"button",43),a(237),n(238,"translate"),i()()()()()(),e(239,"div",20)(240,"pre"),a(241,"          "),o(242,"code",21),a(243,`
        `),i()(),e(244,"div",22)(245,"pre"),a(246,"          "),o(247,"code",23),a(248,`
        `),i()()()(),e(249,"div",4)(250,"app-code-view",5)(251,"h4",6),a(252),n(253,"translate"),i(),e(254,"div",7)(255,"mat-card")(256,"mat-card-content")(257,"h4",44),a(258),n(259,"translate"),i(),e(260,"div",3)(261,"div",45)(262,"mat-label",31),a(263),n(264,"translate"),i()(),e(265,"div",10)(266,"mat-form-field",11),o(267,"input",36),n(268,"translate"),i()()(),e(269,"div",3)(270,"div",45)(271,"mat-label",31),a(272),n(273,"translate"),i()(),e(274,"div",10)(275,"mat-form-field",11),o(276,"input",46),n(277,"translate"),e(278,"span",15),a(279),n(280,"translate"),i()()()(),e(281,"div",3)(282,"div",45)(283,"mat-label",31),a(284),n(285,"translate"),i()(),e(286,"div",10)(287,"mat-form-field",11),o(288,"input",32),e(289,"button",33),n(290,"translate"),S("click",function(){return v(b),h(m.alignhide=!m.alignhide)}),e(291,"mat-icon",34),a(292),i()()()()()(),e(293,"mat-card-content",35)(294,"h4",44),a(295),n(296,"translate"),i(),e(297,"div",3)(298,"div",45)(299,"mat-label",31),a(300),n(301,"translate"),i()(),e(302,"div",10)(303,"mat-form-field",11),o(304,"input",36),n(305,"translate"),i()()(),e(306,"div",3)(307,"div",45)(308,"mat-label",31),a(309),n(310,"translate"),i()(),e(311,"div",10)(312,"mat-form-field",11)(313,"mat-select",37),o(314,"mat-option",37),e(315,"mat-option",38),a(316),n(317,"translate"),i(),e(318,"mat-option",39),a(319),n(320,"translate"),i(),e(321,"mat-option",40),a(322),n(323,"translate"),i()()()()(),e(324,"div",3)(325,"div",45)(326,"mat-label",31),a(327),n(328,"translate"),i()(),e(329,"div",10)(330,"mat-form-field",11),o(331,"input",41)(332,"mat-datepicker-toggle",42)(333,"mat-datepicker",null,1),i()()(),e(335,"div",3)(336,"div",45)(337,"mat-label",31),a(338),n(339,"translate"),i()(),e(340,"div",10)(341,"mat-form-field",11),o(342,"input",47),i()()(),e(343,"div",18)(344,"div",10)(345,"button",19),a(346),n(347,"translate"),i(),e(348,"button",43),a(349),n(350,"translate"),i()()()()()(),e(351,"div",20)(352,"pre"),a(353,"          "),o(354,"code",21),a(355,`
        `),i()(),e(356,"div",22)(357,"pre"),a(358,"          "),o(359,"code",23),a(360,`
        `),i()()()()(),e(361,"h4",48),a(362),n(363,"translate"),i(),e(364,"app-code-view")(365,"div",7)(366,"mat-accordion")(367,"mat-expansion-panel",49),S("opened",function(){return v(b),h(m.panelOpenState=!0)})("closed",function(){return v(b),h(m.panelOpenState=!1)}),e(368,"mat-expansion-panel-header")(369,"mat-panel-title",50),a(370),n(371,"translate"),i()(),e(372,"div",3)(373,"div",51)(374,"div",3)(375,"div",45)(376,"mat-label",31),a(377),n(378,"translate"),i()(),e(379,"div",10)(380,"mat-form-field",11),o(381,"input",12),i()()(),e(382,"div",3)(383,"div",45)(384,"mat-label",31),a(385),n(386,"translate"),i()(),e(387,"div",10)(388,"mat-form-field",11),o(389,"input",52),i()()(),e(390,"div",3)(391,"div",45)(392,"mat-label",31),a(393),n(394,"translate"),i()(),e(395,"div",10)(396,"mat-form-field",11),o(397,"input",53),i()()(),e(398,"div",3)(399,"div",45)(400,"mat-label",31),a(401),n(402,"translate"),i()(),e(403,"div",10)(404,"mat-radio-group",54)(405,"mat-radio-button",55),a(406),n(407,"translate"),i(),e(408,"mat-radio-button",56),a(409),n(410,"translate"),i()()()()(),e(411,"div",51)(412,"div",3)(413,"div",45)(414,"mat-label",31),a(415),n(416,"translate"),i()(),e(417,"div",10)(418,"mat-form-field",11),o(419,"input",57),i()()(),e(420,"div",3)(421,"div",45)(422,"mat-label",31),a(423),n(424,"translate"),i()(),e(425,"div",10)(426,"mat-form-field",11),o(427,"input",58),i()()(),e(428,"div",3)(429,"div",45)(430,"mat-label",31),a(431," Landmark "),i()(),e(432,"div",10)(433,"mat-form-field",11),o(434,"input",59),i()()()()(),e(435,"mat-action-row")(436,"button",60),S("click",function(){return v(b),h(m.nextStep())}),a(437),n(438,"translate"),i()()(),e(439,"mat-expansion-panel",49),S("opened",function(){return v(b),h(m.panelOpenState=!0)})("closed",function(){return v(b),h(m.panelOpenState=!1)}),e(440,"mat-expansion-panel-header")(441,"mat-panel-title",50),a(442),n(443,"translate"),i()(),e(444,"mat-radio-group",54)(445,"mat-radio-button",55),a(446),n(447,"translate"),i(),e(448,"mat-radio-button",56),a(449),n(450,"translate"),i(),e(451,"mat-radio-button",61),a(452),n(453,"translate"),i()(),e(454,"mat-action-row")(455,"button",62),S("click",function(){return v(b),h(m.prevStep())}),a(456),n(457,"translate"),i(),e(458,"button",60),S("click",function(){return v(b),h(m.nextStep())}),a(459),n(460,"translate"),i()()(),e(461,"mat-expansion-panel",49),S("opened",function(){return v(b),h(m.panelOpenState=!0)})("closed",function(){return v(b),h(m.panelOpenState=!1)}),e(462,"mat-expansion-panel-header")(463,"mat-panel-title",50),a(464),n(465,"translate"),i()(),e(466,"mat-radio-group",54)(467,"mat-radio-button",55),a(468),n(469,"translate"),i(),e(470,"mat-radio-button",56),a(471),n(472,"translate"),i()(),e(473,"div",63)(474,"div",64)(475,"mat-label",65),a(476),n(477,"translate"),i(),e(478,"mat-form-field",66),o(479,"input",67),i(),e(480,"div",63)(481,"div",68)(482,"mat-label",65),a(483),n(484,"translate"),i(),e(485,"mat-form-field",11),o(486,"input",69),i()(),e(487,"div",70)(488,"mat-label",65),a(489),n(490,"translate"),i(),e(491,"mat-form-field",11),o(492,"input",71),n(493,"translate"),i()(),e(494,"div",70)(495,"mat-label",65),a(496),n(497,"translate"),i(),e(498,"mat-form-field",11),o(499,"input",71),n(500,"translate"),e(501,"mat-icon",72),o(502,"i-tabler",73),i()()()()()(),e(503,"mat-action-row")(504,"button",62),S("click",function(){return v(b),h(m.prevStep())}),a(505),n(506,"translate"),i(),e(507,"button",60),S("click",function(){return v(b),h(m.nextStep())}),a(508),n(509,"translate"),i()()()()(),e(510,"div",20)(511,"pre"),a(512,"      "),o(513,"code",21),a(514,`
    `),i()(),e(515,"div",22)(516,"pre"),a(517,"      "),o(518,"code",23),a(519,`
    `),i()()(),e(520,"h4",48),a(521),n(522,"translate"),i(),e(523,"app-code-view")(524,"div",7)(525,"mat-card",74)(526,"mat-tab-group",75)(527,"mat-tab",76),n(528,"translate"),e(529,"mat-card-content")(530,"div",3)(531,"div",4)(532,"div",3)(533,"div",77)(534,"mat-label",31),a(535),n(536,"translate"),i()(),e(537,"div",64)(538,"mat-form-field",11),o(539,"input",78),i()()(),e(540,"div",3)(541,"div",77)(542,"mat-label",31),a(543),n(544,"translate"),i()(),e(545,"div",64)(546,"mat-form-field",11)(547,"mat-select",38),o(548,"mat-option",38),e(549,"mat-option",79),a(550),n(551,"translate"),i(),e(552,"mat-option",80),a(553),n(554,"translate"),i(),e(555,"mat-option",81),a(556),n(557,"translate"),i()()()()(),e(558,"div",3)(559,"div",77)(560,"mat-label",31),a(561),n(562,"translate"),i()(),e(563,"div",64)(564,"mat-form-field",11),o(565,"input",41)(566,"mat-datepicker-toggle",42)(567,"mat-datepicker",null,2),i()()()(),e(569,"div",4)(570,"div",3)(571,"div",77)(572,"mat-label",31),a(573),n(574,"translate"),i()(),e(575,"div",64)(576,"mat-form-field",11),o(577,"input",82),i()()(),e(578,"div",3)(579,"div",77)(580,"mat-label",31),a(581),n(582,"translate"),i()(),e(583,"div",64)(584,"mat-form-field",11)(585,"mat-select",83)(586,"mat-option",83),a(587),n(588,"translate"),i(),e(589,"mat-option",80),a(590),n(591,"translate"),i()()()()(),e(592,"div",3)(593,"div",77)(594,"mat-label",31),a(595),n(596,"translate"),i()(),e(597,"div",64)(598,"mat-form-field",11),o(599,"input",84),i()()()()(),e(600,"div",85)(601,"button",19),a(602),n(603,"translate"),i(),e(604,"button",43),a(605),n(606,"translate"),i()()()(),e(607,"mat-tab",76),n(608,"translate"),e(609,"mat-card-content")(610,"div",3)(611,"div",4)(612,"div",3)(613,"div",77)(614,"mat-label",31),a(615),n(616,"translate"),i()(),e(617,"div",64)(618,"mat-form-field",11),o(619,"input",86),i()()(),e(620,"div",3)(621,"div",77)(622,"mat-label",31),a(623),n(624,"translate"),i()(),e(625,"div",64)(626,"mat-form-field",11),o(627,"input",32),e(628,"button",33),n(629,"translate"),S("click",function(){return v(b),h(m.hide2=!m.hide2)}),e(630,"mat-icon",34),a(631),i()()()()()(),e(632,"div",4)(633,"div",3)(634,"div",77)(635,"mat-label",31),a(636),n(637,"translate"),i()(),e(638,"div",64)(639,"mat-form-field",11),o(640,"input",87),e(641,"span",15),a(642,"@exmaple.com"),i()()()(),e(643,"div",3)(644,"div",77)(645,"mat-label",31),a(646),n(647,"translate"),i()(),e(648,"div",64)(649,"mat-form-field",11),o(650,"input",32),e(651,"button",33),n(652,"translate"),S("click",function(){return v(b),h(m.conhide=!m.conhide)}),e(653,"mat-icon",34),a(654),i()()()()()()(),e(655,"div",85)(656,"button",19),a(657),n(658,"translate"),i(),e(659,"button",43),a(660),n(661,"translate"),i()()()(),e(662,"mat-tab",76),n(663,"translate"),e(664,"mat-card-content")(665,"div",3)(666,"div",4)(667,"div",3)(668,"div",77)(669,"mat-label",31),a(670),n(671,"translate"),i()(),e(672,"div",64)(673,"mat-form-field",11),o(674,"input",88),i()()()(),e(675,"div",4)(676,"div",3)(677,"div",77)(678,"mat-label",31),a(679),n(680,"translate"),i()(),e(681,"div",64)(682,"mat-form-field",11),o(683,"input",89),i()()()(),e(684,"div",4)(685,"div",3)(686,"div",77)(687,"mat-label",31),a(688),n(689,"translate"),i()(),e(690,"div",64)(691,"mat-form-field",11),o(692,"input",90),i()()()(),e(693,"div",4)(694,"div",3)(695,"div",77)(696,"mat-label",31),a(697),n(698,"translate"),i()(),e(699,"div",64)(700,"mat-form-field",11),o(701,"input",91),i()()()(),e(702,"div",4)(703,"div",3)(704,"div",77)(705,"mat-label",31),a(706),n(707,"translate"),i()(),e(708,"div",64)(709,"mat-form-field",11),o(710,"input",92),i()()()(),e(711,"div",4)(712,"div",3)(713,"div",77)(714,"mat-label",31),a(715),n(716,"translate"),i()(),e(717,"div",64)(718,"mat-form-field",11),o(719,"input",93),i()()()()(),e(720,"div",85)(721,"button",19),a(722),n(723,"translate"),i(),e(724,"button",43),a(725),n(726,"translate"),i()()()()()()(),e(727,"div",20)(728,"pre"),a(729,"      "),o(730,"code",21),a(731,`
    `),i()(),e(732,"div",22)(733,"pre"),a(734,"      "),o(735,"code",23),a(736,`
    `),i()()()}if(u&2){let b=g(221),f=g(334),M=g(568);t(2),r("isTitle",!0),t(2),p(l(5,152,"FORMS.titles.basicLayout")),t(7),p(l(12,154,"FORMS.labels.name")),t(8),p(l(20,156,"FORMS.labels.company")),t(8),p(l(28,158,"FORMS.labels.email")),t(10),p(l(38,160,"FORMS.labels.phoneNo")),t(8),d("",l(46,162,"FORMS.labels.message")," "),t(4),r("placeholder",l(50,164,"FORMS.placeholders.hiDoYouHaveMomentDeo")),t(5),p(l(55,166,"FORMS.buttons.send")),t(5),r("highlight",m.codeForBasicLayout),t(5),r("highlightAuto",m.codeForBasicLayoutTs),t(3),r("isTitle",!0),t(2),p(l(70,168,"FORMS.titles.basicWithIcons")),t(7),p(l(77,170,"FORMS.labels.name")),t(10),p(l(87,172,"FORMS.labels.company")),t(10),p(l(97,174,"FORMS.labels.email")),t(10),p(l(107,176,"FORMS.labels.phoneNo")),t(10),d("",l(117,178,"FORMS.labels.message")," "),t(4),r("placeholder",l(121,180,"FORMS.placeholders.hiDoYouHaveMomentDeo")),t(7),p(l(128,182,"FORMS.buttons.send")),t(5),r("highlight",m.codeForBasicwithIcons),t(5),r("highlightAuto",m.codeForBasicwithIconsTs),t(3),r("isTitle",!0),t(2),p(l(143,184,"FORMS.titles.formSeparator")),t(6),p(l(149,186,"FORMS.sections.accountDetails")),t(5),d("",l(154,188,"FORMS.labels.username")," "),t(8),p(l(162,190,"FORMS.labels.email")),t(10),d(" ",l(172,192,"FORMS.labels.password")," "),t(4),r("type",m.hide?"password":"text"),t(),K("aria-label",l(177,194,"FORMS.labels.hidePassword"))("aria-pressed",m.hide),t(3),p(m.hide?"visibility_off":"visibility"),t(3),p(l(183,196,"FORMS.sections.personalInfo")),t(5),d(" ",l(188,198,"FORMS.labels.fullName")," "),t(4),r("placeholder",l(192,200,"FORMS.placeholders.johnDeo")),t(5),d(" ",l(197,202,"FORMS.labels.country")," "),t(7),d(" ",l(204,204,"FORMS.options.india")),t(3),d(" ",l(207,206,"FORMS.options.africa")),t(3),d(" ",l(210,208,"FORMS.options.unitedKingdom")),t(5),d(" ",l(215,210,"FORMS.labels.birthDate")," "),t(4),r("matDatepicker",b),t(),r("for",b),t(6),d(" ",l(226,212,"FORMS.labels.phoneNo")," "),t(4),r("placeholder",l(230,214,"FORMS.placeholders.phone123")),t(5),d(" ",l(235,216,"FORMS.buttons.submit")),t(3),d(" ",l(238,218,"FORMS.buttons.cancel")," "),t(5),r("highlight",m.codeForFormSeparator),t(5),r("highlightAuto",m.codeForFormSeparatorTs),t(3),r("isTitle",!0),t(2),p(l(253,220,"FORMS.titles.formLabelAlignment")),t(6),p(l(259,222,"FORMS.sections.accountDetails")),t(5),d(" ",l(264,224,"FORMS.labels.username")," "),t(4),r("placeholder",l(268,226,"FORMS.placeholders.johnDeo")),t(5),p(l(273,228,"FORMS.labels.email")),t(4),r("placeholder",l(277,230,"FORMS.placeholders.johnDeoEmail")),t(3),p(l(280,232,"FORMS.placeholders.emailSuffix")),t(5),d(" ",l(285,234,"FORMS.labels.password")," "),t(4),r("type",m.alignhide?"password":"text"),t(),K("aria-label",l(290,236,"FORMS.labels.hidePassword"))("aria-pressed",m.alignhide),t(3),p(m.alignhide?"visibility_off":"visibility"),t(3),p(l(296,238,"FORMS.sections.personalInfo")),t(5),d(" ",l(301,240,"FORMS.labels.fullName")," "),t(4),r("placeholder",l(305,242,"FORMS.placeholders.johnDeo")),t(5),d("",l(310,244,"FORMS.labels.country")," "),t(7),p(l(317,246,"FORMS.options.india")),t(3),p(l(320,248,"FORMS.options.africa")),t(3),p(l(323,250,"FORMS.options.unitedKingdom")),t(5),d("",l(328,252,"FORMS.labels.birthDate")," "),t(4),r("matDatepicker",f),t(),r("for",f),t(6),d("",l(339,254,"FORMS.labels.phoneNo")," "),t(8),p(l(347,256,"FORMS.buttons.submit")),t(3),d("",l(350,258,"FORMS.buttons.cancel")," "),t(5),r("highlight",m.codeForFormLabelAlign),t(5),r("highlightAuto",m.codeForFormLabelAlignTs),t(3),p(l(363,260,"FORMS.sections.collapsibleSection")),t(5),r("expanded",m.step===0),t(3),d("",l(371,262,"FORMS.sections.deliveryAddress")," "),t(7),d("",l(378,264,"FORMS.labels.fullName")," "),t(8),d("",l(386,266,"FORMS.labels.address")," "),t(8),d("",l(394,268,"FORMS.labels.city")," "),t(8),d("",l(402,270,"FORMS.labels.addressType")," "),t(5),p(l(407,272,"FORMS.options.homeDelivery")),t(3),p(l(410,274,"FORMS.options.officeDelivery")),t(6),d("",l(416,276,"FORMS.labels.phone")," "),t(8),d("",l(424,278,"FORMS.labels.pincode")," "),t(14),p(l(438,280,"FORMS.buttons.next")),t(2),r("expanded",m.step===1),t(3),d("",l(443,282,"FORMS.sections.deliveryOptions")," "),t(4),p(l(447,284,"FORMS.options.standard")),t(3),p(l(450,286,"FORMS.options.express")),t(3),p(l(453,288,"FORMS.options.overnight")),t(4),d("",l(457,290,"FORMS.buttons.previous")," "),t(3),p(l(460,292,"FORMS.buttons.next")),t(2),r("expanded",m.step===2),t(3),d("",l(465,294,"FORMS.sections.paymentMethod")," "),t(4),d("",l(469,296,"FORMS.options.creditDebitAtm")," "),t(3),p(l(472,298,"FORMS.options.cashOnDelivery")),t(5),p(l(477,300,"FORMS.labels.cardNumber")),t(7),p(l(484,302,"FORMS.labels.name")),t(6),p(l(490,304,"FORMS.labels.expDate")),t(3),r("placeholder",l(493,306,"FORMS.placeholders.mmYy")),t(4),p(l(497,308,"FORMS.labels.ccvCode")),t(3),r("placeholder",l(500,310,"FORMS.placeholders.ccv")),t(6),d("",l(506,312,"FORMS.buttons.previous")," "),t(3),p(l(509,314,"FORMS.buttons.end")),t(5),r("highlight",m.codeForCollpaseForm),t(5),r("highlightAuto",m.codeForCollpaseFormTs),t(3),p(l(522,316,"FORMS.sections.formWithTabs")),t(6),r("label",l(528,318,"FORMS.sections.personalInfo")),t(8),d("",l(536,320,"FORMS.labels.firstName")," "),t(8),d("",l(544,322,"FORMS.labels.country")," "),t(7),p(l(551,324,"FORMS.options.india")),t(3),p(l(554,326,"FORMS.options.france")),t(3),p(l(557,328,"FORMS.options.africa")),t(5),d("",l(562,330,"FORMS.labels.birthDate")," "),t(4),r("matDatepicker",M),t(),r("for",M),t(7),d("",l(574,332,"FORMS.labels.lastName")," "),t(8),d("",l(582,334,"FORMS.labels.language")," "),t(6),p(l(588,336,"FORMS.options.english")),t(3),p(l(591,338,"FORMS.options.french")),t(5),d("",l(596,340,"FORMS.labels.phoneNo")," "),t(7),p(l(603,342,"FORMS.buttons.submit")),t(3),d("",l(606,344,"FORMS.buttons.cancel")," "),t(2),r("label",l(608,346,"FORMS.sections.accountDetails")),t(8),d("",l(616,348,"FORMS.labels.username")," "),t(8),d("",l(624,350,"FORMS.labels.password")," "),t(4),r("type",m.hide2?"password":"text"),t(),K("aria-label",l(629,352,"FORMS.labels.hidePassword"))("aria-pressed",m.hide2),t(3),p(m.hide2?"visibility_off":"visibility"),t(5),d("",l(637,354,"FORMS.labels.email")," "),t(10),d("",l(647,356,"FORMS.labels.confirm")," "),t(4),r("type",m.hide?"password":"text"),t(),K("aria-label",l(652,358,"FORMS.labels.hidePassword"))("aria-pressed",m.conhide),t(3),p(m.conhide?"visibility_off":"visibility"),t(3),p(l(658,360,"FORMS.buttons.submit")),t(3),d("",l(661,362,"FORMS.buttons.cancel")," "),t(2),r("label",l(663,364,"FORMS.sections.socialLinks")),t(8),d("",l(671,366,"FORMS.labels.twitter")," "),t(9),d("",l(680,368,"FORMS.labels.facebook")," "),t(9),d("",l(689,370,"FORMS.labels.google")," "),t(9),d("",l(698,372,"FORMS.labels.linkedin")," "),t(9),d("",l(707,374,"FORMS.labels.instagram")," "),t(9),d("",l(716,376,"FORMS.labels.quora")," "),t(7),p(l(723,378,"FORMS.buttons.submit")),t(3),d("",l(726,380,"FORMS.buttons.cancel")," "),t(5),r("highlight",m.codeForFormwithTabs),t(5),r("highlightAuto",m.codeForFormwithTabsTs)}},dependencies:[F,ae,me,pe,de,U,G,_e,re,W,X,Z,Oe,k,w,$e,Je,Xe,Ze,Qe,tt,it,L,Ce,Q,be,fe,ce,ye,se,et,_,T,C,y,I],encapsulation:2})}}return s})();var Ba=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-form-layouts',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './form-layouts.component.html',
})
export class AppFormLayoutsComponent {
  constructor() {}
 
}

`,Da=`  import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';

/** @title Form field with error messages */
@Component({
  selector: 'form-layout',
  templateUrl: 'form-layout.html',
  styleUrl: 'form-layout.css',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFormLayoutComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
}

`,Pa=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-form-layouts',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule, 
    MatRadioModule
  ],
  templateUrl: './form-layouts.component.html',
})
export class AppFormLayoutsComponent {
  constructor() {}

   foods: Food[] = [
    { value: 'steak-0', viewValue: 'One' },
    { value: 'pizza-1', viewValue: 'Two' },
    { value: 'tacos-2', viewValue: 'Three' },
    { value: 'tacos-3', viewValue: 'Four' },
  ];

  selectedFood = this.foods[2].value;
 
}

`,Aa=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-form-layouts',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule, 
    MatRadioModule, MatDatepickerModule
  ],
  templateUrl: './form-layouts.component.html',
  providers: [provideNativeDateAdapter()],
})
export class AppFormLayoutsComponent {
  constructor() {}

   foods: Food[] = [
    { value: 'steak-0', viewValue: 'One' },
    { value: 'pizza-1', viewValue: 'Two' },
    { value: 'tacos-2', viewValue: 'Three' },
    { value: 'tacos-3', viewValue: 'Four' },
  ];

  selectedFood = this.foods[2].value;
 
}

`,Na=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-form-layouts',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './form-layouts.component.html',
})
export class AppFormLayoutsComponent {
  constructor() {}
 
}

`,La=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-form-layouts',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    TablerIconsModule
  ],
  templateUrl: './form-layouts.component.html',
})
export class AppFormLayoutsComponent {
  constructor() {}
 
}

`,Ha=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-form-layouts',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    TablerIconsModule
  ],
  templateUrl: './form-layouts.component.html',
})
export class AppFormLayoutsComponent {
  constructor() {}
 
}

`;var Va=`    <form>
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Email</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
            <input matInput />
            <mat-hint> We'll never share your email with anyone else.</mat-hint>
        </mat-form-field>
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block m-t-12"
            >Password</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
            <input matInput type="password" />
        </mat-form-field>
        <!-- input -->
        <mat-checkbox color="primary">Check Me Out!</mat-checkbox>
        <div class="m-t-12">
            <button mat-flat-button color="primary">Submit</button>
        </div>
    </form>
`,Ya=`    <form>
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Error</mat-label>
        <mat-form-field appearance="outline" class="w-100">
            <input
            matInput
            placeholder="pat@example.com"
            [formControl]="email"
            (blur)="updateErrorMessage()"
            required
            />

            @if (email.invalid) {
            <mat-error>{{ errorMessage() }}</mat-error>
            }
        </mat-form-field>
    </form>
`,Ga=`    <form>
      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Default Text</mat-label>
      <mat-form-field appearance="outline" class="w-100" color="primary">
        <input matInput value="George deo" />
      </mat-form-field>

      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Email</mat-label>
      <mat-form-field appearance="outline" class="w-100" color="primary">
        <input matInput type="email" />
      </mat-form-field>

      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Password</mat-label>
      <mat-form-field appearance="outline" class="w-100" color="primary">
        <input matInput type="password" />
      </mat-form-field>

      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Textarea</mat-label>
      <mat-form-field appearance="outline" class="w-100" color="primary">
        <textarea matInput rows="5"></textarea>
      </mat-form-field>

      <div class="row">
        <!-- checkbox -->
        <div class="col-sm-6 col-lg-4">
          <mat-checkbox color="primary"
            >Check this custom checkbox</mat-checkbox
          >
          <mat-checkbox color="primary"
            >Check this custom checkbox</mat-checkbox
          >
          <mat-checkbox color="primary"
            >Check this custom checkbox</mat-checkbox
          >
        </div>
        <!-- radio -->
        <div class="col-sm-6 col-lg-4">
          <mat-radio-group aria-label="Select an option">
            <mat-radio-button color="primary" value="1"
              >Toggle this custom radio</mat-radio-button
            >
            <mat-radio-button color="primary" value="2"
              >Toggle this custom radio</mat-radio-button
            >
            <mat-radio-button color="primary" value="3"
              >Toggle this custom radio</mat-radio-button
            >
          </mat-radio-group>
        </div>
      </div>
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block m-t-12">Select</mat-label>
      <mat-form-field appearance="outline" class="w-100">
        <mat-select [(value)]="selectedFood">
          @for(option of foods; track option.value) {
          <mat-option [value]="option.value">{{ option.viewValue }}</mat-option>
          }
        </mat-select>
      </mat-form-field>

      <div class="m-t-12">
        <button mat-flat-button color="primary">Submit</button>
      </div>
    </form>
`,Ua=`    <div class="p-16 bg-light-primary rounded">
      <h5 class="f-s-14 text-primary d-flex align-items-center f-w-600">
        <i-tabler name="info-circle" class="icon-20 m-r-8 d-flex"></i-tabler
        >Person Info
      </h5>
    </div>

    <div class="row m-t-20">
      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">First Name</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>

        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
          >Select Gender</mat-label
        >
        <mat-form-field appearance="outline" class="w-100">
          <mat-select value="male">
            <mat-option value="male">Male</mat-option>
            <mat-option value="female">Female</mat-option>
            <mat-option value="other">Other</mat-option>
          </mat-select>
        </mat-form-field>

        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Membership</mat-label>
        <mat-radio-group aria-label="Select an option">
          <mat-radio-button value="1" color="primary">Free</mat-radio-button>
          <mat-radio-button value="2" color="primary">Paid</mat-radio-button>
        </mat-radio-group>
      </div>
      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Last Name</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>

        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
          >Date of Birth</mat-label
        >
        <mat-form-field appearance="outline" class="w-100">
          <input matInput [matDatepicker]="picker" />
          <mat-datepicker-toggle
            matIconSuffix
            [for]="picker"
          ></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </div>
    </div>

    <div class="p-16 bg-light-primary rounded m-y-20">
      <h5 class="f-s-14 text-primary d-flex align-items-center f-w-600">
        <i-tabler name="info-circle" class="icon-20 m-r-8 d-flex"></i-tabler
        >Address
      </h5>
    </div>

    <div class="row m-t-20">
      <div class="col-lg-12">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Street</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>
      </div>

      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">City</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>
      </div>

      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">State</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>
      </div>

      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Post Code</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>
      </div>

      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Country</mat-label>
        <mat-form-field appearance="outline" class="w-100">
          <mat-select value="male">
            <mat-option value="india">India</mat-option>
            <mat-option value="uk">United Kingdom</mat-option>
            <mat-option value="africa">Africa</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </div>

    <button mat-flat-button class="bg-error text-white">Cancel</button>
    <button mat-flat-button class="m-l-8">Submit</button>
`,Wa=`   <form>
      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Name</mat-label>
      <mat-form-field appearance="outline" class="w-100">
        <input matInput disabled />
      </mat-form-field>
      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Email</mat-label>
      <mat-form-field appearance="outline" class="w-100">
        <input matInput disabled type="email" />
      </mat-form-field>
      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Password</mat-label>
      <mat-form-field appearance="outline" class="w-100">
        <input matInput disabled type="password" />
      </mat-form-field>
      <button mat-raised-button disabled>Submit</button>
    </form>
`,ja=`   <form>
          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Username</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Username" />
            <mat-icon matPrefix>
              <i-tabler name="user" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Email</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Email" />
            <mat-icon matPrefix>
              <i-tabler name="mail" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Password</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Password" type="password" />
            <mat-icon matPrefix>
              <i-tabler name="lock" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
            >Confirm Password</mat-label
          >
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Confirm Password" type="password" />
            <mat-icon matPrefix>
              <i-tabler name="lock" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>
          <!-- input -->
          <mat-checkbox color="primary">Remember Me!</mat-checkbox>
          <div class="d-flex align-items-center gap-8 m-t-10 b-t-1 p-t-20">
            <button mat-flat-button color="primary">Submit</button>
            <button mat-flat-button class="bg-error text-white">Cancel</button>
          </div>
        </form>
`,za=`   <form>
          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Username</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Username" />
            <mat-icon matSuffix>
              <i-tabler name="user" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Email</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Email" />
            <mat-icon matSuffix>
              <i-tabler name="mail" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Password</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Password" type="password" />
            <mat-icon matSuffix>
              <i-tabler name="lock" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
            >Confirm Password</mat-label
          >
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Confirm Password" type="password" />
            <mat-icon matSuffix>
              <i-tabler name="lock" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>
          <!-- input -->
          <mat-checkbox color="primary">Remember Me!</mat-checkbox>

          <div
            class="d-flex align-items-center gap-8 m-t-10 b-t-1 p-t-20"
          >
            <button mat-flat-button color="primary">Submit</button>
            <button mat-flat-button class="bg-error text-white">Cancel</button>
          </div>
        </form>
`;var _n=(s,x)=>x.value;function Tn(s,x){if(s&1&&(e(0,"mat-error"),a(1),i()),s&2){let c=Ue();t(),p(c.errorMessage())}}function Cn(s,x){if(s&1&&(e(0,"mat-option",28),a(1),i()),s&2){let c=x.$implicit;r("value",c.value),t(),p(c.viewValue)}}var Ka=(()=>{class s{constructor(){this.email=new B("",[Me.required,Me.email]),this.errorMessage=Ge(""),this.foods=[{value:"steak-0",viewValue:"One"},{value:"pizza-1",viewValue:"Two"},{value:"tacos-2",viewValue:"Three"},{value:"tacos-3",viewValue:"Four"}],this.selectedFood=this.foods[2].value,this.codeForOrdinary=Va,this.codeForOrdinaryTs=Ba,this.codeForInputVariant=Ya,this.codeForInputVariantTs=Da,this.codeForDefaultForm=Ga,this.codeForDefaultFormTs=Pa,this.codeForBasicHeader=Ua,this.codeForBasicHeaderTs=Aa,this.codeForDisabledForm=Wa,this.codeForDisabledFormTs=Na,this.codeForLeftIcon=ja,this.codeForLeftIconTs=La,this.codeForRightIcon=za,this.codeForRightIconTs=Ha,Ot(this.email.statusChanges,this.email.valueChanges).pipe(ui()).subscribe(()=>this.updateErrorMessage())}updateErrorMessage(){this.email.hasError("required")?this.errorMessage.set("You must enter a value"):this.email.hasError("email")?this.errorMessage.set("Not a valid email"):this.errorMessage.set("")}static{this.\u0275fac=function(u){return new(u||s)}}static{this.\u0275cmp=E({type:s,selectors:[["app-form-layouts"]],features:[q([ue()])],decls:396,vars:248,consts:[["picker",""],[3,"isTitle"],["Ctitle",""],["output",""],[1,"f-s-14","f-w-600","m-b-8","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput",""],[1,"f-s-14","f-w-600","m-b-8","d-block","m-t-12"],["matInput","","type","password"],["color","primary"],[1,"m-t-12"],["mat-flat-button","","color","primary"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["appearance","outline",1,"w-100"],["matInput","","required","",3,"blur","placeholder","formControl"],["matInput","","value","George deo"],["matInput","","type","email"],["matInput","","rows","5"],[1,"row"],[1,"col-sm-6","col-lg-4"],["aria-label","Select an option"],["color","primary","value","1"],["color","primary","value","2"],["color","primary","value","3"],[3,"valueChange","value"],[3,"value"],[1,"p-16","bg-light-primary","rounded"],[1,"f-s-14","text-primary","d-flex","align-items-center","f-w-500"],["name","info-circle",1,"icon-20","m-r-8","d-flex"],[1,"row","m-t-20"],[1,"col-lg-6"],["matInput","","type","text"],["value","male"],["value","female"],["value","other"],["value","1","color","primary"],["value","2","color","primary"],["matInput","",3,"matDatepicker"],["matIconSuffix","",3,"for"],[1,"p-16","bg-light-primary","rounded","m-y-20"],[1,"col-lg-12"],["value","india"],["value","uk"],["value","africa"],["mat-flat-button","",1,"bg-error","text-white"],["mat-flat-button","",1,"m-l-8"],["matInput","","disabled",""],["matInput","","disabled","","type","email"],["matInput","","disabled","","type","password"],["mat-raised-button","","disabled",""],["matInput","",3,"placeholder"],["matPrefix",""],["name","user",1,"icon-20","d-flex"],["name","mail",1,"icon-20","d-flex"],["matInput","","type","password",3,"placeholder"],["name","lock",1,"icon-20","d-flex"],[1,"d-flex","align-items-center","gap-8","m-t-10","b-t-1","p-t-20"],["matSuffix",""]],template:function(u,m){if(u&1){let b=A();e(0,"app-code-view",1)(1,"h4",2),a(2),n(3,"translate"),i(),e(4,"div",3)(5,"form")(6,"mat-label",4),a(7),n(8,"translate"),i(),e(9,"mat-form-field",5),o(10,"input",6),e(11,"mat-hint"),a(12),n(13,"translate"),i()(),e(14,"mat-label",7),a(15),n(16,"translate"),i(),e(17,"mat-form-field",5),o(18,"input",8),i(),e(19,"mat-checkbox",9),a(20),n(21,"translate"),i(),e(22,"div",10)(23,"button",11),a(24),n(25,"translate"),i()()()(),e(26,"div",12)(27,"pre"),a(28,"      "),o(29,"code",13),a(30,`
    `),i()(),e(31,"div",14)(32,"pre"),a(33,"      "),o(34,"code",15),a(35,`
    `),i()()(),e(36,"app-code-view",1)(37,"h4",2),a(38),n(39,"translate"),i(),e(40,"div",3)(41,"mat-label",4),a(42),n(43,"translate"),i(),e(44,"mat-form-field",16)(45,"input",17),n(46,"translate"),S("blur",function(){return v(b),h(m.updateErrorMessage())}),i(),Ae(47,Tn,2,1,"mat-error"),i()(),e(48,"div",12)(49,"pre"),a(50,"      "),o(51,"code",13),a(52,`
    `),i()(),e(53,"div",14)(54,"pre"),a(55,"      "),o(56,"code",15),a(57,`
    `),i()()(),e(58,"app-code-view",1)(59,"h4",2),a(60),n(61,"translate"),i(),e(62,"div",3)(63,"form")(64,"mat-label",4),a(65),n(66,"translate"),i(),e(67,"mat-form-field",5),o(68,"input",18),i(),e(69,"mat-label",4),a(70),n(71,"translate"),i(),e(72,"mat-form-field",5),o(73,"input",19),i(),e(74,"mat-label",4),a(75),n(76,"translate"),i(),e(77,"mat-form-field",5),o(78,"input",8),i(),e(79,"mat-label",4),a(80),n(81,"translate"),i(),e(82,"mat-form-field",5),o(83,"textarea",20),i(),e(84,"div",21)(85,"div",22)(86,"mat-checkbox",9),a(87),n(88,"translate"),i(),e(89,"mat-checkbox",9),a(90),n(91,"translate"),i(),e(92,"mat-checkbox",9),a(93),n(94,"translate"),i()(),e(95,"div",22)(96,"mat-radio-group",23)(97,"mat-radio-button",24),a(98),n(99,"translate"),i(),e(100,"mat-radio-button",25),a(101),n(102,"translate"),i(),e(103,"mat-radio-button",26),a(104),n(105,"translate"),i()()()(),e(106,"mat-label",7),a(107),n(108,"translate"),i(),e(109,"mat-form-field",16)(110,"mat-select",27),Y("valueChange",function(M){return v(b),H(m.selectedFood,M)||(m.selectedFood=M),h(M)}),D(111,Cn,2,2,"mat-option",28,_n),i()(),e(113,"div",10)(114,"button",11),a(115),n(116,"translate"),i()()()(),e(117,"div",12)(118,"pre"),a(119,"      "),o(120,"code",13),a(121,`
    `),i()(),e(122,"div",14)(123,"pre"),a(124,"      "),o(125,"code",15),a(126,`
    `),i()()(),e(127,"app-code-view",1)(128,"h4",2),a(129),n(130,"translate"),i(),e(131,"div",3)(132,"div",29)(133,"h5",30),o(134,"i-tabler",31),a(135),n(136,"translate"),i()(),e(137,"div",32)(138,"div",33)(139,"mat-label",4),a(140),n(141,"translate"),i(),e(142,"mat-form-field",5),o(143,"input",34),i(),e(144,"mat-label",4),a(145),n(146,"translate"),i(),e(147,"mat-form-field",16)(148,"mat-select",35)(149,"mat-option",35),a(150),n(151,"translate"),i(),e(152,"mat-option",36),a(153),n(154,"translate"),i(),e(155,"mat-option",37),a(156),n(157,"translate"),i()()(),e(158,"mat-label",4),a(159),n(160,"translate"),i(),e(161,"mat-radio-group",23)(162,"mat-radio-button",38),a(163),n(164,"translate"),i(),e(165,"mat-radio-button",39),a(166),n(167,"translate"),i()()(),e(168,"div",33)(169,"mat-label",4),a(170),n(171,"translate"),i(),e(172,"mat-form-field",5),o(173,"input",34),i(),e(174,"mat-label",4),a(175),n(176,"translate"),i(),e(177,"mat-form-field",16),o(178,"input",40)(179,"mat-datepicker-toggle",41)(180,"mat-datepicker",null,0),i()()(),e(182,"div",42)(183,"h5",30),o(184,"i-tabler",31),a(185),n(186,"translate"),i()(),e(187,"div",32)(188,"div",43)(189,"mat-label",4),a(190),n(191,"translate"),i(),e(192,"mat-form-field",5),o(193,"input",34),i()(),e(194,"div",33)(195,"mat-label",4),a(196),n(197,"translate"),i(),e(198,"mat-form-field",5),o(199,"input",34),i()(),e(200,"div",33)(201,"mat-label",4),a(202),n(203,"translate"),i(),e(204,"mat-form-field",5),o(205,"input",34),i()(),e(206,"div",33)(207,"mat-label",4),a(208),n(209,"translate"),i(),e(210,"mat-form-field",5),o(211,"input",34),i()(),e(212,"div",33)(213,"mat-label",4),a(214),n(215,"translate"),i(),e(216,"mat-form-field",16)(217,"mat-select",35)(218,"mat-option",44),a(219),n(220,"translate"),i(),e(221,"mat-option",45),a(222),n(223,"translate"),i(),e(224,"mat-option",46),a(225),n(226,"translate"),i()()()()(),e(227,"button",47),a(228),n(229,"translate"),i(),e(230,"button",48),a(231),n(232,"translate"),i()(),e(233,"div",12)(234,"pre"),a(235,"      "),o(236,"code",13),a(237,`
    `),i()(),e(238,"div",14)(239,"pre"),a(240,"      "),o(241,"code",15),a(242,`
    `),i()()(),e(243,"app-code-view",1)(244,"h4",2),a(245),n(246,"translate"),i(),e(247,"div",3)(248,"form")(249,"mat-label",4),a(250),n(251,"translate"),i(),e(252,"mat-form-field",16),o(253,"input",49),i(),e(254,"mat-label",4),a(255),n(256,"translate"),i(),e(257,"mat-form-field",16),o(258,"input",50),i(),e(259,"mat-label",4),a(260),n(261,"translate"),i(),e(262,"mat-form-field",16),o(263,"input",51),i(),e(264,"button",52),a(265),n(266,"translate"),i()()(),e(267,"div",12)(268,"pre"),a(269,"      "),o(270,"code",13),a(271,`
    `),i()(),e(272,"div",14)(273,"pre"),a(274,"      "),o(275,"code",15),a(276,`
    `),i()()(),e(277,"div",21)(278,"div",33)(279,"app-code-view",1)(280,"h4",2),a(281),n(282,"translate"),i(),e(283,"div",3)(284,"form")(285,"mat-label",4),a(286),n(287,"translate"),i(),e(288,"mat-form-field",16),o(289,"input",53),n(290,"translate"),e(291,"mat-icon",54),o(292,"i-tabler",55),i()(),e(293,"mat-label",4),a(294),n(295,"translate"),i(),e(296,"mat-form-field",16),o(297,"input",53),n(298,"translate"),e(299,"mat-icon",54),o(300,"i-tabler",56),i()(),e(301,"mat-label",4),a(302),n(303,"translate"),i(),e(304,"mat-form-field",16),o(305,"input",57),n(306,"translate"),e(307,"mat-icon",54),o(308,"i-tabler",58),i()(),e(309,"mat-label",4),a(310),n(311,"translate"),i(),e(312,"mat-form-field",16),o(313,"input",57),n(314,"translate"),e(315,"mat-icon",54),o(316,"i-tabler",58),i()(),e(317,"mat-checkbox",9),a(318),n(319,"translate"),i(),e(320,"div",59)(321,"button",11),a(322),n(323,"translate"),i(),e(324,"button",47),a(325),n(326,"translate"),i()()()(),e(327,"div",12)(328,"pre"),a(329,"          "),o(330,"code",13),a(331,`
        `),i()(),e(332,"div",14)(333,"pre"),a(334,"          "),o(335,"code",15),a(336,`
        `),i()()()(),e(337,"div",33)(338,"app-code-view",1)(339,"h4",2),a(340),n(341,"translate"),i(),e(342,"div",3)(343,"form")(344,"mat-label",4),a(345),n(346,"translate"),i(),e(347,"mat-form-field",16),o(348,"input",53),n(349,"translate"),e(350,"mat-icon",60),o(351,"i-tabler",55),i()(),e(352,"mat-label",4),a(353),n(354,"translate"),i(),e(355,"mat-form-field",16),o(356,"input",53),n(357,"translate"),e(358,"mat-icon",60),o(359,"i-tabler",56),i()(),e(360,"mat-label",4),a(361),n(362,"translate"),i(),e(363,"mat-form-field",16),o(364,"input",57),n(365,"translate"),e(366,"mat-icon",60),o(367,"i-tabler",58),i()(),e(368,"mat-label",4),a(369),n(370,"translate"),i(),e(371,"mat-form-field",16),o(372,"input",57),n(373,"translate"),e(374,"mat-icon",60),o(375,"i-tabler",58),i()(),e(376,"mat-checkbox",9),a(377),n(378,"translate"),i(),e(379,"div",59)(380,"button",11),a(381),n(382,"translate"),i(),e(383,"button",47),a(384),n(385,"translate"),i()()()(),e(386,"div",12)(387,"pre"),a(388,"          "),o(389,"code",13),a(390,`
        `),i()(),e(391,"div",14)(392,"pre"),a(393,"          "),o(394,"code",15),a(395,`
        `),i()()()()()}if(u&2){let b=g(181);r("isTitle",!0),t(2),p(l(3,100,"FORMS.titles.ordinaryForm")),t(5),p(l(8,102,"FORMS.labels.email")),t(5),p(l(13,104,"FORMS.hints.neverShareEmail")),t(3),p(l(16,106,"FORMS.labels.password")),t(5),p(l(21,108,"FORMS.labels.checkMeOut")),t(4),p(l(25,110,"FORMS.buttons.submit")),t(5),r("highlight",m.codeForOrdinary),t(5),r("highlightAuto",m.codeForOrdinaryTs),t(2),r("isTitle",!0),t(2),p(l(39,112,"FORMS.titles.inputVariants")),t(4),p(l(43,114,"FORMS.labels.error")),t(3),r("placeholder",l(46,116,"FORMS.placeholders.patExample"))("formControl",m.email),t(2),Ne(m.email.invalid?47:-1),t(4),r("highlight",m.codeForInputVariant),t(5),r("highlightAuto",m.codeForInputVariantTs),t(2),r("isTitle",!0),t(2),p(l(61,118,"FORMS.titles.defaultForm")),t(5),p(l(66,120,"FORMS.labels.defaultText")),t(5),p(l(71,122,"FORMS.labels.email")),t(5),p(l(76,124,"FORMS.labels.password")),t(5),p(l(81,126,"FORMS.labels.textarea")),t(7),p(l(88,128,"FORMS.labels.checkThisCustomCheckbox")),t(3),p(l(91,130,"FORMS.labels.checkThisCustomCheckbox")),t(3),p(l(94,132,"FORMS.labels.checkThisCustomCheckbox")),t(5),p(l(99,134,"FORMS.labels.toggleThisCustomRadio")),t(3),p(l(102,136,"FORMS.labels.toggleThisCustomRadio")),t(3),p(l(105,138,"FORMS.labels.toggleThisCustomRadio")),t(3),p(l(108,140,"FORMS.labels.select")),t(3),V("value",m.selectedFood),t(),P(m.foods),t(4),p(l(116,142,"FORMS.buttons.submit")),t(5),r("highlight",m.codeForDefaultForm),t(5),r("highlightAuto",m.codeForDefaultFormTs),t(2),r("isTitle",!0),t(2),p(l(130,144,"FORMS.titles.basicHeaderForm")),t(6),d("",l(136,146,"FORMS.sections.personInfo")," "),t(5),p(l(141,148,"FORMS.labels.firstName")),t(5),p(l(146,150,"FORMS.labels.selectGender")),t(5),p(l(151,152,"FORMS.options.male")),t(3),p(l(154,154,"FORMS.options.female")),t(3),p(l(157,156,"FORMS.options.other")),t(3),p(l(160,158,"FORMS.labels.membership")),t(4),p(l(164,160,"FORMS.options.free")),t(3),p(l(167,162,"FORMS.options.paid")),t(4),p(l(171,164,"FORMS.labels.lastName")),t(5),p(l(176,166,"FORMS.labels.dateOfBirth")),t(3),r("matDatepicker",b),t(),r("for",b),t(6),d("",l(186,168,"FORMS.labels.address")," "),t(5),p(l(191,170,"FORMS.labels.street")),t(6),p(l(197,172,"FORMS.labels.city")),t(6),p(l(203,174,"FORMS.labels.state")),t(6),p(l(209,176,"FORMS.labels.postCode")),t(6),p(l(215,178,"FORMS.labels.country")),t(5),p(l(220,180,"FORMS.options.india")),t(3),p(l(223,182,"FORMS.options.unitedKingdom")),t(3),p(l(226,184,"FORMS.options.africa")),t(3),p(l(229,186,"FORMS.buttons.cancel")),t(3),p(l(232,188,"FORMS.buttons.submit")),t(5),r("highlight",m.codeForBasicHeader),t(5),r("highlightAuto",m.codeForBasicHeaderTs),t(2),r("isTitle",!0),t(2),p(l(246,190,"FORMS.titles.disabledForm")),t(5),p(l(251,192,"FORMS.labels.name")),t(5),p(l(256,194,"FORMS.labels.email")),t(5),p(l(261,196,"FORMS.labels.password")),t(5),p(l(266,198,"FORMS.buttons.submit")),t(5),r("highlight",m.codeForDisabledForm),t(5),r("highlightAuto",m.codeForDisabledFormTs),t(4),r("isTitle",!0),t(2),p(l(282,200,"FORMS.titles.formWithLeftIcon")),t(5),p(l(287,202,"FORMS.labels.username")),t(3),r("placeholder",l(290,204,"FORMS.labels.username")),t(5),p(l(295,206,"FORMS.labels.email")),t(3),r("placeholder",l(298,208,"FORMS.labels.email")),t(5),p(l(303,210,"FORMS.labels.password")),t(3),r("placeholder",l(306,212,"FORMS.labels.password")),t(5),p(l(311,214,"FORMS.labels.confirmPassword")),t(3),r("placeholder",l(314,216,"FORMS.labels.confirmPassword")),t(5),p(l(319,218,"FORMS.labels.rememberMe")),t(4),p(l(323,220,"FORMS.buttons.submit")),t(3),p(l(326,222,"FORMS.buttons.cancel")),t(5),r("highlight",m.codeForLeftIcon),t(5),r("highlightAuto",m.codeForLeftIconTs),t(3),r("isTitle",!0),t(2),p(l(341,224,"FORMS.titles.formWithRightIcon")),t(5),p(l(346,226,"FORMS.labels.username")),t(3),r("placeholder",l(349,228,"FORMS.labels.username")),t(5),p(l(354,230,"FORMS.labels.email")),t(3),r("placeholder",l(357,232,"FORMS.labels.email")),t(5),p(l(362,234,"FORMS.labels.password")),t(3),r("placeholder",l(365,236,"FORMS.labels.password")),t(5),p(l(370,238,"FORMS.labels.confirmPassword")),t(3),r("placeholder",l(373,240,"FORMS.labels.confirmPassword")),t(5),p(l(378,242,"FORMS.labels.rememberMe")),t(4),p(l(382,244,"FORMS.buttons.submit")),t(3),p(l(385,246,"FORMS.buttons.cancel")),t(5),r("highlight",m.codeForRightIcon),t(5),r("highlightAuto",m.codeForRightIconTs)}},dependencies:[F,ae,Te,me,pe,de,U,G,qe,Ke,_e,re,W,X,Z,Oe,L,Q,be,fe,ce,ye,ii,Gt,se,_,T,C,y,R,Ie,ne,O,J,ke,ze,N,Fe,I],encapsulation:2})}}return s})();var qa=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-form-vertical',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './form-vertical.component.html',
})
export class AppFormVerticalComponent {
  constructor() {}
 
}

`,Ja=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-form-vertical',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    TablerIconsModule
  ],
  templateUrl: './form-vertical.component.html',
})
export class AppFormVerticalComponent {
  constructor() {}
 
}

`,Xa=` import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-form-vertical',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    TablerIconsModule,
    MatDatepickerModule
  ],
  templateUrl: './form-vertical.component.html',
  providers: [provideNativeDateAdapter()],
})
export class AppFormVerticalComponent {
  constructor() {}
 
}

`,Za=` import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-form-vertical',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    TablerIconsModule,
    MatDatepickerModule
  ],
  templateUrl: './form-vertical.component.html',
  providers: [provideNativeDateAdapter()],
})
export class AppFormVerticalComponent {
  constructor() {}
 
}

`,bt=`  import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-form-horizontal',
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    TablerIconsModule,
    MatDatepickerModule
  ],
  templateUrl: './form-horizontal.component.html',
  providers: [provideNativeDateAdapter()],
})
export class AppFormHorizontalComponent {
  constructor() {}

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

  panelOpenState = false;
 
}

`;var Qa=`    <form>
          <div class="row">
            <div class="col-sm-12 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Name</mat-label>
            </div>
            <div class="col-sm-12">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="John Deo" />
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Company</mat-label
              >
            </div>
            <div class="col-sm-12">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="ACME Inc." />
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Email</mat-label>
            </div>
            <div class="col-sm-12">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="john.deo" type="email" />
                <span matTextSuffix>&#64;exmaple.com</span>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Phone No</mat-label
              >
            </div>
            <div class="col-sm-12">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="123 4561 123" />
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Message
              </mat-label>
            </div>
            <div class="col-sm-12">
              <mat-form-field appearance="outline" class="w-100">
                <textarea
                  rows="5"
                  matInput
                  placeholder="Hi, Do you have a moment to talk Deo ?"
                ></textarea>
              </mat-form-field>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-sm-12">
              <button mat-flat-button>Send</button>
            </div>
          </div>
        </form>
`,$a=`    <form>
          <div class="row">
            <div class="col-sm-12 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Name</mat-label>
            </div>
            <div class="col-sm-12">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="John Deo" />
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="user" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Company</mat-label
              >
            </div>
            <div class="col-sm-12">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="ACME Inc." />
                <mat-icon matPrefix class="op-5">
                  <i-tabler
                    name="building-arch"
                    class="icon-20 d-flex"
                  ></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Email</mat-label>
            </div>
            <div class="col-sm-12">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="john.deo" type="email" />
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="mail" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Phone No</mat-label
              >
            </div>
            <div class="col-sm-12">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="123 4561 123" />
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="phone" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Message
              </mat-label>
            </div>
            <div class="col-sm-12">
              <mat-form-field appearance="outline" class="w-100">
                <textarea
                  rows="5"
                  matInput
                  placeholder="Hi, Do you have a moment to talk Deo ?"
                ></textarea>
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="message-2" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-sm-12">
              <button mat-flat-button>Send</button>
            </div>
          </div>
        </form>
`,en=`      <mat-card>
          <mat-card-content>
            <h4 class="f-s-16 m-0 f-w-600 m-b-16">Account Details</h4>

            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Username
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Email</mat-label
                >
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="john.deo" type="email" />
                  <span matTextSuffix>&#64;exmaple.com</span>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Password
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [type]="hide ? 'password' : 'text'" />
                  <button
                    mat-icon-button
                    matSuffix
                    (click)="hide = !hide"
                    [attr.aria-label]="'Hide password'"
                    [attr.aria-pressed]="hide"
                  >
                    <mat-icon class="op-5">{{
                      hide ? "visibility_off" : "visibility"
                    }}</mat-icon>
                  </button>
                </mat-form-field>
              </div>
            </div>
          </mat-card-content>
          <mat-card-content class="b-t-1">
            <h4 class="f-s-16 m-0 f-w-600 m-b-16">Personal Info</h4>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Full Name
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Country
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <mat-select value="0">
                    <mat-option value="0"></mat-option>
                    <mat-option value="1">India</mat-option>
                    <mat-option value="2">Africa</mat-option>
                    <mat-option value="3">United Kingdom</mat-option>
                  </mat-select>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Birth Date
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [matDatepicker]="birthpicker" />
                  <mat-datepicker-toggle
                    matIconSuffix
                    [for]="birthpicker"
                  ></mat-datepicker-toggle>
                  <mat-datepicker #birthpicker></mat-datepicker>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Phone no
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="123 4567 123" />
                </mat-form-field>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-sm-12">
                <button mat-flat-button>Submit</button>
                <button mat-flat-button class="bg-error text-white m-l-8">
                  Cancel
                </button>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
`,tn=`      <mat-card>
          <mat-card-content>
            <h4 class="f-s-16 m-0 f-w-600 m-b-16">Account Details</h4>
    
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center justify-content-end">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Username
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center justify-content-end">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16">Email</mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="john.deo" type="email" />
                  <span matTextSuffix>&#64;exmaple.com</span>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center justify-content-end">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Password
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [type]="alignhide ? 'password' : 'text'" />
                  <button
                    mat-icon-button
                    matSuffix
                    (click)="alignhide = !alignhide"
                    [attr.aria-label]="'Hide password'"
                    [attr.aria-pressed]="alignhide"
                  >
                    <mat-icon class="op-5">{{
                      alignhide ? "visibility_off" : "visibility"
                    }}</mat-icon>
                  </button>
                </mat-form-field>
              </div>
            </div>
          </mat-card-content>
          <mat-card-content class="b-t-1">
            <h4 class="f-s-16 m-0 f-w-600 m-b-16">Personal Info</h4>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center justify-content-end">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Full Name
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center justify-content-end">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Country
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <mat-select value="0">
                    <mat-option value="0"></mat-option>
                    <mat-option value="1">India</mat-option>
                    <mat-option value="2">Africa</mat-option>
                    <mat-option value="3">United Kingdom</mat-option>
                  </mat-select>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center justify-content-end">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Birth Date
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [matDatepicker]="birthpicker2" />
                  <mat-datepicker-toggle
                    matIconSuffix
                    [for]="birthpicker2"
                  ></mat-datepicker-toggle>
                  <mat-datepicker #birthpicker2></mat-datepicker>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center justify-content-end">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Phone no
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="123 4567 123" />
                </mat-form-field>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-sm-12">
                <button mat-flat-button>Submit</button>
                <button mat-flat-button class="bg-error text-white m-l-8">Cancel</button>
              </div>
            </div>
          </mat-card-content>
         </mat-card>
`,an=`      <mat-accordion>
      <mat-expansion-panel
        class="cardWithShadow"
        [expanded]="step === 0"
        (opened)="panelOpenState = true"
        (closed)="panelOpenState = false"
        hideToggle
      >
        <mat-expansion-panel-header>
          <mat-panel-title class="f-w-600 f-s-16"
            >Delivery Address
          </mat-panel-title>
        </mat-expansion-panel-header>

        <div class="row">
          <div class="col-lg-6 col-sm-6">
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Full Name
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Address
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="150 Foot Ring Road" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >City
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="Jackson" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Address Type
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-radio-group aria-label="Select an option" class="m-t-8">
                  <mat-radio-button value="1" color="primary"
                    >Home (All day delivery)</mat-radio-button
                  >
                  <mat-radio-button value="2" color="primary"
                    >Office (Delivery between 10 AM - 5 PM)</mat-radio-button
                  >
                </mat-radio-group>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Phone
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="123 4561 213" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Pincode
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="630012" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                  >Landmark
                </mat-label>
              </div>
              <div class="col-sm-12">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="Nr. wall street" />
                </mat-form-field>
              </div>
            </div>
          </div>
        </div>

        <mat-action-row>
          <button mat-flat-button (click)="nextStep()">Next</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel
        class="cardWithShadow"
        [expanded]="step === 1"
        (opened)="panelOpenState = true"
        (closed)="panelOpenState = false"
        hideToggle
      >
        <mat-expansion-panel-header>
          <mat-panel-title class="f-w-600 f-s-16"
            >Delivery Options
          </mat-panel-title>
        </mat-expansion-panel-header>

        <mat-radio-group aria-label="Select an option" class="m-t-8">
          <mat-radio-button value="1" color="primary"
            >Standard 3-5 Days</mat-radio-button
          >
          <mat-radio-button value="2" color="primary">Express</mat-radio-button>
          <mat-radio-button value="3" color="primary"
            >Overnight</mat-radio-button
          >
        </mat-radio-group>

        <mat-action-row>
          <button
            mat-flat-button
            class="bg-error text-white"
            (click)="prevStep()"
          >
            Previous
          </button>
          <button mat-flat-button (click)="nextStep()">Next</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel
        class="cardWithShadow"
        [expanded]="step === 2"
        (opened)="panelOpenState = true"
        (closed)="panelOpenState = false"
        hideToggle
      >
        <mat-expansion-panel-header>
          <mat-panel-title class="f-w-600 f-s-16"
            >Payment Method
          </mat-panel-title>
        </mat-expansion-panel-header>

        <mat-radio-group aria-label="Select an option" class="m-t-8">
          <mat-radio-button value="1" color="primary"
            >Credit/Debit/ATM Card
          </mat-radio-button>
          <mat-radio-button value="2" color="primary"
            >Cash on Delivery</mat-radio-button
          >
        </mat-radio-group>

        <div class="row m-t-12">
          <div class="col-sm-9">
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
              >Card Number</mat-label
            >
            <mat-form-field appearance="outline" class="w-100" color="primary">
              <input matInput type="text" placeholder="123 200 540 620" />
            </mat-form-field>
            <div class="row m-t-12">
              <div class="col-sm-6">
                <!-- input -->
                <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Name</mat-label>
                <mat-form-field
                  appearance="outline"
                  class="w-100"
                  color="primary"
                >
                  <input matInput type="text" placeholder="John Deo" />
                </mat-form-field>
              </div>
              <div class="col-sm-3">
                <!-- input -->
                <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
                  >Exp. Date</mat-label
                >
                <mat-form-field
                  appearance="outline"
                  class="w-100"
                  color="primary"
                >
                  <input matInput type="text" placeholder="MM/YY" />
                </mat-form-field>
              </div>
              <div class="col-sm-3">
                <!-- input -->
                <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
                  >CCV Code</mat-label
                >
                <mat-form-field
                  appearance="outline"
                  class="w-100"
                  color="primary"
                >
                  <input matInput type="text" placeholder="2501" />
                  <mat-icon matSuffix class="op-5">
                    <i-tabler
                      name="info-square-rounded"
                      class="icon-20 d-flex"
                    ></i-tabler>
                  </mat-icon>
                </mat-form-field>
              </div>
            </div>
          </div>
        </div>

        <mat-action-row>
          <button
            mat-flat-button
            class="bg-error text-white"
            (click)="prevStep()"
          >
            Previous
          </button>
          <button mat-flat-button (click)="nextStep()">End</button>
        </mat-action-row>
      </mat-expansion-panel>
    </mat-accordion>
`,nn=`      <mat-tab-group
      mat-stretch-tabs="false"
      mat-align-tabs="start"
      animationDuration="0ms"
    >
      <mat-tab label="Personal Info">
        <mat-card-content>
          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >First Name
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput placeholder="John" />
                  </mat-form-field>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Country
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <mat-select value="1">
                      <mat-option value="1"></mat-option>
                      <mat-option value="in">India</mat-option>
                      <mat-option value="fr">France</mat-option>
                      <mat-option value="af">Africa</mat-option>
                    </mat-select>
                  </mat-form-field>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Birth Date
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput [matDatepicker]="birthpicker3" />
                    <mat-datepicker-toggle
                      matIconSuffix
                      [for]="birthpicker3"
                    ></mat-datepicker-toggle>
                    <mat-datepicker #birthpicker3></mat-datepicker>
                  </mat-form-field>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Last Name
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput placeholder="Deo" />
                  </mat-form-field>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Language
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <mat-select value="en">
                      <mat-option value="en">English</mat-option>
                      <mat-option value="fr">French</mat-option>
                    </mat-select>
                  </mat-form-field>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Phone no
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput placeholder="123 4560 123" />
                  </mat-form-field>
                </div>
              </div>
            </div>
          </div>
          <div class="m-t-12 text-right">
            <button mat-flat-button>Submit</button>
            <button mat-flat-button class="bg-error text-white m-l-8">
              Cancel
            </button>
          </div>
        </mat-card-content>
      </mat-tab>
      <mat-tab label="Account Details">
        <mat-card-content>
          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Username
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput placeholder="John.Deo" />
                  </mat-form-field>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Password
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput [type]="hide2 ? 'password' : 'text'" />
                    <button
                      mat-icon-button
                      matSuffix
                      (click)="hide2 = !hide2"
                      [attr.aria-label]="'Hide password'"
                      [attr.aria-pressed]="hide2"
                    >
                      <mat-icon class="op-5">{{
                        hide2 ? "visibility_off" : "visibility"
                      }}</mat-icon>
                    </button>
                  </mat-form-field>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Email
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput placeholder="john.deo" />
                    <span matTextSuffix>&#64;exmaple.com</span>
                  </mat-form-field>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Confirm
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput [type]="hide ? 'password' : 'text'" />
                    <button
                      mat-icon-button
                      matSuffix
                      (click)="conhide = !conhide"
                      [attr.aria-label]="'Hide password'"
                      [attr.aria-pressed]="conhide"
                    >
                      <mat-icon class="op-5">{{
                        conhide ? "visibility_off" : "visibility"
                      }}</mat-icon>
                    </button>
                  </mat-form-field>
                </div>
              </div>
            </div>
          </div>
          <div class="m-t-12 text-right">
            <button mat-flat-button>Submit</button>
            <button mat-flat-button class="bg-error text-white m-l-8">
              Cancel
            </button>
          </div>
        </mat-card-content>
      </mat-tab>
      <mat-tab label="Social Links">
        <mat-card-content>
          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Twitter
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput placeholder="https://twitter.com/abc" />
                  </mat-form-field>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Facebook
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput placeholder="https://facebook.com/abc" />
                  </mat-form-field>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Google
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput placeholder="https://plus.google.com/abc" />
                  </mat-form-field>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Linkedin
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput placeholder="https://linkedin.com/abc" />
                  </mat-form-field>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Instagram
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput placeholder="https://instagram.com/abc" />
                  </mat-form-field>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                    >Quora
                  </mat-label>
                </div>
                <div class="col-sm-12">
                  <mat-form-field appearance="outline" class="w-100">
                    <input matInput placeholder="https://quora.com/abc" />
                  </mat-form-field>
                </div>
              </div>
            </div>
          </div>
          <div class="m-t-12 text-right">
            <button mat-flat-button>Submit</button>
            <button mat-flat-button class="bg-error text-white m-l-8">
              Cancel
            </button>
          </div>
        </mat-card-content>
      </mat-tab>
    </mat-tab-group>
`;var ln=(()=>{class s{constructor(){this.hide=!0,this.hide2=!0,this.conhide=!0,this.alignhide=!0,this.step=0,this.panelOpenState=!1,this.codeForBasicLayout=Qa,this.codeForBasicLayoutTs=qa,this.codeForBasicwithIcons=$a,this.codeForBasicwithIconsTs=Ja,this.codeForFormSeparator=en,this.codeForFormSeparatorTs=Xa,this.codeForFormLabelAlign=tn,this.codeForFormLabelAlignTs=Za,this.codeForCollpaseForm=an,this.codeForCollpaseFormTs=bt,this.codeForFormwithTabs=nn,this.codeForFormwithTabsTs=bt}setStep(c){this.step=c}nextStep(){this.step++}prevStep(){this.step--}static{this.\u0275fac=function(u){return new(u||s)}}static{this.\u0275cmp=E({type:s,selectors:[["app-form-vertical"]],features:[q([ue()])],decls:727,vars:362,consts:[["birthpicker",""],["birthpicker2",""],["birthpicker3",""],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"col-sm-12","d-flex","align-items-center"],[1,"f-s-14","f-w-600","d-block","m-b-16"],[1,"col-sm-12"],["appearance","outline",1,"w-100"],["matInput","","placeholder","John Deo"],["matInput","","placeholder","ACME Inc."],["matInput","","placeholder","john.deo","type","email"],["matTextSuffix",""],["matInput","","placeholder","123 4561 123"],["rows","5","matInput","",3,"placeholder"],[1,"row","justify-content-end"],["mat-flat-button",""],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matPrefix","",1,"op-5"],["name","user",1,"icon-20","d-flex"],["name","building-arch",1,"icon-20","d-flex"],["name","mail",1,"icon-20","d-flex"],["name","phone",1,"icon-20","d-flex"],["name","message-2",1,"icon-20","d-flex"],[1,"f-s-16","m-0","f-w-600","m-b-16"],["matInput","",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],[1,"op-5"],[1,"b-t-1"],["value","0"],["value","1"],["value","2"],["value","3"],["matInput","",3,"matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","placeholder","123 4567 123"],["mat-flat-button","",1,"bg-error","text-white","m-l-8"],[1,"col-sm-12","d-flex","align-items-center","justify-content-end"],["matInput","",3,"placeholder"],["matInput","","type","email",3,"placeholder"],[1,"m-y-24"],["hideToggle","",1,"cardWithShadow",3,"opened","closed","expanded"],[1,"f-w-600","f-s-16"],[1,"col-lg-6","col-sm-6"],["matInput","","placeholder","150 Foot Ring Road"],["matInput","","placeholder","Jackson"],["aria-label","Select an option",1,"m-t-8"],["value","1","color","primary"],["value","2","color","primary"],["matInput","","placeholder","123 4561 213"],["matInput","","placeholder","630012"],["matInput","","placeholder","Nr. wall street"],["mat-flat-button","",3,"click"],["value","3","color","primary"],["mat-flat-button","",1,"bg-error","text-white",3,"click"],[1,"row","m-t-12"],[1,"col-sm-9"],[1,"f-s-14","f-w-600","m-b-8","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","type","text","placeholder","123 200 540 620"],[1,"col-sm-6"],["matInput","","type","text","placeholder","John Deo"],[1,"col-sm-3"],["matInput","","type","text","placeholder","MM/YY"],["matInput","","type","text","placeholder","2501"],["matSuffix","",1,"op-5"],["name","info-square-rounded",1,"icon-20","d-flex"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","0ms"],[3,"label"],["matInput","","placeholder","John"],["value","in"],["value","fr"],["value","af"],["matInput","","placeholder","Deo"],["value","en"],["matInput","","placeholder","123 4560 123"],[1,"m-t-12","text-right"],["matInput","","placeholder","John.Deo"],["matInput","","placeholder","john.deo"],["matInput","","placeholder","https://twitter.com/abc"],["matInput","","placeholder","https://facebook.com/abc"],["matInput","","placeholder","https://plus.google.com/abc"],["matInput","","placeholder","https://linkedin.com/abc"],["matInput","","placeholder","https://instagram.com/abc"],["matInput","","placeholder","https://quora.com/abc"]],template:function(u,m){if(u&1){let b=A();e(0,"div",3)(1,"div",4)(2,"app-code-view",5)(3,"h4",6),a(4),n(5,"translate"),i(),e(6,"div",7)(7,"form")(8,"div",3)(9,"div",8)(10,"mat-label",9),a(11),n(12,"translate"),i()(),e(13,"div",10)(14,"mat-form-field",11),o(15,"input",12),i()()(),e(16,"div",3)(17,"div",8)(18,"mat-label",9),a(19),n(20,"translate"),i()(),e(21,"div",10)(22,"mat-form-field",11),o(23,"input",13),i()()(),e(24,"div",3)(25,"div",8)(26,"mat-label",9),a(27),n(28,"translate"),i()(),e(29,"div",10)(30,"mat-form-field",11),o(31,"input",14),e(32,"span",15),a(33,"@exmaple.com"),i()()()(),e(34,"div",3)(35,"div",8)(36,"mat-label",9),a(37),n(38,"translate"),i()(),e(39,"div",10)(40,"mat-form-field",11),o(41,"input",16),i()()(),e(42,"div",3)(43,"div",8)(44,"mat-label",9),a(45),n(46,"translate"),i()(),e(47,"div",10)(48,"mat-form-field",11),o(49,"textarea",17),n(50,"translate"),i()()(),e(51,"div",18)(52,"div",10)(53,"button",19),a(54),n(55,"translate"),i()()()()(),e(56,"div",20)(57,"pre"),a(58,"          "),o(59,"code",21),a(60,`
        `),i()(),e(61,"div",22)(62,"pre"),a(63,"          "),o(64,"code",23),a(65,`
        `),i()()()(),e(66,"div",4)(67,"app-code-view",5)(68,"h4",6),a(69),n(70,"translate"),i(),e(71,"div",7)(72,"form")(73,"div",3)(74,"div",8)(75,"mat-label",9),a(76),n(77,"translate"),i()(),e(78,"div",10)(79,"mat-form-field",11),o(80,"input",12),e(81,"mat-icon",24),o(82,"i-tabler",25),i()()()(),e(83,"div",3)(84,"div",8)(85,"mat-label",9),a(86),n(87,"translate"),i()(),e(88,"div",10)(89,"mat-form-field",11),o(90,"input",13),e(91,"mat-icon",24),o(92,"i-tabler",26),i()()()(),e(93,"div",3)(94,"div",8)(95,"mat-label",9),a(96),n(97,"translate"),i()(),e(98,"div",10)(99,"mat-form-field",11)(100,"mat-icon",24),o(101,"i-tabler",27),i()()()(),e(102,"div",3)(103,"div",8)(104,"mat-label",9),a(105),n(106,"translate"),i()(),e(107,"div",10)(108,"mat-form-field",11),o(109,"input",16),e(110,"mat-icon",24),o(111,"i-tabler",28),i()()()(),e(112,"div",3)(113,"div",8)(114,"mat-label",9),a(115),n(116,"translate"),i()(),e(117,"div",10)(118,"mat-form-field",11),o(119,"textarea",17),n(120,"translate"),e(121,"mat-icon",24),o(122,"i-tabler",29),i()()()(),e(123,"div",18)(124,"div",10)(125,"button",19),a(126),n(127,"translate"),i()()()()(),e(128,"div",20)(129,"pre"),a(130,"          "),o(131,"code",21),a(132,`
        `),i()(),e(133,"div",22)(134,"pre"),a(135,"          "),o(136,"code",23),a(137,`
        `),i()()()(),e(138,"div",4)(139,"app-code-view",5)(140,"h4",6),a(141),n(142,"translate"),i(),e(143,"div",7)(144,"mat-card")(145,"mat-card-content")(146,"h4",30),a(147),n(148,"translate"),i(),e(149,"div",3)(150,"div",8)(151,"mat-label",9),a(152),n(153,"translate"),i()(),e(154,"div",10)(155,"mat-form-field",11),o(156,"input",12),i()()(),e(157,"div",3)(158,"div",8)(159,"mat-label",9),a(160),n(161,"translate"),i()(),e(162,"div",10)(163,"mat-form-field",11),o(164,"input",14),e(165,"span",15),a(166,"@exmaple.com"),i()()()(),e(167,"div",3)(168,"div",8)(169,"mat-label",9),a(170),n(171,"translate"),i()(),e(172,"div",10)(173,"mat-form-field",11),o(174,"input",31),e(175,"button",32),S("click",function(){return v(b),h(m.hide=!m.hide)}),e(176,"mat-icon",33),a(177),i()()()()()(),e(178,"mat-card-content",34)(179,"h4",30),a(180),n(181,"translate"),i(),e(182,"div",3)(183,"div",8)(184,"mat-label",9),a(185),n(186,"translate"),i()(),e(187,"div",10)(188,"mat-form-field",11),o(189,"input",12),i()()(),e(190,"div",3)(191,"div",8)(192,"mat-label",9),a(193),n(194,"translate"),i()(),e(195,"div",10)(196,"mat-form-field",11)(197,"mat-select",35),o(198,"mat-option",35),e(199,"mat-option",36),a(200),n(201,"translate"),i(),e(202,"mat-option",37),a(203),n(204,"translate"),i(),e(205,"mat-option",38),a(206),n(207,"translate"),i()()()()(),e(208,"div",3)(209,"div",8)(210,"mat-label",9),a(211),n(212,"translate"),i()(),e(213,"div",10)(214,"mat-form-field",11),o(215,"input",39)(216,"mat-datepicker-toggle",40)(217,"mat-datepicker",null,0),i()()(),e(219,"div",3)(220,"div",8)(221,"mat-label",9),a(222),n(223,"translate"),i()(),e(224,"div",10)(225,"mat-form-field",11),o(226,"input",41),i()()(),e(227,"div",18)(228,"div",10)(229,"button",19),a(230),n(231,"translate"),i(),e(232,"button",42),a(233),n(234,"translate"),i()()()()()(),e(235,"div",20)(236,"pre"),a(237,"          "),o(238,"code",21),a(239,`
        `),i()(),e(240,"div",22)(241,"pre"),a(242,"          "),o(243,"code",23),a(244,`
        `),i()()()(),e(245,"div",4)(246,"app-code-view",5)(247,"h4",6),a(248),n(249,"translate"),i(),e(250,"div",7)(251,"mat-card")(252,"mat-card-content")(253,"h4",30),a(254),n(255,"translate"),i(),e(256,"div",3)(257,"div",43)(258,"mat-label",9),a(259),n(260,"translate"),i()(),e(261,"div",10)(262,"mat-form-field",11),o(263,"input",44),n(264,"translate"),i()()(),e(265,"div",3)(266,"div",43)(267,"mat-label",9),a(268),n(269,"translate"),i()(),e(270,"div",10)(271,"mat-form-field",11),o(272,"input",45),n(273,"translate"),e(274,"span",15),a(275,"@exmaple.com"),i()()()(),e(276,"div",3)(277,"div",43)(278,"mat-label",9),a(279),n(280,"translate"),i()(),e(281,"div",10)(282,"mat-form-field",11),o(283,"input",31),e(284,"button",32),S("click",function(){return v(b),h(m.alignhide=!m.alignhide)}),e(285,"mat-icon",33),a(286),i()()()()()(),e(287,"mat-card-content",34)(288,"h4",30),a(289),n(290,"translate"),i(),e(291,"div",3)(292,"div",43)(293,"mat-label",9),a(294),n(295,"translate"),i()(),e(296,"div",10)(297,"mat-form-field",11),o(298,"input",44),n(299,"translate"),i()()(),e(300,"div",3)(301,"div",43)(302,"mat-label",9),a(303),n(304,"translate"),i()(),e(305,"div",10)(306,"mat-form-field",11)(307,"mat-select",35),o(308,"mat-option",35),e(309,"mat-option",36),a(310),n(311,"translate"),i(),e(312,"mat-option",37),a(313),n(314,"translate"),i(),e(315,"mat-option",38),a(316),n(317,"translate"),i()()()()(),e(318,"div",3)(319,"div",43)(320,"mat-label",9),a(321),n(322,"translate"),i()(),e(323,"div",10)(324,"mat-form-field",11),o(325,"input",39)(326,"mat-datepicker-toggle",40)(327,"mat-datepicker",null,1),i()()(),e(329,"div",3)(330,"div",43)(331,"mat-label",9),a(332),n(333,"translate"),i()(),e(334,"div",10)(335,"mat-form-field",11),o(336,"input",41),i()()(),e(337,"div",18)(338,"div",10)(339,"button",19),a(340),n(341,"translate"),i(),e(342,"button",42),a(343),n(344,"translate"),i()()()()()(),e(345,"div",20)(346,"pre"),a(347,"          "),o(348,"code",21),a(349,`
        `),i()(),e(350,"div",22)(351,"pre"),a(352,"          "),o(353,"code",23),a(354,`
        `),i()()()()(),e(355,"h4",46),a(356),n(357,"translate"),i(),e(358,"app-code-view")(359,"div",7)(360,"mat-accordion")(361,"mat-expansion-panel",47),S("opened",function(){return v(b),h(m.panelOpenState=!0)})("closed",function(){return v(b),h(m.panelOpenState=!1)}),e(362,"mat-expansion-panel-header")(363,"mat-panel-title",48),a(364),n(365,"translate"),i()(),e(366,"div",3)(367,"div",49)(368,"div",3)(369,"div",8)(370,"mat-label",9),a(371),n(372,"translate"),i()(),e(373,"div",10)(374,"mat-form-field",11),o(375,"input",12),i()()(),e(376,"div",3)(377,"div",8)(378,"mat-label",9),a(379),n(380,"translate"),i()(),e(381,"div",10)(382,"mat-form-field",11),o(383,"input",50),i()()(),e(384,"div",3)(385,"div",8)(386,"mat-label",9),a(387),n(388,"translate"),i()(),e(389,"div",10)(390,"mat-form-field",11),o(391,"input",51),i()()(),e(392,"div",3)(393,"div",8)(394,"mat-label",9),a(395),n(396,"translate"),i()(),e(397,"div",10)(398,"mat-radio-group",52)(399,"mat-radio-button",53),a(400),n(401,"translate"),i(),e(402,"mat-radio-button",54),a(403),n(404,"translate"),i()()()()(),e(405,"div",49)(406,"div",3)(407,"div",8)(408,"mat-label",9),a(409),n(410,"translate"),i()(),e(411,"div",10)(412,"mat-form-field",11),o(413,"input",55),i()()(),e(414,"div",3)(415,"div",8)(416,"mat-label",9),a(417),n(418,"translate"),i()(),e(419,"div",10)(420,"mat-form-field",11),o(421,"input",56),i()()(),e(422,"div",3)(423,"div",8)(424,"mat-label",9),a(425),n(426,"translate"),i()(),e(427,"div",10)(428,"mat-form-field",11),o(429,"input",57),i()()()()(),e(430,"mat-action-row")(431,"button",58),S("click",function(){return v(b),h(m.nextStep())}),a(432),n(433,"translate"),i()()(),e(434,"mat-expansion-panel",47),S("opened",function(){return v(b),h(m.panelOpenState=!0)})("closed",function(){return v(b),h(m.panelOpenState=!1)}),e(435,"mat-expansion-panel-header")(436,"mat-panel-title",48),a(437),n(438,"translate"),i()(),e(439,"mat-radio-group",52)(440,"mat-radio-button",53),a(441),n(442,"translate"),i(),e(443,"mat-radio-button",54),a(444),n(445,"translate"),i(),e(446,"mat-radio-button",59),a(447),n(448,"translate"),i()(),e(449,"mat-action-row")(450,"button",60),S("click",function(){return v(b),h(m.prevStep())}),a(451),n(452,"translate"),i(),e(453,"button",58),S("click",function(){return v(b),h(m.nextStep())}),a(454),n(455,"translate"),i()()(),e(456,"mat-expansion-panel",47),S("opened",function(){return v(b),h(m.panelOpenState=!0)})("closed",function(){return v(b),h(m.panelOpenState=!1)}),e(457,"mat-expansion-panel-header")(458,"mat-panel-title",48),a(459),n(460,"translate"),i()(),e(461,"mat-radio-group",52)(462,"mat-radio-button",53),a(463),n(464,"translate"),i(),e(465,"mat-radio-button",54),a(466),n(467,"translate"),i()(),e(468,"div",61)(469,"div",62)(470,"mat-label",63),a(471),n(472,"translate"),i(),e(473,"mat-form-field",64),o(474,"input",65),i(),e(475,"div",61)(476,"div",66)(477,"mat-label",63),a(478),n(479,"translate"),i(),e(480,"mat-form-field",64),o(481,"input",67),i()(),e(482,"div",68)(483,"mat-label",63),a(484),n(485,"translate"),i(),e(486,"mat-form-field",64),o(487,"input",69),i()(),e(488,"div",68)(489,"mat-label",63),a(490),n(491,"translate"),i(),e(492,"mat-form-field",64),o(493,"input",70),e(494,"mat-icon",71),o(495,"i-tabler",72),i()()()()()(),e(496,"mat-action-row")(497,"button",60),S("click",function(){return v(b),h(m.prevStep())}),a(498),n(499,"translate"),i(),e(500,"button",58),S("click",function(){return v(b),h(m.nextStep())}),a(501),n(502,"translate"),i()()()()(),e(503,"div",20)(504,"pre"),a(505,"      "),o(506,"code",21),a(507,`
    `),i()(),e(508,"div",22)(509,"pre"),a(510,"      "),o(511,"code",23),a(512,`
    `),i()()(),e(513,"h4",46),a(514),n(515,"translate"),i(),e(516,"app-code-view")(517,"div",7)(518,"mat-tab-group",73)(519,"mat-tab",74),n(520,"translate"),e(521,"mat-card-content")(522,"div",3)(523,"div",4)(524,"div",3)(525,"div",8)(526,"mat-label",9),a(527),n(528,"translate"),i()(),e(529,"div",10)(530,"mat-form-field",11),o(531,"input",75),i()()(),e(532,"div",3)(533,"div",8)(534,"mat-label",9),a(535),n(536,"translate"),i()(),e(537,"div",10)(538,"mat-form-field",11)(539,"mat-select",36),o(540,"mat-option",36),e(541,"mat-option",76),a(542),n(543,"translate"),i(),e(544,"mat-option",77),a(545),n(546,"translate"),i(),e(547,"mat-option",78),a(548),n(549,"translate"),i()()()()(),e(550,"div",3)(551,"div",8)(552,"mat-label",9),a(553),n(554,"translate"),i()(),e(555,"div",10)(556,"mat-form-field",11),o(557,"input",39)(558,"mat-datepicker-toggle",40)(559,"mat-datepicker",null,2),i()()()(),e(561,"div",4)(562,"div",3)(563,"div",8)(564,"mat-label",9),a(565),n(566,"translate"),i()(),e(567,"div",10)(568,"mat-form-field",11),o(569,"input",79),i()()(),e(570,"div",3)(571,"div",8)(572,"mat-label",9),a(573),n(574,"translate"),i()(),e(575,"div",10)(576,"mat-form-field",11)(577,"mat-select",80)(578,"mat-option",80),a(579),n(580,"translate"),i(),e(581,"mat-option",77),a(582),n(583,"translate"),i()()()()(),e(584,"div",3)(585,"div",8)(586,"mat-label",9),a(587),n(588,"translate"),i()(),e(589,"div",10)(590,"mat-form-field",11),o(591,"input",81),i()()()()(),e(592,"div",82)(593,"button",19),a(594),n(595,"translate"),i(),e(596,"button",42),a(597),n(598,"translate"),i()()()(),e(599,"mat-tab",74),n(600,"translate"),e(601,"mat-card-content")(602,"div",3)(603,"div",4)(604,"div",3)(605,"div",8)(606,"mat-label",9),a(607),n(608,"translate"),i()(),e(609,"div",10)(610,"mat-form-field",11),o(611,"input",83),i()()(),e(612,"div",3)(613,"div",8)(614,"mat-label",9),a(615),n(616,"translate"),i()(),e(617,"div",10)(618,"mat-form-field",11),o(619,"input",31),e(620,"button",32),S("click",function(){return v(b),h(m.hide2=!m.hide2)}),e(621,"mat-icon",33),a(622),i()()()()()(),e(623,"div",4)(624,"div",3)(625,"div",8)(626,"mat-label",9),a(627),n(628,"translate"),i()(),e(629,"div",10)(630,"mat-form-field",11),o(631,"input",84),e(632,"span",15),a(633,"@exmaple.com"),i()()()(),e(634,"div",3)(635,"div",8)(636,"mat-label",9),a(637),n(638,"translate"),i()(),e(639,"div",10)(640,"mat-form-field",11),o(641,"input",31),e(642,"button",32),S("click",function(){return v(b),h(m.conhide=!m.conhide)}),e(643,"mat-icon",33),a(644),i()()()()()()(),e(645,"div",82)(646,"button",19),a(647),n(648,"translate"),i(),e(649,"button",42),a(650),n(651,"translate"),i()()()(),e(652,"mat-tab",74),n(653,"translate"),e(654,"mat-card-content")(655,"div",3)(656,"div",4)(657,"div",3)(658,"div",8)(659,"mat-label",9),a(660),n(661,"translate"),i()(),e(662,"div",10)(663,"mat-form-field",11),o(664,"input",85),i()()()(),e(665,"div",4)(666,"div",3)(667,"div",8)(668,"mat-label",9),a(669),n(670,"translate"),i()(),e(671,"div",10)(672,"mat-form-field",11),o(673,"input",86),i()()()(),e(674,"div",4)(675,"div",3)(676,"div",8)(677,"mat-label",9),a(678),n(679,"translate"),i()(),e(680,"div",10)(681,"mat-form-field",11),o(682,"input",87),i()()()(),e(683,"div",4)(684,"div",3)(685,"div",8)(686,"mat-label",9),a(687),n(688,"translate"),i()(),e(689,"div",10)(690,"mat-form-field",11),o(691,"input",88),i()()()(),e(692,"div",4)(693,"div",3)(694,"div",8)(695,"mat-label",9),a(696),n(697,"translate"),i()(),e(698,"div",10)(699,"mat-form-field",11),o(700,"input",89),i()()()(),e(701,"div",4)(702,"div",3)(703,"div",8)(704,"mat-label",9),a(705),n(706,"translate"),i()(),e(707,"div",10)(708,"mat-form-field",11),o(709,"input",90),i()()()()(),e(710,"div",82)(711,"button",19),a(712),n(713,"translate"),i(),e(714,"button",42),a(715),n(716,"translate"),i()()()()()(),e(717,"div",20)(718,"pre"),a(719,"      "),o(720,"code",21),a(721,`
    `),i()(),e(722,"div",22)(723,"pre"),a(724,"      "),o(725,"code",23),a(726,`
    `),i()()()}if(u&2){let b=g(218),f=g(328),M=g(560);t(2),r("isTitle",!0),t(2),d(" ",l(5,148,"FORMS.titles.basicLayout")," "),t(7),p(l(12,150,"FORMS.labels.name")),t(8),d(" ",l(20,152,"FORMS.labels.company")),t(8),d(" ",l(28,154,"FORMS.labels.email")),t(10),d(" ",l(38,156,"FORMS.labels.phoneNo")),t(8),d(" ",l(46,158,"FORMS.labels.message")," "),t(4),r("placeholder",l(50,160,"FORMS.placeholders.hiDoYouHaveMoment")),t(5),d(" ",l(55,162,"FORMS.buttons.send")),t(5),r("highlight",m.codeForBasicLayout),t(5),r("highlightAuto",m.codeForBasicLayoutTs),t(3),r("isTitle",!0),t(2),d(" ",l(70,164,"FORMS.titles.basicWithIcons")," "),t(7),p(l(77,166,"FORMS.labels.name")),t(10),d(" ",l(87,168,"FORMS.labels.company")),t(10),p(l(97,170,"FORMS.labels.email")),t(9),d(" ",l(106,172,"FORMS.labels.phoneNo")),t(10),d(" ",l(116,174,"FORMS.labels.message")," "),t(4),r("placeholder",l(120,176,"FORMS.placeholders.hiDoYouHaveMoment")),t(7),d(" ",l(127,178,"FORMS.buttons.send")),t(5),r("highlight",m.codeForBasicwithIcons),t(5),r("highlightAuto",m.codeForBasicwithIconsTs),t(3),r("isTitle",!0),t(2),d(" ",l(142,180,"FORMS.titles.formSeparator")),t(6),d(" ",l(148,182,"FORMS.sections.accountDetails")),t(5),d(" ",l(153,184,"FORMS.labels.username")," "),t(8),d(" ",l(161,186,"FORMS.labels.email")),t(10),d(" ",l(171,188,"FORMS.labels.password")," "),t(4),r("type",m.hide?"password":"text"),t(),K("aria-label","Hide password")("aria-pressed",m.hide),t(2),p(m.hide?"visibility_off":"visibility"),t(3),d(" ",l(181,190,"FORMS.sections.personalInfo")),t(5),d(" ",l(186,192,"FORMS.labels.fullName")," "),t(8),d(" ",l(194,194,"FORMS.labels.country")," "),t(7),d(" ",l(201,196,"FORMS.options.india")),t(3),d(" ",l(204,198,"FORMS.options.africa")),t(3),d(" ",l(207,200,"FORMS.options.unitedKingdom")),t(5),d(" ",l(212,202,"FORMS.labels.birthDate")," "),t(4),r("matDatepicker",b),t(),r("for",b),t(6),d(" ",l(223,204,"FORMS.labels.phoneNo")," "),t(8),p(l(231,206,"FORMS.buttons.submit")),t(3),d(" ",l(234,208,"FORMS.buttons.cancel")," "),t(5),r("highlight",m.codeForFormSeparator),t(5),r("highlightAuto",m.codeForFormSeparatorTs),t(3),r("isTitle",!0),t(2),d(" ",l(249,210,"FORMS.titles.formLabelAlignment")," "),t(6),p(l(255,212,"FORMS.sections.accountDetails")),t(5),d(" ",l(260,214,"FORMS.labels.username")," "),t(4),r("placeholder",l(264,216,"FORMS.placeholders.johnDeo")),t(5),d(" ",l(269,218,"FORMS.labels.email")),t(4),r("placeholder",l(273,220,"FORMS.placeholders.johnDeoEmail")),t(7),d(" ",l(280,222,"FORMS.labels.password")," "),t(4),r("type",m.alignhide?"password":"text"),t(),K("aria-label","Hide password")("aria-pressed",m.alignhide),t(2),p(m.alignhide?"visibility_off":"visibility"),t(3),p(l(290,224,"FORMS.sections.personalInfo")),t(5),d(" ",l(295,226,"FORMS.labels.fullName")," "),t(4),r("placeholder",l(299,228,"FORMS.placeholders.johnDeo")),t(5),d(" ",l(304,230,"FORMS.labels.country")," "),t(7),d(" ",l(311,232,"FORMS.options.india")),t(3),d(" ",l(314,234,"FORMS.options.africa")),t(3),d(" ",l(317,236,"FORMS.options.unitedKingdom")),t(5),d(" ",l(322,238,"FORMS.labels.birthDate")," "),t(4),r("matDatepicker",f),t(),r("for",f),t(6),d(" ",l(333,240,"FORMS.labels.phoneNo")," "),t(8),p(l(341,242,"FORMS.buttons.submit")),t(3),d(" ",l(344,244,"FORMS.buttons.cancel")," "),t(5),r("highlight",m.codeForFormLabelAlign),t(5),r("highlightAuto",m.codeForFormLabelAlignTs),t(3),p(l(357,246,"FORMS.sections.collapsibleSection")),t(5),r("expanded",m.step===0),t(3),d(" ",l(365,248,"FORMS.sections.deliveryAddress")," "),t(7),d(" ",l(372,250,"FORMS.labels.fullName")," "),t(8),d(" ",l(380,252,"FORMS.labels.address")," "),t(8),d(" ",l(388,254,"FORMS.labels.city")," "),t(8),d(" ",l(396,256,"FORMS.labels.addressType")," "),t(5),p(l(401,258,"FORMS.options.homeDelivery")),t(3),p(l(404,260,"FORMS.options.officeDelivery")),t(6),d(" ",l(410,262,"FORMS.labels.phone")," "),t(8),d(" ",l(418,264,"FORMS.labels.pincode")," "),t(8),d(" ",l(426,266,"FORMS.labels.landmark")," "),t(7),p(l(433,268,"FORMS.buttons.next")),t(2),r("expanded",m.step===1),t(3),d(" ",l(438,270,"FORMS.sections.deliveryOptions")," "),t(4),p(l(442,272,"FORMS.options.standard")),t(3),p(l(445,274,"FORMS.options.express")),t(3),p(l(448,276,"FORMS.options.overnight")),t(4),d(" ",l(452,278,"FORMS.buttons.previous")," "),t(3),p(l(455,280,"FORMS.buttons.next")),t(2),r("expanded",m.step===2),t(3),d(" ",l(460,282,"FORMS.sections.paymentMethod")," "),t(4),d("",l(464,284,"FORMS.options.creditDebitAtm")," "),t(3),p(l(467,286,"FORMS.options.cashOnDelivery")),t(5),p(l(472,288,"FORMS.labels.cardNumber")),t(7),p(l(479,290,"FORMS.labels.name")),t(6),p(l(485,292,"FORMS.labels.expDate")),t(6),p(l(491,294,"FORMS.labels.ccvCode")),t(8),d(" ",l(499,296,"FORMS.buttons.previous")," "),t(3),p(l(502,298,"FORMS.buttons.end")),t(5),r("highlight",m.codeForCollpaseForm),t(5),r("highlightAuto",m.codeForCollpaseFormTs),t(3),p(l(515,300,"FORMS.sections.formWithTabs")),t(5),r("label",l(520,302,"FORMS.sections.personalInfo")),t(8),d(" ",l(528,304,"FORMS.labels.firstName")," "),t(8),d(" ",l(536,306,"FORMS.labels.country")," "),t(7),d(" ",l(543,308,"FORMS.options.india")),t(3),d(" ",l(546,310,"FORMS.options.france")),t(3),d(" ",l(549,312,"FORMS.options.africa")),t(5),d(" ",l(554,314,"FORMS.labels.birthDate")," "),t(4),r("matDatepicker",M),t(),r("for",M),t(7),d(" ",l(566,316,"FORMS.labels.lastName")," "),t(8),d(" ",l(574,318,"FORMS.labels.language")," "),t(6),d(" ",l(580,320,"FORMS.options.english")),t(3),d(" ",l(583,322,"FORMS.options.french")),t(5),d(" ",l(588,324,"FORMS.labels.phoneNo")," "),t(7),p(l(595,326,"FORMS.buttons.submit")),t(3),d(" ",l(598,328,"FORMS.buttons.cancel")," "),t(2),r("label",l(600,330,"FORMS.sections.accountDetails")),t(8),d(" ",l(608,332,"FORMS.labels.username")," "),t(8),d(" ",l(616,334,"FORMS.labels.password")," "),t(4),r("type",m.hide2?"password":"text"),t(),K("aria-label","Hide password")("aria-pressed",m.hide2),t(2),p(m.hide2?"visibility_off":"visibility"),t(5),d(" ",l(628,336,"FORMS.labels.email")," "),t(10),d(" ",l(638,338,"FORMS.labels.confirm")," "),t(4),r("type",m.hide?"password":"text"),t(),K("aria-label","Hide password")("aria-pressed",m.conhide),t(2),p(m.conhide?"visibility_off":"visibility"),t(3),p(l(648,340,"FORMS.buttons.submit")),t(3),d(" ",l(651,342,"FORMS.buttons.cancel")," "),t(2),r("label",l(653,344,"FORMS.sections.socialLinks")),t(8),d(" ",l(661,346,"FORMS.labels.twitter")," "),t(9),d(" ",l(670,348,"FORMS.labels.facebook")," "),t(9),d(" ",l(679,350,"FORMS.labels.google")," "),t(9),d(" ",l(688,352,"FORMS.labels.linkedin")," "),t(9),d(" ",l(697,354,"FORMS.labels.instagram")," "),t(9),d(" ",l(706,356,"FORMS.labels.quora")," "),t(7),p(l(713,358,"FORMS.buttons.submit")),t(3),d(" ",l(716,360,"FORMS.buttons.cancel")," "),t(5),r("highlight",m.codeForFormwithTabs),t(5),r("highlightAuto",m.codeForFormwithTabsTs)}},dependencies:[F,ae,me,pe,de,U,G,_e,re,W,X,Z,Oe,k,w,$e,Je,Xe,Ze,Qe,tt,it,L,Ce,Q,be,fe,ce,ye,se,et,_,y,T,C,I],encapsulation:2})}}return s})();var vt=`   import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../../material.module';


@Component({
  selector: 'app-form-wizard',
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-wizard.component.html',
})
export class AppFormWizardComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

}
 
`;var on=`    <mat-stepper #stepper>
      <mat-step [stepControl]="firstFormGroup">
        <form class="m-t-24" [formGroup]="firstFormGroup">
          <ng-template matStepLabel>Account</ng-template>
          <div>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16">Name </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="firstCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16">Email </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input
                matInput
                formControlName="firstCtrl"
                required
                type="email"
              />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Password
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input
                matInput
                formControlName="firstCtrl"
                required
                type="password"
              />
            </mat-form-field>
          </div>
          <div class="text-right">
            <button mat-flat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step [stepControl]="secondFormGroup">
        <form class="m-t-24" [formGroup]="secondFormGroup">
          <ng-template matStepLabel>Profile</ng-template>
          <div>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >First Name
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="secondCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Last Name
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="secondCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Address
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <textarea
                rows="5"
                matInput
                formControlName="secondCtrl"
                required
              ></textarea>
            </mat-form-field>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <button
              mat-flat-button
              class="bg-error text-white"
              matStepperPrevious
            >
              Back
            </button>
            <button mat-flat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Finish</ng-template>
        <h4 class="mat-headline-6 m-t-24">Terms and condition</h4>
        <p class="m-t-8 f-s-14">
          Sard about this site or you have been to it, but you cannot figure out
          what it is or what it can do. MTA web directory isSard about this site
          or you have been to it, but you cannot figure out what it is or what
          it can do. MTA web directory is
        </p>
        <mat-checkbox checked color="primary">Agree with terms?</mat-checkbox>
        <div class="d-flex justify-content-between m-t-16">
          <button
            mat-flat-button
            class="bg-error text-white"
            matStepperPrevious
          >
            Back
          </button>
          <button mat-flat-button (click)="stepper.reset()">Finish</button>
        </div>
      </mat-step>
    </mat-stepper>
`,rn=`    <mat-stepper orientation="vertical" #stepper>
      <mat-step [stepControl]="firstFormGroup">
        <form class="m-t-24" [formGroup]="firstFormGroup">
          <ng-template matStepLabel>Account</ng-template>
          <div>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16">Name </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="firstCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16">Email </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input
                matInput
                formControlName="firstCtrl"
                required
                type="email"
              />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Password
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input
                matInput
                formControlName="firstCtrl"
                required
                type="password"
              />
            </mat-form-field>
          </div>
          <div class="text-right">
            <button mat-flat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step [stepControl]="secondFormGroup">
        <form class="m-t-24" [formGroup]="secondFormGroup">
          <ng-template matStepLabel>Profile</ng-template>
          <div>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >First Name
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="secondCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Last Name
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="secondCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Address
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <textarea
                rows="5"
                matInput
                formControlName="secondCtrl"
                required
              ></textarea>
            </mat-form-field>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <button
              mat-flat-button
              class="bg-error text-white"
              matStepperPrevious
            >
              Back
            </button>
            <button mat-flat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Finish</ng-template>
        <h4 class="mat-headline-6 m-t-24">Terms and condition</h4>
        <p class="m-t-8 f-s-14">
          Sard about this site or you have been to it, but you cannot figure out
          what it is or what it can do. MTA web directory isSard about this site
          or you have been to it, but you cannot figure out what it is or what
          it can do. MTA web directory is
        </p>
        <mat-checkbox checked color="primary">Agree with terms?</mat-checkbox>
        <div class="d-flex justify-content-between m-t-16">
          <button
            mat-flat-button
            class="bg-error text-white"
            matStepperPrevious
          >
            Back
          </button>
          <button mat-flat-button (click)="stepper.reset()">Finish</button>
        </div>
      </mat-step>
    </mat-stepper>
`;function yn(s,x){s&1&&(a(0),n(1,"translate")),s&2&&p(l(1,1,"FORMS.wizard.account"))}function On(s,x){s&1&&(a(0),n(1,"translate")),s&2&&d(" ",l(1,1,"FORMS.wizard.profile"))}function Rn(s,x){s&1&&(a(0),n(1,"translate")),s&2&&d(" ",l(1,1,"FORMS.wizard.finish"))}function Bn(s,x){s&1&&(a(0),n(1,"translate")),s&2&&d(" ",l(1,1,"FORMS.wizard.account"))}function Dn(s,x){s&1&&(a(0),n(1,"translate")),s&2&&d(" ",l(1,1,"FORMS.wizard.profile"))}function Pn(s,x){s&1&&(a(0),n(1,"translate")),s&2&&d(" ",l(1,1,"FORMS.wizard.finish"))}var mn=(()=>{class s{constructor(c){this._formBuilder=c,this.firstFormGroup=this._formBuilder.group({firstCtrl:["",Me.required]}),this.secondFormGroup=this._formBuilder.group({secondCtrl:["",Me.required]}),this.codeForFormWizard=on,this.codeForFormWizardTs=vt,this.codeForVerticalFormWizard=rn,this.codeForVerticalFormWizardTs=vt}static{this.\u0275fac=function(u){return new(u||s)(te(we))}}static{this.\u0275cmp=E({type:s,selectors:[["app-form-wizard"]],decls:168,vars:104,consts:[["stepper",""],[3,"isTitle"],["Ctitle",""],["output",""],[3,"stepControl"],[1,"m-t-24",3,"formGroup"],["matStepLabel",""],[1,"f-s-14","f-w-600","d-block","m-b-16"],["appearance","outline",1,"w-100"],["matInput","","formControlName","firstCtrl","required",""],["matInput","","formControlName","firstCtrl","required","","type","email"],["matInput","","formControlName","firstCtrl","required","","type","password"],[1,"text-right"],["mat-flat-button","","matStepperNext",""],["matInput","","formControlName","secondCtrl","required",""],["rows","5","matInput","","formControlName","secondCtrl","required",""],[1,"d-flex","align-items-center","justify-content-between"],["mat-flat-button","","matStepperPrevious","",1,"bg-error","text-white"],[1,"mat-headline-6","m-t-24"],[1,"m-t-8","f-s-14"],["checked","","color","primary"],[1,"d-flex","justify-content-between","m-t-16"],["mat-flat-button","",3,"click"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["orientation","vertical"]],template:function(u,m){if(u&1){let b=A();e(0,"app-code-view",1)(1,"h4",2),a(2),n(3,"translate"),i(),e(4,"div",3)(5,"mat-stepper",null,0)(7,"mat-step",4)(8,"form",5),he(9,yn,2,3,"ng-template",6),e(10,"div")(11,"mat-label",7),a(12),n(13,"translate"),i(),e(14,"mat-form-field",8),o(15,"input",9),i(),e(16,"mat-label",7),a(17),n(18,"translate"),i(),e(19,"mat-form-field",8),o(20,"input",10),i(),e(21,"mat-label",7),a(22),n(23,"translate"),i(),e(24,"mat-form-field",8),o(25,"input",11),i()(),e(26,"div",12)(27,"button",13),a(28),n(29,"translate"),i()()()(),e(30,"mat-step",4)(31,"form",5),he(32,On,2,3,"ng-template",6),e(33,"div")(34,"mat-label",7),a(35),n(36,"translate"),i(),e(37,"mat-form-field",8),o(38,"input",14),i(),e(39,"mat-label",7),a(40),n(41,"translate"),i(),e(42,"mat-form-field",8),o(43,"input",14),i(),e(44,"mat-label",7),a(45),n(46,"translate"),i(),e(47,"mat-form-field",8),o(48,"textarea",15),i()(),e(49,"div",16)(50,"button",17),a(51),n(52,"translate"),i(),e(53,"button",13),a(54),n(55,"translate"),i()()()(),e(56,"mat-step"),he(57,Rn,2,3,"ng-template",6),e(58,"h4",18),a(59),n(60,"translate"),i(),e(61,"p",19),a(62),n(63,"translate"),i(),e(64,"mat-checkbox",20),a(65),n(66,"translate"),i(),e(67,"div",21)(68,"button",17),a(69),n(70,"translate"),i(),e(71,"button",22),S("click",function(){v(b);let M=g(6);return h(M.reset())}),a(72),n(73,"translate"),i()()()()(),e(74,"div",23)(75,"pre"),a(76,"      "),o(77,"code",24),a(78,`
    `),i()(),e(79,"div",25)(80,"pre"),a(81,"      "),o(82,"code",26),a(83,`
    `),i()()(),e(84,"app-code-view",1)(85,"h4",2),a(86),n(87,"translate"),i(),e(88,"div",3)(89,"mat-stepper",27,0)(91,"mat-step",4)(92,"form",5),he(93,Bn,2,3,"ng-template",6),e(94,"div")(95,"mat-label",7),a(96),n(97,"translate"),i(),e(98,"mat-form-field",8),o(99,"input",9),i(),e(100,"mat-label",7),a(101),n(102,"translate"),i(),e(103,"mat-form-field",8),o(104,"input",10),i(),e(105,"mat-label",7),a(106),n(107,"translate"),i(),e(108,"mat-form-field",8),o(109,"input",11),i()(),e(110,"div",12)(111,"button",13),a(112),n(113,"translate"),i()()()(),e(114,"mat-step",4)(115,"form",5),he(116,Dn,2,3,"ng-template",6),e(117,"div")(118,"mat-label",7),a(119),n(120,"translate"),i(),e(121,"mat-form-field",8),o(122,"input",14),i(),e(123,"mat-label",7),a(124),n(125,"translate"),i(),e(126,"mat-form-field",8),o(127,"input",14),i(),e(128,"mat-label",7),a(129),n(130,"translate"),i(),e(131,"mat-form-field",8),o(132,"textarea",15),i()(),e(133,"div",16)(134,"button",17),a(135),n(136,"translate"),i(),e(137,"button",13),a(138),n(139,"translate"),i()()()(),e(140,"mat-step"),he(141,Pn,2,3,"ng-template",6),e(142,"h4",18),a(143),n(144,"translate"),i(),e(145,"p",19),a(146),n(147,"translate"),i(),e(148,"mat-checkbox",20),a(149),n(150,"translate"),i(),e(151,"div",21)(152,"button",17),a(153),n(154,"translate"),i(),e(155,"button",22),S("click",function(){v(b);let M=g(6);return h(M.reset())}),a(156),n(157,"translate"),i()()()()(),e(158,"div",23)(159,"pre"),a(160,"      "),o(161,"code",24),a(162,`
    `),i()(),e(163,"div",25)(164,"pre"),a(165,"      "),o(166,"code",26),a(167,`
    `),i()()()}u&2&&(r("isTitle",!0),t(2),d(" ",l(3,44,"FORMS.titles.formWizard")),t(5),r("stepControl",m.firstFormGroup),t(),r("formGroup",m.firstFormGroup),t(4),d("",l(13,46,"FORMS.labels.name")," "),t(5),d("",l(18,48,"FORMS.labels.email")," "),t(5),d("",l(23,50,"FORMS.labels.password")," "),t(6),p(l(29,52,"FORMS.buttons.next")),t(2),r("stepControl",m.secondFormGroup),t(),r("formGroup",m.secondFormGroup),t(4),d("",l(36,54,"FORMS.labels.firstName")," "),t(5),d("",l(41,56,"FORMS.labels.lastName")," "),t(5),d("",l(46,58,"FORMS.labels.address")," "),t(6),d(" ",l(52,60,"FORMS.buttons.back")," "),t(3),p(l(55,62,"FORMS.buttons.next")),t(5),p(l(60,64,"FORMS.wizard.termsAndCondition")),t(3),d(" ",l(63,66,"FORMS.wizard.termsDescription")," "),t(3),p(l(66,68,"FORMS.wizard.agreeWithTerms")),t(4),d("",l(70,70,"FORMS.buttons.back")," "),t(3),p(l(73,72,"FORMS.buttons.finish")),t(5),r("highlight",m.codeForFormWizard),t(5),r("highlightAuto",m.codeForFormWizardTs),t(2),r("isTitle",!0),t(2),d(" ",l(87,74,"FORMS.titles.vertical")),t(5),r("stepControl",m.firstFormGroup),t(),r("formGroup",m.firstFormGroup),t(4),d("",l(97,76,"FORMS.labels.name")," "),t(5),d("",l(102,78,"FORMS.labels.email")," "),t(5),d("",l(107,80,"FORMS.labels.password")," "),t(6),p(l(113,82,"FORMS.buttons.next")),t(2),r("stepControl",m.secondFormGroup),t(),r("formGroup",m.secondFormGroup),t(4),d("",l(120,84,"FORMS.labels.firstName")," "),t(5),d("",l(125,86,"FORMS.labels.lastName")," "),t(5),d("",l(130,88,"FORMS.labels.address")," "),t(6),d(" ",l(136,90,"FORMS.buttons.back")," "),t(3),p(l(139,92,"FORMS.buttons.next")),t(5),p(l(144,94,"FORMS.wizard.termsAndCondition")),t(3),d(" ",l(147,96,"FORMS.wizard.termsDescription")," "),t(3),p(l(150,98,"FORMS.wizard.agreeWithTerms")),t(4),d(" ",l(154,100,"FORMS.buttons.back")," "),t(3),p(l(157,102,"FORMS.buttons.finish")),t(5),r("highlight",m.codeForVerticalFormWizard),t(5),r("highlightAuto",m.codeForVerticalFormWizardTs))},dependencies:[F,Te,U,G,W,ri,oi,mi,pi,di,L,R,Ie,ne,O,J,ke,N,oe,le,_,y,T,C,I],encapsulation:2})}}return s})();var pn=(()=>{class s{constructor(c,u){this.toastr=c,this.translate=u}showSuccess(){this.toastr.success(this.translate.instant("toastr_successMessage"),this.translate.instant("toastr_successTitle"))}showError(){this.toastr.error(this.translate.instant("toastr_errorMessage"),this.translate.instant("toastr_errorTitle"))}showWarning(){this.toastr.warning(this.translate.instant("toastr_warningMessage"),this.translate.instant("toastr_warningTitle"))}showInfo(){this.toastr.info(this.translate.instant("toastr_infoMessage"))}static{this.\u0275fac=function(u){return new(u||s)(te(at),te(Nt))}}static{this.\u0275cmp=E({type:s,selectors:[["app-form-toastr"]],features:[q([at])],decls:49,vars:36,consts:[[1,"row"],[1,"col-md-6"],[1,"cardWithShadow"],[1,"m-b-12"],["mat-flat-button","",1,"bg-success","text-white",3,"click"],["mat-flat-button","",1,"bg-error","text-white",3,"click"],["mat-flat-button","",1,"bg-warning","text-white",3,"click"],["mat-flat-button","",1,"bg-secondary","text-white",3,"click"]],template:function(u,m){u&1&&(e(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-content")(4,"mat-card-title"),a(5),n(6,"translate"),i(),e(7,"mat-card-subtitle",3),a(8),n(9,"translate"),i(),e(10,"button",4),S("click",function(){return m.showSuccess()}),a(11),n(12,"translate"),i()()()(),e(13,"div",1)(14,"mat-card",2)(15,"mat-card-content")(16,"mat-card-title"),a(17),n(18,"translate"),i(),e(19,"mat-card-subtitle",3),a(20),n(21,"translate"),i(),e(22,"button",5),S("click",function(){return m.showError()}),a(23),n(24,"translate"),i()()()(),e(25,"div",1)(26,"mat-card",2)(27,"mat-card-content")(28,"mat-card-title"),a(29),n(30,"translate"),i(),e(31,"mat-card-subtitle",3),a(32),n(33,"translate"),i(),e(34,"button",6),S("click",function(){return m.showWarning()}),a(35),n(36,"translate"),i()()()(),e(37,"div",1)(38,"mat-card",2)(39,"mat-card-content")(40,"mat-card-title"),a(41),n(42,"translate"),i(),e(43,"mat-card-subtitle",3),a(44),n(45,"translate"),i(),e(46,"button",7),S("click",function(){return m.showInfo()}),a(47),n(48,"translate"),i()()()()()),u&2&&(t(5),p(l(6,12,"FORMS.toastr.success")),t(3),p(l(9,14,"FORMS.toastr.successMessage")),t(3),p(l(12,16,"FORMS.toastr.success")),t(6),p(l(18,18,"FORMS.toastr.danger")),t(3),p(l(21,20,"FORMS.toastr.dangerMessage")),t(3),p(l(24,22,"FORMS.toastr.danger")),t(6),p(l(30,24,"FORMS.toastr.warning")),t(3),p(l(33,26,"FORMS.toastr.warningMessage")),t(3),p(l(36,28,"FORMS.toastr.warning")),t(6),p(l(42,30,"FORMS.toastr.accent")),t(3),p(l(45,32,"FORMS.toastr.accentMessage")),t(3),p(l(48,34,"FORMS.toastr.accent")))},dependencies:[F,k,w,ni,j,L,fi,I],encapsulation:2})}}return s})();var dn=(()=>{class s{ngOnInit(){this.editor=new hi}ngOnDestroy(){this.editor.destroy()}constructor(){this.html="",this.toolbar=[["bold","italic"],["underline"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]]}static{this.\u0275fac=function(u){return new(u||s)}}static{this.\u0275cmp=E({type:s,selectors:[["app-form-editor"]],decls:6,vars:8,consts:[[1,"cardWithShadow"],[1,"NgxEditor__Wrapper",2,"min-height","300px"],[1,"",3,"editor","toolbar"],[3,"editor","ngModel","disabled","placeholder"]],template:function(u,m){u&1&&(e(0,"mat-card",0)(1,"mat-card-content")(2,"div",1),o(3,"ngx-editor-menu",2)(4,"ngx-editor",3),n(5,"translate"),i()()()),u&2&&(t(3),r("editor",m.editor)("toolbar",m.toolbar),t(),r("editor",m.editor)("ngModel",m.html)("disabled",!1)("placeholder",l(5,6,"FORMS.placeholders.typeHere")))},dependencies:[li,k,w,bi,vi,R,O,Ee,Lt,I],encapsulation:2})}}return s})();var Ir=[{path:"forms-elements",children:[{path:"autocomplete",component:_i,data:{title:"Autocomplete",urls:[{title:"Home",url:""},{title:"Autocomplete"}]}},{path:"button",component:Vi,data:{title:"Button",urls:[{title:"Home",url:""},{title:"Button"}]}},{path:"checkbox",component:qi,data:{title:"Checkbox",urls:[{title:"Home",url:""},{title:"Checkbox"}]}},{path:"radio",component:$i,data:{title:"Radio Button",urls:[{title:"Home",url:""},{title:"Radio Button"}]}},{path:"datepicker",component:Ea,data:{title:"Datepicker",urls:[{title:"Home",url:""},{title:"Datepicker"}]}}]},{path:"",children:[{path:"form-layouts",component:Ka,data:{title:"Form Layouts",urls:[{title:"Home",url:""},{title:"Form Layouts"}]}},{path:"form-horizontal",component:Ra,data:{title:"Form Horizontal",urls:[{title:"Home",url:""},{title:"Form Horizontal"}]}},{path:"form-vertical",component:ln,data:{title:"Form Vertical",urls:[{title:"Home",url:""},{title:"Form Vertical"}]}},{path:"form-wizard",component:mn,data:{title:"Form Wizard",urls:[{title:"Home",url:""},{title:"Form Wizard"}]}},{path:"form-toastr",component:pn,data:{title:"Form Toastr",urls:[{title:"Home",url:""},{title:"Form Toastr"}]}},{path:"form-editor",component:dn,data:{title:"Form Editor",urls:[{title:"Home",url:""},{title:"Form Editor"}]}}]}];export{Ir as FormsRoutes};
