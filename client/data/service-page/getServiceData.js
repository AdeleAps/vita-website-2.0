class Service {
  constructor(title, description, slug) {
    this.title = title;
    this.description = description;
    this.imageUrl = `/images/services/${slug}.jpg`;
    this.slug = slug;
  }
}

export const getServiceData = () => {
  return {
    psihoterapija: new Service(`Sistēmiskā ģimenes psihoterapija`, [
      "Man ļoti simpatizē ideja, ka ģimenes psihoterapeits ir nevis eksperts, kas zina, kā mainīt ģimeni, bet  ir pārmaiņu moderators - ģimenes psihoterapeits veido labvēlīgu gaisotni, apstākļus, kas mazina ģimenes aizsardzības, rosina atvērtus dialogus, palīdz ģimenei ieraudzīt savas attiecības no malas. Psihoterapeits rada impulsus, kas izjauc ierasto un mudina ģimeni meklēt jaunu līdzsvaru, jaunus risinājumus.",
    ], "psihoterapija"),
    smilsuSpele: new Service("Smilšu spēles terapija", [
      'Smilšu spēles terapijas laikā ir iespēja izveidot "savu smilšu bildi" un caur simboliem izteikt to, ko grūti pastāstīt ar vārdiem, izspēlēt negatīvo pieredzi un notikumus, atbrīvoties no spriedzes, dusmām, bailēm...',
      "Šo terapiju var pielietot bērniem sākot no 4 gadu vecuma. Taču maldīgi uzskatīt, ka smilšu bilžu likšana ir tikai bērniem. Interesants un emociju pilns darbs izveidojas arī ar pusaudžiem un īpaši - pieaugušajiem.",
      "Smilšu spēļu terapija palīdzēs gadījumos, ja ir traumatiski pārdzīvojumi (šķiršanās, nāve, ilga slimība, avārija, dzīvesvietas maiņa), neirozes, attīstības aizture, mācīšanās grūtības, autisms, mutisms, enurēze, enkoporēze, stostīšanās, tiki, nakts bailes, murgi, hiperaktivitāte, depresivitāte.",
      "Nāciet un pamēģiniet arī Jūs!",
    ], "smilsu-speles"),
    theraplay: new Service("Teraspēle", [
      'Theraplay® ir īpašs psihoterapijas veids, kas palīdz bērniem (visos vecumos) un vecākiem atjaunot emocionālās saites, izveidot drošu piesaisti. Tā palīdz vecākiem, kuriem ir grūtības savu bērnu disciplinēšanā, palīdz bērniem, kuri ir pārāk aktīvi un viņiem ir grūtības klausīt un "sekot" pieaugušajiem. Tā palīdz bērniem, kuri ir nedroši un kautrīgi, kuri pārcietuši traumas, kuri ir adoptēti vai aug audžuģimenēs.',
      'Teraspēles terapijas laikā speciālists palīdz vecākiem radīt bērnā drošības izjūtu, viņu savaldīt, nomierināt, liek viņam izjust robežas,  rūpēšanos, izaicinājumu, jautrību un mīļumu. Mani visvairāk aizrauj tas, ka tik jaukā, jautrā un patīkamā veidā (it kā tikai rotaļājoties!), tiek paveikts ļoti nozīmīgs un svarīgs psihoterapijas darbs, kas nostiprina, "ieliek pamatus" psiholoģiski veselīgai visai turpmākajai bērna dzīvei.',
    ], "theraplay"),
    bahaZieduTerapija: new Service("Baha ziedu terapija", [
      'Mani šim terapijas veidam piesaistīja skaistais un noslēpumainais nosaukums - Ziedu terapija. Vai tiešām ziedi spēj mums palīdzēt? Kaut arī dziļi iekšienē mana atbilde jau sen uz šo jautājumu bija "Jā" (jo ne velti skaistums glābs pasauli), analītiskais, racionālais, skeptiskais prāts lika šaubīties. Taču, jo vairāk esmu saistībā ar ziedu terapiju (semināri, grāmatas, pieredze ar sevi un klientiem), jo mazākas ir manas šaubas.',
      "Šajā laikā garīgā pasaule pietuvojas materiālajai - arī caur dabu. Ziedu terapija palīdz dievišķajam spēkam nonākt mūsos un palīdzēt vismaigākajā veidā. Tad - kādēļ gan to neizmantot?",
      "Baha ziedu individuālo maisījumu pagatavo no ziedu esenču koncentrātiem. Individuālo maisījumu var pasūtīt e-veikalā www.ziedu-energija.lv vai atnākot uz individuālu konsultāciju.",
    ], "baha-ziedi"),
    traumuTerapija: new Service("Traumu terapija: EMDR metode", [
      'EMDR nozīmē "Eye-Movement Desensitization and Reprocessing" - desensibilizācija un traumu pārstrāde, izmantojot acu kustības.',
      "Tā ir  efektīva psihoterapijas metode, ko lieto sadarbībā ar klientiem traumatiskas pieredzes kontrolētai pārvarēšanai. 1987. gadā EMDR atklāja  Fransīne Šapiro, un tagad to sauc arī par priekšējās daļas/pieres rievas (frontal line) ārstēšanu.",
      "EMDR metode aktivizē dabisko atveseļošanās procesu, izmantojot paša organisma resursus, tiek  aktivizēti procesi, kas atbloķē smadzeņu neironu tīklus, kuros „glabājas” traumatiskā pieredze, un tā sāk pārstrādāties.",
    ], "traumu-terapija"),
    diagnostika: new Service("Psiholoģiskā diagnostika", [
      " Рsiholoģiskā izpēte - bērnu gatavība skolai, mācīšanās traucējumu izvērtējums, kognitīvo spēju izpēte ar Latvijā adaptēto Vudkoka - Džonsona testu un Vekslera testu. Kā arī psiholoģisko atzinumu rakstīšana dažādām institūcijām – skolas atbalsta komandai, valsts un/vai pašvaldību medicīniskajai komisijai, bāriņtiesai, DEĀK.",
    ], "diagnostika"),
  };
};
