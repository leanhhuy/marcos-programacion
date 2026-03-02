import"./chunk-7UZYWCAJ.js";import{c as lt,d as rt,f as Be,g as Re,h as mt}from"./chunk-CJPLD6EO.js";import{a as st,b as pt}from"./chunk-GJBHPO4L.js";import{a as F}from"./chunk-PCBTY662.js";import{b as at,c as nt,e as K,f as pe,g as ae,h as ve,i as Ee,j as v,k as E,l as D,m as de,n as A,o as P,p as ce,q as H,r as I,s as ue,t as B,u as R,v as fe,w as N,x as ot,y as L,z as X}from"./chunk-DDMMGWE3.js";import{$b as Me,B as Ke,Bb as et,Cb as tt,Fb as _e,Jb as xe,Kb as we,Lb as ye,Ob as it,Xb as M,Zb as V,_b as Se,e as y,f as S,mb as be,tb as Te,v as se,yb as Xe,zb as Ze}from"./chunk-QN7NOS6U.js";import{b as O}from"./chunk-INFJILZO.js";import{e as j,f as k}from"./chunk-Y7E7CANW.js";import{A as qe,n as W,o as Qe,t as me,v as $}from"./chunk-F6ZH6GOJ.js";import{Ac as He,Bc as n,Cc as _,D as je,Dc as r,Ec as Ye,Fb as f,G as ke,Ic as Ge,Kc as Ie,Mc as ne,Ob as Pe,Pb as Je,Qb as b,Rb as T,Tb as ge,Ub as he,Vb as Ce,Vc as m,Wb as p,Wc as s,X as Oe,Xb as a,Y as $e,Yb as l,Zb as u,bc as g,cc as h,db as J,ec as Z,jb as t,ka as Ve,kc as U,mc as C,o as Le,qa as Q,qc as re,ra as q,rc as te,sc as ie,t as Fe,tb as le,wc as We,xc as Ue,yc as ze,zb as w}from"./chunk-UUJKCIGR.js";import"./chunk-6NE7JDAX.js";var dt=`  <div class="table-responsive">
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
`,ct=`  <div class="table-responsive">
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
`,ut=`  <div class="table-responsive">
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
`,ft=`  <div class="table-responsive">
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
`;var gt=`  import { Component, OnInit } from '@angular/core';
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
`,ht=`  import { Component, OnInit } from '@angular/core';
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
`,Ct=`  import { Component, OnInit } from '@angular/core';
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
`,bt=`  import { Component, OnInit } from '@angular/core';
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
`;function pi(e,o){e&1&&(a(0,"th",35),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.assigned")," "))}function di(e,o){if(e&1&&(a(0,"td",36)(1,"div",37),u(2,"img",38),a(3,"div",39)(4,"h6",40),n(5),l(),a(6,"span",41),n(7),l()()()()),e&2){let i=o.$implicit;t(2),p("src",i.imagePath,J),t(3),r(" ",i.uname," "),t(2),r(" ",i.position," ")}}function ci(e,o){e&1&&(a(0,"th",42),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.name")," "))}function ui(e,o){if(e&1&&(a(0,"td",43),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.productName," ")}}function fi(e,o){e&1&&(a(0,"th",42),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.priority")," "))}function gi(e,o){if(e&1&&(a(0,"span",45),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function hi(e,o){if(e&1&&(a(0,"span",46),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Ci(e,o){if(e&1&&(a(0,"span",47),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function bi(e,o){if(e&1&&(a(0,"span",48),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Ti(e,o){if(e&1&&(a(0,"span",49),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function _i(e,o){if(e&1&&(a(0,"td",44),b(1,gi,3,3,"span",45),b(2,hi,3,3,"span",46),b(3,Ci,3,3,"span",47),b(4,bi,3,3,"span",48),b(5,Ti,3,3,"span",49),l()),e&2){let i=o.$implicit;t(),T(i.priority=="low"?1:-1),t(),T(i.priority=="medium"?2:-1),t(),T(i.priority=="high"?3:-1),t(),T(i.priority=="critical"?4:-1),t(),T(i.priority=="moderate"?5:-1)}}function xi(e,o){e&1&&(a(0,"th",42),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.budget")," "))}function wi(e,o){if(e&1&&(a(0,"td",43),n(1),l()),e&2){let i=o.$implicit;t(),r(" $",i.budget,"k ")}}function yi(e,o){e&1&&u(0,"tr",50)}function Si(e,o){e&1&&u(0,"tr",51)}function Mi(e,o){e&1&&(a(0,"th",35),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.product")," "))}function vi(e,o){if(e&1&&(a(0,"td",36)(1,"div",37),u(2,"img",52),a(3,"div",39)(4,"h6",40),n(5),l(),a(6,"span",41),n(7),l()()()()),e&2){let i=o.$implicit;t(2),p("src",i.imagePath,J),t(3),r(" ",i.pname," "),t(2),r(" ",i.category," ")}}function Ei(e,o){e&1&&(a(0,"th",42),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.progress")," "))}function Di(e,o){if(e&1&&(a(0,"td",43),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.progress,"% ")}}function Ai(e,o){e&1&&(a(0,"th",42),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.status")," "))}function Pi(e,o){if(e&1&&(a(0,"span",49),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.status)," ")}}function Hi(e,o){if(e&1&&(a(0,"span",47),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.status)," ")}}function Ii(e,o){if(e&1&&(a(0,"span",46),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.status)," ")}}function Bi(e,o){if(e&1&&(a(0,"span",48),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.status)," ")}}function Ri(e,o){if(e&1&&(a(0,"td",44),b(1,Pi,3,3,"span",49),b(2,Hi,3,3,"span",47),b(3,Ii,3,3,"span",46),b(4,Bi,3,3,"span",48),l()),e&2){let i=o.$implicit;t(),T(i.status=="low"?1:-1),t(),T(i.status=="medium"?2:-1),t(),T(i.status=="high"?3:-1),t(),T(i.status=="critical"?4:-1)}}function Ni(e,o){e&1&&(a(0,"th",42),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.sales")," "))}function Li(e,o){if(e&1&&(a(0,"td",43),n(1),l()),e&2){let i=o.$implicit;t(),r(" $",i.sales,"k ")}}function Fi(e,o){e&1&&u(0,"tr",50)}function ji(e,o){e&1&&u(0,"tr",51)}function ki(e,o){e&1&&(a(0,"th",35),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.product")," "))}function Oi(e,o){if(e&1&&(a(0,"td",36)(1,"div",37)(2,"span"),u(3,"img",53),l(),a(4,"div",39)(5,"h6",40),n(6),l(),a(7,"span",41),n(8),l()()()()),e&2){let i=o.$implicit;t(2),He(Ie("text-",i.color," bg-light-",i.color," rounded icon-40 d-flex align-items-center justify-content-center")),t(),p("src",i.imagePath,J),t(3),r(" ",i.pname," "),t(2),r(" ",i.category," ")}}function $i(e,o){e&1&&(a(0,"th",54),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.price")," "))}function Vi(e,o){if(e&1&&(a(0,"td",55),n(1),l()),e&2){let i=o.$implicit;t(),r(" +$",i.price," ")}}function Ji(e,o){e&1&&u(0,"tr",50)}function Wi(e,o){e&1&&u(0,"tr",51)}function Ui(e,o){e&1&&(a(0,"th",56),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.users")," "))}function zi(e,o){if(e&1&&(a(0,"td",36)(1,"div",37),u(2,"img",57),a(3,"div",58)(4,"h5",59),n(5),l(),a(6,"span",60),n(7),l()()()()),e&2){let i=o.$implicit;t(2),p("src",i.imgSrc,J),t(3),r(" ",i.name," "),t(2),_(i.post)}}function Yi(e,o){e&1&&(a(0,"th",61),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.projectName")," "))}function Gi(e,o){if(e&1&&(a(0,"td",43),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.pname," ")}}function Qi(e,o){e&1&&(a(0,"th",61),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.status")," "))}function qi(e,o){if(e&1&&(a(0,"td",44)(1,"span"),n(2),l()()),e&2){let i=o.$implicit;t(),He(Ie("rounded-pill bg-light-",i.color," text-",i.color," f-s-12 f-w-500 p-x-8 p-y-4")),t(),r(" ",i.status)}}function Ki(e,o){e&1&&(a(0,"th",62),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.budget")," "))}function Xi(e,o){if(e&1&&(a(0,"td",63),n(1),l()),e&2){let i=o.$implicit;t(),r(" $",i.budget,"k ")}}function Zi(e,o){e&1&&u(0,"tr",50)}function ea(e,o){e&1&&u(0,"tr",51)}var ta=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"}],ia=[{id:1,imagePath:"assets/images/products/s6.jpg",pname:"Gaming Console",category:"Electronics",progress:78.5,sales:3.9,status:"low"},{id:2,imagePath:"assets/images/products/s9.jpg",pname:"Leather Purse",category:"Fashion",progress:58.6,sales:3.5,status:"medium"},{id:3,imagePath:"assets/images/products/s7.jpg",pname:"Red Velvate Dress",category:"Womens Fashion",progress:25,sales:3.8,status:"high"},{id:4,imagePath:"assets/images/products/s4.jpg",pname:"Headphone Boat",category:"Electronics",progress:96.3,sales:3.54,status:"critical"}],aa=[{id:1,color:"primary",imagePath:"assets/images/svgs/icon-paypal.svg",pname:"Paypal",category:"Big Brands",price:6235},{id:2,color:"success",imagePath:"assets/images/svgs/icon-office-bag.svg",pname:"Wallet",category:"Bill payment",price:345},{id:3,color:"warning",imagePath:"assets/images/svgs/icon-master-card.svg",pname:"Credit Card",category:"Money reversed",price:2235},{id:4,color:"error",imagePath:"assets/images/svgs/icon-pie.svg",pname:"Refund",category:"Bill Payment",price:32}],na=[{imgSrc:"assets/images/profile/user-1.jpg",name:"Micheal Doe",post:"Web Designer",pname:"Elite Admin",status:"Active",color:"success",budget:"3.9"},{imgSrc:"assets/images/profile/user-2.jpg",name:"Andrew McDownland",post:"Project Manager",pname:"Real Homes WP Theme",status:"Pending",color:"warning",budget:"3.9"},{imgSrc:"assets/images/profile/user-3.jpg",name:"Christopher Jamil",post:"Frontend Engineer",pname:"MedicalPro WP Theme",status:"Cancel",color:"error",budget:"3.9"},{imgSrc:"assets/images/profile/user-4.jpg",name:"Mathew Anderson",post:"Content Writer",pname:"Hosting Press HTML",status:"Completed",color:"primary",budget:"3.9"}],_t=(()=>{class e{constructor(i){this.codeForTopProjects=dt,this.codeForTopProjectsTs=gt,this.codeForBestProduct=ct,this.codeForBestProductTs=ht,this.codeForPaymentGateways=ut,this.codeForPaymentGatewaysTs=Ct,this.codeForEmployeeTheYear=ft,this.codeForEmployeeTheYearTs=bt,this.displayedColumns4=["name","pname","status","budget"],this.dataSource4=new X(na),this.displayedColumns1=["assigned","name","priority","budget"],this.dataSource1=ta,this.displayedColumns2=["product","progress","status","sales"],this.dataSource2=ia,this.displayedColumns3=["product","price"],this.dataSource3=aa,i.observe(["(max-width: 600px)"]).subscribe(c=>{this.displayedColumns4=c.matches?["name","pname","status","budget"]:["name","pname","status","budget"]})}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||e)(le(se))}}static{this.\u0275cmp=w({type:e,selectors:[["app-basic-table"]],decls:130,vars:48,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","assigned"],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","","class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["mat-cell","",4,"matCellDef"],["matColumnDef","budget"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matColumnDef","product"],["mat-header-cell","","class","f-w-600 f-s-14  p-l-0",4,"matHeaderCellDef"],["matColumnDef","progress"],["mat-header-cell","","class","f-w-600 f-s-14 ",4,"matHeaderCellDef"],["matColumnDef","status"],["matColumnDef","sales"],["matColumnDef","price"],["mat-header-cell","","class","f-w-600 f-s-14  text-right",4,"matHeaderCellDef"],["mat-cell","","class","f-s-14 text-right",4,"matCellDef"],["mat-header-cell","","class","f-w-600 f-s-16  p-l-0",4,"matHeaderCellDef"],["matColumnDef","pname"],["mat-header-cell","","class","f-w-600 f-s-16 ",4,"matHeaderCellDef"],["mat-header-cell","","class","f-w-600 f-s-16  p-r-0 text-right",4,"matHeaderCellDef"],["mat-cell","","class","f-w-500 text-right p-r-0",4,"matCellDef"],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell","",1,"f-s-14"],["mat-cell",""],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"],["mat-header-row",""],["mat-row",""],["alt","users","width","48",1,"rounded",3,"src"],["alt","icon",3,"src"],["mat-header-cell","",1,"f-w-600","f-s-14","text-right"],["mat-cell","",1,"f-s-14","text-right"],["mat-header-cell","",1,"f-w-600","f-s-16","p-l-0"],["alt","user","width","40",1,"rounded-circle",3,"src"],[1,"m-l-12"],[1,"f-s-14","f-w-600","m-0"],[1,"f-s-12"],["mat-header-cell","",1,"f-w-600","f-s-16"],["mat-header-cell","",1,"f-w-600","f-s-16","p-r-0","text-right"],["mat-cell","",1,"f-w-500","text-right","p-r-0"]],template:function(c,d){c&1&&(a(0,"app-code-view",0)(1,"h4",1),n(2),m(3,"translate"),a(4,"span",2),n(5),m(6,"translate"),l()(),a(7,"div",3)(8,"div",4)(9,"table",5),g(10,6),f(11,pi,3,3,"th",7)(12,di,8,3,"td",8),h(),g(13,9),f(14,ci,3,3,"th",10)(15,ui,2,1,"td",11),h(),g(16,12),f(17,fi,3,3,"th",10)(18,_i,6,5,"td",13),h(),g(19,14),f(20,xi,3,3,"th",10)(21,wi,2,1,"td",11),h(),f(22,yi,1,0,"tr",15)(23,Si,1,0,"tr",16),l()()(),a(24,"div",17)(25,"pre"),n(26,"      "),u(27,"code",18),n(28,`
    `),l()(),a(29,"div",19)(30,"pre"),n(31,"      "),u(32,"code",20),n(33,`
    `),l()()(),a(34,"app-code-view",0)(35,"h4",1),n(36),m(37,"translate"),a(38,"span",2),n(39),m(40,"translate"),l()(),a(41,"div",3)(42,"div",4)(43,"table",5),g(44,21),f(45,Mi,3,3,"th",22)(46,vi,8,3,"td",8),h(),g(47,23),f(48,Ei,3,3,"th",24)(49,Di,2,1,"td",11),h(),g(50,25),f(51,Ai,3,3,"th",24)(52,Ri,5,4,"td",13),h(),g(53,26),f(54,Ni,3,3,"th",24)(55,Li,2,1,"td",11),h(),f(56,Fi,1,0,"tr",15)(57,ji,1,0,"tr",16),l()()(),a(58,"div",17)(59,"pre"),n(60,"      "),u(61,"code",18),n(62,`
    `),l()(),a(63,"div",19)(64,"pre"),n(65,"      "),u(66,"code",20),n(67,`
    `),l()()(),a(68,"app-code-view",0)(69,"h4",1),n(70),m(71,"translate"),a(72,"span",2),n(73),m(74,"translate"),l()(),a(75,"div",3)(76,"div",4)(77,"table",5),g(78,21),f(79,ki,3,3,"th",22)(80,Oi,9,7,"td",8),h(),g(81,27),f(82,$i,3,3,"th",28)(83,Vi,2,1,"td",29),h(),f(84,Ji,1,0,"tr",15)(85,Wi,1,0,"tr",16),l()()(),a(86,"div",17)(87,"pre"),n(88,"      "),u(89,"code",18),n(90,`
    `),l()(),a(91,"div",19)(92,"pre"),n(93,"      "),u(94,"code",20),n(95,`
    `),l()()(),a(96,"app-code-view",0)(97,"h4",1),n(98),m(99,"translate"),a(100,"span",2),n(101),m(102,"translate"),l()(),a(103,"div",3)(104,"div",4)(105,"table",5),g(106,9),f(107,Ui,3,3,"th",30)(108,zi,8,3,"td",8),h(),g(109,31),f(110,Yi,3,3,"th",32)(111,Gi,2,1,"td",11),h(),g(112,25),f(113,Qi,3,3,"th",32)(114,qi,3,5,"td",13),h(),g(115,14),f(116,Ki,3,3,"th",33)(117,Xi,2,1,"td",34),h(),f(118,Zi,1,0,"tr",15)(119,ea,1,0,"tr",16),l()()(),a(120,"div",17)(121,"pre"),n(122,"      "),u(123,"code",18),n(124,`
    `),l()(),a(125,"div",19)(126,"pre"),n(127,"      "),u(128,"code",20),n(129,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,32,"TABLES.titles.topProjects")," "),t(3),_(s(6,34,"TABLES.subtitles.topNewProducts")),t(4),p("dataSource",d.dataSource1),t(13),p("matHeaderRowDef",d.displayedColumns1),t(),p("matRowDefColumns",d.displayedColumns1),t(4),p("highlight",d.codeForTopProjects),t(5),p("highlightAuto",d.codeForTopProjectsTs),t(2),p("isTitle",!0),t(2),r(" ",s(37,36,"TABLES.titles.bestProducts")," "),t(3),_(s(40,38,"TABLES.subtitles.sellNewProducts")),t(4),p("dataSource",d.dataSource2),t(13),p("matHeaderRowDef",d.displayedColumns2),t(),p("matRowDefColumns",d.displayedColumns2),t(4),p("highlight",d.codeForBestProduct),t(5),p("highlightAuto",d.codeForBestProductTs),t(2),p("isTitle",!0),t(2),r(" ",s(71,40,"TABLES.titles.paymentGateways")," "),t(3),_(s(74,42,"TABLES.subtitles.platformForIncome")),t(4),p("dataSource",d.dataSource3),t(7),p("matHeaderRowDef",d.displayedColumns3),t(),p("matRowDefColumns",d.displayedColumns3),t(4),p("highlight",d.codeForPaymentGateways),t(5),p("highlightAuto",d.codeForPaymentGatewaysTs),t(2),p("isTitle",!0),t(2),r(" ",s(99,44,"TABLES.titles.employeeOfYear")," "),t(3),_(s(102,46,"TABLES.subtitles.greatWork")),t(4),p("dataSource",d.dataSource4),t(13),p("matHeaderRowDef",d.displayedColumns4),t(),p("matRowDefColumns",d.displayedColumns4),t(4),p("highlight",d.codeForEmployeeTheYear),t(5),p("highlightAuto",d.codeForEmployeeTheYearTs))},dependencies:[L,v,D,I,A,E,B,P,H,R,N,$,M,V,j,k,O,F,S,W,y],encapsulation:2})}}return e})();var xt=`  <div class="d-flex d-sm-block align-items-center gap-1 m-b-16 m-t-16">
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
`;var wt=`  import { Component, OnInit } from '@angular/core';
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
`;function la(e,o){if(e&1&&(a(0,"th",19),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i)," ")}}function ra(e,o){if(e&1&&(a(0,"td",20),n(1),l()),e&2){let i=o.$implicit,c=C().$implicit;t(),r(" ",i[c]," ")}}function ma(e,o){if(e&1&&(g(0,10),f(1,la,3,3,"th",17)(2,ra,2,1,"td",18),h()),e&2){let i=o.$implicit;p("matColumnDef",i)}}function sa(e,o){e&1&&u(0,"tr",21)}function pa(e,o){e&1&&u(0,"tr",22)}var da=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}],yt=(()=>{class e{addColumn(){let i=Math.floor(Math.random()*this.displayedColumns.length);this.columnsToDisplay.push(this.displayedColumns[i])}removeColumn(){this.columnsToDisplay.length&&this.columnsToDisplay.pop()}shuffle(){let i=this.columnsToDisplay.length;for(;i!==0;){let c=Math.floor(Math.random()*i);i-=1;let d=this.columnsToDisplay[i];this.columnsToDisplay[i]=this.columnsToDisplay[c],this.columnsToDisplay[c]=d}}constructor(){this.codeForDynamicTable=xt,this.codeForDynamicTableTs=wt,this.displayedColumns=["name","weight","symbol","position"],this.columnsToDisplay=this.displayedColumns.slice(),this.data=da}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-dynamic-table"]],decls:34,vars:21,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"d-flex","d-sm-block","align-items-center","gap-1","m-b-16","m-t-16"],["mat-flat-button","",1,"m-r-8",3,"click"],["mat-flat-button","",1,"m-r-8","bg-error","text-white",3,"click"],["mat-flat-button","",1,"bg-secondary","text-white",3,"click"],[1,"table-responsive","m-t-30"],["mat-table","",1,"w-100",3,"dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0 f-s-14",4,"matCellDef"],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],["mat-cell","",1,"p-l-0","f-s-14"],["mat-header-row",""],["mat-row",""]],template:function(c,d){c&1&&(a(0,"app-code-view",0)(1,"h4",1),n(2),m(3,"translate"),a(4,"span",2),n(5),m(6,"translate"),l()(),a(7,"div",3)(8,"div",4)(9,"button",5),U("click",function(){return d.addColumn()}),n(10),m(11,"translate"),l(),a(12,"button",6),U("click",function(){return d.removeColumn()}),n(13),m(14,"translate"),l(),a(15,"button",7),U("click",function(){return d.shuffle()}),n(16),m(17,"translate"),l()(),a(18,"div",8)(19,"table",9),he(20,ma,3,1,"ng-container",10,ge),f(22,sa,1,0,"tr",11)(23,pa,1,0,"tr",12),l()()(),a(24,"div",13)(25,"pre"),n(26,"      "),u(27,"code",14),n(28,`
    `),l()(),a(29,"div",15)(30,"pre"),n(31,"      "),u(32,"code",16),n(33,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,11,"TABLES.titles.dynamicTableTitle")," "),t(3),_(s(6,13,"TABLES.subtitles.addColumnDynamic")),t(5),r(" ",s(11,15,"TABLES.buttons.addColumn")," "),t(3),r(" ",s(14,17,"TABLES.buttons.removeColumn")," "),t(3),r(" ",s(17,19,"TABLES.buttons.shuffle")," "),t(3),p("dataSource",d.data),t(),Ce(d.displayedColumns),t(2),p("matHeaderRowDef",d.columnsToDisplay),t(),p("matRowDefColumns",d.columnsToDisplay),t(4),p("highlight",d.codeForDynamicTable),t(5),p("highlightAuto",d.codeForDynamicTableTs))},dependencies:[L,v,D,I,A,E,B,P,H,R,N,M,$,_e,tt,j,k,O,F,S,W,y],encapsulation:2})}}return e})();var St=`  <div class="table-responsive-sm">
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
`;var Mt=`  import { Component, OnInit } from '@angular/core';
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
`;var ua=()=>["expandedDetail"];function fa(e,o){if(e&1&&(a(0,"th",20),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i)," ")}}function ga(e,o){if(e&1&&(a(0,"td",21),n(1),l()),e&2){let i=o.$implicit,c=C().$implicit;t(),r(" ",i[c]," ")}}function ha(e,o){if(e&1&&(g(0,6),f(1,fa,3,3,"th",18)(2,ga,2,1,"td",19),h()),e&2){let i=o.$implicit;p("matColumnDef",Ge(i))}}function Ca(e,o){e&1&&(a(0,"th",22),n(1," \xA0 "),l())}function ba(e,o){e&1&&(a(0,"mat-icon"),n(1,"keyboard_arrow_down"),l())}function Ta(e,o){e&1&&(a(0,"mat-icon"),n(1,"keyboard_arrow_up"),l())}function _a(e,o){if(e&1){let i=Z();a(0,"td",23)(1,"button",24),U("click",function(d){let x=Q(i).$implicit,oe=C();return oe.expandedElement=oe.expandedElement===x?null:x,q(d.stopPropagation())}),b(2,ba,2,0,"mat-icon"),b(3,Ta,2,0,"mat-icon"),l()()}if(e&2){let i=o.$implicit,c=C();t(2),T(c.expandedElement!==i?2:-1),t(),T(c.expandedElement===i?3:-1)}}function xa(e,o){if(e&1&&(a(0,"td",23)(1,"div")(2,"div",25)(3,"div",26)(4,"span",27),n(5),l(),a(6,"div")(7,"div",28),n(8),l(),a(9,"div",29),n(10),l()()(),a(11,"div",30),n(12),l()()()()),e&2){let i=o.$implicit,c=C();Je("colspan",c.columnsToDisplay.length),t(),p("@detailExpand",i===c.expandedElement?"expanded":"collapsed"),t(4),r(" ",i.symbol," "),t(3),r(" ",i.name," "),t(2),_(i.project),t(2),r(" ",i.description," ")}}function wa(e,o){e&1&&u(0,"tr",31)}function ya(e,o){if(e&1){let i=Z();a(0,"tr",32),U("click",function(){let d=Q(i).$implicit,x=C();return q(x.expandedElement=x.expandedElement===d?null:d)}),l()}if(e&2){let i=o.$implicit,c=C();ze("example-expanded-row",c.expandedElement===i)}}function Sa(e,o){e&1&&u(0,"tr",33)}var Ma=[{id:1,position:"Front end Developer",name:"Andrew McDownland",project:"Elite Admin",symbol:"H",description:`Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
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
        two-thirds the density of air.`}],vt=(()=>{class e{constructor(){this.codeForExpandTable=St,this.codeForExpandTableTs=Mt,this.dataSource=Ma,this.columnsToDisplay=["id","name","project","symbol","position"],this.columnsToDisplayWithExpand=[...this.columnsToDisplay,"expand"],this.expandedElement=null}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-expand-table"]],decls:30,vars:14,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive-sm"],["mat-table","","multiTemplateDataRows","",3,"dataSource"],[3,"matColumnDef"],["matColumnDef","expand"],["mat-header-cell","","aria-label","row actions",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","example-element-row",3,"example-expanded-row","click",4,"matRowDef","matRowDefColumns"],["mat-row","","class","example-detail-row",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","","class","f-w-600  f-s-14 p-x-24 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-x-24 f-s-14 p-l-0",4,"matCellDef"],["mat-header-cell","",1,"f-w-600","f-s-14","p-x-24","p-l-0"],["mat-cell","",1,"p-x-24","f-s-14","p-l-0"],["mat-header-cell","","aria-label","row actions"],["mat-cell",""],["mat-icon-button","","aria-label","expand row",3,"click"],[1,"p-15","rounded","b-1","m-b-16","m-x-18"],[1,"d-flex","align-items-center","gap-12"],[1,"bg-light-primary","text-primary","icon-48","rounded","f-w-600","d-flex","align-items-center","justify-content-center"],[1,"f-s-14","f-w-600"],[1,"f-s-14"],[1,"f-s-14","m-t-8"],["mat-header-row",""],["mat-row","",1,"example-element-row",3,"click"],["mat-row","",1,"example-detail-row"]],template:function(c,d){c&1&&(a(0,"app-code-view",0)(1,"h4",1),n(2),m(3,"translate"),a(4,"span",2),n(5),m(6,"translate"),l()(),a(7,"div",3)(8,"div",4)(9,"table",5),he(10,ha,3,2,"ng-container",6,ge),g(12,7),f(13,Ca,2,0,"th",8)(14,_a,4,2,"td",9),h(),g(15,10),f(16,xa,13,6,"td",9),h(),f(17,wa,1,0,"tr",11)(18,ya,1,2,"tr",12)(19,Sa,1,0,"tr",13),l()()(),a(20,"div",14)(21,"pre"),n(22,"      "),u(23,"code",15),n(24,`
    `),l()(),a(25,"div",16)(26,"pre"),n(27,"      "),u(28,"code",17),n(29,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,9,"TABLES.titles.expandableTableTitle")," "),t(3),_(s(6,11,"TABLES.subtitles.expandableRows")),t(4),p("dataSource",d.dataSource),t(),Ce(d.columnsToDisplay),t(7),p("matHeaderRowDef",d.columnsToDisplayWithExpand),t(),p("matRowDefColumns",d.columnsToDisplayWithExpand),t(),p("matRowDefColumns",ne(13,ua)),t(4),p("highlight",d.codeForExpandTable),t(5),p("highlightAuto",d.codeForExpandTableTs))},dependencies:[M,L,v,D,I,A,E,B,P,H,R,N,Me,Se,_e,et,$,V,j,k,O,F,S,W,y],styles:["table[_ngcontent-%COMP%]{width:100%}tr.example-detail-row[_ngcontent-%COMP%]{height:0}.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}"],data:{animation:[lt("detailExpand",[Re("collapsed",Be({height:"0px",minHeight:"0"})),Re("expanded",Be({height:"*"})),mt("expanded <=> collapsed",rt("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}})}}return e})();var Et=`  <div class="table-responsive">
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
`;var Dt=`  import { Component, OnInit } from '@angular/core';
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
          { img: 'assets/images/products/s1.jpg', item: 'Beach ball', cost: 4 },
          { img: 'assets/images/products/s2.jpg', item: 'Towel', cost: 5 },
          { img: 'assets/images/products/s3.jpg', item: 'Frisbee', cost: 2 },
          { img: 'assets/images/products/s4.jpg', item: 'Sunscreen', cost: 4 },
          { img: 'assets/images/products/s5.jpg', item: 'Cooler', cost: 25 },
          { img: 'assets/images/products/s6.jpg', item: 'Swim suit', cost: 15 },
        ];
      
        /** Gets the total cost of all transactions. */
        getTotalCost() {
          return this.transactions
            .map((t) => t.cost)
            .reduce((acc, value) => acc + value, 0);
        }

    }
