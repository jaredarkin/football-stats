import { Component, EventEmitter, Output } from '@angular/core';

import { Member } from '../model'

@Component({
  moduleId: module.id,
  selector: 'member-list',
  templateUrl: 'member-list.component.html'
})
export class MemberListComponent  { 

  @Output()
  selectedMember = new EventEmitter<Member>();

  selectMember(member: Member) {
      this.selectedMember.emit(member);
  }

  members: Member[] = [
    {
      id: 1, 
      name: 'Jared Arkin', 
      years: ['2016', '2015', '2014', '2013'], 
      yearlyResults: [{
        year: '2016',
        wins: 52,
        losses: 45,
        pushes: 1,
        percentage: 53.61
      },
      {
        year: '2015',
        wins: 51,
        losses: 48,
        pushes: 2,
        percentage: 51.52
      }
      ]
    },
    {
      id: 2, 
      name: 'Josh Arkin', 
      years: ['2016', '2015', '2013'], 
      yearlyResults: [{
        year: '2016',
        wins: 49,
        losses: 40,
        pushes: 2,
        percentage: 55.06
      },
      {
        year: '2015',
        wins: 41,
        losses: 39,
        pushes: 2,
        percentage: 51.25
      }] 
    },
    {
      id: 3, 
      name: 'Adam Ligh', 
      years: ['2016', '2015', '2013'], 
      yearlyResults: [{
        year: '2016',
        wins: 51,
        losses: 44,
        pushes: 4,
        percentage: 53.68
      },
      {
        year: '2015',
        wins: 46,
        losses: 30,
        pushes: 3,
        percentage: 60.53
      }] 
    },
    {
      id: 4, 
      name: 'Jeff Jones', 
      years: ['2016', '2015'], 
      yearlyResults: [{
        year: '2016',
        wins: 35,
        losses: 40,
        pushes: 3,
        percentage: 46.67
      },
      {
        year: '2015',
        wins: 43,
        losses: 34,
        pushes: 3,
        percentage: 55.84
      }] 
    },
    {
      id: 5, 
      name: 'Danny Schwartz', 
      years: ['2016', '2015', '2014'], 
      yearlyResults: [{
        year: '2016',
        wins: 44,
        losses: 45,
        pushes: 1,
        percentage: 49.44
      },
      {
        year: '2015',
        wins: 49,
        losses: 44,
        pushes: 2,
        percentage: 52.69
      }] 
    }
  ]
}