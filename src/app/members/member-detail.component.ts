import { Component, Input } from '@angular/core';

import { Member } from '../model'

@Component({
  moduleId: module.id,
  selector: 'member-detail',
  templateUrl: 'member-detail.component.html'
})
export class MemberDetailComponent { 

  @Input()
  member: Member;

  showResults = true;

  toggleResults() {
    this.showResults = !this.showResults;
  }
}