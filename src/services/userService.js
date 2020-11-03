import './httpService';
import { post } from './httpService';

export function register(options) {
    console.log("register data in user services--> ", options)
    let resgisterData = post(options);
    return resgisterData;
}