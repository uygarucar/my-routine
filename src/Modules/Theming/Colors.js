// hex
const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    mainColor1: '#796FB2', //light mode: light purple
	mainColor2: '#202454', //dark mode: dark 
	mainColor3: '#6c61ab', //dark mode için alternatif mor
	greys: {
		1: '#ACACAC', //light mode: settings - seçili olmayan ikon rengi
		2: '#7F7F7F', //light mode: çöp tenekesi ikonu rengi
		3: '#393636', //ligth + dark: placeholder  -  dark: background
		4: '#D6D6D6', //light: Home- input box border'ı
		5: '#959595',
		6: '#C9C9C9', //dark mod: settigs - titleText, signOutButtonBorder, signOutButtonText,
		7:'#7F7F7F', //çöp ikon rengi

	},
	blues: {
		1: '#1C0C7B', //light mode: "Giriş Yap" yazısı
		
		//light mode: "+" butonunun rengi
		//light mode: settings -  seçili ikonun rengi
		//light mode: settings - Renk Teması ve Dil isimlendirmeleri
		//light mode: Yeni Ekle sf. - Bugün yazısı
		2: '#433591', // option menu başlık renkleri 
		3: '#1C0C7B', //light mode: Anasayfa - Modal butonunda çıkan isimlendirme - Örn:işten dönerken
		4: '#32538D',
		5: '#202454'
	},
};

const toRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

 const auth = {
        background: 'auth/background',
        inputBorder: 'auth/inputBorder',
        inputBackground: 'auth/inputBackground',
        inputText: 'auth/inputText',
        inputPlaceholder: 'auth/inputPlaceholder',
        coloredButtonBackground: 'auth/coloredButtonBackground',
        coloredButtonText: 'auth/coloredButtonText',
        paleButtonBackground: 'auth/paleButtonBackground',
        paleButtonText: 'auth/paleButtonText',
        appNameText: 'auth/appNameText'
};

const home = {
		background:'home/background',
		routinesText:'home/routinesText',
		routinesBorder:'home/routinesBorder',
		routinesBackground:'home/routinesBackground',
		addButtonBackground:'home/addButtonBackground',
		trashiconColor:'home/trashiconColor',
		
};

const settings = {
		background: 'settings/background',
		usernameText: 'settings/usernameText',
		userEmailText: 'settings/userEmailText',
		titleText: 'settings/titleText',
		radioButtonUnselectedIcon: 'settings/radioButtonUnselectedIcon',
		radioButtonSelectedIcon: 'settings/radioButtonSelectedIcon',
		radioButtonText: 'settings/radioButtonText',
		signOutButtonBackground: 'settings/signOutButtonBackground',
		signOutButtonBorder: 'settings/signOutButtonBorder',
		signOutButtonText: 'settings/signOutButtonText'
};

const header = {
		background: 'header/background',
		text: 'header/text',
		backIcon: 'header/backIcon',
		rightIcon: 'header/rightIcon'
}
const modal = {
	title: 'modal/title',
	modalBorder:'modal/modalBorder',
	routinesBorder: 'modal/routinesBorder',
	containerBackground: 'modal/containerBackground',
	routinesBackground: 'modal/routinesBackground',
	routinesText:'modal/routinesText'
}
export const cn={
	auth,
	settings,
	header,
	home,
	modal
}

export const lightColors = {
    // auth
    [auth.background]: constantColors.mainColor1,
    [auth.inputBorder]: constantColors.white,
    [auth.inputBackground]: toRGBA(constantColors.white, 20),
    [auth.inputText]: toRGBA(constantColors.white, 79),
    [auth.inputPlaceholder]: toRGBA(constantColors.greys[3], 40),
    [auth.coloredButtonBackground]: constantColors.white,
    [auth.coloredButtonText]: constantColors.blues[3],
    [auth.paleButtonBackground]: constantColors.transparent,
    [auth.paleButtonText]: constantColors.white,
    [auth.appNameText]: constantColors.white,
	//home
	[home.background]: constantColors.white,
	[home.routinesText]: constantColors.black,
	[home.routinesBorder]: constantColors.greys[2],
	[home.routinesBackground]: constantColors.transparent,
	[home.addButtonBackground]: constantColors.blues[2],
	[home.trashiconColor]:constantColors.greys[7],

	//settings
	[settings.background]: constantColors.white,
	[settings.usernameText]: constantColors.black,
	[settings.userEmailText]: constantColors.black,
	[settings.titleText]: constantColors.blues[2],
	[settings.radioButtonUnselectedIcon]: constantColors.greys[1],
	[settings.radioButtonSelectedIcon]: constantColors.blues[2],
	[settings.radioButtonText]: constantColors.black,
	[settings.signOutButtonBackground]: constantColors.mainColor1,
	[settings.signOutButtonBorder]: constantColors.blues[2],
	[settings.signOutButtonText]: constantColors.white,
	//header
	[header.background]: constantColors.mainColor1,
    [header.text]: constantColors.white,
    [header.backIcon]: constantColors.white,
    [header.rightIcon]: constantColors.white,
	//modal
	[modal.title]: constantColors.blues[1],
	[modal.modalBorder]: constantColors.greys[4],
	[modal.routinesBorder]: constantColors.greys[4],
	[modal.containerBackground]: constantColors.white,
	[modal.routinesBackground]: constantColors.white,
	[modal.routinesText]: constantColors.black
};


export const darkColors = {
    // auth
    [auth.background]: constantColors.mainColor2,
    [auth.inputBorder]: constantColors.white,
    [auth.inputBackground]: toRGBA(constantColors.white, 20),
    [auth.inputText]: toRGBA(constantColors.white, 79),
    [auth.inputPlaceholder]: toRGBA(constantColors.white, 35),
    [auth.coloredButtonBackground]: constantColors.white,
    [auth.coloredButtonText]: constantColors.blues[3],
    [auth.paleButtonBackground]: constantColors.transparent,
    [auth.paleButtonText]: constantColors.white,
    [auth.appNameText]: constantColors.white,
	//home
	[home.background]: constantColors.greys[3],
	[home.routinesText]: constantColors.greys[6],
	[home.routinesBorder]: constantColors.greys[4],
	[home.routinesBackground]: constantColors.transparent,
	[home.addButtonBackground]: constantColors.blues[2],
	[home.trashiconColor]:constantColors.greys[7],
	//settings
	[settings.background]: constantColors.greys[3],
	[settings.usernameText]: constantColors.greys[6],
	[settings.userEmailText]: constantColors.greys[6],
	[settings.titleText]: constantColors.blues[4],
	[settings.radioButtonUnselectedIcon]: constantColors.greys[1],
	[settings.radioButtonSelectedIcon]: constantColors.blues[4],
	[settings.radioButtonText]: constantColors.greys[6],
	[settings.signOutButtonBackground]: constantColors.mainColor2,
	[settings.signOutButtonBorder]: constantColors.greys[6],
	[settings.signOutButtonText]: constantColors.greys[6],
	//header
	[header.background]: constantColors.mainColor2,
    [header.text]: constantColors.greys[6],
    [header.backIcon]: constantColors.greys[6],
    [header.rightIcon]: constantColors.white,
	//modal
	[modal.title]: constantColors.greys[6],
	[modal.modalBorder]: constantColors.greys[4],
	[modal.routinesBorder]: constantColors.greys[4],
	[modal.containerBackground]: constantColors.greys[3],
	[modal.routinesBackground]: constantColors.greys[3],
	[modal.routinesText]: constantColors.greys[6]
};

