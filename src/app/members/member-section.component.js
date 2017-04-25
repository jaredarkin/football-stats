"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MemberSectionComponent = (function () {
    function MemberSectionComponent() {
        this.members = [
            { id: 1, name: 'Jared Arkin', years: [2016, 2015, 2014, 2013] },
            { id: 2, name: 'Josh Arkin', years: [2016, 2014, 2013] },
            { id: 3, name: 'Jeff Jones', years: [2016, 2015, 2014] },
            { id: 4, name: 'Adam Ligh', years: [2015, 2014] },
            { id: 5, name: 'Danny Schwarz', years: [2016, 2015, 2012] }
        ];
    }
    MemberSectionComponent.prototype.selectMember = function (member) {
        this.activeMember = member;
        console.log(this.activeMember);
    };
    return MemberSectionComponent;
}());
MemberSectionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'member-section',
        templateUrl: 'member-section.component.html'
    })
], MemberSectionComponent);
exports.MemberSectionComponent = MemberSectionComponent;
//# sourceMappingURL=member-section.component.js.map