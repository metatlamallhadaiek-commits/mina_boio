document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("whatsapp-form");
  const messageBox = document.getElementById("form-message");
  const year = document.getElementById("year");

  // Algeria country code +213, without the leading zero.
  const whatsappNumber = "213797179772";

  year.textContent = new Date().getFullYear();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    messageBox.textContent = "";

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const quantity = document.getElementById("quantity").value;

    if (!name || !phone || !address) {
      messageBox.textContent = "يرجى ملء جميع البيانات المطلوبة.";
      return;
    }

    const message = [
      "مرحباً Mina Bio 🌸",
      "",
      "أرغب في تأكيد طلب منتج Mina Bio:",
      "",
      `👤 الاسم: ${name}`,
      `📞 رقم الهاتف: ${phone}`,
      `📍 العنوان: ${address}`,
      `📦 الكمية: ${quantity}`,
      "",
      "أرجو التواصل معي لتأكيد تفاصيل الطلب. شكراً!"
    ].join("\\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!openedWindow) {
      messageBox.textContent = "تعذر فتح نافذة واتساب تلقائياً. اضغطي هنا لإرسال الطلب.";
      const link = document.createElement("a");
      link.href = whatsappUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "فتح واتساب";
      link.className = "manual-whatsapp-link";
      messageBox.appendChild(document.createElement("br"));
      messageBox.appendChild(link);
    } else {
      messageBox.textContent = "تم تجهيز رسالة طلبك. أكملي الإرسال من واتساب.";
    }
  });
});