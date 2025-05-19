<template>
  <footer class="bg-white rounded-t-2xl shadow-lg mt-12 pt-8 pb-4 px-2 md:px-8">
    <div class="container mx-auto flex flex-col md:flex-row justify-between gap-8">
      <!-- شبکه‌های اجتماعی -->
      <div class="flex-1 text-center md:text-right">
        <div class="font-bold mb-2">شبکه‌های اجتماعی</div>
        <div class="flex justify-center md:justify-end gap-3">
          <a href="#" class="inline-flex items-center gap-1 text-gray-500 hover:text-rose-600 transition"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'><path d='M19.615 3.184c-1.72-.631-8.51-.631-8.51-.631s-6.79 0-8.51.631c-1.72.631-2.44 2.07-2.44 4.816v7.999c0 2.746.72 4.185 2.44 4.816 1.72.631 8.51.631 8.51.631s6.79 0 8.51-.631c1.72-.631 2.44-2.07 2.44-4.816v-7.999c0-2.746-.72-4.185-2.44-4.816zm-11.615 12.816v-8l7 4-7 4z'/></svg>تلگرام</a>
          <a href="#" class="inline-flex items-center gap-1 text-gray-500 hover:text-rose-600 transition"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2.163c-5.468 0-9.837 4.369-9.837 9.837 0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54v-2.205c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.631.771-1.631 1.562v1.878h2.773l-.443 2.89h-2.33v6.987c4.781-.749 8.438-4.886 8.438-9.877 0-5.468-4.369-9.837-9.837-9.837z'/></svg>اینستاگرام</a>
          <a href="#" class="inline-flex items-center gap-1 text-gray-500 hover:text-rose-600 transition"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/></svg>تماس</a>
        </div>
      </div>
      <!-- راهنمای سایت -->
      <div class="flex-1 text-center">
        <div class="font-bold mb-2">راهنمای سایت</div>
        <ul class="space-y-1 text-gray-600">
          <li><a href="#" class="hover:text-rose-600 transition">قوانین و مقررات</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">خدمات مشتریان</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">اطلاعات و پیشنهادات</a></li>
        </ul>
      </div>
      <!-- دسترسی سریع -->
      <div class="flex-1 text-center md:text-left">
        <div class="font-bold mb-2">دسترسی سریع</div>
        <ul class="space-y-1 text-gray-600">
          <li><a href="#" class="text-rose-600 font-bold">درباره ما</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">وبلاگ</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">تماس با ما</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">خدمات پس‌از فروش</a></li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto mt-6 border-t pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
      <div class="flex gap-2">
        <!-- <img src="/logo1.png" alt="نماد1" class="h-8" /> -->
        <!-- <img src="/logo2.png" alt="نماد2" class="h-8" /> -->
      </div>
      <div class="flex-1 text-center">تمام حقوق مادی و معنوی این وبسایت متعلق به شماست و هرگونه کپی‌برداری پیگرد قانونی دارد.</div>
      <div class="flex gap-2 justify-center md:justify-end">
        <a href="#" class="text-rose-600 hover:text-pink-600"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'><path d='M19.615 3.184c-1.72-.631-8.51-.631-8.51-.631s-6.79 0-8.51.631c-1.72.631-2.44 2.07-2.44 4.816v7.999c0 2.746.72 4.185 2.44 4.816 1.72.631 8.51.631 8.51.631s6.79 0 8.51-.631c1.72-.631 2.44-2.07 2.44-4.816v-7.999c0-2.746-.72-4.185-2.44-4.816zm-11.615 12.816v-8l7 4-7 4z'/></svg></a>
        <a href="#" class="text-rose-600 hover:text-pink-600"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2.163c-5.468 0-9.837 4.369-9.837 9.837 0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54v-2.205c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.631.771-1.631 1.562v1.878h2.773l-.443 2.89h-2.33v6.987c4.781-.749 8.438-4.886 8.438-9.877 0-5.468-4.369-9.837-9.837-9.837z'/></svg></a>
        <a href="#" class="text-rose-600 hover:text-pink-600"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/></svg></a>
      </div>
    </div>
  </footer>
</template> 