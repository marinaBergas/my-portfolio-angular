import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class AddNewProjectComponent implements OnInit {
 newProjectForm:FormGroup;
  constructor(private fb :FormBuilder,private projectService:ProjectService) { 
    this.newProjectForm=this.fb.group({
      projectTitle:['',Validators.required],
      description:['',Validators.required]
    })
  }
  get projectTitle(){
    return this.newProjectForm.get('projectTitle')
  }
  get description(){
    return this.newProjectForm.get('description')
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.projectService.addProject(this.projectTitle?.value,this.description?.value)
  }
}
