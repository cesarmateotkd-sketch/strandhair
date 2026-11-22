import json,re
S='/tmp/claude-0/-home-user/5f474957-f89a-5380-8ec0-1223eb433f11/scratchpad/myths'
d=json.load(open(S+'/steps.json'))
p='/home/user/strandhair/wash-day-checklist.html'; s=open(p).read()
TITLE='Wash Day Checklist for Natural Hair: Free Printable | Strand'
DESC='A wash day checklist for natural hair, step by step: one for 4A–4C coils, one for 2A–3C waves and curls, with the research behind each step. Free PDF.'
OGT='Wash Day Checklist for Natural Hair (Free Printable)'
URL='https://hairtypequiz.hair/wash-day-checklist.html'
s=re.sub(r'<title>.*?</title>','<title>'+TITLE+'</title>',s)
s=re.sub(r'(<meta name="description" content=")[^"]*',r'\g<1>'+DESC,s)
for k in ['og:title','twitter:title']: s=re.sub(r'(<meta (?:property|name)="'+k+'" content=")[^"]*',r'\g<1>'+OGT,s)
for k in ['og:description','twitter:description']: s=re.sub(r'(<meta (?:property|name)="'+k+'" content=")[^"]*',r'\g<1>'+DESC,s)
faq=[("How often should I have a wash day?","For tightly coiled hair, the American Academy of Dermatology suggests washing once a week or every other week. Wavy hair usually needs washing more often, often 2 to 3 times a week, because it looks oily and weighed down sooner. Adjust to your scalp: itch and buildup mean wash more often."),
("Do I need to deep condition every wash day?","For 4C hair, most routines deep condition every wash day, and warmth helps conditioning ingredients get into hair in lab tests. Wavy and curly hair often only needs it when hair feels dry or rough."),
("Should I use the LOC or LCO method?","No study compares the two orders. LOC often suits hair that dries out fast, LCO hair where products sit on top. Both put water first and oil after it, which is the part with lab support."),
("What order should wash day steps go in?","Pre-poo, shampoo the scalp, detangle with conditioner in, deep condition with warmth, leave-in on soaking wet hair, then style, dry and protect overnight.")]
ld={"@context":"https://schema.org","@graph":[
 {"@type":"Article","@id":URL,"headline":OGT,"description":DESC,"image":"https://hairtypequiz.hair/images/pin-4c-wash-day-checklist.png","datePublished":"2026-07-03","dateModified":"2026-11-22","author":{"@type":"Person","name":"César","url":"https://hairtypequiz.hair/about.html#author"},"publisher":{"@type":"Organization","name":"Strand","url":"https://hairtypequiz.hair/"},"mainEntityOfPage":URL},
 {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://hairtypequiz.hair/"},{"@type":"ListItem","position":2,"name":"Wash Day Checklist","item":URL}]},
 {"@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in faq]}]}
s=re.sub(r'<script type="application/ld\+json">.*?</script>\n?','',s,flags=re.S)
s=s.replace('</head>','<script type="application/ld+json">\n'+json.dumps(ld,ensure_ascii=False,indent=1)+'\n</script>\n</head>',1)
css='''.ans{font-size:17px;line-height:1.7;color:var(--text);max-width:680px;margin:0 auto 28px;text-align:left}
.jump{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:0 0 40px}.jump a{border:1px solid var(--sand);background:#fff;padding:8px 14px;font-size:14px;color:var(--espresso);text-decoration:none}
.which{width:100%;max-width:680px;margin:0 auto 48px;border-collapse:collapse;font-size:15px}.which th,.which td{padding:10px 12px;border-bottom:1px solid var(--sand);text-align:left}.which th{background:var(--espresso);color:#FAF7F2;font-weight:400}
.cl{max-width:720px;margin:0 auto 56px}.cl h2,.sec h2{font-family:'Cormorant Garamond',serif;font-size:clamp(28px,4vw,36px);font-weight:400;color:var(--espresso);line-height:1.15;margin-bottom:6px}
.cl .for{color:var(--muted);font-size:15px;margin-bottom:18px}
.cl ol{list-style:none;counter-reset:s;display:flex;flex-direction:column;gap:8px}.cl li{counter-increment:s;background:#fff;border:1px solid var(--sand);padding:14px 16px 14px 58px;position:relative}
.cl li::before{content:counter(s);position:absolute;left:18px;top:8px;font-family:'Cormorant Garamond',serif;font-size:32px;color:var(--caramel)}
.cl h3{font-size:16px;font-weight:500;color:var(--espresso);display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}.cl h3 span{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--caramel-text);font-weight:400}
.cl li p{font-size:15px;line-height:1.6;margin-top:2px}
.rules{background:#F1E8DC;border-left:3px solid var(--caramel);padding:14px 18px;margin-top:12px}.rules strong{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--espresso)}.rules p{font-size:15px;margin-top:4px}
.form-card{max-width:520px;margin:0 auto 56px}
.sec{max-width:720px;margin:0 auto 48px}.sec table{width:100%;border-collapse:collapse;font-size:14.5px;margin-top:14px}.sec th{background:var(--espresso);color:#FAF7F2;font-weight:400;text-align:left;padding:9px 12px}.sec td{padding:10px 12px;border-bottom:1px solid var(--sand);vertical-align:top}.sec a{color:var(--caramel-text)}
.sec h3{font-size:17px;font-weight:500;color:var(--espresso);margin:18px 0 4px}.sec p{font-size:15.5px}
@media(max-width:640px){.sec table.m-stack thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}.sec table.m-stack,.sec table.m-stack tbody,.sec table.m-stack tr,.sec table.m-stack td{display:block;width:100%}.sec table.m-stack tr{border:1px solid var(--sand);border-top:3px solid var(--espresso);margin:0 0 12px;background:#fff}.sec table.m-stack td{border:0;border-bottom:1px dashed var(--sand)}.sec table.m-stack td[data-label]::before{content:attr(data-label);display:block;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}}
</style>'''
s=s.replace('</style>',css,1)
def cl(key,hid,title,forwho):
    x=d[key]; li=''.join(f'<li><h3>{t}<span>{l}</span></h3><p>{desc}</p></li>' for t,l,desc in x['steps'])
    r=''.join(f'<p>&mdash; {y}</p>' for y in x['rules'])
    return f'<section class="cl" id="{hid}"><h2>{title}</h2><p class="for">{forwho}</p><ol>{li}</ol><div class="rules"><strong>The rules that make it work</strong>{r}</div></section>\n'
form=s[s.index('<div class="form-card">'):]; form=form[:form.index('</form>')]+'</form>\n        <p class="note">No spam, ever. Unsubscribe anytime.</p>\n      </div>'
form=form.replace('<h3>Get the checklist</h3>','<h3>Get both printable checklists</h3>').replace('Free instant download &mdash; sent straight to your screen.','One page each, free. Print it and tape it to the mirror.').replace('Send Me the Checklist &rarr;','Send Me the Checklists &rarr;')
P=lambda i,l:f'<a href="https://pubmed.ncbi.nlm.nih.gov/{i}/" target="_blank" rel="noopener">{l}</a>'
rows=[("Coconut oil before washing reduced protein loss; mineral oil did not",P(12715094,"J Cosmet Sci 2003"),"Pre-poo with coconut oil","Lab"),
("High-pH shampoos increased friction between hairs",P(25210332,"Int J Trichology 2014"),"Pick a pH-balanced shampoo","Lab"),
("Combing damage rose with every stroke on tightly coiled hair",P(33605448,"Int J Cosmet Sci 2021"),"Detangle with conditioner in, fewer passes","Lab"),
("Warmth helped oils and conditioning ingredients get into hair",P(16258695,"J Cosmet Sci 2005")+", "+P(18494914,"Int J Cosmet Sci 2004"),"Deep condition under a warm cap","Lab"),
("An oil film slowed how much water hair took up",P(17520153,"J Cosmet Sci 2007"),"Water first, oil last","Lab"),
("Dryer heat raised surface damage; long wet time had costs too",P(22148012,"Ann Dermatol 2011"),"Diffuse on low, or air dry","Lab"),
("LOC vs LCO, cold-water rinses, the best wash frequency","No study tests these","Go by how your hair feels","Not studied")]
tbl='<table class="m-stack"><thead><tr><th>Finding</th><th>Source</th><th>Wash day step</th><th>Evidence</th></tr></thead><tbody>'+''.join(f'<tr><td data-label="Finding">{a}</td><td data-label="Source">{b}</td><td data-label="Wash day step">{c}</td><td data-label="Evidence">{e}</td></tr>' for a,b,c,e in rows)+'</tbody></table>'
main=f'''<main>
  <div class="hero">
    <p class="eyebrow">Free printable &middot; updated November 2026</p>
    <h1>Wash Day Checklist for Natural Hair</h1>
  </div>
  <p class="ans"><strong>A good wash day runs in the same order every time:</strong> pre-poo, shampoo the scalp, detangle with conditioner in, deep condition with warmth, leave-in on soaking wet hair, then style, dry and protect overnight. Below are both Strand checklists in full, one for coily hair and one for waves and curls, with the research behind each step. The printable versions fit on one page.</p>
  <div class="jump"><a href="#coily">4C checklist (4A&ndash;4C)</a><a href="#waves-curls">Waves &amp; curls checklist (2A&ndash;3C)</a><a href="#research">What research shows</a></div>
  <table class="which"><thead><tr><th>Your hair</th><th>Use</th></tr></thead><tbody>
    <tr><td>Coily, 4A&ndash;4C</td><td><a href="#coily">The 4C Wash Day Checklist</a></td></tr>
    <tr><td>Wavy or curly, 2A&ndash;3C</td><td><a href="#waves-curls">The Waves &amp; Curls Wash Day Checklist</a></td></tr>
    <tr><td>Not sure</td><td><a href="/">Take the 2-minute hair type quiz</a></td></tr>
  </tbody></table>
{cl('4C Wash Day Checklist','coily','The 4C Wash Day Checklist','For coily hair, 4A&ndash;4C. Full guide: <a href="/blog/4c-hair-care-routine.html#wash-day">the 4C hair care routine</a>.')}
  {form}
{cl('Waves & Curls Wash Day Checklist','waves-curls','The Waves &amp; Curls Wash Day Checklist','For wavy and curly hair, 2A&ndash;3C. Full guides: <a href="/blog/wavy-hair-routine-beginners.html">wavy hair routine</a> and <a href="/blog/3c-hair-care-routine.html">3C routine</a>.')}
  <section class="sec" id="research"><h2>What Research Shows About Wash Day</h2><p>Few studies test whole wash routines. These lab studies on hair fibers explain why the steps above are in that order, and which popular rules have never been tested. More in <a href="/blog/hair-myths-vs-evidence.html">natural hair myths vs evidence</a>.</p>{tbl}</section>
  <section class="sec"><h2>Frequently Asked Questions</h2>{''.join(f'<h3>{q}</h3><p>{a}</p>' for q,a in faq)}</section>
  <div class="below">
    <p>Want products matched to your curl pattern? Take the free <a href="/">hair type quiz</a>. For detangling without breakage, read <a href="/blog/detangling-natural-hair.html">how to detangle natural hair</a>.</p>
  </div>
</main>'''
a=s.index('<main>'); b=s.index('</main>')+7
s=s[:a]+main+s[b:]
open(p,'w').write(s); print('ok')