`;function va(e,o){e&1&&(a(0,"th",21),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.item")," "))}function Ea(e,o){if(e&1&&(a(0,"td",22)(1,"div",23),u(2,"img",24),a(3,"span",25),n(4),l()()()),e&2){let i=o.$implicit;t(2),p("src",i.img,J),t(2),r("",i.item," ")}}function Da(e,o){e&1&&(a(0,"td",26),n(1),m(2,"translate"),l()),e&2&&(t(),_(s(2,1,"TABLES.columns.total")))}function Aa(e,o){e&1&&(a(0,"th",27),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.cost")," "))}function Pa(e,o){if(e&1&&(a(0,"td",28),n(1),m(2,"currency"),l()),e&2){let i=o.$implicit;t(),r(" ",s(2,1,i.cost)," ")}}function Ha(e,o){if(e&1&&(a(0,"td",29),n(1),m(2,"currency"),l()),e&2){let i=C();t(),r(" ",s(2,1,i.getTotalCost())," ")}}function Ia(e,o){e&1&&u(0,"tr",30)}function Ba(e,o){e&1&&u(0,"tr",31)}function Ra(e,o){e&1&&u(0,"tr",32)}var At=(()=>{class e{getTotalCost(){return this.transactions.map(i=>i.cost).reduce((i,c)=>i+c,0)}constructor(){this.codeForFooterRowTable=Et,this.codeForFooterRowTableTs=Dt,this.displayedColumns=["item","cost"],this.transactions=[{img:"assets/images/products/s1.jpg",item:"Beach ball",cost:4},{img:"assets/images/products/s2.jpg",item:"Towel",cost:5},{img:"assets/images/products/s3.jpg",item:"Frisbee",cost:2},{img:"assets/images/products/s4.jpg",item:"Sunscreen",cost:4},{img:"assets/images/products/s5.jpg",item:"Cooler",cost:25},{img:"assets/images/products/s6.jpg",item:"Swim suit",cost:15}]}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-footer-row-table"]],decls:31,vars:13,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","item"],["mat-header-cell","","class","f-w-600  f-s-16 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["mat-footer-cell","","class","p-l-0 f-w-600",4,"matFooterCellDef"],["matColumnDef","cost"],["mat-header-cell","","class","f-w-600  f-s-16",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"f-w-600","f-s-16","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center","gap-12"],["alt","product","width","45",1,"rounded",3,"src"],[1,"f-s-16","f-w-600"],["mat-footer-cell","",1,"p-l-0","f-w-600"],["mat-header-cell","",1,"f-w-600","f-s-16"],["mat-cell",""],["mat-footer-cell",""],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(c,d){c&1&&(a(0,"app-code-view",0)(1,"h4",1),n(2),m(3,"translate"),a(4,"span",2),n(5),m(6,"translate"),l()(),a(7,"div",3)(8,"div",4)(9,"table",5),g(10,6),f(11,va,3,3,"th",7)(12,Ea,5,2,"td",8)(13,Da,3,3,"td",9),h(),g(14,10),f(15,Aa,3,3,"th",11)(16,Pa,3,3,"td",12)(17,Ha,3,3,"td",13),h(),f(18,Ia,1,0,"tr",14)(19,Ba,1,0,"tr",15)(20,Ra,1,0,"tr",16),l()()(),a(21,"div",17)(22,"pre"),n(23,"      "),u(24,"code",18),n(25,`
    `),l()(),a(26,"div",19)(27,"pre"),n(28,"      "),u(29,"code",20),n(30,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,9,"TABLES.titles.footerRowTable")," "),t(3),_(s(6,11,"TABLES.subtitles.totalAtFooter")),t(4),p("dataSource",d.transactions),t(9),p("matHeaderRowDef",d.displayedColumns),t(),p("matRowDefColumns",d.displayedColumns),t(),p("matFooterRowDef",d.displayedColumns),t(4),p("highlight",d.codeForFooterRowTable),t(5),p("highlightAuto",d.codeForFooterRowTableTs))},dependencies:[L,v,D,I,A,E,B,de,ue,P,H,ce,R,N,fe,M,$,V,j,k,O,F,S,me,y],styles:["tr.mat-footer-row[_ngcontent-%COMP%]{font-weight:700}"]})}}return e})();var Pt=`  <div class="example-container">
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
`;var Ht=`  import { HttpClient } from '@angular/common/http';
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
`;function La(e,o){e&1&&u(0,"mat-spinner")}function Fa(e,o){e&1&&(a(0,"div",23),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.messages.rateLimitReached")," "))}function ja(e,o){if(e&1&&(a(0,"div",5),b(1,La,1,0,"mat-spinner"),b(2,Fa,3,3,"div",23),l()),e&2){let i=C();t(),T(i.isLoadingResults?1:-1),t(),T(i.isRateLimitReached?2:-1)}}function ka(e,o){e&1&&(a(0,"th",24),n(1," # "),l())}function Oa(e,o){if(e&1&&(a(0,"td",25),n(1),l()),e&2){let i=o.$implicit;t(),_(i.number)}}function $a(e,o){e&1&&(a(0,"th",24),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.title")," "))}function Va(e,o){if(e&1&&(a(0,"td",25),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.title.slice(0,50),"... ")}}function Ja(e,o){e&1&&(a(0,"th",24),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.state")," "))}function Wa(e,o){if(e&1&&(a(0,"td",25)(1,"span",26),n(2),l()()),e&2){let i=o.$implicit;t(2),r(" ",i.state," ")}}function Ua(e,o){e&1&&(a(0,"th",27),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.created")," "))}function za(e,o){if(e&1&&(a(0,"td",28)(1,"div",29),u(2,"i-tabler",30),n(3),m(4,"date"),l()()),e&2){let i=o.$implicit;t(3),r("",s(4,1,i.created_at)," ")}}function Ya(e,o){e&1&&u(0,"tr",31)}function Ga(e,o){e&1&&u(0,"tr",32)}var Bt=(()=>{class e{constructor(i){this._httpClient=i,this.codeForHttpRowTable=Pt,this.codeForHttpRowTableTs=Ht,this.displayedColumns=["created","state","number","title"],this.exampleDatabase=null,this.data=[],this.resultsLength=0,this.isLoadingResults=!0,this.isRateLimitReached=!1,this.paginator=Object.create(null),this.sort=Object.create(null)}ngAfterViewInit(){this.exampleDatabase=new Ne(this._httpClient),this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),je(this.sort.sortChange,this.paginator.page).pipe(Oe({}),$e(()=>(this.isLoadingResults=!0,this.exampleDatabase.getRepoIssues(this.sort.active,this.sort.direction,this.paginator.pageIndex))),Fe(i=>(this.isLoadingResults=!1,this.isRateLimitReached=!1,this.resultsLength=i.total_count,i.items)),ke(()=>(this.isLoadingResults=!1,this.isRateLimitReached=!0,Le([])))).subscribe(i=>this.data=i)}static{this.\u0275fac=function(c){return new(c||e)(le(qe))}}static{this.\u0275cmp=w({type:e,selectors:[["app-http-table"]],viewQuery:function(c,d){if(c&1&&re(K,5)(ae,5),c&2){let x;te(x=ie())&&(d.paginator=x.first),te(x=ie())&&(d.sort=x.first)}},decls:37,vars:15,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"example-container"],[1,"example-loading-shade"],[1,"example-table-container","responsive-table"],["mat-table","","matSort","","matSortActive","created","matSortDisableClear","","matSortDirection","desc",1,"example-table",3,"dataSource"],["matColumnDef","number"],["mat-header-cell","","class","f-w-600  f-s-16",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","state"],["matColumnDef","created"],["mat-header-cell","","mat-sort-header","","disableClear","","class","f-w-600  f-s-16 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"example-rate-limit-reached"],["mat-header-cell","",1,"f-w-600","f-s-16"],["mat-cell",""],[1,"bg-light-primary","text-primary","rounded-pill","p-x-8","p-y-4","f-s-12","f-w-500"],["mat-header-cell","","mat-sort-header","","disableClear","",1,"f-w-600","f-s-16","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center","gap-8"],["name","calendar-event",1,"icon-18"],["mat-header-row",""],["mat-row",""]],template:function(c,d){c&1&&(a(0,"app-code-view",0)(1,"h4",1),n(2),m(3,"translate"),a(4,"span",2),n(5),m(6,"translate"),l()(),a(7,"div",3)(8,"div",4),b(9,ja,3,2,"div",5),a(10,"div",6)(11,"table",7),g(12,8),f(13,ka,2,0,"th",9)(14,Oa,2,1,"td",10),h(),g(15,11),f(16,$a,3,3,"th",9)(17,Va,2,1,"td",10),h(),g(18,12),f(19,Ja,3,3,"th",9)(20,Wa,3,1,"td",10),h(),g(21,13),f(22,Ua,3,3,"th",14)(23,za,5,3,"td",15),h(),f(24,Ya,1,0,"tr",16)(25,Ga,1,0,"tr",17),l()(),u(26,"mat-paginator",18),l()(),a(27,"div",19)(28,"pre"),n(29,"      "),u(30,"code",20),n(31,`
    `),l()(),a(32,"div",21)(33,"pre"),n(34,"      "),u(35,"code",22),n(36,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,11,"TABLES.titles.httpTable")," "),t(3),_(s(6,13,"TABLES.subtitles.getDataHttp")),t(4),T(d.isLoadingResults||d.isRateLimitReached?9:-1),t(2),p("dataSource",d.data),t(13),p("matHeaderRowDef",d.displayedColumns),t(),p("matRowDefColumns",d.displayedColumns),t(),p("length",d.resultsLength)("pageSize",30),t(4),p("highlight",d.codeForHttpRowTable),t(5),p("highlightAuto",d.codeForHttpRowTableTs))},dependencies:[L,v,D,I,A,E,B,P,H,R,N,M,pe,K,nt,at,$,pt,st,Ee,ae,ve,V,j,k,O,F,S,Qe,y],styles:[".example-container[_ngcontent-%COMP%]{position:relative;min-height:200px}.example-table-container[_ngcontent-%COMP%]{position:relative;max-height:400px;overflow:auto}.example-loading-shade[_ngcontent-%COMP%]{position:absolute;inset:0 0 56px;background:#00000026;z-index:1;display:flex;align-items:center;justify-content:center}.example-rate-limit-reached[_ngcontent-%COMP%]{color:#980000;max-width:360px;text-align:center}.mat-column-number[_ngcontent-%COMP%], .mat-column-state[_ngcontent-%COMP%]{max-width:64px}.mat-column-created[_ngcontent-%COMP%]{max-width:124px}"]})}}return e})(),Ne=class{constructor(o){this._httpClient=o}getRepoIssues(o,i,c){let x=`https://api.github.com/search/issues?q=repo:angular/components&sort=${o}&order=${i}&page=${c+1}`;return this._httpClient.get(x)}};var Rt=`  <div class="table-responsive m-t-30">
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
              <img src="assets/images/profile/user-1.jpg" alt="profile" class="rounded-circle" width="40" />
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
`;var Nt=`  import { Component, ViewChild } from '@angular/core';
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
`;var Ka=()=>[5,10,25,100];function Xa(e,o){e&1&&(a(0,"mat-header-cell",24),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.id")," "))}function Za(e,o){if(e&1&&(a(0,"mat-cell",25),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.id," ")}}function en(e,o){e&1&&(a(0,"mat-header-cell",26),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.progress")," "))}function tn(e,o){if(e&1&&(a(0,"mat-cell"),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.progress,"% ")}}function an(e,o){e&1&&(a(0,"mat-header-cell",26),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.name")," "))}function nn(e,o){if(e&1&&(a(0,"mat-cell")(1,"div",27),u(2,"img",28),a(3,"span",29),n(4),l()()()),e&2){let i=o.$implicit;t(4),_(i.name)}}function on(e,o){e&1&&(a(0,"mat-header-cell",26),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.color")," "))}function ln(e,o){if(e&1&&(a(0,"mat-cell"),n(1),l()),e&2){let i=o.$implicit;Ue("color",i.color),t(),r(" ",i.color," ")}}function rn(e,o){e&1&&u(0,"mat-header-row")}function mn(e,o){e&1&&u(0,"mat-row")}var Lt=["maroon","red","orange","yellow","olive","green","purple","fuchsia","lime","teal","aqua","blue","navy","black","gray"],De=["Maia","Asher","Olivia","Atticus","Amelia","Jack","Charlotte","Theodore","Isla","Oliver","Isabella","Jasper","Cora","Levi","Violet","Arthur","Mia","Thomas","Elizabeth"],Ft=(()=>{class e{constructor(i){this.codeForMixTable=Rt,this.codeForMixTableTs=Nt,this.displayedColumns=["id","name","progress","color"],this.paginator=Object.create(null),this.sort=Object.create(null),i.observe(["(max-width: 600px)"]).subscribe(d=>{this.displayedColumns=d.matches?["id","name","progress","color"]:["id","name","progress","color"]});let c=[];for(let d=1;d<=100;d++)c.push(sn(d));this.dataSource=new X(c)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(i){let c=i.target.value;this.dataSource.filter=c.trim().toLowerCase()}static{this.\u0275fac=function(c){return new(c||e)(le(se))}}static{this.\u0275cmp=w({type:e,selectors:[["app-mix-table"]],viewQuery:function(c,d){if(c&1&&re(K,7)(ae,7),c&2){let x;te(x=ie())&&(d.paginator=x.first),te(x=ie())&&(d.sort=x.first)}},decls:41,vars:20,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],["appearance","outline",1,"w-100","hide-hint","m-t-16"],["matInput","",3,"keyup","placeholder"],[1,"table-responsive","m-t-30"],["matSort","",3,"dataSource"],["matColumnDef","id"],["mat-sort-header","","class","f-w-600  f-s-16 p-l-0",4,"matHeaderCellDef"],["class","p-l-0",4,"matCellDef"],["matColumnDef","progress"],["mat-sort-header","","class","f-w-600  f-s-16",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","color"],[3,"color",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-sort-header","",1,"f-w-600","f-s-16","p-l-0"],[1,"p-l-0"],["mat-sort-header","",1,"f-w-600","f-s-16"],[1,"d-flex","align-items-center","gap-12","p-y-16"],["src","assets/images/profile/user-1.jpg","alt","profile","width","40",1,"rounded-circle"],[1,"f-s-16","f-w-600"]],template:function(c,d){c&1&&(a(0,"app-code-view",0)(1,"h4",1),n(2),m(3,"translate"),a(4,"span",2),n(5),m(6,"translate"),l()(),a(7,"div",3)(8,"mat-form-field",4)(9,"mat-label"),n(10),m(11,"translate"),l(),a(12,"input",5),m(13,"translate"),U("keyup",function(oe){return d.applyFilter(oe)}),l()(),a(14,"div",6)(15,"mat-table",7),g(16,8),f(17,Xa,3,3,"mat-header-cell",9)(18,Za,2,1,"mat-cell",10),h(),g(19,11),f(20,en,3,3,"mat-header-cell",12)(21,tn,2,1,"mat-cell",13),h(),g(22,14),f(23,an,3,3,"mat-header-cell",12)(24,nn,5,1,"mat-cell",13),h(),g(25,15),f(26,on,3,3,"mat-header-cell",12)(27,ln,2,3,"mat-cell",16),h(),f(28,rn,1,0,"mat-header-row",17)(29,mn,1,0,"mat-row",18),l(),u(30,"mat-paginator",19),l()(),a(31,"div",20)(32,"pre"),n(33,"      "),u(34,"code",21),n(35,`
    `),l()(),a(36,"div",22)(37,"pre"),n(38,"      "),u(39,"code",23),n(40,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,11,"TABLES.titles.mixTable")," "),t(3),_(s(6,13,"TABLES.subtitles.allFunctionality")),t(5),_(s(11,15,"TABLES.labels.searchHere")),t(2),p("placeholder",s(13,17,"TABLES.labels.filterPlaceholder")),t(3),p("dataSource",d.dataSource),t(13),p("matHeaderRowDef",d.displayedColumns),t(),p("matRowDefColumns",d.displayedColumns),t(),p("pageSizeOptions",ne(19,Ka)),t(4),p("highlight",d.codeForMixTable),t(5),p("highlightAuto",d.codeForMixTableTs))},dependencies:[L,v,D,I,A,E,B,P,H,R,N,M,pe,K,xe,Te,be,ye,we,j,k,O,F,S,y],encapsulation:2})}}return e})();function sn(e){let o=De[Math.round(Math.random()*(De.length-1))]+" "+De[Math.round(Math.random()*(De.length-1))].charAt(0)+".";return{id:e.toString(),name:o,progress:Math.round(Math.random()*100).toString(),color:Lt[Math.round(Math.random()*(Lt.length-1))]}}var jt=`  <div class="table-responsive">
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
`;var kt=`  import { Component, OnInit } from '@angular/core';
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
          { img: 'assets/images/products/s1.jpg', item: 'Beach ball', cost: 4 },
          { img: 'assets/images/products/s2.jpg', item: 'Towel', cost: 5 },
          { img: 'assets/images/products/s3.jpg', item: 'Frisbee', cost: 2 },
          { img: 'assets/images/products/s4.jpg', item: 'Sunscreen', cost: 4 },
          { img: 'assets/images/products/s5.jpg', item: 'Cooler', cost: 25 },
          { img: 'assets/images/products/s6.jpg', item: 'Swim suit', cost: 15 },
        ];
      
        /** Gets the total cost of all transactions. */
        getTotalCost(): any {
          return this.transactions
            .map((t) => t.cost)
            .reduce((acc, value) => acc + value, 0);
        }

    }
