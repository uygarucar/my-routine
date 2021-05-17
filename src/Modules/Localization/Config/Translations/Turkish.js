import {tn, errorList} from '../TextNames'

export default {
    //Sample
    [tn.hello]: 'Merhaba',
    //Authorization Screen
    [tn.email]: 'E-posta',
    [tn.password]: 'Şifre',
    [tn.login]: 'Giriş Yap',
    [tn.signUp]: 'Kayıt Ol',
    [tn.username]: 'Kullanıcı Adı',
    //Home Screen
    [tn.home]: 'Anasayfa',
    [tn.emptyList]:'Rutin eklemek için + ya basınız.',
    //Adding New Screen & Edit Screen
    [tn.addNew]: 'Yeni Ekle',
    [tn.routineName]: 'Rutin Adı',
    [tn.startDate]: 'Başlangıç Tarihi',
    [tn.endDate]: 'Bitiş Tarihi',
    [tn.routines]: 'Rutinler',
    [tn.add]: 'Ekle',
    [tn.today]: 'Bugün',
    [tn.edit]: 'Düzenle',
    [tn.save]: 'Kaydet',
 
    //Settings Screen
    [tn.settings]: 'Ayarlar',
    [tn.colorTheme]: 'Renk Teması',
    [tn.dark]:'Karanlık',
    [tn.light]: 'Aydınlık',
    [tn.language]: 'Dil',
    [tn.english]: 'English',
    [tn.turkish]: 'Türkçe',
    [tn.signOut]: 'Çıkış Yap',

    //Error modal
    [tn.error]: 'Hata',

    //Search bar placeholder text
    [tn.search]: 'Burada arayın...',

    //Error Explanations
    [errorList.error['auth/user-not-found']]: "Kullanıcı bulunamadı",
    [errorList.error['auth/wrong-password']]: "Yanlış şifre girdiniz",
    [errorList.error['auth/emaıl-already-ın-use']]: "Email kullanımda",
    [errorList.error['auth/ınvalıd-emaıl']]: "Geçersiz email girdiniz" ,
    [errorList.error['auth/network-request-faıled']]: "Network isteği başarısız oldu",
    [errorList.error['auth/weak-password']]: "Zayıf bir şifre girdiniz",

    [errorList.error['otherMistakes']]:'Başka hata',
    [errorList.error['auth/too-many-requests']]:'Çok fazla istek var',
    [errorList.error['emptySpace']]: 'Boş alan bıraktınız. Lütfen tüm alanları doldurun'
};
