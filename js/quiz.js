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
        { brand:'Kérastase', name:'Bain Divalent Balancing Shampoo', stars:4.6, reviews:'12.4k', price:'$38', why:'Rebalances oily roots while preserving ends — beloved by fine hair communities', asin:'B07K8P5TH6', emoji:'🧴' },
        { brand:'OGX', name:'Bodifying Bamboo Fiber-Full Shampoo', stars:4.4, reviews:'8.2k', price:'$9', why:'Budget volumizer with bamboo extract — drugstore fan-favorite', asin:'B07GJ4LSNK', emoji:'🧴' },
        { brand:'Living Proof', name:'Full Shampoo', stars:4.5, reviews:'6.7k', price:'$32', why:'HEALTHY HAIR Molecule lifts roots without weighing strands down', asin:'B00B5HMFJ6', emoji:'🧴' }
      ]},
      { step:'Conditioner', why:'Lightweight only — mid-lengths to ends, never at roots', products:[
        { brand:'Pantene', name:'Aqua Light Conditioner', stars:4.3, reviews:'5.1k', price:'$7', why:'Micro-light formula won\'t flatten fine strands — huge value', asin:'B00BKQP0SO', emoji:'🫙' },
        { brand:'Briogeo', name:'Don\'t Despair, Repair! Conditioner', stars:4.6, reviews:'9.3k', price:'$28', why:'Clean ingredients, strengthens without adding weight', asin:'B00Z5X72XO', emoji:'🫙' },
        { brand:'Kérastase', name:'Nutritive Lait Vital Conditioner', stars:4.7, reviews:'4.8k', price:'$42', why:'Luxury pick — feather-light nourishment, salon-grade results', asin:'B001PUCMX4', emoji:'🫙' }
      ]},
      { step:'Volumizing Spray', why:'Apply to damp roots before blow-drying for all-day lift', products:[
        { brand:'Kenra', name:'Platinum Silkening Mist', stars:4.5, reviews:'3.2k', price:'$26', why:'Thermal protection + shine without crunch — pro stylist favorite', asin:'B00DPGXBCS', emoji:'✨' },
        { brand:'Bumble and bumble', name:'Thickening Spray', stars:4.4, reviews:'7.1k', price:'$31', why:'Cult classic — instantly boosts body at roots', asin:'B000FBIYZO', emoji:'✨' },
        { brand:'Not Your Mother\'s', name:'Curl Talk Frizz Control Spray', stars:4.2, reviews:'11k', price:'$8', why:'Best budget pick, widely available, loved on TikTok', asin:'B07MQ2XHWS', emoji:'✨' }
      ]}
    ]
  },
  '2B': {
    name: 'Defined Wavy Hair',
    desc: 'Medium waves need frizz control and definition without heaviness that would drag your waves flat.',
    steps: [
      { step:'Sulfate-Free Shampoo', why:'Preserves your wave pattern and natural oils', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Shampoo', stars:4.5, reviews:'18.3k', price:'$11', why:'Massive reviews, beloved by the wavy community for definition and moisture', asin:'B004YJQFOU', emoji:'🧴' },
        { brand:'Maui Moisture', name:'Curl Quench + Coconut Oil Shampoo', stars:4.4, reviews:'9.5k', price:'$8', why:'Drugstore hero — clean formula, outstanding value for wavies', asin:'B07B2VQMD3', emoji:'🧴' },
        { brand:'Ouai', name:'Thick Hair Shampoo', stars:4.4, reviews:'6.9k', price:'$30', why:'Weightless hydration with biotin — smells incredible', asin:'B073WFRLNB', emoji:'🧴' }
      ]},
      { step:'Conditioner', why:'Finger-detangle while in, rinse 80% — leave a little in', products:[
        { brand:'Aussie', name:'Miracle Moist Conditioner', stars:4.5, reviews:'22k', price:'$6', why:'Legendary budget conditioner — one of the most reviewed on Amazon', asin:'B00JJZZ2EW', emoji:'🫙' },
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Conditioner', stars:4.6, reviews:'15.2k', price:'$11', why:'Pairs with the shampoo — moisture without weight, cult status', asin:'B004YJQFPE', emoji:'🫙' },
        { brand:'Briogeo', name:'Curl Charisma Rice Amino + Avocado Leave-In', stars:4.5, reviews:'3.8k', price:'$22', why:'Works as rinse-out or leave-in — premium clean beauty option', asin:'B01I0VBLHQ', emoji:'🫙' }
      ]},
      { step:'Leave-In Conditioner', why:'Apply to soaking wet hair before any stylers', products:[
        { brand:'Not Your Mother\'s', name:'Curl Talk Leave-In Conditioner', stars:4.4, reviews:'14.7k', price:'$8', why:'#1 drugstore wavy pick — lightweight, no crunch, viral on TikTok', asin:'B07MQ3BQLZ', emoji:'💧' },
        { brand:'Garnier', name:'Fructis Sleek & Shine Leave-In', stars:4.3, reviews:'19.1k', price:'$5', why:'Ultra-affordable staple loved by millions, controls frizz beautifully', asin:'B000052YQQ', emoji:'💧' },
        { brand:'Kinky-Curly', name:'Knot Today Leave-In / Detangler', stars:4.4, reviews:'7.2k', price:'$12', why:'Natural ingredients, detangles and moisturizes in one step', asin:'B000KKNQBE', emoji:'💧' }
      ]},
      { step:'Wave Mousse or Gel', why:'Scrunch in while soaking wet — air dry or diffuse on low', products:[
        { brand:'Aussie', name:'Instant Freeze Sculpting Gel', stars:4.4, reviews:'6.3k', price:'$5', why:'Iconic budget gel — beloved by wave communities for hold + definition', asin:'B00189CPRS', emoji:'💨' },
        { brand:'Herbal Essences', name:'bio:renew Curl Boosting Mousse', stars:4.3, reviews:'8.9k', price:'$7', why:'Lightweight mousse for soft, bouncy waves without stiffness', asin:'B06XWZSP45', emoji:'💨' },
        { brand:'Moroccanoil', name:'Curl Defining Cream', stars:4.5, reviews:'5.8k', price:'$32', why:'Premium argan oil formula — reduces frizz, gorgeous shine', asin:'B00BF94OD4', emoji:'💨' }
      ]}
    ]
  },
  '3B': {
    name: 'Springy, Defined Curls',
    desc: 'Defined corkscrews need deep moisture, anti-frizz protection, and strong curl-clumping products.',
    steps: [
      { step:'Co-Wash or Shampoo', why:'Co-wash 1–2x weekly; clarifying shampoo every 1–2 weeks', products:[
        { brand:'As I Am', name:'Coconut CoWash Cleansing Conditioner', stars:4.5, reviews:'16.8k', price:'$9', why:'The co-wash standard — cult favorite in the natural hair community', asin:'B004VD4FWY', emoji:'🧴' },
        { brand:'Cantu', name:'Sulfate-Free Cleansing Cream Shampoo', stars:4.6, reviews:'21.4k', price:'$9', why:'Massive ratings, shea butter formula, Amazon\'s top curly shampoo', asin:'B00GQCLBF0', emoji:'🧴' },
        { brand:'DevaCurl', name:'No-Poo Zero Lather Shampoo', stars:4.3, reviews:'8.2k', price:'$24', why:'The original curl-method shampoo, huge cult following', asin:'B001TCO5EI', emoji:'🧴' }
      ]},
      { step:'Deep Conditioner', why:'Weekly — leave 15–30 min under a shower cap with heat', products:[
        { brand:'Briogeo', name:'Don\'t Despair, Repair! Deep Mask', stars:4.6, reviews:'11.2k', price:'$38', why:'Top-rated clean deep conditioner — transforms curl health in one use', asin:'B00XPIFPUA', emoji:'🎭' },
        { brand:'SheaMoisture', name:'Manuka Honey & Mafura Oil Masque', stars:4.5, reviews:'13.6k', price:'$13', why:'Outstanding moisture-to-price ratio, #1 budget deep conditioner', asin:'B074P77QJM', emoji:'🎭' },
        { brand:'Camille Rose', name:'Algae Renew Deep Conditioning Mask', stars:4.5, reviews:'5.7k', price:'$16', why:'Natural, clean formula beloved for softness and curl definition', asin:'B07FKJRNHH', emoji:'🎭' }
      ]},
      { step:'Leave-In Conditioner', why:'Apply to sopping wet hair — your moisture base layer', products:[
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Leave-In', stars:4.6, reviews:'9.8k', price:'$12', why:'Jamaican Black Castor Oil strengthens while leaving curls soft', asin:'B073XVF1MM', emoji:'💧' },
        { brand:'Mielle Organics', name:'Pomegranate & Honey Leave-In', stars:4.5, reviews:'12.3k', price:'$10', why:'Viral on TikTok/Reels, lightweight but ultra-moisturizing', asin:'B075CMWWVL', emoji:'💧' },
        { brand:'Kinky-Curly', name:'Knot Today Leave-In', stars:4.4, reviews:'7.2k', price:'$12', why:'Natural staple — detangles and primes curls for styling', asin:'B000KKNQBE', emoji:'💧' }
      ]},
      { step:'Curl Cream', why:'Rake and smooth through sections, then scrunch for clumping', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl Enhancing Smoothie', stars:4.6, reviews:'34.2k', price:'$13', why:'Amazon\'s #1 curl cream — 34k+ reviews, the definitive crowd favorite', asin:'B004YJQFOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', stars:4.5, reviews:'19.7k', price:'$7', why:'Best budget curl cream available, widely accessible', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'Ouidad', name:'Curl Quencher Moisturizing Gel', stars:4.4, reviews:'4.1k', price:'$26', why:'Professional curl brand, humidity-resistant formula', asin:'B000I50Y2S', emoji:'🌀' }
      ]},
      { step:'Styling Gel', why:'Layer on top of curl cream — scrunch out the crunch once dry', products:[
        { brand:'LA Looks', name:'Extreme Sport Gel', stars:4.5, reviews:'7.8k', price:'$4', why:'Cheapest effective curl gel — massive curl community following', asin:'B003DUVNMC', emoji:'✨' },
        { brand:'Ecoslay', name:'Orange Marmalade Gel', stars:4.6, reviews:'3.4k', price:'$16', why:'Black-owned brand, clean ingredients, natural hair community darling', asin:'B07N9YJHZS', emoji:'✨' },
        { brand:'Aunt Jackie\'s', name:'Don\'t Shrink Flaxseed Curl Gel', stars:4.5, reviews:'8.6k', price:'$9', why:'Combats shrinkage, defined clumps, popular across 3B–4A types', asin:'B00AE0I1LY', emoji:'✨' }
      ]}
    ]
  },
  '4C': {
    name: 'Tight Coily, Natural Hair',
    desc: 'Type 4C needs maximum moisture retention, the gentlest possible handling, and a consistent LOC/LCO layering routine.',
    steps: [
      { step:'Pre-Poo Oil Treatment', why:'Apply before shampoo — prevents moisture loss and breakage', products:[
        { brand:'Mielle Organics', name:'Rosemary Mint Scalp & Hair Oil', stars:4.5, reviews:'47.2k', price:'$10', why:'Amazon bestseller — went mega-viral on TikTok for growth and moisture', asin:'B07GVSYL1S', emoji:'🛢️' },
        { brand:'Jamaican Mango & Lime', name:'Pure Black Castor Oil', stars:4.7, reviews:'8.9k', price:'$10', why:'4C staple — strengthens, reduces breakage, promotes growth', asin:'B00CTTCF0M', emoji:'🛢️' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', stars:4.7, reviews:'34.6k', price:'$14', why:'Fragrance-free jojoba — mimics scalp\'s natural sebum, deeply nourishing', asin:'B07NQPPDTT', emoji:'🛢️' }
      ]},
      { step:'Cleansing Shampoo', why:'Shampoo in sections — only 2–4x per month to protect moisture', products:[
        { brand:'SheaMoisture', name:'African Black Soap Deep Cleansing Shampoo', stars:4.5, reviews:'14.3k', price:'$12', why:'Deep cleanses without over-stripping — 4C community\'s top shampoo pick', asin:'B01CYT2SIM', emoji:'🧴' },
        { brand:'Cantu', name:'Sulfate-Free Cleansing Cream Shampoo', stars:4.6, reviews:'21.4k', price:'$9', why:'Top-reviewed affordable option — gentle and moisturizing', asin:'B00GQCLBF0', emoji:'🧴' },
        { brand:'Design Essentials', name:'Natural Almond & Avocado Detangling Shampoo', stars:4.6, reviews:'5.2k', price:'$14', why:'Salon-quality, extremely gentle — premium 4C pick', asin:'B004BJDVPW', emoji:'🧴' }
      ]},
      { step:'Deep Conditioner', why:'Non-negotiable weekly step — use heat for penetration', products:[
        { brand:'Aussie', name:'3 Minute Miracle Moist Deep Conditioner', stars:4.6, reviews:'31.8k', price:'$7', why:'31k+ reviews — shockingly effective budget hero for 4C moisture', asin:'B00189HW4G', emoji:'🎭' },
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Masque', stars:4.6, reviews:'12.7k', price:'$13', why:'Protein + moisture balance — rebuilds 4C strands from within', asin:'B00XCBPGUI', emoji:'🎭' },
        { brand:'Camille Rose', name:'Curl Maker Whipped Jelly', stars:4.4, reviews:'4.9k', price:'$14', why:'Natural, lightweight treatment — popular for softness and definition', asin:'B076MFRLZG', emoji:'🎭' }
      ]},
      { step:'Leave-In Conditioner (L in LOC)', why:'Saturate hair — 4C needs more product than other types', products:[
        { brand:'Cantu', name:'Shea Butter Leave-In Conditioning Repair Cream', stars:4.6, reviews:'28.4k', price:'$8', why:'Amazon\'s best-reviewed leave-in — 28k reviews, top seller for Type 4', asin:'B00AE0I1QE', emoji:'💧' },
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Leave-In', stars:4.6, reviews:'9.8k', price:'$12', why:'The 4C community\'s most-recommended leave-in conditioner', asin:'B073XVF1MM', emoji:'💧' },
        { brand:'Olaplex', name:'No.6 Bond Smoother', stars:4.4, reviews:'22.6k', price:'$28', why:'Bond-repair technology — protects fragile 4C strands from future damage', asin:'B08QHL2RVH', emoji:'💧' }
      ]},
      { step:'Moisturizing Cream (C in LOC)', why:'Layer cream over leave-in to seal in moisture', products:[
        { brand:'SheaMoisture', name:'Raw Shea Butter Extra-Moisture Transitioning Milk', stars:4.5, reviews:'7.6k', price:'$12', why:'Perfect LOC cream — seals moisture without excessive weight', asin:'B00BQWQIOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', stars:4.5, reviews:'19.7k', price:'$7', why:'Most accessible moisture cream — best value for high-porosity 4C hair', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'Mielle Organics', name:'Babassu Oil & Mint Deep Conditioner', stars:4.6, reviews:'6.1k', price:'$12', why:'Black-owned, clean formula, doubles as moisturizer and treatment', asin:'B074X13HC7', emoji:'🌀' }
      ]},
      { step:'Sealing Oil (O in LOC)', why:'Final step — seal everything in, focus on ends', products:[
        { brand:'Jamaican Mango & Lime', name:'Pure Black Castor Oil', stars:4.7, reviews:'8.9k', price:'$10', why:'Gold standard sealing oil for 4C — reduces breakage, adds shine', asin:'B00CTTCF0M', emoji:'🛢️' },
        { brand:'Mielle Organics', name:'Rosemary Mint Scalp & Hair Oil', stars:4.5, reviews:'47.2k', price:'$10', why:'Viral bestseller — lightweight sealing + promotes healthy growth', asin:'B07GVSYL1S', emoji:'🛢️' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', stars:4.7, reviews:'34.6k', price:'$14', why:'Clean, fragrance-free — mimics scalp\'s natural sebum perfectly', asin:'B07NQPPDTT', emoji:'🛢️' }
      ]}
    ]
  },
