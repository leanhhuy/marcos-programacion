import{a as I}from"./chunk-XRM6PKGS.js";import{b as L}from"./chunk-XHAM6T3I.js";import{e as F,f as j}from"./chunk-WZZJF4VT.js";import"./chunk-7UZYWCAJ.js";import{c as it,d as at,f as Pe,g as He,h as nt}from"./chunk-CJPLD6EO.js";import{a as ot,b as lt}from"./chunk-NZTJZNEO.js";import{b as Ze,c as et,e as G,f as re,g as ee,h as xe,i as Me,j as x,k as M,l as S,m as me,n as D,o as v,p as se,q as E,r as A,s as pe,t as P,u as H,v as de,w as R,x as tt,y as N,z as Q}from"./chunk-LXNH35ZP.js";import{b as Ge,c as Qe,e as k}from"./chunk-NDYV2RWR.js";import{Bb as be,Cb as _e,Db as Te,Gb as Xe,Pb as y,Qb as we,Rb as ye,hb as ge,ob as he,q as le,tb as qe,ub as Ke,w as Ye,xb as Ce}from"./chunk-KLGXUUUF.js";import{A as ze,n as $,o as Ue,t as oe,v as B}from"./chunk-SJYD7TKV.js";import{Ab as w,Bc as Ee,Cc as a,D as Fe,Dc as J,Ec as p,G as je,Gb as c,Jc as We,Lc as Ae,Nc as te,Pb as ve,Qb as Oe,Rb as b,Sb as _,Ub as ce,Vb as ue,Wb as fe,Wc as h,X as Le,Xb as m,Xc as C,Y as Be,Yb as i,Zb as l,_b as d,cc as u,dc as f,eb as O,fc as q,ka as ke,kb as o,lc as V,nc as g,o as Ne,qa as z,ra as Y,rc as ne,sc as X,t as Ie,tc as Z,ub as ae,xc as $e,yc as Ve,zc as Je}from"./chunk-4VUSXYH3.js";import"./chunk-6NE7JDAX.js";var rt=`  <div class="table-responsive">
      <table mat-table [dataSource]="dataSource1" class="w-100">
        <!-- Position Column -->
        <ng-container matColumnDef="assigned">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 p-l-0">
            Assigned
          </th>
          <td mat-cell *matCellDef="let element" class="p-l-0">
            <div class="d-flex align-items-center">
              <img [src]="element.imagePath" alt="users" width="40" class="rounded-circle" />
              <div class="m-l-16">
                <h6 class=" f-s-14 f-w-600">
                  {{ element.uname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.position }}
                </span>
              </div>
            </div>
          </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Name
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.productName }}
          </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="priority">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Priority
          </th>
          <td mat-cell *matCellDef="let element">
            @if(element.priority == 'low') {
            <span class="bg-light-secondary text-secondary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'medium') {
            <span class="bg-light-primary text-primary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'high') {
            <span class="bg-light-warning text-warning rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'critical') {
            <span class="bg-light-error text-error rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'moderate') {
            <span class="bg-light-success text-success rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }
          </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="budget">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Budget
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.budget }}k
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns1"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns1"></tr>
      </table>
    </div>
`,mt=`  <div class="table-responsive">
      <table mat-table [dataSource]="dataSource2" class="w-100">
        <!-- Position Column -->
        <ng-container matColumnDef="product">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 f-s-14  p-l-0">
            Product
          </th>
          <td mat-cell *matCellDef="let element" class="p-l-0">
            <div class="d-flex align-items-center">
              <img [src]="element.imagePath" alt="users" width="48" class="rounded" />
              <div class="m-l-16">
                <h6 class="f-s-14  f-w-600">
                  {{ element.pname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.category }}
                </span>
              </div>
            </div>
          </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="progress">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 f-s-14 ">
            Progress
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.progress }}%
          </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 f-s-14 ">
            Status
          </th>
          <td mat-cell *matCellDef="let element">
            @if(element.status == 'low') {
            <span class="bg-light-success text-success rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.status | titlecase }}
            </span>
            } @if(element.status == 'medium') {
            <span class="bg-light-warning text-warning rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.status | titlecase }}
            </span>
            } @if(element.status == 'high') {
            <span class="bg-light-primary text-primary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.status | titlecase }}
            </span>
            } @if(element.status == 'critical') {
            <span class="bg-light-error text-error rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.status | titlecase }}
            </span>
            }
          </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="sales">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 f-s-14 ">
            Sales
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.sales }}k
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns2"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns2"></tr>
      </table>
    </div>
`,st=`  <div class="table-responsive">
      <table mat-table [dataSource]="dataSource3" class="w-100">
        <!-- Position Column -->
        <ng-container matColumnDef="product">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 f-s-14  p-l-0">
            Product
          </th>
          <td mat-cell *matCellDef="let element" class="p-l-0">
            <div class="d-flex align-items-center">
              <span class="text-{{ element.color }} bg-light-{{
                  element.color
                }} rounded icon-40 d-flex align-items-center justify-content-center">
                <img [src]="element.imagePath" alt="icon" />
              </span>

              <div class="m-l-16">
                <h6 class="f-s-14  f-w-600">
                  {{ element.pname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.category }}
                </span>
              </div>
            </div>
          </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="price">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 f-s-14  text-right">
            Price
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14 text-right">
            +{{ element.price }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns3"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns3"></tr>
      </table>
    </div>
`,pt=`  <div class="table-responsive">
      <table mat-table [dataSource]="dataSource4" class="w-100">
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 f-s-16  p-l-0">
            Users
          </th>
          <td mat-cell *matCellDef="let element" class="p-l-0">
            <div class="d-flex align-items-center">
              <img [src]="element.imgSrc" alt="user" width="40" class="rounded-circle" />
              <div class="m-l-12">
                <h5 class=" f-s-14 f-w-600 m-0">
                  {{ element.name }}
                </h5>
                <span class="f-s-12">{{ element.post }}</span>
              </div>
            </div>
          </td>
        </ng-container>

        <!-- Project Name Column -->
        <ng-container matColumnDef="pname">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 f-s-16 ">
            Project Name
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.pname }}
          </td>
        </ng-container>

        <!-- Status Column -->
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 f-s-16 ">
            Status
          </th>
          <td mat-cell *matCellDef="let element">
            <span class="rounded-pill bg-light-{{ element.color }} text-{{
                element.color
              }} f-s-12 f-w-500 p-x-8 p-y-4">
              {{ element.status }}</span>
          </td>
        </ng-container>

        <!-- budget Column -->
        <ng-container matColumnDef="budget">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 f-s-16  p-r-0 text-right">
            Budget
          </th>
          <td mat-cell *matCellDef="let element" class="f-w-500 text-right p-r-0">
            {{ element.budget }}k
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns4"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns4"></tr>
      </table>
    </div>
`;var dt=`  import { Component, OnInit } from '@angular/core';
    import { MatTableModule } from '@angular/material/table';
    import { CommonModule } from '@angular/common';
    import { MatDividerModule } from '@angular/material/divider';

    export interface productsData {
      id: number;
      imagePath: string;
      uname: string;
      position: string;
      productName: string;
      budget: number;
      priority: string;
    }

    const PRODUCT_DATA: productsData[] = [
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low'
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium'
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high'
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical'
      },
    ];

    /**
     * @title basic table */
     */
    @Component({
        selector: 'app-basic-table',
        imports: [MatTableModule, CommonModule, MatCardModule, MatDividerModule,],
        templateUrl: './basic-table.component.html'
    })
    export class AppBasicTableComponent {

      displayedColumns1: string[] = ['assigned', 'name', 'priority', 'budget'];
      dataSource1 = PRODUCT_DATA;

    }
`,ct=`  import { Component, OnInit } from '@angular/core';
    import { MatTableModule } from '@angular/material/table';
    import { CommonModule } from '@angular/common';
    import { MatDividerModule } from '@angular/material/divider';

    export interface performanceData {
      id: number;
      imagePath: string;
      pname: string;
      category: string;
      progress: number;
      sales: number;
      status: string;
    }

    const PROJECT_DATA: performanceData[] = [
      {
        id: 1,
        imagePath: 'assets/images/products/s6.jpg',
        pname: 'Gaming Console',
        category: 'Electronics',
        progress: 78.5,
        sales: 3.9,
        status: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/products/s9.jpg',
        pname: 'Leather Purse',
        category: 'Fashion',
        progress: 58.6,
        sales: 3.5,
        status: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/products/s7.jpg',
        pname: 'Red Velvate Dress',
        category: 'Womens Fashion',
        progress: 25,
        sales: 3.8,
        status: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/products/s4.jpg',
        pname: 'Headphone Boat',
        category: 'Electronics',
        progress: 96.3,
        sales: 3.54,
        status: 'critical',
      },
    ];

    /**
     * @title basic table */
     */
    @Component({
        selector: 'app-basic-table',
        imports: [MatTableModule, CommonModule, MatCardModule, MatDividerModule,],
        templateUrl: './basic-table.component.html'
    })
    export class AppBasicTableComponent {

      displayedColumns2: string[] = ['product', 'progress', 'status', 'sales'];
      dataSource2 = PROJECT_DATA;

    }
`,ut=`  import { Component, OnInit } from '@angular/core';
    import { MatTableModule } from '@angular/material/table';
    import { CommonModule } from '@angular/common';
    import { MatDividerModule } from '@angular/material/divider';

    export interface paymentData {
      id: number;
      color: string;
      imagePath: string;
      pname: string;
      category: string;
      price: number;
    }

    const PAYMENT_DATA: paymentData[] = [
      {
        id: 1,
        color: 'primary',
        imagePath: 'assets/images/svgs/icon-paypal.svg',
        pname: 'Paypal',
        category: 'Big Brands',
        price: 6235,
      },
      {
        id: 2,
        color: 'success',
        imagePath: 'assets/images/svgs/icon-office-bag.svg',
        pname: 'Wallet',
        category: 'Bill payment',
        price: 345,
      },
      {
        id: 3,
        color: 'warning',
        imagePath: 'assets/images/svgs/icon-master-card.svg',
        pname: 'Credit Card',
        category: 'Money reversed',
        price: 2235,
      },
      {
        id: 4,
        color: 'error',
        imagePath: 'assets/images/svgs/icon-pie.svg',
        pname: 'Refund',
        category: 'Bill Payment',
        price: 32,
      },
    ];

    /**
     * @title basic table */
     */
    @Component({
        selector: 'app-basic-table',
        imports: [MatTableModule, CommonModule, MatCardModule, MatDividerModule,],
        templateUrl: './basic-table.component.html'
    })
    export class AppBasicTableComponent {

      displayedColumns3: string[] = ['product', 'price'];
      dataSource3 = PAYMENT_DATA;

    }
`,ft=`  import { Component, OnInit } from '@angular/core';
    import { MatTableDataSource, MatTableModule } from '@angular/material/table';
    import { BreakpointObserver } from '@angular/cdk/layout';
    import { CommonModule } from '@angular/common';
    import { MatDividerModule } from '@angular/material/divider';

    export interface Element {
      name: string;
      post: string;
      imgSrc: string;
      pname: string;
      status: string;
      color: string;
      budget: string;
    }

    const BASIC_DATA: Element[] = [
      { 
        imgSrc: 'assets/images/profile/user-1.jpg',
        name: 'Micheal Doe',
        post: 'Web Designer',
        pname: 'Elite Admin',
        status: 'Active',
        color: 'success',
        budget: '3.9'
      },
      { 
        imgSrc: 'assets/images/profile/user-2.jpg',
        name: 'Andrew McDownland',
        post: 'Project Manager',
        pname: 'Real Homes WP Theme',
        status: 'Pending',
        color: 'warning',
        budget: '3.9'
      },
      { 
        imgSrc: 'assets/images/profile/user-3.jpg',
        name: 'Christopher Jamil',
        post: 'Frontend Engineer',
        pname: 'MedicalPro WP Theme',
        status: 'Cancel',
        color: 'error',
        budget: '3.9'
      },
      { 
        imgSrc: 'assets/images/profile/user-4.jpg',
        name: 'Mathew Anderson',
        post: 'Content Writer',
        pname: 'Hosting Press HTML',
        status: 'Completed',
        color: 'primary',
        budget: '3.9'
      },
    ];

    /**
     * @title basic table */
     */
    @Component({
        selector: 'app-basic-table',
        imports: [MatTableModule, CommonModule, MatCardModule, MatDividerModule,],
        templateUrl: './basic-table.component.html'
    })
    export class AppBasicTableComponent {

      displayedColumns4 = ['name', 'pname', 'status', 'budget'];
        dataSource4 = new MatTableDataSource<Element>(BASIC_DATA);
      
        constructor(breakpointObserver: BreakpointObserver) {
          breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
            this.displayedColumns4 = result.matches
              ? ['name', 'pname', 'status', 'budget']
              : ['name', 'pname', 'status', 'budget'];
          });
        }

    }
`;function li(e,n){e&1&&(i(0,"th",35),a(1," Assigned "),l())}function ri(e,n){if(e&1&&(i(0,"td",36)(1,"div",37),d(2,"img",38),i(3,"div",39)(4,"h6",40),a(5),l(),i(6,"span",41),a(7),l()()()()),e&2){let t=n.$implicit;o(2),m("src",t.imagePath,O),o(3),p(" ",t.uname," "),o(2),p(" ",t.position," ")}}function mi(e,n){e&1&&(i(0,"th",42),a(1," Name "),l())}function si(e,n){if(e&1&&(i(0,"td",43),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.productName," ")}}function pi(e,n){e&1&&(i(0,"th",42),a(1," Priority "),l())}function di(e,n){if(e&1&&(i(0,"span",45),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function ci(e,n){if(e&1&&(i(0,"span",46),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function ui(e,n){if(e&1&&(i(0,"span",47),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function fi(e,n){if(e&1&&(i(0,"span",48),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function gi(e,n){if(e&1&&(i(0,"span",49),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function hi(e,n){if(e&1&&(i(0,"td",44),b(1,di,3,3,"span",45),b(2,ci,3,3,"span",46),b(3,ui,3,3,"span",47),b(4,fi,3,3,"span",48),b(5,gi,3,3,"span",49),l()),e&2){let t=n.$implicit;o(),_(t.priority=="low"?1:-1),o(),_(t.priority=="medium"?2:-1),o(),_(t.priority=="high"?3:-1),o(),_(t.priority=="critical"?4:-1),o(),_(t.priority=="moderate"?5:-1)}}function Ci(e,n){e&1&&(i(0,"th",42),a(1," Budget "),l())}function bi(e,n){if(e&1&&(i(0,"td",43),a(1),l()),e&2){let t=n.$implicit;o(),p(" $",t.budget,"k ")}}function _i(e,n){e&1&&d(0,"tr",50)}function Ti(e,n){e&1&&d(0,"tr",51)}function wi(e,n){e&1&&(i(0,"th",35),a(1," Product "),l())}function yi(e,n){if(e&1&&(i(0,"td",36)(1,"div",37),d(2,"img",52),i(3,"div",39)(4,"h6",40),a(5),l(),i(6,"span",41),a(7),l()()()()),e&2){let t=n.$implicit;o(2),m("src",t.imagePath,O),o(3),p(" ",t.pname," "),o(2),p(" ",t.category," ")}}function xi(e,n){e&1&&(i(0,"th",42),a(1," Progress "),l())}function Mi(e,n){if(e&1&&(i(0,"td",43),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.progress,"% ")}}function Si(e,n){e&1&&(i(0,"th",42),a(1," Status "),l())}function Di(e,n){if(e&1&&(i(0,"span",49),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.status)," ")}}function vi(e,n){if(e&1&&(i(0,"span",47),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.status)," ")}}function Ei(e,n){if(e&1&&(i(0,"span",46),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.status)," ")}}function Ai(e,n){if(e&1&&(i(0,"span",48),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.status)," ")}}function Pi(e,n){if(e&1&&(i(0,"td",44),b(1,Di,3,3,"span",49),b(2,vi,3,3,"span",47),b(3,Ei,3,3,"span",46),b(4,Ai,3,3,"span",48),l()),e&2){let t=n.$implicit;o(),_(t.status=="low"?1:-1),o(),_(t.status=="medium"?2:-1),o(),_(t.status=="high"?3:-1),o(),_(t.status=="critical"?4:-1)}}function Hi(e,n){e&1&&(i(0,"th",42),a(1," Sales "),l())}function Ri(e,n){if(e&1&&(i(0,"td",43),a(1),l()),e&2){let t=n.$implicit;o(),p(" $",t.sales,"k ")}}function Ni(e,n){e&1&&d(0,"tr",50)}function Ii(e,n){e&1&&d(0,"tr",51)}function Fi(e,n){e&1&&(i(0,"th",35),a(1," Product "),l())}function ji(e,n){if(e&1&&(i(0,"td",36)(1,"div",37)(2,"span"),d(3,"img",53),l(),i(4,"div",39)(5,"h6",40),a(6),l(),i(7,"span",41),a(8),l()()()()),e&2){let t=n.$implicit;o(2),Ee(Ae("text-",t.color," bg-light-",t.color," rounded icon-40 d-flex align-items-center justify-content-center")),o(),m("src",t.imagePath,O),o(3),p(" ",t.pname," "),o(2),p(" ",t.category," ")}}function Li(e,n){e&1&&(i(0,"th",54),a(1," Price "),l())}function Bi(e,n){if(e&1&&(i(0,"td",55),a(1),l()),e&2){let t=n.$implicit;o(),p(" +$",t.price," ")}}function ki(e,n){e&1&&d(0,"tr",50)}function Oi(e,n){e&1&&d(0,"tr",51)}function $i(e,n){e&1&&(i(0,"th",56),a(1," Users "),l())}function Vi(e,n){if(e&1&&(i(0,"td",36)(1,"div",37),d(2,"img",57),i(3,"div",58)(4,"h5",59),a(5),l(),i(6,"span",60),a(7),l()()()()),e&2){let t=n.$implicit;o(2),m("src",t.imgSrc,O),o(3),p(" ",t.name," "),o(2),J(t.post)}}function Ji(e,n){e&1&&(i(0,"th",61),a(1," Project Name "),l())}function Wi(e,n){if(e&1&&(i(0,"td",43),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.pname," ")}}function Ui(e,n){e&1&&(i(0,"th",61),a(1," Status "),l())}function zi(e,n){if(e&1&&(i(0,"td",44)(1,"span"),a(2),l()()),e&2){let t=n.$implicit;o(),Ee(Ae("rounded-pill bg-light-",t.color," text-",t.color," f-s-12 f-w-500 p-x-8 p-y-4")),o(),p(" ",t.status)}}function Yi(e,n){e&1&&(i(0,"th",62),a(1," Budget "),l())}function Gi(e,n){if(e&1&&(i(0,"td",63),a(1),l()),e&2){let t=n.$implicit;o(),p(" $",t.budget,"k ")}}function Qi(e,n){e&1&&d(0,"tr",50)}function qi(e,n){e&1&&d(0,"tr",51)}var Ki=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"}],Xi=[{id:1,imagePath:"assets/images/products/s6.jpg",pname:"Gaming Console",category:"Electronics",progress:78.5,sales:3.9,status:"low"},{id:2,imagePath:"assets/images/products/s9.jpg",pname:"Leather Purse",category:"Fashion",progress:58.6,sales:3.5,status:"medium"},{id:3,imagePath:"assets/images/products/s7.jpg",pname:"Red Velvate Dress",category:"Womens Fashion",progress:25,sales:3.8,status:"high"},{id:4,imagePath:"assets/images/products/s4.jpg",pname:"Headphone Boat",category:"Electronics",progress:96.3,sales:3.54,status:"critical"}],Zi=[{id:1,color:"primary",imagePath:"assets/images/svgs/icon-paypal.svg",pname:"Paypal",category:"Big Brands",price:6235},{id:2,color:"success",imagePath:"assets/images/svgs/icon-office-bag.svg",pname:"Wallet",category:"Bill payment",price:345},{id:3,color:"warning",imagePath:"assets/images/svgs/icon-master-card.svg",pname:"Credit Card",category:"Money reversed",price:2235},{id:4,color:"error",imagePath:"assets/images/svgs/icon-pie.svg",pname:"Refund",category:"Bill Payment",price:32}],ea=[{imgSrc:"assets/images/profile/user-1.jpg",name:"Micheal Doe",post:"Web Designer",pname:"Elite Admin",status:"Active",color:"success",budget:"3.9"},{imgSrc:"assets/images/profile/user-2.jpg",name:"Andrew McDownland",post:"Project Manager",pname:"Real Homes WP Theme",status:"Pending",color:"warning",budget:"3.9"},{imgSrc:"assets/images/profile/user-3.jpg",name:"Christopher Jamil",post:"Frontend Engineer",pname:"MedicalPro WP Theme",status:"Cancel",color:"error",budget:"3.9"},{imgSrc:"assets/images/profile/user-4.jpg",name:"Mathew Anderson",post:"Content Writer",pname:"Hosting Press HTML",status:"Completed",color:"primary",budget:"3.9"}],ht=(()=>{class e{constructor(t){this.codeForTopProjects=rt,this.codeForTopProjectsTs=dt,this.codeForBestProduct=mt,this.codeForBestProductTs=ct,this.codeForPaymentGateways=st,this.codeForPaymentGatewaysTs=ut,this.codeForEmployeeTheYear=pt,this.codeForEmployeeTheYearTs=ft,this.displayedColumns4=["name","pname","status","budget"],this.dataSource4=new Q(ea),this.displayedColumns1=["assigned","name","priority","budget"],this.dataSource1=Ki,this.displayedColumns2=["product","progress","status","sales"],this.dataSource2=Xi,this.displayedColumns3=["product","price"],this.dataSource3=Zi,t.observe(["(max-width: 600px)"]).subscribe(s=>{this.displayedColumns4=s.matches?["name","pname","status","budget"]:["name","pname","status","budget"]})}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||e)(ae(le))}}static{this.\u0275cmp=w({type:e,selectors:[["app-basic-table"]],decls:122,vars:24,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","assigned"],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","","class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["mat-cell","",4,"matCellDef"],["matColumnDef","budget"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matColumnDef","product"],["mat-header-cell","","class","f-w-600 f-s-14  p-l-0",4,"matHeaderCellDef"],["matColumnDef","progress"],["mat-header-cell","","class","f-w-600 f-s-14 ",4,"matHeaderCellDef"],["matColumnDef","status"],["matColumnDef","sales"],["matColumnDef","price"],["mat-header-cell","","class","f-w-600 f-s-14  text-right",4,"matHeaderCellDef"],["mat-cell","","class","f-s-14 text-right",4,"matCellDef"],["mat-header-cell","","class","f-w-600 f-s-16  p-l-0",4,"matHeaderCellDef"],["matColumnDef","pname"],["mat-header-cell","","class","f-w-600 f-s-16 ",4,"matHeaderCellDef"],["mat-header-cell","","class","f-w-600 f-s-16  p-r-0 text-right",4,"matHeaderCellDef"],["mat-cell","","class","f-w-500 text-right p-r-0",4,"matCellDef"],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell","",1,"f-s-14"],["mat-cell",""],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"],["mat-header-row",""],["mat-row",""],["alt","users","width","48",1,"rounded",3,"src"],["alt","icon",3,"src"],["mat-header-cell","",1,"f-w-600","f-s-14","text-right"],["mat-cell","",1,"f-s-14","text-right"],["mat-header-cell","",1,"f-w-600","f-s-16","p-l-0"],["alt","user","width","40",1,"rounded-circle",3,"src"],[1,"m-l-12"],[1,"f-s-14","f-w-600","m-0"],[1,"f-s-12"],["mat-header-cell","",1,"f-w-600","f-s-16"],["mat-header-cell","",1,"f-w-600","f-s-16","p-r-0","text-right"],["mat-cell","",1,"f-w-500","text-right","p-r-0"]],template:function(s,r){s&1&&(i(0,"app-code-view",0)(1,"h4",1),a(2," Top Projects "),i(3,"span",2),a(4,"top new products"),l()(),i(5,"div",3)(6,"div",4)(7,"table",5),u(8,6),c(9,li,2,0,"th",7)(10,ri,8,3,"td",8),f(),u(11,9),c(12,mi,2,0,"th",10)(13,si,2,1,"td",11),f(),u(14,12),c(15,pi,2,0,"th",10)(16,hi,6,5,"td",13),f(),u(17,14),c(18,Ci,2,0,"th",10)(19,bi,2,1,"td",11),f(),c(20,_i,1,0,"tr",15)(21,Ti,1,0,"tr",16),l()()(),i(22,"div",17)(23,"pre"),a(24,"      "),d(25,"code",18),a(26,`
    `),l()(),i(27,"div",19)(28,"pre"),a(29,"      "),d(30,"code",20),a(31,`
    `),l()()(),i(32,"app-code-view",0)(33,"h4",1),a(34," Best Products "),i(35,"span",2),a(36,"Sell new products"),l()(),i(37,"div",3)(38,"div",4)(39,"table",5),u(40,21),c(41,wi,2,0,"th",22)(42,yi,8,3,"td",8),f(),u(43,23),c(44,xi,2,0,"th",24)(45,Mi,2,1,"td",11),f(),u(46,25),c(47,Si,2,0,"th",24)(48,Pi,5,4,"td",13),f(),u(49,26),c(50,Hi,2,0,"th",24)(51,Ri,2,1,"td",11),f(),c(52,Ni,1,0,"tr",15)(53,Ii,1,0,"tr",16),l()()(),i(54,"div",17)(55,"pre"),a(56,"      "),d(57,"code",18),a(58,`
    `),l()(),i(59,"div",19)(60,"pre"),a(61,"      "),d(62,"code",20),a(63,`
    `),l()()(),i(64,"app-code-view",0)(65,"h4",1),a(66," Payment Gateways "),i(67,"span",2),a(68,"Platform For Income"),l()(),i(69,"div",3)(70,"div",4)(71,"table",5),u(72,21),c(73,Fi,2,0,"th",22)(74,ji,9,7,"td",8),f(),u(75,27),c(76,Li,2,0,"th",28)(77,Bi,2,1,"td",29),f(),c(78,ki,1,0,"tr",15)(79,Oi,1,0,"tr",16),l()()(),i(80,"div",17)(81,"pre"),a(82,"      "),d(83,"code",18),a(84,`
    `),l()(),i(85,"div",19)(86,"pre"),a(87,"      "),d(88,"code",20),a(89,`
    `),l()()(),i(90,"app-code-view",0)(91,"h4",1),a(92," Employee of the Year "),i(93,"span",2),a(94,"great work"),l()(),i(95,"div",3)(96,"div",4)(97,"table",5),u(98,9),c(99,$i,2,0,"th",30)(100,Vi,8,3,"td",8),f(),u(101,31),c(102,Ji,2,0,"th",32)(103,Wi,2,1,"td",11),f(),u(104,25),c(105,Ui,2,0,"th",32)(106,zi,3,5,"td",13),f(),u(107,14),c(108,Yi,2,0,"th",33)(109,Gi,2,1,"td",34),f(),c(110,Qi,1,0,"tr",15)(111,qi,1,0,"tr",16),l()()(),i(112,"div",17)(113,"pre"),a(114,"      "),d(115,"code",18),a(116,`
    `),l()(),i(117,"div",19)(118,"pre"),a(119,"      "),d(120,"code",20),a(121,`
    `),l()()()),s&2&&(m("isTitle",!0),o(7),m("dataSource",r.dataSource1),o(13),m("matHeaderRowDef",r.displayedColumns1),o(),m("matRowDefColumns",r.displayedColumns1),o(4),m("highlight",r.codeForTopProjects),o(5),m("highlightAuto",r.codeForTopProjectsTs),o(2),m("isTitle",!0),o(7),m("dataSource",r.dataSource2),o(13),m("matHeaderRowDef",r.displayedColumns2),o(),m("matRowDefColumns",r.displayedColumns2),o(4),m("highlight",r.codeForBestProduct),o(5),m("highlightAuto",r.codeForBestProductTs),o(2),m("isTitle",!0),o(7),m("dataSource",r.dataSource3),o(7),m("matHeaderRowDef",r.displayedColumns3),o(),m("matRowDefColumns",r.displayedColumns3),o(4),m("highlight",r.codeForPaymentGateways),o(5),m("highlightAuto",r.codeForPaymentGatewaysTs),o(2),m("isTitle",!0),o(7),m("dataSource",r.dataSource4),o(13),m("matHeaderRowDef",r.displayedColumns4),o(),m("matRowDefColumns",r.displayedColumns4),o(4),m("highlight",r.codeForEmployeeTheYear),o(5),m("highlightAuto",r.codeForEmployeeTheYearTs))},dependencies:[N,x,S,A,D,M,P,v,E,H,R,B,y,k,F,j,L,I,$],encapsulation:2})}}return e})();var Ct=`  <div class="d-flex d-sm-block align-items-center gap-1 m-b-16 m-t-16">
      <button mat-flat-button class="m-r-8" (click)="addColumn()">
        Add column
      </button>
      <button mat-flat-button class="m-r-8 bg-error text-white" (click)="removeColumn()">
        Remove column
      </button>
      <button mat-flat-button class="bg-secondary text-white" (click)="shuffle()">
        Shuffle
      </button>
    </div>

    <div class="table-responsive m-t-30">
      <table mat-table [dataSource]="data" class="w-100">
        @for(column of displayedColumns; track column) {
        <ng-container [matColumnDef]="column">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 p-l-0">
            {{ column | titlecase }}
          </th>
          <td mat-cell *matCellDef="let element" class="p-l-0 f-s-14">
            {{ element[column] }}
          </td>
        </ng-container>
        }

        <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
        <tr mat-row *matRowDef="let row; columns: columnsToDisplay"></tr>
      </table>
    </div>
`;var bt=`  import { Component, OnInit } from '@angular/core';
    import { MatTableModule } from '@angular/material/table';
    import { CommonModule } from '@angular/common';
    import { MatButtonModule } from '@angular/material/button';
    import { MatDividerModule } from '@angular/material/divider';

    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }

    const ELEMENT_DATA: PeriodicElement[] = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];

    /**
     * @title dynamic table */
     */
    @Component({
        selector: 'app-dynamic-table',
        imports: [MatTableModule, MatCardModule, CommonModule, MatButtonModule],
        templateUrl: './dynamic-table.component.html'
    })
    export class AppDynamicTableComponent {

      displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
        columnsToDisplay: string[] = this.displayedColumns.slice();
        data: PeriodicElement[] = ELEMENT_DATA;
      
        addColumn(): void {
          const randomColumn = Math.floor(
            Math.random() * this.displayedColumns.length
          );
          this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
        }
      
        removeColumn(): void {
          if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
          }
        }
      
        shuffle(): void {
          let currentIndex = this.columnsToDisplay.length;
          while (0 !== currentIndex) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
      
            // Swap
            const temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
          }
        }

    }
`;function ia(e,n){if(e&1&&(i(0,"th",19),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t)," ")}}function aa(e,n){if(e&1&&(i(0,"td",20),a(1),l()),e&2){let t=n.$implicit,s=g().$implicit;o(),p(" ",t[s]," ")}}function na(e,n){if(e&1&&(u(0,10),c(1,ia,3,3,"th",17)(2,aa,2,1,"td",18),f()),e&2){let t=n.$implicit;m("matColumnDef",t)}}function oa(e,n){e&1&&d(0,"tr",21)}function la(e,n){e&1&&d(0,"tr",22)}var ra=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}],_t=(()=>{class e{addColumn(){let t=Math.floor(Math.random()*this.displayedColumns.length);this.columnsToDisplay.push(this.displayedColumns[t])}removeColumn(){this.columnsToDisplay.length&&this.columnsToDisplay.pop()}shuffle(){let t=this.columnsToDisplay.length;for(;t!==0;){let s=Math.floor(Math.random()*t);t-=1;let r=this.columnsToDisplay[t];this.columnsToDisplay[t]=this.columnsToDisplay[s],this.columnsToDisplay[s]=r}}constructor(){this.codeForDynamicTable=Ct,this.codeForDynamicTableTs=bt,this.displayedColumns=["name","weight","symbol","position"],this.columnsToDisplay=this.displayedColumns.slice(),this.data=ra}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-dynamic-table"]],decls:29,vars:6,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"d-flex","d-sm-block","align-items-center","gap-1","m-b-16","m-t-16"],["mat-flat-button","",1,"m-r-8",3,"click"],["mat-flat-button","",1,"m-r-8","bg-error","text-white",3,"click"],["mat-flat-button","",1,"bg-secondary","text-white",3,"click"],[1,"table-responsive","m-t-30"],["mat-table","",1,"w-100",3,"dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0 f-s-14",4,"matCellDef"],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],["mat-cell","",1,"p-l-0","f-s-14"],["mat-header-row",""],["mat-row",""]],template:function(s,r){s&1&&(i(0,"app-code-view",0)(1,"h4",1),a(2," Table dynamically changing the columns displayed "),i(3,"span",2),a(4,"add column dynamically"),l()(),i(5,"div",3)(6,"div",4)(7,"button",5),V("click",function(){return r.addColumn()}),a(8," Add column "),l(),i(9,"button",6),V("click",function(){return r.removeColumn()}),a(10," Remove column "),l(),i(11,"button",7),V("click",function(){return r.shuffle()}),a(12," Shuffle "),l()(),i(13,"div",8)(14,"table",9),ue(15,na,3,1,"ng-container",10,ce),c(17,oa,1,0,"tr",11)(18,la,1,0,"tr",12),l()()(),i(19,"div",13)(20,"pre"),a(21,"      "),d(22,"code",14),a(23,`
    `),l()(),i(24,"div",15)(25,"pre"),a(26,"      "),d(27,"code",16),a(28,`
    `),l()()()),s&2&&(m("isTitle",!0),o(14),m("dataSource",r.data),o(),fe(r.displayedColumns),o(2),m("matHeaderRowDef",r.columnsToDisplay),o(),m("matRowDefColumns",r.columnsToDisplay),o(4),m("highlight",r.codeForDynamicTable),o(5),m("highlightAuto",r.codeForDynamicTableTs))},dependencies:[N,x,S,A,D,M,P,v,E,H,R,y,B,Ce,Ke,F,j,L,I,$],encapsulation:2})}}return e})();var Tt=`  <div class="table-responsive-sm">
      <table mat-table [dataSource]="dataSource" multiTemplateDataRows>
        @for(column of columnsToDisplay; track column) {
        <ng-container matColumnDef="{{ column }}">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 p-x-24 p-l-0">
            {{ column | titlecase }}
          </th>
          <td mat-cell *matCellDef="let element" class="p-x-24 f-s-14 p-l-0">
            {{ element[column] }}
          </td>
        </ng-container>
        }

        <ng-container matColumnDef="expand">
          <th mat-header-cell *matHeaderCellDef aria-label="row actions">
            &nbsp;
          </th>
          <td mat-cell *matCellDef="let element">
            <button mat-icon-button aria-label="expand row" (click)="
                expandedElement = expandedElement === element ? null : element;
                $event.stopPropagation()
              ">
              @if(expandedElement !== element) {
              <mat-icon>keyboard_arrow_down</mat-icon>
              } @if(expandedElement === element) {
              <mat-icon>keyboard_arrow_up</mat-icon>
              }
            </button>
          </td>
        </ng-container>

        <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->
        <ng-container matColumnDef="expandedDetail">
          <td mat-cell *matCellDef="let element" [attr.colspan]="columnsToDisplay.length">
            <div [@detailExpand]="
                element === expandedElement ? 'expanded' : 'collapsed'
              ">
              <div class="p-15 rounded b-1 m-b-16 m-x-18">
                <div class="d-flex align-items-center gap-12">
                  <span
                    class="bg-light-primary text-primary icon-48 rounded f-w-600 d-flex align-items-center justify-content-center">
                    {{ element.symbol }}
                  </span>
                  <div>
                    <div class="f-s-14 f-w-600 ">
                      {{ element.name }}
                    </div>
                    <div class="f-s-14">{{ element.project }}</div>
                  </div>
                </div>

                <div class="f-s-14 m-t-8">
                  {{ element.description }}
                </div>
              </div>
            </div>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="columnsToDisplayWithExpand"></tr>
        <tr mat-row *matRowDef="let element; columns: columnsToDisplayWithExpand" class="example-element-row"
          [class.example-expanded-row]="expandedElement === element" (click)="
            expandedElement = expandedElement === element ? null : element
          "></tr>
        <tr mat-row *matRowDef="let row; columns: ['expandedDetail']" class="example-detail-row"></tr>
      </table>
    </div>
`;var wt=`  import { Component, OnInit } from '@angular/core';
    import { animate, state, style, transition, trigger} from '@angular/animations';
    import { CommonModule } from '@angular/common';
    import { MatCardModule } from '@angular/material/card';
    import { MatTableModule } from '@angular/material/table';
    import { MatIconModule } from '@angular/material/icon';
    import { MatButtonModule } from '@angular/material/button';
    import { MatDividerModule } from '@angular/material/divider';


    export interface PeriodicElement {
      name: string;
      position: string;
      id: number;
      project: string;
      symbol: string;
      description: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
      {
        id: 1,
        position: 'Front end Developer',
        name: 'Andrew McDownland',
        project: 'Elite Admin',
        symbol: 'H',
        description: 'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
            atomic weight of 1.008, hydrogen is the lightest element on the periodic table.',
      },
      {
        id: 2,
        position: 'Web Designer',
        name: 'Helium',
        project: 'Real Homes Theme',
        symbol: 'He',
        description: 'Helium is a chemical element with symbol He and atomic number 2. It is a
            colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
            group in the periodic table. Its boiling point is the lowest among all the elements.',
      },
      {
        id: 3,
        position: 'Project Manager',
        name: 'Lithium',
        project: 'MedicalPro Theme',
        symbol: 'Li',
        description: 'Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
            silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
            lightest solid element.',
      },
      {
        id: 4,
        position: 'Medical Assistant',
        name: 'Beryllium',
        project: 'Hosting Press HTML	',
        symbol: 'Be',
        description: 'Beryllium is a chemical element with symbol Be and atomic number 4. It is a
            relatively rare element in the universe, usually occurring as a product of the spallation of
            larger atomic nuclei that have collided with cosmic rays.',
      },
      {
        id: 5,
        position: 'Librarian',
        name: 'Boron',
        project: 'Flexy Admin',
        symbol: 'B',
        description: 'Boron is a chemical element with symbol B and atomic number 5. Produced entirely
            by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
            low-abundance element in the Solar system and in the Earth's crust.',
      },
      {
        id: 6,
        position: 'Account Executive',
        name: 'Carbon',
        project: 'Ample Admin',
        symbol: 'C',
        description: 'Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
            and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs
            to group 14 of the periodic table.',
      },
      {
        id: 7,
        position: 'President of Sales',
        name: 'Nitrogen',
        project: 'Modernize Admin',
        symbol: 'N',
        description: 'Nitrogen is a chemical element with symbol N and atomic number 7. It was first
            discovered and isolated by Scottish physician Daniel Rutherford in 1772.',
      },
      {
        id: 8,
        position: 'Dog Trainer',
        name: 'Oxygen',
        project: 'MaterialPro Admin',
        symbol: 'O',
        description: 'Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
             the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
             agent that readily forms oxides with most elements as well as with other compounds.',
      },
      {
        id: 9,
        position: 'Web Designer',
        name: 'Fluorine',
        project: 'Adminpro Admin',
        symbol: 'F',
        description: 'Fluorine is a chemical element with symbol F and atomic number 9. It is the
            lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
            conditions.',
      },
      {
        id: 10,
        position: 'Account Executive',
        name: 'Neon',
        project: 'SEO Debate',
        symbol: 'Ne',
        description: 'Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
            Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
            two-thirds the density of air.',
      },
    ];

    /**
     * @title expand table */
     */
    @Component({
    selector: 'app-expand-table',
      imports: [
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        CommonModule,
        MatDividerModule,
        Highlight,
        HighlightAuto,
        HighlightLineNumbers,
        AppCodeViewComponent,
      ],
      templateUrl: './expand-table.component.html',
      styleUrls: ['./expand-table.component.scss'],
      animations: [
        trigger('detailExpand', [
          state('collapsed', style({ height: '0px', minHeight: '0' })),
          state('expanded', style({ height: '*' })),
          transition(
            'expanded <=> collapsed',
            animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
          ),
        ]),
      ],
    })
    export class AppExpandTableComponent {

      dataSource = ELEMENT_DATA;
      columnsToDisplay = ['id', 'name', 'project', 'symbol', 'position'];
      columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
      expandedElement: PeriodicElement | null = null;

    }
`;var sa=()=>["expandedDetail"];function pa(e,n){if(e&1&&(i(0,"th",20),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t)," ")}}function da(e,n){if(e&1&&(i(0,"td",21),a(1),l()),e&2){let t=n.$implicit,s=g().$implicit;o(),p(" ",t[s]," ")}}function ca(e,n){if(e&1&&(u(0,6),c(1,pa,3,3,"th",18)(2,da,2,1,"td",19),f()),e&2){let t=n.$implicit;m("matColumnDef",We(t))}}function ua(e,n){e&1&&(i(0,"th",22),a(1," \xA0 "),l())}function fa(e,n){e&1&&(i(0,"mat-icon"),a(1,"keyboard_arrow_down"),l())}function ga(e,n){e&1&&(i(0,"mat-icon"),a(1,"keyboard_arrow_up"),l())}function ha(e,n){if(e&1){let t=q();i(0,"td",23)(1,"button",24),V("click",function(r){let T=z(t).$implicit,ie=g();return ie.expandedElement=ie.expandedElement===T?null:T,Y(r.stopPropagation())}),b(2,fa,2,0,"mat-icon"),b(3,ga,2,0,"mat-icon"),l()()}if(e&2){let t=n.$implicit,s=g();o(2),_(s.expandedElement!==t?2:-1),o(),_(s.expandedElement===t?3:-1)}}function Ca(e,n){if(e&1&&(i(0,"td",23)(1,"div")(2,"div",25)(3,"div",26)(4,"span",27),a(5),l(),i(6,"div")(7,"div",28),a(8),l(),i(9,"div",29),a(10),l()()(),i(11,"div",30),a(12),l()()()()),e&2){let t=n.$implicit,s=g();Oe("colspan",s.columnsToDisplay.length),o(),m("@detailExpand",t===s.expandedElement?"expanded":"collapsed"),o(4),p(" ",t.symbol," "),o(3),p(" ",t.name," "),o(2),J(t.project),o(2),p(" ",t.description," ")}}function ba(e,n){e&1&&d(0,"tr",31)}function _a(e,n){if(e&1){let t=q();i(0,"tr",32),V("click",function(){let r=z(t).$implicit,T=g();return Y(T.expandedElement=T.expandedElement===r?null:r)}),l()}if(e&2){let t=n.$implicit,s=g();Je("example-expanded-row",s.expandedElement===t)}}function Ta(e,n){e&1&&d(0,"tr",33)}var wa=[{id:1,position:"Front end Developer",name:"Andrew McDownland",project:"Elite Admin",symbol:"H",description:`Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},{id:2,position:"Web Designer",name:"Helium",project:"Real Homes Theme",symbol:"He",description:`Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`},{id:3,position:"Project Manager",name:"Lithium",project:"MedicalPro Theme",symbol:"Li",description:`Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`},{id:4,position:"Medical Assistant",name:"Beryllium",project:"Hosting Press HTML	",symbol:"Be",description:`Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`},{id:5,position:"Librarian",name:"Boron",project:"Flexy Admin",symbol:"B",description:`Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`},{id:6,position:"Account Executive",name:"Carbon",project:"Ample Admin",symbol:"C",description:`Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`},{id:7,position:"President of Sales",name:"Nitrogen",project:"Modernize Admin",symbol:"N",description:`Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`},{id:8,position:"Dog Trainer",name:"Oxygen",project:"MaterialPro Admin",symbol:"O",description:`Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`},{id:9,position:"Web Designer",name:"Fluorine",project:"Adminpro Admin",symbol:"F",description:`Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`},{id:10,position:"Account Executive",name:"Neon",project:"SEO Debate",symbol:"Ne",description:`Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`}],yt=(()=>{class e{constructor(){this.codeForExpandTable=Tt,this.codeForExpandTableTs=wt,this.dataSource=wa,this.columnsToDisplay=["id","name","project","symbol","position"],this.columnsToDisplayWithExpand=[...this.columnsToDisplay,"expand"],this.expandedElement=null}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-expand-table"]],decls:28,vars:8,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive-sm"],["mat-table","","multiTemplateDataRows","",3,"dataSource"],[3,"matColumnDef"],["matColumnDef","expand"],["mat-header-cell","","aria-label","row actions",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","example-element-row",3,"example-expanded-row","click",4,"matRowDef","matRowDefColumns"],["mat-row","","class","example-detail-row",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","","class","f-w-600  f-s-14 p-x-24 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-x-24 f-s-14 p-l-0",4,"matCellDef"],["mat-header-cell","",1,"f-w-600","f-s-14","p-x-24","p-l-0"],["mat-cell","",1,"p-x-24","f-s-14","p-l-0"],["mat-header-cell","","aria-label","row actions"],["mat-cell",""],["mat-icon-button","","aria-label","expand row",3,"click"],[1,"p-15","rounded","b-1","m-b-16","m-x-18"],[1,"d-flex","align-items-center","gap-12"],[1,"bg-light-primary","text-primary","icon-48","rounded","f-w-600","d-flex","align-items-center","justify-content-center"],[1,"f-s-14","f-w-600"],[1,"f-s-14"],[1,"f-s-14","m-t-8"],["mat-header-row",""],["mat-row","",1,"example-element-row",3,"click"],["mat-row","",1,"example-detail-row"]],template:function(s,r){s&1&&(i(0,"app-code-view",0)(1,"h4",1),a(2," Table with expandable rows "),i(3,"span",2),a(4,"expandable rows here"),l()(),i(5,"div",3)(6,"div",4)(7,"table",5),ue(8,ca,3,2,"ng-container",6,ce),u(10,7),c(11,ua,2,0,"th",8)(12,ha,4,2,"td",9),f(),u(13,10),c(14,Ca,13,6,"td",9),f(),c(15,ba,1,0,"tr",11)(16,_a,1,2,"tr",12)(17,Ta,1,0,"tr",13),l()()(),i(18,"div",14)(19,"pre"),a(20,"      "),d(21,"code",15),a(22,`
    `),l()(),i(23,"div",16)(24,"pre"),a(25,"      "),d(26,"code",17),a(27,`
    `),l()()()),s&2&&(m("isTitle",!0),o(7),m("dataSource",r.dataSource),o(),fe(r.columnsToDisplay),o(7),m("matHeaderRowDef",r.columnsToDisplayWithExpand),o(),m("matRowDefColumns",r.columnsToDisplayWithExpand),o(),m("matRowDefColumns",te(7,sa)),o(4),m("highlight",r.codeForExpandTable),o(5),m("highlightAuto",r.codeForExpandTableTs))},dependencies:[y,N,x,S,A,D,M,P,v,E,H,R,ye,we,Ce,qe,B,k,F,j,L,I,$],styles:["table[_ngcontent-%COMP%]{width:100%}tr.example-detail-row[_ngcontent-%COMP%]{height:0}.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}"],data:{animation:[it("detailExpand",[He("collapsed",Pe({height:"0px",minHeight:"0"})),He("expanded",Pe({height:"*"})),nt("expanded <=> collapsed",at("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}})}}return e})();var xt=`  <div class="table-responsive">
      <table mat-table [dataSource]="transactions" class="w-100">
        <!-- Item Column -->
        <ng-container matColumnDef="item">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16 p-l-0">
            Item
          </th>
          <td mat-cell *matCellDef="let transaction" class="p-l-0">
            <div class="d-flex align-items-center gap-12">
              <img [src]="transaction.img" alt="product" width="45" class="rounded" />
              <span class="f-s-16 f-w-600">{{ transaction.item }} </span>
            </div>
          </td>
          <td mat-footer-cell *matFooterCellDef class="p-l-0 f-w-600">Total</td>
        </ng-container>

        <!-- Cost Column -->
        <ng-container matColumnDef="cost">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16">
            Cost
          </th>
          <td mat-cell *matCellDef="let transaction">
            {{ transaction.cost | currency }}
          </td>
          <td mat-footer-cell *matFooterCellDef>
            {{ getTotalCost() | currency }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        <tr mat-footer-row *matFooterRowDef="displayedColumns"></tr>
      </table>
    </div>
`;var Mt=`  import { Component, OnInit } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { MatTableModule } from '@angular/material/table';
    import { MatCardModule } from '@angular/material/card';
    import { MatDividerModule } from '@angular/material/divider';


    export interface Transaction {
      item: string;
      img: string;
      cost: number;
    }

    const ELEMENT_DATA: productsData[] = [
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
    ];

    /**
     * @title expand table */
     */
    @Component({
    selector: 'app-footer-row-table',
      imports: [MatTableModule, MatCardModule, CommonModule, MatDividerModule,
        Highlight,
        HighlightAuto,
        HighlightLineNumbers,
        AppCodeViewComponent,
      ],
      templateUrl: './footer-row-table.component.html',
      styleUrls: ['./footer-row-table.component.scss'],
    })
    export class AppFooterRowTableComponent {

      displayedColumns: string[] = ['item', 'cost'];
        transactions: Transaction[] = [
          { img: '/assets/images/products/s1.jpg', item: 'Beach ball', cost: 4 },
          { img: '/assets/images/products/s2.jpg', item: 'Towel', cost: 5 },
          { img: '/assets/images/products/s3.jpg', item: 'Frisbee', cost: 2 },
          { img: '/assets/images/products/s4.jpg', item: 'Sunscreen', cost: 4 },
          { img: '/assets/images/products/s5.jpg', item: 'Cooler', cost: 25 },
          { img: '/assets/images/products/s6.jpg', item: 'Swim suit', cost: 15 },
        ];
      
        /** Gets the total cost of all transactions. */
        getTotalCost() {
          return this.transactions
            .map((t) => t.cost)
            .reduce((acc, value) => acc + value, 0);
        }

    }
`;function ya(e,n){e&1&&(i(0,"th",21),a(1," Item "),l())}function xa(e,n){if(e&1&&(i(0,"td",22)(1,"div",23),d(2,"img",24),i(3,"span",25),a(4),l()()()),e&2){let t=n.$implicit;o(2),m("src",t.img,O),o(2),p("",t.item," ")}}function Ma(e,n){e&1&&(i(0,"td",26),a(1,"Total"),l())}function Sa(e,n){e&1&&(i(0,"th",27),a(1," Cost "),l())}function Da(e,n){if(e&1&&(i(0,"td",28),a(1),h(2,"currency"),l()),e&2){let t=n.$implicit;o(),p(" ",C(2,1,t.cost)," ")}}function va(e,n){if(e&1&&(i(0,"td",29),a(1),h(2,"currency"),l()),e&2){let t=g();o(),p(" ",C(2,1,t.getTotalCost())," ")}}function Ea(e,n){e&1&&d(0,"tr",30)}function Aa(e,n){e&1&&d(0,"tr",31)}function Pa(e,n){e&1&&d(0,"tr",32)}var St=(()=>{class e{getTotalCost(){return this.transactions.map(t=>t.cost).reduce((t,s)=>t+s,0)}constructor(){this.codeForFooterRowTable=xt,this.codeForFooterRowTableTs=Mt,this.displayedColumns=["item","cost"],this.transactions=[{img:"/assets/images/products/s1.jpg",item:"Beach ball",cost:4},{img:"/assets/images/products/s2.jpg",item:"Towel",cost:5},{img:"/assets/images/products/s3.jpg",item:"Frisbee",cost:2},{img:"/assets/images/products/s4.jpg",item:"Sunscreen",cost:4},{img:"/assets/images/products/s5.jpg",item:"Cooler",cost:25},{img:"/assets/images/products/s6.jpg",item:"Swim suit",cost:15}]}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-footer-row-table"]],decls:29,vars:7,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","item"],["mat-header-cell","","class","f-w-600  f-s-16 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["mat-footer-cell","","class","p-l-0 f-w-600",4,"matFooterCellDef"],["matColumnDef","cost"],["mat-header-cell","","class","f-w-600  f-s-16",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"f-w-600","f-s-16","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center","gap-12"],["alt","product","width","45",1,"rounded",3,"src"],[1,"f-s-16","f-w-600"],["mat-footer-cell","",1,"p-l-0","f-w-600"],["mat-header-cell","",1,"f-w-600","f-s-16"],["mat-cell",""],["mat-footer-cell",""],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(s,r){s&1&&(i(0,"app-code-view",0)(1,"h4",1),a(2," Footer Row table "),i(3,"span",2),a(4,"total is avail at footer"),l()(),i(5,"div",3)(6,"div",4)(7,"table",5),u(8,6),c(9,ya,2,0,"th",7)(10,xa,5,2,"td",8)(11,Ma,2,0,"td",9),f(),u(12,10),c(13,Sa,2,0,"th",11)(14,Da,3,3,"td",12)(15,va,3,3,"td",13),f(),c(16,Ea,1,0,"tr",14)(17,Aa,1,0,"tr",15)(18,Pa,1,0,"tr",16),l()()(),i(19,"div",17)(20,"pre"),a(21,"      "),d(22,"code",18),a(23,`
    `),l()(),i(24,"div",19)(25,"pre"),a(26,"      "),d(27,"code",20),a(28,`
    `),l()()()),s&2&&(m("isTitle",!0),o(7),m("dataSource",r.transactions),o(9),m("matHeaderRowDef",r.displayedColumns),o(),m("matRowDefColumns",r.displayedColumns),o(),m("matFooterRowDef",r.displayedColumns),o(4),m("highlight",r.codeForFooterRowTable),o(5),m("highlightAuto",r.codeForFooterRowTableTs))},dependencies:[N,x,S,A,D,M,P,me,pe,v,E,se,H,R,de,y,B,k,F,j,L,I,oe],styles:["tr.mat-footer-row[_ngcontent-%COMP%]{font-weight:700}"]})}}return e})();var Dt=`  <div class="example-container">
      @if(isLoadingResults || isRateLimitReached) {
      <div class="example-loading-shade">
        @if(isLoadingResults) {
        <mat-spinner></mat-spinner>
        } @if(isRateLimitReached) {
        <div class="example-rate-limit-reached">
          GitHub's API rate limit has been reached. It will be reset in one
          minute.
        </div>
        }
      </div>
      }

      <div class="example-table-container responsive-table">
        <table mat-table [dataSource]="data" class="example-table" matSort matSortActive="created" matSortDisableClear
          matSortDirection="desc">
          <!-- Number Column -->
          <ng-container matColumnDef="number">
            <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16">
              #
            </th>
            <td mat-cell *matCellDef="let row">{{ row.number }}</td>
          </ng-container>

          <!-- Title Column -->
          <ng-container matColumnDef="title">
            <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16">
              Title
            </th>
            <td mat-cell *matCellDef="let row">
              {{ row.title.slice(0, 50) }}...
            </td>
          </ng-container>

          <!-- State Column -->
          <ng-container matColumnDef="state">
            <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16">
              State
            </th>
            <td mat-cell *matCellDef="let row">
              <span class="bg-light-primary text-primary rounded-pill p-x-8 p-y-4 f-s-12 f-w-500">
                {{ row.state }}
              </span>
            </td>
          </ng-container>

          <!-- Created Column -->
          <ng-container matColumnDef="created">
            <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear
              class="f-w-600  f-s-16 p-l-0">
              Created
            </th>
            <td mat-cell *matCellDef="let row" class="p-l-0">
              <div class="d-flex align-items-center gap-8">
                <i-tabler name="calendar-event" class="icon-18"></i-tabler>{{ row.created_at | date }}
              </div>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>
      </div>

      <mat-paginator [length]="resultsLength" [pageSize]="30"></mat-paginator>
    </div>
`;var vt=`  import { HttpClient } from '@angular/common/http';
    import { Component, ViewChild } from '@angular/core';
    import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
    import { MatSort, MatSortModule } from '@angular/material/sort';
    import { merge, Observable, of as observableOf } from 'rxjs';
    import { catchError, map, startWith, switchMap } from 'rxjs/operators';
    import { CommonModule } from '@angular/common';
    import { TablerIconsModule } from 'angular-tabler-icons';
    import { MatTableModule } from '@angular/material/table';
    import { MatCardModule } from '@angular/material/card';
    import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
    import { MatDividerModule } from '@angular/material/divider';


    export interface GithubApi {
      items: GithubIssue[];
      total_count: number;
    }
    
    export interface GithubIssue {
      created_at: string;
      number: string;
      state: string;
      title: string;
    }
    
    /** An example database that the data source uses to retrieve data for the table. */
    export class ExampleHttpDatabase {
      // tslint:disable-next-line - Disables all
      constructor(private _httpClient: HttpClient) {}
    
      getRepoIssues(
        sort: string,
        order: string,
        page: number
      ): Observable<GithubApi> {
        const href = 'https://api.github.com/search/issues';
        const requestUrl = {href}?q=repo:angular/components&sort={sort}&order={order}&page={
          page + 1
        };
    
        return this._httpClient.get<GithubApi>(requestUrl);
      }
    }

    /**
     * @title expand table */
     */
    @Component({
    selector: 'app-footer-row-table',
      selector: 'app-http-table',
        imports: [
          MatTableModule,
          MatCardModule,
          MatPaginatorModule,
          MatProgressSpinnerModule,
          CommonModule,
          TablerIconsModule,
          MatSortModule,
          MatDividerModule,
        ],
        templateUrl: './http-table.component.html',
        styleUrls: ['./http-table.component.scss'],
    })
    export class AppHttpTableComponent {

      displayedColumns: string[] = ['created', 'state', 'number', 'title'];
        exampleDatabase: ExampleHttpDatabase | null = null;
        data: GithubIssue[] = [];
      
        resultsLength = 0;
        isLoadingResults = true;
        isRateLimitReached = false;
      
        @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null);
        @ViewChild(MatSort) sort: MatSort = Object.create(null);
        // tslint:disable-next-line - Disables all
        constructor(private _httpClient: HttpClient) {}
      
        ngAfterViewInit(): void {
          this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
      
          // If the user changes the sort order, reset back to the first page.
          this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
      
          merge(this.sort.sortChange, this.paginator.page)
            .pipe(
              startWith({}),
              switchMap(() => {
                this.isLoadingResults = true;
                // tslint:disable-next-line - Disables all
                return this.exampleDatabase!.getRepoIssues(
                  this.sort.active,
                  this.sort.direction,
                  this.paginator.pageIndex
                );
              }),
              map((data) => {
                // Flip flag to show that loading has finished.
                this.isLoadingResults = false;
                this.isRateLimitReached = false;
                this.resultsLength = data.total_count;
      
                return data.items;
              }),
              catchError(() => {
                this.isLoadingResults = false;
                // Catch if the GitHub API has reached its rate limit. Return empty data.
                this.isRateLimitReached = true;
                return observableOf([]);
              })
            )
            .subscribe((data) => (this.data = data));
        }

    }
`;function Ra(e,n){e&1&&d(0,"mat-spinner")}function Na(e,n){e&1&&(i(0,"div",23),a(1," GitHub's API rate limit has been reached. It will be reset in one minute. "),l())}function Ia(e,n){if(e&1&&(i(0,"div",5),b(1,Ra,1,0,"mat-spinner"),b(2,Na,2,0,"div",23),l()),e&2){let t=g();o(),_(t.isLoadingResults?1:-1),o(),_(t.isRateLimitReached?2:-1)}}function Fa(e,n){e&1&&(i(0,"th",24),a(1," # "),l())}function ja(e,n){if(e&1&&(i(0,"td",25),a(1),l()),e&2){let t=n.$implicit;o(),J(t.number)}}function La(e,n){e&1&&(i(0,"th",24),a(1," Title "),l())}function Ba(e,n){if(e&1&&(i(0,"td",25),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.title.slice(0,50),"... ")}}function ka(e,n){e&1&&(i(0,"th",24),a(1," State "),l())}function Oa(e,n){if(e&1&&(i(0,"td",25)(1,"span",26),a(2),l()()),e&2){let t=n.$implicit;o(2),p(" ",t.state," ")}}function $a(e,n){e&1&&(i(0,"th",27),a(1," Created "),l())}function Va(e,n){if(e&1&&(i(0,"td",28)(1,"div",29),d(2,"i-tabler",30),a(3),h(4,"date"),l()()),e&2){let t=n.$implicit;o(3),p("",C(4,1,t.created_at)," ")}}function Ja(e,n){e&1&&d(0,"tr",31)}function Wa(e,n){e&1&&d(0,"tr",32)}var At=(()=>{class e{constructor(t){this._httpClient=t,this.codeForHttpRowTable=Dt,this.codeForHttpRowTableTs=vt,this.displayedColumns=["created","state","number","title"],this.exampleDatabase=null,this.data=[],this.resultsLength=0,this.isLoadingResults=!0,this.isRateLimitReached=!1,this.paginator=Object.create(null),this.sort=Object.create(null)}ngAfterViewInit(){this.exampleDatabase=new Re(this._httpClient),this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),Fe(this.sort.sortChange,this.paginator.page).pipe(Le({}),Be(()=>(this.isLoadingResults=!0,this.exampleDatabase.getRepoIssues(this.sort.active,this.sort.direction,this.paginator.pageIndex))),Ie(t=>(this.isLoadingResults=!1,this.isRateLimitReached=!1,this.resultsLength=t.total_count,t.items)),je(()=>(this.isLoadingResults=!1,this.isRateLimitReached=!0,Ne([])))).subscribe(t=>this.data=t)}static{this.\u0275fac=function(s){return new(s||e)(ae(ze))}}static{this.\u0275cmp=w({type:e,selectors:[["app-http-table"]],viewQuery:function(s,r){if(s&1&&ne(G,5)(ee,5),s&2){let T;X(T=Z())&&(r.paginator=T.first),X(T=Z())&&(r.sort=T.first)}},decls:35,vars:9,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"example-container"],[1,"example-loading-shade"],[1,"example-table-container","responsive-table"],["mat-table","","matSort","","matSortActive","created","matSortDisableClear","","matSortDirection","desc",1,"example-table",3,"dataSource"],["matColumnDef","number"],["mat-header-cell","","class","f-w-600  f-s-16",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","state"],["matColumnDef","created"],["mat-header-cell","","mat-sort-header","","disableClear","","class","f-w-600  f-s-16 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"example-rate-limit-reached"],["mat-header-cell","",1,"f-w-600","f-s-16"],["mat-cell",""],[1,"bg-light-primary","text-primary","rounded-pill","p-x-8","p-y-4","f-s-12","f-w-500"],["mat-header-cell","","mat-sort-header","","disableClear","",1,"f-w-600","f-s-16","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center","gap-8"],["name","calendar-event",1,"icon-18"],["mat-header-row",""],["mat-row",""]],template:function(s,r){s&1&&(i(0,"app-code-view",0)(1,"h4",1),a(2," HTTP table "),i(3,"span",2),a(4,"get data with http"),l()(),i(5,"div",3)(6,"div",4),b(7,Ia,3,2,"div",5),i(8,"div",6)(9,"table",7),u(10,8),c(11,Fa,2,0,"th",9)(12,ja,2,1,"td",10),f(),u(13,11),c(14,La,2,0,"th",9)(15,Ba,2,1,"td",10),f(),u(16,12),c(17,ka,2,0,"th",9)(18,Oa,3,1,"td",10),f(),u(19,13),c(20,$a,2,0,"th",14)(21,Va,5,3,"td",15),f(),c(22,Ja,1,0,"tr",16)(23,Wa,1,0,"tr",17),l()(),d(24,"mat-paginator",18),l()(),i(25,"div",19)(26,"pre"),a(27,"      "),d(28,"code",20),a(29,`
    `),l()(),i(30,"div",21)(31,"pre"),a(32,"      "),d(33,"code",22),a(34,`
    `),l()()()),s&2&&(m("isTitle",!0),o(7),_(r.isLoadingResults||r.isRateLimitReached?7:-1),o(2),m("dataSource",r.data),o(13),m("matHeaderRowDef",r.displayedColumns),o(),m("matRowDefColumns",r.displayedColumns),o(),m("length",r.resultsLength)("pageSize",30),o(4),m("highlight",r.codeForHttpRowTable),o(5),m("highlightAuto",r.codeForHttpRowTableTs))},dependencies:[N,x,S,A,D,M,P,v,E,H,R,y,re,G,et,Ze,B,lt,ot,Me,ee,xe,k,F,j,L,I,Ue],styles:[".example-container[_ngcontent-%COMP%]{position:relative;min-height:200px}.example-table-container[_ngcontent-%COMP%]{position:relative;max-height:400px;overflow:auto}.example-loading-shade[_ngcontent-%COMP%]{position:absolute;inset:0 0 56px;background:#00000026;z-index:1;display:flex;align-items:center;justify-content:center}.example-rate-limit-reached[_ngcontent-%COMP%]{color:#980000;max-width:360px;text-align:center}.mat-column-number[_ngcontent-%COMP%], .mat-column-state[_ngcontent-%COMP%]{max-width:64px}.mat-column-created[_ngcontent-%COMP%]{max-width:124px}"]})}}return e})(),Re=class{constructor(n){this._httpClient=n}getRepoIssues(n,t,s){let T=`https://api.github.com/search/issues?q=repo:angular/components&sort=${n}&order=${t}&page=${s+1}`;return this._httpClient.get(T)}};var Pt=`  <div class="table-responsive m-t-30">
      <mat-table [dataSource]="dataSource" matSort>
        <!-- ID Column -->
        <ng-container matColumnDef="id">
          <mat-header-cell *matHeaderCellDef mat-sort-header class="f-w-600  f-s-16 p-l-0">
            ID
          </mat-header-cell>
          <mat-cell *matCellDef="let row" class="p-l-0">
            {{ row.id }}
          </mat-cell>
        </ng-container>

        <!-- Progress Column -->
        <ng-container matColumnDef="progress">
          <mat-header-cell *matHeaderCellDef mat-sort-header class="f-w-600  f-s-16">
            Progress
          </mat-header-cell>
          <mat-cell *matCellDef="let row"> {{ row.progress }}% </mat-cell>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef mat-sort-header class="f-w-600  f-s-16">
            Name
          </mat-header-cell>
          <mat-cell *matCellDef="let row">
            <div class="d-flex align-items-center gap-12 p-y-16">
              <img src="/assets/images/profile/user-1.jpg" alt="profile" class="rounded-circle" width="40" />
              <span class="f-s-16 f-w-600">{{ row.name }}</span>
            </div>
          </mat-cell>
        </ng-container>

        <!-- Color Column -->
        <ng-container matColumnDef="color">
          <mat-header-cell *matHeaderCellDef mat-sort-header class="f-w-600  f-s-16">
            Color
          </mat-header-cell>
          <mat-cell *matCellDef="let row" [style.color]="row.color">
            {{ row.color }}
          </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"> </mat-row>
      </mat-table>

      <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
    </div>
`;var Ht=`  import { Component, ViewChild } from '@angular/core';
    import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
    import { MatSort } from '@angular/material/sort';
    import { MatTableDataSource, MatTableModule } from '@angular/material/table';
    import { BreakpointObserver } from '@angular/cdk/layout';
    import { MatCardModule } from '@angular/material/card';
    import { MatFormFieldModule } from '@angular/material/form-field';
    import { MatInputModule } from '@angular/material/input';


    /** Constants used to fill up our data base. */
    const COLORS = [
      'maroon',
      'red',
      'orange',
      'yellow',
      'olive',
      'green',
      'purple',
      'fuchsia',
      'lime',
      'teal',
      'aqua',
      'blue',
      'navy',
      'black',
      'gray',
    ];

    const NAMES = [
      'Maia',
      'Asher',
      'Olivia',
      'Atticus',
      'Amelia',
      'Jack',
      'Charlotte',
      'Theodore',
      'Isla',
      'Oliver',
      'Isabella',
      'Jasper',
      'Cora',
      'Levi',
      'Violet',
      'Arthur',
      'Mia',
      'Thomas',
      'Elizabeth',
    ];

    export interface UserData {
      id: string;
      name: string;
      progress: string;
      color: string;
    }

    /**
     * @title mix table */
     */
    @Component({
      selector: 'app-mix-table',
        imports: [MatTableModule, MatCardModule, MatPaginatorModule, MatFormFieldModule, MatInputModule],
      templateUrl: './mix-table.component.html'
    })
    export class AppMixTableComponent {

      displayedColumns = ['id', 'name', 'progress', 'color'];
        dataSource: MatTableDataSource<UserData>;
      
        @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
          Object.create(null);
        @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
      
        constructor(breakpointObserver: BreakpointObserver) {
          breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
            this.displayedColumns = result.matches
              ? ['id', 'name', 'progress', 'color']
              : ['id', 'name', 'progress', 'color'];
          });
      
          // Create 100 users
          const users: UserData[] = [];
          for (let i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
          }
      
          // Assign the data to the data source for the table to render
          this.dataSource = new MatTableDataSource(users);
        }
      
        /**
         * Set the paginator and sort after the view init since this component will
         * be able to query its view for the initialized paginator and sort.
         */
        ngAfterViewInit(): void {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      
        applyFilter(event: Event) {
          const filterValue = (event.target as HTMLInputElement).value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }

    }

    /** Builds and returns a new User. */
    function createNewUser(id: number): UserData {
      const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';
      // tslint:disable-next-line - Disables all
      return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
      };
    }
`;var Ya=()=>[5,10,25,100];function Ga(e,n){e&1&&(i(0,"mat-header-cell",24),a(1," ID "),l())}function Qa(e,n){if(e&1&&(i(0,"mat-cell",25),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.id," ")}}function qa(e,n){e&1&&(i(0,"mat-header-cell",26),a(1," Progress "),l())}function Ka(e,n){if(e&1&&(i(0,"mat-cell"),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.progress,"% ")}}function Xa(e,n){e&1&&(i(0,"mat-header-cell",26),a(1," Name "),l())}function Za(e,n){if(e&1&&(i(0,"mat-cell")(1,"div",27),d(2,"img",28),i(3,"span",29),a(4),l()()()),e&2){let t=n.$implicit;o(4),J(t.name)}}function en(e,n){e&1&&(i(0,"mat-header-cell",26),a(1," Color "),l())}function tn(e,n){if(e&1&&(i(0,"mat-cell"),a(1),l()),e&2){let t=n.$implicit;Ve("color",t.color),o(),p(" ",t.color," ")}}function an(e,n){e&1&&d(0,"mat-header-row")}function nn(e,n){e&1&&d(0,"mat-row")}var Rt=["maroon","red","orange","yellow","olive","green","purple","fuchsia","lime","teal","aqua","blue","navy","black","gray"],Se=["Maia","Asher","Olivia","Atticus","Amelia","Jack","Charlotte","Theodore","Isla","Oliver","Isabella","Jasper","Cora","Levi","Violet","Arthur","Mia","Thomas","Elizabeth"],Nt=(()=>{class e{constructor(t){this.codeForMixTable=Pt,this.codeForMixTableTs=Ht,this.displayedColumns=["id","name","progress","color"],this.paginator=Object.create(null),this.sort=Object.create(null),t.observe(["(max-width: 600px)"]).subscribe(r=>{this.displayedColumns=r.matches?["id","name","progress","color"]:["id","name","progress","color"]});let s=[];for(let r=1;r<=100;r++)s.push(on(r));this.dataSource=new Q(s)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(t){let s=t.target.value;this.dataSource.filter=s.trim().toLowerCase()}static{this.\u0275fac=function(s){return new(s||e)(ae(le))}}static{this.\u0275cmp=w({type:e,selectors:[["app-mix-table"]],viewQuery:function(s,r){if(s&1&&ne(G,7)(ee,7),s&2){let T;X(T=Z())&&(r.paginator=T.first),X(T=Z())&&(r.sort=T.first)}},decls:37,vars:8,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],["appearance","outline",1,"w-100","hide-hint","m-t-16"],["matInput","","placeholder","Filter",3,"keyup"],[1,"table-responsive","m-t-30"],["matSort","",3,"dataSource"],["matColumnDef","id"],["mat-sort-header","","class","f-w-600  f-s-16 p-l-0",4,"matHeaderCellDef"],["class","p-l-0",4,"matCellDef"],["matColumnDef","progress"],["mat-sort-header","","class","f-w-600  f-s-16",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","color"],[3,"color",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-sort-header","",1,"f-w-600","f-s-16","p-l-0"],[1,"p-l-0"],["mat-sort-header","",1,"f-w-600","f-s-16"],[1,"d-flex","align-items-center","gap-12","p-y-16"],["src","/assets/images/profile/user-1.jpg","alt","profile","width","40",1,"rounded-circle"],[1,"f-s-16","f-w-600"]],template:function(s,r){s&1&&(i(0,"app-code-view",0)(1,"h4",1),a(2," Data table with sorting, pagination, and filtering "),i(3,"span",2),a(4,"all functionality is in one table"),l()(),i(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),a(8,"Search Here"),l(),i(9,"input",5),V("keyup",function(ie){return r.applyFilter(ie)}),l()(),i(10,"div",6)(11,"mat-table",7),u(12,8),c(13,Ga,2,0,"mat-header-cell",9)(14,Qa,2,1,"mat-cell",10),f(),u(15,11),c(16,qa,2,0,"mat-header-cell",12)(17,Ka,2,1,"mat-cell",13),f(),u(18,14),c(19,Xa,2,0,"mat-header-cell",12)(20,Za,5,1,"mat-cell",13),f(),u(21,15),c(22,en,2,0,"mat-header-cell",12)(23,tn,2,3,"mat-cell",16),f(),c(24,an,1,0,"mat-header-row",17)(25,nn,1,0,"mat-row",18),l(),d(26,"mat-paginator",19),l()(),i(27,"div",20)(28,"pre"),a(29,"      "),d(30,"code",21),a(31,`
    `),l()(),i(32,"div",22)(33,"pre"),a(34,"      "),d(35,"code",23),a(36,`
    `),l()()()),s&2&&(m("isTitle",!0),o(11),m("dataSource",r.dataSource),o(13),m("matHeaderRowDef",r.displayedColumns),o(),m("matRowDefColumns",r.displayedColumns),o(),m("pageSizeOptions",te(7,Ya)),o(4),m("highlight",r.codeForMixTable),o(5),m("highlightAuto",r.codeForMixTableTs))},dependencies:[N,x,S,A,D,M,P,v,E,H,R,y,re,G,be,he,ge,Te,_e,F,j,L,I],encapsulation:2})}}return e})();function on(e){let n=Se[Math.round(Math.random()*(Se.length-1))]+" "+Se[Math.round(Math.random()*(Se.length-1))].charAt(0)+".";return{id:e.toString(),name:n,progress:Math.round(Math.random()*100).toString(),color:Rt[Math.round(Math.random()*(Rt.length-1))]}}var It=`  <div class="table-responsive">
      <table mat-table [dataSource]="transactions" class="w-100">
        <!-- Item Column -->
        <ng-container matColumnDef="item">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16">
            Item
          </th>
          <td mat-cell *matCellDef="let transaction">
            <div class="d-flex align-items-center gap-12">
              <img [src]="transaction.img" alt="product" width="45" class="rounded" />
              <span class="f-s-16 f-w-600">{{ transaction.item }} </span>
            </div>
          </td>
          <td mat-footer-cell *matFooterCellDef class="f-w-600  f-s-16">
            Total
          </td>
        </ng-container>

        <!-- Cost Column -->
        <ng-container matColumnDef="cost">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16">
            Cost
          </th>
          <td mat-cell *matCellDef="let transaction">
            {{ transaction.cost | currency }}
          </td>
          <td mat-footer-cell *matFooterCellDef>
            {{ getTotalCost() | currency }}
          </td>
        </ng-container>

        <!-- Item Description Column -->
        <ng-container matColumnDef="item-description">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Name of the item purchased
          </th>
        </ng-container>

        <!-- Cost Description Column -->
        <ng-container matColumnDef="cost-description">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Cost of the item in USD
          </th>
        </ng-container>

        <!-- Disclaimer column -->
        <ng-container matColumnDef="disclaimer">
          <td mat-footer-cell *matFooterCellDef colspan="2" class="text-danger fw-medium">
            Please note that the cost of items displayed are completely and
            totally made up.
          </td>
        </ng-container>

        <!-- The table will render two header rows, one data row per data object, and two footer rows. -->
        <tr mat-header-row *matHeaderRowDef="displayedColumns" class="example-first-header-row"></tr>
        <tr mat-header-row *matHeaderRowDef="['item-description', 'cost-description']"
          class="example-second-header-row"></tr>

        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

        <tr mat-footer-row *matFooterRowDef="displayedColumns" class="example-first-footer-row"></tr>
        <tr mat-footer-row *matFooterRowDef="['disclaimer']" class="example-second-footer-row"></tr>
      </table>
    </div>
`;var Ft=`  import { Component, OnInit } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { MatCardModule } from '@angular/material/card';
    import { MatTableModule } from '@angular/material/table';
    import { MatDividerModule } from '@angular/material/divider';

    export interface Transaction {
      item: string;
      img: string;
      cost: number;
    }

    /**
     * @title multi-header-footer table */
     */
    @Component({
      selector: 'app-multi-header-footer-table',
        imports: [MatCardModule, MatTableModule, CommonModule, MatDividerModule],
        templateUrl: './multi-header-footer-table.component.html',
        styleUrls: ['./multi-header-footer-table.component.scss'],
    })
    export class AppMultiHeaderFooterTableComponent {

      displayedColumns: string[] = ['item', 'cost'];
        transactions: Transaction[] = [
          { img: '/assets/images/products/s1.jpg', item: 'Beach ball', cost: 4 },
          { img: '/assets/images/products/s2.jpg', item: 'Towel', cost: 5 },
          { img: '/assets/images/products/s3.jpg', item: 'Frisbee', cost: 2 },
          { img: '/assets/images/products/s4.jpg', item: 'Sunscreen', cost: 4 },
          { img: '/assets/images/products/s5.jpg', item: 'Cooler', cost: 25 },
          { img: '/assets/images/products/s6.jpg', item: 'Swim suit', cost: 15 },
        ];
      
        /** Gets the total cost of all transactions. */
        getTotalCost(): any {
          return this.transactions
            .map((t) => t.cost)
            .reduce((acc, value) => acc + value, 0);
        }

    }
`;var ln=()=>["item-description","cost-description"],rn=()=>["disclaimer"];function mn(e,n){e&1&&(i(0,"th",26),a(1," Item "),l())}function sn(e,n){if(e&1&&(i(0,"td",27)(1,"div",28),d(2,"img",29),i(3,"span",30),a(4),l()()()),e&2){let t=n.$implicit;o(2),m("src",t.img,O),o(2),p("",t.item," ")}}function pn(e,n){e&1&&(i(0,"td",31),a(1," Total "),l())}function dn(e,n){e&1&&(i(0,"th",26),a(1," Cost "),l())}function cn(e,n){if(e&1&&(i(0,"td",27),a(1),h(2,"currency"),l()),e&2){let t=n.$implicit;o(),p(" ",C(2,1,t.cost)," ")}}function un(e,n){if(e&1&&(i(0,"td",32),a(1),h(2,"currency"),l()),e&2){let t=g();o(),p(" ",C(2,1,t.getTotalCost())," ")}}function fn(e,n){e&1&&(i(0,"th",33),a(1," Name of the item purchased "),l())}function gn(e,n){e&1&&(i(0,"th",33),a(1," Cost of the item in USD "),l())}function hn(e,n){e&1&&(i(0,"td",34),a(1," Please note that the cost of items displayed are completely and totally made up. "),l())}function Cn(e,n){e&1&&d(0,"tr",35)}function bn(e,n){e&1&&d(0,"tr",36)}function _n(e,n){e&1&&d(0,"tr",37)}function Tn(e,n){e&1&&d(0,"tr",38)}function wn(e,n){e&1&&d(0,"tr",39)}var jt=(()=>{class e{getTotalCost(){return this.transactions.map(t=>t.cost).reduce((t,s)=>t+s,0)}constructor(){this.codeForMultiHeaderFooterTable=It,this.codeForMultiHeaderFooterTableTs=Ft,this.displayedColumns=["item","cost"],this.transactions=[{img:"/assets/images/products/s1.jpg",item:"Beach ball",cost:4},{img:"/assets/images/products/s2.jpg",item:"Towel",cost:5},{img:"/assets/images/products/s3.jpg",item:"Frisbee",cost:2},{img:"/assets/images/products/s4.jpg",item:"Sunscreen",cost:4},{img:"/assets/images/products/s5.jpg",item:"Cooler",cost:25},{img:"/assets/images/products/s6.jpg",item:"Swim suit",cost:15}]}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-multi-header-footer-table"]],decls:37,vars:11,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","item"],["mat-header-cell","","class","f-w-600  f-s-16",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","","class","f-w-600  f-s-16",4,"matFooterCellDef"],["matColumnDef","cost"],["mat-footer-cell","",4,"matFooterCellDef"],["matColumnDef","item-description"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["matColumnDef","cost-description"],["matColumnDef","disclaimer"],["mat-footer-cell","","colspan","2","class","text-danger fw-medium",4,"matFooterCellDef"],["mat-header-row","","class","example-first-header-row",4,"matHeaderRowDef"],["mat-header-row","","class","example-second-header-row",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","","class","example-first-footer-row",4,"matFooterRowDef"],["mat-footer-row","","class","example-second-footer-row",4,"matFooterRowDef"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"f-w-600","f-s-16"],["mat-cell",""],[1,"d-flex","align-items-center","gap-12"],["alt","product","width","45",1,"rounded",3,"src"],[1,"f-s-16","f-w-600"],["mat-footer-cell","",1,"f-w-600","f-s-16"],["mat-footer-cell",""],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-footer-cell","","colspan","2",1,"text-danger","fw-medium"],["mat-header-row","",1,"example-first-header-row"],["mat-header-row","",1,"example-second-header-row"],["mat-row",""],["mat-footer-row","",1,"example-first-footer-row"],["mat-footer-row","",1,"example-second-footer-row"]],template:function(s,r){s&1&&(i(0,"app-code-view",0)(1,"h4",1),a(2," Table with multiple header and footer rows "),i(3,"span",2),a(4,"Pagination and search is avail"),l()(),i(5,"div",3)(6,"div",4)(7,"table",5),u(8,6),c(9,mn,2,0,"th",7)(10,sn,5,2,"td",8)(11,pn,2,0,"td",9),f(),u(12,10),c(13,dn,2,0,"th",7)(14,cn,3,3,"td",8)(15,un,3,3,"td",11),f(),u(16,12),c(17,fn,2,0,"th",13),f(),u(18,14),c(19,gn,2,0,"th",13),f(),u(20,15),c(21,hn,2,0,"td",16),f(),c(22,Cn,1,0,"tr",17)(23,bn,1,0,"tr",18)(24,_n,1,0,"tr",19)(25,Tn,1,0,"tr",20)(26,wn,1,0,"tr",21),l()()(),i(27,"div",22)(28,"pre"),a(29,"      "),d(30,"code",23),a(31,`
    `),l()(),i(32,"div",24)(33,"pre"),a(34,"      "),d(35,"code",25),a(36,`
    `),l()()()),s&2&&(m("isTitle",!0),o(7),m("dataSource",r.transactions),o(15),m("matHeaderRowDef",r.displayedColumns),o(),m("matHeaderRowDef",te(9,ln)),o(),m("matRowDefColumns",r.displayedColumns),o(),m("matFooterRowDef",r.displayedColumns),o(),m("matFooterRowDef",te(10,rn)),o(4),m("highlight",r.codeForMultiHeaderFooterTable),o(5),m("highlightAuto",r.codeForMultiHeaderFooterTableTs))},dependencies:[y,N,x,S,A,D,M,P,me,pe,v,E,se,H,R,de,B,k,F,j,L,I,oe],styles:[".example-first-header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:none}.example-second-header-row[_ngcontent-%COMP%]{font-style:italic}.example-first-footer-row[_ngcontent-%COMP%]{font-weight:700}"]})}}return e})();var Lt=`  <div class="table-responsive">
      <mat-table #table [dataSource]="dataSource">
        <!-- Position Column -->
        <ng-container matColumnDef="assigned">
          <mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 p-l-0">
            Assigned
          </mat-header-cell>
          <mat-cell class="p-16 p-l-0" *matCellDef="let element">
            <div class="d-flex align-items-center">
              <img [src]="element.imagePath" alt="users" width="40" class="rounded-circle" />
              <div class="m-l-16">
                <h6 class=" f-s-14 f-w-600">
                  {{ element.uname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.position }}
                </span>
              </div>
            </div>
          </mat-cell>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Name
          </mat-header-cell>
          <mat-cell class="p-16" *matCellDef="let element" class="f-s-14">
            {{ element.productName }}</mat-cell>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="priority">
          <mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Priority
          </mat-header-cell>
          <mat-cell class="p-16" *matCellDef="let element">
            @if(element.priority == 'low') {
            <span class="bg-light-secondary text-secondary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'medium') {
            <span class="bg-light-primary text-primary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'high') {
            <span class="bg-light-warning text-warning rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'critical') {
            <span class="bg-light-error text-error rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'moderate') {
            <span class="bg-light-success text-success rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }
          </mat-cell>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="budget">
          <mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 text-right p-r-0">
            Budget
          </mat-header-cell>
          <mat-cell class="p-16 f-s-14 p-r-0 text-right" *matCellDef="let element">
            {{ element.budget }}k</mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
      </mat-table>

      <mat-paginator #paginator [pageSize]="10" [pageSizeOptions]="[5, 10, 20]">
      </mat-paginator>
    </div>
`;var Bt=`  import { Component, ViewChild } from '@angular/core';
    import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
    import { MatTableDataSource, MatTableModule } from '@angular/material/table';
    import { BreakpointObserver } from '@angular/cdk/layout';
    import { CommonModule } from '@angular/common';
    import { MatCardModule } from '@angular/material/card';
    import { MatDividerModule } from '@angular/material/divider';


    export interface Element {
      id: number;
      imagePath: string;
      uname: string;
      position: string;
      productName: string;
      budget: number;
      priority: string;
    }

    const PRODUCT_DATA: Element[] = [
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
    ];

    /**
     * @title pagination table */
     */
    @Component({
      selector: 'app-pagination-table',
      imports: [
        MatCardModule,
        MatTableModule,
        CommonModule,
        MatPaginatorModule,
        MatDividerModule,
        Highlight,
        HighlightAuto,
        HighlightLineNumbers,
        AppCodeViewComponent,
      ],
      templateUrl: './pagination-table.component.html',
    })
    export class AppPaginationTableComponent {

      displayedColumns = ['assigned', 'name', 'priority', 'budget'];
        dataSource = new MatTableDataSource<Element>(PRODUCT_DATA);
      
        constructor(breakpointObserver: BreakpointObserver) {
          breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
            this.displayedColumns = result.matches
              ? ['assigned', 'name', 'priority', 'budget']
              : ['assigned', 'name', 'priority', 'budget'];
          });
        }
      
        @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
          Object.create(null);
      
        /**
         * Set the paginator after the view init since this component will
         * be able to query its view for the initialized paginator.
         */
        ngAfterViewInit(): void {
          this.dataSource.paginator = this.paginator;
        }
    }
`;var yn=()=>[5,10,20];function xn(e,n){e&1&&(i(0,"mat-header-cell",26),a(1," Assigned "),l())}function Mn(e,n){if(e&1&&(i(0,"mat-cell",27)(1,"div",28),d(2,"img",29),i(3,"div",30)(4,"h6",31),a(5),l(),i(6,"span",32),a(7),l()()()()),e&2){let t=n.$implicit;o(2),m("src",t.imagePath,O),o(3),p(" ",t.uname," "),o(2),p(" ",t.position," ")}}function Sn(e,n){e&1&&(i(0,"mat-header-cell",33),a(1," Name "),l())}function Dn(e,n){if(e&1&&(i(0,"mat-cell",34),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.productName)}}function vn(e,n){e&1&&(i(0,"mat-header-cell",33),a(1," Priority "),l())}function En(e,n){if(e&1&&(i(0,"span",36),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function An(e,n){if(e&1&&(i(0,"span",37),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Pn(e,n){if(e&1&&(i(0,"span",38),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Hn(e,n){if(e&1&&(i(0,"span",39),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Rn(e,n){if(e&1&&(i(0,"span",40),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Nn(e,n){if(e&1&&(i(0,"mat-cell",35),b(1,En,3,3,"span",36),b(2,An,3,3,"span",37),b(3,Pn,3,3,"span",38),b(4,Hn,3,3,"span",39),b(5,Rn,3,3,"span",40),l()),e&2){let t=n.$implicit;o(),_(t.priority=="low"?1:-1),o(),_(t.priority=="medium"?2:-1),o(),_(t.priority=="high"?3:-1),o(),_(t.priority=="critical"?4:-1),o(),_(t.priority=="moderate"?5:-1)}}function In(e,n){e&1&&(i(0,"mat-header-cell",41),a(1," Budget "),l())}function Fn(e,n){if(e&1&&(i(0,"mat-cell",42),a(1),l()),e&2){let t=n.$implicit;o(),p(" $",t.budget,"k")}}function jn(e,n){e&1&&d(0,"mat-header-row")}function Ln(e,n){e&1&&d(0,"mat-row")}var Bn=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"}],kt=(()=>{class e{constructor(t){this.codeForPaginationTable=Lt,this.codeForPaginationTableTs=Bt,this.displayedColumns=["assigned","name","priority","budget"],this.dataSource=new Q(Bn),this.paginator=Object.create(null),t.observe(["(max-width: 600px)"]).subscribe(s=>{this.displayedColumns=s.matches?["assigned","name","priority","budget"]:["assigned","name","priority","budget"]})}ngAfterViewInit(){this.dataSource.paginator=this.paginator}static{this.\u0275fac=function(s){return new(s||e)(ae(le))}}static{this.\u0275cmp=w({type:e,selectors:[["app-pagination-table"]],viewQuery:function(s,r){if(s&1&&ne(G,7),s&2){let T;X(T=Z())&&(r.paginator=T.first)}},decls:35,vars:9,consts:[["table",""],["paginator",""],[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],[3,"dataSource"],["matColumnDef","assigned"],["class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["class","p-16 p-l-0",4,"matCellDef"],["matColumnDef","name"],["class","f-w-600  f-s-14",4,"matHeaderCellDef"],["class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["class","p-16",4,"matCellDef"],["matColumnDef","budget"],["class","f-w-600  f-s-14 text-right p-r-0",4,"matHeaderCellDef"],["class","p-16 f-s-14 p-r-0 text-right",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"f-w-600","f-s-14","p-l-0"],[1,"p-16","p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],[1,"f-w-600","f-s-14"],[1,"f-s-14"],[1,"p-16"],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"f-w-600","f-s-14","text-right","p-r-0"],[1,"p-16","f-s-14","p-r-0","text-right"]],template:function(s,r){s&1&&(i(0,"app-code-view",2)(1,"h4",3),a(2," Pagination Table "),i(3,"span",4),a(4,"get nore item with pagination"),l()(),i(5,"div",5)(6,"div",6)(7,"mat-table",7,0),u(9,8),c(10,xn,2,0,"mat-header-cell",9)(11,Mn,8,3,"mat-cell",10),f(),u(12,11),c(13,Sn,2,0,"mat-header-cell",12)(14,Dn,2,1,"mat-cell",13),f(),u(15,14),c(16,vn,2,0,"mat-header-cell",12)(17,Nn,6,5,"mat-cell",15),f(),u(18,16),c(19,In,2,0,"mat-header-cell",17)(20,Fn,2,1,"mat-cell",18),f(),c(21,jn,1,0,"mat-header-row",19)(22,Ln,1,0,"mat-row",20),l(),d(23,"mat-paginator",21,1),l()(),i(25,"div",22)(26,"pre"),a(27,"      "),d(28,"code",23),a(29,`
    `),l()(),i(30,"div",24)(31,"pre"),a(32,"      "),d(33,"code",25),a(34,`
    `),l()()()),s&2&&(m("isTitle",!0),o(7),m("dataSource",r.dataSource),o(14),m("matHeaderRowDef",r.displayedColumns),o(),m("matRowDefColumns",r.displayedColumns),o(),m("pageSize",10)("pageSizeOptions",te(8,yn)),o(5),m("highlight",r.codeForPaginationTable),o(5),m("highlightAuto",r.codeForPaginationTableTs))},dependencies:[y,N,x,S,A,D,M,P,v,E,H,R,B,re,G,k,F,j,L,I,$],encapsulation:2})}}return e})();var Ot=`  <div class="table-responsive">
      <table mat-table [dataSource]="data" class="w-100">
        <!-- Index Column -->
        <ng-container matColumnDef="$implicit">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 p-l-0">
            $implicit
          </th>
          <td mat-cell *matCellDef="let data" class="p-l-0">{{ data }}</td>
        </ng-container>

        <!-- Index Column -->
        <ng-container matColumnDef="index">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            index
          </th>
          <td mat-cell *matCellDef="let index = index">{{ index }}</td>
        </ng-container>

        <!-- Index Column -->
        <ng-container matColumnDef="count">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            count
          </th>
          <td mat-cell *matCellDef="let count = count">{{ count }}</td>
        </ng-container>

        <!-- Index Column -->
        <ng-container matColumnDef="first">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            first
          </th>
          <td mat-cell *matCellDef="let first = first">{{ first }}</td>
        </ng-container>

        <!-- Index Column -->
        <ng-container matColumnDef="last">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            last
          </th>
          <td mat-cell *matCellDef="let last = last">{{ last }}</td>
        </ng-container>

        <!-- Index Column -->
        <ng-container matColumnDef="even">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            even
          </th>
          <td mat-cell *matCellDef="let even = even">{{ even }}</td>
        </ng-container>

        <!-- Index Column -->
        <ng-container matColumnDef="odd">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            odd
          </th>
          <td mat-cell *matCellDef="let odd = odd">{{ odd }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
`;var $t=`  import { Component, OnInit } from '@angular/core';
    import { MatCardModule } from '@angular/material/card';
    import { MatDividerModule } from '@angular/material/divider';
    import { MatTableModule } from '@angular/material/table';


    /**
     * @title Row Context table */
     */
    @Component({
      selector: 'app-row-context-table',
      imports: [MatCardModule, MatTableModule, MatDividerModule],
      templateUrl: './row-context-table.component.html',
    })
    export class AppRowContextTableComponent {

      displayedColumns: string[] = [
        '$implicit',
        'index',
        'count',
        'first',
        'last',
        'even',
        'odd',
      ];
      data: string[] = ['one', 'two', 'three', 'four', 'five'];
    }
`;function kn(e,n){e&1&&(i(0,"th",23),a(1," $implicit "),l())}function On(e,n){if(e&1&&(i(0,"td",24),a(1),l()),e&2){let t=n.$implicit;o(),J(t)}}function $n(e,n){e&1&&(i(0,"th",25),a(1," index "),l())}function Vn(e,n){if(e&1&&(i(0,"td",26),a(1),l()),e&2){let t=n.index;o(),J(t)}}function Jn(e,n){e&1&&(i(0,"th",25),a(1," count "),l())}function Wn(e,n){if(e&1&&(i(0,"td",26),a(1),l()),e&2){let t=n.count;o(),J(t)}}function Un(e,n){e&1&&(i(0,"th",25),a(1," first "),l())}function zn(e,n){if(e&1&&(i(0,"td",26),a(1),l()),e&2){let t=n.first;o(),J(t)}}function Yn(e,n){e&1&&(i(0,"th",25),a(1," last "),l())}function Gn(e,n){if(e&1&&(i(0,"td",26),a(1),l()),e&2){let t=n.last;o(),J(t)}}function Qn(e,n){e&1&&(i(0,"th",25),a(1," even "),l())}function qn(e,n){if(e&1&&(i(0,"td",26),a(1),l()),e&2){let t=n.even;o(),J(t)}}function Kn(e,n){e&1&&(i(0,"th",25),a(1," odd "),l())}function Xn(e,n){if(e&1&&(i(0,"td",26),a(1),l()),e&2){let t=n.odd;o(),J(t)}}function Zn(e,n){e&1&&d(0,"tr",27)}function eo(e,n){e&1&&d(0,"tr",28)}var Vt=(()=>{class e{constructor(){this.codeForRowContextTable=Ot,this.codeForRowContextTableTs=$t,this.displayedColumns=["$implicit","index","count","first","last","even","odd"],this.data=["one","two","three","four","five"]}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-row-context-table"]],decls:41,vars:6,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","$implicit"],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["matColumnDef","index"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","count"],["matColumnDef","first"],["matColumnDef","last"],["matColumnDef","even"],["matColumnDef","odd"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],["mat-cell","",1,"p-l-0"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(s,r){s&1&&(i(0,"app-code-view",0)(1,"h4",1),a(2," Row context table "),i(3,"span",2),a(4,"Sell new products"),l()(),i(5,"div",3)(6,"div",4)(7,"table",5),u(8,6),c(9,kn,2,0,"th",7)(10,On,2,1,"td",8),f(),u(11,9),c(12,$n,2,0,"th",10)(13,Vn,2,1,"td",11),f(),u(14,12),c(15,Jn,2,0,"th",10)(16,Wn,2,1,"td",11),f(),u(17,13),c(18,Un,2,0,"th",10)(19,zn,2,1,"td",11),f(),u(20,14),c(21,Yn,2,0,"th",10)(22,Gn,2,1,"td",11),f(),u(23,15),c(24,Qn,2,0,"th",10)(25,qn,2,1,"td",11),f(),u(26,16),c(27,Kn,2,0,"th",10)(28,Xn,2,1,"td",11),f(),c(29,Zn,1,0,"tr",17)(30,eo,1,0,"tr",18),l()()(),i(31,"div",19)(32,"pre"),a(33,"      "),d(34,"code",20),a(35,`
    `),l()(),i(36,"div",21)(37,"pre"),a(38,"      "),d(39,"code",22),a(40,`
    `),l()()()),s&2&&(m("isTitle",!0),o(7),m("dataSource",r.data),o(22),m("matHeaderRowDef",r.displayedColumns),o(),m("matRowDefColumns",r.displayedColumns),o(4),m("highlight",r.codeForRowContextTable),o(5),m("highlightAuto",r.codeForRowContextTableTs))},dependencies:[y,N,x,S,A,D,M,P,v,E,H,R,k,F,j,L,I],encapsulation:2})}}return e})();var Jt=`  <div class="table-responsive">
      <table mat-table [dataSource]="dataSource" class="w-100">
        <!-- Checkbox Column -->
        <ng-container matColumnDef="select">
          <th mat-header-cell *matHeaderCellDef class="p-l-0">
            <mat-checkbox (change)="$event ? masterToggle() : null" [checked]="selection.hasValue() && isAllSelected()"
              color="primary" [indeterminate]="selection.hasValue() && !isAllSelected()" [aria-label]="checkboxLabel()">
            </mat-checkbox>
          </th>
          <td mat-cell *matCellDef="let row" class="p-l-0">
            <mat-checkbox (click)="$event.stopPropagation()" (change)="$event ? selection.toggle(row) : null"
              color="primary" [checked]="selection.isSelected(row)" [aria-label]="checkboxLabel(row)">
            </mat-checkbox>
          </td>
        </ng-container>

        <!-- Position Column -->
        <ng-container matColumnDef="assigned">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Assigned
          </th>
          <td mat-cell *matCellDef="let element">
            <div class="d-flex align-items-center">
              <img [src]="element.imagePath" alt="users" width="40" class="rounded-circle" />
              <div class="m-l-16">
                <h6 class=" f-s-14 f-w-600">
                  {{ element.uname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.position }}
                </span>
              </div>
            </div>
          </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Name
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.productName }}
          </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="priority">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Priority
          </th>
          <td mat-cell *matCellDef="let element">
            @if(element.priority == 'low') {
            <span class="bg-light-secondary text-secondary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'medium') {
            <span class="bg-light-primary text-primary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'high') {
            <span class="bg-light-warning text-warning rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'critical') {
            <span class="bg-light-error text-error rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'moderate') {
            <span class="bg-light-success text-success rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }
          </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="budget">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Budget
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.budget }}k
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns" (click)="selection.toggle(row)"></tr>
      </table>
    </div>
`;var Wt=`  import { Component, OnInit } from '@angular/core';
    import { SelectionModel } from '@angular/cdk/collections';
    import { MatTableDataSource, MatTableModule } from '@angular/material/table';
    import { CommonModule } from '@angular/common';
    import { MatCardModule } from '@angular/material/card';
    import { MatCheckboxModule } from '@angular/material/checkbox';
    import { MatDividerModule } from '@angular/material/divider';

    export interface PeriodicElement {
      id: number;
      imagePath: string;
      uname: string;
      position: string;
      productName: string;
      budget: number;
      priority: string;
    }

    const ELEMENT_DATA: PeriodicElement[] = [
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
    ];

    /**
     * @title selection table */
     */
    @Component({
      selector: 'app-selection-table',
        imports: [
          MatCardModule,
          MatTableModule,
          CommonModule,
          MatCheckboxModule,
          MatDividerModule
        ],
        templateUrl: './selection-table.component.html',
    })
    export class AppSelectionTableComponent {

      displayedColumns: string[] = [
          'select',
          'assigned',
          'name',
          'priority',
          'budget',
        ];
        dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
        selection = new SelectionModel<PeriodicElement>(true, []);
      
        /** Whether the number of selected elements matches the total number of rows. */
        isAllSelected(): any {
          const numSelected = this.selection.selected.length;
          const numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
      
        /** Selects all rows if they are not all selected; otherwise clear selection. */
        masterToggle(): void {
          this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach((row) => this.selection.select(row));
        }
      
        /** The label for the checkbox on the passed row */
        checkboxLabel(row?: PeriodicElement): string {
          if (!row) {
            return {this.isAllSelected() ? 'select' : 'deselect'} all;
          }
          return {this.selection.isSelected(row) ? 'deselect' : 'select'} row {
            row.position + 1
          };
        }

    }
`;function to(e,n){if(e&1){let t=q();i(0,"th",22)(1,"mat-checkbox",23),V("change",function(r){z(t);let T=g();return Y(r?T.masterToggle():null)}),l()()}if(e&2){let t=g();o(),m("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected()),ve("aria-label",t.checkboxLabel())}}function io(e,n){if(e&1){let t=q();i(0,"td",24)(1,"mat-checkbox",25),V("click",function(r){return z(t),Y(r.stopPropagation())})("change",function(r){let T=z(t).$implicit,ie=g();return Y(r?ie.selection.toggle(T):null)}),l()()}if(e&2){let t=n.$implicit,s=g();o(),m("checked",s.selection.isSelected(t)),ve("aria-label",s.checkboxLabel(t))}}function ao(e,n){e&1&&(i(0,"th",26),a(1," Assigned "),l())}function no(e,n){if(e&1&&(i(0,"td",27)(1,"div",28),d(2,"img",29),i(3,"div",30)(4,"h6",31),a(5),l(),i(6,"span",32),a(7),l()()()()),e&2){let t=n.$implicit;o(2),m("src",t.imagePath,O),o(3),p(" ",t.uname," "),o(2),p(" ",t.position," ")}}function oo(e,n){e&1&&(i(0,"th",26),a(1," Name "),l())}function lo(e,n){if(e&1&&(i(0,"td",33),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.productName," ")}}function ro(e,n){e&1&&(i(0,"th",26),a(1," Priority "),l())}function mo(e,n){if(e&1&&(i(0,"span",34),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function so(e,n){if(e&1&&(i(0,"span",35),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function po(e,n){if(e&1&&(i(0,"span",36),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function co(e,n){if(e&1&&(i(0,"span",37),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function uo(e,n){if(e&1&&(i(0,"span",38),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function fo(e,n){if(e&1&&(i(0,"td",27),b(1,mo,3,3,"span",34),b(2,so,3,3,"span",35),b(3,po,3,3,"span",36),b(4,co,3,3,"span",37),b(5,uo,3,3,"span",38),l()),e&2){let t=n.$implicit;o(),_(t.priority=="low"?1:-1),o(),_(t.priority=="medium"?2:-1),o(),_(t.priority=="high"?3:-1),o(),_(t.priority=="critical"?4:-1),o(),_(t.priority=="moderate"?5:-1)}}function go(e,n){e&1&&(i(0,"th",26),a(1," Budget "),l())}function ho(e,n){if(e&1&&(i(0,"td",33),a(1),l()),e&2){let t=n.$implicit;o(),p(" $",t.budget,"k ")}}function Co(e,n){e&1&&d(0,"tr",39)}function bo(e,n){if(e&1){let t=q();i(0,"tr",40),V("click",function(){let r=z(t).$implicit,T=g();return Y(T.selection.toggle(r))}),l()}}var _o=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"}],Ut=(()=>{class e{isAllSelected(){let t=this.selection.selected.length,s=this.dataSource.data.length;return t===s}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(t=>this.selection.select(t))}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:`${this.isAllSelected()?"select":"deselect"} all`}constructor(){this.codeForSelectionTable=Jt,this.codeForSelectionTableTs=Wt,this.displayedColumns=["select","assigned","name","priority","budget"],this.dataSource=new Q(_o),this.selection=new Xe(!0,[])}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-selection-table"]],decls:35,vars:6,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","","class","p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["matColumnDef","assigned"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-cell","","class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["matColumnDef","budget"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"p-l-0"],["color","primary",3,"change","checked","indeterminate","aria-label"],["mat-cell","",1,"p-l-0"],["color","primary",3,"click","change","checked","aria-label"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell",""],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-cell","",1,"f-s-14"],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(s,r){s&1&&(i(0,"app-code-view",0)(1,"h4",1),a(2," Selection Table "),i(3,"span",2),a(4,"single one or more then one item"),l()(),i(5,"div",3)(6,"div",4)(7,"table",5),u(8,6),c(9,to,2,3,"th",7)(10,io,2,2,"td",8),f(),u(11,9),c(12,ao,2,0,"th",10)(13,no,8,3,"td",11),f(),u(14,12),c(15,oo,2,0,"th",10)(16,lo,2,1,"td",13),f(),u(17,14),c(18,ro,2,0,"th",10)(19,fo,6,5,"td",11),f(),u(20,15),c(21,go,2,0,"th",10)(22,ho,2,1,"td",13),f(),c(23,Co,1,0,"tr",16)(24,bo,1,0,"tr",17),l()()(),i(25,"div",18)(26,"pre"),a(27,"      "),d(28,"code",19),a(29,`
    `),l()(),i(30,"div",20)(31,"pre"),a(32,"      "),d(33,"code",21),a(34,`
    `),l()()()),s&2&&(m("isTitle",!0),o(7),m("dataSource",r.dataSource),o(16),m("matHeaderRowDef",r.displayedColumns),o(),m("matRowDefColumns",r.displayedColumns),o(4),m("highlight",r.codeForSelectionTable),o(5),m("highlightAuto",r.codeForSelectionTableTs))},dependencies:[y,N,x,S,A,D,M,P,v,E,H,R,B,Qe,Ge,k,F,j,L,I,$],encapsulation:2})}}return e})();var zt=`  <div class="table-responsive">
      <mat-table #table [dataSource]="dataSource" matSort (matSortChange)="announceSortChange($event)"
        class="mat-elevation-z8" style="max-height: 500px; overflow: auto">
        <!-- Position Column -->
        <ng-container matColumnDef="assigned">
          <mat-header-cell *matHeaderCellDef mat-sort-header="uname" class="f-w-600  f-s-14 p-l-0">
            Assigned
          </mat-header-cell>
          <mat-cell *matCellDef="let element" class="p-l-0">
            <div class="d-flex align-items-center">
              <img [src]="element.imagePath" alt="users" width="40" class="rounded-circle" />
              <div class="m-l-16">
                <h6 class=" f-s-14 f-w-600">
                  {{ element.uname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.position }}
                </span>
              </div>
            </div>
          </mat-cell>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef mat-sort-header class="f-w-600  f-s-14">
            Name
          </mat-header-cell>
          <mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.name }}
          </mat-cell>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="priority">
          <mat-header-cell *matHeaderCellDef mat-sort-header class="f-w-600  f-s-14">
            Priority
          </mat-header-cell>
          <mat-cell *matCellDef="let element">
            @if(element.priority == 'low') {
            <span class="bg-light-secondary text-secondary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'medium') {
            <span class="bg-light-primary text-primary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'high') {
            <span class="bg-light-warning text-warning rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'critical') {
            <span class="bg-light-error text-error rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'moderate') {
            <span class="bg-light-success text-success rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }
          </mat-cell>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="budget">
          <mat-header-cell *matHeaderCellDef mat-sort-header class="f-w-600  f-s-14">
            Budget
          </mat-header-cell>
          <mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.budget }}k
          </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
      </mat-table>
    </div>
`;var Yt=`  import { LiveAnnouncer } from '@angular/cdk/a11y';
    import { Component, inject, OnInit, ViewChild } from '@angular/core';
    import { MatTableDataSource, MatTableModule } from '@angular/material/table';
    import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
    import { CommonModule } from '@angular/common';
    import { MatCardModule } from '@angular/material/card';
    import { MatDividerModule } from '@angular/material/divider';

    export interface Element {
      id: number;
      imagePath: string;
      uname: string;
      position: string;
      name: string;
      budget: number;
      priority: string;
    }

    const ELEMENT_DATA: Element[] = [
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        name: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        name: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        name: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        name: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
      {
        id: 5,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        name: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 6,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        name: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
    ];

    /**
     * @title selection table */
     */
    @Component({
      selector: 'app-sortable-table',
        imports: [MatCardModule, MatTableModule, CommonModule, MatDividerModule, MatSortModule],
        templateUrl: './sortable-table.component.html',
    })
    export class AppSortableTableComponent {

      private _liveAnnouncer = inject(LiveAnnouncer);

      displayedColumns = ['assigned', 'name', 'priority', 'budget'];
      dataSource = new MatTableDataSource(ELEMENT_DATA);
    
      @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
    
      /**
       * Set the sort after the view init since this component will
       * be able to query its view for the initialized sort.
       */
      ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
      }  

      announceSortChange(sortState: Sort) {
          // This example uses English messages. If your application supports
          // multiple language, you would internationalize these strings.
          // Furthermore, you can customize the message to add additional
          // details about the values being sorted.
          if (sortState.direction) {
            this._liveAnnouncer.announce('Sorted {sortState.direction}ending');
          } else {
            this._liveAnnouncer.announce('Sorting cleared');
          }
        }
      
        ngOnInit(): void {}

    }
`;function To(e,n){e&1&&(i(0,"mat-header-cell",22),a(1," Assigned "),l())}function wo(e,n){if(e&1&&(i(0,"mat-cell",23)(1,"div",24),d(2,"img",25),i(3,"div",26)(4,"h6",27),a(5),l(),i(6,"span",28),a(7),l()()()()),e&2){let t=n.$implicit;o(2),m("src",t.imagePath,O),o(3),p(" ",t.uname," "),o(2),p(" ",t.position," ")}}function yo(e,n){e&1&&(i(0,"mat-header-cell",29),a(1," Name "),l())}function xo(e,n){if(e&1&&(i(0,"mat-cell",30),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.name," ")}}function Mo(e,n){e&1&&(i(0,"mat-header-cell",29),a(1," Priority "),l())}function So(e,n){if(e&1&&(i(0,"span",31),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Do(e,n){if(e&1&&(i(0,"span",32),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function vo(e,n){if(e&1&&(i(0,"span",33),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Eo(e,n){if(e&1&&(i(0,"span",34),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Ao(e,n){if(e&1&&(i(0,"span",35),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Po(e,n){if(e&1&&(i(0,"mat-cell"),b(1,So,3,3,"span",31),b(2,Do,3,3,"span",32),b(3,vo,3,3,"span",33),b(4,Eo,3,3,"span",34),b(5,Ao,3,3,"span",35),l()),e&2){let t=n.$implicit;o(),_(t.priority=="low"?1:-1),o(),_(t.priority=="medium"?2:-1),o(),_(t.priority=="high"?3:-1),o(),_(t.priority=="critical"?4:-1),o(),_(t.priority=="moderate"?5:-1)}}function Ho(e,n){e&1&&(i(0,"mat-header-cell",29),a(1," Budget "),l())}function Ro(e,n){if(e&1&&(i(0,"mat-cell",30),a(1),l()),e&2){let t=n.$implicit;o(),p(" $",t.budget,"k ")}}function No(e,n){e&1&&d(0,"mat-header-row")}function Io(e,n){e&1&&d(0,"mat-row")}var Fo=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",name:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",name:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",name:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",name:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:5,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",name:"Elite Admin",budget:3.9,priority:"low"},{id:6,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",name:"Real Homes Theme",budget:24.5,priority:"medium"}],Gt=(()=>{class e{constructor(){this.codeForSortableTable=zt,this.codeForSortableTableTs=Yt,this._liveAnnouncer=ke(Ye),this.displayedColumns=["assigned","name","priority","budget"],this.dataSource=new Q(Fo),this.sort=Object.create(null)}ngAfterViewInit(){this.dataSource.sort=this.sort}announceSortChange(t){t.direction?this._liveAnnouncer.announce(`Sorted ${t.direction}ending`):this._liveAnnouncer.announce("Sorting cleared")}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-sortable-table"]],viewQuery:function(s,r){if(s&1&&ne(ee,7),s&2){let T;X(T=Z())&&(r.sort=T.first)}},decls:33,vars:6,consts:[["table",""],[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["matSort","",1,"mat-elevation-z8",2,"max-height","500px","overflow","auto",3,"matSortChange","dataSource"],["matColumnDef","assigned"],["mat-sort-header","uname","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["class","p-l-0",4,"matCellDef"],["matColumnDef","name"],["mat-sort-header","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],[4,"matCellDef"],["matColumnDef","budget"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-sort-header","uname",1,"f-w-600","f-s-14","p-l-0"],[1,"p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-sort-header","",1,"f-w-600","f-s-14"],[1,"f-s-14"],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"]],template:function(s,r){if(s&1){let T=q();i(0,"app-code-view",1)(1,"h4",2),a(2," Sortable Table "),i(3,"span",3),a(4,"sort your item"),l()(),i(5,"div",4)(6,"div",5)(7,"mat-table",6,0),V("matSortChange",function(De){return z(T),Y(r.announceSortChange(De))}),u(9,7),c(10,To,2,0,"mat-header-cell",8)(11,wo,8,3,"mat-cell",9),f(),u(12,10),c(13,yo,2,0,"mat-header-cell",11)(14,xo,2,1,"mat-cell",12),f(),u(15,13),c(16,Mo,2,0,"mat-header-cell",11)(17,Po,6,5,"mat-cell",14),f(),u(18,15),c(19,Ho,2,0,"mat-header-cell",11)(20,Ro,2,1,"mat-cell",12),f(),c(21,No,1,0,"mat-header-row",16)(22,Io,1,0,"mat-row",17),l()()(),i(23,"div",18)(24,"pre"),a(25,"      "),d(26,"code",19),a(27,`
    `),l()(),i(28,"div",20)(29,"pre"),a(30,"      "),d(31,"code",21),a(32,`
    `),l()()()}s&2&&(m("isTitle",!0),o(7),m("dataSource",r.dataSource),o(14),m("matHeaderRowDef",r.displayedColumns),o(),m("matRowDefColumns",r.displayedColumns),o(4),m("highlight",r.codeForSortableTable),o(5),m("highlightAuto",r.codeForSortableTableTs))},dependencies:[y,N,x,S,A,D,M,P,v,E,H,R,B,k,Me,ee,xe,F,j,L,I,$],encapsulation:2})}}return e})();var Qt=`  <div class="table-responsive example-container">
      <table mat-table [dataSource]="dataSource">
        <!-- Name Column -->
        <ng-container matColumnDef="assigned" sticky>
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 p-l-0">
            Assigned
          </th>
          <td mat-cell *matCellDef="let element" class="p-l-0">
            <div class="d-flex align-items-center">
              <img [src]="element.imagePath" alt="users" width="40" class="rounded-circle" />
              <div class="m-l-16">
                <h6 class=" f-s-14 f-w-600">
                  {{ element.uname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.position }}
                </span>
              </div>
            </div>
          </td>
        </ng-container>

        <!-- Position Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Name
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.productName }}
          </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="priority">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Priority
          </th>
          <td mat-cell *matCellDef="let element">
            @if(element.priority == 'low') {
            <span class="bg-light-secondary text-secondary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'medium') {
            <span class="bg-light-primary text-primary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'high') {
            <span class="bg-light-warning text-warning rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'critical') {
            <span class="bg-light-error text-error rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'moderate') {
            <span class="bg-light-success text-success rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }
          </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="budget" class="f-w-600  f-s-14">
          <th mat-header-cell *matHeaderCellDef>Budget</th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.budget }}k
          </td>
        </ng-container>

        <!-- Star Column -->
        <ng-container matColumnDef="star" stickyEnd>
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let element">
            <mat-icon>more_vert</mat-icon>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
`;var qt=`  import { Component, OnInit } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { MatCardModule } from '@angular/material/card';
    import { MatTableModule } from '@angular/material/table';
    import { MatIconModule } from '@angular/material/icon';
    import { MatDividerModule } from '@angular/material/divider';

    export interface PeriodicElement {
      id: number; 
      imagePath: string;
      uname: string;
      position: string;
      productName: string;
      budget: number;
      priority: string;
    }

    const ELEMENT_DATA: PeriodicElement[] = [
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
      {
        id: 5,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 6,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 7,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 8,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
    ];

    /**
     * @title sticky column table */
     */
    @Component({
      selector: 'app-sticky-column-table',
        imports: [
          MatCardModule,
          MatTableModule,
          MatIconModule,
          CommonModule,
          MatDividerModule
        ],
        templateUrl: './sticky-column-table.component.html',
        styleUrls: ['./sticky-column-table.component.scss'],
    })
    export class AppStickyColumnTableComponent {

      displayedColumns = [
        'assigned',
        'name',
        'priority',
        'budget',
        'priority',
        'name',
        'budget',
        'name',
      ];
      dataSource = ELEMENT_DATA;

    }
`;function jo(e,n){e&1&&(i(0,"th",23),a(1," Assigned "),l())}function Lo(e,n){if(e&1&&(i(0,"td",24)(1,"div",25),d(2,"img",26),i(3,"div",27)(4,"h6",28),a(5),l(),i(6,"span",29),a(7),l()()()()),e&2){let t=n.$implicit;o(2),m("src",t.imagePath,O),o(3),p(" ",t.uname," "),o(2),p(" ",t.position," ")}}function Bo(e,n){e&1&&(i(0,"th",30),a(1," Name "),l())}function ko(e,n){if(e&1&&(i(0,"td",31),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.productName," ")}}function Oo(e,n){e&1&&(i(0,"th",30),a(1," Priority "),l())}function $o(e,n){if(e&1&&(i(0,"span",33),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Vo(e,n){if(e&1&&(i(0,"span",34),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Jo(e,n){if(e&1&&(i(0,"span",35),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Wo(e,n){if(e&1&&(i(0,"span",36),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Uo(e,n){if(e&1&&(i(0,"span",37),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function zo(e,n){if(e&1&&(i(0,"td",32),b(1,$o,3,3,"span",33),b(2,Vo,3,3,"span",34),b(3,Jo,3,3,"span",35),b(4,Wo,3,3,"span",36),b(5,Uo,3,3,"span",37),l()),e&2){let t=n.$implicit;o(),_(t.priority=="low"?1:-1),o(),_(t.priority=="medium"?2:-1),o(),_(t.priority=="high"?3:-1),o(),_(t.priority=="critical"?4:-1),o(),_(t.priority=="moderate"?5:-1)}}function Yo(e,n){e&1&&(i(0,"th",38),a(1,"Budget"),l())}function Go(e,n){if(e&1&&(i(0,"td",31),a(1),l()),e&2){let t=n.$implicit;o(),p(" $",t.budget,"k ")}}function Qo(e,n){e&1&&d(0,"th",38)}function qo(e,n){e&1&&(i(0,"td",32)(1,"mat-icon"),a(2,"more_vert"),l()())}function Ko(e,n){e&1&&d(0,"tr",39)}function Xo(e,n){e&1&&d(0,"tr",40)}var Zo=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:5,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:6,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:7,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:8,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"}],Kt=(()=>{class e{constructor(){this.codeForStickyColumnTable=Qt,this.codeForStickyColumnTableTs=qt,this.displayedColumns=["assigned","name","priority","budget","priority","name","budget","name"],this.dataSource=Zo}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-sticky-column-table"]],decls:35,vars:6,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive","example-container"],["mat-table","",3,"dataSource"],["matColumnDef","assigned","sticky",""],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","","class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["mat-cell","",4,"matCellDef"],["matColumnDef","budget",1,"f-w-600","f-s-14"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","star","stickyEnd",""],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell","",1,"f-s-14"],["mat-cell",""],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"],["mat-header-cell",""],["mat-header-row",""],["mat-row",""]],template:function(s,r){s&1&&(i(0,"app-code-view",0)(1,"h4",1),a(2," Sticky Column table "),i(3,"span",2),a(4,"sticky column with table"),l()(),i(5,"div",3)(6,"div",4)(7,"table",5),u(8,6),c(9,jo,2,0,"th",7)(10,Lo,8,3,"td",8),f(),u(11,9),c(12,Bo,2,0,"th",10)(13,ko,2,1,"td",11),f(),u(14,12),c(15,Oo,2,0,"th",10)(16,zo,6,5,"td",13),f(),u(17,14),c(18,Yo,2,0,"th",15)(19,Go,2,1,"td",11),f(),u(20,16),c(21,Qo,1,0,"th",15)(22,qo,3,0,"td",13),f(),c(23,Ko,1,0,"tr",17)(24,Xo,1,0,"tr",18),l()()(),i(25,"div",19)(26,"pre"),a(27,"      "),d(28,"code",20),a(29,`
    `),l()(),i(30,"div",21)(31,"pre"),a(32,"      "),d(33,"code",22),a(34,`
    `),l()()()),s&2&&(m("isTitle",!0),o(7),m("dataSource",r.dataSource),o(16),m("matHeaderRowDef",r.displayedColumns),o(),m("matRowDefColumns",r.displayedColumns),o(4),m("highlight",r.codeForStickyColumnTable),o(5),m("highlightAuto",r.codeForStickyColumnTableTs))},dependencies:[y,N,x,S,A,D,M,P,v,E,H,R,ye,we,B,k,F,j,L,I,$],styles:[".example-container[_ngcontent-%COMP%]{height:400px;width:550px;overflow:auto}table[_ngcontent-%COMP%]{width:800px}td.mat-column-star[_ngcontent-%COMP%]{width:20px;padding-right:8px}th.mat-column-position[_ngcontent-%COMP%], td.mat-column-position[_ngcontent-%COMP%]{padding-left:8px}.mat-table-sticky[_ngcontent-%COMP%]:first-child{border-right:1px solid #e0e0e0}.mat-table-sticky[_ngcontent-%COMP%]:last-child{border-left:1px solid #e0e0e0}"]})}}return e})();var Xt=`  <div class="table-responsive example-container">
      <table mat-table [dataSource]="transactions" class="w-100">
        <!-- Item Column -->
        <ng-container matColumnDef="item">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16 p-l-0">
            Item
          </th>
          <td mat-cell *matCellDef="let transaction" class="p-l-0">
            <div class="d-flex align-items-center gap-12">
              <img [src]="transaction.img" alt="product" width="45" class="rounded" />
              <span class="f-s-16 f-w-600">{{ transaction.item }} </span>
            </div>
          </td>
          <td mat-footer-cell *matFooterCellDef class="p-l-0 f-w-600">Total</td>
        </ng-container>

        <!-- Cost Column -->
        <ng-container matColumnDef="cost">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16">
            Cost
          </th>
          <td mat-cell *matCellDef="let transaction">
            {{ transaction.cost | currency }}
          </td>
          <td mat-footer-cell *matFooterCellDef>
            {{ getTotalCost() | currency }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        <tr mat-footer-row *matFooterRowDef="displayedColumns; sticky: true"></tr>
      </table>
    </div>
`,Zt=`  <div class="table-responsive example-container">
      <table mat-table [dataSource]="dataSource" class="w-100">
        <!-- Position Column -->
        <ng-container matColumnDef="assigned">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 p-l-0">
            Assigned
          </th>
          <td mat-cell *matCellDef="let element" class="p-l-0">
            <div class="d-flex align-items-center">
              <img [src]="element.imagePath" alt="users" width="40" class="rounded-circle" />
              <div class="m-l-16">
                <h6 class=" f-s-14 f-w-600">
                  {{ element.uname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.position }}
                </span>
              </div>
            </div>
          </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Name
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.productName }}
          </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="priority">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Priority
          </th>
          <td mat-cell *matCellDef="let element">
            @if(element.priority == 'low') {
            <span class="bg-light-secondary text-secondary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'medium') {
            <span class="bg-light-primary text-primary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'high') {
            <span class="bg-light-warning text-warning rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'critical') {
            <span class="bg-light-error text-error rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'moderate') {
            <span class="bg-light-success text-success rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }
          </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="budget">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Budget
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.budget }}k
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns1; sticky: true"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns1"></tr>
      </table>
    </div>
