// ─── CONFIG ───────────────────────────────────────
// ⚠️  Replace 'yourtag-20' with your Amazon Associates tag before publishing
const AFFILIATE_TAG = 'strand01-20';
function amzLink(brand, name) {
  const q = encodeURIComponent(`${brand} ${name}`);
  return `https://www.amazon.com/s?k=${q}&tag=${AFFILIATE_TAG}`;
}

// ─── VIDEO DATA ───────────────────────────────────
// Real YouTube video IDs for each hair type + step


// ─── PRODUCT DATA ──────────────────────────────────
const routines = {
  '1A': {
    name: 'Pin-Straight, Fine Hair',
    desc: 'Ultra-fine hair needs weightless cleansing and volumizing support without any heaviness that would flatten your strands.',
    steps: [
      { step:'Shampoo', why:'Clarifying or volumizing shampoo — removes buildup without stripping fine strands', products:[
        { brand:'Kérastase', name:'Bain Divalent Balancing Shampoo', why:'Balancing shampoo made for oily roots and drier ends', asin:'B07K8P5TH6', emoji:'🧴' },
        { brand:'OGX', name:'Bodifying Bamboo Fiber-Full Shampoo', why:'Budget volumizing shampoo', asin:'B07GJ4LSNK', emoji:'🧴' },
        { brand:'Living Proof', name:'Full Shampoo', why:'Volumizing shampoo for fine hair; premium price', asin:'B00B5HMFJ6', emoji:'🧴' }
      ]},
      { step:'Conditioner', why:'Lightweight only — mid-lengths to ends, never at roots', products:[
        { brand:'Pantene', name:'Aqua Light Conditioner', why:'Light conditioner for fine hair; budget price', asin:'B00BKQP0SO', emoji:'🫙' },
        { brand:'Briogeo', name:'Don\'t Despair, Repair! Conditioner', why:'Moisturizing conditioner for dry or damaged fine hair', asin:'B00Z5X72XO', emoji:'🫙' },
        { brand:'Kérastase', name:'Nutritive Lait Vital Conditioner', why:'Luxury light conditioner', asin:'B001PUCMX4', emoji:'🫙' }
      ]},
      { step:'Volumizing Spray', why:'Apply to damp roots before blow-drying for all-day lift', products:[
        { brand:'Kenra', name:'Platinum Silkening Mist', why:'Light spray that adds shine without stiffness', asin:'B00DPGXBCS', emoji:'✨' },
        { brand:'Bumble and bumble', name:'Thickening Spray', why:'Root-volume spray for damp hair before blow-drying', asin:'B000FBIYZO', emoji:'✨' },
        { brand:'Not Your Mother\'s', name:'Curl Talk Frizz Control Spray', why:'Budget frizz spray, easy to find', asin:'B07MQ2XHWS', emoji:'✨' }
      ]}
    ]
  },
  '2B': {
    name: 'Defined Wavy Hair',
    desc: 'Medium waves need frizz control and definition without heaviness that would drag your waves flat.',
    steps: [
      { step:'Sulfate-Free Shampoo', why:'Preserves your wave pattern and natural oils', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Shampoo', why:'Sulfate-free curl shampoo with coconut oil', asin:'B004YJQFOU', emoji:'🧴' },
        { brand:'Maui Moisture', name:'Curl Quench + Coconut Oil Shampoo', why:'Sulfate-free drugstore shampoo for waves and curls', asin:'B07B2VQMD3', emoji:'🧴' },
        { brand:'Ouai', name:'Thick Hair Shampoo', why:'Premium hydrating shampoo for thick hair', asin:'B073WFRLNB', emoji:'🧴' }
      ]},
      { step:'Conditioner', why:'Finger-detangle while in, rinse 80% — leave a little in', products:[
        { brand:'Aussie', name:'Miracle Moist Conditioner', why:'Budget moisturizing conditioner', asin:'B00JJZZ2EW', emoji:'🫙' },
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Conditioner', why:'Matching conditioner for the Curl & Shine shampoo', asin:'B004YJQFPE', emoji:'🫙' },
        { brand:'Briogeo', name:'Curl Charisma Rice Amino + Avocado Leave-In', why:'Premium leave-in defining cream', asin:'B01I0VBLHQ', emoji:'🫙' }
      ]},
      { step:'Leave-In Conditioner', why:'Apply to soaking wet hair before any stylers', products:[
        { brand:'Not Your Mother\'s', name:'Curl Talk Leave-In Conditioner', why:'Light drugstore leave-in for waves', asin:'B07MQ3BQLZ', emoji:'💧' },
        { brand:'Garnier', name:'Fructis Sleek & Shine Leave-In', why:'Budget anti-frizz leave-in serum', asin:'B000052YQQ', emoji:'💧' },
        { brand:'Kinky-Curly', name:'Knot Today Leave-In / Detangler', why:'Slippery leave-in that doubles as a detangler', asin:'B000KKNQBE', emoji:'💧' }
      ]},
      { step:'Wave Mousse or Gel', why:'Scrunch in while soaking wet — air dry or diffuse on low', products:[
        { brand:'Aussie', name:'Instant Freeze Sculpting Gel', why:'Budget strong-hold gel; scrunch out the cast when dry', asin:'B00189CPRS', emoji:'💨' },
        { brand:'Herbal Essences', name:'bio:renew Curl Boosting Mousse', why:'Lightweight mousse for soft, bouncy waves without stiffness', asin:'B06XWZSP45', emoji:'💨' },
        { brand:'Moroccanoil', name:'Curl Defining Cream', why:'Premium defining cream with argan oil', asin:'B00BF94OD4', emoji:'💨' }
      ]}
    ]
  },
  '3B': {
    name: 'Springy, Defined Curls',
    desc: 'Defined corkscrews need deep moisture, anti-frizz protection, and strong curl-clumping products.',
    steps: [
      { step:'Co-Wash or Shampoo', why:'Co-wash 1–2x weekly; clarifying shampoo every 1–2 weeks', products:[
        { brand:'As I Am', name:'Coconut CoWash Cleansing Conditioner', why:'Cleansing conditioner for washing without shampoo', asin:'B004VD4FWY', emoji:'🧴' },
        { brand:'Cantu', name:'Sulfate-Free Cleansing Cream Shampoo', why:'Budget sulfate-free cream shampoo', asin:'B00GQCLBF0', emoji:'🧴' },
        { brand:'DevaCurl', name:'No-Poo Zero Lather Shampoo', why:'Non-lathering cleanser for curls; premium price', asin:'B001TCO5EI', emoji:'🧴' }
      ]},
      { step:'Deep Conditioner', why:'Weekly — leave 15–30 min under a shower cap with heat', products:[
        { brand:'Briogeo', name:'Don\'t Despair, Repair! Deep Mask', why:'Deep conditioning mask for dry or damaged hair', asin:'B00XPIFPUA', emoji:'🎭' },
        { brand:'SheaMoisture', name:'Manuka Honey & Mafura Oil Masque', why:'Budget deep conditioning mask', asin:'B074P77QJM', emoji:'🎭' },
        { brand:'Camille Rose', name:'Algae Renew Deep Conditioning Mask', why:'Deep conditioning mask for softness', asin:'B07FKJRNHH', emoji:'🎭' }
      ]},
      { step:'Leave-In Conditioner', why:'Apply to sopping wet hair — your moisture base layer', products:[
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Leave-In', why:'Rich castor oil leave-in for dry curls', asin:'B073XVF1MM', emoji:'💧' },
        { brand:'Mielle Organics', name:'Pomegranate & Honey Leave-In', why:'Leave-in conditioner with a light feel', asin:'B075CMWWVL', emoji:'💧' },
        { brand:'Kinky-Curly', name:'Knot Today Leave-In', why:'Slippery leave-in that helps detangling before styling', asin:'B000KKNQBE', emoji:'💧' }
      ]},
      { step:'Curl Cream', why:'Rake and smooth through sections, then scrunch for clumping', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl Enhancing Smoothie', why:'Rich, soft curl cream with shea butter and coconut', asin:'B004YJQFOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', why:'Budget rich curl cream, easy to find', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'Ouidad', name:'Curl Quencher Moisturizing Gel', why:'Premium curl gel', asin:'B000I50Y2S', emoji:'🌀' }
      ]},
      { step:'Styling Gel', why:'Layer on top of curl cream — scrunch out the crunch once dry', products:[
        { brand:'LA Looks', name:'Extreme Sport Gel', why:'Budget strong-hold gel', asin:'B003DUVNMC', emoji:'✨' },
        { brand:'Ecoslay', name:'Orange Marmalade Gel', why:'Strong-hold gel for curls and coils', asin:'B07N9YJHZS', emoji:'✨' },
        { brand:'Aunt Jackie\'s', name:'Don\'t Shrink Flaxseed Curl Gel', why:'Firm-hold gel; check the label, it is carbomer-based with flaxseed added', asin:'B00AE0I1LY', emoji:'✨' }
      ]}
    ]
  },
  '4C': {
    name: 'Tight Coily, Natural Hair',
    desc: 'Type 4C needs maximum moisture retention, the gentlest possible handling, and a consistent LOC/LCO layering routine.',
    steps: [
      { step:'Pre-Poo Oil Treatment', why:'Oil before shampoo: in lab tests, coconut oil applied before washing reduced protein loss', products:[
        { brand:'Viva Naturals', name:'Organic Extra Virgin Coconut Oil', why:'The one pre-wash oil with lab support: coconut oil reduced protein loss when applied before washing', emoji:'🥥' },
        { brand:'Jamaican Mango & Lime', name:'Pure Black Castor Oil', why:'Thick castor oil; a heavier pre-wash option for very dry hair', asin:'B00CTTCF0M', emoji:'🛢️' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', why:'Plain, fragrance-free jojoba oil', asin:'B07NQPPDTT', emoji:'🛢️' }
      ]},
      { step:'Cleansing Shampoo', why:'Shampoo in sections — only 2–4x per month to protect moisture', products:[
        { brand:'SheaMoisture', name:'African Black Soap Deep Cleansing Shampoo', why:'Clarifying shampoo for removing buildup', asin:'B01CYT2SIM', emoji:'🧴' },
        { brand:'Cantu', name:'Sulfate-Free Cleansing Cream Shampoo', why:'Budget sulfate-free cream shampoo', asin:'B00GQCLBF0', emoji:'🧴' },
        { brand:'Design Essentials', name:'Natural Almond & Avocado Detangling Shampoo', why:'Gentle detangling shampoo; premium price', asin:'B004BJDVPW', emoji:'🧴' }
      ]},
      { step:'Deep Conditioner', why:'Weekly; warmth under a cap helped oil get into hair in lab tests', products:[
        { brand:'Aussie', name:'3 Minute Miracle Moist Deep Conditioner', why:'Budget deep conditioner', asin:'B00189HW4G', emoji:'🎭' },
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Masque', why:'Deep conditioning masque with protein', asin:'B00XCBPGUI', emoji:'🎭' },
        { brand:'Camille Rose', name:'Curl Maker Whipped Jelly', why:'Light defining jelly for curls and coils', asin:'B076MFRLZG', emoji:'🎭' }
      ]},
      { step:'Leave-In Conditioner (L in LOC)', why:'Saturate hair — 4C needs more product than other types', products:[
        { brand:'Cantu', name:'Shea Butter Leave-In Conditioning Repair Cream', why:'Rich, budget leave-in cream', asin:'B00AE0I1QE', emoji:'💧' },
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Leave-In', why:'Rich leave-in conditioner with castor oil', asin:'B073XVF1MM', emoji:'💧' },
        { brand:'Olaplex', name:'No.6 Bond Smoother', why:'Premium leave-in smoother; optional, and the priciest step', asin:'B08QHL2RVH', emoji:'💧' }
      ]},
      { step:'Moisturizing Cream (C in LOC)', why:'Layer cream over leave-in to seal in moisture', products:[
        { brand:'SheaMoisture', name:'Raw Shea Butter Extra-Moisture Transitioning Milk', why:'Moisturizing milk for the cream step', asin:'B00BQWQIOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', why:'Budget rich cream, easy to find', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'Mielle Organics', name:'Babassu Oil & Mint Deep Conditioner', why:'Deep conditioner with babassu oil', asin:'B074X13HC7', emoji:'🌀' }
      ]},
      { step:'Sealing Oil (O in LOC)', why:'Final step — seal everything in, focus on ends', products:[
        { brand:'Jamaican Mango & Lime', name:'Pure Black Castor Oil', why:'Thick sealing oil for dry ends', asin:'B00CTTCF0M', emoji:'🛢️' },
        { brand:'Mielle Organics', name:'Rosemary Mint Scalp & Hair Oil', why:'Light oil with rosemary and mint; no evidence it grows healthy hair', asin:'B07GVSYL1S', emoji:'🛢️' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', why:'Plain, fragrance-free light sealing oil', asin:'B07NQPPDTT', emoji:'🛢️' }
      ]}
    ]
  },
'1B': {
    name: 'Straight with Body',
    desc: 'Medium-texture straight hair with slight bends at the ends needs balancing products that add body without weighing strands down.',
    steps: [
      { step:'Balancing Shampoo', why:'Wash 2–3x weekly — look for volumizing or balancing formulas, not clarifying', products:[
        { brand:'Redken', name:'All Soft Shampoo', why:'Softens and adds movement to medium straight hair without limp results', asin:'B00150Y7LO', emoji:'🧴' },
        { brand:'Pantene', name:'Sheer Volume Shampoo', why:'Classic drugstore volume shampoo — light, fluffy, widely available', asin:'B00P58R6XG', emoji:'🧴' },
        { brand:'Pureology', name:'Pure Volume Shampoo', why:'Sulfate-free salon formula, protects color while boosting body', asin:'B001796ZN2', emoji:'🧴' }
      ]},
      { step:'Lightweight Conditioner', why:'Apply mid-shaft to ends — avoid roots to prevent flatness', products:[
        { brand:'Pantene', name:'Daily Moisture Renewal Conditioner', why:'Budget everyday conditioner', asin:'B00BEJOOYC', emoji:'🫙' },
        { brand:'TRESemmé', name:'Moisture Rich Conditioner', why:'Budget moisturizing conditioner', asin:'B00L6MWCGM', emoji:'🫙' },
        { brand:'Nexxus', name:'Keraphix Conditioner', why:'Conditioner with protein; premium price', asin:'B00JSUSL34', emoji:'🫙' }
      ]},
      { step:'Volumizing Mousse or Spray', why:'Apply to damp roots and mid-lengths before blow-drying', products:[
        { brand:'John Frieda', name:'Luxurious Volume Touchably Full Mousse', why:'Lightweight mousse specifically designed for fine-to-medium straight hair', asin:'B00029TUPC', emoji:'✨' },
        { brand:'Kenra', name:'Volume Spray 25', why:'Volume spray with flexible hold', asin:'B001B1UM52', emoji:'✨' },
        { brand:'Not Your Mother\'s', name:'Curl Talk Frizz Control Spray', why:'Budget spray for flyaways with light hold', asin:'B07MQ2XHWS', emoji:'✨' }
      ]}
    ]
  },
  '1C': {
    name: 'Straight + Coarse',
    desc: 'Thick, resistant straight hair with slight wave tendency needs moisture-rich cleansing, smoothing treatments, and frizz control without losing movement.',
    steps: [
      { step:'Moisturizing Shampoo', why:'Wash 2x weekly max — coarse hair gets dry faster than fine types', products:[
        { brand:'OGX', name:'Hydrate & Repair Argan Oil of Morocco Shampoo', why:'Budget smoothing shampoo', asin:'B004R7MFSK', emoji:'🧴' },
        { brand:'Redken', name:'All Soft Shampoo', why:'Softening shampoo for coarse hair', asin:'B00150Y7LO', emoji:'🧴' },
        { brand:'Pureology', name:'Hydrate Sheer Shampoo', why:'Luxury sulfate-free shampoo, color-safe', asin:'B003YIBJDG', emoji:'🧴' }
      ]},
      { step:'Rich Conditioner', why:'Leave on 2–5 minutes before rinsing', products:[
        { brand:'OGX', name:'Hydrate & Repair Argan Oil of Morocco Conditioner', why:'Matching smoothing conditioner', asin:'B004R7MFUS', emoji:'🫙' },
        { brand:'Matrix', name:'Total Results Mega Sleek Conditioner', why:'Smoothing conditioner for thick hair', asin:'B001C1KGDQ', emoji:'🫙' },
        { brand:'Kenra', name:'Platinum Silkening Conditioner', why:'Premium smoothing conditioner', asin:'B0042UQLGA', emoji:'🫙' }
      ]},
      { step:'Anti-Frizz Serum', why:'Apply a pea-size amount to dry or damp hair — focus on mid-lengths and ends', products:[
        { brand:'Garnier', name:'Fructis Sleek & Shine Anti-Frizz Serum', why:'Budget anti-frizz serum', asin:'B000052YQQ', emoji:'💧' },
        { brand:'Moroccanoil', name:'Treatment Original', why:'Premium oil treatment for shine', asin:'B0064RDC2O', emoji:'💧' },
        { brand:'Olaplex', name:'No.7 Bonding Oil', why:'Premium styling oil; optional', asin:'B08QHKWGPD', emoji:'💧' }
      ]}
    ]
  },
'2A': {
    name: 'Fine Loose Waves',
    desc: 'Fine, tousled S-waves that easily straighten need the lightest possible products — anything too heavy will drag the wave pattern completely flat.',
    steps: [
      { step:'Sulfate-Free Shampoo', why:'Wash 2–3x weekly — sulfates strip the natural oils that define fine waves', products:[
        { brand:'Garnier', name:'Fructis Curl Nourish Sulfate-Free Shampoo', why:'Gentle and lightweight — preserves fine wave pattern without residue', asin:'B07MQLZ1ZX', emoji:'🧴' },
        { brand:'Not Your Mother\'s', name:'Curl Talk Shampoo', why:'Drugstore sulfate-free shampoo for waves', asin:'B07MQ2NJRJ', emoji:'🧴' },
        { brand:'Briogeo', name:'Curl Charisma Shampoo', why:'Clean ingredients, no sulfates — gentle enough for fine 2A strands', asin:'B01I0VBLHA', emoji:'🧴' }
      ]},
      { step:'Lightweight Conditioner', why:'Apply ends-only on 2A — even mid-shaft can weigh fine waves flat', products:[
        { brand:'Herbal Essences', name:'bio:renew Curl Defining Conditioner', why:'Super lightweight rinse-out — just enough slip without flattening', asin:'B06XWZ7FZK', emoji:'🫙' },
        { brand:'Not Your Mother\'s', name:'Curl Talk Conditioner', why:'Light conditioner with slip for waves', asin:'B07MQ3G6Z3', emoji:'🫙' },
        { brand:'Ouai', name:'Fine Hair Conditioner', why:'Designed specifically for fine waves — weightless hydration with biotin', asin:'B073WG5PRS', emoji:'🫙' }
      ]},
      { step:'Wave-Enhancing Mousse', why:'Scrunch into soaking-wet hair — mousse over gel keeps fine waves from crunching', products:[
        { brand:'Herbal Essences', name:'bio:renew Curl Boosting Mousse', why:'Featherlight mousse for soft, natural waves without stiffness or crunch', asin:'B06XWZSP45', emoji:'💨' },
        { brand:'Not Your Mother\'s', name:'Curl Talk Curl Defining Mousse', why:'Budget mousse for wavy hair — defines without weighing down', asin:'B07MQ3RXPJ', emoji:'💨' },
        { brand:'Bumble and bumble', name:'Surf Foam Spray Blow Dry', why:'Adds beachy texture and wave definition — premium pick for 2A', asin:'B00NXVFC3E', emoji:'💨' }
      ]}
    ]
  },
  '2C': {
    name: 'Strong Frizz-Prone Waves',
    desc: 'Thick, coarse S-waves that border on curly need moisture-first products and strong hold to control frizz without losing the wave shape.',
    steps: [
      { step:'Sulfate-Free Shampoo', why:'Wash 1–2x weekly — coarse wave texture dries out faster than finer types', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Shampoo', why:'Adds moisture and definition for thicker wave patterns', asin:'B004YJQFOU', emoji:'🧴' },
        { brand:'DevaCurl', name:'No-Poo Original Zero Lather Shampoo', why:'Co-washing cleanser — preserves natural oils in thick, frizz-prone 2C', asin:'B001TCO5EI', emoji:'🧴' },
        { brand:'Ouai', name:'Thick Hair Shampoo', why:'Biotin-infused, weightless hydration formula designed for thick waves', asin:'B073WFRLNB', emoji:'🧴' }
      ]},
      { step:'Conditioner', why:'Finger-detangle in the shower, rinse 70% — leaving a little in helps 2C waves', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Conditioner', why:'Moisture-rich but not heavy — deeply conditions coarse wave texture', asin:'B004YJQFPE', emoji:'🫙' },
        { brand:'Aussie', name:'Miracle Moist Conditioner', why:'Budget staple — outstanding slip and moisture', asin:'B00JJZZ2EW', emoji:'🫙' },
        { brand:'Jessicurl', name:'Aloeba Daily Conditioner', why:'Specifically formulated for wavy-to-curly hair by a wavy-hair brand', asin:'B00171PCYS', emoji:'🫙' }
      ]},
      { step:'Leave-In Conditioner', why:'Apply to soaking-wet hair before any stylers — moisture base is critical for 2C', products:[
        { brand:'Not Your Mother\'s', name:'Curl Talk Leave-In Conditioner', why:'Lightweight but effective — controls frizz without flattening thick waves', asin:'B07MQ3BQLZ', emoji:'💧' },
        { brand:'Kinky-Curly', name:'Knot Today Leave-In / Detangler', why:'Natural ingredients — detangles and moisturizes coarse wave texture', asin:'B000KKNQBE', emoji:'💧' },
        { brand:'SheaMoisture', name:'Jamaican Black Castor Oil Leave-In', why:'Rich castor oil leave-in for thick, dry waves', asin:'B073XVF1MM', emoji:'💧' }
      ]},
      { step:'Curl Cream + Gel', why:'Layer a curl cream under gel — scrunching both in wet gives 2C its best definition', products:[
        { brand:'Moroccanoil', name:'Curl Defining Cream', why:'Argan oil formula controls thick 2C frizz with beautiful shine', asin:'B00BF94OD4', emoji:'🌀' },
        { brand:'Cantu', name:'Wave Whip Curling Mousse', why:'Affordable definition cream for wavy-to-curly types — great value', asin:'B012F9X1DW', emoji:'🌀' },
        { brand:'Ouidad', name:'Curl Quencher Moisturizing Gel', why:'Professional curl brand — humidity-resistant hold for coarse 2C waves', asin:'B000I50Y2S', emoji:'🌀' }
      ]}
    ]
  },