'1B': {
    name: 'Straight with Body',
    desc: 'Medium-texture straight hair with slight bends at the ends needs balancing products that add body without weighing strands down.',
    steps: [
      { step:'Balancing Shampoo', why:'Wash 2–3x weekly — look for volumizing or balancing formulas, not clarifying', products:[
        { brand:'Redken', name:'All Soft Shampoo', stars:4.6, reviews:'14.2k', price:'$22', why:'Softens and adds movement to medium straight hair without limp results', asin:'B00150Y7LO', emoji:'🧴' },
        { brand:'Pantene', name:'Sheer Volume Shampoo', stars:4.4, reviews:'9.8k', price:'$7', why:'Classic drugstore volume shampoo — light, fluffy, widely available', asin:'B00P58R6XG', emoji:'🧴' },
        { brand:'Pureology', name:'Pure Volume Shampoo', stars:4.6, reviews:'5.3k', price:'$32', why:'Sulfate-free salon formula, protects color while boosting body', asin:'B001796ZN2', emoji:'🧴' }
      ]},
      { step:'Lightweight Conditioner', why:'Apply mid-shaft to ends — avoid roots to prevent flatness', products:[
        { brand:'Pantene', name:'Daily Moisture Renewal Conditioner', stars:4.5, reviews:'11.1k', price:'$7', why:'Balances moisture and body — a consistent crowd-pleaser for straight hair', asin:'B00BEJOOYC', emoji:'🫙' },
        { brand:'TRESemmé', name:'Moisture Rich Conditioner', stars:4.4, reviews:'7.6k', price:'$6', why:'Affordable staple, keeps 1B hair smooth and manageable', asin:'B00L6MWCGM', emoji:'🫙' },
        { brand:'Nexxus', name:'Keraphix Conditioner', stars:4.5, reviews:'4.2k', price:'$18', why:'Protein-infused formula strengthens medium-texture strands beautifully', asin:'B00JSUSL34', emoji:'🫙' }
      ]},
      { step:'Volumizing Mousse or Spray', why:'Apply to damp roots and mid-lengths before blow-drying', products:[
        { brand:'John Frieda', name:'Luxurious Volume Touchably Full Mousse', stars:4.4, reviews:'6.7k', price:'$10', why:'Lightweight mousse specifically designed for fine-to-medium straight hair', asin:'B00029TUPC', emoji:'✨' },
        { brand:'Kenra', name:'Volume Spray 25', stars:4.6, reviews:'8.1k', price:'$22', why:'Stylist-favorite finishing spray — massive volume with flexible hold', asin:'B001B1UM52', emoji:'✨' },
        { brand:'Not Your Mother\'s', name:'Curl Talk Frizz Control Spray', stars:4.2, reviews:'11k', price:'$8', why:'Budget all-rounder — controls flyaways and adds a light hold', asin:'B07MQ2XHWS', emoji:'✨' }
      ]}
    ]
  },
  '1C': {
    name: 'Straight + Coarse',
    desc: 'Thick, resistant straight hair with slight wave tendency needs moisture-rich cleansing, smoothing treatments, and frizz control without losing movement.',
    steps: [
      { step:'Moisturizing Shampoo', why:'Wash 2x weekly max — coarse hair gets dry faster than fine types', products:[
        { brand:'OGX', name:'Hydrate & Repair Argan Oil of Morocco Shampoo', stars:4.5, reviews:'16.3k', price:'$9', why:'Argan oil tames coarse strands and adds brilliant shine — drugstore hero', asin:'B004R7MFSK', emoji:'🧴' },
        { brand:'Redken', name:'All Soft Shampoo', stars:4.6, reviews:'14.2k', price:'$22', why:'Softens stiff, resistant 1C strands and smooths the cuticle layer', asin:'B00150Y7LO', emoji:'🧴' },
        { brand:'Pureology', name:'Hydrate Sheer Shampoo', stars:4.7, reviews:'4.6k', price:'$34', why:'Luxury pick — sulfate-free, zero fade, perfect for thick color-treated 1C', asin:'B003YIBJDG', emoji:'🧴' }
      ]},
      { step:'Rich Conditioner', why:'Leave on 2–5 minutes — coarse hair needs more penetration time', products:[
        { brand:'OGX', name:'Hydrate & Repair Argan Oil of Morocco Conditioner', stars:4.6, reviews:'13.1k', price:'$9', why:'Pairs with the shampoo — deeply smooths coarse texture without weight', asin:'B004R7MFUS', emoji:'🫙' },
        { brand:'Matrix', name:'Total Results Mega Sleek Conditioner', stars:4.5, reviews:'5.8k', price:'$18', why:'Salon brand formulated specifically for thick, resistant hair', asin:'B001C1KGDQ', emoji:'🫙' },
        { brand:'Kenra', name:'Platinum Silkening Conditioner', stars:4.7, reviews:'3.1k', price:'$26', why:'Pro-grade silk proteins tame even the most resistant 1C strands', asin:'B0042UQLGA', emoji:'🫙' }
      ]},
      { step:'Anti-Frizz Serum', why:'Apply a pea-size amount to dry or damp hair — focus on mid-lengths and ends', products:[
        { brand:'Garnier', name:'Fructis Sleek & Shine Anti-Frizz Serum', stars:4.4, reviews:'12.9k', price:'$6', why:'Best budget frizz serum — controls flyaways on coarse straight hair all day', asin:'B000052YQQ', emoji:'💧' },
        { brand:'Moroccanoil', name:'Treatment Original', stars:4.7, reviews:'28.4k', price:'$34', why:'The cult argan oil — smooths coarse 1C hair and adds incredible shine', asin:'B0064RDC2O', emoji:'💧' },
        { brand:'Olaplex', name:'No.7 Bonding Oil', stars:4.5, reviews:'19.2k', price:'$30', why:'Bond-strengthening oil reduces breakage in resistant strands', asin:'B08QHKWGPD', emoji:'💧' }
      ]}
    ]
  },
