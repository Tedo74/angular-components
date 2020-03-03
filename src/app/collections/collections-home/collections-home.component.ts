import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-collections-home',
	templateUrl: './collections-home.component.html',
	styleUrls: [ './collections-home.component.css' ]
})
export class CollectionsHomeComponent implements OnInit {
	data = [
		{ name: 'James', ages: 24, job: 'Designer' },
		{ name: 'Jill', ages: 26, job: 'Engineer' },
		{ name: 'Ellise', ages: 25, job: 'Designer' }
	];

	headers = [
		{ key: 'name', label: 'Name' },
		{ key: 'ages', label: 'Ages' },
		{ key: 'job', label: 'Job' }
	];

	constructor() {}

	ngOnInit(): void {}
}