'3A': {
    name: 'Loose Spiral Curls',
    desc: 'Large, shiny spirals about the diameter of sidewalk chalk need moisture and curl-clumping products, but lighter ones than tighter curl types to avoid weighing curls down.',
    steps: [
      { step:'Co-Wash or Shampoo', why:'Co-wash 1–2x weekly; clarify with shampoo every 2 weeks to remove buildup', products:[
        { brand:'As I Am', name:'Coconut CoWash Cleansing Conditioner', why:'Gentle co-wash standard — preserves moisture in 3A spirals without stripping', asin:'B004VD4FWY', emoji:'🧴' },
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Shampoo', why:'Lightweight moisture shampoo — defines 3A spirals while cleansing gently', asin:'B004YJQFOU', emoji:'🧴' },
        { brand:'Pattern Beauty', name:'Cleansing Shampoo', why:'Tracee Ellis Ross\'s curl brand — formulated specifically for Type 3 spirals', asin:'B083Q2X7FV', emoji:'🧴' }
      ]},
      { step:'Conditioner', why:'Detangle with fingers while conditioner is in — rinse out fully for 3A', products:[
        { brand:'Briogeo', name:'Curl Charisma Rice Amino + Avocado Leave-In', why:'Light enough for 3A spirals — adds definition without weighing large curls down', asin:'B01I0VBLHQ', emoji:'🫙' },
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Conditioner', why:'Moisture + definition without heaviness — perfect for 3A curl size', asin:'B004YJQFPE', emoji:'🫙' },
        { brand:'Ouidad', name:'Moisture Lock Leave-In Conditioner', why:'Premium light leave-in for curls', asin:'B000I4XDWU', emoji:'🫙' }
      ]},
      { step:'Leave-In Conditioner', why:'Apply to soaking-wet hair, then style immediately — 3A curls define best when dripping wet', products:[
        { brand:'Mielle Organics', name:'Pomegranate & Honey Leave-In', why:'Leave-in conditioner with a light feel', asin:'B075CMWWVL', emoji:'💧' },
        { brand:'Kinky-Curly', name:'Knot Today Leave-In / Detangler', why:'Slippery leave-in that helps curls clump', asin:'B000KKNQBE', emoji:'💧' },
        { brand:'Olaplex', name:'No.6 Bond Smoother', why:'Premium leave-in smoother; optional', asin:'B08QHL2RVH', emoji:'💧' }
      ]},
      { step:'Light Curl Cream', why:'Rake through sections and scrunch — use less product than you think you need for 3A', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl Enhancing Smoothie', why:'Use a small amount on 3A to define without weighing down', asin:'B004YJQFOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', why:'Best budget curl cream — excellent for 3A when used sparingly', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'DevaCurl', name:'SuperCream Coconut Curl Styler', why:'Curl-specific formula — defines 3A spirals without the crunch', asin:'B007N4VKLE', emoji:'🌀' }
      ]}
    ]
  },
  '3C': {
    name: 'Tight Corkscrew Curls',
    desc: 'Tight corkscrews about the width of a pencil or straw need heavy moisture, strong curl creams, and consistent protein treatments to maintain definition and reduce frizz.',
    steps: [
      { step:'Co-Wash or Shampoo', why:'Co-wash 1–2x weekly; sulfate-free shampoo every 1–2 weeks', products:[
        { brand:'Cantu', name:'Sulfate-Free Cleansing Cream Shampoo', why:'Gentle shampoo, ideal for dense 3C curls', asin:'B00GQCLBF0', emoji:'🧴' },
        { brand:'As I Am', name:'Coconut CoWash Cleansing Conditioner', why:'Co-wash staple — preserves moisture in tightly packed 3C corkscrews', asin:'B004VD4FWY', emoji:'🧴' },
        { brand:'DevaCurl', name:'No-Poo Decadence Zero Lather Cleanser', why:'Rich formula designed for dense curl patterns — no lather, no dryness', asin:'B00F5EQ1C0', emoji:'🧴' }
      ]},
      { step:'Deep Conditioner', why:'Weekly — apply generously, cover with a shower cap, and leave 20–30 min', products:[
        { brand:'SheaMoisture', name:'Manuka Honey & Mafura Oil Masque', why:'Budget deep conditioning mask', asin:'B074P77QJM', emoji:'🎭' },
        { brand:'Briogeo', name:'Don\'t Despair, Repair! Deep Conditioning Mask', why:'Premium deep conditioning mask', asin:'B00XPIFPUA', emoji:'🎭' },
        { brand:'Camille Rose', name:'Algae Renew Deep Conditioning Mask', why:'Deep conditioning mask for softness', asin:'B07FKJRNHH', emoji:'🎭' }
      ]},
      { step:'Leave-In Conditioner', why:'Apply to sopping wet hair — 3C needs more leave-in than looser curl types', products:[
        { brand:'Mielle Organics', name:'Pomegranate & Honey Leave-In', why:'Leave-in conditioner with a light feel', asin:'B075CMWWVL', emoji:'💧' },
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Leave-In', why:'Rich castor oil leave-in for dry curls', asin:'B073XVF1MM', emoji:'💧' },
        { brand:'Cantu', name:'Shea Butter Leave-In Conditioning Repair Cream', why:'Leave-in rich enough for dense 3C texture', asin:'B00AE0I1QE', emoji:'💧' }
      ]},
      { step:'Curl Cream', why:'Rake and smooth through sections — 3C needs more product than looser types', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl Enhancing Smoothie', why:'A go-to curl cream for 3C definition and moisture', asin:'B004YJQFOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', why:'Best budget option — maximum accessibility and value for 3C hair', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'Camille Rose', name:'Curl Maker Whipped Jelly', why:'Light defining jelly for curls', asin:'B076MFRLZG', emoji:'🌀' }
      ]},
      { step:'Styling Gel', why:'Layer on top of curl cream — scrunch out the crunch gently once fully dry', products:[
        { brand:'Ecoslay', name:'Orange Marmalade Gel', why:'Strong-hold gel for curls', asin:'B07N9YJHZS', emoji:'✨' },
        { brand:'Aunt Jackie\'s', name:'Don\'t Shrink Flaxseed Curl Gel', why:'Firm-hold gel; carbomer-based with flaxseed added', asin:'B00AE0I1LY', emoji:'✨' },
        { brand:'LA Looks', name:'Extreme Sport Gel', why:'Budget strong-hold gel', asin:'B003DUVNMC', emoji:'✨' }
      ]}
    ]
  },