'2A': {
    name: 'Fine Loose Waves',
    desc: 'Fine, tousled S-waves that easily straighten need the lightest possible products — anything too heavy will drag the wave pattern completely flat.',
    steps: [
      { step:'Sulfate-Free Shampoo', why:'Wash 2–3x weekly — sulfates strip the natural oils that define fine waves', products:[
        { brand:'Garnier', name:'Fructis Curl Nourish Sulfate-Free Shampoo', stars:4.4, reviews:'8.7k', price:'$6', why:'Gentle and lightweight — preserves fine wave pattern without residue', asin:'B07MQLZ1ZX', emoji:'🧴' },
        { brand:'Not Your Mother\'s', name:'Curl Talk Shampoo', stars:4.4, reviews:'12.1k', price:'$8', why:'Drugstore fan-favorite for wavy hair — cleans without over-stripping', asin:'B07MQ2NJRJ', emoji:'🧴' },
        { brand:'Briogeo', name:'Curl Charisma Shampoo', stars:4.5, reviews:'3.9k', price:'$22', why:'Clean ingredients, no sulfates — gentle enough for fine 2A strands', asin:'B01I0VBLHA', emoji:'🧴' }
      ]},
      { step:'Lightweight Conditioner', why:'Apply ends-only on 2A — even mid-shaft can weigh fine waves flat', products:[
        { brand:'Herbal Essences', name:'bio:renew Curl Defining Conditioner', stars:4.3, reviews:'7.2k', price:'$6', why:'Super lightweight rinse-out — just enough slip without flattening', asin:'B06XWZ7FZK', emoji:'🫙' },
        { brand:'Not Your Mother\'s', name:'Curl Talk Conditioner', stars:4.4, reviews:'10.3k', price:'$8', why:'The cult wavy-hair conditioner — light, detangling, wave-friendly', asin:'B07MQ3G6Z3', emoji:'🫙' },
        { brand:'Ouai', name:'Fine Hair Conditioner', stars:4.5, reviews:'5.1k', price:'$30', why:'Designed specifically for fine waves — weightless hydration with biotin', asin:'B073WG5PRS', emoji:'🫙' }
      ]},
      { step:'Wave-Enhancing Mousse', why:'Scrunch into soaking-wet hair — mousse over gel keeps fine waves from crunching', products:[
        { brand:'Herbal Essences', name:'bio:renew Curl Boosting Mousse', stars:4.3, reviews:'8.9k', price:'$7', why:'Featherlight mousse for soft, natural waves without stiffness or crunch', asin:'B06XWZSP45', emoji:'💨' },
        { brand:'Not Your Mother\'s', name:'Curl Talk Curl Defining Mousse', stars:4.4, reviews:'9.6k', price:'$8', why:'#1 budget mousse for wavy hair — defines without weighing down', asin:'B07MQ3RXPJ', emoji:'💨' },
        { brand:'Bumble and bumble', name:'Surf Foam Spray Blow Dry', stars:4.4, reviews:'3.8k', price:'$32', why:'Adds beachy texture and wave definition — premium pick for 2A', asin:'B00NXVFC3E', emoji:'💨' }
      ]}
    ]
  },
  '2C': {
    name: 'Strong Frizz-Prone Waves',
    desc: 'Thick, coarse S-waves that border on curly need moisture-first products and strong hold to control frizz without losing the wave shape.',
    steps: [
      { step:'Sulfate-Free Shampoo', why:'Wash 1–2x weekly — coarse wave texture dries out faster than finer types', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Shampoo', stars:4.5, reviews:'18.3k', price:'$11', why:'Massive reviews, adds moisture and definition for thicker wave patterns', asin:'B004YJQFOU', emoji:'🧴' },
        { brand:'DevaCurl', name:'No-Poo Original Zero Lather Shampoo', stars:4.3, reviews:'8.2k', price:'$24', why:'Co-washing cleanser — preserves natural oils in thick, frizz-prone 2C', asin:'B001TCO5EI', emoji:'🧴' },
        { brand:'Ouai', name:'Thick Hair Shampoo', stars:4.4, reviews:'6.9k', price:'$30', why:'Biotin-infused, weightless hydration formula designed for thick waves', asin:'B073WFRLNB', emoji:'🧴' }
      ]},
      { step:'Conditioner', why:'Finger-detangle in the shower, rinse 70% — leaving a little in helps 2C waves', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Conditioner', stars:4.6, reviews:'15.2k', price:'$11', why:'Moisture-rich but not heavy — deeply conditions coarse wave texture', asin:'B004YJQFPE', emoji:'🫙' },
        { brand:'Aussie', name:'Miracle Moist Conditioner', stars:4.5, reviews:'22k', price:'$6', why:'Budget staple with 22k reviews — outstanding slip and moisture', asin:'B00JJZZ2EW', emoji:'🫙' },
        { brand:'Jessicurl', name:'Aloeba Daily Conditioner', stars:4.6, reviews:'2.9k', price:'$20', why:'Specifically formulated for wavy-to-curly hair by a wavy-hair brand', asin:'B00171PCYS', emoji:'🫙' }
      ]},
      { step:'Leave-In Conditioner', why:'Apply to soaking-wet hair before any stylers — moisture base is critical for 2C', products:[
        { brand:'Not Your Mother\'s', name:'Curl Talk Leave-In Conditioner', stars:4.4, reviews:'14.7k', price:'$8', why:'Lightweight but effective — controls frizz without flattening thick waves', asin:'B07MQ3BQLZ', emoji:'💧' },
        { brand:'Kinky-Curly', name:'Knot Today Leave-In / Detangler', stars:4.4, reviews:'7.2k', price:'$12', why:'Natural ingredients — detangles and moisturizes coarse wave texture', asin:'B000KKNQBE', emoji:'💧' },
        { brand:'SheaMoisture', name:'Jamaican Black Castor Oil Leave-In', stars:4.6, reviews:'9.8k', price:'$12', why:'Strengthens thick strands while delivering serious frizz control', asin:'B073XVF1MM', emoji:'💧' }
      ]},
      { step:'Curl Cream + Gel', why:'Layer a curl cream under gel — scrunching both in wet gives 2C its best definition', products:[
        { brand:'Moroccanoil', name:'Curl Defining Cream', stars:4.5, reviews:'5.8k', price:'$32', why:'Argan oil formula controls thick 2C frizz with beautiful shine', asin:'B00BF94OD4', emoji:'🌀' },
        { brand:'Cantu', name:'Wave Whip Curling Mousse', stars:4.4, reviews:'6.1k', price:'$8', why:'Affordable definition cream for wavy-to-curly types — great value', asin:'B012F9X1DW', emoji:'🌀' },
        { brand:'Ouidad', name:'Curl Quencher Moisturizing Gel', stars:4.4, reviews:'4.1k', price:'$26', why:'Professional curl brand — humidity-resistant hold for coarse 2C waves', asin:'B000I50Y2S', emoji:'🌀' }
      ]}
    ]
  },
