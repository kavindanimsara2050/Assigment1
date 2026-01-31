const { test, expect } = require('@playwright/test');

const scenarios = [

{
  id: 'Pos_Fun_0001',
  name: 'Simple daily sentence',
  input: 'api gedhara inne.',
  expected: 'අපි ගෙදර ඉන්නේ.'
},

{
  id: 'Pos_Fun_0002',
  name: 'Greeting short',
  input: 'suba dhavasak!',
  expected: 'සුබ දවසක්!'
},

{
  id: 'Pos_Fun_0003',
  name: 'Short interrogative',
  input: 'oyaa ennee kavadh​dha?',
  expected: 'ඔයා එන්නේ කවද්​ද?'
},

{
  id: 'Pos_Fun_0004',
  name: 'Short command',
  input: 'LaGAta enna.',
  expected: 'ළඟට එන්න.'
},

{
  id: 'Pos_Fun_0005',
  name: 'Joined word input',
  input: 'api gedhara innee.',
  expected: 'අපි ගෙදර ඉන්නේ.'
},

{
  id: 'Pos_Fun_0006',
  name: 'Compound sentence',
  input: 'api gamata yanna hadhapu eka hari lassanayi, namuth kaalaya madhi vuNaa.',
  expected: 'අපි ගමට යන්න හදපු එක හරි ලස්සනයි, නමුත් කාලය මදි වුණා.'
},

{
  id: 'Pos_Fun_0007',
  name: 'Complex sentence',
  input: 'ubata puluvan nam api vena dhavasaka hambelaa kathaakaramudha ban?',
  expected: 'උබට පුලුවන් නම් අපි වෙන දවසක හම්බෙලා කතාකරමුද බන්?'
},

{
  id: 'Pos_Fun_0008',
  name: 'Negative statement',
  input: 'mata adha vaeda karanna puLuvan kama​k naee.',
  expected: 'මට අද වැඩ කරන්න පුළුවන් කම​ක් නෑ.'
},

{
  id: 'Pos_Fun_0009',
  name: 'Polite request',
  input: 'karuNaakaralaa methanin ayin venna puluvan​dha',
  expected: 'කරුණාකරලා මෙතනින් අයින් වෙන්න පුලුවන්​ද'
},

{
  id: 'Pos_Fun_0010',
  name: 'Informal phrasing',
  input: 'adoo machQQ adha mokadhdha plan eka?',
  expected: 'අඩෝ මචං අද මොකද්ද plan එක?'
},

{
  id: 'Pos_Fun_0011',
  name: 'Past tense',
  input: 'api iyee office gihiQQ meeting eka attend kaLaa.',
  expected: 'අපි ඉයේ office ගිහිං meeting එක attend කළා.'
},

{
  id: 'Pos_Fun_0012',
  name: 'Future tense',
  input: 'api passee kathaa karamu.',
  expected: 'අපි පස්සේ කතා කරමු.'
},

{
  id: 'Pos_Fun_0013',
  name: 'Brand preserved',
  input: 'ubata puluvan nam giya sathiye karapu not eka mata evanavadha?.',
  expected: 'උබට පුලුවන් නම් ගිය සතියෙ කරපු නොට් එක මට එවනවද?.'
},

{
  id: 'Pos_Fun_0014',
  name: 'Place preserved',
  input: 'vahaama methanin idhagan​na',
  expected: 'වහාම මෙතනින් ඉදගන්​න'
},

{
  id: 'Pos_Fun_0015',
  name: 'Time format',
  input: 'meeting eka 10.45 AM ta patan gannavaa.',
  expected: 'meeting එක 10.45 AM ට පටන් ගන්නවා.'
},

{
  id: 'Pos_Fun_0016',
  name: 'Abbreviations',
  input: 'mata online payment ekak karanna puluvandha',
  expected: 'මට online payment එකක් කරන්න පුලුවන්ද'
},

{
  id: 'Pos_Fun_0017',
  name: 'Repeated emphasis',
  input: 'oyaalata jiivithee thiyena baaDhaa haema ekama avasThaavak vidhiyata ganna. asaarThaka venna oone naee kiyalaa baya venna epaa. aramuNu lakShYA aragena dhigatama uthsaaha karanna. meeken laebena prathiPala eekaalema dhakinna puLuvan!',

  expected: 'ඔයාලට ජීවිතේ තියෙන බාධා හැම එකම අවස්ථාවක් විදියට ගන්න. අසාර්ථක වෙන්න ඕනෙ නෑ කියලා බය වෙන්න එපා. අරමුණු ලක්ෂ්‍ය අරගෙන දිගටම උත්සාහ කරන්න. මේකෙන් ලැබෙන ප්‍රතිඵල ඒකාලෙම දකින්න පුළුවන්!'

},

{
  id: 'Pos_Fun_0018',
  name: 'conversational texr',
  input: 'oyaata karanna vaedak naethnam maath ekka yamudha? ah hari yamuu.',
  expected: 'ඔයාට කරන්න වැඩක් නැත්නම් මාත් එක්ක යමුද? අහ් හරි යමූ.'},

{
  id: 'Pos_Fun_0019',
  name: 'Long formal text',
  input: 'oyaa dhannavadha adha town eka hari busy kiyalaa? traffic nisaa hari amaaru vuNaa. bus eka late vuNa nisaa api coffee shop ekakata gihiQQ tika velaavak hiti​yaa. passee weather  hoDHA ni​saa beach ekata gi​yaa walk ekak dhaanna.',
  expected: 'ඔයා දන්නවද අද town එක හරි busy කියලා? traffic නිසා හරි අමාරු වුණා. bus එක late වුණ නිසා අපි coffee shop එකකට ගිහිං ටික වෙලාවක් හිටි​යා. පස්සේ weather  හොඳ නි​සා beach එකට ගි​යා walk එකක් දාන්න.'
},

{
  id: 'Pos_Fun_0020',
  name: 'Multi-line input',
  input: 'adha office yanna baehae.weather eka hari narakayi.eka oyaa​ta kiyanna ona kiya​laa hithuNee.',
  expected: 'අද office යන්න බැහැ.weather එක හරි නරකයි.එක ඔයා​ට කියන්න ඔන කිය​ලා හිතුණේ.'
},

{
  id: 'Pos_Fun_0021',
  name: 'Currency & units',
  input: 'mee item eka Rs. 2450 venavaa saha 2 kg vagee weight ekak thiyenavaa.',
  expected: 'මේ item එක Rs. 2450 වෙනවා සහ 2 kg වගේ weight එකක් තියෙනවා.'
},

{
  id: 'Pos_Fun_0022',
  name: 'Slang',
  input: 'eLa machQQ adha trip eka supiriya​k vuNaa. music, food okkoma patta. api ithiQQ aaye edh​dhii enakota hari lassanayi kiyalaa hithuNaa.',
  expected: 'එළ මචං අද trip එක සුපිරිය​ක් වුණා. music, food ඔක්කොම පට්ට. අපි ඉතිං ආයෙ එද්​දී එනකොට හරි ලස්සනයි කියලා හිතුණා.'
},

{
  id: 'Pos_Fun_0023',
  name: 'Technical terms',
  input: 'mata heart problem ekak thiyana​vaa',
  expected: 'මට heart problem එකක් තියන​වා'
},

{
  id: 'Pos_Fun_0024',
  name: 'Plural pronouns',
  input: 'oyaalaa passee api ekka join venna puLuvan.',
  expected: 'ඔයාලා පස්සේ අපි එක්ක join වෙන්න පුළුවන්.'
},

{
  id: 'Pos_Fun_0025',
  name: 'Long polite request',
  input: 'oyaata puLuvannam mee document tika review karalaa adha evening eka mata feedback ekak evanna.',
  expected: 'ඔයාට පුළුවන්නම් මේ document ටික review කරලා අද evening එක මට feedback එකක් එවන්න.'
}

];

for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {

    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
    await inputBox.fill('');
    await inputBox.pressSequentially(scenario.input, { delay: 25 });

    const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();
    await expect(outputBox).not.toBeEmpty({ timeout: 10000 });

    const actualOutput = (await outputBox.innerText()).trim();
    console.log(`${scenario.id} OUTPUT →`, actualOutput);

    await page.screenshot({
      path: `screenshots/${scenario.id}.png`,
      fullPage: true
    });

    
    expect(actualOutput).toBe(scenario.expected);
  });
}
