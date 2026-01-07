const si = require('react-icons/si');
console.log('SiLego:', si.SiLego);
console.log('SiLg:', si.SiLg);
console.log('Keys matching "Lego":', Object.keys(si).filter(k => k.toLowerCase().includes('lego')));