'3A': {
    name: 'Loose Spiral Curls',
    desc: 'Large, shiny spirals about the diameter of sidewalk chalk need moisture and curl-clumping products, but lighter ones than tighter curl types to avoid weighing curls down.',
    steps: [
      { step:'Co-Wash or Shampoo', why:'Co-wash 1–2x weekly; clarify with shampoo every 2 weeks to remove buildup', products:[
        { brand:'As I Am', name:'Coconut CoWash Cleansing Conditioner', stars:4.5, reviews:'16.8k', price:'$9', why:'Gentle co-wash standard — preserves moisture in 3A spirals without stripping', asin:'B004VD4FWY', emoji:'🧴' },
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Shampoo', stars:4.5, reviews:'18.3k', price:'$11', why:'Lightweight moisture shampoo — defines 3A spirals while cleansing gently', asin:'B004YJQFOU', emoji:'🧴' },
        { brand:'Pattern Beauty', name:'Cleansing Shampoo', stars:4.6, reviews:'3.4k', price:'$24', why:'Tracee Ellis Ross\'s curl brand — formulated specifically for Type 3 spirals', asin:'B083Q2X7FV', emoji:'🧴' }
      ]},
      { step:'Conditioner', why:'Detangle with fingers while conditioner is in — rinse out fully for 3A', products:[
        { brand:'Briogeo', name:'Curl Charisma Rice Amino + Avocado Leave-In', stars:4.5, reviews:'3.8k', price:'$22', why:'Light enough for 3A spirals — adds definition without weighing large curls down', asin:'B01I0VBLHQ', emoji:'🫙' },
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl & Shine Conditioner', stars:4.6, reviews:'15.2k', price:'$11', why:'Moisture + definition without heaviness — perfect for 3A curl size', asin:'B004YJQFPE', emoji:'🫙' },
        { brand:'Ouidad', name:'Moisture Lock Leave-In Conditioner', stars:4.5, reviews:'2.6k', price:'$26', why:'Curl specialist brand — humectant formula keeps 3A spirals hydrated all day', asin:'B000I4XDWU', emoji:'🫙' }
      ]},
      { step:'Leave-In Conditioner', why:'Apply to soaking-wet hair, then style immediately — 3A curls define best when dripping wet', products:[
        { brand:'Mielle Organics', name:'Pomegranate & Honey Leave-In', stars:4.5, reviews:'12.3k', price:'$10', why:'Viral TikTok leave-in — lightweight moisture that defines 3A spirals', asin:'B075CMWWVL', emoji:'💧' },
        { brand:'Kinky-Curly', name:'Knot Today Leave-In / Detangler', stars:4.4, reviews:'7.2k', price:'$12', why:'Natural staple — primes 3A curls for perfect clumping and definition', asin:'B000KKNQBE', emoji:'💧' },
        { brand:'Olaplex', name:'No.6 Bond Smoother', stars:4.4, reviews:'22.6k', price:'$30', why:'Bond-strengthening leave-in that reduces frizz and boosts shine in spirals', asin:'B08QHL2RVH', emoji:'💧' }
      ]},
      { step:'Light Curl Cream', why:'Rake through sections and scrunch — use less product than you think you need for 3A', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl Enhancing Smoothie', stars:4.6, reviews:'34.2k', price:'$13', why:'Amazon\'s #1 curl cream — use a small amount on 3A to define without weighing down', asin:'B004YJQFOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', stars:4.5, reviews:'19.7k', price:'$7', why:'Best budget curl cream — excellent for 3A when used sparingly', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'DevaCurl', name:'SuperCream Coconut Curl Styler', stars:4.4, reviews:'4.8k', price:'$28', why:'Curl-specific formula — defines 3A spirals without the crunch', asin:'B007N4VKLE', emoji:'🌀' }
      ]}
    ]
  },
  '3C': {
    name: 'Tight Corkscrew Curls',
    desc: 'Tight corkscrews about the width of a pencil or straw need heavy moisture, strong curl creams, and consistent protein treatments to maintain definition and reduce frizz.',
    steps: [
      { step:'Co-Wash or Shampoo', why:'Co-wash 1–2x weekly; sulfate-free shampoo every 1–2 weeks', products:[
        { brand:'Cantu', name:'Sulfate-Free Cleansing Cream Shampoo', stars:4.6, reviews:'21.4k', price:'$9', why:'Top-reviewed gentle shampoo — 21k reviews, ideal for dense 3C curls', asin:'B00GQCLBF0', emoji:'🧴' },
        { brand:'As I Am', name:'Coconut CoWash Cleansing Conditioner', stars:4.5, reviews:'16.8k', price:'$9', why:'Co-wash staple — preserves moisture in tightly packed 3C corkscrews', asin:'B004VD4FWY', emoji:'🧴' },
        { brand:'DevaCurl', name:'No-Poo Decadence Zero Lather Cleanser', stars:4.4, reviews:'3.2k', price:'$26', why:'Rich formula designed for dense curl patterns — no lather, no dryness', asin:'B00F5EQ1C0', emoji:'🧴' }
      ]},
      { step:'Deep Conditioner', why:'Weekly — apply generously, cover with a shower cap, and leave 20–30 min', products:[
        { brand:'SheaMoisture', name:'Manuka Honey & Mafura Oil Masque', stars:4.5, reviews:'13.6k', price:'$13', why:'Outstanding moisture-to-price ratio — softens and defines 3C corkscrews', asin:'B074P77QJM', emoji:'🎭' },
        { brand:'Briogeo', name:'Don\'t Despair, Repair! Deep Conditioning Mask', stars:4.6, reviews:'11.2k', price:'$38', why:'Top clean beauty deep conditioner — transforms 3C curl health in one use', asin:'B00XPIFPUA', emoji:'🎭' },
        { brand:'Camille Rose', name:'Algae Renew Deep Conditioning Mask', stars:4.5, reviews:'5.7k', price:'$16', why:'Natural formula beloved for softness, manageability, and curl definition', asin:'B07FKJRNHH', emoji:'🎭' }
      ]},
      { step:'Leave-In Conditioner', why:'Apply to sopping wet hair — 3C needs more leave-in than looser curl types', products:[
        { brand:'Mielle Organics', name:'Pomegranate & Honey Leave-In', stars:4.5, reviews:'12.3k', price:'$10', why:'Viral leave-in — delivers serious moisture to tight 3C corkscrews', asin:'B075CMWWVL', emoji:'💧' },
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Leave-In', stars:4.6, reviews:'9.8k', price:'$12', why:'Jamaican Black Castor Oil strengthens tight strands while softening curls', asin:'B073XVF1MM', emoji:'💧' },
        { brand:'Cantu', name:'Shea Butter Leave-In Conditioning Repair Cream', stars:4.6, reviews:'28.4k', price:'$8', why:'Amazon\'s best-reviewed leave-in — rich enough for dense 3C texture', asin:'B00AE0I1QE', emoji:'💧' }
      ]},
      { step:'Curl Cream', why:'Rake and smooth through sections — 3C needs more product than looser types', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl Enhancing Smoothie', stars:4.6, reviews:'34.2k', price:'$13', why:'34k reviews — the definitive curl cream for 3C definition and moisture', asin:'B004YJQFOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', stars:4.5, reviews:'19.7k', price:'$7', why:'Best budget option — maximum accessibility and value for 3C hair', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'Camille Rose', name:'Curl Maker Whipped Jelly', stars:4.4, reviews:'4.9k', price:'$14', why:'Natural, lightweight-for-3C cream — beloved for softness and definition', asin:'B076MFRLZG', emoji:'🌀' }
      ]},
      { step:'Styling Gel', why:'Layer on top of curl cream — scrunch out the crunch gently once fully dry', products:[
        { brand:'Ecoslay', name:'Orange Marmalade Gel', stars:4.6, reviews:'3.4k', price:'$16', why:'Black-owned, clean ingredients — combats frizz in tight 3C curl patterns', asin:'B07N9YJHZS', emoji:'✨' },
        { brand:'Aunt Jackie\'s', name:'Don\'t Shrink Flaxseed Curl Gel', stars:4.5, reviews:'8.6k', price:'$9', why:'Flaxseed formula fights shrinkage — popular for 3C through 4A curl types', asin:'B00AE0I1LY', emoji:'✨' },
        { brand:'LA Looks', name:'Extreme Sport Gel', stars:4.5, reviews:'7.8k', price:'$4', why:'Cheapest effective curl gel — huge curl community following for tight types', asin:'B003DUVNMC', emoji:'✨' }
      ]}
    ]
  },
