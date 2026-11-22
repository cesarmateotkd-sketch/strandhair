import sys
F='file:///home/user/strandhair/fonts/'
CSS='''@font-face{font-family:CG;src:url(%scormorant-garamond-normal.woff2)}@font-face{font-family:CGi;font-style:italic;src:url(%scormorant-garamond-italic.woff2)}@font-face{font-family:DM;src:url(%sdm-sans.woff2)}
@page{size:letter;margin:0}*{margin:0;padding:0;box-sizing:border-box}
html,body{width:8.5in;height:11in;background:#FAF7F2;font-family:DM;color:#2A1F1A;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.bar{height:10px;background:#C4945A}.wrap{padding:22px 40px 0;height:calc(11in - 20px);display:flex;flex-direction:column}
.eyebrow{text-align:center;font-size:10px;letter-spacing:.35em;color:#8B5E1A;font-weight:500}
h1{text-align:center;font-family:CG;font-weight:400;font-size:42px;color:#3D2B1F;margin:10px 0 6px;line-height:1.05}h1 em{font-family:CGi;color:#8B5E1A}
.sub{text-align:center;font-size:12px;color:#6B5B53;margin-bottom:16px}
.card{display:grid;grid-template-columns:16px 26px 1fr;gap:0 10px;background:#fff;border:1px solid #E8DDD0;padding:10px 14px;margin-bottom:7px;align-items:start}
.box{width:13px;height:13px;border:1.5px solid #8B5E1A;margin-top:5px}.num{font-family:CG;font-size:32px;line-height:.9;color:#C4945A}
.head{display:flex;justify-content:space-between;align-items:baseline;gap:10px}.t{font-weight:600;font-size:14px;color:#3D2B1F}
.lab{font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#8B5E1A;white-space:nowrap;text-align:right}
.d{font-size:11.2px;line-height:1.45;color:#3a2c24;margin-top:2px}.d i{color:#6B5B53}
.rules{background:#F1E8DC;border-left:3px solid #C4945A;padding:12px 16px;margin-top:6px}
.rt{font-size:9.5px;letter-spacing:.22em;text-transform:uppercase;color:#3D2B1F;font-weight:600;margin-bottom:4px}
.rules p{font-size:11px;line-height:1.55;color:#3a2c24}
.foot{text-align:center;font-size:9.5px;color:#6B5B53;margin-top:auto;padding:10px 0 12px}.foot b{color:#8B5E1A}.lg{font-family:CG;font-size:14px;color:#3D2B1F;letter-spacing:.1em}.lg em{font-family:CGi;color:#C4945A}
'''%(F,F,F)
STORE={}
def page(title_html,sub,steps,rules,tag):
    STORE[tag]={'sub':sub,'steps':steps,'rules':rules}
    cards=''.join(f'<div class="card"><div class="box"></div><div class="num">{i}</div><div><div class="head"><span class="t">{t}</span><span class="lab">{l}</span></div><p class="d">{d}</p></div></div>' for i,(t,l,d) in enumerate(steps,1))
    r=''.join(f'<p>&mdash; {x}</p>' for x in rules)
    return f'<!doctype html><html><head><meta charset="utf-8"><title>{tag}</title><style>{CSS}</style></head><body><div class="bar"></div><div class="wrap"><p class="eyebrow">STRAND</p><h1>{title_html}</h1><p class="sub">{sub}</p>{cards}<div class="rules"><p class="rt">The rules that make it work</p>{r}</div><p class="foot"><span class="lg">str<em>a</em>nd</span> &middot; find your hair type and full routine at <b>hairtypequiz.hair</b> &middot; <i>Hair grows every month; breakage is why length doesn&rsquo;t show.</i></p></div><div class="bar"></div></body></html>'
