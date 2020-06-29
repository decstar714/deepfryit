import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ImageUploadComponent } from './image-upload.component'
import { HttpClientModule } from '@angular/common/http'
import { ImageUploadService } from '../image-upload.service';
import { uptime } from 'process';

@NgModule({
  declarations: [
    ImageUploadModule
  ],
  providers: [
    ImageUploadService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ImageUploadModule
  ],
  exports: [ImageUploadComponent],

})
export class ImageUploadModule { }
