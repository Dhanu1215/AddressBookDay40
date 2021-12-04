console.log("Welcome to address book program");
// UC1-Create Address book contact
class AddressBook{
    //properties
    firstName
    lastName;
    city;
    address;
    state;
    zip;
    mobnum;
    email;

    //Constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.mobnum = params[6];
        this.email = params[7];
}
    //method
    toString() {
        return "firstName: "+this.firstName+","+"lastName: "+this.lastName+","+"city: "
        +this.city+","+"address: "+this.address+","+"state: "+this.state+","+"zip: "+this.zip
        +","+"mobnum: "+this.mobnum+","+"email: "+this.email;
    }

    get firstName()
    { 
        return this._firstName
    }

    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(firstName))
            this._firstName = firstName;
        else throw "Incorrect First Name";
    }
    get lastName(){ return this._lastName}
    set lastName(lastName){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(lastName))
            this._lastName = lastName
        else throw "Incorrect Last Name"
    }
    get address(){ return this._address}
    set address(address){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(address))
            this._address = address
        else throw "Incorrect Address"
    }
    get city(){ return this._city}
    set city(city){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(city))
            this._city = city
        else throw "Incorrect City"
    }
    get state(){ return this._state}
    set state(state){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(state))
            this._state = state
        else throw "Incorrect State"
    }
    get zip(){ return this._zip}
    set zip(zip){
        
        let pinRegex = RegExp('^[0-9]{3}[\\s]{0,1}[0-9]{3}$')
        if( pinRegex.test(zip)){
        
            this._zip = zip
        }
        else throw "Incorrect Zip"
    }
    get phoneNo(){ return this._phoneNo}
    set phoneNo(mobnum){
        let regex = RegExp('[0-9]{2}\\s[0-9]{10}')
        if(regex.test(mobnum))
            this._mobnum = mobnum
        else throw "Incorrect Phone Number"
    }
    get email(){ return this._email}
    set email(email){
        let regex = RegExp('^[a-z]+([_+-.]?[a-z0-9]+)*[@][a-z0-9]+[.]([a-z]+){2,}([.]?[a-z]{2})?$')
        if(regex.test(email))
            this._email = email
        else throw "Incorrect Email"
    }

}

let addressBookArr = new Array()
try{
let contact1 = new AddressBook("Dhanashree","Hakke","sangli","kavalapur","maharashtra",416416,1234567890,"dhanashreehakke7@gmail.com")
let contact2 = new AddressBook("Sampada","Hakke","sangli","kavalapur","maharashtra",416416,1234567890,"sampadahakke7@gmail.com")
let contact3 = new AddressBook("Ovi","Yamgar","sangli","kavalapur","maharashtra",416416,1234567890,"ovoyamgar7@gmail.com")
addressBookArr.push(contact1);
addressBookArr.push(contact2);
addressBookArr.push(contact3);
}
catch(e){
    console.log(e)
}
for(let i=0;i<addressBookArr.length;i++){
    console.log(addressBookArr[i])
}
//Find contact by name
let findContact = addressBookArr.filter(contact => contact.firstName  == "Ovi");
console.log(findContact[0]);

//Find person and delete it from array
let deleteContact = findContact.slice(0,0);
console.log(deleteContact);
console.log("Contact deleted");

//Get number of contacts in address book
let count = 0;
    for(let i=0;i<addressBookArr.length;i++){
            count++;
    }
console.log("Number of contacts in address book is: "+count);