`;var pn=()=>["item-description","cost-description"],dn=()=>["disclaimer"];function cn(e,o){e&1&&(a(0,"th",26),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.item")," "))}function un(e,o){if(e&1&&(a(0,"td",27)(1,"div",28),u(2,"img",29),a(3,"span",30),n(4),l()()()),e&2){let i=o.$implicit;t(2),p("src",i.img,J),t(2),r("",i.item," ")}}function fn(e,o){e&1&&(a(0,"td",31),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.total")," "))}function gn(e,o){e&1&&(a(0,"th",26),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.cost")," "))}function hn(e,o){if(e&1&&(a(0,"td",27),n(1),m(2,"currency"),l()),e&2){let i=o.$implicit;t(),r(" ",s(2,1,i.cost)," ")}}function Cn(e,o){if(e&1&&(a(0,"td",32),n(1),m(2,"currency"),l()),e&2){let i=C();t(),r(" ",s(2,1,i.getTotalCost())," ")}}function bn(e,o){e&1&&(a(0,"th",33),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.messages.itemPurchasedDesc")," "))}function Tn(e,o){e&1&&(a(0,"th",33),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.messages.costInUSD")," "))}function _n(e,o){e&1&&(a(0,"td",34),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.messages.disclaimerCost")," "))}function xn(e,o){e&1&&u(0,"tr",35)}function wn(e,o){e&1&&u(0,"tr",36)}function yn(e,o){e&1&&u(0,"tr",37)}function Sn(e,o){e&1&&u(0,"tr",38)}function Mn(e,o){e&1&&u(0,"tr",39)}var Ot=(()=>{class e{getTotalCost(){return this.transactions.map(i=>i.cost).reduce((i,c)=>i+c,0)}constructor(){this.codeForMultiHeaderFooterTable=jt,this.codeForMultiHeaderFooterTableTs=kt,this.displayedColumns=["item","cost"],this.transactions=[{img:"assets/images/products/s1.jpg",item:"Beach ball",cost:4},{img:"assets/images/products/s2.jpg",item:"Towel",cost:5},{img:"assets/images/products/s3.jpg",item:"Frisbee",cost:2},{img:"assets/images/products/s4.jpg",item:"Sunscreen",cost:4},{img:"assets/images/products/s5.jpg",item:"Cooler",cost:25},{img:"assets/images/products/s6.jpg",item:"Swim suit",cost:15}]}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-multi-header-footer-table"]],decls:39,vars:17,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","item"],["mat-header-cell","","class","f-w-600  f-s-16",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","","class","f-w-600  f-s-16",4,"matFooterCellDef"],["matColumnDef","cost"],["mat-footer-cell","",4,"matFooterCellDef"],["matColumnDef","item-description"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["matColumnDef","cost-description"],["matColumnDef","disclaimer"],["mat-footer-cell","","colspan","2","class","text-danger fw-medium",4,"matFooterCellDef"],["mat-header-row","","class","example-first-header-row",4,"matHeaderRowDef"],["mat-header-row","","class","example-second-header-row",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","","class","example-first-footer-row",4,"matFooterRowDef"],["mat-footer-row","","class","example-second-footer-row",4,"matFooterRowDef"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"f-w-600","f-s-16"],["mat-cell",""],[1,"d-flex","align-items-center","gap-12"],["alt","product","width","45",1,"rounded",3,"src"],[1,"f-s-16","f-w-600"],["mat-footer-cell","",1,"f-w-600","f-s-16"],["mat-footer-cell",""],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-footer-cell","","colspan","2",1,"text-danger","fw-medium"],["mat-header-row","",1,"example-first-header-row"],["mat-header-row","",1,"example-second-header-row"],["mat-row",""],["mat-footer-row","",1,"example-first-footer-row"],["mat-footer-row","",1,"example-second-footer-row"]],template:function(c,d){c&1&&(a(0,"app-code-view",0)(1,"h4",1),n(2),m(3,"translate"),a(4,"span",2),n(5),m(6,"translate"),l()(),a(7,"div",3)(8,"div",4)(9,"table",5),g(10,6),f(11,cn,3,3,"th",7)(12,un,5,2,"td",8)(13,fn,3,3,"td",9),h(),g(14,10),f(15,gn,3,3,"th",7)(16,hn,3,3,"td",8)(17,Cn,3,3,"td",11),h(),g(18,12),f(19,bn,3,3,"th",13),h(),g(20,14),f(21,Tn,3,3,"th",13),h(),g(22,15),f(23,_n,3,3,"td",16),h(),f(24,xn,1,0,"tr",17)(25,wn,1,0,"tr",18)(26,yn,1,0,"tr",19)(27,Sn,1,0,"tr",20)(28,Mn,1,0,"tr",21),l()()(),a(29,"div",22)(30,"pre"),n(31,"      "),u(32,"code",23),n(33,`
    `),l()(),a(34,"div",24)(35,"pre"),n(36,"      "),u(37,"code",25),n(38,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,11,"TABLES.titles.multiHeaderFooter")," "),t(3),_(s(6,13,"TABLES.subtitles.paginationSearch")),t(4),p("dataSource",d.transactions),t(15),p("matHeaderRowDef",d.displayedColumns),t(),p("matHeaderRowDef",ne(15,pn)),t(),p("matRowDefColumns",d.displayedColumns),t(),p("matFooterRowDef",d.displayedColumns),t(),p("matFooterRowDef",ne(16,dn)),t(4),p("highlight",d.codeForMultiHeaderFooterTable),t(5),p("highlightAuto",d.codeForMultiHeaderFooterTableTs))},dependencies:[M,L,v,D,I,A,E,B,de,ue,P,H,ce,R,N,fe,$,V,j,k,O,F,S,me,y],styles:[".example-first-header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:none}.example-second-header-row[_ngcontent-%COMP%]{font-style:italic}.example-first-footer-row[_ngcontent-%COMP%]{font-weight:700}"]})}}return e})();var $t=`  <div class="table-responsive">
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
`;var Vt=`  import { Component, ViewChild } from '@angular/core';
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
`;var vn=()=>[5,10,20];function En(e,o){e&1&&(a(0,"mat-header-cell",26),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.assigned")," "))}function Dn(e,o){if(e&1&&(a(0,"mat-cell",27)(1,"div",28),u(2,"img",29),a(3,"div",30)(4,"h6",31),n(5),l(),a(6,"span",32),n(7),l()()()()),e&2){let i=o.$implicit;t(2),p("src",i.imagePath,J),t(3),r(" ",i.uname," "),t(2),r(" ",i.position," ")}}function An(e,o){e&1&&(a(0,"mat-header-cell",33),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.name")," "))}function Pn(e,o){if(e&1&&(a(0,"mat-cell",34),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.productName)}}function Hn(e,o){e&1&&(a(0,"mat-header-cell",33),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.priority")," "))}function In(e,o){if(e&1&&(a(0,"span",36),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Bn(e,o){if(e&1&&(a(0,"span",37),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Rn(e,o){if(e&1&&(a(0,"span",38),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Nn(e,o){if(e&1&&(a(0,"span",39),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Ln(e,o){if(e&1&&(a(0,"span",40),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Fn(e,o){if(e&1&&(a(0,"mat-cell",35),b(1,In,3,3,"span",36),b(2,Bn,3,3,"span",37),b(3,Rn,3,3,"span",38),b(4,Nn,3,3,"span",39),b(5,Ln,3,3,"span",40),l()),e&2){let i=o.$implicit;t(),T(i.priority=="low"?1:-1),t(),T(i.priority=="medium"?2:-1),t(),T(i.priority=="high"?3:-1),t(),T(i.priority=="critical"?4:-1),t(),T(i.priority=="moderate"?5:-1)}}function jn(e,o){e&1&&(a(0,"mat-header-cell",41),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.budget")," "))}function kn(e,o){if(e&1&&(a(0,"mat-cell",42),n(1),l()),e&2){let i=o.$implicit;t(),r(" $",i.budget,"k")}}function On(e,o){e&1&&u(0,"mat-header-row")}function $n(e,o){e&1&&u(0,"mat-row")}var Vn=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"}],Jt=(()=>{class e{constructor(i){this.codeForPaginationTable=$t,this.codeForPaginationTableTs=Vt,this.displayedColumns=["assigned","name","priority","budget"],this.dataSource=new X(Vn),this.paginator=Object.create(null),i.observe(["(max-width: 600px)"]).subscribe(c=>{this.displayedColumns=c.matches?["assigned","name","priority","budget"]:["assigned","name","priority","budget"]})}ngAfterViewInit(){this.dataSource.paginator=this.paginator}static{this.\u0275fac=function(c){return new(c||e)(le(se))}}static{this.\u0275cmp=w({type:e,selectors:[["app-pagination-table"]],viewQuery:function(c,d){if(c&1&&re(K,7),c&2){let x;te(x=ie())&&(d.paginator=x.first)}},decls:37,vars:15,consts:[["table",""],["paginator",""],[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],[3,"dataSource"],["matColumnDef","assigned"],["class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["class","p-16 p-l-0",4,"matCellDef"],["matColumnDef","name"],["class","f-w-600  f-s-14",4,"matHeaderCellDef"],["class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["class","p-16",4,"matCellDef"],["matColumnDef","budget"],["class","f-w-600  f-s-14 text-right p-r-0",4,"matHeaderCellDef"],["class","p-16 f-s-14 p-r-0 text-right",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],[1,"f-w-600","f-s-14","p-l-0"],[1,"p-16","p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],[1,"f-w-600","f-s-14"],[1,"f-s-14"],[1,"p-16"],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"f-w-600","f-s-14","text-right","p-r-0"],[1,"p-16","f-s-14","p-r-0","text-right"]],template:function(c,d){c&1&&(a(0,"app-code-view",2)(1,"h4",3),n(2),m(3,"translate"),a(4,"span",4),n(5),m(6,"translate"),l()(),a(7,"div",5)(8,"div",6)(9,"mat-table",7,0),g(11,8),f(12,En,3,3,"mat-header-cell",9)(13,Dn,8,3,"mat-cell",10),h(),g(14,11),f(15,An,3,3,"mat-header-cell",12)(16,Pn,2,1,"mat-cell",13),h(),g(17,14),f(18,Hn,3,3,"mat-header-cell",12)(19,Fn,6,5,"mat-cell",15),h(),g(20,16),f(21,jn,3,3,"mat-header-cell",17)(22,kn,2,1,"mat-cell",18),h(),f(23,On,1,0,"mat-header-row",19)(24,$n,1,0,"mat-row",20),l(),u(25,"mat-paginator",21,1),l()(),a(27,"div",22)(28,"pre"),n(29,"      "),u(30,"code",23),n(31,`
    `),l()(),a(32,"div",24)(33,"pre"),n(34,"      "),u(35,"code",25),n(36,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,10,"TABLES.titles.paginationTable")," "),t(3),_(s(6,12,"TABLES.subtitles.paginationMore")),t(4),p("dataSource",d.dataSource),t(14),p("matHeaderRowDef",d.displayedColumns),t(),p("matRowDefColumns",d.displayedColumns),t(),p("pageSize",10)("pageSizeOptions",ne(14,vn)),t(5),p("highlight",d.codeForPaginationTable),t(5),p("highlightAuto",d.codeForPaginationTableTs))},dependencies:[M,L,v,D,I,A,E,B,P,H,R,N,$,pe,K,V,j,k,O,F,S,W,y],encapsulation:2})}}return e})();var Wt=`  <div class="table-responsive">
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
`;var Ut=`  import { Component, OnInit } from '@angular/core';
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
`;function Jn(e,o){e&1&&(a(0,"th",23),n(1," $implicit "),l())}function Wn(e,o){if(e&1&&(a(0,"td",24),n(1),l()),e&2){let i=o.$implicit;t(),_(i)}}function Un(e,o){e&1&&(a(0,"th",25),n(1," index "),l())}function zn(e,o){if(e&1&&(a(0,"td",26),n(1),l()),e&2){let i=o.index;t(),_(i)}}function Yn(e,o){e&1&&(a(0,"th",25),n(1," count "),l())}function Gn(e,o){if(e&1&&(a(0,"td",26),n(1),l()),e&2){let i=o.count;t(),_(i)}}function Qn(e,o){e&1&&(a(0,"th",25),n(1," first "),l())}function qn(e,o){if(e&1&&(a(0,"td",26),n(1),l()),e&2){let i=o.first;t(),_(i)}}function Kn(e,o){e&1&&(a(0,"th",25),n(1," last "),l())}function Xn(e,o){if(e&1&&(a(0,"td",26),n(1),l()),e&2){let i=o.last;t(),_(i)}}function Zn(e,o){e&1&&(a(0,"th",25),n(1," even "),l())}function eo(e,o){if(e&1&&(a(0,"td",26),n(1),l()),e&2){let i=o.even;t(),_(i)}}function to(e,o){e&1&&(a(0,"th",25),n(1," odd "),l())}function io(e,o){if(e&1&&(a(0,"td",26),n(1),l()),e&2){let i=o.odd;t(),_(i)}}function ao(e,o){e&1&&u(0,"tr",27)}function no(e,o){e&1&&u(0,"tr",28)}var zt=(()=>{class e{constructor(){this.codeForRowContextTable=Wt,this.codeForRowContextTableTs=Ut,this.displayedColumns=["$implicit","index","count","first","last","even","odd"],this.data=["one","two","three","four","five"]}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-row-context-table"]],decls:43,vars:12,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","$implicit"],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["matColumnDef","index"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","count"],["matColumnDef","first"],["matColumnDef","last"],["matColumnDef","even"],["matColumnDef","odd"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],["mat-cell","",1,"p-l-0"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(c,d){c&1&&(a(0,"app-code-view",0)(1,"h4",1),n(2),m(3,"translate"),a(4,"span",2),n(5),m(6,"translate"),l()(),a(7,"div",3)(8,"div",4)(9,"table",5),g(10,6),f(11,Jn,2,0,"th",7)(12,Wn,2,1,"td",8),h(),g(13,9),f(14,Un,2,0,"th",10)(15,zn,2,1,"td",11),h(),g(16,12),f(17,Yn,2,0,"th",10)(18,Gn,2,1,"td",11),h(),g(19,13),f(20,Qn,2,0,"th",10)(21,qn,2,1,"td",11),h(),g(22,14),f(23,Kn,2,0,"th",10)(24,Xn,2,1,"td",11),h(),g(25,15),f(26,Zn,2,0,"th",10)(27,eo,2,1,"td",11),h(),g(28,16),f(29,to,2,0,"th",10)(30,io,2,1,"td",11),h(),f(31,ao,1,0,"tr",17)(32,no,1,0,"tr",18),l()()(),a(33,"div",19)(34,"pre"),n(35,"      "),u(36,"code",20),n(37,`
    `),l()(),a(38,"div",21)(39,"pre"),n(40,"      "),u(41,"code",22),n(42,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,8,"TABLES.titles.rowContextTable")," "),t(3),_(s(6,10,"TABLES.subtitles.sellNewProducts")),t(4),p("dataSource",d.data),t(22),p("matHeaderRowDef",d.displayedColumns),t(),p("matRowDefColumns",d.displayedColumns),t(4),p("highlight",d.codeForRowContextTable),t(5),p("highlightAuto",d.codeForRowContextTableTs))},dependencies:[M,L,v,D,I,A,E,B,P,H,R,N,V,j,k,O,F,S,y],encapsulation:2})}}return e})();var Yt=`  <div class="table-responsive">
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
`;var Gt=`  import { Component, OnInit } from '@angular/core';
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
`;function oo(e,o){if(e&1){let i=Z();a(0,"th",22)(1,"mat-checkbox",23),U("change",function(d){Q(i);let x=C();return q(d?x.masterToggle():null)}),l()()}if(e&2){let i=C();t(),p("checked",i.selection.hasValue()&&i.isAllSelected())("indeterminate",i.selection.hasValue()&&!i.isAllSelected()),Pe("aria-label",i.checkboxLabel())}}function lo(e,o){if(e&1){let i=Z();a(0,"td",24)(1,"mat-checkbox",25),U("click",function(d){return Q(i),q(d.stopPropagation())})("change",function(d){let x=Q(i).$implicit,oe=C();return q(d?oe.selection.toggle(x):null)}),l()()}if(e&2){let i=o.$implicit,c=C();t(),p("checked",c.selection.isSelected(i)),Pe("aria-label",c.checkboxLabel(i))}}function ro(e,o){e&1&&(a(0,"th",26),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.assigned")," "))}function mo(e,o){if(e&1&&(a(0,"td",27)(1,"div",28),u(2,"img",29),a(3,"div",30)(4,"h6",31),n(5),l(),a(6,"span",32),n(7),l()()()()),e&2){let i=o.$implicit;t(2),p("src",i.imagePath,J),t(3),r(" ",i.uname," "),t(2),r(" ",i.position," ")}}function so(e,o){e&1&&(a(0,"th",26),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.name")," "))}function po(e,o){if(e&1&&(a(0,"td",33),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.productName," ")}}function co(e,o){e&1&&(a(0,"th",26),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.priority")," "))}function uo(e,o){if(e&1&&(a(0,"span",34),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function fo(e,o){if(e&1&&(a(0,"span",35),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function go(e,o){if(e&1&&(a(0,"span",36),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function ho(e,o){if(e&1&&(a(0,"span",37),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Co(e,o){if(e&1&&(a(0,"span",38),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function bo(e,o){if(e&1&&(a(0,"td",27),b(1,uo,3,3,"span",34),b(2,fo,3,3,"span",35),b(3,go,3,3,"span",36),b(4,ho,3,3,"span",37),b(5,Co,3,3,"span",38),l()),e&2){let i=o.$implicit;t(),T(i.priority=="low"?1:-1),t(),T(i.priority=="medium"?2:-1),t(),T(i.priority=="high"?3:-1),t(),T(i.priority=="critical"?4:-1),t(),T(i.priority=="moderate"?5:-1)}}function To(e,o){e&1&&(a(0,"th",26),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.budget")," "))}function _o(e,o){if(e&1&&(a(0,"td",33),n(1),l()),e&2){let i=o.$implicit;t(),r(" $",i.budget,"k ")}}function xo(e,o){e&1&&u(0,"tr",39)}function wo(e,o){if(e&1){let i=Z();a(0,"tr",40),U("click",function(){let d=Q(i).$implicit,x=C();return q(x.selection.toggle(d))}),l()}}var yo=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"}],Qt=(()=>{class e{isAllSelected(){let i=this.selection.selected.length,c=this.dataSource.data.length;return i===c}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(i=>this.selection.select(i))}checkboxLabel(i){return i?`${this.selection.isSelected(i)?"deselect":"select"} row ${i.position+1}`:`${this.isAllSelected()?"select":"deselect"} all`}constructor(){this.codeForSelectionTable=Yt,this.codeForSelectionTableTs=Gt,this.displayedColumns=["select","assigned","name","priority","budget"],this.dataSource=new X(yo),this.selection=new it(!0,[])}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-selection-table"]],decls:37,vars:12,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","","class","p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["matColumnDef","assigned"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-cell","","class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["matColumnDef","budget"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"p-l-0"],["color","primary",3,"change","checked","indeterminate","aria-label"],["mat-cell","",1,"p-l-0"],["color","primary",3,"click","change","checked","aria-label"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell",""],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-cell","",1,"f-s-14"],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(c,d){c&1&&(a(0,"app-code-view",0)(1,"h4",1),n(2),m(3,"translate"),a(4,"span",2),n(5),m(6,"translate"),l()(),a(7,"div",3)(8,"div",4)(9,"table",5),g(10,6),f(11,oo,2,3,"th",7)(12,lo,2,2,"td",8),h(),g(13,9),f(14,ro,3,3,"th",10)(15,mo,8,3,"td",11),h(),g(16,12),f(17,so,3,3,"th",10)(18,po,2,1,"td",13),h(),g(19,14),f(20,co,3,3,"th",10)(21,bo,6,5,"td",11),h(),g(22,15),f(23,To,3,3,"th",10)(24,_o,2,1,"td",13),h(),f(25,xo,1,0,"tr",16)(26,wo,1,0,"tr",17),l()()(),a(27,"div",18)(28,"pre"),n(29,"      "),u(30,"code",19),n(31,`
    `),l()(),a(32,"div",20)(33,"pre"),n(34,"      "),u(35,"code",21),n(36,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,8,"TABLES.titles.selectionTable")," "),t(3),_(s(6,10,"TABLES.subtitles.singleOrMore")),t(4),p("dataSource",d.dataSource),t(16),p("matHeaderRowDef",d.displayedColumns),t(),p("matRowDefColumns",d.displayedColumns),t(4),p("highlight",d.codeForSelectionTable),t(5),p("highlightAuto",d.codeForSelectionTableTs))},dependencies:[M,L,v,D,I,A,E,B,P,H,R,N,$,Ze,Xe,V,j,k,O,F,S,W,y],encapsulation:2})}}return e})();var qt=`  <div class="table-responsive">
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
`;var Kt=`  import { LiveAnnouncer } from '@angular/cdk/a11y';
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
`;function So(e,o){e&1&&(a(0,"mat-header-cell",22),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.assigned")," "))}function Mo(e,o){if(e&1&&(a(0,"mat-cell",23)(1,"div",24),u(2,"img",25),a(3,"div",26)(4,"h6",27),n(5),l(),a(6,"span",28),n(7),l()()()()),e&2){let i=o.$implicit;t(2),p("src",i.imagePath,J),t(3),r(" ",i.uname," "),t(2),r(" ",i.position," ")}}function vo(e,o){e&1&&(a(0,"mat-header-cell",29),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.name")," "))}function Eo(e,o){if(e&1&&(a(0,"mat-cell",30),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.name," ")}}function Do(e,o){e&1&&(a(0,"mat-header-cell",29),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.priority")," "))}function Ao(e,o){if(e&1&&(a(0,"span",31),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Po(e,o){if(e&1&&(a(0,"span",32),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Ho(e,o){if(e&1&&(a(0,"span",33),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Io(e,o){if(e&1&&(a(0,"span",34),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Bo(e,o){if(e&1&&(a(0,"span",35),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Ro(e,o){if(e&1&&(a(0,"mat-cell"),b(1,Ao,3,3,"span",31),b(2,Po,3,3,"span",32),b(3,Ho,3,3,"span",33),b(4,Io,3,3,"span",34),b(5,Bo,3,3,"span",35),l()),e&2){let i=o.$implicit;t(),T(i.priority=="low"?1:-1),t(),T(i.priority=="medium"?2:-1),t(),T(i.priority=="high"?3:-1),t(),T(i.priority=="critical"?4:-1),t(),T(i.priority=="moderate"?5:-1)}}function No(e,o){e&1&&(a(0,"mat-header-cell",29),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.budget")," "))}function Lo(e,o){if(e&1&&(a(0,"mat-cell",30),n(1),l()),e&2){let i=o.$implicit;t(),r(" $",i.budget,"k ")}}function Fo(e,o){e&1&&u(0,"mat-header-row")}function jo(e,o){e&1&&u(0,"mat-row")}var ko=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",name:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",name:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",name:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",name:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:5,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",name:"Elite Admin",budget:3.9,priority:"low"},{id:6,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",name:"Real Homes Theme",budget:24.5,priority:"medium"}],Xt=(()=>{class e{constructor(){this.codeForSortableTable=qt,this.codeForSortableTableTs=Kt,this._liveAnnouncer=Ve(Ke),this.displayedColumns=["assigned","name","priority","budget"],this.dataSource=new X(ko),this.sort=Object.create(null)}ngAfterViewInit(){this.dataSource.sort=this.sort}announceSortChange(i){i.direction?this._liveAnnouncer.announce(`Sorted ${i.direction}ending`):this._liveAnnouncer.announce("Sorting cleared")}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-sortable-table"]],viewQuery:function(c,d){if(c&1&&re(ae,7),c&2){let x;te(x=ie())&&(d.sort=x.first)}},decls:35,vars:12,consts:[["table",""],[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive"],["matSort","",1,"mat-elevation-z8",2,"max-height","500px","overflow","auto",3,"matSortChange","dataSource"],["matColumnDef","assigned"],["mat-sort-header","uname","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["class","p-l-0",4,"matCellDef"],["matColumnDef","name"],["mat-sort-header","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],[4,"matCellDef"],["matColumnDef","budget"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-sort-header","uname",1,"f-w-600","f-s-14","p-l-0"],[1,"p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-sort-header","",1,"f-w-600","f-s-14"],[1,"f-s-14"],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"]],template:function(c,d){if(c&1){let x=Z();a(0,"app-code-view",1)(1,"h4",2),n(2),m(3,"translate"),a(4,"span",3),n(5),m(6,"translate"),l()(),a(7,"div",4)(8,"div",5)(9,"mat-table",6,0),U("matSortChange",function(Ae){return Q(x),q(d.announceSortChange(Ae))}),g(11,7),f(12,So,3,3,"mat-header-cell",8)(13,Mo,8,3,"mat-cell",9),h(),g(14,10),f(15,vo,3,3,"mat-header-cell",11)(16,Eo,2,1,"mat-cell",12),h(),g(17,13),f(18,Do,3,3,"mat-header-cell",11)(19,Ro,6,5,"mat-cell",14),h(),g(20,15),f(21,No,3,3,"mat-header-cell",11)(22,Lo,2,1,"mat-cell",12),h(),f(23,Fo,1,0,"mat-header-row",16)(24,jo,1,0,"mat-row",17),l()()(),a(25,"div",18)(26,"pre"),n(27,"      "),u(28,"code",19),n(29,`
    `),l()(),a(30,"div",20)(31,"pre"),n(32,"      "),u(33,"code",21),n(34,`
    `),l()()()}c&2&&(p("isTitle",!0),t(2),r(" ",s(3,8,"TABLES.titles.sortableTable")," "),t(3),_(s(6,10,"TABLES.subtitles.sortItems")),t(4),p("dataSource",d.dataSource),t(14),p("matHeaderRowDef",d.displayedColumns),t(),p("matRowDefColumns",d.displayedColumns),t(4),p("highlight",d.codeForSortableTable),t(5),p("highlightAuto",d.codeForSortableTableTs))},dependencies:[M,L,v,D,I,A,E,B,P,H,R,N,$,V,Ee,ae,ve,j,k,O,F,S,W,y],encapsulation:2})}}return e})();var Zt=`  <div class="table-responsive example-container">
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
`;var ei=`  import { Component, OnInit } from '@angular/core';
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
`;function Oo(e,o){e&1&&(a(0,"th",23),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.assigned")," "))}function $o(e,o){if(e&1&&(a(0,"td",24)(1,"div",25),u(2,"img",26),a(3,"div",27)(4,"h6",28),n(5),l(),a(6,"span",29),n(7),l()()()()),e&2){let i=o.$implicit;t(2),p("src",i.imagePath,J),t(3),r(" ",i.uname," "),t(2),r(" ",i.position," ")}}function Vo(e,o){e&1&&(a(0,"th",30),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.name")," "))}function Jo(e,o){if(e&1&&(a(0,"td",31),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.productName," ")}}function Wo(e,o){e&1&&(a(0,"th",30),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.priority")," "))}function Uo(e,o){if(e&1&&(a(0,"span",33),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function zo(e,o){if(e&1&&(a(0,"span",34),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Yo(e,o){if(e&1&&(a(0,"span",35),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Go(e,o){if(e&1&&(a(0,"span",36),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Qo(e,o){if(e&1&&(a(0,"span",37),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function qo(e,o){if(e&1&&(a(0,"td",32),b(1,Uo,3,3,"span",33),b(2,zo,3,3,"span",34),b(3,Yo,3,3,"span",35),b(4,Go,3,3,"span",36),b(5,Qo,3,3,"span",37),l()),e&2){let i=o.$implicit;t(),T(i.priority=="low"?1:-1),t(),T(i.priority=="medium"?2:-1),t(),T(i.priority=="high"?3:-1),t(),T(i.priority=="critical"?4:-1),t(),T(i.priority=="moderate"?5:-1)}}function Ko(e,o){e&1&&(a(0,"th",38),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.budget")))}function Xo(e,o){if(e&1&&(a(0,"td",31),n(1),l()),e&2){let i=o.$implicit;t(),r(" $",i.budget,"k ")}}function Zo(e,o){e&1&&u(0,"th",38)}function el(e,o){e&1&&(a(0,"td",32)(1,"mat-icon"),n(2,"more_vert"),l()())}function tl(e,o){e&1&&u(0,"tr",39)}function il(e,o){e&1&&u(0,"tr",40)}var al=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:5,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:6,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:7,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:8,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"}],ti=(()=>{class e{constructor(){this.codeForStickyColumnTable=Zt,this.codeForStickyColumnTableTs=ei,this.displayedColumns=["assigned","name","priority","budget","priority","name","budget","name"],this.dataSource=al}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-sticky-column-table"]],decls:37,vars:12,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive","example-container"],["mat-table","",3,"dataSource"],["matColumnDef","assigned","sticky",""],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","","class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["mat-cell","",4,"matCellDef"],["matColumnDef","budget",1,"f-w-600","f-s-14"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","star","stickyEnd",""],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell","",1,"f-s-14"],["mat-cell",""],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"],["mat-header-cell",""],["mat-header-row",""],["mat-row",""]],template:function(c,d){c&1&&(a(0,"app-code-view",0)(1,"h4",1),n(2),m(3,"translate"),a(4,"span",2),n(5),m(6,"translate"),l()(),a(7,"div",3)(8,"div",4)(9,"table",5),g(10,6),f(11,Oo,3,3,"th",7)(12,$o,8,3,"td",8),h(),g(13,9),f(14,Vo,3,3,"th",10)(15,Jo,2,1,"td",11),h(),g(16,12),f(17,Wo,3,3,"th",10)(18,qo,6,5,"td",13),h(),g(19,14),f(20,Ko,3,3,"th",15)(21,Xo,2,1,"td",11),h(),g(22,16),f(23,Zo,1,0,"th",15)(24,el,3,0,"td",13),h(),f(25,tl,1,0,"tr",17)(26,il,1,0,"tr",18),l()()(),a(27,"div",19)(28,"pre"),n(29,"      "),u(30,"code",20),n(31,`
    `),l()(),a(32,"div",21)(33,"pre"),n(34,"      "),u(35,"code",22),n(36,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,8,"TABLES.titles.stickyColumnTable")," "),t(3),_(s(6,10,"TABLES.subtitles.stickyColumnSub")),t(4),p("dataSource",d.dataSource),t(16),p("matHeaderRowDef",d.displayedColumns),t(),p("matRowDefColumns",d.displayedColumns),t(4),p("highlight",d.codeForStickyColumnTable),t(5),p("highlightAuto",d.codeForStickyColumnTableTs))},dependencies:[M,L,v,D,I,A,E,B,P,H,R,N,Me,Se,$,V,j,k,O,F,S,W,y],styles:[".example-container[_ngcontent-%COMP%]{height:400px;width:550px;overflow:auto}table[_ngcontent-%COMP%]{width:800px}td.mat-column-star[_ngcontent-%COMP%]{width:20px;padding-right:8px}th.mat-column-position[_ngcontent-%COMP%], td.mat-column-position[_ngcontent-%COMP%]{padding-left:8px}.mat-table-sticky[_ngcontent-%COMP%]:first-child{border-right:1px solid #e0e0e0}.mat-table-sticky[_ngcontent-%COMP%]:last-child{border-left:1px solid #e0e0e0}"]})}}return e})();var ii=`  <div class="table-responsive example-container">
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
`,ai=`  <div class="table-responsive example-container">
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
`;var ni=`  import { Component, OnInit } from '@angular/core';
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
          { img: 'assets/images/products/s1.jpg', item: 'Beach ball', cost: 4 },
          { img: 'assets/images/products/s2.jpg', item: 'Towel', cost: 5 },
          { img: 'assets/images/products/s3.jpg', item: 'Frisbee', cost: 2 },
          { img: 'assets/images/products/s4.jpg', item: 'Sunscreen', cost: 4 },
          { img: 'assets/images/products/s5.jpg', item: 'Cooler', cost: 25 },
          { img: 'assets/images/products/s6.jpg', item: 'Swim suit', cost: 15 },
        ];
      
        /** Gets the total cost of all transactions. */
        getTotalCost(): any {
          return this.transactions
            .map((t) => t.cost)
            .reduce((acc, value) => acc + value, 0);
        }

    }
