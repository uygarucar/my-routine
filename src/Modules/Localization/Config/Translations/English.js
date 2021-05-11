import {tn, errorList} from '../TextNames'

export default {
    //Sample
    [tn.hello]: 'Hello',
    //Authorization Screen
    [tn.email]: 'E-mail',
    [tn.password]: 'Password',
    [tn.login]: 'Login',
    [tn.signUp]: 'Sign Up',
    [tn.username]: 'Username',
    //Home Screen
    [tn.home]: 'Home',
    [tn.emptyList]:'Press + to add a routine.',

    //Adding New Screen & Edit Screen
    [tn.addNew]: 'Add New',
    [tn.routineName]: 'Routine Name',
    [tn.startDate]: 'Start Date',
    [tn.endDate]: 'End Date',
    [tn.routines]: 'Routines',
    [tn.add]: 'Add',
    [tn.today]: 'Today',
    [tn.edit]: 'Edit',
    [tn.save]: 'Save',
    //Settings Screen
    [tn.settings]: 'Settings',
    [tn.colorTheme]: 'Color Theme',
    [tn.dark]:'Dark',
    [tn.light]: 'Light',
    [tn.language]: 'Language',
    [tn.english]: 'English',
    [tn.turkish]: 'Türkçe',
    [tn.signOut]: 'Sign Out',

    //error modal
    [tn.error] : 'Error',
    //Error Explanations
    [errorList.error['auth/user-not-found']]: "A user with this credentials does not exist",
    [errorList.error['auth/wrong-password']]: "Wrong password",
    [errorList.error['auth/emaıl-already-ın-use']]: "Email already in use",
    [errorList.error['auth/ınvalıd-emaıl']]: "Invalid email format" ,
    [errorList.error['auth/network-request-faıled']]: "Network request failed",
    [errorList.error['auth/weak-password']]: "Weak password",

    [errorList.error['otherMistakes']]:'Other mistakes',
    [errorList.error['auth/too-many-requests']]:'Too many requests',
    [errorList.error['emptySpace']]: 'At least one of the field is left empty. Fill all areas'
};
