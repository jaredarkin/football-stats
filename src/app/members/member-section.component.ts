import { Component } from '@angular/core';

import { Member } from '../model'

@Component({
  moduleId: module.id,
  selector: 'member-section',
  templateUrl: 'member-section.component.html'
})
export class MemberSectionComponent  { 

  activeMember: Member;

  selectedMember(member: Member) {
      this.activeMember = member;
  };
}