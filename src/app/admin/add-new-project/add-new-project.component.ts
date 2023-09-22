import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css'],
})
export class AddNewProjectComponent implements OnInit {
  newProjectForm: FormGroup;
  projectImageUrl: any;
  logoImageUrl:any;
  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private FBAuth: FirebaseService
  ) {
    this.newProjectForm = this.fb.group({
      projectTitle: ['', Validators.required],
      description: ['', Validators.required],
      projectImage: ['', Validators.required],
      projectType: ['', Validators.required],
      projectUrl: ['', Validators.required],
      logoImg: [''],
    });
  }
  get projectTitle() {
    return this.newProjectForm.get('projectTitle');
  }
  get description() {
    return this.newProjectForm.get('description');
  }
  get projectImage() {
    return this.newProjectForm.get('projectImage');
  }
  get projectType() {
    return this.newProjectForm.get('projectType');
  }
  get logoImg() {
    return this.newProjectForm.get('logoImg');
  }
  get projectUrl() {
    return this.newProjectForm.get('projectUrl');
  }
  get projectControls() {
    return this.newProjectForm.controls;
  }
  ngOnInit(): void {}

  onSubmit() {
    if(this.logoImageUrl&&this.projectImageUrl){
    this.projectService
      .addProject(
        this.projectTitle?.value,
        this.description?.value,
        this.projectImageUrl,
        this.projectType?.value,
        this.logoImageUrl,
        this.projectUrl?.value
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => error
      );}
  }
  async uploadimage(e: any) {
   this.projectImageUrl=await this.FBAuth.uploadimage(e);

  }
  async uploadLogoImage(e:any){
    this.logoImageUrl=await this.FBAuth.uploadimage(e);

  }
}
