import { TestBed, inject } from '@angular/core/testing';

import { CarrinhoComponent } from './carrinho.component';

describe('a carrinho component', () => {
	let component: CarrinhoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CarrinhoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CarrinhoComponent], (CarrinhoComponent) => {
		component = CarrinhoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});