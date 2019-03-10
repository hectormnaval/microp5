import { Contact } from "../models/contact.model";
export class ContactService{
 private contacts: Contact []=
[{"nombre":"Héctor","organizacion":"UC3M","movil":"666666666",correo:"hector@example.com"}];
 constructor(){
 }
 addContact(value: Contact){
 this.contacts.push(value);
 }
 getContacts(){
 return this.contacts;
 }
 updateContact(value: Contact){
 }
 removeContact(value: Contact){
 }
}