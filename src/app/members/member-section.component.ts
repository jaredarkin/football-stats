import { Component } from '@angular/core';

import { Member } from '../model'

@Component({
  moduleId: module.id,
  selector: 'member-section',
  templateUrl: 'member-section.component.html'
})
export class MemberSectionComponent  { 

  activeMember: Member;

  selectMember(member: Member) {
      this.activeMember = member;
      console.log(this.activeMember);
  }

  members: Member[] = [
    {id: 1, name: 'Jared Arkin', years: [2016, 2015, 2014, 2013]},
    {id: 2, name: 'Josh Arkin', years: [2016, 2014, 2013]},
    {id: 3, name: 'Jeff Jones', years: [2016, 2015, 2014]},
    {id: 4, name: 'Adam Ligh', years: [2015, 2014]},
    {id: 5, name: 'Danny Schwarz', years: [2016, 2015, 2012]}
  ]

}