'4A': {
    name: 'Defined S-Coil Hair',
    desc: 'Defined S-shaped coils with visible curl pattern need consistent LOC/LCO moisture layering, gentle handling, and rich products — though slightly lighter than 4C.',
    steps: [
      { step:'Pre-Poo Oil Treatment', why:'Apply before shampooing — prevents moisture loss and tangles during washing', products:[
        { brand:'Mielle Organics', name:'Rosemary Mint Scalp & Hair Oil', stars:4.5, reviews:'47.2k', price:'$10', why:'Mega-viral TikTok bestseller — promotes growth and protects 4A coils pre-wash', asin:'B07GVSYL1S', emoji:'🛢️' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', stars:4.7, reviews:'34.6k', price:'$14', why:'Fragrance-free — mimics scalp\'s natural sebum, ideal pre-poo for 4A', asin:'B07NQPPDTT', emoji:'🛢️' },
        { brand:'Aunt Jackie\'s', name:'Oh So Clean! Moisturizing & Softening Hair Oil', stars:4.5, reviews:'5.3k', price:'$9', why:'Multi-oil blend designed specifically for Type 4 natural hair pre-poo', asin:'B007GWZRN6', emoji:'🛢️' }
      ]},
      { step:'Cleansing Shampoo', why:'Shampoo in 4–6 sections to minimize tangles — 2–4x per month', products:[
        { brand:'Cantu', name:'Sulfate-Free Cleansing Cream Shampoo', stars:4.6, reviews:'21.4k', price:'$9', why:'Top-reviewed affordable shampoo — gentle, moisturizing, and widely trusted for 4A', asin:'B00GQCLBF0', emoji:'🧴' },
        { brand:'As I Am', name:'Curl Clarity Shampoo', stars:4.5, reviews:'8.1k', price:'$10', why:'Clarifying but gentle — removes buildup while maintaining 4A curl integrity', asin:'B00FOCP8OY', emoji:'🧴' },
        { brand:'SheaMoisture', name:'African Black Soap Deep Cleansing Shampoo', stars:4.5, reviews:'14.3k', price:'$12', why:'Deep cleanses scalp without over-stripping — popular 4A community pick', asin:'B01CYT2SIM', emoji:'🧴' }
      ]},
      { step:'Deep Conditioner', why:'Non-negotiable weekly step — apply generously and sit under heat 20–30 min', products:[
        { brand:'Aussie', name:'3 Minute Miracle Moist Deep Conditioner', stars:4.6, reviews:'31.8k', price:'$7', why:'31k reviews — shockingly effective budget deep conditioner for Type 4 coils', asin:'B00189HW4G', emoji:'🎭' },
        { brand:'SheaMoisture', name:'Manuka Honey & Mafura Oil Masque', stars:4.5, reviews:'13.6k', price:'$13', why:'Honey and mafura oil restore softness and definition to 4A coils', asin:'B074P77QJM', emoji:'🎭' },
        { brand:'Briogeo', name:'Don\'t Despair, Repair! Deep Conditioning Mask', stars:4.6, reviews:'11.2k', price:'$38', why:'Clean-ingredient deep mask — rebuilds protein balance in Type 4 hair', asin:'B00XPIFPUA', emoji:'🎭' }
      ]},
      { step:'Leave-In Conditioner (L in LOC)', why:'Apply generously to wet hair — this is the water layer that moisturizes from within', products:[
        { brand:'Cantu', name:'Shea Butter Leave-In Conditioning Repair Cream', stars:4.6, reviews:'28.4k', price:'$8', why:'Amazon\'s most-reviewed leave-in — 28k reviews, ideal base layer for 4A LOC', asin:'B00AE0I1QE', emoji:'💧' },
        { brand:'Mielle Organics', name:'Pomegranate & Honey Leave-In', stars:4.5, reviews:'12.3k', price:'$10', why:'Viral lightweight leave-in — provides moisture without weighing down 4A coils', asin:'B075CMWWVL', emoji:'💧' },
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Leave-In', stars:4.6, reviews:'9.8k', price:'$12', why:'Castor oil leave-in — strengthens fragile 4A strands while moisturizing', asin:'B073XVF1MM', emoji:'💧' }
      ]},
      { step:'Curl Cream (C in LOC)', why:'Layer over leave-in — seals in moisture and defines the curl pattern', products:[
        { brand:'SheaMoisture', name:'Coconut & Hibiscus Curl Enhancing Smoothie', stars:4.6, reviews:'34.2k', price:'$13', why:'#1 curl cream on Amazon — defines 4A S-coils beautifully with lasting moisture', asin:'B004YJQFOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', stars:4.5, reviews:'19.7k', price:'$7', why:'Best budget cream — maximum value for daily LOC moisture layering', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'Aunt Jackie\'s', name:'Curl La La Defining Curl Custard', stars:4.5, reviews:'9.2k', price:'$10', why:'Black-owned brand designed for Type 4 coils — excellent hold and definition', asin:'B003ZYCF8I', emoji:'🌀' }
      ]},
      { step:'Sealing Oil (O in LOC)', why:'Final step — seal the cream layer in, paying special attention to ends', products:[
        { brand:'Jamaican Mango & Lime', name:'Pure Black Castor Oil', stars:4.7, reviews:'8.9k', price:'$10', why:'Type 4 gold standard sealing oil — strengthens and reduces breakage', asin:'B00CTTCF0M', emoji:'🛢️' },
        { brand:'Mielle Organics', name:'Rosemary Mint Scalp & Hair Oil', stars:4.5, reviews:'47.2k', price:'$10', why:'Viral lightweight oil — seals moisture and promotes healthy 4A growth', asin:'B07GVSYL1S', emoji:'🛢️' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', stars:4.7, reviews:'34.6k', price:'$14', why:'Clean, fragrance-free — mimics sebum perfectly as a sealing oil', asin:'B07NQPPDTT', emoji:'🛢️' }
      ]}
    ]
  },
  '4B': {
    name: 'Z-Pattern Coily Hair',
    desc: 'Sharp angular Z-pattern coils with a cottony texture and less definition need maximum moisture, very rich products, and consistent protective styling to retain length.',
    steps: [
      { step:'Pre-Poo Oil Treatment', why:'Critical for 4B — always pre-poo before shampooing to prevent severe moisture loss', products:[
        { brand:'Jamaican Mango & Lime', name:'Pure Black Castor Oil', stars:4.7, reviews:'8.9k', price:'$10', why:'Dense castor oil penetrates 4B\'s tight Z-pattern to prevent breakage pre-wash', asin:'B00CTTCF0M', emoji:'🛢️' },
        { brand:'Mielle Organics', name:'Rosemary Mint Scalp & Hair Oil', stars:4.5, reviews:'47.2k', price:'$10', why:'Viral bestseller — rosemary promotes growth; ideal pre-poo for 4B scalp', asin:'B07GVSYL1S', emoji:'🛢️' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', stars:4.7, reviews:'34.6k', price:'$14', why:'Fragrance-free jojoba softens the Z-angle pattern before washing', asin:'B07NQPPDTT', emoji:'🛢️' }
      ]},
      { step:'Cleansing Shampoo', why:'Shampoo in sections on stretched or twisted hair — 2–4x per month maximum', products:[
        { brand:'SheaMoisture', name:'African Black Soap Deep Cleansing Shampoo', stars:4.5, reviews:'14.3k', price:'$12', why:'Deep cleanses without stripping — the 4B community\'s top shampoo', asin:'B01CYT2SIM', emoji:'🧴' },
        { brand:'Cantu', name:'Sulfate-Free Cleansing Cream Shampoo', stars:4.6, reviews:'21.4k', price:'$9', why:'Gentle and moisturizing — widely trusted for Z-pattern coil types', asin:'B00GQCLBF0', emoji:'🧴' },
        { brand:'Design Essentials', name:'Natural Almond & Avocado Detangling Shampoo', stars:4.6, reviews:'5.2k', price:'$14', why:'Salon-grade, extremely gentle — premium pick for fragile 4B strands', asin:'B004BJDVPW', emoji:'🧴' }
      ]},
      { step:'Deep Conditioner', why:'Weekly non-negotiable — use a hooded dryer or heating cap for 30+ minutes', products:[
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Masque', stars:4.6, reviews:'12.7k', price:'$13', why:'Protein + moisture balance — essential for rebuilding fragile 4B strands', asin:'B00XCBPGUI', emoji:'🎭' },
        { brand:'Aussie', name:'3 Minute Miracle Moist Deep Conditioner', stars:4.6, reviews:'31.8k', price:'$7', why:'Budget hero — 31k reviews, shockingly effective moisture boost for 4B', asin:'B00189HW4G', emoji:'🎭' },
        { brand:'Camille Rose', name:'Algae Renew Deep Conditioning Mask', stars:4.5, reviews:'5.7k', price:'$16', why:'Natural, clean ingredients — popular for softness in Z-pattern coil types', asin:'B07FKJRNHH', emoji:'🎭' }
      ]},
      { step:'Leave-In Conditioner (L in LOC)', why:'Saturate hair completely — 4B absorbs moisture quickly and needs maximum product', products:[
        { brand:'Cantu', name:'Shea Butter Leave-In Conditioning Repair Cream', stars:4.6, reviews:'28.4k', price:'$8', why:'28k reviews — Amazon\'s top leave-in, perfect moisture base for 4B LOC', asin:'B00AE0I1QE', emoji:'💧' },
        { brand:'SheaMoisture', name:'JBCO Strengthen & Restore Leave-In', stars:4.6, reviews:'9.8k', price:'$12', why:'The 4B community\'s most-recommended leave-in — castor oil strengthens Z-coils', asin:'B073XVF1MM', emoji:'💧' },
        { brand:'Olaplex', name:'No.6 Bond Smoother', stars:4.4, reviews:'22.6k', price:'$28', why:'Bond-repair technology protects the most fragile 4B strands from future damage', asin:'B08QHL2RVH', emoji:'💧' }
      ]},
      { step:'Moisturizing Cream (C in LOC)', why:'Use generously — 4B Z-pattern coils need the richest creams to seal in moisture', products:[
        { brand:'SheaMoisture', name:'Raw Shea Butter Extra-Moisture Transitioning Milk', stars:4.5, reviews:'7.6k', price:'$12', why:'Rich shea cream — ideal LOC middle layer for high-porosity 4B coils', asin:'B00BQWQIOO', emoji:'🌀' },
        { brand:'Cantu', name:'Shea Butter Coconut Curling Cream', stars:4.5, reviews:'19.7k', price:'$7', why:'Best value moisturizing cream — go-to for budget-conscious 4B routines', asin:'B00EM6HHN0', emoji:'🌀' },
        { brand:'Mielle Organics', name:'Babassu Oil & Mint Deep Conditioner', stars:4.6, reviews:'6.1k', price:'$12', why:'Black-owned, clean formula — doubles as moisturizer and strengthening treatment', asin:'B074X13HC7', emoji:'🌀' }
      ]},
      { step:'Sealing Oil (O in LOC)', why:'Lock in all layers — focus on ends, which are the oldest and most fragile part', products:[
        { brand:'Jamaican Mango & Lime', name:'Pure Black Castor Oil', stars:4.7, reviews:'8.9k', price:'$10', why:'Thickest sealing oil for 4B — reduces breakage and adds protective shine', asin:'B00CTTCF0M', emoji:'🛢️' },
        { brand:'Mielle Organics', name:'Rosemary Mint Scalp & Hair Oil', stars:4.5, reviews:'47.2k', price:'$10', why:'Lightweight yet sealing — promotes edge and length retention for 4B', asin:'B07GVSYL1S', emoji:'🛢️' },
        { brand:'Cliganic', name:'100% Pure Jojoba Oil', stars:4.7, reviews:'34.6k', price:'$14', why:'Clean sealing oil — mimics sebum and locks in the full LOC stack', asin:'B07NQPPDTT', emoji:'🛢️' }
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
            <div class="stars" aria-label="${p.stars} out of 5 stars">${'★'.repeat(Math.round(p.stars))}${'☆'.repeat(5-Math.round(p.stars))}</div>
            <div class="review-count">${p.reviews} reviews · ${p.stars}/5</div>
            <div class="price-range">${p.price}</div>
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
  });

  const resultsEl = document.getElementById('results');
  resultsEl.classList.add('active');
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
