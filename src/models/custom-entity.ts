import { PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

export abstract class CustomEntity extends BaseEntity {
	constructor(model) {
		super();
		this.setDataModel(model);
	}

	private setDataModel(model: any) {
		Object.keys(model).forEach((key) => {
			if (this[key]) {
				this[key] = model[key];
			}
		});
	}

	@PrimaryGeneratedColumn('increment') public id: number;
}
