/* ===== دَرْب — shared data & helpers ===== */
window.DARB_TRIPS = {
  1: { page: 'masar1.html', key: 'trip1', title: 'سحر الجنوب: البترا ووادي رم', badge: 'رحلة ثقافية ومغامرة', date: '15 – 16 أكتوبر 2026', start: '2026-10-15', end: '2026-10-16',
       img: 'https://images.unsplash.com/photo-1579606032822-2630737a3410?auto=format&fit=crop&w=800&q=70',
       desc: 'يومان بين المدينة الوردية وصحراء وادي رم، مع مبيت في مخيم بدوي.',
       kw: 'البترا وادي رم الجنوب صحراء مخيم', ints: ['history', 'nature', 'adventure', 'hidden'] },
  2: { page: 'masar2.html', key: 'trip2', title: 'التاريخ والفسيفساء: مأدبا والمغطس', badge: 'رحلة تاريخية ودينية', date: '20 أكتوبر 2026', start: '2026-10-20', end: '2026-10-20',
       img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=70',
       desc: 'يوم واحد بين موقع المغطس وجبل نيبو وخارطة مأدبا الفسيفسائية.',
       kw: 'مأدبا المغطس جبل نيبو فسيفساء', ints: ['history', 'hidden'] },
  3: { page: 'masar3.html', key: 'trip3', title: 'نَبض العاصمة: وسط البلد وجبل عمان', badge: 'جولة حضرية وتراثية', date: '24 أكتوبر 2026', start: '2026-10-24', end: '2026-10-24',
       img: 'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=800&q=70',
       desc: 'جبل القلعة والمدرج الروماني والكنافة وشارع الرينبو في يوم واحد.',
       kw: 'عمان عمّان وسط البلد القلعة الرينبو كنافة', ints: ['history', 'food'] }
};

/* age: 0=18-25, 1=26-35, 2=36-50, 3=50+ | time: weekend/weekday/flex | type: day/multi/walk */
window.DARB_GROUPS = [
  { id: 1, icon: '🏔️', name: 'متسلقو ومتنزهو وادي الموجب', cat: 'مغامرات', desc: 'رحلات مشي أسبوعية في الوادي ومسارات الشلالات، لجميع المستويات.', members: 1240, age: [0, 1, 2], time: ['weekend'], type: ['walk', 'day'] },
  { id: 2, icon: '🏛️', name: 'رحّالة البتراء والآثار', cat: 'تاريخ وآثار', desc: 'نتبادل المعلومات عن البتراء وجرش وأم قيس ونرتب زيارات مشتركة.', members: 980, age: [1, 2, 3], time: ['flex'], type: ['multi', 'day'] },
  { id: 3, icon: '📸', name: 'عدسات وادي رم', cat: 'تصوير', desc: 'أفضل أوقات وأماكن التصوير في الصحراء عند الشروق والغروب.', members: 715, age: [0, 1, 2], time: ['weekend'], type: ['multi', 'day'] },
  { id: 4, icon: '🍽️', name: 'مذاق الأردن', cat: 'طعام وثقافة', desc: 'من المنسف إلى الكنافة النابلسية: مطاعم ومطابخ شعبية يستحق أن تجربها.', members: 860, age: [0, 1, 2, 3], time: ['flex'], type: ['day', 'walk'] },
  { id: 5, icon: '⛺', name: 'سهرات تخييم العقبة والبحر الأحمر', cat: 'مغامرات', desc: 'ترتيب رحلات تخييم وغوص وتبادل معدات ونصائح للسلامة.', members: 540, age: [0, 1, 2], time: ['weekend'], type: ['multi'] },
  { id: 6, icon: '👨‍👩‍👧', name: 'رحلات العائلة في الأردن', cat: 'عائلات', desc: 'أماكن مناسبة للأطفال وخطط رحلات ليوم أو نهاية أسبوع.', members: 1105, age: [1, 2], time: ['weekend'], type: ['day', 'multi'] },
  { id: 7, icon: '🌊', name: 'أصدقاء البحر الميت', cat: 'عائلات', desc: 'نصائح للعناية بالبشرة والمنتجعات وأفضل الأوقات للزيارة.', members: 430, age: [1, 2, 3], time: ['weekday'], type: ['day'] },
  { id: 8, icon: '🕌', name: 'عمّان القديمة سيراً', cat: 'تاريخ وآثار', desc: 'جولات مشي في وسط البلد والمدرج الروماني وجبل القلعة.', members: 620, age: [0, 1, 2, 3], time: ['weekday'], type: ['walk', 'day'] }
];

