var e,t=globalThis,n={},o=0/0,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,l=p||s||Function("return this")(),f=Object.prototype.toString,m=Math.max,d=Math.min,y=function(){return l.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==f.call(t))return o;if(v(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=v(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var p=a.test(e);return p||u.test(e)?c(e.slice(2),p?2:8):i.test(e)?o:+e}n=function(e,t,n){var o,r,i,a,u,c,p=0,s=!1,l=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function $(t){var n=o,i=r;return o=r=void 0,p=t,a=e.apply(i,n)}function b(e){var n=e-c,o=e-p;return void 0===c||n>=t||n<0||l&&o>=i}function h(){var e,n,o,r=y();if(b(r))return j(r);u=setTimeout(h,(e=r-c,n=r-p,o=t-e,l?d(o,i-n):o))}function j(e){return(u=void 0,f&&o)?$(e):(o=r=void 0,a)}function T(){var e,n=y(),i=b(n);if(o=arguments,r=this,c=n,i){if(void 0===u)return p=e=c,u=setTimeout(h,t),s?$(e):a;if(l)return u=setTimeout(h,t),$(c)}return void 0===u&&(u=setTimeout(h,t)),a}return t=g(t)||0,v(n)&&(s=!!n.leading,i=(l="maxWait"in n)?m(g(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),T.cancel=function(){void 0!==u&&clearTimeout(u),p=0,o=c=r=u=void 0},T.flush=function(){return void 0===u?a:j(y())},T};const $=document.querySelector("#input"),b=document.querySelector("#countryDiv");let h=[];function j(e,t){let n,o,r,i;for(let a=0;a<e.length;a++)if(e[a].name.common.toLowerCase()===t.toLowerCase()){n=e[a].name.common,i=!0===(o=e[a]).independent?"Independent country":"Dependent country";let t=Object.keys(o.currencies||{})[0],u=o.currencies?.[t]||{},c=Object.values(o.languages);r=`
                <h2 class='countryName'>Name of the country: ${n}</h2>
                <p>Oficial name: ${o.name.official}</p>
                <p>Area: ${o.area}km\xb2</p>
                <p>Capital city: ${o.capital||"No capital"}</p>
                <p>Continent: ${o.continents}</p>
                <p>Population: ${o.population} people</p>
                <p>Languages: ${c}</p>
                <p>Borders: ${o.borders||"No borders"}</p>
                <p>Dependense: ${i}</p>
                <div>
                    <p>Currency code: ${t}</p>
                    <p>Currency symbol: ${u.symbol||"N/A"}</p>
                    <p>Currency name: ${u.name||"N/A"}</p>
                </div>
                <img src='${o.flags.png}' alt="Flag of ${n}">
                <p>Car side: ${o.car.side}</p>
                <p>Region: ${o.region}</p>
                <p>Subregion: ${o.subregion}</p>
                <p>Timezones: ${o.timezones}</p>
                <p>Status: ${o.status}</p>
                <p>Start of a week: ${o.startOfWeek}</p>
                <p class='maps'>${n} on a map: ${o.maps.googleMaps}</p>`;break}return r}fetch("https://restcountries.com/v3.1/all").then(e=>e.json()).then(e=>h=e),fetch("https://restcountries.com/v3.1/all").then(e=>e.json()).then(e=>console.log(e)),$.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(e=>{let t=e.target.value.trim();t.length>0?void 0===j(h,t)?b.innerHTML="Country that you entered is undefined. Try again":b.innerHTML=j(h,t):b.innerHTML="Enter a country"},500));
//# sourceMappingURL=goit-js-hw-12-countries.aae8019d.js.map
