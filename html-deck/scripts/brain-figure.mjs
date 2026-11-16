// Puzzle-brain Figure: one recognizable brain silhouette, an interlocking
// puzzle face and a shallow extruded edge. Monochrome, with no extra labels.
import {figureSvg} from '../../skills/anatomy/kit/iso-kit.mjs';
export function brainFigure(){
 const outline='M210 72C190 49 155 52 141 75C110 70 86 90 83 118C54 124 40 153 51 177C29 195 27 225 43 246C35 275 52 301 78 306C82 333 107 350 132 344C151 365 183 359 196 339L201 361L224 361L230 339C250 356 279 352 293 332C321 333 345 310 342 285C370 268 377 238 361 215C376 191 367 160 344 150C347 120 325 97 299 96C288 71 260 61 239 75C230 64 218 64 210 72Z';
 const surface=`<path d="${outline}" fill="#f6f5ef"/><path d="M43 246C35 275 52 301 78 306C82 333 107 350 132 344C151 365 183 359 196 339L201 361L224 361L230 339C250 356 279 352 293 332C321 333 345 310 342 285L306 280V258C288 269 280 249 290 240C296 234 302 237 306 240V207H253V183C240 192 226 185 226 174C226 161 240 156 253 166V139H199V117C214 125 224 118 224 107C224 95 210 91 199 99V72H145V139H120C131 125 124 114 113 114C101 114 95 127 104 139H69V207H110V231C95 222 84 230 84 242C84 254 99 260 110 250V280H78Z" fill="#e0dfd8"/>`;
 const seams=[
 'M145 75V139H120C130 126 125 114 113 114S95 127 104 139H68',
 'M199 70V99C212 90 224 97 224 108S211 125 199 117V139H253V166C240 156 226 162 226 174S240 192 253 183V207H307',
 'M299 96V139H277C286 151 279 164 268 164S251 151 260 139H253',
 'M43 207H110V184C123 193 137 186 137 174S123 155 110 165V139H145V207H173C164 219 170 233 182 233S202 220 192 207H199V139',
 'M145 207V280H171C161 266 168 254 180 254S199 269 189 280H253V256C266 265 279 258 279 247S266 229 253 238V207H199',
 'M307 151V207H338C327 219 334 233 345 233S362 221 355 211',
 'M78 280H110V250C96 260 84 252 84 241S97 223 110 231V207',
 'M145 280V322C158 313 170 319 170 330S156 349 145 341V352',
 'M199 280V303C211 294 224 300 224 312S211 330 199 320V352',
 'M253 280H307V258C294 267 282 261 282 249S295 232 307 241V207',
 'M253 280V305C265 296 277 303 277 314S266 331 253 322V349'
 ];
 // A shallow offset shell gives the same solid, outlined depth as the other assets.
 const shadow=`<path d="${outline}" transform="translate(14 19)" fill="#bdbbb3" stroke="#3d3931" stroke-width="1.8"/>`;
 const joins=[[51,177],[43,246],[78,306],[132,344],[201,361],[224,361],[293,332],[342,285],[361,215],[344,150],[299,96]].map(([x,y])=>`<path d="M${x} ${y}l14 19" fill="none" stroke="#777268" stroke-width="1.1"/>`).join('');
 const drawing=`<defs><clipPath id="puzzle-brain-clip"><path d="${outline}"/></clipPath></defs><g transform="translate(100 25) matrix(1 -.14 .18 1 0 0)">${shadow}${joins}${surface}<g clip-path="url(#puzzle-brain-clip)" fill="none" stroke="#716c61" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">${seams.map(d=>`<path d="${d}"/>`).join('')}</g><path d="${outline}" fill="none" stroke="#3d3931" stroke-width="2.1"/></g>`;
 return figureSvg({width:640,height:500,label:'Three-dimensional black-and-white brain assembled from interlocking puzzle pieces',body:[drawing]});
}
