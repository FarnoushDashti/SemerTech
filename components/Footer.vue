<script setup>
import { IconBrandLinkedin, IconBrandInstagram, IconBrandTelegram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-vue'
</script>

<template>
  <footer class="bg-white rounded-t-2xl shadow-lg pt-8 pb-4 px-2 md:px-8 md:leading-[2.5] lg:min-h-[300px] lg:max-h-[300px] lg:pt-12">
    <div class="container mx-auto flex flex-col md:flex-row justify-between gap-y-8 gap-x-8 items-stretch">
      <div class="flex flex-col items-center text-xs md:text-base text-gray-600 justify-center mb-2 leading-normal">
        <div class="text-center">هفت روز هفته، از صبح تا شب پاسخگوی شما هستیم</div>
      </div>
      <!-- دسترسی سریع -->
      <div class="flex-1 flex flex-col items-center md:items-start text-center md:text-right md:leading-[2.5]">
        <div class="font-bold mb-2 text-gray-700 text-xs md:text-base leading-normal">دسترسی سریع</div>
        <ul class="space-y-1 text-gray-600 text-xs md:text-base leading-normal">
          <li><a href="#" class="text-rose-600 font-bold">درباره ما</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">وبلاگ</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">تماس با ما</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">خدمات پس از فروش</a></li>
        </ul>
      </div>
      <!-- راهنمای سایت -->
      <div class="flex-1 flex flex-col items-center md:items-start text-center md:text-right md:leading-[2.5]">
        <div class="font-bold mb-2 text-gray-700 text-xs md:text-base leading-normal">راهنمای سایت</div>
        <ul class="space-y-1 text-gray-600 text-xs md:text-base leading-normal">
          <li><a href="#" class="hover:text-rose-600 transition">قوانین و مقررات</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">خدمات مشاوره</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">اطلاعات و پیشنهادات</a></li>
        </ul>
      </div>
      <!-- شبکه‌های اجتماعی -->
      <div class="flex-1 flex flex-col items-center md:items-start text-center md:text-right md:leading-[2.5]">
        <div class="font-bold mb-2 text-gray-700 text-xs md:text-base leading-normal">شبکه‌های اجتماعی</div>
        <ul class="flex flex-col gap-3 items-center md:items-start text-xs md:text-base leading-normal">
          <li>
            <a href="#" class="group inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 transition">
              <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-slate-400 group-hover:bg-rose-600 transition">
                <IconBrandTelegram class="h-5 w-5 text-white" />
              </span>
              تلگرام
            </a>
          </li>
          <li>
            <a href="#" class="group inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 transition">
              <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-slate-400 group-hover:bg-rose-600 transition">
                <IconBrandInstagram class="h-5 w-5 text-white" />
              </span>
              اینستاگرام
            </a>
          </li>
          <li>
            <a href="#" class="group inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 transition">
              <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-slate-400 group-hover:bg-rose-600 transition">
                <IconBrandLinkedin class="h-5 w-5 text-white" />
              </span>
              لینکدین
            </a>
          </li>
        </ul>
      </div>
    </div>

  </footer>
      <!-- Bottom copyright and social icons -->
      <div class="w-full flex flex-col items-center justify-center mt-8 gap-3 mb-5">
      <div class="text-center text-gray-500 text-xs md:text-sm leading-normal">
        تمامی حقوق مادی و معنوی این وب‌سایت متعلق به مجموعه می‌باشد و هر گونه کپی‌برداری برای این وب‌سایت پیگرد قانونی دارد
      </div>
      <div class="flex flex-row gap-4 justify-center mt-2">
        <a href="#" class="text-pink-400 hover:text-pink-600 transition"><IconBrandTelegram class="h-6 w-6" /></a>
        <a href="#" class="text-pink-400 hover:text-pink-600 transition"><IconBrandInstagram class="h-6 w-6" /></a>
        <a href="#" class="text-pink-400 hover:text-pink-600 transition"><IconBrandTwitter class="h-6 w-6" /></a>
        <a href="#" class="text-pink-400 hover:text-pink-600 transition"><IconBrandYoutube class="h-6 w-6" /></a>
        <a href="#" class="text-pink-400 hover:text-pink-600 transition"><IconBrandLinkedin class="h-6 w-6" /></a>
      </div>
    </div>
</template> 