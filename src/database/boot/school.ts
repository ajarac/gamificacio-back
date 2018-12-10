import { IProvideData } from './provide-data';
import { School } from '../../models/school';

export class SchoolData implements IProvideData {
	init(): Promise<any> {
		const school0 = new School({
			name: 'Liceu Sant Jordi',
			cif: '12345678A',
			address: 'Carrer Regent Mendieta 5',
			zipCode: '08028',
			city: 'Barcelona',
			country: 'Spain',
			latitude: '41.3768299',
			longitude: '2.1200323',
			phone: '123456789',
			website: 'http://www.joanpelegri.cat/',
			facebook: 'https://www.facebook.com/joanpelegricat',
			twitter: 'https://twitter.com/joanpelegricat',
			image: 'https://cdn0.iconfinder.com/data/icons/tutor-icon-set/512/set_of_three_books-128.png',
			imageBig: 'http://images.freeimages.com/images/previews/ec3/buildings-and-creations-2-1518248.jpg',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		});

		const school1 = new School({
			name: 'Joan Pelegrí',
			cif: '12345678A',
			address: "Carrer d'Ermengarda, 13-25",
			zipCode: '08014',
			city: 'Barcelona',
			country: 'Spain',
			latitude: '41.3767965',
			longitude: '2.1403385',
			phone: '123456789',
			website: 'http://www.joanpelegri.cat/',
			facebook: 'https://www.facebook.com/joanpelegricat',
			twitter: 'https://twitter.com/joanpelegricat',
			image: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/schooolbus-128.png',
			imageBig: 'http://images.freeimages.com/images/previews/180/school-desks-1418686.jpg',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		});

		return Promise.all([ school0.save(), school1.save() ]);
	}
}
