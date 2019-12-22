import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdpostComponent } from './ad-post.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const ROUTES: Routes = [
  { path: '', component: AdpostComponent, pathMatch: 'full' }
];


export class AdpostModule { }
