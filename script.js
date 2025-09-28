function updateDateTime() {
  const now = new Date();

  // صيغة التاريخ YYYY-MM-DD
  const date = now.toISOString().split("T")[0];
  document.getElementById("current-date").textContent = date;

  // صيغة الوقت HH:MM:SS (24 ساعة)
  const time = now.toLocaleTimeString("en-GB");
  document.getElementById("current-time").textContent = time;
}

// أول تشغيل
updateDateTime();

// تحديث كل ثانية
setInterval(updateDateTime, 1000);
