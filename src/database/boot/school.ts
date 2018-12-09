import { IProvideData } from './index';
import { School } from '../../models';

export class SchoolData implements IProvideData {
	init(): Promise<any> {
		const school1: School = new School();
		school1.name = 'Liceu Sant Jordi';
		school1.cif = '12345678A';
		school1.address = 'Carrer Regent Mendieta 5';
		school1.zipCode = '08028';
		school1.city = 'Barcelona';
		school1.country = 'Spain';
		school1.latitude = '41.3768299';
		school1.longitude = '2.1200323';
		school1.phone = '123456789';
		school1.website = 'http://www.joanpelegri.cat/';
		school1.facebook = 'https://www.facebook.com/joanpelegricat';
		school1.twitter = 'https://twitter.com/joanpelegricat';
		school1.image = 'https://cdn0.iconfinder.com/data/icons/tutor-icon-set/512/set_of_three_books-128.png';
		school1.imageBig = 'http://images.freeimages.com/images/previews/ec3/buildings-and-creations-2-1518248.jpg';
		school1.description =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

		const school2: School = new School();
		school2.name = 'Joan Pelegrí';
		school2.cif = '12345678A';
		school2.address = "Carrer d'Ermengarda, 13-25";
		school2.zipCode = '08014';
		school2.city = 'Barcelona';
		school2.country = 'Spain';
		school2.latitude = '41.3767965';
		school2.longitude = '2.1403385';
		school2.phone = '123456789';
		school2.website = 'http://www.joanpelegri.cat/';
		school2.facebook = 'https://www.facebook.com/joanpelegricat';
		school2.twitter = 'https://twitter.com/joanpelegricat';
		school2.image = 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/schooolbus-128.png';
		school2.imageBig = 'http://images.freeimages.com/images/previews/180/school-desks-1418686.jpg';
		school2.description =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

		return Promise.all([ school1.save(), school2.save() ]);
	}
}
