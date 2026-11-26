# Wojciech Rosik — strona profilowa (PL / EN)

Statyczna strona bez frameworków i bez kroku budowania: czysty HTML, CSS i JavaScript.
Działa na GitHub Pages (również w podkatalogu repozytorium), Netlify, Vercel i każdym innym hostingu plików.

## Struktura

```
index.html               ← szkielet strony
404.html                 ← strona błędu (działa też w podkatalogu GitHub Pages)
.nojekyll                ← wyłącza przetwarzanie Jekyll na GitHub Pages
en/ eng/ pl/             ← krótkie adresy: …/en/ i …/pl/ przekierowują na wersję językową
assets/
  css/styles.css         ← wygląd
  js/content.js          ← CAŁA TREŚĆ PL i EN (tu edytujesz teksty)
  js/app.js              ← logika: przełącznik języka, karty, zakładki, animacje
  cv/                    ← CV w PDF (PL i EN) do pobrania
  img/favicon.svg        ← ikona karty przeglądarki
```

Wszystkie ścieżki są względne (`assets/...`), więc strona działa zarówno pod
`https://login.github.io/`, jak i pod `https://login.github.io/nazwa-repo/`.
Nawigacja korzysta z kotwic (`#approach`, `#cases`…), więc nie ma problemu z routingiem na hostingu statycznym.

## Edycja treści

1. Otwórz `assets/js/content.js`. Sekcja `pl:` to wersja polska, `en:` — angielska. Obie mają identyczną strukturę.
2. `**tekst**` zostanie pogrubiony.
3. Pola `todo: "..."` to miejsca do uzupełnienia (np. mierzalny efekt case study).
   Są niewidoczne dla odwiedzających. Aby je zobaczyć, otwórz stronę z dopiskiem `?review`,
   np. `https://login.github.io/nazwa-repo/?review`. Gdy uzupełnisz informację, wpisz ją do `result` / `bullets` i usuń pole `todo`.
4. Zdjęcie (opcjonalnie): wrzuć plik do `assets/img/portrait.jpg` (proporcje 4:5, ok. 800×1000 px, < 200 KB)
   i w `content.js` ustaw `portrait: "assets/img/portrait.jpg"`.
5. Nowe CV: podmień pliki w `assets/cv/`, zachowując nazwy (albo zmień ścieżki w `meta.cv`).
6. Zmień `updated` w `meta`, gdy aktualizujesz treść.

Język: strona wybiera go z adresu (`?lang=en`), potem z ostatniego wyboru użytkownika, a na końcu z języka przeglądarki
(polska przeglądarka → PL, każda inna → EN). Do wysyłania linków używaj `…/?lang=en` lub `…/en/`.

## Podgląd lokalny

Wystarczy dowolny serwer plików, np.:

```bash
cd wojciech-rosik-site
python3 -m http.server 8000
# otwórz http://localhost:8000
```

(Samo dwukrotne kliknięcie `index.html` też zadziała, ale serwer lepiej odwzorowuje hosting.)

---

## Wdrożenie na GitHub Pages (zalecane, za darmo)

### Wariant A — przez przeglądarkę, bez instalowania niczego

1. Załóż konto na <https://github.com> (jeśli nie masz).
2. Kliknij **New repository**. Nazwa np. `wojciech-rosik` (albo `TWOJ-LOGIN.github.io`, jeśli chcesz adres bez podkatalogu).
   Ustaw **Public** i kliknij **Create repository**.
3. Na stronie pustego repozytorium kliknij **uploading an existing file**.
4. Rozpakuj ZIP i przeciągnij **zawartość** folderu `wojciech-rosik-site` (nie sam folder) do okna przeglądarki:
   `index.html`, `404.html`, `.nojekyll`, `README.md` oraz foldery `assets`, `en`, `eng`, `pl`.
   > Plik `.nojekyll` jest ukryty w niektórych systemach. Jeśli go nie widzisz, w repozytorium kliknij
   > **Add file → Create new file**, wpisz nazwę `.nojekyll`, zostaw pusty i zatwierdź. Strona działa też bez niego, ale z nim publikuje się szybciej.
5. Kliknij **Commit changes**.
6. Wejdź w **Settings → Pages**. W sekcji **Build and deployment** wybierz:
   **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`** → **Save**.
7. Po 1–2 minutach strona będzie pod adresem `https://TWOJ-LOGIN.github.io/wojciech-rosik/`
   (link pojawi się u góry zakładki **Settings → Pages**).

### Wariant B — z terminala (git)

```bash
cd wojciech-rosik-site
git init
git add .
git commit -m "Strona profilowa"
git branch -M main
git remote add origin https://github.com/TWOJ-LOGIN/wojciech-rosik.git
git push -u origin main
```

Następnie krok 6 z wariantu A.

### Aktualizacje

Edytujesz plik (np. `assets/js/content.js`) bezpośrednio na GitHubie (ikona ołówka) albo lokalnie + `git push`.
GitHub Pages opublikuje zmianę w ciągu ok. minuty. Jeśli nie widzisz zmian, odśwież z pominięciem pamięci podręcznej (Ctrl/Cmd + Shift + R).

### Własna domena (opcjonalnie)

**Settings → Pages → Custom domain** → wpisz np. `wojciechrosik.pl`, a u rejestratora domeny dodaj rekord
`CNAME` wskazujący na `TWOJ-LOGIN.github.io`. Po weryfikacji zaznacz **Enforce HTTPS**.

> Strona 404 sama wykrywa podkatalog repozytorium. Jeśli publikujesz jako `TWOJ-LOGIN.github.io` (bez podkatalogu)
> albo na własnej domenie, w `404.html` zamień linijkę z `var base = …` na `var base = "/";`.

---

## Alternatywa: Netlify (najszybciej — przeciągnij i upuść)

1. Wejdź na <https://app.netlify.com/drop>.
2. Przeciągnij cały folder `wojciech-rosik-site`.
3. Gotowe: dostajesz adres typu `https://nazwa.netlify.app` (nazwę zmienisz w **Site configuration → Change site name**).
   Po założeniu darmowego konta strona zostaje na stałe.

## Alternatywa: Vercel

1. Wrzuć pliki do repozytorium GitHub (jak wyżej).
2. Na <https://vercel.com/new> zaimportuj repozytorium.
3. **Framework Preset: Other**, bez komendy budowania, **Output Directory** puste (katalog główny) → **Deploy**.

---

## Dobre praktyki po publikacji

- Dodaj link do strony w profilu LinkedIn (sekcja **Featured / Polecane** oraz **Contact info → Website**) i w nagłówku CV.
- Udostępnij podgląd linku: strona ma tytuł i opis dla LinkedIn i komunikatorów. Jeśli chcesz obrazek podglądu,
  dodaj `assets/img/og.png` (1200×630) i w `index.html` znacznik
  `<meta property="og:image" content="https://TWOJ-LOGIN.github.io/wojciech-rosik/assets/img/og.png">` (adres musi być pełny).
- Numer telefonu i e-mail są publiczne w treści strony i w PDF-ach. Jeśli wolisz tego uniknąć, usuń `phone` z `content.js`
  i podmień PDF-y na wersje bez telefonu.
- Czcionki (Newsreader, IBM Plex Sans, IBM Plex Mono) ładują się z Google Fonts. Jeśli serwis byłby niedostępny,
  strona użyje czcionek systemowych.