`;var ei=`  import { Component, OnInit } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { MatCardModule } from '@angular/material/card';
    import { MatTableModule } from '@angular/material/table';
    import { MatDividerModule } from '@angular/material/divider';

    export interface Transaction {
      item: string;
      img: string;
      cost: number;
    }

    /**
     * @title sticky Footer table */
     */
    @Component({
      selector: 'app-sticky-header-footer-table',
        imports: [MatCardModule, MatTableModule, CommonModule, MatDividerModule],
        templateUrl: './sticky-header-footer-table.component.html',
        styleUrls: ['./sticky-header-footer-table.component.scss'],
    })
    export class AppStickyHeaderFooterTableComponent {

      displayedColumns = ['item', 'cost'];
        transactions: Transaction[] = [
          { img: '/assets/images/products/s1.jpg', item: 'Beach ball', cost: 4 },
          { img: '/assets/images/products/s2.jpg', item: 'Towel', cost: 5 },
          { img: '/assets/images/products/s3.jpg', item: 'Frisbee', cost: 2 },
          { img: '/assets/images/products/s4.jpg', item: 'Sunscreen', cost: 4 },
          { img: '/assets/images/products/s5.jpg', item: 'Cooler', cost: 25 },
          { img: '/assets/images/products/s6.jpg', item: 'Swim suit', cost: 15 },
        ];
      
        /** Gets the total cost of all transactions. */
        getTotalCost(): any {
          return this.transactions
            .map((t) => t.cost)
            .reduce((acc, value) => acc + value, 0);
        }

    }