/* ===== mobile menu (all pages) ===== */
document.addEventListener('DOMContentLoaded', function () {
  var b = document.querySelector('.menu-toggle'), n = document.querySelector('header nav');
  if (b && n) b.addEventListener('click', function () { b.setAttribute('aria-expanded', n.classList.toggle('open')); });
});

/* ===== places: map + weather ===== */
const PLACES = {
  trip1: { name: 'البترا', coords: [30.3285, 35.4444], stops: [['عمّان (نقطة الانطلاق)', [31.9539, 35.9106]], ['البترا - الخزنة', [30.3285, 35.4444]], ['مخيم وادي رم', [29.5735, 35.42]]] },
  trip2: { name: 'مأدبا', coords: [31.7167, 35.7933], stops: [['عمّان (نقطة الانطلاق)', [31.9539, 35.9106]], ['موقع المغطس', [31.8371, 35.5498]], ['جبل نيبو', [31.7679, 35.7256]], ['مأدبا - كنيسة القديس جورج', [31.7167, 35.7933]]] },
  trip3: { name: 'عمّان', coords: [31.9515, 35.9394], stops: [['جبل القلعة', [31.9544, 35.9349]], ['المدرج الروماني', [31.9515, 35.9394]], ['درج الكلحة', [31.952, 35.9265]], ['شارع الرينبو', [31.9498, 35.9231]]] },
  amman: { name: 'عمّان', coords: [31.9539, 35.9106] }
};

function wmo(c) {
  if (c === 0) return ['☀️', 'صافٍ'];
  if (c <= 2) return ['🌤️', 'غائم جزئياً'];
  if (c === 3) return ['☁️', 'غائم'];
  if (c <= 48) return ['🌫️', 'ضباب'];
  if (c <= 67 || (c >= 80 && c <= 82)) return ['🌧️', 'أمطار'];
  if (c <= 77 || c === 85 || c === 86) return ['❄️', 'ثلوج'];
  return ['⛈️', 'عواصف رعدية'];
}

window.renderWeather = async function (key) {
  const widget = document.getElementById('weather-widget');
  const p = PLACES[key] || PLACES.amman;
  if (!widget) return;
  widget.innerHTML = '<h2>☀️ الطقس في ' + p.name + '</h2><p>جارٍ التحميل…</p>';
  try {
    const u = 'https://api.open-meteo.com/v1/forecast?latitude=' + p.coords[0] + '&longitude=' + p.coords[1] +
      '&current=temperature_2m,weather_code&daily=temperature_2m_max&timezone=auto&forecast_days=4';
    const d = await (await fetch(u)).json();
    const [icon, desc] = wmo(d.current.weather_code);
    const days = d.daily.time.slice(1, 4).map((t, i) =>
      '<div class="forecast-day"><span>' + new Date(t).toLocaleDateString('ar-JO', { weekday: 'long' }) + '</span>' + Math.round(d.daily.temperature_2m_max[i + 1]) + '°</div>').join('');
    widget.innerHTML = '<h2>☀️ الطقس في ' + p.name + '</h2><div class="weather-info"><div class="weather-icon">' + icon +
      '</div><div class="weather-temp">' + Math.round(d.current.temperature_2m) + '°C</div><div class="weather-desc">' + desc +
      '</div></div><div class="weather-forecast">' + days + '</div>';
  } catch (e) {
    widget.innerHTML = '<h2>☀️ الطقس في ' + p.name + '</h2><p>تعذّر تحميل حالة الطقس الآن.</p>';
  }
};

window.initTripMap = function (key) {
  const p = PLACES[key], el = document.getElementById('map');
  if (!p || !el || typeof L === 'undefined') return;
  const map = L.map('map').setView(p.coords, 11);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, attribution: 'Tiles &copy; Esri' }).addTo(map);
  const pts = (p.stops || [['', p.coords]]);
  pts.forEach(function (s, i) { L.marker(s[1]).addTo(map).bindPopup('<b>' + (i + 1) + '. ' + s[0] + '</b>'); });
  if (pts.length > 1) {
    L.polyline(pts.map(function (s) { return s[1]; }), { color: '#E07A5F', weight: 3, dashArray: '8 8' }).addTo(map);
    map.fitBounds(pts.map(function (s) { return s[1]; }), { padding: [30, 30] });
  }
  setTimeout(function () { map.invalidateSize(); }, 300);
};
