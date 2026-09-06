const fs=require('fs');
const path=require('path');
const file=path.join(process.cwd(),'www','index.html');
if(!fs.existsSync(file))process.exit(0);
let s=fs.readFileSync(file,'utf8');
if(!s.includes('pax-management.js')){
  const pre='<div id="compNotes" style="display:none"></div><div id="aprNotes" style="display:none"></div>';
  if(!s.includes('id="compNotes"'))s=s.replace('<script>\n(function(){',pre+'<script>\n(function(){');
  s=s.replace('</body>','<script src="pax-management.js"></script></body>');
  fs.writeFileSync(file,s);
  console.log('PAX management modules injected');
}else console.log('PAX management modules already present');
