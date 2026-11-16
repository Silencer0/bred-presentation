// Anatomy Figure: two participant profiles on a shared matching board.
// Parts: board, four feet, inset surface, corner fasteners, two profile cards,
// steel clips, portrait discs, three comparison tracks per card and six markers.
// Marker positions are schematic matches, not participant data or numeric scores.
import * as k from '../../skills/anatomy/kit/iso-kit.mjs';
export function matchingFigure(){const P=k.fitProjection(k.boxCorners({x:-116,y:-76,w:232,d:152},0,22),760,570,{pad:30,azimuth:42,elevation:48});const body=[];
 const slab=(x,y,w,d,z,h,tone='hi',r=2)=>body.push(k.solidSvg(k.slabOf({x,y,w,d,r},z,h,P,8,.5),{tone,crease:'mid'}));
 const flat=(x,y,z,markup)=>{const o=k.iso([x,y,z],P),u=k.iso([x+1,y,z],P),v=k.iso([x,y+1,z],P);body.push(`<g transform="matrix(${u[0]-o[0]} ${u[1]-o[1]} ${v[0]-o[0]} ${v[1]-o[1]} ${o[0]} ${o[1]})">${markup}</g>`)};
 for(const x of [-102,91])for(const y of [-63,53])slab(x,y,12,12,0,4,'lo',2);
 slab(-116,-76,232,152,4,6,'mid',7);slab(-111,-71,222,142,10,1,'hi',5);
 for(const x of [-105,105])for(const y of [-64,64]){body.push(k.solidSvg(k.cylinder(x,y,1.6,11,.5,P,20),{tone:'mid'}));flat(x,y,11.6,'<path d="M-1 0h2" stroke="#706b60" stroke-width=".6"/>')}
 for(const [x,letter] of [[-97,'A'],[9,'B']]){
  slab(x,-53,88,108,11.5,1.2,'hi',3);slab(x+1,-52,86,106,12.7,.6,'hi',2);
  // Each profile has a participant portrait and matching indicator tracks.
  flat(x,-53,13.5,`<rect x="5" y="5" width="78" height="98" rx="2" fill="none" stroke="#b0aba0" stroke-width=".5"/><circle cx="22" cy="23" r="11" fill="#e1dfd7" stroke="#8b8579" stroke-width=".65"/><circle cx="22" cy="20" r="3" fill="#777268"/><path d="M16 29c0-7 12-7 12 0" fill="#777268"/><text x="43" y="27" style="font-family:DM,sans-serif;font-size:12px;font-weight:500" fill="#3e3931">${letter}</text><path d="M12 41h64" stroke="#aaa498" stroke-width=".5"/>`);
  const labels=['Memory','Spending tendency','Cash habits'];const positions=[.66,.47,.58];
  for(let row=0;row<3;row++){const y=51+row*17,marker=17+positions[row]*54;flat(x,-53,13.6,`<text x="12" y="${y}" style="font-family:DM,sans-serif;font-size:4.6px" fill="#5f594f">${labels[row]}</text><path d="M17 ${y+7}h54M17 ${y+5}v4m54-4v4" fill="none" stroke="#918b80" stroke-width=".65"/><circle cx="${marker}" cy="${y+7}" r="2.8" fill="#faf9f4" stroke="#3e3931" stroke-width=".8"/>`)}
  // Folded spring clip physically overlaps the paper's upper edge.
  slab(x+30,-56,28,10,13.5,2,'mid',2);slab(x+34,-54,20,6,15.5,1,'hi',1);
  for(const dx of [34,54])flat(x+dx,-51,16.6,'<circle r=".8" fill="#777268"/>');
 }
 return k.figureSvg({width:760,height:570,label:'Two participant profile cards clipped to a matching board, with similar schematic indicators for memory, spending tendency and cash habits',body});}
