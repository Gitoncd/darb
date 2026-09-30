# دَرْب (Darb) — Tour Like a Local
🔗 **الموقع المنشور:** https://darb-efdb5.web.app

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

## Firebase

- **Firebase Hosting**: الموقع منشور على https://darb-efdb5.web.app
- **Cloud Firestore**: تُحفظ فيه المجموعات (`groups`) وتقييمات الزوار والتعليقات (`reviews`) وطلبات الانضمام (`joinRequests`)، وتظهر لكل المستخدمين من أي جهاز.
- الإعداد في `public/firebase.js`.

## ملاحظات

- الطقس من Open-Meteo (بدون مفتاح API)، والخرائط من Leaflet + Esri.
- الحجوزات تُحفظ حالياً في `localStorage` للمتصفح.
