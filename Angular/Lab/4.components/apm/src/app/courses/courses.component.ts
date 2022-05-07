import { Component } from "@angular/core";
import { CoursesService } from "../courses.services";

@Component({
    selector:'courses', // select the element with id=#courses. 
                  //If we were to select element with class abc, we would have written '.abc'
    template:`<h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        <div *ngIf="course == 'course 1' then thenBlock else elseBlock"></div>
        <ng-template #thenBlock><p [ngStyle]="{'background-color':'green'}">{{course}}</p></ng-template>
        <ng-template #elseBlock><p [ngStyle]="{'background-color':'blue'}">{{course}}</p></ng-template> 
      </li>
    </ul>

    <h3> Using ngSwitch Directive</h3>
    <h3>
        <ul *ngFor="let course of courses" [ngSwitch]="course">
            <li *ngSwitchCase="'course 1'">
                <p [ngStyle]="{'background-color':'yellow'}">{{course}}</p>
            </li>
            <li *ngSwitchDefault >
            <p [ngStyle]="{'background-color':'red'}">{{course}}</p>
            </li>
        </ul>
    </h3>

` ,
providers:[CoursesService]


})
export class CoursesComponent{
    title = "List of New Courses";
    

    //courses =["course 1", "course 2", "course 3"],
    courses;

    constructor(service : CoursesService){ 
        this.courses = service.getCourses();
    }

    getTitle(){
        return this.title;
    }

}
