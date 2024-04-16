let btn = document.getElementById("shorten");
btn.addEventListener("click", short);

async function short() {
    let longUrl = document.getElementById("longUrl").value;
    let shortUrl = document.getElementById("shortUrl");

    if (!isValidHttpUrl(longUrl)) {
        alert("يرجى إدخال عنوان URL صالح.");
        return;
    }

    let apiUrl = `https://tinyurl.com/api-create.php?url=${longUrl}`;

    try {
        let response = await fetch(apiUrl);
        let data = await response.text();
        shortUrl.value = data;
        alert("تم تقصير الرابط بنجاح!"); // إظهار صندوق الرسالة هنا
        console.log(data); 
    } catch (error) {
        console.error('خطأ في تقصير الرابط:', error);
    }
}

function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;  
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

