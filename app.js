const TESLA_CLIENT_ID="81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384";
const TESLA_CLIENT_SECRET="c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3";
const $ = document.getElementById.bind(document);

async function postData(url, body) {
    let response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "https://github.com/RByers/tesla-pwa",
        },
        referrer: "no-referrer",
        body: body,
      });
    return await response.json();
}

async function login(email, pw) {
    let auth = await postData("https://owner-api.teslamotors.com/oauth/token",
        "grant_type=password" +
        "&client_id=" + encodeURIComponent(TESLA_CLIENT_ID) +
        "&client_secret=" + encodeURIComponent(TESLA_CLIENT_SECRET) +
        "&email=" + encodeURIComponent(email) + 
        "&password=" + encodeURIComponent(pw));
    console.log(auth);
}
$("form").addEventListener("submit", (e) => {
    e.preventDefault();
    login($("email").value, $("pw").value);
});