`,oi=`  import { Component, OnInit } from '@angular/core';
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
`;function nl(e,o){e&1&&(a(0,"th",29),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.item")," "))}function ol(e,o){if(e&1&&(a(0,"td",30)(1,"div",31),u(2,"img",32),a(3,"span",33),n(4),l()()()),e&2){let i=o.$implicit;t(2),p("src",i.img,J),t(2),r("",i.item," ")}}function ll(e,o){e&1&&(a(0,"td",34),n(1),m(2,"translate"),l()),e&2&&(t(),_(s(2,1,"TABLES.columns.total")))}function rl(e,o){e&1&&(a(0,"th",35),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.cost")," "))}function ml(e,o){if(e&1&&(a(0,"td",36),n(1),m(2,"currency"),l()),e&2){let i=o.$implicit;t(),r(" ",s(2,1,i.cost)," ")}}function sl(e,o){if(e&1&&(a(0,"td",37),n(1),m(2,"currency"),l()),e&2){let i=C();t(),r(" ",s(2,1,i.getTotalCost())," ")}}function pl(e,o){e&1&&u(0,"tr",38)}function dl(e,o){e&1&&u(0,"tr",39)}function cl(e,o){e&1&&u(0,"tr",40)}function ul(e,o){e&1&&(a(0,"th",41),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.assigned")," "))}function fl(e,o){if(e&1&&(a(0,"td",30)(1,"div",42),u(2,"img",43),a(3,"div",44)(4,"h6",45),n(5),l(),a(6,"span",46),n(7),l()()()()),e&2){let i=o.$implicit;t(2),p("src",i.imagePath,J),t(3),r(" ",i.uname," "),t(2),r(" ",i.position," ")}}function gl(e,o){e&1&&(a(0,"th",47),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.name")," "))}function hl(e,o){if(e&1&&(a(0,"td",48),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.productName," ")}}function Cl(e,o){e&1&&(a(0,"th",47),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.priority")," "))}function bl(e,o){if(e&1&&(a(0,"span",49),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Tl(e,o){if(e&1&&(a(0,"span",50),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function _l(e,o){if(e&1&&(a(0,"span",51),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function xl(e,o){if(e&1&&(a(0,"span",52),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function wl(e,o){if(e&1&&(a(0,"span",53),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function yl(e,o){if(e&1&&(a(0,"td",36),b(1,bl,3,3,"span",49),b(2,Tl,3,3,"span",50),b(3,_l,3,3,"span",51),b(4,xl,3,3,"span",52),b(5,wl,3,3,"span",53),l()),e&2){let i=o.$implicit;t(),T(i.priority=="low"?1:-1),t(),T(i.priority=="medium"?2:-1),t(),T(i.priority=="high"?3:-1),t(),T(i.priority=="critical"?4:-1),t(),T(i.priority=="moderate"?5:-1)}}function Sl(e,o){e&1&&(a(0,"th",47),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.budget")," "))}function Ml(e,o){if(e&1&&(a(0,"td",48),n(1),l()),e&2){let i=o.$implicit;t(),r(" $",i.budget,"k ")}}function vl(e,o){e&1&&u(0,"tr",38)}function El(e,o){e&1&&u(0,"tr",39)}var Dl=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"},{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"}],li=(()=>{class e{getTotalCost(){return this.transactions.map(i=>i.cost).reduce((i,c)=>i+c,0)}constructor(){this.codeForStickyFooterTable=ii,this.codeForStickyFooterTableTs=ni,this.codeForStickyHeaderTable=ai,this.codeForStickyHeaderTableTs=oi,this.displayedColumns1=["assigned","name","priority","budget"],this.dataSource=Dl,this.displayedColumns=["item","cost"],this.transactions=[{img:"assets/images/products/s1.jpg",item:"Beach ball",cost:4},{img:"assets/images/products/s2.jpg",item:"Towel",cost:5},{img:"assets/images/products/s3.jpg",item:"Frisbee",cost:2},{img:"assets/images/roducts/s4.jpg",item:"Sunscreen",cost:4},{img:"assets/images/products/s5.jpg",item:"Cooler",cost:25},{img:"assets/images/products/s6.jpg",item:"Swim suit",cost:15}]}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-sticky-header-footer-table"]],decls:65,vars:27,consts:[[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"table-responsive","example-container"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","item"],["mat-header-cell","","class","f-w-600  f-s-16 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["mat-footer-cell","","class","p-l-0 f-w-600",4,"matFooterCellDef"],["matColumnDef","cost"],["mat-header-cell","","class","f-w-600  f-s-16",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef","matFooterRowDefSticky"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["matColumnDef","assigned"],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["matColumnDef","name"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","","class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["matColumnDef","budget"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-header-cell","",1,"f-w-600","f-s-16","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center","gap-12"],["alt","product","width","45",1,"rounded",3,"src"],[1,"f-s-16","f-w-600"],["mat-footer-cell","",1,"p-l-0","f-w-600"],["mat-header-cell","",1,"f-w-600","f-s-16"],["mat-cell",""],["mat-footer-cell",""],["mat-header-row",""],["mat-row",""],["mat-footer-row",""],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell","",1,"f-s-14"],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"]],template:function(c,d){c&1&&(a(0,"app-code-view",0)(1,"h4",1),n(2),m(3,"translate"),a(4,"span",2),n(5),m(6,"translate"),l()(),a(7,"div",3)(8,"div",4)(9,"table",5),g(10,6),f(11,nl,3,3,"th",7)(12,ol,5,2,"td",8)(13,ll,3,3,"td",9),h(),g(14,10),f(15,rl,3,3,"th",11)(16,ml,3,3,"td",12)(17,sl,3,3,"td",13),h(),f(18,pl,1,0,"tr",14)(19,dl,1,0,"tr",15)(20,cl,1,0,"tr",16),l()()(),a(21,"div",17)(22,"pre"),n(23,"      "),u(24,"code",18),n(25,`
    `),l()(),a(26,"div",19)(27,"pre"),n(28,"      "),u(29,"code",20),n(30,`
    `),l()()(),a(31,"app-code-view",0)(32,"h4",1),n(33),m(34,"translate"),a(35,"span",2),n(36),m(37,"translate"),l()(),a(38,"div",3)(39,"div",4)(40,"table",5),g(41,21),f(42,ul,3,3,"th",22)(43,fl,8,3,"td",8),h(),g(44,23),f(45,gl,3,3,"th",24)(46,hl,2,1,"td",25),h(),g(47,26),f(48,Cl,3,3,"th",24)(49,yl,6,5,"td",12),h(),g(50,27),f(51,Sl,3,3,"th",24)(52,Ml,2,1,"td",25),h(),f(53,vl,1,0,"tr",28)(54,El,1,0,"tr",15),l()()(),a(55,"div",17)(56,"pre"),n(57,"      "),u(58,"code",18),n(59,`
    `),l()(),a(60,"div",19)(61,"pre"),n(62,"      "),u(63,"code",20),n(64,`
    `),l()()()),c&2&&(p("isTitle",!0),t(2),r(" ",s(3,19,"TABLES.titles.stickyFooterTable")," "),t(3),_(s(6,21,"TABLES.subtitles.fixedFooterTotal")),t(4),p("dataSource",d.transactions),t(9),p("matHeaderRowDef",d.displayedColumns),t(),p("matRowDefColumns",d.displayedColumns),t(),p("matFooterRowDef",d.displayedColumns)("matFooterRowDefSticky",!0),t(4),p("highlight",d.codeForStickyFooterTable),t(5),p("highlightAuto",d.codeForStickyFooterTableTs),t(2),p("isTitle",!0),t(2),r(" ",s(34,23,"TABLES.titles.stickyHeaderTable")," "),t(3),_(s(37,25,"TABLES.subtitles.fixedHeader")),t(4),p("dataSource",d.dataSource),t(13),p("matHeaderRowDef",d.displayedColumns1)("matHeaderRowDefSticky",!0),t(),p("matRowDefColumns",d.displayedColumns1),t(4),p("highlight",d.codeForStickyHeaderTable),t(5),p("highlightAuto",d.codeForStickyHeaderTableTs))},dependencies:[M,L,v,D,I,A,E,B,de,ue,P,H,ce,R,N,fe,$,V,j,k,O,F,S,W,me,y],styles:[".example-container[_ngcontent-%COMP%]{height:270px;overflow:auto}tr.mat-footer-row[_ngcontent-%COMP%]{font-weight:700}.mat-table-sticky[_ngcontent-%COMP%]{border-top:1px solid #e0e0e0}"]})}}return e})();var ri=`  <mat-label class="f-s-14 f-w-600 d-block m-b-8 m-t-16">Filter</mat-label>
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
`;var mi=`  import { Component, OnInit } from '@angular/core';
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
`;function Al(e,o){e&1&&(a(0,"th",26),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.assigned")," "))}function Pl(e,o){if(e&1&&(a(0,"td",27)(1,"div",28),u(2,"img",29),a(3,"div",30)(4,"h6",31),n(5),l(),a(6,"span",32),n(7),l()()()()),e&2){let i=o.$implicit;t(2),p("src",i.imagePath,J),t(3),r(" ",i.uname," "),t(2),r(" ",i.position," ")}}function Hl(e,o){e&1&&(a(0,"th",33),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.name")," "))}function Il(e,o){if(e&1&&(a(0,"td",34),n(1),l()),e&2){let i=o.$implicit;t(),r(" ",i.productName," ")}}function Bl(e,o){e&1&&(a(0,"th",33),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.priority")," "))}function Rl(e,o){if(e&1&&(a(0,"span",36),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Nl(e,o){if(e&1&&(a(0,"span",37),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Ll(e,o){if(e&1&&(a(0,"span",38),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function Fl(e,o){if(e&1&&(a(0,"span",39),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function jl(e,o){if(e&1&&(a(0,"span",40),n(1),m(2,"titlecase"),l()),e&2){let i=C().$implicit;t(),r(" ",s(2,1,i.priority)," ")}}function kl(e,o){if(e&1&&(a(0,"td",35),b(1,Rl,3,3,"span",36),b(2,Nl,3,3,"span",37),b(3,Ll,3,3,"span",38),b(4,Fl,3,3,"span",39),b(5,jl,3,3,"span",40),l()),e&2){let i=o.$implicit;t(),T(i.priority=="low"?1:-1),t(),T(i.priority=="medium"?2:-1),t(),T(i.priority=="high"?3:-1),t(),T(i.priority=="critical"?4:-1),t(),T(i.priority=="moderate"?5:-1)}}function Ol(e,o){e&1&&(a(0,"th",33),n(1),m(2,"translate"),l()),e&2&&(t(),r(" ",s(2,1,"TABLES.columns.budget")," "))}function $l(e,o){if(e&1&&(a(0,"td",34),n(1),l()),e&2){let i=o.$implicit;t(),r(" $",i.budget,"k ")}}function Vl(e,o){e&1&&u(0,"tr",41)}function Jl(e,o){e&1&&u(0,"tr",42)}function Wl(e,o){if(e&1&&(a(0,"tr",43)(1,"td",44),n(2),m(3,"translate"),l()()),e&2){C();let i=We(13);t(2),Ye(" ",s(3,2,"TABLES.messages.noDataFilter"),' "',i.value,'" ')}}var Ul=[{id:1,imagePath:"assets/images/profile/user-1.jpg",uname:"Sunil Joshi",position:"Web Designer",productName:"Elite Admin",budget:3.9,priority:"low"},{id:2,imagePath:"assets/images/profile/user-2.jpg",uname:"Andrew McDownland",position:"Project Manager",productName:"Real Homes Theme",budget:24.5,priority:"medium"},{id:3,imagePath:"assets/images/profile/user-3.jpg",uname:"Christopher Jamil",position:"Project Manager",productName:"MedicalPro Theme",budget:12.8,priority:"high"},{id:4,imagePath:"assets/images/profile/user-4.jpg",uname:"Nirav Joshi",position:"Frontend Engineer",productName:"Hosting Press HTML",budget:2.4,priority:"critical"}],si=(()=>{class e{applyFilter(i){let c=i.target.value;this.dataSource.filter=c.trim().toLowerCase()}constructor(){this.codeForFilterableTable=ri,this.codeForFilterableTableTs=mi,this.displayedColumns=["assigned","name","priority","budget"],this.dataSource=new X(Ul)}ngOnInit(){}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=w({type:e,selectors:[["app-filterable-table"]],decls:41,vars:15,consts:[["input",""],[3,"isTitle"],["Ctitle",""],[1,"f-s-14","f-w-400","d-block"],["output",""],[1,"f-s-14","f-w-600","d-block","m-b-8","m-t-16"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Ex. ium",3,"keyup"],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","assigned"],["mat-header-cell","","class","f-w-600  f-s-14 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","p-l-0",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","class","f-w-600  f-s-14",4,"matHeaderCellDef"],["mat-cell","","class","f-s-14",4,"matCellDef"],["matColumnDef","priority"],["mat-cell","",4,"matCellDef"],["matColumnDef","budget"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"],["mat-header-cell","",1,"f-w-600","f-s-14","p-l-0"],["mat-cell","",1,"p-l-0"],[1,"d-flex","align-items-center"],["alt","users","width","40",1,"rounded-circle",3,"src"],[1,"m-l-16"],[1,"f-s-14","f-w-600"],[1,"f-s-14","f-s-12"],["mat-header-cell","",1,"f-w-600","f-s-14"],["mat-cell","",1,"f-s-14"],["mat-cell",""],[1,"bg-light-secondary","text-secondary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-primary","text-primary","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-warning","text-warning","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-error","text-error","rounded","f-w-600","p-6","p-y-4","f-s-12"],[1,"bg-light-success","text-success","rounded","f-w-600","p-6","p-y-4","f-s-12"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(c,d){if(c&1){let x=Z();a(0,"app-code-view",1)(1,"h4",2),n(2),m(3,"translate"),a(4,"span",3),n(5),m(6,"translate"),l()(),a(7,"div",4)(8,"mat-label",5),n(9),m(10,"translate"),l(),a(11,"mat-form-field",6)(12,"input",7,0),U("keyup",function(Ae){return Q(x),q(d.applyFilter(Ae))}),l()(),a(14,"div",8)(15,"table",9),g(16,10),f(17,Al,3,3,"th",11)(18,Pl,8,3,"td",12),h(),g(19,13),f(20,Hl,3,3,"th",14)(21,Il,2,1,"td",15),h(),g(22,16),f(23,Bl,3,3,"th",14)(24,kl,6,5,"td",17),h(),g(25,18),f(26,Ol,3,3,"th",14)(27,$l,2,1,"td",15),h(),f(28,Vl,1,0,"tr",19)(29,Jl,1,0,"tr",20)(30,Wl,4,4,"tr",21),l()()(),a(31,"div",22)(32,"pre"),n(33,"      "),u(34,"code",23),n(35,`
    `),l()(),a(36,"div",24)(37,"pre"),n(38,"      "),u(39,"code",25),n(40,`
    `),l()()()}c&2&&(p("isTitle",!0),t(2),r(" ",s(3,9,"TABLES.titles.filterableTable")," "),t(3),_(s(6,11,"TABLES.subtitles.searchItems")),t(4),_(s(10,13,"TABLES.labels.filter")),t(6),p("dataSource",d.dataSource),t(13),p("matHeaderRowDef",d.displayedColumns),t(),p("matRowDefColumns",d.displayedColumns),t(5),p("highlight",d.codeForFilterableTable),t(5),p("highlightAuto",d.codeForFilterableTableTs))},dependencies:[L,v,D,I,A,E,B,P,H,R,N,ot,M,xe,Te,be,$,ye,we,V,j,k,O,F,S,W,y],encapsulation:2})}}return e})();var Kp=[{path:"",children:[{path:"basic-table",component:_t,data:{title:"Basic Table",urls:[{title:"Home",url:""},{title:"Basic Table"}]}},{path:"dynamic-table",component:yt,data:{title:"Dynamic Table",urls:[{title:"Home",url:""},{title:"Dynamic Table"}]}},{path:"expand-table",component:vt,data:{title:"Expand Table",urls:[{title:"Home",url:""},{title:"Expand Table"}]}},{path:"filterable-table",component:si,data:{title:"Filterable Table",urls:[{title:"Home",url:""},{title:"Filterable Table"}]}},{path:"footer-row-table",component:At,data:{title:"Footer Row Table",urls:[{title:"Home",url:""},{title:"Footer Row Table"}]}},{path:"http-table",component:Bt,data:{title:"HTTP Table",urls:[{title:"Home",url:""},{title:"HTTP Table"}]}},{path:"mix-table",component:Ft,data:{title:"Mix Table",urls:[{title:"Home",url:""},{title:"Mix Table"}]}},{path:"multi-header-footer-table",component:Ot,data:{title:"Multi Header Footer Table",urls:[{title:"Home",url:""},{title:"Multi Header Footer Table"}]}},{path:"pagination-table",component:Jt,data:{title:"Pagination Table",urls:[{title:"Home",url:""},{title:"Pagination Table"}]}},{path:"row-context-table",component:zt,data:{title:"Row Context Table",urls:[{title:"Home",url:""},{title:"Row Context Table"}]}},{path:"selection-table",component:Qt,data:{title:"Selection Table",urls:[{title:"Home",url:""},{title:"Selection Table"}]}},{path:"sortable-table",component:Xt,data:{title:"Sortable Table",urls:[{title:"Home",url:""},{title:"Sortable Table"}]}},{path:"sticky-column-table",component:ti,data:{title:"Sticky Column Table",urls:[{title:"Home",url:""},{title:"Sticky Column Table"}]}},{path:"sticky-header-footer-table",component:li,data:{title:"Sticky Header Footer Table",urls:[{title:"Home",url:""},{title:"Sticky Header Footer Table"}]}}]}];export{Kp as TablesRoutes};