L='<i>Lab tests:</i> '
c4=page('The 4C Wash Day <em>Checklist</em>','Every step in order, from pre-poo to protection. Print it, tape it to the bathroom mirror, check it off.',[
('Pre-Poo','30 min to overnight before washing','Coat dry hair in sections with coconut oil. '+L+'coconut oil before washing reduced protein loss from hair; mineral oil did not.'),
('Section &amp; Finger-Detangle','Work in 4&ndash;8 sections','Divide hair into twisted sections. Gently separate the big tangles with fingers only &mdash; never a comb on dry 4C hair. Keep sections twisted through the whole wash.'),
('Shampoo the Scalp','Every 1&ndash;2 weeks','Sulfate-free shampoo massaged into the scalp with fingertips (not nails). Let the suds rinse through the length &mdash; that&rsquo;s enough cleansing for the ends. One section at a time.'),
('Detangle with Conditioner','Ends first, roots last','Apply a slippery rinse-out conditioner, then detangle each section with a wide-tooth comb from the ends up. Combing damage adds up with every stroke, so fewer, gentler passes.'),
('Deep Condition &mdash; With Warmth','15&ndash;30 min, every wash day','Coat every strand. Cover with a cap and add warmth: a steamer, heat cap or warm towel over the cap. '+L+'warmth helped conditioning ingredients get into hair.'),
('L &mdash; Liquid / Leave-In','On soaking wet hair','Water-based leave-in conditioner applied generously in sections. This is the moisture every later step is designed to keep in.'),
('O &mdash; Oil','Focus on the ends','Seal the leave-in with a little oil. '+L+'an oil film slowed how much water hair took up, so oil goes after water, never before.'),
('C &mdash; Cream, Then Style','Style while damp','Layer a curl cream, then style: twists, braids, or gel for a wash-and-go. Applying gel? Hair should still be dripping. Hands off until fully dry.'),
('Protect Overnight','Every single night','Silk or satin bonnet, scarf or pillowcase. Satin is smoother than cotton, so there&rsquo;s less rubbing against the pillow.')],
['Water first, oil last: oil or cream on dry hair keeps water out.','Detangle only with slip &mdash; conditioner in, ends first, fingers before tools.','Once a month, swap the deep conditioner for a protein treatment if hair feels overly stretchy or limp.','Mid-week refresh: spray water + a little leave-in, re-seal ends with oil. No full re-wash needed.'],'4C Wash Day Checklist')
wc=page('The Waves &amp; Curls Wash Day <em>Checklist</em>','For 2A&ndash;3C hair. Every step in order, from pre-poo to day-3 curls. Print it, tape it to the mirror, check it off.',[
('Pre-Poo (Optional)','Dry or damaged ends','Coconut oil on the lengths 30 minutes before washing. '+L+'coconut oil before washing reduced protein loss from hair; mineral oil did not.'),
('Shampoo the Scalp','1&ndash;3&times; a week','pH-balanced shampoo on the scalp only; let the suds rinse through. '+L+'high-pH shampoos raised friction between hairs. Waves: a real shampoo at least weekly, since co-wash alone weighs waves down.'),
('Clarify','Every 2&ndash;4 weeks','Use a clarifying shampoo when products stop working or hair feels coated. Low porosity hair needs it most.'),
('Condition &amp; Detangle','Ends first, roots last','Conditioner on mid-lengths and ends, then fingers and a wide-tooth comb while it&rsquo;s in. Combing damage adds up with every stroke, so fewer, gentler passes. Skip brushing dry curls.'),
('Deep Condition','When hair feels dry','15&ndash;20 minutes under a warm cap or towel. '+L+'warmth helped conditioning ingredients get into hair. Limp or overly stretchy when wet? Use a protein treatment instead.'),
('Leave-In','On soaking wet hair','Apply in the shower if you can. Light for waves, creamier for 3B&ndash;3C curls.'),
('Styler','Gel or mousse to hold','Cream if you need moisture, then gel (curls) or mousse (waves). Scrunch, rake or brush-style into clumps. Oil, if any, last and light: an oil film slowed how much water hair took up.'),
('Dry, Hands Off','Low heat or air dry','Scrunch water out with a cotton T-shirt or microfiber towel (stylist practice). Diffuse on low or air dry: dryer heat raised surface damage, but long wet time had costs too. Scrunch out the cast once fully dry.'),
('Protect &amp; Refresh','Every night','Pineapple or loose bun with a satin bonnet or pillowcase. Day 2&ndash;3: mist with water, add a little styler, scrunch.')],
['Water first, oil last.','Detangle only with slip &mdash; conditioner in, ends first.','Change one product at a time, and give it 2&ndash;3 wash days before you judge it.','Porosity matters more than curl type: no study has measured porosity by curl type, so 3A can be low or high.'],'Waves & Curls Wash Day Checklist')
open(sys.argv[1]+'/c4.html','w').write(c4);open(sys.argv[1]+'/wc.html','w').write(wc)

import json;json.dump(STORE,open(sys.argv[1]+'/steps.json','w'),ensure_ascii=False,indent=1)