`,ti=`  import { Component, OnInit } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { MatCardModule } from '@angular/material/card';
    import { MatTableModule } from '@angular/material/table';
    import { MatDividerModule } from '@angular/material/divider';

    export interface PeriodicElement {
      id: number;
      imagePath: string;
      uname: string;
      position: string;
      productName: string;
      budget: number;
      priority: string;
    }

    const ELEMENT_DATA: PeriodicElement[] = [
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
    ];

    /**
     * @title sticky header table */
     */
    @Component({
      selector: 'app-sticky-header-footer-table',
        imports: [MatCardModule, MatTableModule, CommonModule, MatDividerModule],
        templateUrl: './sticky-header-footer-table.component.html',
        styleUrls: ['./sticky-header-footer-table.component.scss'],
    })
    export class AppStickyHeaderFooterTableComponent {

      displayedColumns1 = ['assigned', 'name', 'priority', 'budget'];
      dataSource = ELEMENT_DATA;

    }
`;function el(e,n){e&1&&(i(0,"th",29),a(1," Item "),l())}function tl(e,n){if(e&1&&(i(0,"td",30)(1,"div",31),d(2,"img",32),i(3,"span",33),a(4),l()()()),e&2){let t=n.$implicit;o(2),m("src",t.img,O),o(2),p("",t.item," ")}}function il(e,n){e&1&&(i(0,"td",34),a(1,"Total"),l())}function al(e,n){e&1&&(i(0,"th",35),a(1," Cost "),l())}function nl(e,n){if(e&1&&(i(0,"td",36),a(1),h(2,"currency"),l()),e&2){let t=n.$implicit;o(),p(" ",C(2,1,t.cost)," ")}}function ol(e,n){if(e&1&&(i(0,"td",37),a(1),h(2,"currency"),l()),e&2){let t=g();o(),p(" ",C(2,1,t.getTotalCost())," ")}}function ll(e,n){e&1&&d(0,"tr",38)}function rl(e,n){e&1&&d(0,"tr",39)}function ml(e,n){e&1&&d(0,"tr",40)}function sl(e,n){e&1&&(i(0,"th",41),a(1," Assigned "),l())}function pl(e,n){if(e&1&&(i(0,"td",30)(1,"div",42),d(2,"img",43),i(3,"div",44)(4,"h6",45),a(5),l(),i(6,"span",46),a(7),l()()()()),e&2){let t=n.$implicit;o(2),m("src",t.imagePath,O),o(3),p(" ",t.uname," "),o(2),p(" ",t.position," ")}}function dl(e,n){e&1&&(i(0,"th",47),a(1," Name "),l())}function cl(e,n){if(e&1&&(i(0,"td",48),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.productName," ")}}function ul(e,n){e&1&&(i(0,"th",47),a(1," Priority "),l())}function fl(e,n){if(e&1&&(i(0,"span",49),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function gl(e,n){if(e&1&&(i(0,"span",50),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function hl(e,n){if(e&1&&(i(0,"span",51),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Cl(e,n){if(e&1&&(i(0,"span",52),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function bl(e,n){if(e&1&&(i(0,"span",53),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function _l(e,n){if(e&1&&(i(0,"td",36),b(1,fl,3,3,"span",49),b(2,gl,3,3,"span",50),b(3,hl,3,3,"span",51),b(4,Cl,3,3,"span",52),b(5,bl,3,3,"span",53),l()),e&2){let t=n.$implicit;o(),_(t.priority=="low"?1:-1),o(),_(t.priority=="medium"?2:-1),o(),_(t.priority=="high"?3:-1),o(),_(t.priority=="critical"?4:-1),o(),_(t.priority=="moderate"?5:-1)}}function Tl(e,n){e&1&&(i(0,"th",47),a(1," Budget "),l())}function wl(e,n){if(e&1&&(i(0,"td",48),a(1),l()),e&2){let t=n.$implicit;o(),p(" $",t.budget,"k ")}}function yl(e,n){e&1&&d(0,"tr",38)}function xl(e,n){e&1&&d(0,"tr",39)}var Ml=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"}],ii=(()=>{class e{getTotalCost(){return this.transactions.map(t=>t.cost).reduce((t,s)=>t+s,0)}constructor(){this.codeForStickyFooterTable=Xt,this.codeForStickyFooterTableTs=ei,this.codeForStickyHeaderTable=Zt,this.codeForStickyHeaderTableTs=ti,this.displayedColumns1=["assigned","name","priority","budget"],this.dataSource=Ml,this.displayedColumns=["item","cost"],this.transactions=[{img:"/assets/images/products/s1.jpg",item:"Beach ball",cost:4},{img:"/assets/images/products/s2.jpg",item:"Towel",cost:5},{img:"/assets/images/products/s3.jpg",item:"Frisbee",cost:2},{img:"/assets/images/products/s4.jpg",item:"Sunscreen",cost:4},{img:"/assets/images/products/s5.jpg",item:"Cooler",cost:25},{img:"/assets/images/products/s6.jpg",item:"Swim suit",cost:15}]}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-sticky-header-footer-table"]],decls:61,vars:15,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive","example-container"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","item"],["mat-header-cell","","class","f-w-600  f-s-16 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["mat-footer-cell","","class","p-l-0 f-w-600",4,"matFooterCellDef"],["matColumnDef","cost"],["mat-header-cell","","class","f-w-600  f-s-16",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef","matFooterRowDefSticky"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matColumnDef","assigned"],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["matColumnDef","name"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","","class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["matColumnDef","budget"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-header-cell","",1,"f-w-600","f-s-16","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center","gap-12"],["alt","product","width","45",1,"rounded",3,"src"],[1,"f-s-16","f-w-600"],["mat-footer-cell","",1,"p-l-0","f-w-600"],["mat-header-cell","",1,"f-w-600","f-s-16"],["mat-cell",""],["mat-footer-cell",""],["mat-header-row",""],["mat-row",""],["mat-footer-row",""],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell","",1,"f-s-14"],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"]],template:function(s,r){s&1&&(i(0,"app-code-view",0)(1,"h4",1),a(2," Sticky Footer table "),i(3,"span",2),a(4,"Fixed footer with total items"),l()(),i(5,"div",3)(6,"div",4)(7,"table",5),u(8,6),c(9,el,2,0,"th",7)(10,tl,5,2,"td",8)(11,il,2,0,"td",9),f(),u(12,10),c(13,al,2,0,"th",11)(14,nl,3,3,"td",12)(15,ol,3,3,"td",13),f(),c(16,ll,1,0,"tr",14)(17,rl,1,0,"tr",15)(18,ml,1,0,"tr",16),l()()(),i(19,"div",17)(20,"pre"),a(21,"      "),d(22,"code",18),a(23,`
    `),l()(),i(24,"div",19)(25,"pre"),a(26,"      "),d(27,"code",20),a(28,`
    `),l()()(),i(29,"app-code-view",0)(30,"h4",1),a(31," Sticky header table "),i(32,"span",2),a(33,"Fixed header"),l()(),i(34,"div",3)(35,"div",4)(36,"table",5),u(37,21),c(38,sl,2,0,"th",22)(39,pl,8,3,"td",8),f(),u(40,23),c(41,dl,2,0,"th",24)(42,cl,2,1,"td",25),f(),u(43,26),c(44,ul,2,0,"th",24)(45,_l,6,5,"td",12),f(),u(46,27),c(47,Tl,2,0,"th",24)(48,wl,2,1,"td",25),f(),c(49,yl,1,0,"tr",28)(50,xl,1,0,"tr",15),l()()(),i(51,"div",17)(52,"pre"),a(53,"      "),d(54,"code",18),a(55,`
    `),l()(),i(56,"div",19)(57,"pre"),a(58,"      "),d(59,"code",20),a(60,`
    `),l()()()),s&2&&(m("isTitle",!0),o(7),m("dataSource",r.transactions),o(9),m("matHeaderRowDef",r.displayedColumns),o(),m("matRowDefColumns",r.displayedColumns),o(),m("matFooterRowDef",r.displayedColumns)("matFooterRowDefSticky",!0),o(4),m("highlight",r.codeForStickyFooterTable),o(5),m("highlightAuto",r.codeForStickyFooterTableTs),o(2),m("isTitle",!0),o(7),m("dataSource",r.dataSource),o(13),m("matHeaderRowDef",r.displayedColumns1)("matHeaderRowDefSticky",!0),o(),m("matRowDefColumns",r.displayedColumns1),o(4),m("highlight",r.codeForStickyHeaderTable),o(5),m("highlightAuto",r.codeForStickyHeaderTableTs))},dependencies:[y,N,x,S,A,D,M,P,me,pe,v,E,se,H,R,de,B,k,F,j,L,I,$,oe],styles:[".example-container[_ngcontent-%COMP%]{height:270px;overflow:auto}tr.mat-footer-row[_ngcontent-%COMP%]{font-weight:700}.mat-table-sticky[_ngcontent-%COMP%]{border-top:1px solid #e0e0e0}"]})}}return e})();var ai=`  <mat-label class="f-s-14 f-w-600 d-block m-b-8 m-t-16">Filter</mat-label>
    <mat-form-field appearance="outline" class="w-100">
      <input matInput (keyup)="applyFilter($event)" placeholder="Ex. ium" #input>
    </mat-form-field>

    <div class="table-responsive m-t-30">
      <table mat-table [dataSource]="dataSource" class="w-100">
        <!-- Position Column -->
        <ng-container matColumnDef="assigned">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 p-l-0">
            Assigned
          </th>
          <td mat-cell *matCellDef="let element" class="p-l-0">
            <div class="d-flex align-items-center">
              <img [src]="element.imagePath" alt="users" width="40" class="rounded-circle" />
              <div class="m-l-16">
                <h6 class=" f-s-14 f-w-600">
                  {{ element.uname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.position }}
                </span>
              </div>
            </div>
          </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Name
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.productName }}
          </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="priority">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Priority
          </th>
          <td mat-cell *matCellDef="let element">
            @if(element.priority == 'low') {
            <span class="bg-light-secondary text-secondary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'medium') {
            <span class="bg-light-primary text-primary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'high') {
            <span class="bg-light-warning text-warning rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'critical') {
            <span class="bg-light-error text-error rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'moderate') {
            <span class="bg-light-success text-success rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }
          </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="budget">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Budget
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.budget }}k
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

        <!-- Row shown when there is no matching data. -->
        <tr class="mat-row" *matNoDataRow>
          <td class="mat-cell" colspan="4">
            No data matching the filter "{{ input.value }}"
          </td>
        </tr>
      </table>
    </div>