'4A': {
    name: 'Defined S-Coil Hair',
    desc: 'Defined S-shaped coils with visible curl pattern need consistent LOC/LCO moisture layering, gentle handling, and rich products — though slightly lighter than 4C.',
    steps: [
      { step:'Pre-Poo Oil Treatment', why:'Oil before shampoo: in lab tests, coconut oil applied before washing reduced protein loss', products:[
        { brand:'Viva Naturals', name:'Organic Extra Virgin Coconut Oil', why:'The one pre-wash oil with lab support: coconut oil reduced protein loss when applied before washing', emoji:'🥥' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', why:'Plain, fragrance-free jojoba oil; a lighter pre-wash option', asin:'B07NQPPDTT', emoji:'🛢️' },
        { brand:'Aunt Jackie\'s', name:'Oh So Clean! Moisturizing & Softening Hair Oil', why:'Budget multi-oil blend', asin:'B007GWZRN6', emoji:'🛢️' }
      ]},
      { step:'Cleansing Shampoo', why:'Shampoo in 4–6 sections to minimize tangles — 2–4x per month', products:[
        { brand:'Cantu', name:'Sulfate-Free Cleansing Cream Shampoo', why:'Budget sulfate-free cream shampoo', asin:'B00GQCLBF0', emoji:'🧴' },
        { brand:'As I Am', name:'Curl Clarity Shampoo', why:'Clarifying shampoo for buildup', asin:'B00FOCP8OY', emoji:'🧴' },
        { brand:'SheaMoisture', name:'African Black Soap Deep Cleansing Shampoo', why:'Clarifying shampoo for removing buildup', asin:'B01CYT2SIM', emoji:'🧴' }
      ]},
      { step:'Deep Conditioner', why:'Non-negotiable weekly step — apply generously and sit under heat 20–30 min', products:[
        { brand:'Aussie', name:'3 Minute Miracle Moist Deep Conditioner', why:'Budget deep conditioner for Type 4 coils', asin:'B00189HW4G', emoji:'🎭' },
        { brand:'SheaMoisture', name:'Manuka Honey & Mafura Oil Masque', why:'Deep conditioning mask with honey and mafura oil', asin:'B074P77QJM', emoji:'🎭' },
        { brand:'Briogeo', name:'Don\'t Despair, Repair! Deep Conditioning Mask', why:'Premium deep conditioning mask', asin:'B00XPIFPUA', emoji:'🎭' }
      ]},
      { step:'Leave-In Conditioner (L in LOC)', why:'Apply generously to wet hair — this is the water layer that moisturizes from within', products:[
        { brand:'Cantu', name:'Shea Butter Leave-In Conditioning Repair Cream', why:'Ideal leave-in base layer for 4A LOC', asin:'B00AE0I1QE', emoji:'💧' },
        { brand:'Mielle Organics', name:'Pomegranate & Honey Leave-In', why:'Leave-in conditioner with a light feel', asin:'B075CMWWVL', emoji:'💧' },
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Leave-In', why:'Rich castor oil leave-in', asin:'B073XVF1MM', emoji:'💧' }
      ]},
      { step:'Curl Cream (C in LOC)', why:'Layer over leave-in — seals in moisture and defines the curl pattern', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl Enhancing Smoothie', why:'Defines 4A S-coils with lasting moisture', asin:'B004YJQFOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', why:'Budget rich cream, easy to find', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'Aunt Jackie\'s', name:'Curl La La Defining Curl Custard', why:'Cream-gel custard: slip and hold in one layer', asin:'B003ZYCF8I', emoji:'🌀' }
      ]},
      { step:'Sealing Oil (O in LOC)', why:'Final step — seal the cream layer in, paying special attention to ends', products:[
        { brand:'Jamaican Mango & Lime', name:'Pure Black Castor Oil', why:'Thick sealing oil for dry ends', asin:'B00CTTCF0M', emoji:'🛢️' },
        { brand:'Mielle Organics', name:'Rosemary Mint Scalp & Hair Oil', why:'Light oil with rosemary and mint; no evidence it grows healthy hair', asin:'B07GVSYL1S', emoji:'🛢️' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', why:'Plain, fragrance-free light sealing oil', asin:'B07NQPPDTT', emoji:'🛢️' }
      ]}
    ]
  },
  '4B': {
    name: 'Z-Pattern Coily Hair',
    desc: 'Sharp angular Z-pattern coils with a cottony texture and less definition need maximum moisture, very rich products, and consistent protective styling to retain length.',
    steps: [
      { step:'Pre-Poo Oil Treatment', why:'Oil before shampoo: in lab tests, coconut oil applied before washing reduced protein loss', products:[
        { brand:'Viva Naturals', name:'Organic Extra Virgin Coconut Oil', why:'The one pre-wash oil with lab support: coconut oil reduced protein loss when applied before washing', emoji:'🥥' },
        { brand:'Jamaican Mango & Lime', name:'Pure Black Castor Oil', why:'Thick castor oil; a heavier pre-wash option for very dry hair', asin:'B00CTTCF0M', emoji:'🛢️' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', why:'Plain, fragrance-free jojoba oil; a lighter pre-wash option', asin:'B07NQPPDTT', emoji:'🛢️' }
      ]},
      { step:'Cleansing Shampoo', why:'Shampoo in sections on stretched or twisted hair — 2–4x per month maximum', products:[
        { brand:'SheaMoisture', name:'African Black Soap Deep Cleansing Shampoo', why:'Clarifying shampoo for removing buildup', asin:'B01CYT2SIM', emoji:'🧴' },
        { brand:'Cantu', name:'Sulfate-Free Cleansing Cream Shampoo', why:'Budget sulfate-free cream shampoo', asin:'B00GQCLBF0', emoji:'🧴' },
        { brand:'Design Essentials', name:'Natural Almond & Avocado Detangling Shampoo', why:'Gentle detangling shampoo; premium price', asin:'B004BJDVPW', emoji:'🧴' }
      ]},
      { step:'Deep Conditioner', why:'Weekly non-negotiable — use a hooded dryer or heating cap for 30+ minutes', products:[
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Masque', why:'Deep conditioning masque with protein', asin:'B00XCBPGUI', emoji:'🎭' },
        { brand:'Aussie', name:'3 Minute Miracle Moist Deep Conditioner', why:'Budget deep conditioner', asin:'B00189HW4G', emoji:'🎭' },
        { brand:'Camille Rose', name:'Algae Renew Deep Conditioning Mask', why:'Deep conditioning mask for softness', asin:'B07FKJRNHH', emoji:'🎭' }
      ]},
      { step:'Leave-In Conditioner (L in LOC)', why:'Saturate hair completely — 4B absorbs moisture quickly and needs maximum product', products:[
        { brand:'Cantu', name:'Shea Butter Leave-In Conditioning Repair Cream', why:'Moisture-base leave-in for 4B LOC', asin:'B00AE0I1QE', emoji:'💧' },
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Leave-In', why:'Rich leave-in conditioner with castor oil', asin:'B073XVF1MM', emoji:'💧' },
        { brand:'Olaplex', name:'No.6 Bond Smoother', why:'Premium leave-in smoother; optional, and the priciest step', asin:'B08QHL2RVH', emoji:'💧' }
      ]},
      { step:'Moisturizing Cream (C in LOC)', why:'Use generously — 4B Z-pattern coils need the richest creams to seal in moisture', products:[
        { brand:'SheaMoisture', name:'Raw Shea Butter Extra-Moisture Transitioning Milk', why:'Rich shea cream — ideal LOC middle layer for high-porosity 4B coils', asin:'B00BQWQIOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', why:'Budget rich cream, easy to find', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'Mielle Organics', name:'Babassu Oil & Mint Deep Conditioner', why:'Deep conditioner with babassu oil', asin:'B074X13HC7', emoji:'🌀' }
      ]},
      { step:'Sealing Oil (O in LOC)', why:'Lock in all layers — focus on ends, which are the oldest and most fragile part', products:[
        { brand:'Jamaican Mango & Lime', name:'Pure Black Castor Oil', why:'Thick sealing oil for dry ends', asin:'B00CTTCF0M', emoji:'🛢️' },
        { brand:'Mielle Organics', name:'Rosemary Mint Scalp & Hair Oil', why:'Light oil with rosemary and mint; no evidence it grows healthy hair', asin:'B07GVSYL1S', emoji:'🛢️' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', why:'Plain, fragrance-free light sealing oil', asin:'B07NQPPDTT', emoji:'🛢️' }
      ]}
    ]
  }
};

const defaultFor = {};

let selectedType = null;

function _selectHair(el, type) {
  document.querySelectorAll('.hair-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedType = type;
  const btn = document.getElementById('findBtn');
  btn.disabled = false;
  btn.textContent = `→ Build Type ${type} Routine`;
  document.getElementById('stickyFind').classList.add('visible');
  const inlineBtn = document.getElementById('inlineBtn');
  if (inlineBtn) inlineBtn.textContent = `→ Build Type ${type} Routine`;
  const inlineCta = document.getElementById('inlineCta');
  if (inlineCta) inlineCta.style.display = 'block';
}

function buildVideoBlock(type, stepName) {
  const q1 = encodeURIComponent(`type ${type} hair ${stepName} routine tutorial`);
  const q2 = encodeURIComponent(`${stepName} for type ${type} hair tips`);
  const q3 = encodeURIComponent(`type ${type} natural hair ${stepName} step by step`);
  const cards = [
    { q: q1, label: `${stepName} Routine Guide` },
    { q: q2, label: `${stepName} Tips & Technique` },
    { q: q3, label: `${stepName} Step-by-Step` }
  ];
  return `
    <div class="tutorials-block" aria-label="Video tutorials for this step">
      <h4>▶ Video Tutorials</h4>
      <p class="tut-sub">Find tutorials made for your hair type on YouTube</p>
      <div class="videos-row">
        ${cards.map(c => `
          <a href="https://www.youtube.com/results?search_query=${c.q}" target="_blank" rel="noopener" class="yt-search-card" aria-label="Search YouTube for: ${c.label}">
            <span class="yt-search-label">▶ YouTube</span>
            <span class="yt-search-title">${c.label}</span>
            <span class="yt-search-cta">Search YouTube →</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

// Free 4C Wash Day Checklist signup, shown on type 4 results only (4A, 4B, 4C).
// Same Mailchimp form as the blog posts; Mailchimp sends subscribers to /checklist.html.
function buildChecklistSignup(type) {
  const wrap = document.createElement('section');
  wrap.className = 'quiz-signup';
  wrap.setAttribute('aria-labelledby', 'quizSignupHeading');
  wrap.style.cssText = 'margin:8px 0 56px;padding:36px 28px;background:#3D2B1F;border-radius:4px;text-align:center;';
  const sub = type === '4C'
    ? 'Every wash day step in order, from pre-poo to protecting your hair overnight. One printable page.'
    : 'Every wash day step in order, from pre-poo to protecting your hair overnight. Written for 4C. Take what fits your ' + type + ' wash day.';
  wrap.innerHTML = `
    <p style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#C4945A;margin:0 0 12px;font-family:'DM Sans',sans-serif;">Free download</p>
    <h3 id="quizSignupHeading" style="font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(22px,4vw,30px);font-weight:400;color:#FAF7F2;margin:0 0 8px;line-height:1.2;">Get the 4C Wash Day Checklist</h3>
    <p style="font-family:'DM Sans',sans-serif;font-size:15px;color:#E8DDD0;margin:0 auto 24px;line-height:1.5;max-width:460px;">${sub}</p>
    <form action="https://hair.us10.list-manage.com/subscribe/post?u=d1b239b37b6c1105dd901b721&amp;id=4220e3e234&amp;f_id=0046e0e1f0" method="post" target="_blank" rel="noopener noreferrer">
      <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:500px;margin:0 auto;position:relative;">
        <label for="qsName" style="position:absolute;left:-5000px;">First name</label>
        <input id="qsName" type="text" name="FNAME" placeholder="First name" autocomplete="given-name" style="flex:1;min-width:130px;padding:13px 16px;border:1px solid rgba(196,148,90,0.4);background:rgba(255,255,255,0.08);color:#FAF7F2;font-family:'DM Sans',sans-serif;font-size:16px;border-radius:3px;outline:none;">
        <label for="qsEmail" style="position:absolute;left:-5000px;">Email address</label>
        <input id="qsEmail" type="email" name="EMAIL" placeholder="Email address" required autocomplete="email" style="flex:2;min-width:190px;padding:13px 16px;border:1px solid rgba(196,148,90,0.4);background:rgba(255,255,255,0.08);color:#FAF7F2;font-family:'DM Sans',sans-serif;font-size:16px;border-radius:3px;outline:none;">
        <div style="position:absolute;left:-5000px;" aria-hidden="true"><input type="text" name="b_d1b239b37b6c1105dd901b721_4220e3e234" tabindex="-1" value=""></div>
        <button type="submit" style="padding:13px 24px;background:#C4945A;color:#2A1F1A;border:none;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:500;letter-spacing:.03em;cursor:pointer;border-radius:3px;white-space:nowrap;">Get the checklist &rarr;</button>
      </div>
    </form>
    <p style="font-family:'DM Sans',sans-serif;font-size:12px;color:rgba(232,221,208,0.75);margin:16px 0 0;">Free. No spam. Unsubscribe anytime.</p>
  `;
  wrap.querySelector('form').addEventListener('submit', () => {
    if (typeof gtag === 'function') gtag('event', 'sign_up', { method: 'quiz_results', hair_type: type });
  });
  return wrap;
}

// ─── SHOP THIS ROUTINE (summary at the top of results) ───
function buildShopRoutine(type, data) {
  const wrap = document.createElement('section');
  wrap.className = 'shop-routine';
  wrap.setAttribute('aria-labelledby', 'shop-routine-h');
  const tiers = [['Top picks', 0], ['Best value', 1], ['Premium', 2]];
  const rows = tier => data.steps.map((st, i) => {
    const p = st.products[tier] || st.products[0];
    return `<li class="sr-row">
      <span class="sr-no" aria-hidden="true">0${i + 1}</span>
      <span class="sr-id"><span class="sr-step">${st.step}</span><span class="sr-name">${p.brand} ${p.name}</span></span>
      <a class="sr-buy" href="${amzLink(p.brand, p.name)}" target="_blank" rel="noopener sponsored" data-placement="quiz_summary" data-product="${(p.brand + ' ' + p.name).replace(/"/g, '')}" aria-label="View ${(p.brand + ' ' + p.name).replace(/"/g, '')} on Amazon (affiliate link, opens in a new tab)">Amazon &rarr;</a>
    </li>`;
  }).join('');
  wrap.innerHTML = `
    <div class="sr-head">
      <p class="sr-kicker">Shop the Type ${type} routine</p>
      <h3 id="shop-routine-h">Your routine at a glance</h3>
    </div>
    <div class="sr-tabs" role="group" aria-label="Choose a price tier">
      ${tiers.map(([label, t]) => `<button type="button" class="sr-tab${t === 0 ? ' on' : ''}" data-tier="${t}" aria-pressed="${t === 0}">${label}</button>`).join('')}
    </div>
    <ol class="sr-list">${rows(0)}</ol>
    <p class="sr-note">One product per step, in order. Alternatives and why each step matters are below.</p>`;
  wrap.querySelectorAll('.sr-tab').forEach(btn => btn.addEventListener('click', () => {
    const t = +btn.dataset.tier;
    wrap.querySelectorAll('.sr-tab').forEach(b => { b.classList.toggle('on', b === btn); b.setAttribute('aria-pressed', b === btn); });
    wrap.querySelector('.sr-list').innerHTML = rows(t);
    if (typeof gtag === 'function') gtag('event', 'routine_tier', { tier: btn.textContent, hair_type: type });
  }));
  return wrap;
}

// Measure affiliate clicks by placement (quiz summary vs product cards)
document.addEventListener('click', e => {
  const a = e.target.closest && e.target.closest('#results a[href*="amazon.com"]');
  if (!a || typeof gtag !== 'function') return;
  gtag('event', 'affiliate_click', {
    placement: a.dataset.placement || 'quiz_card',
    product: a.dataset.product || (a.getAttribute('aria-label') || '').replace(/^View | on Amazon.*$/g, ''),
    hair_type: typeof selectedType !== 'undefined' ? selectedType : ''
  });
});

// ─── GUIDE OFFER (Type 4 results only) ───
function buildGuideOffer(type) {
  const wrap = document.createElement('aside');
  wrap.className = 'guide-offer-quiz';
  wrap.innerHTML = `
    <p class="go-kicker">For Type ${type} hair</p>
    <p class="go-title">Keep the length you <em>grow</em></p>
    <p class="go-text">Your routine, turned into a full wash-day system: why Type 4 length disappears, routines by porosity, a printable checklist and a 12-week length tracker. 12 pages, 20 studies cited. $9 launch price (then $12).</p>
    <a class="go-btn" href="/guide.html" data-placement="quiz_results">See the guide &rarr;</a>`;
  wrap.querySelector('a').addEventListener('click', () => {
    if (typeof gtag === 'function') gtag('event', 'guide_click', { placement: 'quiz_results', hair_type: type });
  });
  return wrap;
}

function _showResults(skipScroll) {
  if (!selectedType) { alert('Please select your hair type above first.'); return; }
  try {
  const key = routines[selectedType] ? selectedType : (defaultFor[selectedType] || '3B');
  const data = routines[key];

  document.getElementById('resultBadge').textContent = selectedType;
  document.getElementById('resultTitle').textContent = `Type ${selectedType} — ${data.name}`;
  document.getElementById('resultDesc').textContent = data.desc;

  const container = document.getElementById('routineSteps');
  container.innerHTML = '';
  container.appendChild(buildShopRoutine(selectedType, data));
  if (/^4[ABC]$/.test(selectedType)) container.appendChild(buildGuideOffer(selectedType));

  data.steps.forEach((step, i) => {
    const div = document.createElement('div');
    div.className = 'product-step';
    const rankLabels = ['⭐ Top Pick', 'Best Value', '✦ Premium'];
    div.innerHTML = `
      <div class="routine-label">Step ${i + 1}</div>
      <div class="step-header">
        <div class="step-number" aria-hidden="true">0${i + 1}</div>
        <div class="step-info">
          <h3>${step.step}</h3>
          <p>${step.why}</p>
        </div>
      </div>
      <div class="products-row">
        ${step.products.map((p, pi) => `
          <article class="product-card" style="animation: fadeUp 0.4s ${0.1 + pi * 0.1}s ease both">
            <div class="rank-badge">${rankLabels[pi]}</div>
            <div class="product-emoji" aria-hidden="true">${p.emoji}</div>
            <div class="product-brand">${p.brand}</div>
            <h4 class="product-name">${p.name}</h4>
            <p class="product-why">${p.why}</p>
            <a href="${amzLink(p.brand, p.name)}" target="_blank" rel="noopener sponsored" class="amazon-btn" aria-label="View ${p.name} on Amazon (affiliate link)">
              View on Amazon →
            </a>
          </article>
        `).join('')}
      </div>
      ${buildVideoBlock(key, step.step)}
    `;
    container.appendChild(div);
    if (i === 0 && /^4[ABC]$/.test(selectedType)) container.appendChild(buildChecklistSignup(selectedType));
  });

  const resultsEl = document.getElementById('results');
  resultsEl.classList.add('active');
  // Hide the floating CTA once results are on screen so it can't cover product cards.
  // Selecting a different hair type later re-shows it (see _selectHair) so the user can rebuild.
  document.getElementById('stickyFind').classList.remove('visible');
  // Update page title and meta for SEO shareability
  document.title = `Type ${selectedType} Hair Routine — Best Products & Tutorials | Strand`;
  // Conversion events — GA4 + Google Ads
  if (typeof gtag === 'function') {
    gtag('event', 'quiz_complete', { hair_type: selectedType });
    gtag('event', 'conversion', { send_to: 'AW-980643963/tiqHCOC9tJ4cEPvgzdMD', value: 1.0, currency: 'USD' });
  }

  if (!skipScroll) {
    requestAnimationFrame(() => requestAnimationFrame(() =>
      resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    ));
  }
  } catch(err) {
    alert('Error building routine: ' + err.message + '\n\nPlease open your browser console (F12) for details.');
    console.error('showResults error:', err);
  }
}

function toggleFaq(el) {
  el.classList.toggle('open');
}

function shareResult() {
  const url = `${window.location.origin}${window.location.pathname}?type=${selectedType}`;
  if (navigator.share) {
    navigator.share({ title: `My Type ${selectedType} Hair Routine — Strand`, url });
  } else {
    navigator.clipboard.writeText(url).then(() => alert(`Link copied! Share your Type ${selectedType} routine 💛`));
  }
}

function shareTwitter() {
  const url = encodeURIComponent(`${window.location.origin}${window.location.pathname}?type=${selectedType}`);
  const text = encodeURIComponent(`Just found my perfect hair routine for Type ${selectedType} hair 💛 Check yours out on Strand:`);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}
