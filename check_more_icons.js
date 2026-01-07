try {
    const fa = require('react-icons/fa');
    console.log('FaLego:', fa.FaLego);
    console.log('FaKeys matching "Lego":', Object.keys(fa).filter(k => k.toLowerCase().includes('lego')));
} catch (e) { console.log('fa error', e.message); }

try {
    const bi = require('react-icons/bi');
    console.log('BiLego:', bi.BiLego);
    console.log('BiKeys matching "Lego":', Object.keys(bi).filter(k => k.toLowerCase().includes('lego')));
} catch (e) { console.log('bi error', e.message); }

try {
    const ri = require('react-icons/ri');
    console.log('RiLego:', ri.RiLego);
    console.log('RiKeys matching "Lego":', Object.keys(ri).filter(k => k.toLowerCase().includes('lego')));
} catch (e) { console.log('ri error', e.message); }