`;var ni=`  import { Component, OnInit } from '@angular/core';
    import { MatTableDataSource, MatTableModule } from '@angular/material/table';
    import { CommonModule } from '@angular/common';
    import { MatCardModule } from '@angular/material/card';
    import { MatFormFieldModule } from '@angular/material/form-field';
    import { MatInputModule } from '@angular/material/input';
    import { MatDividerModule } from '@angular/material/divider';


    export interface productsData {
      id: number;
      imagePath: string;
      uname: string;
      position: string;
      productName: string;
      budget: number;
      priority: string;
    }

    const ELEMENT_DATA: productsData[] = [
      {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
      },
      {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
      },
      {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
      },
      {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
      },
    ];

    /**
     * @title expand table */
     */
    @Component({
    selector: 'app-expand-table',
      selector: 'app-filterable-table',
        imports: [
          MatTableModule,
          MatCardModule,
          MatFormFieldModule,
          CommonModule,
          MatInputModule,
          MatDividerModule,
          Highlight,
          HighlightAuto,
          HighlightLineNumbers,
          AppCodeViewComponent,
        ],
        templateUrl: './filterable-table.component.html',
    })
    export class AppFilterableTableComponent {

      displayedColumns: string[] = ['assigned', 'name', 'priority', 'budget'];
        dataSource = new MatTableDataSource(ELEMENT_DATA);
      
        applyFilter(event: Event) {
          const filterValue = (event.target as HTMLInputElement).value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }

    }
