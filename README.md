# سامانه مدیریت همایش‌ها (Conference Management System)
![image](https://github.com/user-attachments/assets/c9d9774e-7843-4acc-8554-e625ff7dade5)


این پروژه یک پنل مدیریتی واکنش‌گرا برای مدیریت همایش‌ها است که با HTML، JavaScript و Tailwind CSS ساخته شده است. این سیستم از هر دو حالت روشن و تاریک پشتیبانی می‌کند.

## ویژگی‌ها

### نقش‌های کاربری
- **دانشجو**: می‌تواند همایش‌ها را مشاهده و در آن‌ها ثبت‌نام کند، به فایل‌ها دسترسی داشته باشد و پروفایل خود را مدیریت کند
- **استاد**: می‌تواند همایش‌ها را ایجاد و مدیریت کند، تکالیف را مدیریت کند، دانشجویان ثبت‌نام شده را مشاهده کند و همه قابلیت‌های دانشجویان را داشته باشد

### صفحات
- **ورود و ثبت‌نام**: احراز هویت کاربر
- **داشبورد**: نمای کلی از همایش‌ها و منابع
- **همایش‌ها**: مشاهده و ثبت‌نام در همایش‌ها، یا ایجاد همایش‌های جدید (برای استادان)
- **پروفایل**: ویرایش اطلاعات شخصی و تنظیمات
- **فایل‌ها**: دسترسی، آپلود و دانلود منابع همایش
- **بخش استاد**: مدیریت دانشجویان و تکالیف (فقط برای نقش استاد)

## نحوه استفاده

1. فایل `index.html` را در مرورگر وب خود باز کنید تا برنامه را شروع کنید
2. وارد شوید یا یک حساب کاربری جدید ثبت کنید:
   - برای دسترسی دانشجو: از هر ایمیلی که شامل کلمه "teacher" نباشد، استفاده کنید
   - برای دسترسی استاد: از ایمیلی که شامل کلمه "teacher" باشد استفاده کنید (مثلاً teacher@example.com)
3. با استفاده از نوار کناری (در دسکتاپ) یا منو (در موبایل) در رابط کاربری واکنش‌گرا پیمایش کنید
4. با استفاده از کلید تغییر تم، بین حالت روشن و تاریک جابجا شوید

## جزئیات فنی

- ساخته شده با HTML، CSS و JavaScript خالص
- طراحی واکنش‌گرا با استفاده از Tailwind CSS
- بدون نیاز به سرور (برای نمایش از localStorage استفاده می‌کند)
- پشتیبانی از RTL (راست به چپ) برای زبان فارسی

## ساختار فایل‌ها

```
├── index.html (صفحه ورود)
├── register.html (صفحه ثبت‌نام)
├── dashboard.html (داشبورد اصلی)
├── conferences.html (لیست همایش‌ها و ثبت‌نام)
├── profile.html (مدیریت پروفایل کاربر)
├── files.html (دسترسی و مدیریت فایل‌ها)
├── teacher-students.html (مدیریت دانشجویان برای استادان)
├── teacher-assignments.html (مدیریت تکالیف برای استادان)
├── css/
│   └── style.css (استایل‌های CSS سفارشی)
├── js/
│   ├── theme.js (قابلیت حالت تاریک/روشن)
│   ├── shared.js (توابع مشترک)
│   ├── login.js (منطق ورود)
│   ├── register.js (منطق ثبت‌نام)
│   ├── dashboard.js (عملکرد داشبورد)
│   └── سایر فایل‌های JavaScript برای هر صفحه
└── README.md (این فایل)
```

## حساب‌های نمایشی

برای اهداف نمایشی، هر اطلاعات ورودی کار خواهد کرد:

- **نقش دانشجو**: از هر ایمیلی که شامل کلمه "teacher" نباشد استفاده کنید (مثلاً student@example.com)
- **نقش استاد**: از هر ایمیلی که شامل کلمه "teacher" باشد استفاده کنید (مثلاً teacher@example.com)

## توسعه

این یک نمایش فرانت‌اند استاتیک است. در یک برنامه واقعی، شما نیاز خواهید داشت:

1. پیاده‌سازی یک API بک‌اند برای احراز هویت و مدیریت داده‌ها
2. جایگزینی localStorage با مدیریت جلسه مناسب سمت سرور
3. پیاده‌سازی اعتبارسنجی فرم و اقدامات امنیتی مناسب
4. افزودن مدیریت خطای قوی‌تر 
