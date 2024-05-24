# Fix Jo-Fola (Bookmarklet)

Using Unijoy (ইউনিজয়) Keyboard on MacOS depicts jo-fola (য-ফলা) wrong.
This function is intended to be used as a Bookmarklet.

---

MacOS-এ ইউনিজয় লেআউটে য-ফলা ভেঙে যায় কারণ অক্ষর আর য-ফলার মাঝখানে Unicode joiner ছাড়াও অন‍্য আরেকটা ক‍্যারেক্টার ঢুকে যায়।
এই কোড দিয়ে আমরা সেটা ফেলে দিয়ে লেখাটা ঠিক করে নিতে পারি।

এই বুকমার্কলেট ব‍্যবহার করার জন‍্য আমরা ধরে নিচ্ছি:

- আপনি textarea.online সাইটটি খুলে রেখেছেন
- সেখানে আপনার বাংলা লেখা লিখেছেন
- তারপর ঐ পাতায় থাকা অবস্থায় বুকমার্কলেটটি ব‍্যবহার করছেন
- সংশোধিত লেখা আপনি ইচ্ছামতো ব‍্যবহার করতে পারবেন

## যেভাবে কাজ করছে

প্রথমত সমস‍্যাটি তৈরি হচ্ছে একটা অদৃশ‍্য character-এর কারণে যাকে স্বাভাবিকভাবে ধরাও কষ্ট। সেজন‍্য আমরা লেখাটিকে `encodeURI()` করে নিচ্ছি।

ইউনিজয় (Unijoy) দিয়ে সমস‍্যাযুক্ত লেখা: **ণ‍্য**
```
ণ 👇      ⛔️         (NJ) 👇    য-ফলা 👇
%E0%A6%A3 %E2%80%8D %E0%A7%8D %E0%A6%AF
```

Avro Phonetic দিয়ে সঠিক লেখা: **ণ্য**
```
ণ 👇      (NJ) 👇    য-ফলা 👇
%E0%A6%A3 %E0%A7%8D %E0%A6%AF
```
✅ এখানে মূলত অবাঞ্ছিত character `%E2%80%8D` মুছে লেখাটিকে সংশোধন করা হচ্ছে

কোড দেখা যাবে `function.js` ফাইলে

___
তৈরি করেছেন [Mayeenul Islam](https://mayeenulislam.github.io)
