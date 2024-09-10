import { Component } from '@angular/core';
import { FileType } from '../../models/file.item.model';

@Component({
  selector: 'app-new-file-form',
  standalone: true,
  imports: [],
  templateUrl: './new-file-form.component.html',
  styleUrl: './new-file-form.component.css'
})
export class NewFileFormComponent {
  FileType = FileType;
}
