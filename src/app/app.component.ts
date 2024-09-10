import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem, FileType } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { NewFileFormComponent } from './new-file-form/new-file-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewFileFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  FileType = FileType;
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
}
