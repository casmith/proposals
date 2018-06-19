import { Component, OnInit } from '@angular/core';
import { PROPOSALS } from './mock-proposals';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {
	proposals = PROPOSALS;
	constructor() { }
	ngOnInit() { }
}
