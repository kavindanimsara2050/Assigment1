const { test, expect } = require('@playwright/test');

// These scenarios contain intentional "wrong" inputs or mismatched expectations
const scenarios = [
  {
  id: 'Neg_Fun_0001',
  name: 'Random alphabets mapped incorrectly',
  input: '',
  expected: 'මම ගෙදර යනවා'
},

{
  id: 'Neg_Fun_0002',
  name: 'Gibberish word produces valid sentence',
  input: 'mm knnd',
  expected: 'මම කන්නද?'
},

{
  id: 'Neg_Fun_0003',
  name: 'Invalid input returns greeting',
  input: 'mm htnh oya hodin ati kyl mkd mn iye ra ntk hinayk dakka ',
  expected: 'මම හිතනවා ඔයා හොදින් ඇති කියලා මොකද ඊයේ රෑ මම නරක හීනයක් දක්​කා'
},

{
  id: 'Neg_Fun_0004',
  name: 'Random characters interpreted as action',
  input: '!!@@##',
  expected: 'ඔහු වැඩ කරනවා'
},

{
  id: 'Neg_Fun_0005',
  name: 'Keyboard mash gives command',
  input: 'oygi magei athara thibba sambadtvy mama metnin natara krnv mkd oy kiyn ek hitka inn pulivn kenk nme e ns mm mtnn ntr wnvkmti vdyt jvt wnn',
  expected: 'ඔයාගෙයි මගෙයි අතර තිබ්බ සම්බන්ධතාවය මම මෙතනින් නතර කරනව මොකද ඔයා කියන්නෙ එක හිතක ඉන්න පුලුන් කෙනෙක් නෙමෙ එ නිසා මම මෙතනින් නතර වෙනවා කැමති විදියකට ජිවත් වෙන්​න'
},

{
  id: 'Neg_Fun_0006',
  name: 'Gibberish Input Stress Test',
  input: '10.45t aharenn',
  expected: '10.45ta ඇහැරෙන්​න'
},

{
  id: 'Neg_Fun_0007',
  name: 'Emoji input converted to sentence',
  input: '😂🔥',
  expected: 'ඒක හරි හොඳයි'
},

{
  id: 'Neg_Fun_0008',
  name: 'Numbers misinterpreted as sentence',
  input: '123456',
  expected: 'අපි හෙට යමු'
},

{
  id: 'Neg_Fun_0009',
  name: 'Symbols converted to question',
  input: '<><><>',
  expected: 'ඔයාගෙ සැපදුක් කොහොමද දැනගන්න පුලුවන්ද මට'
},

{
  id: 'Neg_Fun_0010',
  name: 'Whitespace input returns meaningful output',
  input: '     ',
  expected: 'කරුණාකර නැවත උත්සාහ කරන්න'
}

];

for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
    // 1. Navigate to the site
    await page.goto('https://www.swifttranslator.com/');

    // 2. Select the input area
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    
    // 3. Type the "wrong" input
    if (scenario.input !== '') {
        await inputArea.pressSequentially(scenario.input, { delay: 30 });
    } else {
        await inputArea.fill(''); // Handle empty case
    }

    // 4. Locate the output div
    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();

    // 5. Wait for the translation to occur (using a short delay for stability)
    await page.waitForTimeout(2000); 
    
    const actualOutput = (await outputDiv.innerText()).trim();
    console.log(`TC ID: ${scenario.id} | Input: "${scenario.input}" | Actual: "${actualOutput}"`);

    // 6. Capture screenshot for evidence
    await page.screenshot({ path: `screenshots/${scenario.id}.png` });

    // 7. THE FIX: Direct assertion. 
    // If actualOutput is NOT EXACTLY equal to scenario.expected, the test FAILS.
    expect(actualOutput).toBe(scenario.expected);
  });
}