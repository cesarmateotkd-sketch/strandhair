const {chromium}=require('playwright');const {execSync}=require('child_process');(async()=>{const b=await chromium.launch();
for (const [src,out] of [['c4.html','4c-wash-day-checklist.pdf'],['wc.html','waves-curls-wash-day-checklist.pdf']]){
 const p=await b.newPage();await p.route('**/*',r=>r.request().url().startsWith('file:')?r.continue():r.abort());
 await p.goto('file://'+__dirname+'/'+src);await p.evaluate(()=>document.fonts.ready);
 console.log(src,await p.evaluate(()=>[document.querySelector('.wrap').scrollHeight,document.querySelector('.wrap').clientHeight,[...document.fonts].map(f=>f.status).join()]));
 const path='/home/user/strandhair/downloads/'+out;await p.pdf({path,printBackground:true,preferCSSPageSize:true});
 console.log(out,execSync(`pdfinfo "${path}" | awk '/Pages/{print $2}'`).toString().trim(),'pages');
 execSync(`pdftoppm -r 110 -png -singlefile "${path}" "${__dirname}/${out}"`);}
await b.close()})()
