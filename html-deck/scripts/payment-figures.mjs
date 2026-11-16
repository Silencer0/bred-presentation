// Anatomy Figure tier. Static physical objects; no fictional study readouts.
// Wallet: lower/upper leather shells, folded spine, lining, banknote stack,
// note frames/medallions, card pockets, inset seams, clasp and metal snap.
// Phone: rounded aluminum frame, glass, screen, side controls, antenna breaks,
// earpiece, camera, status icons, payment confirmation and coin icon.
import * as k from '../../skills/anatomy/kit/iso-kit.mjs';
const palette={leather:'--anatomy-top:#f4f2eb;--anatomy-paper:#f4f2eb;--anatomy-shade-0:#888780;--anatomy-shade-1:#aaa9a1;--anatomy-shade-2:#cccbc3;--anatomy-shade-3:#e4e2da;--anatomy-hi:#252525;',lining:'--anatomy-top:#6b6b67;--anatomy-paper:#6b6b67;--anatomy-shade-0:#383835;--anatomy-shade-1:#494946;--anatomy-shade-2:#565653;--anatomy-shade-3:#62625e;',note:'--anatomy-top:#faf9f4;--anatomy-paper:#faf9f4;--anatomy-shade-0:#aaa9a2;--anatomy-shade-1:#c2c1ba;--anatomy-shade-2:#dedcd5;--anatomy-shade-3:#eeece5;',metal:'--anatomy-top:#d4d4d0;--anatomy-paper:#d4d4d0;--anatomy-shade-0:#555552;--anatomy-shade-1:#777772;--anatomy-shade-2:#aaaaa4;--anatomy-shade-3:#c2c2bc;--anatomy-hi:#242424;'};
export function paymentFigure(kind){const phone=kind==='upi';const bounds=phone?[[-46,-88,0],[46,88,14]]:[[-82,-78,0],[90,80,28]];const points=k.boxCorners({x:bounds[0][0],y:bounds[0][1],w:bounds[1][0]-bounds[0][0],d:bounds[1][1]-bounds[0][1]},0,bounds[1][2]);const P=k.fitProjection(points,760,570,{pad:28,azimuth:phone?74:38,elevation:phone?65:39});const body=[];let n=0;
 const part=(x,y,w,d,z,h,material='leather',radius=3)=>{n++;body.push(`<g style="${palette[material]||''}">${k.solidSvg(k.slabOf({x,y,w,d,r:radius},z,h,P,8,.5),{tone:'hi',crease:'mid'})}</g>`)};
 const line=(a,b,tone='hi')=>{n++;body.push(k.lineSvg(k.segment(a,b,P),{tone,free:true}))};
 const flat=(x,y,z,markup)=>{const o=k.iso([x,y,z],P),u=k.iso([x+1,y,z],P),v=k.iso([x,y+1,z],P);body.push(`<g transform="matrix(${u[0]-o[0]} ${u[1]-o[1]} ${v[0]-o[0]} ${v[1]-o[1]} ${o[0]} ${o[1]})">${markup}</g>`);n++;};
 if(!phone){
  part(-66,-38,132,87,0,6,'leather',8);part(-63,-35,126,81,6,5,'lining',6);
  // Banknotes sit inside the rear cash compartment and protrude above its edge.
  for(let j=0;j<3;j++){const x=-56+j*2,y=-66+j*4,z=11+j*1.2;part(x,y,111,64,z,.9,'note',1.4);flat(x,y,z+1,`<rect x="5" y="5" width="101" height="54" rx="2" fill="none" stroke="#8b8b84" stroke-width=".5"/><ellipse cx="55" cy="28" rx="13" ry="15" fill="#e0dfd8" stroke="#8b8b84" stroke-width=".5"/><text x="55" y="32" text-anchor="middle" style="font-family:DM,sans-serif;font-size:13px" fill="#555550">₹</text><path d="M12 12h22m-22 5h17m42-5h22m-22 5h16M12 47h28m34 0h22" fill="none" stroke="#8b8b84" stroke-width=".7"/>`);n+=8;}
  part(-66,-16,132,65,15,5,'leather',7);
  // Folded spine, front pocket lip and two inset card slots.
  part(-66,-14,6,58,17,4,'leather',2);part(-54,0,101,2,20,.8,'lining',.7);part(-54,9,101,2,20,.8,'lining',.7);
  flat(-66,-16,20.6,'<rect x="6" y="6" width="120" height="53" rx="6" fill="none" stroke="#777770" stroke-width=".7" stroke-dasharray="1.8 2.2"/><path d="M13 23h93m-93 9h93" fill="none" stroke="#686860" stroke-width=".6"/>');n+=32;
  part(40,9,39,22,20.8,3.5,'leather',5);flat(59,20,24.5,'<circle r="5" fill="#deddd5" stroke="#40403c" stroke-width=".8"/><circle r="2.8" fill="none" stroke="#777770" stroke-width=".6"/>');n+=2;
  // Loose coins make scale and cash use legible without obscuring the wallet.
  for(const [x,y,r,h] of [[-52,61,8,2],[-29,61,9,2.5],[-7,61,7,2]]){body.push(`<g style="--anatomy-top:#e3e2da;--anatomy-shade-0:#777770;--anatomy-shade-1:#999992;--anatomy-shade-2:#bbbbae;--anatomy-shade-3:#e3e2da">${k.solidSvg(k.cylinder(x,y,r,0,h,P,40),{tone:'hi'})}</g>`);flat(x,y,h+.1,`<circle r="${r-1.5}" fill="none" stroke="#666660" stroke-width=".5"/><text text-anchor="middle" y="3" style="font-family:DM,sans-serif;font-size:9px" fill="#555550">₹</text>`);n+=4;}
 }else{
  part(-39,-81,78,162,0,7.6,'metal',11);
  // Black bezel and inset glass follow the same rounded footprint as the body.
  flat(-39,-81,7.9,'<rect width="78" height="162" rx="10.5" fill="#303030" stroke="#202020" stroke-width=".7"/><rect x="3.1" y="3.1" width="71.8" height="155.8" rx="8.3" fill="#faf9f4"/>');n+=2;
  // Physical side keys and antenna seams sit on the machined perimeter.
  part(39,-41,1.3,19,2.2,2.5,'metal',.5);part(-40,-46,1.3,13,2.2,2.5,'metal',.5);part(-40,-28,1.3,13,2.2,2.5,'metal',.5);
  for(const [x,y] of [[-38,-62],[38,-62],[-38,62],[38,62]])line([x,y,1],[x,y,6],'mid');
  flat(-39,-81,8.1,`<rect x="29" y="5" width="20" height="5.2" rx="2.6" fill="#303030"/><circle cx="33" cy="7.6" r="1.2" fill="#777"/><circle cx="39" cy="68" r="18" fill="none" stroke="#303030" stroke-width="1.4"/><path d="m30 68 6 6 13-14" fill="none" stroke="#303030" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="26" y="153" width="26" height="1.7" rx=".8" fill="#303030"/>`);n+=7;
  // Tiny speaker perforations on the lower edge, aligned to its frame.
  for(let i=0;i<6;i++)line([-22+i*3,81.15,3.4],[-22+i*3,81.15,4.3],'hi');
 }
 console.log(`Rebuilt ${kind}: ${n} physical and surface details`);return k.figureSvg({width:760,height:570,label:phone?'Realistic rounded smartphone with a minimal monochrome confirmation tick':'Folded leather wallet with rupee notes, card pockets, stitched seams, clasp and loose coins',body});
}
