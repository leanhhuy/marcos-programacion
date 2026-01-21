import{a as et,c as da}from"./chunk-3GXJCOPX.js";import{a as M}from"./chunk-XRM6PKGS.js";import{b as T}from"./chunk-XHAM6T3I.js";import{e as _,f as k}from"./chunk-WZZJF4VT.js";import{a as sa,b as pa,d as ca}from"./chunk-ZHD5HMMI.js";import"./chunk-7UZYWCAJ.js";import"./chunk-CJPLD6EO.js";import{a as ma}from"./chunk-L3BSM4UP.js";import{a as ce,b as ue}from"./chunk-NZTJZNEO.js";import{S as ta,T as aa,U as ia,V as oa,W as la,Y as na,Z as ra,a as Bt,b as lt,c as Yt,d as Gt,e as ne,ea as pe,f as re,g as Ut,h as me,i as Wt,j as jt,k as Kt,l as zt,m as qt,n as Jt,o as Xt,oa as S,p as de,q as z,r as q,s as Zt}from"./chunk-HZCTH6KW.js";import"./chunk-UISEXXDK.js";import"./chunk-LXNH35ZP.js";import{a as Qt,c as Ke,d as ze,e as qe,g as Je,h as Xe}from"./chunk-5AGHB52E.js";import{a as Ot,b as Lt}from"./chunk-3XBGARNA.js";import{b as ke,c as Rt,h as Qe,i as $e}from"./chunk-NDYV2RWR.js";import{$a as we,Ba as ae,Bb as se,Cb as Y,Da as ge,Db as Ce,Ga as I,Ha as K,Hb as Ie,Ia as Ge,Jb as E,Ka as Ue,Kb as G,La as F,Lb as w,Mb as $t,Na as Se,Oa as xe,Pb as ea,Qb as J,Rb as Ze,Sa as Ee,U as Nt,Va as ie,W as te,Wa as oe,cb as Me,eb as y,fb as N,hb as H,ib as We,jb as je,kb as _e,lb as le,ob as V,tb as Te,ub as O,vb as Ht,wb as Vt}from"./chunk-KLGXUUUF.js";import{m as Pt,q as Ye,v as he}from"./chunk-SJYD7TKV.js";import{Ab as g,Ca as He,Cc as a,D as It,Dc as C,Ec as x,Gb as be,Gc as R,Hc as L,Ic as B,Mc as j,Qb as W,Rb as Pe,Sb as Ne,Ub as U,Vb as D,Wb as A,Wc as Z,X as Ae,Xb as n,Xc as Q,Yb as e,Zb as t,_b as i,cd as At,eb as Dt,fa as yt,fc as P,ja as Ft,kb as o,lc as f,nc as Ve,qa as c,ra as u,t as De,ub as ee,xc as b}from"./chunk-4VUSXYH3.js";import{a as Ct}from"./chunk-6NE7JDAX.js";var ua=`  import {Component, OnInit} from '@angular/core';
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
`,fa=`  import {Component, OnInit, inject} from '@angular/core';
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
`,ba=`  import {Component, OnInit} from '@angular/core';
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
`,va=`  import {Component} from '@angular/core';
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
`;var ha=`  <form>
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
`,ga=`  <form [formGroup]="stateForm">
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
`,Sa=`  <form>
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
`,xa=`  <form>
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
`;var no=(r,v)=>v.name;function ro(r,v){if(r&1&&(e(0,"mat-option",16),a(1),t()),r&2){let m=v.$implicit;n("value",m),o(),x(" ",m," ")}}function mo(r,v){if(r&1&&(e(0,"mat-option",16),a(1),t()),r&2){let m=v.$implicit;n("value",m),o(),x(" ",m," ")}}function so(r,v){if(r&1&&(e(0,"mat-optgroup",23),D(1,mo,2,2,"mat-option",16,U),t()),r&2){let m=v.$implicit;n("label",m.letter),o(),A(m.names)}}function po(r,v){if(r&1&&(e(0,"mat-option",16),a(1),t()),r&2){let m=v.$implicit;n("value",m),o(),x(" ",m," ")}}function co(r,v){if(r&1&&(e(0,"mat-option",25),i(1,"img",27),e(2,"span"),a(3),t(),a(4," | "),e(5,"small"),a(6),t()()),r&2){let m=v.$implicit;n("value",m.name),o(),n("src",m.flag,Dt),o(2),C(m.name),o(3),x("Population: ",m.population)}}var uo=(r,v)=>{let m=v.toLowerCase();return r.filter(d=>d.toLowerCase().includes(m))},wa=(()=>{class r{constructor(m){this._formBuilder=m,this.codeForFirstAutocompleteOption=ha,this.codeForFirstAutocompleteOptionTs=ua,this.codeForOptionGroup=ga,this.codeForOptionGroupTs=fa,this.codeForFilter=Sa,this.codeForFilterTs=ba,this.codeForOverview=xa,this.codeForOverviewTs=va,this.firstControl=new F(""),this.firstoption=["One","Two","Three"],this.stateForm=this._formBuilder.group({stateGroup:""}),this.stateGroups=[{letter:"A",names:["Alabama","Alaska","Arizona","Arkansas"]},{letter:"C",names:["California","Colorado","Connecticut"]},{letter:"D",names:["Delaware"]},{letter:"F",names:["Florida"]},{letter:"G",names:["Georgia"]},{letter:"H",names:["Hawaii"]},{letter:"I",names:["Idaho","Illinois","Indiana","Iowa"]},{letter:"K",names:["Kansas","Kentucky"]},{letter:"L",names:["Louisiana"]},{letter:"M",names:["Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana"]},{letter:"N",names:["Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota"]},{letter:"O",names:["Ohio","Oklahoma","Oregon"]},{letter:"P",names:["Pennsylvania"]},{letter:"R",names:["Rhode Island"]},{letter:"S",names:["South Carolina","South Dakota"]},{letter:"T",names:["Tennessee","Texas"]},{letter:"U",names:["Utah"]},{letter:"V",names:["Vermont","Virginia"]},{letter:"W",names:["Washington","West Virginia","Wisconsin","Wyoming"]}],this.filterControl=new F(""),this.searchoption=["One","Two","Three"],this.stateCtrl=new F(""),this.states=[{name:"Arkansas",population:"2.978M",flag:"https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg"},{name:"California",population:"39.14M",flag:"https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg"},{name:"Florida",population:"20.27M",flag:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg"},{name:"Texas",population:"27.47M",flag:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg"}],this.filteredStates=this.stateCtrl.valueChanges.pipe(Ae(""),De(d=>d?this._filterStates(d):this.states.slice()))}_filterStates(m){let d=m.toLowerCase();return this.states.filter(l=>l.name.toLowerCase().includes(d))}ngOnInit(){this.filteredOptions=this.firstControl.valueChanges.pipe(Ae(""),De(m=>this._filter(m||""))),this.stateGroupOptions=this.stateForm.get("stateGroup").valueChanges.pipe(Ae(""),De(m=>this._filterGroup(m||""))),this.searchfilteredOptions=this.filterControl.valueChanges.pipe(Ae(""),De(m=>this._searchfilter(m||"")))}_filter(m){let d=m.toLowerCase();return this.firstoption.filter(l=>l.toLowerCase().includes(d))}_filterGroup(m){return m?this.stateGroups.map(d=>({letter:d.letter,names:uo(d.names,m)})).filter(d=>d.names.length>0):this.stateGroups}_searchfilter(m){let d=m.toLowerCase();return this.searchoption.filter(l=>l.toLowerCase().includes(d))}static{this.\u0275fac=function(d){return new(d||r)(ee(Me))}}static{this.\u0275cmp=g({type:r,selectors:[["app-autocomplete"]],decls:109,vars:29,consts:[["auto","matAutocomplete"],["autoGroup","matAutocomplete"],["auto3","matAutocomplete"],["auto2","matAutocomplete"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-sm-6"],[3,"isTitle"],["Ctitle",""],["output",""],["appearance","outline",1,"w-100"],["type","text","placeholder","Pick one","aria-label","Number","matInput","",3,"formControl","matAutocomplete"],["autoActiveFirstOption",""],[3,"value"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[3,"formGroup"],["type","text","matInput","","formControlName","stateGroup","required","",3,"matAutocomplete"],[3,"label"],["matInput","","aria-label","State",3,"matAutocomplete","formControl"],[1,"d-flex","align-items-center",3,"value"],[3,"change","checked"],["alt","","height","25",1,"m-r-8",3,"src"]],template:function(d,l){if(d&1){let p=P();e(0,"mat-card",4)(1,"div",5)(2,"mat-card-title",6),a(3,"Autocomplete"),t()(),e(4,"mat-card-content",7)(5,"div",8)(6,"div",9)(7,"app-code-view",10)(8,"h4",11),a(9," First autocomplete option "),t(),e(10,"div",12)(11,"form")(12,"mat-form-field",13)(13,"mat-label"),a(14,"Number"),t(),i(15,"input",14),e(16,"mat-autocomplete",15,0),D(18,ro,2,2,"mat-option",16,U),Z(20,"async"),t()()()(),e(21,"div",17)(22,"pre"),a(23,"              "),i(24,"code",18),a(25,`
            `),t()(),e(26,"div",19)(27,"pre"),a(28,"              "),i(29,"code",20),a(30,`
            `),t()()()(),e(31,"div",9)(32,"app-code-view",10)(33,"h4",11),a(34," Option Group "),t(),e(35,"div",12)(36,"form",21)(37,"mat-form-field",13)(38,"mat-label"),a(39,"States Group"),t(),i(40,"input",22),e(41,"mat-autocomplete",null,1),D(43,so,3,1,"mat-optgroup",23,U),Z(45,"async"),t()()()(),e(46,"div",17)(47,"pre"),a(48,"              "),i(49,"code",18),a(50,`
            `),t()(),e(51,"div",19)(52,"pre"),a(53,"              "),i(54,"code",20),a(55,`
            `),t()()()(),e(56,"div",9)(57,"app-code-view",10)(58,"h4",11),a(59," Filter "),t(),e(60,"div",12)(61,"form")(62,"mat-form-field",13)(63,"mat-label"),a(64,"Number"),t(),i(65,"input",14),e(66,"mat-autocomplete",null,2),D(68,po,2,2,"mat-option",16,U),Z(70,"async"),t()()()(),e(71,"div",17)(72,"pre"),a(73,"              "),i(74,"code",18),a(75,`
            `),t()(),e(76,"div",19)(77,"pre"),a(78,"              "),i(79,"code",20),a(80,`
            `),t()()()(),e(81,"div",9)(82,"app-code-view",10)(83,"h4",11),a(84," Overview "),t(),e(85,"div",12)(86,"form")(87,"mat-form-field",13)(88,"mat-label"),a(89,"State"),t(),i(90,"input",24),e(91,"mat-autocomplete",null,3),D(93,co,7,4,"mat-option",25,no),Z(95,"async"),t()(),i(96,"br"),e(97,"mat-slide-toggle",26),f("change",function(){return c(p),u(l.stateCtrl.disabled?l.stateCtrl.enable():l.stateCtrl.disable())}),a(98," Disable Input? "),t()()(),e(99,"div",17)(100,"pre"),a(101,"              "),i(102,"code",18),a(103,`
            `),t()(),e(104,"div",19)(105,"pre"),a(106,"              "),i(107,"code",20),a(108,`
            `),t()()()()()()()}if(d&2){let p=b(17),s=b(42),h=b(67),Be=b(92);o(7),n("isTitle",!0),o(8),n("formControl",l.firstControl)("matAutocomplete",p),o(3),A(Q(20,21,l.filteredOptions)),o(6),n("highlight",l.codeForFirstAutocompleteOption),o(5),n("highlightAuto",l.codeForFirstAutocompleteOptionTs),o(3),n("isTitle",!0),o(4),n("formGroup",l.stateForm),o(4),n("matAutocomplete",s),o(3),A(Q(45,23,l.stateGroupOptions)),o(6),n("highlight",l.codeForOptionGroup),o(5),n("highlightAuto",l.codeForOptionGroupTs),o(3),n("isTitle",!0),o(8),n("formControl",l.filterControl)("matAutocomplete",h),o(3),A(Q(70,25,l.searchfilteredOptions)),o(6),n("highlight",l.codeForFilter),o(5),n("highlightAuto",l.codeForFilterTs),o(3),n("isTitle",!0),o(8),n("matAutocomplete",Be)("formControl",l.stateCtrl),o(3),A(Q(95,27,l.filteredStates)),o(4),n("checked",l.stateCtrl.disabled),o(5),n("highlight",l.codeForOverview),o(5),n("highlightAuto",l.codeForOverviewTs)}},dependencies:[S,Ot,te,Nt,Lt,V,H,Y,Qt,E,w,G,y,xe,ae,I,K,we,Ue,N,Ee,oe,ie,he,_,k,T,M,Pt],encapsulation:2})}}return r})();var $=`  import {Component} from '@angular/core';
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
`,Re=`  import {Component} from '@angular/core';
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
`;var Ma=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8">
              <button mat-button>Basic</button>
              <button mat-button disabled>Disabled</button>
              <a mat-button href="https://www.google.com/" target="_blank">Link</a>
            </div>
`,_a=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8">
              <button mat-raised-button>Basic</button>
              <button mat-raised-button disabled>Disabled</button>
              <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
            </div>
`,ka=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8 flex-wrap">
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
`,Ta=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8 flex-wrap">
              <button mat-flat-button>Primary</button>
              <button mat-flat-button class="bg-secondary text-white">Secondary</button>
              <button mat-flat-button class="bg-warning text-white">Warning</button>
              <button mat-flat-button class="bg-error text-white">Error</button>
              <button mat-flat-button class="bg-success text-white">Success</button>
              <button mat-flat-button disabled>Disabled</button>
              <a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>
            </div>
`,Ca=`  <div class="d-flex gap-8 justify-content-center">
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
`,Ia=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8">
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
`,ya=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8">
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
`,Fa=`  <div class="d-flex flex-sm-row flex-col align-items-center justify-content-center gap-8">
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
`,Da=`  <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
              <mat-button-toggle value="bold">Bold</mat-button-toggle>
              <mat-button-toggle value="italic">Italic</mat-button-toggle>
              <mat-button-toggle value="underline">Underline</mat-button-toggle>
            </mat-button-toggle-group>
`,Aa=`  <mat-button-toggle-group name="fontStyle" aria-label="Font Style" multiple>
              <mat-button-toggle value="flour">Flour</mat-button-toggle>
              <mat-button-toggle value="eggs">Eggs</mat-button-toggle>
              <mat-button-toggle value="sugar">Sugar</mat-button-toggle>
            </mat-button-toggle-group>
`,Pa=`  <mat-button-toggle-group [formControl]="fontStyleControl" aria-label="Font Style">
              <mat-button-toggle value="bold">Bold</mat-button-toggle>
              <mat-button-toggle value="italic">Italic</mat-button-toggle>
              <mat-button-toggle value="underline">Underline</mat-button-toggle>
            </mat-button-toggle-group>
            <p class="f-s-14 f-w-600 m-t-12">
              Chosen value is : {{ fontStyleControl.value }}
            </p>
`,Na=`  <mat-button-toggle-group #group="matButtonToggleGroup">
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
`;var Oa=(()=>{class r{constructor(){this.codeForBasicButtons=Ma,this.codeForBasicButtonsTs=$,this.codeForRaisedButtons=_a,this.codeForRaisedButtonsTs=$,this.codeForOutlinedButtons=ka,this.codeForOutlinedButtonsTs=$,this.codeForFlatButtons=Ta,this.codeForFlatButtonsTs=$,this.codeForIconButtons=Ca,this.codeForIconButtonsTs=$,this.codeForFabButtons=Ia,this.codeForFabButtonsTs=$,this.codeForMiniFabButtons=ya,this.codeForMiniFabButtonsTs=$,this.codeForExtendedFabButtons=Fa,this.codeForExtendedFabButtonsTs=$,this.codeForBasicToggleButtons=Da,this.codeForBasicToggleButtonsTs=Re,this.codeForMultipleSelectToggleButtons=Aa,this.codeForMultipleSelectToggleButtonsTs=Re,this.codeForReactiveFormToggleButtons=Pa,this.codeForReactiveFormToggleButtonsTs=Re,this.codeForExclusiveSelectionToggleButtons=Na,this.codeForExclusiveSelectionToggleButtonsTs=Re,this.fontStyleControl=new F("")}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=g({type:r,selectors:[["app-button"]],decls:330,vars:39,consts:[["group","matButtonToggleGroup"],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"d-flex","flex-sm-row","flex-col","align-items-center","justify-content-center","gap-8"],["mat-button",""],["mat-button","","disabled",""],["mat-button","","href","https://www.google.com/","target","_blank"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-raised-button",""],["mat-raised-button","","disabled",""],["mat-raised-button","","href","https://www.google.com/","target","_blank"],[1,"d-flex","flex-sm-row","flex-col","align-items-center","justify-content-center","gap-8","flex-wrap"],["mat-stroked-button",""],["mat-button","",1,"b-1","border-secondary","text-secondary"],["mat-button","",1,"b-1","border-warning","text-warning"],["mat-button","",1,"b-1","border-error","text-error"],["mat-button","",1,"b-1","border-success","text-success"],["mat-stroked-button","","href","https://www.google.com/","target","_blank"],["mat-flat-button",""],["mat-flat-button","",1,"bg-secondary","text-white"],["mat-flat-button","",1,"bg-warning","text-white"],["mat-flat-button","",1,"bg-error","text-white"],["mat-flat-button","",1,"bg-success","text-white"],["mat-flat-button","","disabled",""],["mat-flat-button","","href","https://www.google.com/","target","_blank"],[1,"d-flex","gap-8","justify-content-center"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",1,"d-flex"],["name","home-2",1,"icon-20"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",1,"d-flex"],["name","adjustments-alt",1,"icon-20"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon",1,"d-flex"],["name","apps",1,"icon-20"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",1,"d-flex"],["name","heart-filled",1,"icon-20"],["mat-icon-button","","disabled","","aria-label","Example icon button with a open in new tab icon",1,"d-flex"],["name","message-2",1,"icon-20"],["mat-fab","","aria-label","Example icon button with a delete icon",1,"bg-primary","text-white"],["name","trash"],["mat-fab","","aria-label","Example icon button with a bookmark icon",1,"bg-secondary","text-white"],["name","bookmark"],["mat-fab","","aria-label","Example icon button with a home icon",1,"bg-warning","text-white"],["name","home-2"],["mat-fab","","aria-label","Example icon button with a heart icon",1,"bg-error","text-white"],["name","heart-filled"],["mat-fab","","aria-label","Example icon button with a heart icon",1,"bg-success","text-white"],["name","access-point"],["mat-fab","","disabled","","aria-label","Example icon button with a heart icon"],["name","accessible"],["mat-mini-fab","","aria-label","Example icon button with a delete icon",1,"bg-primary","text-white"],["name","trash",1,"icon-20","d-flex"],["mat-mini-fab","","aria-label","Example icon button with a bookmark icon",1,"bg-secondary","text-white"],["name","bookmark",1,"icon-20","d-flex"],["mat-mini-fab","","aria-label","Example icon button with a home icon",1,"bg-warning","text-white"],["name","home-2",1,"icon-20","d-flex"],["mat-mini-fab","","aria-label","Example icon button with a home icon",1,"bg-error","text-white"],["name","access-point",1,"icon-20","d-flex"],["mat-mini-fab","","aria-label","Example icon button with a home icon",1,"bg-success","text-white"],["mat-mini-fab","","disabled","","aria-label","Example icon button with a heart icon"],["name","accessible",1,"icon-20","d-flex"],["mat-fab","","extended","","aria-label","Example icon button with a delete icon"],[1,"d-flex","align-items-center"],["name","trash",1,"icon-20","m-r-4"],["mat-fab","","extended","","aria-label","Example icon button with a bookmark icon"],["name","bookmark",1,"icon-20","m-r-4"],["mat-fab","","extended","","aria-label","Example icon button with a home icon"],["name","home-2",1,"icon-20","m-r-4"],["mat-fab","","extended","","disabled","","aria-label","Example icon button with a heart icon"],["name","heart-filled",1,"icon-20","m-r-4"],[1,"col-sm-6"],["name","fontStyle","aria-label","Font Style"],["value","bold"],["value","italic"],["value","underline"],["name","fontStyle","aria-label","Font Style","multiple",""],["value","flour"],["value","eggs"],["value","sugar"],["aria-label","Font Style",3,"formControl"],[1,"f-s-14","f-w-600","m-t-12"],["value","left","aria-label","Text align left"],["value","center","aria-label","Text align center"],["value","right","aria-label","Text align right"],["value","justify","disabled","","aria-label","Text align justify"]],template:function(d,l){if(d&1&&(e(0,"mat-card",1)(1,"div",2)(2,"mat-card-title",3),a(3,"Buttons"),t()(),e(4,"mat-card-content",4)(5,"div",5)(6,"div",6)(7,"app-code-view",7)(8,"h4",8),a(9," Basic "),t(),e(10,"div",9)(11,"div",10)(12,"button",11),a(13,"Basic"),t(),e(14,"button",12),a(15,"Disabled"),t(),e(16,"a",13),a(17,"Link"),t()()(),e(18,"div",14)(19,"pre"),a(20,"              "),i(21,"code",15),a(22,`
            `),t()(),e(23,"div",16)(24,"pre"),a(25,"              "),i(26,"code",17),a(27,`
            `),t()()()(),e(28,"div",6)(29,"app-code-view",7)(30,"h4",8),a(31," Raised "),t(),e(32,"div",9)(33,"div",10)(34,"button",18),a(35,"Basic"),t(),e(36,"button",19),a(37,"Disabled"),t(),e(38,"a",20),a(39,"Link"),t()()(),e(40,"div",14)(41,"pre"),a(42,"              "),i(43,"code",15),a(44,`
            `),t()(),e(45,"div",16)(46,"pre"),a(47,"              "),i(48,"code",17),a(49,`
            `),t()()()(),e(50,"div",6)(51,"app-code-view",7)(52,"h4",8),a(53," Outlined "),t(),e(54,"div",9)(55,"div",21)(56,"button",22),a(57,"Primary"),t(),e(58,"button",23),a(59," Secondary "),t(),e(60,"button",24),a(61," Warning "),t(),e(62,"button",25),a(63," Error "),t(),e(64,"button",26),a(65," Success "),t(),e(66,"button",12),a(67,"Disabled"),t(),e(68,"a",27),a(69,"Link"),t()()(),e(70,"div",14)(71,"pre"),a(72,"              "),i(73,"code",15),a(74,`
            `),t()(),e(75,"div",16)(76,"pre"),a(77,"              "),i(78,"code",17),a(79,`
            `),t()()()(),e(80,"div",6)(81,"app-code-view",7)(82,"h4",8),a(83," Flat "),t(),e(84,"div",9)(85,"div",21)(86,"button",28),a(87,"Primary"),t(),e(88,"button",29),a(89,"Secondary"),t(),e(90,"button",30),a(91,"Warning"),t(),e(92,"button",31),a(93,"Error"),t(),e(94,"button",32),a(95,"Success"),t(),e(96,"button",33),a(97,"Disabled"),t(),e(98,"a",34),a(99,"Link"),t()()(),e(100,"div",14)(101,"pre"),a(102,"              "),i(103,"code",15),a(104,`
            `),t()(),e(105,"div",16)(106,"pre"),a(107,"              "),i(108,"code",17),a(109,`
            `),t()()()(),e(110,"div",6)(111,"app-code-view",7)(112,"h4",8),a(113," Icon "),t(),e(114,"div",9)(115,"div",35)(116,"button",36),i(117,"i-tabler",37),t(),e(118,"button",38),i(119,"i-tabler",39),t(),e(120,"button",40),i(121,"i-tabler",41),t(),e(122,"button",42),i(123,"i-tabler",43),t(),e(124,"button",44),i(125,"i-tabler",45),t()()(),e(126,"div",14)(127,"pre"),a(128,"              "),i(129,"code",15),a(130,`
            `),t()(),e(131,"div",16)(132,"pre"),a(133,"              "),i(134,"code",17),a(135,`
            `),t()()()(),e(136,"div",6)(137,"app-code-view",7)(138,"h4",8),a(139," Fab "),t(),e(140,"div",9)(141,"div",10)(142,"button",46),i(143,"i-tabler",47),t(),e(144,"button",48),i(145,"i-tabler",49),t(),e(146,"button",50),i(147,"i-tabler",51),t(),e(148,"button",52),i(149,"i-tabler",53),t(),e(150,"button",54),i(151,"i-tabler",55),t(),e(152,"button",56),i(153,"i-tabler",57),t()()(),e(154,"div",14)(155,"pre"),a(156,"              "),i(157,"code",15),a(158,`
            `),t()(),e(159,"div",16)(160,"pre"),a(161,"              "),i(162,"code",17),a(163,`
            `),t()()()(),e(164,"div",6)(165,"app-code-view",7)(166,"h4",8),a(167," Mini Fab "),t(),e(168,"div",9)(169,"div",10)(170,"button",58),i(171,"i-tabler",59),t(),e(172,"button",60),i(173,"i-tabler",61),t(),e(174,"button",62),i(175,"i-tabler",63),t(),e(176,"button",64),i(177,"i-tabler",65),t(),e(178,"button",66),i(179,"i-tabler",63),t(),e(180,"button",67),i(181,"i-tabler",68),t()()(),e(182,"div",14)(183,"pre"),a(184,"              "),i(185,"code",15),a(186,`
            `),t()(),e(187,"div",16)(188,"pre"),a(189,"              "),i(190,"code",17),a(191,`
            `),t()()()(),e(192,"div",6)(193,"app-code-view",7)(194,"h4",8),a(195," Extended Fab "),t(),e(196,"div",9)(197,"div",10)(198,"button",69)(199,"div",70),i(200,"i-tabler",71),e(201,"span"),a(202," Delete"),t()()(),e(203,"button",72)(204,"div",70),i(205,"i-tabler",73),a(206," Bookmark "),t()(),e(207,"button",74)(208,"div",70),i(209,"i-tabler",75),a(210," Home "),t()(),e(211,"button",76)(212,"div",70),i(213,"i-tabler",77),a(214," Heart "),t()()()(),e(215,"div",14)(216,"pre"),a(217,"              "),i(218,"code",15),a(219,`
            `),t()(),e(220,"div",16)(221,"pre"),a(222,"              "),i(223,"code",17),a(224,`
            `),t()()()()()()(),e(225,"mat-card",1)(226,"div",2)(227,"mat-card-title",3),a(228,"Button Toggle"),t()(),e(229,"mat-card-content",4)(230,"div",5)(231,"div",78)(232,"app-code-view",7)(233,"h4",8),a(234," Basic "),t(),e(235,"div",9)(236,"mat-button-toggle-group",79)(237,"mat-button-toggle",80),a(238,"Bold"),t(),e(239,"mat-button-toggle",81),a(240,"Italic"),t(),e(241,"mat-button-toggle",82),a(242,"Underline"),t()()(),e(243,"div",14)(244,"pre"),a(245,"              "),i(246,"code",15),a(247,`
            `),t()(),e(248,"div",16)(249,"pre"),a(250,"              "),i(251,"code",17),a(252,`
            `),t()()()(),e(253,"div",78)(254,"app-code-view",7)(255,"h4",8),a(256," Multiple Select "),t(),e(257,"div",9)(258,"mat-button-toggle-group",83)(259,"mat-button-toggle",84),a(260,"Flour"),t(),e(261,"mat-button-toggle",85),a(262,"Eggs"),t(),e(263,"mat-button-toggle",86),a(264,"Sugar"),t()()(),e(265,"div",14)(266,"pre"),a(267,"              "),i(268,"code",15),a(269,`
            `),t()(),e(270,"div",16)(271,"pre"),a(272,"              "),i(273,"code",17),a(274,`
            `),t()()()(),e(275,"div",78)(276,"app-code-view",7)(277,"h4",8),a(278," Reactive Form "),t(),e(279,"div",9)(280,"mat-button-toggle-group",87)(281,"mat-button-toggle",80),a(282,"Bold"),t(),e(283,"mat-button-toggle",81),a(284,"Italic"),t(),e(285,"mat-button-toggle",82),a(286,"Underline"),t()(),e(287,"p",88),a(288),t()(),e(289,"div",14)(290,"pre"),a(291,"              "),i(292,"code",15),a(293,`
            `),t()(),e(294,"div",16)(295,"pre"),a(296,"              "),i(297,"code",17),a(298,`
            `),t()()()(),e(299,"div",78)(300,"app-code-view",7)(301,"h4",8),a(302," Exclusive selection "),t(),e(303,"div",9)(304,"mat-button-toggle-group",null,0)(306,"mat-button-toggle",89)(307,"mat-icon"),a(308,"format_align_left"),t()(),e(309,"mat-button-toggle",90)(310,"mat-icon"),a(311,"format_align_center"),t()(),e(312,"mat-button-toggle",91)(313,"mat-icon"),a(314,"format_align_right"),t()(),e(315,"mat-button-toggle",92)(316,"mat-icon"),a(317,"format_align_justify"),t()()(),e(318,"div",88),a(319),t()(),e(320,"div",14)(321,"pre"),a(322,"              "),i(323,"code",15),a(324,`
            `),t()(),e(325,"div",16)(326,"pre"),a(327,"              "),i(328,"code",17),a(329,`
            `),t()()()()()()()),d&2){let p=b(305);o(7),n("isTitle",!0),o(14),n("highlight",l.codeForBasicButtons),o(5),n("highlightAuto",l.codeForBasicButtonsTs),o(3),n("isTitle",!0),o(14),n("highlight",l.codeForRaisedButtons),o(5),n("highlightAuto",l.codeForRaisedButtonsTs),o(3),n("isTitle",!0),o(22),n("highlight",l.codeForOutlinedButtons),o(5),n("highlightAuto",l.codeForOutlinedButtonsTs),o(3),n("isTitle",!0),o(22),n("highlight",l.codeForFlatButtons),o(5),n("highlightAuto",l.codeForFlatButtonsTs),o(3),n("isTitle",!0),o(18),n("highlight",l.codeForIconButtons),o(5),n("highlightAuto",l.codeForIconButtonsTs),o(3),n("isTitle",!0),o(20),n("highlight",l.codeForFabButtons),o(5),n("highlightAuto",l.codeForFabButtonsTs),o(3),n("isTitle",!0),o(20),n("highlight",l.codeForMiniFabButtons),o(5),n("highlightAuto",l.codeForMiniFabButtonsTs),o(3),n("isTitle",!0),o(25),n("highlight",l.codeForExtendedFabButtons),o(5),n("highlightAuto",l.codeForExtendedFabButtonsTs),o(9),n("isTitle",!0),o(14),n("highlight",l.codeForBasicToggleButtons),o(5),n("highlightAuto",l.codeForBasicToggleButtonsTs),o(3),n("isTitle",!0),o(14),n("highlight",l.codeForMultipleSelectToggleButtons),o(5),n("highlightAuto",l.codeForMultipleSelectToggleButtonsTs),o(3),n("isTitle",!0),o(4),n("formControl",l.fontStyleControl),o(8),x(" Chosen value is : ",l.fontStyleControl.value," "),o(4),n("highlight",l.codeForReactiveFormToggleButtons),o(5),n("highlightAuto",l.codeForReactiveFormToggleButtonsTs),o(3),n("isTitle",!0),o(19),x(" Selected value: ",p.value," "),o(4),n("highlight",l.codeForExclusiveSelectionToggleButtons),o(5),n("highlightAuto",l.codeForExclusiveSelectionToggleButtonsTs)}},dependencies:[y,I,N,Ee,S,E,w,G,O,Vt,Te,Ht,na,ra,J,ue,ce,_,k,T,M],encapsulation:2})}}return r})();var La=`  import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
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
`,Ra=`  import {Component} from '@angular/core';
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
`,Ba=`  import {Component} from '@angular/core';
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
`;var Ha=`  <section class="example-section">
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

`,Va=`  <div>
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
`,Ya=`  <div [formGroup]="toppings">
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
`;function fo(r,v){if(r&1){let m=P();e(0,"div")(1,"mat-checkbox",31),f("change",function(l){let p=c(m).$index,s=Ve();return u(s.update(l.checked,p))}),a(2),t()()}if(r&2){let m=v.$implicit;o(),n("checked",m.completed),o(),x(" ",m.name," ")}}var Ua=(()=>{class r{constructor(m){this._formBuilder=m,this.codeForBasicCheckbox=Ha,this.codeForBasicCheckboxTs=La,this.codeForConfigurableCheckbox=Va,this.codeForConfigurableCheckboxTs=Ra,this.codeForReactiveFormCheckbox=Ya,this.codeForReactiveFormCheckboxTs=Ba,this.toppings=this._formBuilder.group({pepperoni:!1,extracheese:!1,mushroom:!1}),this.checked=!1,this.indeterminate=!1,this.labelPosition="after",this.disabled=!1,this.task=He({name:"Parent task",completed:!1,subtasks:[{name:"Child task 1",completed:!1},{name:"Child task 2",completed:!1},{name:"Child task 3",completed:!1}]}),this.partiallyComplete=At(()=>{let d=this.task();return d.subtasks?d.subtasks.some(l=>l.completed)&&!d.subtasks.every(l=>l.completed):!1})}update(m,d){this.task.update(l=>(d===void 0?(l.completed=m,l.subtasks?.forEach(p=>p.completed=m)):(l.subtasks[d].completed=m,l.completed=l.subtasks?.every(p=>p.completed)??!0),Ct({},l)))}static{this.\u0275fac=function(d){return new(d||r)(ee(Me))}}static{this.\u0275cmp=g({type:r,selectors:[["app-checkbox"]],decls:97,vars:26,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"example-section"],[1,"example-margin"],[1,"example-margin",3,"disabled"],[1,"example-list-section"],[1,"example-margin",3,"change","checked","indeterminate"],[1,"m-l-24"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"f-w-600"],[3,"ngModelChange","ngModel"],["value","after","color","primary"],["value","before","color","primary"],["color","primary",3,"ngModelChange","ngModel"],[1,"p-24","rounded","bg-light","m-t-16"],[1,"f-s-16","f-w-600","m-b-16"],["color","primary",3,"ngModelChange","indeterminateChange","ngModel","indeterminate","labelPosition","disabled"],[3,"formGroup"],[1,"f-s-14","f-w-600"],["formControlName","pepperoni","color","primary"],["formControlName","extracheese","color","primary"],["formControlName","mushroom","color","primary"],[1,"p-24","rounded","bg-light","m-t-16",3,"formGroup"],[3,"change","checked"]],template:function(d,l){d&1&&(e(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),a(3,"Checkbox"),t()(),e(4,"mat-card-content",3)(5,"app-code-view",4)(6,"h4",5),a(7," Basic "),t(),e(8,"div",6)(9,"section",7)(10,"mat-checkbox",8),a(11,"Check me!"),t(),e(12,"mat-checkbox",9),a(13,"Disabled"),t()(),e(14,"section",7)(15,"span",10)(16,"mat-checkbox",11),f("change",function(s){return l.update(s.checked)}),a(17),t()(),e(18,"span",10)(19,"div",12),D(20,fo,3,2,"div",null,U),t()()()(),e(22,"div",13)(23,"pre"),a(24,"          "),i(25,"code",14),a(26,`
        `),t()(),e(27,"div",15)(28,"pre"),a(29,"          "),i(30,"code",16),a(31,`
        `),t()()(),e(32,"app-code-view",4)(33,"h4",5),a(34," Configuration "),t(),e(35,"div",6)(36,"div")(37,"label",17),a(38,"Align:"),t(),e(39,"mat-radio-group",18),B("ngModelChange",function(s){return L(l.labelPosition,s)||(l.labelPosition=s),s}),e(40,"mat-radio-button",19),a(41,"After"),t(),e(42,"mat-radio-button",20),a(43,"Before"),t()()(),e(44,"div")(45,"mat-checkbox",21),B("ngModelChange",function(s){return L(l.checked,s)||(l.checked=s),s}),a(46,"Checked"),t(),e(47,"mat-checkbox",21),B("ngModelChange",function(s){return L(l.indeterminate,s)||(l.indeterminate=s),s}),a(48,"Indeterminate"),t(),e(49,"mat-checkbox",21),B("ngModelChange",function(s){return L(l.disabled,s)||(l.disabled=s),s}),a(50,"Disabled"),t()(),e(51,"div",22)(52,"h2",23),a(53,"Result"),t(),e(54,"mat-checkbox",24),B("ngModelChange",function(s){return L(l.checked,s)||(l.checked=s),s})("indeterminateChange",function(s){return L(l.indeterminate,s)||(l.indeterminate=s),s}),a(55," I'm a checkbox "),t()()(),e(56,"div",13)(57,"pre"),a(58,"          "),i(59,"code",14),a(60,`
        `),t()(),e(61,"div",15)(62,"pre"),a(63,"          "),i(64,"code",16),a(65,`
        `),t()()(),e(66,"app-code-view",4)(67,"h4",5),a(68," Reactive Form "),t(),e(69,"div",6)(70,"div",25)(71,"h4",26),a(72,"Select your toppings:"),t(),e(73,"p")(74,"mat-checkbox",27),a(75,"Pepperoni"),t()(),e(76,"p")(77,"mat-checkbox",28),a(78,"Extra Cheese"),t()(),e(79,"p")(80,"mat-checkbox",29),a(81,"Mushroom"),t()()(),e(82,"div",30)(83,"h2",23),a(84,"You chose:"),t(),a(85),Z(86,"json"),t()(),e(87,"div",13)(88,"pre"),a(89,"          "),i(90,"code",14),a(91,`
        `),t()(),e(92,"div",15)(93,"pre"),a(94,"          "),i(95,"code",16),a(96,`
        `),t()()()()()),d&2&&(o(5),n("isTitle",!0),o(7),n("disabled",!0),o(4),n("checked",l.task().completed)("indeterminate",l.partiallyComplete()),o(),x(" ",l.task().name," "),o(3),A(l.task().subtasks),o(5),n("highlight",l.codeForBasicCheckbox),o(5),n("highlightAuto",l.codeForBasicCheckboxTs),o(2),n("isTitle",!0),o(7),R("ngModel",l.labelPosition),o(6),R("ngModel",l.checked),o(2),R("ngModel",l.indeterminate),o(2),R("ngModel",l.disabled),o(5),R("ngModel",l.checked)("indeterminate",l.indeterminate),n("labelPosition",l.labelPosition)("disabled",l.disabled),o(5),n("highlight",l.codeForConfigurableCheckbox),o(5),n("highlightAuto",l.codeForConfigurableCheckboxTs),o(2),n("isTitle",!0),o(4),n("formGroup",l.toppings),o(12),n("formGroup",l.toppings),o(3),x(" ",Q(86,24,l.toppings.value)," "),o(5),n("highlight",l.codeForReactiveFormCheckbox),o(5),n("highlightAuto",l.codeForReactiveFormCheckboxTs))},dependencies:[S,ke,z,q,E,w,G,y,I,K,Se,N,oe,ie,he,_,k,T,M,Ye],encapsulation:2})}}return r})();var Wa=`  import {Component} from '@angular/core';
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
`,ja=`  import {Component} from '@angular/core';
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
`;var Ka=`  <mat-radio-group aria-label="Select an option">
          <mat-radio-button value="1" color="primary">Option 1</mat-radio-button>
          <mat-radio-button value="2" color="primary">Option 2</mat-radio-button>
        </mat-radio-group>
`,za=`  <label id="example-radio-group-label" class="f-w-600 d-block f-s-14">Pick your favorite season</label>
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
`;function bo(r,v){if(r&1&&(e(0,"mat-radio-button",16),a(1),t()),r&2){let m=v.$implicit;n("value",m),o(),x(" ",m," ")}}var qa=(()=>{class r{constructor(){this.codeForBasicRadio=Ka,this.codeForBasicRadioTs=Wa,this.codeForngModelRadio=za,this.codeForngModelRadioTs=ja,this.seasons=["Winter","Spring","Summer","Autumn"]}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=g({type:r,selectors:[["app-radio"]],decls:46,vars:8,consts:[[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[3,"isTitle"],["Ctitle",""],["output",""],["aria-label","Select an option"],["value","1","color","primary"],["value","2","color","primary"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["id","example-radio-group-label",1,"f-w-600","d-block","f-s-14"],["aria-labelledby","example-radio-group-label",1,"example-radio-group",3,"ngModelChange","ngModel"],["color","primary",1,"example-radio-button",3,"value"],[1,"p-24","rounded","bg-light","m-t-16"],[1,"f-w-600","f-s-14"]],template:function(d,l){d&1&&(e(0,"mat-card",0)(1,"div",1)(2,"mat-card-title",2),a(3,"Radio"),t()(),e(4,"mat-card-content",3)(5,"app-code-view",4)(6,"h4",5),a(7," Basic "),t(),e(8,"div",6)(9,"mat-radio-group",7)(10,"mat-radio-button",8),a(11,"Option 1"),t(),e(12,"mat-radio-button",9),a(13,"Option 2"),t()()(),e(14,"div",10)(15,"pre"),a(16,"          "),i(17,"code",11),a(18,`
        `),t()(),e(19,"div",12)(20,"pre"),a(21,"          "),i(22,"code",13),a(23,`
        `),t()()(),e(24,"app-code-view",4)(25,"h4",5),a(26," ngModel "),t(),e(27,"div",6)(28,"label",14),a(29,"Pick your favorite season"),t(),e(30,"mat-radio-group",15),B("ngModelChange",function(s){return L(l.favoriteSeason,s)||(l.favoriteSeason=s),s}),D(31,bo,2,2,"mat-radio-button",16,U),t(),e(33,"div",17)(34,"div",18),a(35),t()()(),e(36,"div",10)(37,"pre"),a(38,"          "),i(39,"code",11),a(40,`
        `),t()(),e(41,"div",12)(42,"pre"),a(43,"          "),i(44,"code",13),a(45,`
        `),t()()()()()),d&2&&(o(5),n("isTitle",!0),o(12),n("highlight",l.codeForBasicRadio),o(5),n("highlightAuto",l.codeForBasicRadioTs),o(2),n("isTitle",!0),o(6),R("ngModel",l.favoriteSeason),o(),A(l.seasons),o(4),x(" Your favorite season is: ",l.favoriteSeason," "),o(4),n("highlight",l.codeForngModelRadio),o(5),n("highlightAuto",l.codeForngModelRadioTs))},dependencies:[S,z,q,E,w,G,y,I,Se,N,_,k,T,M],encapsulation:2})}}return r})();var mt=`  import {ChangeDetectionStrategy, Component} from '@angular/core';
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
`,Ja=`  import {ChangeDetectionStrategy, Component, Injectable, inject} from '@angular/core';
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
`,Xa=`  import {ChangeDetectionStrategy, Component} from '@angular/core';
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
`,Fe=`  import {ChangeDetectionStrategy, Component} from '@angular/core';
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
`,Za=`  import {ChangeDetectionStrategy, Component} from '@angular/core';
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
`,Qa=`  import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
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
`,$a=`  import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
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
`,ei=`  import {ChangeDetectionStrategy, Component, model} from '@angular/core';
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
`,ti=`  import {ChangeDetectionStrategy, Component} from '@angular/core';
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
`;var ai=`  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="picker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>
`,ii=`  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Enter a date range</mat-label>
              <mat-date-range-input [rangePicker]="custompicker">
                <input matStartDate placeholder="Start date" />
                <input matEndDate placeholder="End date" />
              </mat-date-range-input>
              <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="custompicker"></mat-datepicker-toggle>
              <mat-date-range-picker #custompicker></mat-date-range-picker>
            </mat-form-field>
`,oi=`  <mat-form-field appearance="outline" class="w-100">
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
`,li=`  <mat-form-field appearance="outline" class="w-100">
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
`,ni=`  <mat-form-field class="w-100" appearance="outline">
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
`,ri=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="openpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker #openpicker></mat-datepicker>
            </mat-form-field>
            <button mat-flat-button color="primary" (click)="openpicker.open()">
              Open
            </button>
`,mi=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="iconpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="iconpicker">
                <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>
              </mat-datepicker-toggle>
              <mat-datepicker #iconpicker></mat-datepicker>
            </mat-form-field>
`,di=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="customdatepicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="customdatepicker"></mat-datepicker-toggle>
              <mat-datepicker [dateClass]="dateClass" #customdatepicker></mat-datepicker>
            </mat-form-field>
`,si=`  <mat-form-field color="accent" appearance="outline" class="w-100">
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
`,pi=`  <mat-form-field class="w-100" appearance="outline">
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
`,ci=`  <p>
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
`,ui=`  <mat-card class="demo-inline-calendar-card cardWithShadow">
              <mat-calendar [(selected)]="selected"></mat-calendar>
            </mat-card>
            <p class="f-s-14 f-w-600 m-t-16">
              Selected date: {{ selected }}
            </p>
`,fi=`  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="startpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="startpicker"></mat-datepicker-toggle>
              <mat-datepicker #startpicker startView="year" [startAt]="startDate"></mat-datepicker>
            </mat-form-field>
`,bi=`  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="touchpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="touchpicker"></mat-datepicker-toggle>
              <mat-datepicker touchUi #touchpicker></mat-datepicker>
            </mat-form-field>
`;function vo(r,v){r&1&&(e(0,"mat-error"),a(1,"Invalid start date"),t())}function ho(r,v){r&1&&(e(0,"mat-error"),a(1,"Invalid end date"),t())}function go(r,v){if(r&1&&(e(0,"div"),a(1),t()),r&2){let m=v.$implicit;o(),C(m)}}var vi=new Date,it=vi.getMonth(),ot=vi.getFullYear(),So=(()=>{class r{constructor(m){this._dateAdapter=m}selectionFinished(m){return this._createFiveDayRange(m)}createPreview(m){return this._createFiveDayRange(m)}_createFiveDayRange(m){if(m){let d=this._dateAdapter.addCalendarDays(m,-2),l=this._dateAdapter.addCalendarDays(m,2);return new lt(d,l)}return new lt(null,null)}static{this.\u0275fac=function(d){return new(d||r)(Ft(Bt))}}static{this.\u0275prov=yt({token:r,factory:r.\u0275fac})}}return r})(),hi=(()=>{class r{addEvent(m,d){this.events.push(`${m}: ${d.value}`)}constructor(){this.codeForBasicDatepicker=ai,this.codeForBasicDatepickerTs=mt,this.codeForCustomSelectionDatepicker=ii,this.codeForCustomSelectionDatepickerTs=Ja,this.codeForFormsIntegrationDatepicker=oi,this.codeForFormsIntegrationDatepickerTs=Xa,this.codeForActionButtonsDatepicker=li,this.codeForActionButtonsDatepickerTs=Fe,this.codeForDateRangePickerDatepicker=ni,this.codeForDateRangePickerDatepickerTs=Za,this.codeForOpenMethodDatepicker=ri,this.codeForOpenMethodDatepickerTs=Fe,this.codeForCustomIconDatepicker=mi,this.codeForCustomIconDatepickerTs=Fe,this.codeForCustomDateClassesDatepicker=di,this.codeForCustomDateClassesDatepickerTs=Qa,this.codeForPalleteColorsDatepicker=si,this.codeForPalleteColorsDatepickerTs=Fe,this.codeForChangeEventsDatepicker=pi,this.codeForChangeEventsDatepickerTs=$a,this.codeForDisabledDatepicker=ci,this.codeForDisabledDatepickerTs=mt,this.codeForInlineDatepicker=ui,this.codeForInlineDatepickerTs=ei,this.codeForStartDateDatepicker=fi,this.codeForStartDateDatepickerTs=ti,this.codeForTouchUIDatepicker=bi,this.codeForTouchUIDatepickerTs=Fe,this.startDate=new Date(1990,0,1),this.campaignOne=new Ge({start:new F(new Date(ot,it,13)),end:new F(new Date(ot,it,16))}),this.campaignTwo=new Ge({start:new F(new Date(ot,it,15)),end:new F(new Date(ot,it,19))}),this.range=new Ge({start:new F(null),end:new F(null)}),this.dateClass=(m,d)=>{if(d==="month"){let l=m.getDate();return l===1||l===20?"example-custom-date-class":""}return""},this.events=[]}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=g({type:r,selectors:[["app-datepicker"]],features:[j([pe(),{provide:Yt,useClass:So}])],decls:419,vars:93,consts:[["picker",""],["custompicker",""],["formpicker",""],["datepicker",""],["rangePicker",""],["campaignOnePicker",""],["campaignTwoPicker",""],["openpicker",""],["iconpicker",""],["customdatepicker",""],["picker1",""],["picker2",""],["eventpicker",""],["dp1",""],["dp2",""],["dp3",""],["startpicker",""],["touchpicker",""],[1,"cardWithShadow","theme-card"],[1,"p-24"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],["appearance","outline",1,"w-100"],["matInput","",3,"matDatepicker"],["matIconSuffix","",3,"for"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[3,"rangePicker"],["matStartDate","","placeholder","Start date"],["matEndDate","","placeholder","End date"],[3,"formGroup","rangePicker"],["matStartDate","","formControlName","start","placeholder","Start date"],["matEndDate","","formControlName","end","placeholder","End date"],[1,"p-24","rounded","bg-light","m-t-16"],[1,"f-s-14","f-w-600"],["mat-button","","matDatepickerCancel",""],["mat-raised-button","","color","primary","matDatepickerApply",""],["mat-button","","matDateRangePickerCancel",""],["mat-raised-button","","color","primary","matDateRangePickerApply",""],[3,"formGroup","rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder","Start date","formControlName","start"],["matEndDate","","placeholder","End date","formControlName","end"],["appearance","outline",1,"w-100","m-t-20"],["mat-flat-button","","color","primary",3,"click"],["matDatepickerToggleIcon",""],[3,"dateClass"],["color","accent","appearance","outline",1,"w-100"],["color","accent","appearance","outline",1,"w-100","m-t-20"],["color","primary"],["matInput","",3,"dateInput","dateChange","matDatepicker"],[1,"bg-light","rounded","p-24","m-t-16"],[1,"f-s-16","f-w-600","m-b-16"],["matInput","","disabled","",3,"matDatepicker"],["matIconSuffix","","disabled","",3,"for"],["disabled","false"],[1,"demo-inline-calendar-card","cardWithShadow"],[3,"selectedChange","selected"],[1,"f-s-14","f-w-600","m-t-16"],["startView","year",3,"startAt"],["touchUi",""]],template:function(d,l){if(d&1){let p=P();e(0,"mat-card",18)(1,"div",19)(2,"mat-card-title",20),a(3,"Datepicker"),t()(),e(4,"mat-card-content",21)(5,"div",22)(6,"div",23)(7,"app-code-view",24)(8,"h4",25),a(9," Basic "),t(),e(10,"div",26)(11,"mat-form-field",27)(12,"mat-label"),a(13,"Choose a date"),t(),i(14,"input",28),e(15,"mat-hint"),a(16,"MM/DD/YYYY"),t(),i(17,"mat-datepicker-toggle",29)(18,"mat-datepicker",null,0),t()(),e(20,"div",30)(21,"pre"),a(22,"              "),i(23,"code",31),a(24,`
            `),t()(),e(25,"div",32)(26,"pre"),a(27,"              "),i(28,"code",33),a(29,`
            `),t()()()(),e(30,"div",23)(31,"app-code-view",24)(32,"h4",25),a(33," Custom Selection "),t(),e(34,"div",26)(35,"mat-form-field",27)(36,"mat-label"),a(37,"Enter a date range"),t(),e(38,"mat-date-range-input",34),i(39,"input",35)(40,"input",36),t(),e(41,"mat-hint"),a(42,"MM/DD/YYYY \u2013 MM/DD/YYYY"),t(),i(43,"mat-datepicker-toggle",29)(44,"mat-date-range-picker",null,1),t()(),e(46,"div",30)(47,"pre"),a(48,"              "),i(49,"code",31),a(50,`
            `),t()(),e(51,"div",32)(52,"pre"),a(53,"              "),i(54,"code",33),a(55,`
            `),t()()()(),e(56,"div",23)(57,"app-code-view",24)(58,"h4",25),a(59," Forms integration "),t(),e(60,"div",26)(61,"mat-form-field",27)(62,"mat-label"),a(63,"Enter a date range"),t(),e(64,"mat-date-range-input",37),i(65,"input",38)(66,"input",39),t(),e(67,"mat-hint"),a(68,"MM/DD/YYYY \u2013 MM/DD/YYYY"),t(),i(69,"mat-datepicker-toggle",29)(70,"mat-date-range-picker",null,2),Pe(72,vo,2,0,"mat-error"),Pe(73,ho,2,0,"mat-error"),t(),e(74,"div",40)(75,"p",41),a(76),Z(77,"json"),t()()(),e(78,"div",30)(79,"pre"),a(80,"              "),i(81,"code",31),a(82,`
            `),t()(),e(83,"div",32)(84,"pre"),a(85,"              "),i(86,"code",33),a(87,`
            `),t()()()(),e(88,"div",23)(89,"app-code-view",24)(90,"h4",25),a(91," Action buttons "),t(),e(92,"div",26)(93,"mat-form-field",27)(94,"mat-label"),a(95,"Choose a date"),t(),i(96,"input",28),e(97,"mat-hint"),a(98,"MM/DD/YYYY"),t(),i(99,"mat-datepicker-toggle",29),e(100,"mat-datepicker",null,3)(102,"mat-datepicker-actions")(103,"button",42),a(104,"Cancel"),t(),e(105,"button",43),a(106," Apply "),t()()()(),e(107,"mat-form-field",27)(108,"mat-label"),a(109,"Enter a date range"),t(),e(110,"mat-date-range-input",34),i(111,"input",35)(112,"input",36),t(),e(113,"mat-hint"),a(114,"MM/DD/YYYY \u2013 MM/DD/YYYY"),t(),i(115,"mat-datepicker-toggle",29),e(116,"mat-date-range-picker",null,4)(118,"mat-date-range-picker-actions")(119,"button",44),a(120,"Cancel"),t(),e(121,"button",45),a(122," Apply "),t()()()()(),e(123,"div",30)(124,"pre"),a(125,"              "),i(126,"code",31),a(127,`
            `),t()(),e(128,"div",32)(129,"pre"),a(130,"              "),i(131,"code",33),a(132,`
            `),t()()()(),e(133,"div",23)(134,"app-code-view",24)(135,"h4",25),a(136," Date range picker "),t(),e(137,"div",26)(138,"mat-form-field",27)(139,"mat-label"),a(140,"First campaign"),t(),e(141,"mat-date-range-input",46),i(142,"input",47)(143,"input",48),t(),e(144,"mat-hint"),a(145,"MM/DD/YYYY \u2013 MM/DD/YYYY"),t(),i(146,"mat-datepicker-toggle",29)(147,"mat-date-range-picker",null,5),t(),e(149,"mat-form-field",49)(150,"mat-label"),a(151,"Second campaign"),t(),e(152,"mat-date-range-input",46),i(153,"input",47)(154,"input",48),t(),i(155,"mat-datepicker-toggle",29),e(156,"mat-hint"),a(157,"MM/DD/YYYY \u2013 MM/DD/YYYY"),t(),i(158,"mat-date-range-picker",null,6),t()(),e(160,"div",30)(161,"pre"),a(162,"              "),i(163,"code",31),a(164,`
            `),t()(),e(165,"div",32)(166,"pre"),a(167,"              "),i(168,"code",33),a(169,`
            `),t()()()(),e(170,"div",23)(171,"app-code-view",24)(172,"h4",25),a(173," Open Method "),t(),e(174,"div",26)(175,"mat-form-field",27)(176,"mat-label"),a(177,"Choose a date"),t(),i(178,"input",28),e(179,"mat-hint"),a(180,"MM/DD/YYYY"),t(),i(181,"mat-datepicker",null,7),t(),e(183,"button",50),f("click",function(){c(p);let h=b(182);return u(h.open())}),a(184," Open "),t()(),e(185,"div",30)(186,"pre"),a(187,"              "),i(188,"code",31),a(189,`
            `),t()(),e(190,"div",32)(191,"pre"),a(192,"              "),i(193,"code",33),a(194,`
            `),t()()()(),e(195,"div",23)(196,"app-code-view",24)(197,"h4",25),a(198," Custom Icon "),t(),e(199,"div",26)(200,"mat-form-field",27)(201,"mat-label"),a(202,"Choose a date"),t(),i(203,"input",28),e(204,"mat-hint"),a(205,"MM/DD/YYYY"),t(),e(206,"mat-datepicker-toggle",29)(207,"mat-icon",51),a(208,"keyboard_arrow_down"),t()(),i(209,"mat-datepicker",null,8),t()(),e(211,"div",30)(212,"pre"),a(213,"              "),i(214,"code",31),a(215,`
            `),t()(),e(216,"div",32)(217,"pre"),a(218,"              "),i(219,"code",33),a(220,`
            `),t()()()(),e(221,"div",23)(222,"app-code-view",24)(223,"h4",25),a(224," Custom Date Classes "),t(),e(225,"div",26)(226,"mat-form-field",27)(227,"mat-label"),a(228,"Choose a date"),t(),i(229,"input",28),e(230,"mat-hint"),a(231,"MM/DD/YYYY"),t(),i(232,"mat-datepicker-toggle",29)(233,"mat-datepicker",52,9),t()(),e(235,"div",30)(236,"pre"),a(237,"              "),i(238,"code",31),a(239,`
            `),t()(),e(240,"div",32)(241,"pre"),a(242,"              "),i(243,"code",33),a(244,`
            `),t()()()(),e(245,"div",23)(246,"app-code-view",24)(247,"h4",25),a(248," Pallete Colors "),t(),e(249,"div",26)(250,"mat-form-field",53)(251,"mat-label"),a(252,"Inherited calendar color"),t(),i(253,"input",28),e(254,"mat-hint"),a(255,"MM/DD/YYYY"),t(),i(256,"mat-datepicker-toggle",29)(257,"mat-datepicker",null,10),t(),e(259,"mat-form-field",54)(260,"mat-label"),a(261,"Custom calendar color"),t(),i(262,"input",28),e(263,"mat-hint"),a(264,"MM/DD/YYYY"),t(),i(265,"mat-datepicker-toggle",29)(266,"mat-datepicker",55,11),t()(),e(268,"div",30)(269,"pre"),a(270,"              "),i(271,"code",31),a(272,`
            `),t()(),e(273,"div",32)(274,"pre"),a(275,"              "),i(276,"code",33),a(277,`
            `),t()()()(),e(278,"div",23)(279,"app-code-view",24)(280,"h4",25),a(281," Change Events "),t(),e(282,"div",26)(283,"mat-form-field",27)(284,"mat-label"),a(285,"Input & change events"),t(),e(286,"input",56),f("dateInput",function(h){return c(p),u(l.addEvent("input",h))})("dateChange",function(h){return c(p),u(l.addEvent("change",h))}),t(),e(287,"mat-hint"),a(288,"MM/DD/YYYY"),t(),i(289,"mat-datepicker-toggle",29)(290,"mat-datepicker",null,12),t(),e(292,"div",57)(293,"h2",58),a(294,"Logs:"),t(),D(295,go,2,1,"div",null,U),t()(),e(297,"div",30)(298,"pre"),a(299,"              "),i(300,"code",31),a(301,`
            `),t()(),e(302,"div",32)(303,"pre"),a(304,"              "),i(305,"code",33),a(306,`
            `),t()()()(),e(307,"div",23)(308,"app-code-view",24)(309,"h4",25),a(310," Disabled "),t(),e(311,"div",26)(312,"p")(313,"mat-form-field",27)(314,"mat-label"),a(315,"Completely disabled"),t(),i(316,"input",59),e(317,"mat-hint"),a(318,"MM/DD/YYYY"),t(),i(319,"mat-datepicker-toggle",29)(320,"mat-datepicker",null,13),t()(),e(322,"p")(323,"mat-form-field",27)(324,"mat-label"),a(325,"Popup disabled"),t(),i(326,"input",28),e(327,"mat-hint"),a(328,"MM/DD/YYYY"),t(),i(329,"mat-datepicker-toggle",60)(330,"mat-datepicker",null,14),t()(),e(332,"p")(333,"mat-form-field",27)(334,"mat-label"),a(335,"Input disabled"),t(),i(336,"input",59),e(337,"mat-hint"),a(338,"MM/DD/YYYY"),t(),i(339,"mat-datepicker-toggle",29)(340,"mat-datepicker",61,15),t()()(),e(342,"div",30)(343,"pre"),a(344,"              "),i(345,"code",31),a(346,`
            `),t()(),e(347,"div",32)(348,"pre"),a(349,"              "),i(350,"code",33),a(351,`
            `),t()()()(),e(352,"div",23)(353,"app-code-view",24)(354,"h4",25),a(355," Inline "),t(),e(356,"div",26)(357,"mat-card",62)(358,"mat-calendar",63),B("selectedChange",function(h){return c(p),L(l.selected,h)||(l.selected=h),u(h)}),t()(),e(359,"p",64),a(360),t()(),e(361,"div",30)(362,"pre"),a(363,"              "),i(364,"code",31),a(365,`
            `),t()(),e(366,"div",32)(367,"pre"),a(368,"              "),i(369,"code",33),a(370,`
            `),t()()()(),e(371,"div",23)(372,"app-code-view",24)(373,"h4",25),a(374," Start Date "),t(),e(375,"div",26)(376,"mat-form-field",27)(377,"mat-label"),a(378,"Choose a date"),t(),i(379,"input",28),e(380,"mat-hint"),a(381,"MM/DD/YYYY"),t(),i(382,"mat-datepicker-toggle",29)(383,"mat-datepicker",65,16),t()(),e(385,"div",30)(386,"pre"),a(387,"              "),i(388,"code",31),a(389,`
            `),t()(),e(390,"div",32)(391,"pre"),a(392,"              "),i(393,"code",33),a(394,`
            `),t()()()(),e(395,"div",23)(396,"app-code-view",24)(397,"h4",25),a(398," Touch Ui "),t(),e(399,"div",26)(400,"mat-form-field",27)(401,"mat-label"),a(402,"Choose a date"),t(),i(403,"input",28),e(404,"mat-hint"),a(405,"MM/DD/YYYY"),t(),i(406,"mat-datepicker-toggle",29)(407,"mat-datepicker",66,17),t()(),e(409,"div",30)(410,"pre"),a(411,"              "),i(412,"code",31),a(413,`
            `),t()(),e(414,"div",32)(415,"pre"),a(416,"              "),i(417,"code",33),a(418,`
            `),t()()()()()()()}if(d&2){let p=b(19),s=b(45),h=b(71),Be=b(101),ft=b(117),bt=b(148),vt=b(159),lo=b(182),ht=b(210),gt=b(234),St=b(258),xt=b(267),Et=b(291),wt=b(321),Mt=b(331),_t=b(341),kt=b(384),Tt=b(408);o(7),n("isTitle",!0),o(7),n("matDatepicker",p),o(3),n("for",p),o(6),n("highlight",l.codeForBasicDatepicker),o(5),n("highlightAuto",l.codeForBasicDatepickerTs),o(3),n("isTitle",!0),o(7),n("rangePicker",s),o(5),n("for",s),o(6),n("highlight",l.codeForCustomSelectionDatepicker),o(5),n("highlightAuto",l.codeForCustomSelectionDatepickerTs),o(3),n("isTitle",!0),o(7),n("formGroup",l.range)("rangePicker",h),o(5),n("for",h),o(3),Ne(l.range.controls.start.hasError("matStartDateInvalid")?72:-1),o(),Ne(l.range.controls.end.hasError("matEndDateInvalid")?73:-1),o(3),x(" Selected range: ",Q(77,91,l.range.value)," "),o(5),n("highlight",l.codeForFormsIntegrationDatepicker),o(5),n("highlightAuto",l.codeForFormsIntegrationDatepickerTs),o(3),n("isTitle",!0),o(7),n("matDatepicker",Be),o(3),n("for",Be),o(11),n("rangePicker",ft),o(5),n("for",ft),o(11),n("highlight",l.codeForActionButtonsDatepicker),o(5),n("highlightAuto",l.codeForActionButtonsDatepickerTs),o(3),n("isTitle",!0),o(7),n("formGroup",l.campaignOne)("rangePicker",bt)("comparisonStart",l.campaignTwo.value.start)("comparisonEnd",l.campaignTwo.value.end),o(5),n("for",bt),o(6),n("formGroup",l.campaignTwo)("rangePicker",vt)("comparisonStart",l.campaignOne.value.start)("comparisonEnd",l.campaignOne.value.end),o(3),n("for",vt),o(8),n("highlight",l.codeForDateRangePickerDatepicker),o(5),n("highlightAuto",l.codeForDateRangePickerDatepickerTs),o(3),n("isTitle",!0),o(7),n("matDatepicker",lo),o(10),n("highlight",l.codeForOpenMethodDatepicker),o(5),n("highlightAuto",l.codeForOpenMethodDatepickerTs),o(3),n("isTitle",!0),o(7),n("matDatepicker",ht),o(3),n("for",ht),o(8),n("highlight",l.codeForCustomIconDatepicker),o(5),n("highlightAuto",l.codeForCustomIconDatepickerTs),o(3),n("isTitle",!0),o(7),n("matDatepicker",gt),o(3),n("for",gt),o(),n("dateClass",l.dateClass),o(5),n("highlight",l.codeForCustomDateClassesDatepicker),o(5),n("highlightAuto",l.codeForCustomDateClassesDatepickerTs),o(3),n("isTitle",!0),o(7),n("matDatepicker",St),o(3),n("for",St),o(6),n("matDatepicker",xt),o(3),n("for",xt),o(6),n("highlight",l.codeForPalleteColorsDatepicker),o(5),n("highlightAuto",l.codeForPalleteColorsDatepickerTs),o(3),n("isTitle",!0),o(7),n("matDatepicker",Et),o(3),n("for",Et),o(6),A(l.events),o(5),n("highlight",l.codeForChangeEventsDatepicker),o(5),n("highlightAuto",l.codeForChangeEventsDatepickerTs),o(3),n("isTitle",!0),o(8),n("matDatepicker",wt),o(3),n("for",wt),o(7),n("matDatepicker",Mt),o(3),n("for",Mt),o(7),n("matDatepicker",_t),o(3),n("for",_t),o(6),n("highlight",l.codeForDisabledDatepicker),o(5),n("highlightAuto",l.codeForDisabledDatepickerTs),o(3),n("isTitle",!0),o(5),R("selected",l.selected),o(2),x(" Selected date: ",l.selected," "),o(4),n("highlight",l.codeForInlineDatepicker),o(5),n("highlightAuto",l.codeForInlineDatepickerTs),o(3),n("isTitle",!0),o(7),n("matDatepicker",kt),o(3),n("for",kt),o(),n("startAt",l.startDate),o(5),n("highlight",l.codeForStartDateDatepicker),o(5),n("highlightAuto",l.codeForStartDateDatepickerTs),o(3),n("isTitle",!0),o(7),n("matDatepicker",Tt),o(3),n("for",Tt),o(6),n("highlight",l.codeForTouchUIDatepicker),o(5),n("highlightAuto",l.codeForTouchUIDatepickerTs)}},dependencies:[S,Gt,ne,re,me,Ut,Wt,jt,Kt,zt,Xt,Jt,qt,V,H,je,We,le,Y,E,w,G,O,J,y,ae,I,K,N,oe,ie,he,se,de,_,k,T,M,Ye],styles:[`button.example-custom-date-class{background:orange;border-radius:100%}.demo-inline-calendar-card{width:300px}
`],encapsulation:2})}}return r})();var gi=`  import { Component } from '@angular/core';
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

`,Si=`  import { Component } from '@angular/core';
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

`,st=`  import { Component } from '@angular/core';
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

`,pt=`  import { Component } from '@angular/core';
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

`;var xi=`    <form>
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
`,Ei=`    <form>
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
`,wi=`    <mat-card>
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
`,Mi=`    <mat-card>
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
`,_i=`    <mat-accordion>
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
`,ki=`    <mat-card class="cardWithShadow">
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
`;var Ci=(()=>{class r{constructor(){this.hide=!0,this.hide2=!0,this.conhide=!0,this.alignhide=!0,this.step=0,this.panelOpenState=!1,this.codeForBasicLayout=xi,this.codeForBasicLayoutTs=gi,this.codeForBasicwithIcons=Ei,this.codeForBasicwithIconsTs=Si,this.codeForFormSeparator=wi,this.codeForFormSeparatorTs=st,this.codeForFormLabelAlign=Mi,this.codeForFormLabelAlignTs=st,this.codeForCollpaseForm=_i,this.codeForCollpaseFormTs=pt,this.codeForFormwithTabs=ki,this.codeForFormwithTabsTs=pt}setStep(m){this.step=m}nextStep(){this.step++}prevStep(){this.step--}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=g({type:r,selectors:[["app-form-horizontal"]],features:[j([pe()])],decls:622,vars:41,consts:[["birthpicker",""],["birthpicker2",""],["birthpicker3",""],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"col-sm-4","d-flex","align-items-center"],[1,"f-s-14","f-w-600","d-block","m-b-16"],[1,"col-sm-8"],["appearance","outline",1,"w-100"],["matInput","","placeholder","John Deo"],["matInput","","placeholder","ACME Inc."],["matInput","","placeholder","john.deo","type","email"],["matTextSuffix",""],["matInput","","placeholder","123 4561 123"],["rows","5","matInput","","placeholder","Hi, Do you have a moment to talk Deo ?"],[1,"row","justify-content-end"],["mat-flat-button",""],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matPrefix","",1,"op-5"],["name","user",1,"icon-20","d-flex"],["name","building-arch",1,"icon-20","d-flex"],["name","mail",1,"icon-20","d-flex"],["name","phone",1,"icon-20","d-flex"],["name","message-2",1,"icon-20","d-flex"],[1,"f-s-16","f-w-600","m-b-16"],[1,"f-s-14","f-w-600","d-block","m-b-24"],["matInput","",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],[1,"op-5"],[1,"b-t-1"],["value","0"],["value","1"],["value","2"],["value","3"],["matInput","",3,"matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","placeholder","123 4567 123"],["mat-flat-button","",1,"bg-error","text-white","m-l-8"],[1,"f-s-16","m-0","f-w-600","m-b-16"],[1,"col-sm-4","d-flex","align-items-center","justify-content-end"],[1,"mat-headline-6","m-y-24"],["hideToggle","",1,"cardWithShadow",3,"opened","closed","expanded"],[1,"f-w-600","f-s-16"],[1,"col-lg-6","col-sm-6"],["matInput","","placeholder","150 Foot Ring Road"],["matInput","","placeholder","Jackson"],["aria-label","Select an option",1,"m-t-8"],["value","1","color","primary"],["value","2","color","primary"],["matInput","","placeholder","123 4561 213"],["matInput","","placeholder","630012"],["matInput","","placeholder","Nr. wall street"],["mat-flat-button","",3,"click"],["value","3","color","primary"],["mat-flat-button","",1,"bg-error","text-white",3,"click"],[1,"row","m-t-12"],[1,"col-sm-9"],[1,"f-s-14","f-w-600","m-b-8","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","type","text","placeholder","123 200 540 620"],[1,"col-sm-6"],["matInput","","type","text","placeholder","John Deo"],[1,"col-sm-3"],["matInput","","type","text","placeholder","MM/YY"],["matInput","","type","text","placeholder","2501"],["matSuffix","",1,"op-5"],["name","info-square-rounded",1,"icon-20","d-flex"],[1,"cardWithShadow"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","0ms"],["label","Personal Info"],[1,"col-sm-3","d-flex","align-items-center"],["matInput","","placeholder","John"],["value","in"],["value","fr"],["value","af"],["matInput","","placeholder","Deo"],["value","en"],["matInput","","placeholder","123 4560 123"],[1,"m-t-12","text-right"],["label","Account Details"],["matInput","","placeholder","John.Deo"],["matInput","","placeholder","john.deo"],["label","Social Links"],["matInput","","placeholder","https://twitter.com/abc"],["matInput","","placeholder","https://facebook.com/abc"],["matInput","","placeholder","https://plus.google.com/abc"],["matInput","","placeholder","https://linkedin.com/abc"],["matInput","","placeholder","https://instagram.com/abc"],["matInput","","placeholder","https://quora.com/abc"]],template:function(d,l){if(d&1){let p=P();e(0,"div",3)(1,"div",4)(2,"app-code-view",5)(3,"h4",6),a(4,"Basic Layout"),t(),e(5,"div",7)(6,"form")(7,"div",3)(8,"div",8)(9,"mat-label",9),a(10,"Name"),t()(),e(11,"div",10)(12,"mat-form-field",11),i(13,"input",12),t()()(),e(14,"div",3)(15,"div",8)(16,"mat-label",9),a(17,"Company"),t()(),e(18,"div",10)(19,"mat-form-field",11),i(20,"input",13),t()()(),e(21,"div",3)(22,"div",8)(23,"mat-label",9),a(24,"Email"),t()(),e(25,"div",10)(26,"mat-form-field",11),i(27,"input",14),e(28,"span",15),a(29,"@exmaple.com"),t()()()(),e(30,"div",3)(31,"div",8)(32,"mat-label",9),a(33,"Phone No"),t()(),e(34,"div",10)(35,"mat-form-field",11),i(36,"input",16),t()()(),e(37,"div",3)(38,"div",8)(39,"mat-label",9),a(40,"Message "),t()(),e(41,"div",10)(42,"mat-form-field",11),i(43,"textarea",17),t()()(),e(44,"div",18)(45,"div",10)(46,"button",19),a(47,"Send"),t()()()()(),e(48,"div",20)(49,"pre"),a(50,"          "),i(51,"code",21),a(52,`
        `),t()(),e(53,"div",22)(54,"pre"),a(55,"          "),i(56,"code",23),a(57,`
        `),t()()()(),e(58,"div",4)(59,"app-code-view",5)(60,"h4",6),a(61,"Basic with Icons"),t(),e(62,"div",7)(63,"form")(64,"div",3)(65,"div",8)(66,"mat-label",9),a(67,"Name"),t()(),e(68,"div",10)(69,"mat-form-field",11),i(70,"input",12),e(71,"mat-icon",24),i(72,"i-tabler",25),t()()()(),e(73,"div",3)(74,"div",8)(75,"mat-label",9),a(76,"Company"),t()(),e(77,"div",10)(78,"mat-form-field",11),i(79,"input",13),e(80,"mat-icon",24),i(81,"i-tabler",26),t()()()(),e(82,"div",3)(83,"div",8)(84,"mat-label",9),a(85,"Email"),t()(),e(86,"div",10)(87,"mat-form-field",11),i(88,"input",14),e(89,"mat-icon",24),i(90,"i-tabler",27),t()()()(),e(91,"div",3)(92,"div",8)(93,"mat-label",9),a(94,"Phone No"),t()(),e(95,"div",10)(96,"mat-form-field",11),i(97,"input",16),e(98,"mat-icon",24),i(99,"i-tabler",28),t()()()(),e(100,"div",3)(101,"div",8)(102,"mat-label",9),a(103,"Message "),t()(),e(104,"div",10)(105,"mat-form-field",11),i(106,"textarea",17),e(107,"mat-icon",24),i(108,"i-tabler",29),t()()()(),e(109,"div",18)(110,"div",10)(111,"button",19),a(112,"Send"),t()()()()(),e(113,"div",20)(114,"pre"),a(115,"          "),i(116,"code",21),a(117,`
        `),t()(),e(118,"div",22)(119,"pre"),a(120,"          "),i(121,"code",23),a(122,`
        `),t()()()(),e(123,"div",4)(124,"app-code-view",5)(125,"h4",6),a(126,"Form Separator"),t(),e(127,"div",7)(128,"mat-card")(129,"mat-card-content")(130,"h4",30),a(131,"Account Details"),t(),e(132,"div",3)(133,"div",8)(134,"mat-label",31),a(135,"Username "),t()(),e(136,"div",10)(137,"mat-form-field",11),i(138,"input",12),t()()(),e(139,"div",3)(140,"div",8)(141,"mat-label",31),a(142,"Email"),t()(),e(143,"div",10)(144,"mat-form-field",11),i(145,"input",14),e(146,"span",15),a(147,"@exmaple.com"),t()()()(),e(148,"div",3)(149,"div",8)(150,"mat-label",31),a(151,"Password "),t()(),e(152,"div",10)(153,"mat-form-field",11),i(154,"input",32),e(155,"button",33),f("click",function(){return c(p),u(l.hide=!l.hide)}),e(156,"mat-icon",34),a(157),t()()()()()(),e(158,"mat-card-content",35)(159,"h4",30),a(160,"Personal Info"),t(),e(161,"div",3)(162,"div",8)(163,"mat-label",31),a(164,"Full Name "),t()(),e(165,"div",10)(166,"mat-form-field",11),i(167,"input",12),t()()(),e(168,"div",3)(169,"div",8)(170,"mat-label",31),a(171,"Country "),t()(),e(172,"div",10)(173,"mat-form-field",11)(174,"mat-select",36),i(175,"mat-option",36),e(176,"mat-option",37),a(177,"India"),t(),e(178,"mat-option",38),a(179,"Africa"),t(),e(180,"mat-option",39),a(181,"United Kingdom"),t()()()()(),e(182,"div",3)(183,"div",8)(184,"mat-label",31),a(185,"Birth Date "),t()(),e(186,"div",10)(187,"mat-form-field",11),i(188,"input",40)(189,"mat-datepicker-toggle",41)(190,"mat-datepicker",null,0),t()()(),e(192,"div",3)(193,"div",8)(194,"mat-label",31),a(195,"Phone no "),t()(),e(196,"div",10)(197,"mat-form-field",11),i(198,"input",42),t()()(),e(199,"div",18)(200,"div",10)(201,"button",19),a(202,"Submit"),t(),e(203,"button",43),a(204," Cancel "),t()()()()()(),e(205,"div",20)(206,"pre"),a(207,"          "),i(208,"code",21),a(209,`
        `),t()(),e(210,"div",22)(211,"pre"),a(212,"          "),i(213,"code",23),a(214,`
        `),t()()()(),e(215,"div",4)(216,"app-code-view",5)(217,"h4",6),a(218,"Form Label Alignment"),t(),e(219,"div",7)(220,"mat-card")(221,"mat-card-content")(222,"h4",44),a(223,"Account Details"),t(),e(224,"div",3)(225,"div",45)(226,"mat-label",31),a(227,"Username "),t()(),e(228,"div",10)(229,"mat-form-field",11),i(230,"input",12),t()()(),e(231,"div",3)(232,"div",45)(233,"mat-label",31),a(234,"Email"),t()(),e(235,"div",10)(236,"mat-form-field",11),i(237,"input",14),e(238,"span",15),a(239,"@exmaple.com"),t()()()(),e(240,"div",3)(241,"div",45)(242,"mat-label",31),a(243,"Password "),t()(),e(244,"div",10)(245,"mat-form-field",11),i(246,"input",32),e(247,"button",33),f("click",function(){return c(p),u(l.alignhide=!l.alignhide)}),e(248,"mat-icon",34),a(249),t()()()()()(),e(250,"mat-card-content",35)(251,"h4",44),a(252,"Personal Info"),t(),e(253,"div",3)(254,"div",45)(255,"mat-label",31),a(256,"Full Name "),t()(),e(257,"div",10)(258,"mat-form-field",11),i(259,"input",12),t()()(),e(260,"div",3)(261,"div",45)(262,"mat-label",31),a(263,"Country "),t()(),e(264,"div",10)(265,"mat-form-field",11)(266,"mat-select",36),i(267,"mat-option",36),e(268,"mat-option",37),a(269,"India"),t(),e(270,"mat-option",38),a(271,"Africa"),t(),e(272,"mat-option",39),a(273,"United Kingdom"),t()()()()(),e(274,"div",3)(275,"div",45)(276,"mat-label",31),a(277,"Birth Date "),t()(),e(278,"div",10)(279,"mat-form-field",11),i(280,"input",40)(281,"mat-datepicker-toggle",41)(282,"mat-datepicker",null,1),t()()(),e(284,"div",3)(285,"div",45)(286,"mat-label",31),a(287,"Phone no "),t()(),e(288,"div",10)(289,"mat-form-field",11),i(290,"input",42),t()()(),e(291,"div",18)(292,"div",10)(293,"button",19),a(294,"Submit"),t(),e(295,"button",43),a(296," Cancel "),t()()()()()(),e(297,"div",20)(298,"pre"),a(299,"          "),i(300,"code",21),a(301,`
        `),t()(),e(302,"div",22)(303,"pre"),a(304,"          "),i(305,"code",23),a(306,`
        `),t()()()()(),e(307,"h4",46),a(308,"Collapsible Section"),t(),e(309,"app-code-view")(310,"div",7)(311,"mat-accordion")(312,"mat-expansion-panel",47),f("opened",function(){return c(p),u(l.panelOpenState=!0)})("closed",function(){return c(p),u(l.panelOpenState=!1)}),e(313,"mat-expansion-panel-header")(314,"mat-panel-title",48),a(315,"Delivery Address "),t()(),e(316,"div",3)(317,"div",49)(318,"div",3)(319,"div",45)(320,"mat-label",31),a(321,"Full Name "),t()(),e(322,"div",10)(323,"mat-form-field",11),i(324,"input",12),t()()(),e(325,"div",3)(326,"div",45)(327,"mat-label",31),a(328,"Address "),t()(),e(329,"div",10)(330,"mat-form-field",11),i(331,"input",50),t()()(),e(332,"div",3)(333,"div",45)(334,"mat-label",31),a(335,"City "),t()(),e(336,"div",10)(337,"mat-form-field",11),i(338,"input",51),t()()(),e(339,"div",3)(340,"div",45)(341,"mat-label",31),a(342,"Address Type "),t()(),e(343,"div",10)(344,"mat-radio-group",52)(345,"mat-radio-button",53),a(346,"Home (All day delivery)"),t(),e(347,"mat-radio-button",54),a(348,"Office (Delivery between 10 AM - 5 PM)"),t()()()()(),e(349,"div",49)(350,"div",3)(351,"div",45)(352,"mat-label",31),a(353,"Phone "),t()(),e(354,"div",10)(355,"mat-form-field",11),i(356,"input",55),t()()(),e(357,"div",3)(358,"div",45)(359,"mat-label",31),a(360,"Pincode "),t()(),e(361,"div",10)(362,"mat-form-field",11),i(363,"input",56),t()()(),e(364,"div",3)(365,"div",45)(366,"mat-label",31),a(367,"Landmark "),t()(),e(368,"div",10)(369,"mat-form-field",11),i(370,"input",57),t()()()()(),e(371,"mat-action-row")(372,"button",58),f("click",function(){return c(p),u(l.nextStep())}),a(373,"Next"),t()()(),e(374,"mat-expansion-panel",47),f("opened",function(){return c(p),u(l.panelOpenState=!0)})("closed",function(){return c(p),u(l.panelOpenState=!1)}),e(375,"mat-expansion-panel-header")(376,"mat-panel-title",48),a(377,"Delivery Options "),t()(),e(378,"mat-radio-group",52)(379,"mat-radio-button",53),a(380,"Standard 3-5 Days"),t(),e(381,"mat-radio-button",54),a(382,"Express"),t(),e(383,"mat-radio-button",59),a(384,"Overnight"),t()(),e(385,"mat-action-row")(386,"button",60),f("click",function(){return c(p),u(l.prevStep())}),a(387," Previous "),t(),e(388,"button",58),f("click",function(){return c(p),u(l.nextStep())}),a(389,"Next"),t()()(),e(390,"mat-expansion-panel",47),f("opened",function(){return c(p),u(l.panelOpenState=!0)})("closed",function(){return c(p),u(l.panelOpenState=!1)}),e(391,"mat-expansion-panel-header")(392,"mat-panel-title",48),a(393,"Payment Method "),t()(),e(394,"mat-radio-group",52)(395,"mat-radio-button",53),a(396,"Credit/Debit/ATM Card "),t(),e(397,"mat-radio-button",54),a(398,"Cash on Delivery"),t()(),e(399,"div",61)(400,"div",62)(401,"mat-label",63),a(402,"Card Number"),t(),e(403,"mat-form-field",64),i(404,"input",65),t(),e(405,"div",61)(406,"div",66)(407,"mat-label",63),a(408,"Name"),t(),e(409,"mat-form-field",11),i(410,"input",67),t()(),e(411,"div",68)(412,"mat-label",63),a(413,"Exp. Date"),t(),e(414,"mat-form-field",11),i(415,"input",69),t()(),e(416,"div",68)(417,"mat-label",63),a(418,"CCV Code"),t(),e(419,"mat-form-field",11),i(420,"input",70),e(421,"mat-icon",71),i(422,"i-tabler",72),t()()()()()(),e(423,"mat-action-row")(424,"button",60),f("click",function(){return c(p),u(l.prevStep())}),a(425," Previous "),t(),e(426,"button",58),f("click",function(){return c(p),u(l.nextStep())}),a(427,"End"),t()()()()(),e(428,"div",20)(429,"pre"),a(430,"      "),i(431,"code",21),a(432,`
    `),t()(),e(433,"div",22)(434,"pre"),a(435,"      "),i(436,"code",23),a(437,`
    `),t()()(),e(438,"h4",46),a(439,"Form with Tabs"),t(),e(440,"app-code-view")(441,"div",7)(442,"mat-card",73)(443,"mat-tab-group",74)(444,"mat-tab",75)(445,"mat-card-content")(446,"div",3)(447,"div",4)(448,"div",3)(449,"div",76)(450,"mat-label",31),a(451,"First Name "),t()(),e(452,"div",62)(453,"mat-form-field",11),i(454,"input",77),t()()(),e(455,"div",3)(456,"div",76)(457,"mat-label",31),a(458,"Country "),t()(),e(459,"div",62)(460,"mat-form-field",11)(461,"mat-select",37),i(462,"mat-option",37),e(463,"mat-option",78),a(464,"India"),t(),e(465,"mat-option",79),a(466,"France"),t(),e(467,"mat-option",80),a(468,"Africa"),t()()()()(),e(469,"div",3)(470,"div",76)(471,"mat-label",31),a(472,"Birth Date "),t()(),e(473,"div",62)(474,"mat-form-field",11),i(475,"input",40)(476,"mat-datepicker-toggle",41)(477,"mat-datepicker",null,2),t()()()(),e(479,"div",4)(480,"div",3)(481,"div",76)(482,"mat-label",31),a(483,"Last Name "),t()(),e(484,"div",62)(485,"mat-form-field",11),i(486,"input",81),t()()(),e(487,"div",3)(488,"div",76)(489,"mat-label",31),a(490,"Language "),t()(),e(491,"div",62)(492,"mat-form-field",11)(493,"mat-select",82)(494,"mat-option",82),a(495,"English"),t(),e(496,"mat-option",79),a(497,"French"),t()()()()(),e(498,"div",3)(499,"div",76)(500,"mat-label",31),a(501,"Phone no "),t()(),e(502,"div",62)(503,"mat-form-field",11),i(504,"input",83),t()()()()(),e(505,"div",84)(506,"button",19),a(507,"Submit"),t(),e(508,"button",43),a(509," Cancel "),t()()()(),e(510,"mat-tab",85)(511,"mat-card-content")(512,"div",3)(513,"div",4)(514,"div",3)(515,"div",76)(516,"mat-label",31),a(517,"Username "),t()(),e(518,"div",62)(519,"mat-form-field",11),i(520,"input",86),t()()(),e(521,"div",3)(522,"div",76)(523,"mat-label",31),a(524,"Password "),t()(),e(525,"div",62)(526,"mat-form-field",11),i(527,"input",32),e(528,"button",33),f("click",function(){return c(p),u(l.hide2=!l.hide2)}),e(529,"mat-icon",34),a(530),t()()()()()(),e(531,"div",4)(532,"div",3)(533,"div",76)(534,"mat-label",31),a(535,"Email "),t()(),e(536,"div",62)(537,"mat-form-field",11),i(538,"input",87),e(539,"span",15),a(540,"@exmaple.com"),t()()()(),e(541,"div",3)(542,"div",76)(543,"mat-label",31),a(544,"Confirm "),t()(),e(545,"div",62)(546,"mat-form-field",11),i(547,"input",32),e(548,"button",33),f("click",function(){return c(p),u(l.conhide=!l.conhide)}),e(549,"mat-icon",34),a(550),t()()()()()()(),e(551,"div",84)(552,"button",19),a(553,"Submit"),t(),e(554,"button",43),a(555," Cancel "),t()()()(),e(556,"mat-tab",88)(557,"mat-card-content")(558,"div",3)(559,"div",4)(560,"div",3)(561,"div",76)(562,"mat-label",31),a(563,"Twitter "),t()(),e(564,"div",62)(565,"mat-form-field",11),i(566,"input",89),t()()()(),e(567,"div",4)(568,"div",3)(569,"div",76)(570,"mat-label",31),a(571,"Facebook "),t()(),e(572,"div",62)(573,"mat-form-field",11),i(574,"input",90),t()()()(),e(575,"div",4)(576,"div",3)(577,"div",76)(578,"mat-label",31),a(579,"Google "),t()(),e(580,"div",62)(581,"mat-form-field",11),i(582,"input",91),t()()()(),e(583,"div",4)(584,"div",3)(585,"div",76)(586,"mat-label",31),a(587,"Linkedin "),t()(),e(588,"div",62)(589,"mat-form-field",11),i(590,"input",92),t()()()(),e(591,"div",4)(592,"div",3)(593,"div",76)(594,"mat-label",31),a(595,"Instagram "),t()(),e(596,"div",62)(597,"mat-form-field",11),i(598,"input",93),t()()()(),e(599,"div",4)(600,"div",3)(601,"div",76)(602,"mat-label",31),a(603,"Quora "),t()(),e(604,"div",62)(605,"mat-form-field",11),i(606,"input",94),t()()()()(),e(607,"div",84)(608,"button",19),a(609,"Submit"),t(),e(610,"button",43),a(611," Cancel "),t()()()()()()(),e(612,"div",20)(613,"pre"),a(614,"      "),i(615,"code",21),a(616,`
    `),t()(),e(617,"div",22)(618,"pre"),a(619,"      "),i(620,"code",23),a(621,`
    `),t()()()}if(d&2){let p=b(191),s=b(283),h=b(478);o(2),n("isTitle",!0),o(49),n("highlight",l.codeForBasicLayout),o(5),n("highlightAuto",l.codeForBasicLayoutTs),o(3),n("isTitle",!0),o(57),n("highlight",l.codeForBasicwithIcons),o(5),n("highlightAuto",l.codeForBasicwithIconsTs),o(3),n("isTitle",!0),o(30),n("type",l.hide?"password":"text"),o(),W("aria-label","Hide password")("aria-pressed",l.hide),o(2),C(l.hide?"visibility_off":"visibility"),o(31),n("matDatepicker",p),o(),n("for",p),o(19),n("highlight",l.codeForFormSeparator),o(5),n("highlightAuto",l.codeForFormSeparatorTs),o(3),n("isTitle",!0),o(30),n("type",l.alignhide?"password":"text"),o(),W("aria-label","Hide password")("aria-pressed",l.alignhide),o(2),C(l.alignhide?"visibility_off":"visibility"),o(31),n("matDatepicker",s),o(),n("for",s),o(19),n("highlight",l.codeForFormLabelAlign),o(5),n("highlightAuto",l.codeForFormLabelAlignTs),o(7),n("expanded",l.step===0),o(62),n("expanded",l.step===1),o(16),n("expanded",l.step===2),o(41),n("highlight",l.codeForCollpaseForm),o(5),n("highlightAuto",l.codeForCollpaseFormTs),o(39),n("matDatepicker",h),o(),n("for",h),o(51),n("type",l.hide2?"password":"text"),o(),W("aria-label","Hide password")("aria-pressed",l.hide2),o(2),C(l.hide2?"visibility_off":"visibility"),o(17),n("type",l.hide?"password":"text"),o(),W("aria-label","Hide password")("aria-pressed",l.conhide),o(2),C(l.conhide?"visibility_off":"visibility"),o(65),n("highlight",l.codeForFormwithTabs),o(5),n("highlightAuto",l.codeForFormwithTabsTs)}},dependencies:[S,te,ne,re,me,V,H,_e,le,Y,z,q,Ie,E,w,Xe,Ke,ze,qe,Je,Qe,$e,O,Te,J,ue,ce,se,Ce,de,Ze,M,_,k,T],encapsulation:2})}}return r})();var Ii=`  import { Component } from '@angular/core';
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

`,yi=`  import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
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

`,Fi=`  import { Component } from '@angular/core';
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

`,Di=`  import { Component } from '@angular/core';
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

`,Ai=`  import { Component } from '@angular/core';
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

`,Pi=`  import { Component } from '@angular/core';
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

`,Ni=`  import { Component } from '@angular/core';
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

`;var Oi=`    <form>
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
`,Li=`    <form>
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
`,Ri=`    <form>
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
`,Bi=`    <div class="p-16 bg-light-primary rounded">
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
`,Hi=`   <form>
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
`,Vi=`   <form>
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
`,Yi=`   <form>
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
`;var wo=(r,v)=>v.value;function Mo(r,v){if(r&1&&(e(0,"mat-error"),a(1),t()),r&2){let m=Ve();o(),C(m.errorMessage())}}function _o(r,v){if(r&1&&(e(0,"mat-option",28),a(1),t()),r&2){let m=v.$implicit;n("value",m.value),o(),C(m.viewValue)}}var Gi=(()=>{class r{constructor(){this.email=new F("",[ge.required,ge.email]),this.errorMessage=He(""),this.foods=[{value:"steak-0",viewValue:"One"},{value:"pizza-1",viewValue:"Two"},{value:"tacos-2",viewValue:"Three"},{value:"tacos-3",viewValue:"Four"}],this.selectedFood=this.foods[2].value,this.codeForOrdinary=Oi,this.codeForOrdinaryTs=Ii,this.codeForInputVariant=Li,this.codeForInputVariantTs=yi,this.codeForDefaultForm=Ri,this.codeForDefaultFormTs=Fi,this.codeForBasicHeader=Bi,this.codeForBasicHeaderTs=Di,this.codeForDisabledForm=Hi,this.codeForDisabledFormTs=Ai,this.codeForLeftIcon=Vi,this.codeForLeftIconTs=Pi,this.codeForRightIcon=Yi,this.codeForRightIconTs=Ni,It(this.email.statusChanges,this.email.valueChanges).pipe(ma()).subscribe(()=>this.updateErrorMessage())}updateErrorMessage(){this.email.hasError("required")?this.errorMessage.set("You must enter a value"):this.email.hasError("email")?this.errorMessage.set("Not a valid email"):this.errorMessage.set("")}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=g({type:r,selectors:[["app-form-layouts"]],features:[j([pe()])],decls:322,vars:26,consts:[["picker",""],[3,"isTitle"],["Ctitle",""],["output",""],[1,"f-s-14","f-w-600","m-b-8","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput",""],[1,"f-s-14","f-w-600","m-b-8","d-block","m-t-12"],["matInput","","type","password"],["color","primary"],[1,"m-t-12"],["mat-flat-button","","color","primary"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["appearance","outline",1,"w-100"],["matInput","","placeholder","pat@example.com","required","",3,"blur","formControl"],["matInput","","value","George deo"],["matInput","","type","email"],["matInput","","rows","5"],[1,"row"],[1,"col-sm-6","col-lg-4"],["aria-label","Select an option"],["color","primary","value","1"],["color","primary","value","2"],["color","primary","value","3"],[3,"valueChange","value"],[3,"value"],[1,"p-16","bg-light-primary","rounded"],[1,"f-s-14","text-primary","d-flex","align-items-center","f-w-500"],["name","info-circle",1,"icon-20","m-r-8","d-flex"],[1,"row","m-t-20"],[1,"col-lg-6"],["matInput","","type","text"],["value","male"],["value","female"],["value","other"],["value","1","color","primary"],["value","2","color","primary"],["matInput","",3,"matDatepicker"],["matIconSuffix","",3,"for"],[1,"p-16","bg-light-primary","rounded","m-y-20"],[1,"col-lg-12"],["value","india"],["value","uk"],["value","africa"],["mat-flat-button","",1,"bg-error","text-white"],["mat-flat-button","",1,"m-l-8"],["matInput","","disabled",""],["matInput","","disabled","","type","email"],["matInput","","disabled","","type","password"],["mat-raised-button","","disabled",""],["matInput","","placeholder","Username"],["matPrefix",""],["name","user",1,"icon-20","d-flex"],["matInput","","placeholder","Email"],["name","mail",1,"icon-20","d-flex"],["matInput","","placeholder","Password","type","password"],["name","lock",1,"icon-20","d-flex"],["matInput","","placeholder","Confirm Password","type","password"],[1,"d-flex","align-items-center","gap-8","m-t-10","b-t-1","p-t-20"],["matSuffix",""]],template:function(d,l){if(d&1){let p=P();e(0,"app-code-view",1)(1,"h4",2),a(2,"Ordrinary Form"),t(),e(3,"div",3)(4,"form")(5,"mat-label",4),a(6,"Email"),t(),e(7,"mat-form-field",5),i(8,"input",6),e(9,"mat-hint"),a(10," We'll never share your email with anyone else."),t()(),e(11,"mat-label",7),a(12,"Password"),t(),e(13,"mat-form-field",5),i(14,"input",8),t(),e(15,"mat-checkbox",9),a(16,"Check Me Out!"),t(),e(17,"div",10)(18,"button",11),a(19,"Submit"),t()()()(),e(20,"div",12)(21,"pre"),a(22,"      "),i(23,"code",13),a(24,`
    `),t()(),e(25,"div",14)(26,"pre"),a(27,"      "),i(28,"code",15),a(29,`
    `),t()()(),e(30,"app-code-view",1)(31,"h4",2),a(32,"Input Variants"),t(),e(33,"div",3)(34,"mat-label",4),a(35,"Error"),t(),e(36,"mat-form-field",16)(37,"input",17),f("blur",function(){return c(p),u(l.updateErrorMessage())}),t(),Pe(38,Mo,2,1,"mat-error"),t()(),e(39,"div",12)(40,"pre"),a(41,"      "),i(42,"code",13),a(43,`
    `),t()(),e(44,"div",14)(45,"pre"),a(46,"      "),i(47,"code",15),a(48,`
    `),t()()(),e(49,"app-code-view",1)(50,"h4",2),a(51,"Default Form"),t(),e(52,"div",3)(53,"form")(54,"mat-label",4),a(55,"Default Text"),t(),e(56,"mat-form-field",5),i(57,"input",18),t(),e(58,"mat-label",4),a(59,"Email"),t(),e(60,"mat-form-field",5),i(61,"input",19),t(),e(62,"mat-label",4),a(63,"Password"),t(),e(64,"mat-form-field",5),i(65,"input",8),t(),e(66,"mat-label",4),a(67,"Textarea"),t(),e(68,"mat-form-field",5),i(69,"textarea",20),t(),e(70,"div",21)(71,"div",22)(72,"mat-checkbox",9),a(73,"Check this custom checkbox"),t(),e(74,"mat-checkbox",9),a(75,"Check this custom checkbox"),t(),e(76,"mat-checkbox",9),a(77,"Check this custom checkbox"),t()(),e(78,"div",22)(79,"mat-radio-group",23)(80,"mat-radio-button",24),a(81,"Toggle this custom radio"),t(),e(82,"mat-radio-button",25),a(83,"Toggle this custom radio"),t(),e(84,"mat-radio-button",26),a(85,"Toggle this custom radio"),t()()()(),e(86,"mat-label",7),a(87,"Select"),t(),e(88,"mat-form-field",16)(89,"mat-select",27),B("valueChange",function(h){return c(p),L(l.selectedFood,h)||(l.selectedFood=h),u(h)}),D(90,_o,2,2,"mat-option",28,wo),t()(),e(92,"div",10)(93,"button",11),a(94,"Submit"),t()()()(),e(95,"div",12)(96,"pre"),a(97,"      "),i(98,"code",13),a(99,`
    `),t()(),e(100,"div",14)(101,"pre"),a(102,"      "),i(103,"code",15),a(104,`
    `),t()()(),e(105,"app-code-view",1)(106,"h4",2),a(107,"Basic Header Form"),t(),e(108,"div",3)(109,"div",29)(110,"h5",30),i(111,"i-tabler",31),a(112,"Person Info "),t()(),e(113,"div",32)(114,"div",33)(115,"mat-label",4),a(116,"First Name"),t(),e(117,"mat-form-field",5),i(118,"input",34),t(),e(119,"mat-label",4),a(120,"Select Gender"),t(),e(121,"mat-form-field",16)(122,"mat-select",35)(123,"mat-option",35),a(124,"Male"),t(),e(125,"mat-option",36),a(126,"Female"),t(),e(127,"mat-option",37),a(128,"Other"),t()()(),e(129,"mat-label",4),a(130,"Membership"),t(),e(131,"mat-radio-group",23)(132,"mat-radio-button",38),a(133,"Free"),t(),e(134,"mat-radio-button",39),a(135,"Paid"),t()()(),e(136,"div",33)(137,"mat-label",4),a(138,"Last Name"),t(),e(139,"mat-form-field",5),i(140,"input",34),t(),e(141,"mat-label",4),a(142,"Date of Birth"),t(),e(143,"mat-form-field",16),i(144,"input",40)(145,"mat-datepicker-toggle",41)(146,"mat-datepicker",null,0),t()()(),e(148,"div",42)(149,"h5",30),i(150,"i-tabler",31),a(151,"Address "),t()(),e(152,"div",32)(153,"div",43)(154,"mat-label",4),a(155,"Street"),t(),e(156,"mat-form-field",5),i(157,"input",34),t()(),e(158,"div",33)(159,"mat-label",4),a(160,"City"),t(),e(161,"mat-form-field",5),i(162,"input",34),t()(),e(163,"div",33)(164,"mat-label",4),a(165,"State"),t(),e(166,"mat-form-field",5),i(167,"input",34),t()(),e(168,"div",33)(169,"mat-label",4),a(170,"Post Code"),t(),e(171,"mat-form-field",5),i(172,"input",34),t()(),e(173,"div",33)(174,"mat-label",4),a(175,"Country"),t(),e(176,"mat-form-field",16)(177,"mat-select",35)(178,"mat-option",44),a(179,"India"),t(),e(180,"mat-option",45),a(181,"United Kingdom"),t(),e(182,"mat-option",46),a(183,"Africa"),t()()()()(),e(184,"button",47),a(185,"Cancel"),t(),e(186,"button",48),a(187,"Submit"),t()(),e(188,"div",12)(189,"pre"),a(190,"      "),i(191,"code",13),a(192,`
    `),t()(),e(193,"div",14)(194,"pre"),a(195,"      "),i(196,"code",15),a(197,`
    `),t()()(),e(198,"app-code-view",1)(199,"h4",2),a(200,"Disabled Form"),t(),e(201,"div",3)(202,"form")(203,"mat-label",4),a(204,"Name"),t(),e(205,"mat-form-field",16),i(206,"input",49),t(),e(207,"mat-label",4),a(208,"Email"),t(),e(209,"mat-form-field",16),i(210,"input",50),t(),e(211,"mat-label",4),a(212,"Password"),t(),e(213,"mat-form-field",16),i(214,"input",51),t(),e(215,"button",52),a(216,"Submit"),t()()(),e(217,"div",12)(218,"pre"),a(219,"      "),i(220,"code",13),a(221,`
    `),t()(),e(222,"div",14)(223,"pre"),a(224,"      "),i(225,"code",15),a(226,`
    `),t()()(),e(227,"div",21)(228,"div",33)(229,"app-code-view",1)(230,"h4",2),a(231,"Form with Left Icon"),t(),e(232,"div",3)(233,"form")(234,"mat-label",4),a(235,"Username"),t(),e(236,"mat-form-field",16),i(237,"input",53),e(238,"mat-icon",54),i(239,"i-tabler",55),t()(),e(240,"mat-label",4),a(241,"Email"),t(),e(242,"mat-form-field",16),i(243,"input",56),e(244,"mat-icon",54),i(245,"i-tabler",57),t()(),e(246,"mat-label",4),a(247,"Password"),t(),e(248,"mat-form-field",16),i(249,"input",58),e(250,"mat-icon",54),i(251,"i-tabler",59),t()(),e(252,"mat-label",4),a(253,"Confirm Password"),t(),e(254,"mat-form-field",16),i(255,"input",60),e(256,"mat-icon",54),i(257,"i-tabler",59),t()(),e(258,"mat-checkbox",9),a(259,"Remember Me!"),t(),e(260,"div",61)(261,"button",11),a(262,"Submit"),t(),e(263,"button",47),a(264,"Cancel"),t()()()(),e(265,"div",12)(266,"pre"),a(267,"          "),i(268,"code",13),a(269,`
        `),t()(),e(270,"div",14)(271,"pre"),a(272,"          "),i(273,"code",15),a(274,`
        `),t()()()(),e(275,"div",33)(276,"app-code-view",1)(277,"h4",2),a(278,"Form with Right Icon"),t(),e(279,"div",3)(280,"form")(281,"mat-label",4),a(282,"Username"),t(),e(283,"mat-form-field",16),i(284,"input",53),e(285,"mat-icon",62),i(286,"i-tabler",55),t()(),e(287,"mat-label",4),a(288,"Email"),t(),e(289,"mat-form-field",16),i(290,"input",56),e(291,"mat-icon",62),i(292,"i-tabler",57),t()(),e(293,"mat-label",4),a(294,"Password"),t(),e(295,"mat-form-field",16),i(296,"input",58),e(297,"mat-icon",62),i(298,"i-tabler",59),t()(),e(299,"mat-label",4),a(300,"Confirm Password"),t(),e(301,"mat-form-field",16),i(302,"input",60),e(303,"mat-icon",62),i(304,"i-tabler",59),t()(),e(305,"mat-checkbox",9),a(306,"Remember Me!"),t(),e(307,"div",61)(308,"button",11),a(309,"Submit"),t(),e(310,"button",47),a(311,"Cancel"),t()()()(),e(312,"div",12)(313,"pre"),a(314,"          "),i(315,"code",13),a(316,`
        `),t()(),e(317,"div",14)(318,"pre"),a(319,"          "),i(320,"code",15),a(321,`
        `),t()()()()()}if(d&2){let p=b(147);n("isTitle",!0),o(23),n("highlight",l.codeForOrdinary),o(5),n("highlightAuto",l.codeForOrdinaryTs),o(2),n("isTitle",!0),o(7),n("formControl",l.email),o(),Ne(l.email.invalid?38:-1),o(4),n("highlight",l.codeForInputVariant),o(5),n("highlightAuto",l.codeForInputVariantTs),o(2),n("isTitle",!0),o(40),R("value",l.selectedFood),o(),A(l.foods),o(8),n("highlight",l.codeForDefaultForm),o(5),n("highlightAuto",l.codeForDefaultFormTs),o(2),n("isTitle",!0),o(39),n("matDatepicker",p),o(),n("for",p),o(46),n("highlight",l.codeForBasicHeader),o(5),n("highlightAuto",l.codeForBasicHeaderTs),o(2),n("isTitle",!0),o(22),n("highlight",l.codeForDisabledForm),o(5),n("highlightAuto",l.codeForDisabledFormTs),o(4),n("isTitle",!0),o(39),n("highlight",l.codeForLeftIcon),o(5),n("highlightAuto",l.codeForLeftIconTs),o(3),n("isTitle",!0),o(39),n("highlight",l.codeForRightIcon),o(5),n("highlightAuto",l.codeForRightIconTs)}},dependencies:[S,te,ke,ne,re,me,V,H,je,We,_e,le,Y,z,q,Ie,O,J,ue,ce,se,Ce,Zt,Rt,de,M,_,k,T,y,xe,ae,I,K,we,Ue,N,Ee],encapsulation:2})}}return r})();var Ui=`  import { Component } from '@angular/core';
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

`,Wi=`  import { Component } from '@angular/core';
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

`,ji=` import { Component } from '@angular/core';
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

`,Ki=` import { Component } from '@angular/core';
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

`,ct=`  import { Component } from '@angular/core';
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

`;var zi=`    <form>
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
`,qi=`    <form>
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
`,Ji=`      <mat-card>
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
`,Xi=`      <mat-card>
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
`,Zi=`      <mat-accordion>
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
`,Qi=`      <mat-tab-group
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
`;var $i=(()=>{class r{constructor(){this.hide=!0,this.hide2=!0,this.conhide=!0,this.alignhide=!0,this.step=0,this.panelOpenState=!1,this.codeForBasicLayout=zi,this.codeForBasicLayoutTs=Ui,this.codeForBasicwithIcons=qi,this.codeForBasicwithIconsTs=Wi,this.codeForFormSeparator=Ji,this.codeForFormSeparatorTs=ji,this.codeForFormLabelAlign=Xi,this.codeForFormLabelAlignTs=Ki,this.codeForCollpaseForm=Zi,this.codeForCollpaseFormTs=ct,this.codeForFormwithTabs=Qi,this.codeForFormwithTabsTs=ct}setStep(m){this.step=m}nextStep(){this.step++}prevStep(){this.step--}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=g({type:r,selectors:[["app-form-vertical"]],features:[j([pe()])],decls:621,vars:41,consts:[["birthpicker",""],["birthpicker2",""],["birthpicker3",""],[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],[1,"col-sm-12","d-flex","align-items-center"],[1,"f-s-14","f-w-600","d-block","m-b-16"],[1,"col-sm-12"],["appearance","outline",1,"w-100"],["matInput","","placeholder","John Deo"],["matInput","","placeholder","ACME Inc."],["matInput","","placeholder","john.deo","type","email"],["matTextSuffix",""],["matInput","","placeholder","123 4561 123"],["rows","5","matInput","","placeholder","Hi, Do you have a moment to talk Deo ?"],[1,"row","justify-content-end"],["mat-flat-button",""],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matPrefix","",1,"op-5"],["name","user",1,"icon-20","d-flex"],["name","building-arch",1,"icon-20","d-flex"],["name","mail",1,"icon-20","d-flex"],["name","phone",1,"icon-20","d-flex"],["name","message-2",1,"icon-20","d-flex"],[1,"f-s-16","m-0","f-w-600","m-b-16"],["matInput","",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],[1,"op-5"],[1,"b-t-1"],["value","0"],["value","1"],["value","2"],["value","3"],["matInput","",3,"matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","placeholder","123 4567 123"],["mat-flat-button","",1,"bg-error","text-white","m-l-8"],[1,"col-sm-12","d-flex","align-items-center","justify-content-end"],[1,"m-y-24"],["hideToggle","",1,"cardWithShadow",3,"opened","closed","expanded"],[1,"f-w-600","f-s-16"],[1,"col-lg-6","col-sm-6"],["matInput","","placeholder","150 Foot Ring Road"],["matInput","","placeholder","Jackson"],["aria-label","Select an option",1,"m-t-8"],["value","1","color","primary"],["value","2","color","primary"],["matInput","","placeholder","123 4561 213"],["matInput","","placeholder","630012"],["matInput","","placeholder","Nr. wall street"],["mat-flat-button","",3,"click"],["value","3","color","primary"],["mat-flat-button","",1,"bg-error","text-white",3,"click"],[1,"row","m-t-12"],[1,"col-sm-9"],[1,"f-s-14","f-w-600","m-b-8","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","type","text","placeholder","123 200 540 620"],[1,"col-sm-6"],["matInput","","type","text","placeholder","John Deo"],[1,"col-sm-3"],["matInput","","type","text","placeholder","MM/YY"],["matInput","","type","text","placeholder","2501"],["matSuffix","",1,"op-5"],["name","info-square-rounded",1,"icon-20","d-flex"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","0ms"],["label","Personal Info"],["matInput","","placeholder","John"],["value","in"],["value","fr"],["value","af"],["matInput","","placeholder","Deo"],["value","en"],["matInput","","placeholder","123 4560 123"],[1,"m-t-12","text-right"],["label","Account Details"],["matInput","","placeholder","John.Deo"],["matInput","","placeholder","john.deo"],["label","Social Links"],["matInput","","placeholder","https://twitter.com/abc"],["matInput","","placeholder","https://facebook.com/abc"],["matInput","","placeholder","https://plus.google.com/abc"],["matInput","","placeholder","https://linkedin.com/abc"],["matInput","","placeholder","https://instagram.com/abc"],["matInput","","placeholder","https://quora.com/abc"]],template:function(d,l){if(d&1){let p=P();e(0,"div",3)(1,"div",4)(2,"app-code-view",5)(3,"h4",6),a(4,"Basic Layout"),t(),e(5,"div",7)(6,"form")(7,"div",3)(8,"div",8)(9,"mat-label",9),a(10,"Name"),t()(),e(11,"div",10)(12,"mat-form-field",11),i(13,"input",12),t()()(),e(14,"div",3)(15,"div",8)(16,"mat-label",9),a(17,"Company"),t()(),e(18,"div",10)(19,"mat-form-field",11),i(20,"input",13),t()()(),e(21,"div",3)(22,"div",8)(23,"mat-label",9),a(24,"Email"),t()(),e(25,"div",10)(26,"mat-form-field",11),i(27,"input",14),e(28,"span",15),a(29,"@exmaple.com"),t()()()(),e(30,"div",3)(31,"div",8)(32,"mat-label",9),a(33,"Phone No"),t()(),e(34,"div",10)(35,"mat-form-field",11),i(36,"input",16),t()()(),e(37,"div",3)(38,"div",8)(39,"mat-label",9),a(40,"Message "),t()(),e(41,"div",10)(42,"mat-form-field",11),i(43,"textarea",17),t()()(),e(44,"div",18)(45,"div",10)(46,"button",19),a(47,"Send"),t()()()()(),e(48,"div",20)(49,"pre"),a(50,"          "),i(51,"code",21),a(52,`
        `),t()(),e(53,"div",22)(54,"pre"),a(55,"          "),i(56,"code",23),a(57,`
        `),t()()()(),e(58,"div",4)(59,"app-code-view",5)(60,"h4",6),a(61,"Basic with Icons"),t(),e(62,"div",7)(63,"form")(64,"div",3)(65,"div",8)(66,"mat-label",9),a(67,"Name"),t()(),e(68,"div",10)(69,"mat-form-field",11),i(70,"input",12),e(71,"mat-icon",24),i(72,"i-tabler",25),t()()()(),e(73,"div",3)(74,"div",8)(75,"mat-label",9),a(76,"Company"),t()(),e(77,"div",10)(78,"mat-form-field",11),i(79,"input",13),e(80,"mat-icon",24),i(81,"i-tabler",26),t()()()(),e(82,"div",3)(83,"div",8)(84,"mat-label",9),a(85,"Email"),t()(),e(86,"div",10)(87,"mat-form-field",11),i(88,"input",14),e(89,"mat-icon",24),i(90,"i-tabler",27),t()()()(),e(91,"div",3)(92,"div",8)(93,"mat-label",9),a(94,"Phone No"),t()(),e(95,"div",10)(96,"mat-form-field",11),i(97,"input",16),e(98,"mat-icon",24),i(99,"i-tabler",28),t()()()(),e(100,"div",3)(101,"div",8)(102,"mat-label",9),a(103,"Message "),t()(),e(104,"div",10)(105,"mat-form-field",11),i(106,"textarea",17),e(107,"mat-icon",24),i(108,"i-tabler",29),t()()()(),e(109,"div",18)(110,"div",10)(111,"button",19),a(112,"Send"),t()()()()(),e(113,"div",20)(114,"pre"),a(115,"          "),i(116,"code",21),a(117,`
        `),t()(),e(118,"div",22)(119,"pre"),a(120,"          "),i(121,"code",23),a(122,`
        `),t()()()(),e(123,"div",4)(124,"app-code-view",5)(125,"h4",6),a(126,"Form Separator"),t(),e(127,"div",7)(128,"mat-card")(129,"mat-card-content")(130,"h4",30),a(131,"Account Details"),t(),e(132,"div",3)(133,"div",8)(134,"mat-label",9),a(135,"Username "),t()(),e(136,"div",10)(137,"mat-form-field",11),i(138,"input",12),t()()(),e(139,"div",3)(140,"div",8)(141,"mat-label",9),a(142,"Email"),t()(),e(143,"div",10)(144,"mat-form-field",11),i(145,"input",14),e(146,"span",15),a(147,"@exmaple.com"),t()()()(),e(148,"div",3)(149,"div",8)(150,"mat-label",9),a(151,"Password "),t()(),e(152,"div",10)(153,"mat-form-field",11),i(154,"input",31),e(155,"button",32),f("click",function(){return c(p),u(l.hide=!l.hide)}),e(156,"mat-icon",33),a(157),t()()()()()(),e(158,"mat-card-content",34)(159,"h4",30),a(160,"Personal Info"),t(),e(161,"div",3)(162,"div",8)(163,"mat-label",9),a(164,"Full Name "),t()(),e(165,"div",10)(166,"mat-form-field",11),i(167,"input",12),t()()(),e(168,"div",3)(169,"div",8)(170,"mat-label",9),a(171,"Country "),t()(),e(172,"div",10)(173,"mat-form-field",11)(174,"mat-select",35),i(175,"mat-option",35),e(176,"mat-option",36),a(177,"India"),t(),e(178,"mat-option",37),a(179,"Africa"),t(),e(180,"mat-option",38),a(181,"United Kingdom"),t()()()()(),e(182,"div",3)(183,"div",8)(184,"mat-label",9),a(185,"Birth Date "),t()(),e(186,"div",10)(187,"mat-form-field",11),i(188,"input",39)(189,"mat-datepicker-toggle",40)(190,"mat-datepicker",null,0),t()()(),e(192,"div",3)(193,"div",8)(194,"mat-label",9),a(195,"Phone no "),t()(),e(196,"div",10)(197,"mat-form-field",11),i(198,"input",41),t()()(),e(199,"div",18)(200,"div",10)(201,"button",19),a(202,"Submit"),t(),e(203,"button",42),a(204," Cancel "),t()()()()()(),e(205,"div",20)(206,"pre"),a(207,"          "),i(208,"code",21),a(209,`
        `),t()(),e(210,"div",22)(211,"pre"),a(212,"          "),i(213,"code",23),a(214,`
        `),t()()()(),e(215,"div",4)(216,"app-code-view",5)(217,"h4",6),a(218,"Form Label Alignment"),t(),e(219,"div",7)(220,"mat-card")(221,"mat-card-content")(222,"h4",30),a(223,"Account Details"),t(),e(224,"div",3)(225,"div",43)(226,"mat-label",9),a(227,"Username "),t()(),e(228,"div",10)(229,"mat-form-field",11),i(230,"input",12),t()()(),e(231,"div",3)(232,"div",43)(233,"mat-label",9),a(234,"Email"),t()(),e(235,"div",10)(236,"mat-form-field",11),i(237,"input",14),e(238,"span",15),a(239,"@exmaple.com"),t()()()(),e(240,"div",3)(241,"div",43)(242,"mat-label",9),a(243,"Password "),t()(),e(244,"div",10)(245,"mat-form-field",11),i(246,"input",31),e(247,"button",32),f("click",function(){return c(p),u(l.alignhide=!l.alignhide)}),e(248,"mat-icon",33),a(249),t()()()()()(),e(250,"mat-card-content",34)(251,"h4",30),a(252,"Personal Info"),t(),e(253,"div",3)(254,"div",43)(255,"mat-label",9),a(256,"Full Name "),t()(),e(257,"div",10)(258,"mat-form-field",11),i(259,"input",12),t()()(),e(260,"div",3)(261,"div",43)(262,"mat-label",9),a(263,"Country "),t()(),e(264,"div",10)(265,"mat-form-field",11)(266,"mat-select",35),i(267,"mat-option",35),e(268,"mat-option",36),a(269,"India"),t(),e(270,"mat-option",37),a(271,"Africa"),t(),e(272,"mat-option",38),a(273,"United Kingdom"),t()()()()(),e(274,"div",3)(275,"div",43)(276,"mat-label",9),a(277,"Birth Date "),t()(),e(278,"div",10)(279,"mat-form-field",11),i(280,"input",39)(281,"mat-datepicker-toggle",40)(282,"mat-datepicker",null,1),t()()(),e(284,"div",3)(285,"div",43)(286,"mat-label",9),a(287,"Phone no "),t()(),e(288,"div",10)(289,"mat-form-field",11),i(290,"input",41),t()()(),e(291,"div",18)(292,"div",10)(293,"button",19),a(294,"Submit"),t(),e(295,"button",42),a(296," Cancel "),t()()()()()(),e(297,"div",20)(298,"pre"),a(299,"          "),i(300,"code",21),a(301,`
        `),t()(),e(302,"div",22)(303,"pre"),a(304,"          "),i(305,"code",23),a(306,`
        `),t()()()()(),e(307,"h4",44),a(308,"Collapsible Section"),t(),e(309,"app-code-view")(310,"div",7)(311,"mat-accordion")(312,"mat-expansion-panel",45),f("opened",function(){return c(p),u(l.panelOpenState=!0)})("closed",function(){return c(p),u(l.panelOpenState=!1)}),e(313,"mat-expansion-panel-header")(314,"mat-panel-title",46),a(315,"Delivery Address "),t()(),e(316,"div",3)(317,"div",47)(318,"div",3)(319,"div",8)(320,"mat-label",9),a(321,"Full Name "),t()(),e(322,"div",10)(323,"mat-form-field",11),i(324,"input",12),t()()(),e(325,"div",3)(326,"div",8)(327,"mat-label",9),a(328,"Address "),t()(),e(329,"div",10)(330,"mat-form-field",11),i(331,"input",48),t()()(),e(332,"div",3)(333,"div",8)(334,"mat-label",9),a(335,"City "),t()(),e(336,"div",10)(337,"mat-form-field",11),i(338,"input",49),t()()(),e(339,"div",3)(340,"div",8)(341,"mat-label",9),a(342,"Address Type "),t()(),e(343,"div",10)(344,"mat-radio-group",50)(345,"mat-radio-button",51),a(346,"Home (All day delivery)"),t(),e(347,"mat-radio-button",52),a(348,"Office (Delivery between 10 AM - 5 PM)"),t()()()()(),e(349,"div",47)(350,"div",3)(351,"div",8)(352,"mat-label",9),a(353,"Phone "),t()(),e(354,"div",10)(355,"mat-form-field",11),i(356,"input",53),t()()(),e(357,"div",3)(358,"div",8)(359,"mat-label",9),a(360,"Pincode "),t()(),e(361,"div",10)(362,"mat-form-field",11),i(363,"input",54),t()()(),e(364,"div",3)(365,"div",8)(366,"mat-label",9),a(367,"Landmark "),t()(),e(368,"div",10)(369,"mat-form-field",11),i(370,"input",55),t()()()()(),e(371,"mat-action-row")(372,"button",56),f("click",function(){return c(p),u(l.nextStep())}),a(373,"Next"),t()()(),e(374,"mat-expansion-panel",45),f("opened",function(){return c(p),u(l.panelOpenState=!0)})("closed",function(){return c(p),u(l.panelOpenState=!1)}),e(375,"mat-expansion-panel-header")(376,"mat-panel-title",46),a(377,"Delivery Options "),t()(),e(378,"mat-radio-group",50)(379,"mat-radio-button",51),a(380,"Standard 3-5 Days"),t(),e(381,"mat-radio-button",52),a(382,"Express"),t(),e(383,"mat-radio-button",57),a(384,"Overnight"),t()(),e(385,"mat-action-row")(386,"button",58),f("click",function(){return c(p),u(l.prevStep())}),a(387," Previous "),t(),e(388,"button",56),f("click",function(){return c(p),u(l.nextStep())}),a(389,"Next"),t()()(),e(390,"mat-expansion-panel",45),f("opened",function(){return c(p),u(l.panelOpenState=!0)})("closed",function(){return c(p),u(l.panelOpenState=!1)}),e(391,"mat-expansion-panel-header")(392,"mat-panel-title",46),a(393,"Payment Method "),t()(),e(394,"mat-radio-group",50)(395,"mat-radio-button",51),a(396,"Credit/Debit/ATM Card "),t(),e(397,"mat-radio-button",52),a(398,"Cash on Delivery"),t()(),e(399,"div",59)(400,"div",60)(401,"mat-label",61),a(402,"Card Number"),t(),e(403,"mat-form-field",62),i(404,"input",63),t(),e(405,"div",59)(406,"div",64)(407,"mat-label",61),a(408,"Name"),t(),e(409,"mat-form-field",62),i(410,"input",65),t()(),e(411,"div",66)(412,"mat-label",61),a(413,"Exp. Date"),t(),e(414,"mat-form-field",62),i(415,"input",67),t()(),e(416,"div",66)(417,"mat-label",61),a(418,"CCV Code"),t(),e(419,"mat-form-field",62),i(420,"input",68),e(421,"mat-icon",69),i(422,"i-tabler",70),t()()()()()(),e(423,"mat-action-row")(424,"button",58),f("click",function(){return c(p),u(l.prevStep())}),a(425," Previous "),t(),e(426,"button",56),f("click",function(){return c(p),u(l.nextStep())}),a(427,"End"),t()()()()(),e(428,"div",20)(429,"pre"),a(430,"      "),i(431,"code",21),a(432,`
    `),t()(),e(433,"div",22)(434,"pre"),a(435,"      "),i(436,"code",23),a(437,`
    `),t()()(),e(438,"h4",44),a(439,"Form with Tabs"),t(),e(440,"app-code-view")(441,"div",7)(442,"mat-tab-group",71)(443,"mat-tab",72)(444,"mat-card-content")(445,"div",3)(446,"div",4)(447,"div",3)(448,"div",8)(449,"mat-label",9),a(450,"First Name "),t()(),e(451,"div",10)(452,"mat-form-field",11),i(453,"input",73),t()()(),e(454,"div",3)(455,"div",8)(456,"mat-label",9),a(457,"Country "),t()(),e(458,"div",10)(459,"mat-form-field",11)(460,"mat-select",36),i(461,"mat-option",36),e(462,"mat-option",74),a(463,"India"),t(),e(464,"mat-option",75),a(465,"France"),t(),e(466,"mat-option",76),a(467,"Africa"),t()()()()(),e(468,"div",3)(469,"div",8)(470,"mat-label",9),a(471,"Birth Date "),t()(),e(472,"div",10)(473,"mat-form-field",11),i(474,"input",39)(475,"mat-datepicker-toggle",40)(476,"mat-datepicker",null,2),t()()()(),e(478,"div",4)(479,"div",3)(480,"div",8)(481,"mat-label",9),a(482,"Last Name "),t()(),e(483,"div",10)(484,"mat-form-field",11),i(485,"input",77),t()()(),e(486,"div",3)(487,"div",8)(488,"mat-label",9),a(489,"Language "),t()(),e(490,"div",10)(491,"mat-form-field",11)(492,"mat-select",78)(493,"mat-option",78),a(494,"English"),t(),e(495,"mat-option",75),a(496,"French"),t()()()()(),e(497,"div",3)(498,"div",8)(499,"mat-label",9),a(500,"Phone no "),t()(),e(501,"div",10)(502,"mat-form-field",11),i(503,"input",79),t()()()()(),e(504,"div",80)(505,"button",19),a(506,"Submit"),t(),e(507,"button",42),a(508," Cancel "),t()()()(),e(509,"mat-tab",81)(510,"mat-card-content")(511,"div",3)(512,"div",4)(513,"div",3)(514,"div",8)(515,"mat-label",9),a(516,"Username "),t()(),e(517,"div",10)(518,"mat-form-field",11),i(519,"input",82),t()()(),e(520,"div",3)(521,"div",8)(522,"mat-label",9),a(523,"Password "),t()(),e(524,"div",10)(525,"mat-form-field",11),i(526,"input",31),e(527,"button",32),f("click",function(){return c(p),u(l.hide2=!l.hide2)}),e(528,"mat-icon",33),a(529),t()()()()()(),e(530,"div",4)(531,"div",3)(532,"div",8)(533,"mat-label",9),a(534,"Email "),t()(),e(535,"div",10)(536,"mat-form-field",11),i(537,"input",83),e(538,"span",15),a(539,"@exmaple.com"),t()()()(),e(540,"div",3)(541,"div",8)(542,"mat-label",9),a(543,"Confirm "),t()(),e(544,"div",10)(545,"mat-form-field",11),i(546,"input",31),e(547,"button",32),f("click",function(){return c(p),u(l.conhide=!l.conhide)}),e(548,"mat-icon",33),a(549),t()()()()()()(),e(550,"div",80)(551,"button",19),a(552,"Submit"),t(),e(553,"button",42),a(554," Cancel "),t()()()(),e(555,"mat-tab",84)(556,"mat-card-content")(557,"div",3)(558,"div",4)(559,"div",3)(560,"div",8)(561,"mat-label",9),a(562,"Twitter "),t()(),e(563,"div",10)(564,"mat-form-field",11),i(565,"input",85),t()()()(),e(566,"div",4)(567,"div",3)(568,"div",8)(569,"mat-label",9),a(570,"Facebook "),t()(),e(571,"div",10)(572,"mat-form-field",11),i(573,"input",86),t()()()(),e(574,"div",4)(575,"div",3)(576,"div",8)(577,"mat-label",9),a(578,"Google "),t()(),e(579,"div",10)(580,"mat-form-field",11),i(581,"input",87),t()()()(),e(582,"div",4)(583,"div",3)(584,"div",8)(585,"mat-label",9),a(586,"Linkedin "),t()(),e(587,"div",10)(588,"mat-form-field",11),i(589,"input",88),t()()()(),e(590,"div",4)(591,"div",3)(592,"div",8)(593,"mat-label",9),a(594,"Instagram "),t()(),e(595,"div",10)(596,"mat-form-field",11),i(597,"input",89),t()()()(),e(598,"div",4)(599,"div",3)(600,"div",8)(601,"mat-label",9),a(602,"Quora "),t()(),e(603,"div",10)(604,"mat-form-field",11),i(605,"input",90),t()()()()(),e(606,"div",80)(607,"button",19),a(608,"Submit"),t(),e(609,"button",42),a(610," Cancel "),t()()()()()(),e(611,"div",20)(612,"pre"),a(613,"      "),i(614,"code",21),a(615,`
    `),t()(),e(616,"div",22)(617,"pre"),a(618,"      "),i(619,"code",23),a(620,`
    `),t()()()}if(d&2){let p=b(191),s=b(283),h=b(477);o(2),n("isTitle",!0),o(49),n("highlight",l.codeForBasicLayout),o(5),n("highlightAuto",l.codeForBasicLayoutTs),o(3),n("isTitle",!0),o(57),n("highlight",l.codeForBasicwithIcons),o(5),n("highlightAuto",l.codeForBasicwithIconsTs),o(3),n("isTitle",!0),o(30),n("type",l.hide?"password":"text"),o(),W("aria-label","Hide password")("aria-pressed",l.hide),o(2),C(l.hide?"visibility_off":"visibility"),o(31),n("matDatepicker",p),o(),n("for",p),o(19),n("highlight",l.codeForFormSeparator),o(5),n("highlightAuto",l.codeForFormSeparatorTs),o(3),n("isTitle",!0),o(30),n("type",l.alignhide?"password":"text"),o(),W("aria-label","Hide password")("aria-pressed",l.alignhide),o(2),C(l.alignhide?"visibility_off":"visibility"),o(31),n("matDatepicker",s),o(),n("for",s),o(19),n("highlight",l.codeForFormLabelAlign),o(5),n("highlightAuto",l.codeForFormLabelAlignTs),o(7),n("expanded",l.step===0),o(62),n("expanded",l.step===1),o(16),n("expanded",l.step===2),o(41),n("highlight",l.codeForCollpaseForm),o(5),n("highlightAuto",l.codeForCollpaseFormTs),o(38),n("matDatepicker",h),o(),n("for",h),o(51),n("type",l.hide2?"password":"text"),o(),W("aria-label","Hide password")("aria-pressed",l.hide2),o(2),C(l.hide2?"visibility_off":"visibility"),o(17),n("type",l.hide?"password":"text"),o(),W("aria-label","Hide password")("aria-pressed",l.conhide),o(2),C(l.conhide?"visibility_off":"visibility"),o(65),n("highlight",l.codeForFormwithTabs),o(5),n("highlightAuto",l.codeForFormwithTabsTs)}},dependencies:[S,te,ne,re,me,V,H,_e,le,Y,z,q,Ie,E,w,Xe,Ke,ze,qe,Je,Qe,$e,O,Te,J,ue,ce,se,Ce,de,Ze,M,T,_,k],encapsulation:2})}}return r})();var ut=`   import { Component } from '@angular/core';
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
 
`;var eo=`    <mat-stepper #stepper>
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
`,to=`    <mat-stepper orientation="vertical" #stepper>
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
`;function ko(r,v){r&1&&a(0,"Account")}function To(r,v){r&1&&a(0,"Profile")}function Co(r,v){r&1&&a(0,"Finish")}function Io(r,v){r&1&&a(0,"Account")}function yo(r,v){r&1&&a(0,"Profile")}function Fo(r,v){r&1&&a(0,"Finish")}var ao=(()=>{class r{constructor(m){this._formBuilder=m,this.firstFormGroup=this._formBuilder.group({firstCtrl:["",ge.required]}),this.secondFormGroup=this._formBuilder.group({secondCtrl:["",ge.required]}),this.codeForFormWizard=eo,this.codeForFormWizardTs=ut,this.codeForVerticalFormWizard=to,this.codeForVerticalFormWizardTs=ut}static{this.\u0275fac=function(d){return new(d||r)(ee(Me))}}static{this.\u0275cmp=g({type:r,selectors:[["app-form-wizard"]],decls:138,vars:14,consts:[["stepper",""],[3,"isTitle"],["Ctitle",""],["output",""],[3,"stepControl"],[1,"m-t-24",3,"formGroup"],["matStepLabel",""],[1,"f-s-14","f-w-600","d-block","m-b-16"],["appearance","outline",1,"w-100"],["matInput","","formControlName","firstCtrl","required",""],["matInput","","formControlName","firstCtrl","required","","type","email"],["matInput","","formControlName","firstCtrl","required","","type","password"],[1,"text-right"],["mat-flat-button","","matStepperNext",""],["matInput","","formControlName","secondCtrl","required",""],["rows","5","matInput","","formControlName","secondCtrl","required",""],[1,"d-flex","align-items-center","justify-content-between"],["mat-flat-button","","matStepperPrevious","",1,"bg-error","text-white"],[1,"mat-headline-6","m-t-24"],[1,"m-t-8","f-s-14"],["checked","","color","primary"],[1,"d-flex","justify-content-between","m-t-16"],["mat-flat-button","",3,"click"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["orientation","vertical"]],template:function(d,l){if(d&1){let p=P();e(0,"app-code-view",1)(1,"h4",2),a(2,"Form Wizard"),t(),e(3,"div",3)(4,"mat-stepper",null,0)(6,"mat-step",4)(7,"form",5),be(8,ko,1,0,"ng-template",6),e(9,"div")(10,"mat-label",7),a(11,"Name "),t(),e(12,"mat-form-field",8),i(13,"input",9),t(),e(14,"mat-label",7),a(15,"Email "),t(),e(16,"mat-form-field",8),i(17,"input",10),t(),e(18,"mat-label",7),a(19,"Password "),t(),e(20,"mat-form-field",8),i(21,"input",11),t()(),e(22,"div",12)(23,"button",13),a(24,"Next"),t()()()(),e(25,"mat-step",4)(26,"form",5),be(27,To,1,0,"ng-template",6),e(28,"div")(29,"mat-label",7),a(30,"First Name "),t(),e(31,"mat-form-field",8),i(32,"input",14),t(),e(33,"mat-label",7),a(34,"Last Name "),t(),e(35,"mat-form-field",8),i(36,"input",14),t(),e(37,"mat-label",7),a(38,"Address "),t(),e(39,"mat-form-field",8),i(40,"textarea",15),t()(),e(41,"div",16)(42,"button",17),a(43," Back "),t(),e(44,"button",13),a(45,"Next"),t()()()(),e(46,"mat-step"),be(47,Co,1,0,"ng-template",6),e(48,"h4",18),a(49,"Terms and condition"),t(),e(50,"p",19),a(51," Sard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory isSard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is "),t(),e(52,"mat-checkbox",20),a(53,"Agree with terms?"),t(),e(54,"div",21)(55,"button",17),a(56," Back "),t(),e(57,"button",22),f("click",function(){c(p);let h=b(5);return u(h.reset())}),a(58,"Finish"),t()()()()(),e(59,"div",23)(60,"pre"),a(61,"      "),i(62,"code",24),a(63,`
    `),t()(),e(64,"div",25)(65,"pre"),a(66,"      "),i(67,"code",26),a(68,`
    `),t()()(),e(69,"app-code-view",1)(70,"h4",2),a(71,"Vertical"),t(),e(72,"div",3)(73,"mat-stepper",27,0)(75,"mat-step",4)(76,"form",5),be(77,Io,1,0,"ng-template",6),e(78,"div")(79,"mat-label",7),a(80,"Name "),t(),e(81,"mat-form-field",8),i(82,"input",9),t(),e(83,"mat-label",7),a(84,"Email "),t(),e(85,"mat-form-field",8),i(86,"input",10),t(),e(87,"mat-label",7),a(88,"Password "),t(),e(89,"mat-form-field",8),i(90,"input",11),t()(),e(91,"div",12)(92,"button",13),a(93,"Next"),t()()()(),e(94,"mat-step",4)(95,"form",5),be(96,yo,1,0,"ng-template",6),e(97,"div")(98,"mat-label",7),a(99,"First Name "),t(),e(100,"mat-form-field",8),i(101,"input",14),t(),e(102,"mat-label",7),a(103,"Last Name "),t(),e(104,"mat-form-field",8),i(105,"input",14),t(),e(106,"mat-label",7),a(107,"Address "),t(),e(108,"mat-form-field",8),i(109,"textarea",15),t()(),e(110,"div",16)(111,"button",17),a(112," Back "),t(),e(113,"button",13),a(114,"Next"),t()()()(),e(115,"mat-step"),be(116,Fo,1,0,"ng-template",6),e(117,"h4",18),a(118,"Terms and condition"),t(),e(119,"p",19),a(120," Sard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory isSard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is "),t(),e(121,"mat-checkbox",20),a(122,"Agree with terms?"),t(),e(123,"div",21)(124,"button",17),a(125," Back "),t(),e(126,"button",22),f("click",function(){c(p);let h=b(5);return u(h.reset())}),a(127,"Finish"),t()()()()(),e(128,"div",23)(129,"pre"),a(130,"      "),i(131,"code",24),a(132,`
    `),t()(),e(133,"div",25)(134,"pre"),a(135,"      "),i(136,"code",26),a(137,`
    `),t()()()}d&2&&(n("isTitle",!0),o(6),n("stepControl",l.firstFormGroup),o(),n("formGroup",l.firstFormGroup),o(18),n("stepControl",l.secondFormGroup),o(),n("formGroup",l.secondFormGroup),o(36),n("highlight",l.codeForFormWizard),o(5),n("highlightAuto",l.codeForFormWizardTs),o(2),n("isTitle",!0),o(6),n("stepControl",l.firstFormGroup),o(),n("formGroup",l.firstFormGroup),o(18),n("stepControl",l.secondFormGroup),o(),n("formGroup",l.secondFormGroup),o(36),n("highlight",l.codeForVerticalFormWizard),o(5),n("highlightAuto",l.codeForVerticalFormWizardTs))},dependencies:[S,ke,V,H,Y,aa,ta,ia,oa,la,O,y,xe,ae,I,K,we,N,oe,ie,M,T,_,k],encapsulation:2})}}return r})();var io=(()=>{class r{constructor(m){this.toastr=m}showSuccess(){this.toastr.success("You are awesome!","Success!")}showError(){this.toastr.error("This is not good!","Oops!")}showWarning(){this.toastr.warning("You are being warned.","Alert!")}showInfo(){this.toastr.info("Just some information for you.")}static{this.\u0275fac=function(d){return new(d||r)(ee(et))}}static{this.\u0275cmp=g({type:r,selectors:[["app-form-toastr"]],features:[j([et])],decls:37,vars:0,consts:[[1,"row"],[1,"col-md-6"],[1,"cardWithShadow"],[1,"m-b-12"],["mat-flat-button","",1,"bg-success","text-white",3,"click"],["mat-flat-button","",1,"bg-error","text-white",3,"click"],["mat-flat-button","",1,"bg-warning","text-white",3,"click"],["mat-flat-button","",1,"bg-secondary","text-white",3,"click"]],template:function(d,l){d&1&&(e(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-content")(4,"mat-card-title"),a(5,"Toastr Success"),t(),e(6,"mat-card-subtitle",3),a(7,"This is the simple toastr with success message"),t(),e(8,"button",4),f("click",function(){return l.showSuccess()}),a(9,"Toastr Success"),t()()()(),e(10,"div",1)(11,"mat-card",2)(12,"mat-card-content")(13,"mat-card-title"),a(14,"Toastr Danger"),t(),e(15,"mat-card-subtitle",3),a(16,"This is the simple toastr with Danger message"),t(),e(17,"button",5),f("click",function(){return l.showError()}),a(18,"Toastr Danger"),t()()()(),e(19,"div",1)(20,"mat-card",2)(21,"mat-card-content")(22,"mat-card-title"),a(23,"Toastr Warning"),t(),e(24,"mat-card-subtitle",3),a(25,"This is the simple toastr with Warning message"),t(),e(26,"button",6),f("click",function(){return l.showWarning()}),a(27,"Toastr Warning"),t()()()(),e(28,"div",1)(29,"mat-card",2)(30,"mat-card-content")(31,"mat-card-title"),a(32,"Toastr Accent"),t(),e(33,"mat-card-subtitle",3),a(34,"This is the simple toastr with Accent message"),t(),e(35,"button",7),f("click",function(){return l.showInfo()}),a(36,"Toastr Accent"),t()()()()())},dependencies:[S,E,w,$t,G,O,da],encapsulation:2})}}return r})();var oo=(()=>{class r{ngOnInit(){this.editor=new ca}ngOnDestroy(){this.editor.destroy()}constructor(){this.html="",this.toolbar=[["bold","italic"],["underline"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]]}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=g({type:r,selectors:[["app-form-editor"]],decls:5,vars:6,consts:[[1,"cardWithShadow"],[1,"NgxEditor__Wrapper",2,"min-height","300px"],[1,"",3,"editor","toolbar"],[3,"editor","ngModel","disabled","placeholder"]],template:function(d,l){d&1&&(e(0,"mat-card",0)(1,"mat-card-content")(2,"div",1),i(3,"ngx-editor-menu",2)(4,"ngx-editor",3),t()()()),d&2&&(o(3),n("editor",l.editor)("toolbar",l.toolbar),o(),n("editor",l.editor)("ngModel",l.html)("disabled",!1)("placeholder","Type here..."))},dependencies:[ea,E,w,sa,pa,y,I,Se],encapsulation:2})}}return r})();var hr=[{path:"forms-elements",children:[{path:"autocomplete",component:wa,data:{title:"Autocomplete",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Autocomplete"}]}},{path:"button",component:Oa,data:{title:"Button",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Button"}]}},{path:"checkbox",component:Ua,data:{title:"Checkbox",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Checkbox"}]}},{path:"radio",component:qa,data:{title:"Radio Button",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Radio Button"}]}},{path:"datepicker",component:hi,data:{title:"Datepicker",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Datepicker"}]}}]},{path:"",children:[{path:"form-layouts",component:Gi,data:{title:"Form Layouts",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Form Layouts"}]}},{path:"form-horizontal",component:Ci,data:{title:"Form Horizontal",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Form Horizontal"}]}},{path:"form-vertical",component:$i,data:{title:"Form Vertical",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Form Vertical"}]}},{path:"form-wizard",component:ao,data:{title:"Form Wizard",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Form Wizard"}]}},{path:"form-toastr",component:io,data:{title:"Form Toastr",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Form Toastr"}]}},{path:"form-editor",component:oo,data:{title:"Form Editor",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Form Editor"}]}}]}];export{hr as FormsRoutes};
