# دَرْب (Darb) — Tour Like a Local

موقع ثابت (HTML/CSS/JS) لرحلات جماعية في الأردن، منشور على Firebase Hosting.

## الهيكل
```
firebase.json
.firebaserc
public/        <- كل صفحات الموقع هنا (هذا هو مجلد النشر)
```

## الصفحات
index · explore · trips · masar1-3 · booking · confirmation · match · community · join · feedback

## النشر
```
firebase deploy --only hosting
```

## ملاحظات
- لا يوجد خادم: الحجوزات والمجموعات والتقييمات تُحفظ في `localStorage` للمتصفح فقط.
- الطقس من Open-Meteo (بدون مفتاح API)، والخرائط من Leaflet + Esri.