`;function Sl(e,n){e&1&&(i(0,"th",26),a(1," Assigned "),l())}function Dl(e,n){if(e&1&&(i(0,"td",27)(1,"div",28),d(2,"img",29),i(3,"div",30)(4,"h6",31),a(5),l(),i(6,"span",32),a(7),l()()()()),e&2){let t=n.$implicit;o(2),m("src",t.imagePath,O),o(3),p(" ",t.uname," "),o(2),p(" ",t.position," ")}}function vl(e,n){e&1&&(i(0,"th",33),a(1," Name "),l())}function El(e,n){if(e&1&&(i(0,"td",34),a(1),l()),e&2){let t=n.$implicit;o(),p(" ",t.productName," ")}}function Al(e,n){e&1&&(i(0,"th",33),a(1," Priority "),l())}function Pl(e,n){if(e&1&&(i(0,"span",36),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Hl(e,n){if(e&1&&(i(0,"span",37),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Rl(e,n){if(e&1&&(i(0,"span",38),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Nl(e,n){if(e&1&&(i(0,"span",39),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Il(e,n){if(e&1&&(i(0,"span",40),a(1),h(2,"titlecase"),l()),e&2){let t=g().$implicit;o(),p(" ",C(2,1,t.priority)," ")}}function Fl(e,n){if(e&1&&(i(0,"td",35),b(1,Pl,3,3,"span",36),b(2,Hl,3,3,"span",37),b(3,Rl,3,3,"span",38),b(4,Nl,3,3,"span",39),b(5,Il,3,3,"span",40),l()),e&2){let t=n.$implicit;o(),_(t.priority=="low"?1:-1),o(),_(t.priority=="medium"?2:-1),o(),_(t.priority=="high"?3:-1),o(),_(t.priority=="critical"?4:-1),o(),_(t.priority=="moderate"?5:-1)}}function jl(e,n){e&1&&(i(0,"th",33),a(1," Budget "),l())}function Ll(e,n){if(e&1&&(i(0,"td",34),a(1),l()),e&2){let t=n.$implicit;o(),p(" $",t.budget,"k ")}}function Bl(e,n){e&1&&d(0,"tr",41)}function kl(e,n){e&1&&d(0,"tr",42)}function Ol(e,n){if(e&1&&(i(0,"tr",43)(1,"td",44),a(2),l()()),e&2){g();let t=$e(10);o(2),p(' No data matching the filter "',t.value,'" ')}}var $l=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"}],oi=(()=>{class e{applyFilter(t){let s=t.target.value;this.dataSource.filter=s.trim().toLowerCase()}constructor(){this.codeForFilterableTable=ai,this.codeForFilterableTableTs=ni,this.displayedColumns=["assigned","name","priority","budget"],this.dataSource=new Q($l)}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-filterable-table"]],decls:38,vars:6,consts:[["input",""],[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"f-s-14","f-w-600","d-block","m-b-8","m-t-16"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Ex. ium",3,"keyup"],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","assigned"],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","","class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["mat-cell","",4,"matCellDef"],["matColumnDef","budget"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell","",1,"f-s-14"],["mat-cell",""],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(s,r){if(s&1){let T=q();i(0,"app-code-view",1)(1,"h4",2),a(2," Filterable table "),i(3,"span",3),a(4,"search your items"),l()(),i(5,"div",4)(6,"mat-label",5),a(7,"Filter"),l(),i(8,"mat-form-field",6)(9,"input",7,0),V("keyup",function(De){return z(T),Y(r.applyFilter(De))}),l()(),i(11,"div",8)(12,"table",9),u(13,10),c(14,Sl,2,0,"th",11)(15,Dl,8,3,"td",12),f(),u(16,13),c(17,vl,2,0,"th",14)(18,El,2,1,"td",15),f(),u(19,16),c(20,Al,2,0,"th",14)(21,Fl,6,5,"td",17),f(),u(22,18),c(23,jl,2,0,"th",14)(24,Ll,2,1,"td",15),f(),c(25,Bl,1,0,"tr",19)(26,kl,1,0,"tr",20)(27,Ol,3,1,"tr",21),l()()(),i(28,"div",22)(29,"pre"),a(30,"      "),d(31,"code",23),a(32,`
    `),l()(),i(33,"div",24)(34,"pre"),a(35,"      "),d(36,"code",25),a(37,`
    `),l()()()}s&2&&(m("isTitle",!0),o(12),m("dataSource",r.dataSource),o(13),m("matHeaderRowDef",r.displayedColumns),o(),m("matRowDefColumns",r.displayedColumns),o(5),m("highlight",r.codeForFilterableTable),o(5),m("highlightAuto",r.codeForFilterableTableTs))},dependencies:[N,x,S,A,D,M,P,v,E,H,R,tt,y,be,he,ge,B,Te,_e,k,F,j,L,I,$],encapsulation:2})}}return e})();var Np=[{path:"",children:[{path:"basic-table",component:ht,data:{title:"Basic Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Basic Table"}]}},{path:"dynamic-table",component:_t,data:{title:"Dynamic Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Dynamic Table"}]}},{path:"expand-table",component:yt,data:{title:"Expand Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Expand Table"}]}},{path:"filterable-table",component:oi,data:{title:"Filterable Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Filterable Table"}]}},{path:"footer-row-table",component:St,data:{title:"Footer Row Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Footer Row Table"}]}},{path:"http-table",component:At,data:{title:"HTTP Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"HTTP Table"}]}},{path:"mix-table",component:Nt,data:{title:"Mix Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Mix Table"}]}},{path:"multi-header-footer-table",component:jt,data:{title:"Multi Header Footer Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Multi Header Footer Table"}]}},{path:"pagination-table",component:kt,data:{title:"Pagination Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Pagination Table"}]}},{path:"row-context-table",component:Vt,data:{title:"Row Context Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Row Context Table"}]}},{path:"selection-table",component:Ut,data:{title:"Selection Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Selection Table"}]}},{path:"sortable-table",component:Gt,data:{title:"Sortable Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Sortable Table"}]}},{path:"sticky-column-table",component:Kt,data:{title:"Sticky Column Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Sticky Column Table"}]}},{path:"sticky-header-footer-table",component:ii,data:{title:"Sticky Header Footer Table",urls:[{title:"Dashboard",url:"/dashboards/dashboard1"},{title:"Sticky Header Footer Table"}]}}]}];export{Np as TablesRoutes};
