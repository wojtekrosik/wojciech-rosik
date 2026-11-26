/* =====================================================================
   TREŚCI STRONY / SITE CONTENT
   ---------------------------------------------------------------------
   Cała treść strony w obu językach znajduje się w tym pliku.
   Aby coś zmienić — edytuj teksty poniżej, nie trzeba ruszać HTML/JS.

   • **pogrubienie**  → tekst w podwójnych gwiazdkach jest pogrubiany
   • todo: "..."      → miejsce do uzupełnienia. Widoczne tylko w trybie
                        przeglądu: dodaj ?review do adresu strony.
   ===================================================================== */

window.SITE_CONTENT = {
  meta: {
    name: "Wojciech Rosik",
    email: "wojtek.rosik@gmail.com",
    phone: "+48 790 511 522",
    phoneHref: "+48790511522",
    linkedin: "https://www.linkedin.com/in/wojciech-rosik",
    linkedinLabel: "linkedin.com/in/wojciech-rosik",
    // Opcjonalnie: ścieżka do zdjęcia, np. "assets/img/portrait.jpg" (proporcje 4:5)
    portrait: null,
    cv: {
      pl: "assets/cv/CV_Wojciech_Rosik_PL.pdf",
      en: "assets/cv/CV_Wojciech_Rosik_EN.pdf"
    },
    updated: { pl: "listopad 2026", en: "November 2026" }
  },

  /* ===================================================================
     POLSKI
     =================================================================== */
  pl: {
    htmlTitle: "Wojciech Rosik — Strategia · Finanse · Rozwój biznesu",
    metaDescription:
      "Wojciech Rosik — menedżer strategii z ponad 10-letnim doświadczeniem w strategii korporacyjnej, inwestycjach, M&A i realizacji inicjatyw strategicznych. Poznań.",
    skip: "Przejdź do treści",
    nav: {
      approach: "Podejście",
      experience: "Doświadczenie",
      cases: "Case studies",
      skills: "Kompetencje",
      contact: "Kontakt",
      cv: "CV",
      menu: "Menu",
      close: "Zamknij",
      langLabel: "Wybierz język"
    },

    hero: {
      status: "Obecnie: Strategy Manager · Solaris Bus & Coach",
      eyebrow: "Strategia · Finanse · Rozwój biznesu",
      title: ["Od analizy do decyzji.", "Od decyzji do wyniku."],
      lead:
        "Menedżer z ponad 10-letnim doświadczeniem w strategii korporacyjnej, inwestycjach i M&A. Przekładam złożone analizy na rekomendacje dla zarządów — i pomagam zespołom je wdrożyć. Dziś wspieram realizację trzyletniego programu strategicznego w Solaris Bus & Coach.",
      ctaPrimary: "Zobacz case studies",
      ctaSecondary: "Porozmawiajmy",
      ctaCv: "CV (PDF)",
      ledgerTitle: "W liczbach",
      stats: [
        { prefix: "", value: 150, suffix: " mln EUR", label: "potencjalny wpływ na EBITDA programu strategicznego, którego realizację wspieram" },
        { prefix: "~", value: 300, suffix: " mln PLN", label: "NAV portfela spółek, nad którym prowadziłem nadzór finansowy i strategiczny" },
        { prefix: "", value: 300, suffix: "+", label: "celów „TIER 1” w pipeline akwizycyjnym zbudowanym dla Netguru" },
        { prefix: "", value: 500, suffix: "+", label: "studentów na czterech autorskich przedmiotach (ponad 600 godzin zajęć)" }
      ],
      scroll: "Przewiń"
    },

    approach: {
      kicker: "Podejście menedżerskie",
      title: "Jak myślę o zarządzaniu",
      intro:
        "Przez ponad dekadę pracowałem po obu stronach stołu: jako analityk przygotowujący rekomendacje i jako osoba odpowiedzialna za to, by te rekomendacje zamieniły się w działania w spółkach. Z tej perspektywy wynikają cztery zasady, którymi kieruję się w pracy z zarządami i zespołami.",
      principles: [
        {
          title: "Liczby przed opinią",
          body: "Decyzja jest tak dobra, jak założenia, na których stoi. Zanim inicjatywa trafi na stół zarządu, weryfikuję jej założenia finansowe i operacyjne oraz dopytuję właścicieli o realną skalę szansy.",
          proof: "Solaris · Katharsis · FSG Biznes"
        },
        {
          title: "Strategia kończy się na wdrożeniu",
          body: "Plan bez mapy blokad to lista życzeń. Identyfikuję ryzyka, zależności i wąskie gardła realizacji, a potem razem z właścicielami inicjatyw przygotowuję konkretne działania naprawcze.",
          proof: "Solaris Bus & Coach"
        },
        {
          title: "Ludzie dowożą wynik",
          body: "Najtrwalszy efekt daje zespół, który sam zadaje właściwe pytania. Rozwijam kompetencje właścicieli inicjatyw, a przez sześć lat uczyłem ponad 500 studentów analizy rynku, konkurencji i planowania biznesowego.",
          proof: "Solaris · Collegium Da Vinci"
        },
        {
          title: "Proces, który działa bez bohaterów",
          body: "Powtarzalny rytm budżetu, prognozy i raportowania KPI pozwala zarządowi reagować wcześnie, a nie gasić pożary. Automatyzuję to, co powtarzalne — od makr VBA na starcie kariery po cykliczne raportowanie dla właściciela funduszu.",
          proof: "Franklin Templeton · Katharsis"
        }
      ],
      loopTitle: "Mój cykl decyzyjny",
      loopHint: "Wybierz etap, aby zobaczyć, jak wygląda w praktyce.",
      loopPracticeLabel: "W praktyce",
      loop: [
        {
          title: "Diagnoza",
          body: "Rynek, konkurencja, dane finansowe. Ustalam, jaki problem naprawdę rozwiązujemy i ile jest wart, zanim ktokolwiek zacznie budować rozwiązanie.",
          practice: "Skanowanie rynków zagranicznych w Netguru: rozmowy z ponad 50 założycielami firm technologicznych i selekcja ponad 300 celów TIER 1."
        },
        {
          title: "Wycena",
          body: "Modele finansowe, DCF / LBO, scenariusze. Przekładam szansę na liczby, które da się uczciwie porównać z alternatywami.",
          practice: "Wyceny spółek portfelowych na potrzeby raportowania do KNF; biznesplany i wyceny dla firm z przychodami powyżej 50 mln PLN."
        },
        {
          title: "Decyzja",
          body: "Rekomendacja z jasnym „tak / nie / pod warunkiem” — napisana dla zarządu lub właściciela, a nie dla autora modelu.",
          practice: "Rekomendacje inwestycyjne kierowane bezpośrednio do właścicieli Netguru, m.in. przy przejęciu większościowego udziału w mohi.to i inwestycji w Pilot44."
        },
        {
          title: "Wdrożenie i kontrola",
          body: "Budżet, KPI, rytm przeglądów i plan naprawczy, gdy coś odstaje od założeń. Tu strategia staje się wynikiem.",
          practice: "Budżety, prognozy i raportowanie KPI dla spółek portfelowych funduszu; usuwanie blokad realizacyjnych w programie strategicznym Solaris."
        }
      ]
    },

    experience: {
      kicker: "Doświadczenie",
      title: "Od danych, przez transakcje, do strategii",
      intro:
        "Każdy etap dodawał nową warstwę: jakość danych, finanse korporacyjne, transakcje, nadzór właścicielski, a dziś realizację strategii w dużej organizacji przemysłowej.",
      filterLabel: "Pokaż obszar",
      filters: {
        all: "Wszystko",
        strategy: "Strategia",
        ma: "M&A i inwestycje",
        finance: "Finanse i FP&A",
        people: "Ludzie i edukacja",
        data: "Dane"
      },
      chartLabel: "Oś kariery 2013–dziś",
      present: "obecnie",
      contextLabel: "Kontekst",
      expand: "Rozwiń",
      collapse: "Zwiń",
      roles: [
        {
          id: "solaris",
          start: 2023, end: null,
          company: "Solaris Bus & Coach",
          role: "Strategy Manager",
          sector: "Producent autobusów i pojazdów zeroemisyjnych",
          tags: ["strategy", "finance", "people"],
          metric: { value: "150 mln EUR", label: "potencjał EBITDA programu" },
          context: "Realizacja trzyletniego planu strategicznego z naciskiem na wynik finansowy programu i wsparcie zespołu wprowadzającego nowy produkt na rynek.",
          bullets: [
            "Wspieram realizację **trzyletniego programu strategicznego o potencjalnym wpływie na EBITDA na poziomie 150 mln EUR**.",
            "Identyfikuję i oceniam szanse rynkowe, a wnioski przekładam na rekomendacje strategiczne.",
            "Weryfikuję założenia finansowe i operacyjne inicjatyw oraz wspieram ich właścicieli w kluczowych decyzjach.",
            "Mapuję ryzyka, zależności i blokady realizacyjne; przygotowuję działania naprawcze.",
            "Rozwijam kompetencje właścicieli inicjatyw i ich zespołów."
          ],
          todo: "Uzupełnij: wielkość portfela inicjatyw / zespołu, z którym pracujesz na co dzień."
        },
        {
          id: "netguru",
          start: 2022, end: 2023,
          company: "Netguru",
          role: "Investment Analyst",
          sector: "Software house · wewnętrzny zespół M&A",
          tags: ["ma", "strategy"],
          metric: { value: "300+", label: "celów TIER 1 w pipeline" },
          context: "Mały, wewnętrzny zespół M&A raportujący bezpośrednio do CEO — realizacja strategii wzrostu przez akwizycje i inwestycje w sektorze IT.",
          bullets: [
            "Wspierałem procesy M&A dotyczące **spółek o wycenie przekraczającej 30 mln EUR**.",
            "Przeprowadziłem rozmowy z **ponad 50 właścicielami firm technologicznych** i zbudowałem pipeline **ponad 300 celów TIER 1** na rynkach zagranicznych.",
            "Oceniałem okazje inwestycyjne i przygotowywałem rekomendacje bezpośrednio dla właścicieli spółki.",
            "Wspierałem procesy inwestycyjne, integrację po przejęciu (PMI) oraz komunikację z bankami i doradcami zewnętrznymi."
          ]
        },
        {
          id: "katharsis",
          start: 2019, end: 2022,
          company: "Katharsis Advisory",
          role: "Senior Financial Analyst · Project Manager",
          sector: "Fundusz inwestycyjny · spółki portfelowe z wielu branż",
          tags: ["finance", "ma", "strategy"],
          metric: { value: "~300 mln PLN", label: "NAV nadzorowanego portfela" },
          context: "Odpowiedzialność za działalność operacyjną i finansową spółek portfelowych funduszu — od budżetu po wyjście z inwestycji.",
          bullets: [
            "Wspierałem nadzór finansowy i strategiczny nad portfelem o **łącznej wartości NAV ok. 300 mln PLN**, w tym spółkami z przychodami powyżej 50 mln PLN rocznie.",
            "Przygotowywałem budżety i prognozy, monitorowałem ich realizację i raportowałem KPI zarządom oraz właścicielowi funduszu.",
            "Wyceniałem spółki portfelowe na potrzeby raportowania do Komisji Nadzoru Finansowego.",
            "Uczestniczyłem w procesach M&A, w tym w due diligence po stronie kupującego i sprzedającego.",
            "Koordynowałem **sprzedaż 100% udziałów w centrum handlowym w czasie pandemii COVID-19**."
          ]
        },
        {
          id: "cdv",
          start: 2018, end: 2024,
          company: "Collegium Da Vinci University",
          role: "Wykładowca",
          sector: "Szkolnictwo wyższe · równolegle do pracy w biznesie",
          tags: ["people", "data"],
          metric: { value: "500+", label: "studentów" },
          context: "Sześć lat dydaktyki łączącej praktykę biznesową ze strategią — prowadzonej równolegle do pracy w finansach i inwestycjach.",
          bullets: [
            "Opracowałem i prowadziłem **cztery autorskie przedmioty dla łącznie ponad 500 studentów** (ponad 600 godzin zajęć) z obszaru finansów, strategii i planowania biznesowego.",
            "Tematy: infobrokering, analiza konkurencji, współczesne potrzeby konsumenckie, tworzenie i zarządzanie bazami danych.",
            "Samodzielnie tworzyłem sylabusy, roczne plany zajęć, prezentacje, laboratoria i materiały dodatkowe."
          ]
        },
        {
          id: "fsg",
          start: 2016, end: 2019,
          company: "FSG Biznes",
          role: "Financial Analyst · Senior Financial Analyst",
          sector: "Doradztwo finansowe i transakcyjne",
          tags: ["finance", "ma"],
          metric: { value: "50+ mln PLN", label: "wartość wspieranych transakcji" },
          context: "Doradztwo dla firm produkcyjnych, transportowych i handlowych — od budżetu, przez finansowanie inwestycji, po sprzedaż spółki.",
          bullets: [
            "Wspierałem **procesy transakcyjne o łącznej wartości przekraczającej 50 mln PLN**, m.in. po stronie sprzedającego.",
            "Zapewniałem wsparcie operacyjne i finansowe spółkom z przychodami powyżej 50 mln PLN rocznie.",
            "Przygotowywałem biznesplany do finansowania inwestycji, wyceny spółek i projektów, raporty zarządcze oraz analizy rynkowe."
          ]
        },
        {
          id: "pekabex",
          start: 2015, end: 2016,
          company: "Pekabex",
          role: "CFO Assistant",
          sector: "Prefabrykacja betonowa · spółka notowana na GPW",
          tags: ["finance", "ma"],
          metric: null,
          context: "Praca bezpośrednio z dyrektorem finansowym i zarządem spółki giełdowej w okresie akwizycji.",
          bullets: [
            "Wspierałem CFO w analizie finansowej, raportowaniu zarządczym i przygotowywaniu materiałów do decyzji ad hoc.",
            "Analizowałem i modyfikowałem dokumenty oraz umowy; nadzorowałem realizację zadań przez pracowników.",
            "Wspierałem due diligence i końcowy etap **przejęcia spółki Ergon**."
          ]
        },
        {
          id: "franklin",
          start: 2013, end: 2015,
          company: "Franklin Templeton Investments",
          role: "Data Analyst",
          sector: "Zarządzanie inwestycjami · środowisko międzynarodowe",
          tags: ["data", "finance"],
          metric: null,
          context: "Start kariery: jakość danych i raportowanie w międzynarodowej firmie zarządzającej inwestycjami.",
          bullets: [
            "Prowadziłem analizy i kontrolę jakości danych na potrzeby cyklicznego raportowania inwestycyjnego.",
            "Przygotowywałem i utrzymywałem dane analityczne wykorzystywane w raportowaniu wewnętrznym i procesach decyzyjnych.",
            "Skróciłem czas realizacji procesów dzięki formułom Excel i makrom VBA."
          ]
        }
      ]
    },

    cases: {
      kicker: "Case studies",
      title: "Wybrane projekty: kontekst, działania, efekt",
      intro:
        "Sytuacje, które dobrze pokazują, jak pracuję. Każdy case opisany w tym samym układzie — żeby łatwo było je porównać.",
      labels: {
        context: "Kontekst",
        role: "Moja rola",
        actions: "Działania",
        result: "Rezultat",
        lesson: "Wniosek",
        prev: "Poprzedni",
        next: "Następny",
        of: "z"
      },
      items: [
        {
          id: "solaris-program",
          short: "Program strategiczny",
          org: "Solaris Bus & Coach · 2023–obecnie",
          area: "Strategia i transformacja",
          title: "Realizacja trzyletniego programu strategicznego",
          metric: { value: "150 mln EUR", label: "potencjalny wpływ na EBITDA" },
          context: "Producent przemysłowy realizuje trzyletni plan strategiczny. Program składa się z wielu inicjatyw prowadzonych przez różnych właścicieli — o różnej dojrzałości i jakości założeń.",
          role: "Strategy Manager w zespole strategii: partner do dyskusji dla właścicieli inicjatyw i wsparcie dla kadry zarządzającej.",
          actions: [
            "Ocena potencjału biznesowego inicjatyw i weryfikacja ich założeń finansowych oraz operacyjnych",
            "Identyfikacja nowych szans rynkowych i przekładanie ich na rekomendacje strategiczne",
            "Mapowanie ryzyk, zależności i blokad oraz przygotowanie planów naprawczych",
            "Wsparcie zespołu wprowadzającego nowy produkt na rynek"
          ],
          result: "Program o potencjalnym wpływie na EBITDA na poziomie 150 mln EUR. Systematyczne kwestionowanie założeń i skali szans podnosi jakość decyzji podejmowanych przez właścicieli inicjatyw.",
          todo: "Uzupełnij: dotychczas zrealizowany wpływ, liczba inicjatyw, efekt wprowadzenia nowego produktu.",
          lesson: "W programach transformacyjnych największą wartość tworzy wczesne nazwanie blokad — zanim staną się opóźnieniem w budżecie."
        },
        {
          id: "netguru-ma",
          short: "Pipeline M&A",
          org: "Netguru · 2022–2023",
          area: "M&A i inwestycje",
          title: "Pipeline akwizycyjny i dwie transakcje",
          metric: { value: "300+", label: "celów TIER 1" },
          context: "Netguru realizował strategię wzrostu przez akwizycje i inwestycje w sektorze IT, również na rynkach zagranicznych. Mały wewnętrzny zespół M&A raportował bezpośrednio do CEO.",
          role: "Investment Analyst: research, selekcja celów, ocena okazji inwestycyjnych i rekomendacje dla właścicieli spółki.",
          actions: [
            "Skanowanie rynków zagranicznych i analiza danych o spółkach oraz rynkach",
            "Rozmowy z ponad 50 założycielami i właścicielami firm technologicznych",
            "Ocena okazji inwestycyjnych dotyczących spółek o wycenie powyżej 30 mln EUR",
            "Wsparcie procesu inwestycyjnego, integracji po przejęciu i komunikacji z bankami oraz doradcami"
          ],
          result: "Pipeline ponad 300 celów TIER 1. Udział w przejęciu większościowego udziału w agencji **mohi.to** (e-commerce na Shopify, UX) oraz w strategicznej, ośmiocyfrowej inwestycji w **Pilot44** — amerykańskie studio innowacji korporacyjnych.",
          lesson: "Dobry pipeline to nie długa lista, tylko jasne kryteria. Dzięki nim rozmowa z właścicielem firmy dotyczy dopasowania strategicznego, a nie przypadkowej okazji."
        },
        {
          id: "hopstop",
          short: "Exit w pandemii",
          org: "Katharsis · 2019–2022",
          area: "M&A · wyjście z inwestycji",
          title: "Sprzedaż centrum handlowego w czasie pandemii",
          metric: { value: "100%", label: "udziałów sprzedanych" },
          context: "Fundusz zdecydował o sprzedaży centrum handlowego Hopstop w Siedlcach. Proces przypadł na okres ograniczeń COVID-19, gdy rynek nieruchomości handlowych był pod szczególną presją.",
          role: "Project Manager: koordynacja całego procesu sprzedaży po stronie funduszu.",
          actions: [
            "Koordynacja procesu transakcyjnego od przygotowania do zamknięcia",
            "Wsparcie due diligence po stronie sprzedającego",
            "Raportowanie postępów do zarządu i właściciela funduszu"
          ],
          result: "Sprzedaż 100% udziałów w centrum handlowym na rzecz LCP Properties, przeprowadzona mimo ograniczeń pandemicznych.",
          todo: "Uzupełnij: czas trwania procesu, skala transakcji (jeśli może być publiczna).",
          lesson: "W niepewnym otoczeniu przewagą jest porządek procesu. Kupujący płaci za przewidywalność."
        },
        {
          id: "galicjanka",
          short: "Spółka portfelowa",
          org: "Katharsis · spółka portfelowa",
          area: "Operacje i finanse",
          title: "Koordynacja operacyjna producenta wód mineralnych",
          metric: { value: "3 obszary", label: "budżet · dotacje UE · rebranding" },
          context: "W spółce portfelowej funduszu — producencie wód mineralnych Galicjanka — równolegle toczyły się planowanie finansowe, rozliczenie dotacji unijnych i rebranding.",
          role: "Koordynacja działalności operacyjnej spółki z ramienia funduszu.",
          actions: [
            "Budżetowanie i prognozowanie wyników",
            "Rozliczenie dotacji z funduszy UE",
            "Koordynacja procesu rebrandingu",
            "Raportowanie KPI do zarządu i właściciela funduszu"
          ],
          result: "Jeden punkt koordynacji dla finansów, dotacji i marki, z regularnym raportowaniem do właściciela.",
          todo: "Uzupełnij: mierzalny efekt (np. rozliczona kwota dotacji, zmiana sprzedaży po rebrandingu).",
          lesson: "Nadzór właścicielski działa najlepiej blisko operacji. Liczby w raporcie mają sens, gdy wiesz, co się za nimi kryje."
        },
        {
          id: "fsg-sellside",
          short: "Doradztwo sell-side",
          org: "FSG Biznes · 2016–2019",
          area: "M&A · doradztwo",
          title: "Doradztwo sell-side i transformacja w produkcji",
          metric: { value: "50+ mln PLN", label: "wartość wspieranych transakcji" },
          context: "Klienci z branży produkcyjnej, transportowej i handlowej potrzebowali finansowania inwestycji, wyceny lub przygotowania do sprzedaży.",
          role: "Financial Analyst / Senior Financial Analyst w zespole doradczym.",
          actions: [
            "Doradztwo po stronie sprzedającego przy sprzedaży **Rotometal** — producenta narzędzi dla przemysłu poligraficznego",
            "Doradztwo finansowe i transformacyjne dla **Euroband** — producenta pasów transportowych",
            "Biznesplany, wyceny, analizy rynkowe i raporty dla zarządów"
          ],
          result: "Sprzedaż Rotometal na rzecz Highlander Partners; łączna wartość wspieranych transakcji powyżej 50 mln PLN.",
          lesson: "Wycena to argument w negocjacjach, a nie tylko arkusz. Musi wytrzymać pytania drugiej strony."
        },
        {
          id: "pekabex-ergon",
          short: "Akwizycja na GPW",
          org: "Pekabex · 2015–2016",
          area: "M&A · corporate finance",
          title: "Przejęcie w spółce giełdowej",
          metric: { value: "GPW", label: "spółka publiczna" },
          context: "Pekabex, notowana na GPW grupa z branży prefabrykacji betonowej, przejmowała zakład produkcyjny Ergon.",
          role: "Asystent CFO: wsparcie dyrektora finansowego i zarządu.",
          actions: [
            "Wsparcie due diligence przejmowanej spółki",
            "Raporty finansowe dla zarządu",
            "Analiza i modyfikacja dokumentów oraz umów"
          ],
          result: "Wsparcie końcowego etapu przejęcia spółki Ergon przez Pekabex.",
          lesson: "Pierwsza lekcja M&A: o wartości transakcji decydują umowy i integracja, nie tylko cena."
        }
      ]
    },

    skills: {
      kicker: "Kompetencje",
      title: "Obszary, w których dowożę wynik",
      intro: "Zamiast procentów — dowody. Wybierz obszar, aby zobaczyć, gdzie stosowałem daną kompetencję.",
      whereLabel: "Gdzie w praktyce",
      rolesLabel: "Powiązane role",
      groups: [
        {
          id: "strategy",
          title: "Strategia i transformacja",
          summary: "Od analizy rynku do planu wdrożenia — i pilnowania, żeby plan się wydarzył.",
          items: [
            { name: "Strategia korporacyjna", where: "Solaris" },
            { name: "Planowanie i wdrażanie strategii", where: "Solaris · Katharsis" },
            { name: "Transformacja biznesowa", where: "Solaris · FSG Biznes (Euroband)" },
            { name: "Analiza rynku i konkurencji", where: "Netguru · Solaris · Collegium Da Vinci" },
            { name: "Zarządzanie inicjatywami strategicznymi", where: "Solaris" }
          ],
          roles: ["solaris", "netguru", "katharsis", "fsg"]
        },
        {
          id: "finance",
          title: "Finanse, wycena i M&A",
          summary: "Liczby, które wytrzymują pytania zarządu, inwestora i drugiej strony transakcji.",
          items: [
            { name: "Modelowanie finansowe i wycena (DCF / LBO)", where: "Katharsis · FSG Biznes · Netguru" },
            { name: "M&A i due diligence (buy-side i sell-side)", where: "Netguru · Katharsis · FSG Biznes · Pekabex" },
            { name: "Ocena okazji inwestycyjnych", where: "Netguru · Solaris" },
            { name: "Wycena spółek na potrzeby KNF", where: "Katharsis" },
            { name: "Integracja po przejęciu (PMI)", where: "Netguru" }
          ],
          roles: ["netguru", "katharsis", "fsg", "pekabex"]
        },
        {
          id: "performance",
          title: "Zarządzanie wynikiem i operacje",
          summary: "Rytm budżetu, prognozy i KPI, który pozwala reagować wcześnie.",
          items: [
            { name: "Budżetowanie i prognozowanie", where: "Katharsis · FSG Biznes" },
            { name: "Raportowanie zarządcze i KPI", where: "Katharsis · Pekabex · FSG Biznes" },
            { name: "Nadzór nad portfelem spółek", where: "Katharsis (NAV ~300 mln PLN)" },
            { name: "Biznesplany i finansowanie inwestycji", where: "FSG Biznes" },
            { name: "Rozliczanie dotacji UE", where: "Katharsis (Galicjanka)" }
          ],
          roles: ["katharsis", "fsg", "pekabex", "solaris"]
        },
        {
          id: "people",
          title: "Ludzie i interesariusze",
          summary: "Praca z zarządami, właścicielami i zespołami — tak, by decyzje miały poparcie.",
          items: [
            { name: "Zarządzanie interesariuszami (zarząd, właściciele, doradcy)", where: "Solaris · Netguru · Katharsis" },
            { name: "Rozwój kompetencji zespołów i właścicieli inicjatyw", where: "Solaris" },
            { name: "Prowadzenie zajęć i szkoleń", where: "Collegium Da Vinci (500+ osób)" },
            { name: "Komunikacja z bankami i doradcami", where: "Netguru" },
            { name: "Nadzór nad realizacją zadań zespołu", where: "Pekabex" }
          ],
          roles: ["solaris", "netguru", "cdv", "pekabex"]
        },
        {
          id: "tools",
          title: "Dane i narzędzia",
          summary: "Solidny warsztat, który skraca drogę od danych do wniosku.",
          items: [
            { name: "Zaawansowany Excel i makra VBA", where: "Franklin Templeton · wszystkie role" },
            { name: "Systemy ERP / SAP", where: "Analiza i raportowanie finansowe" },
            { name: "Kontrola jakości danych", where: "Franklin Templeton" },
            { name: "Tworzenie i zarządzanie bazami danych", where: "Collegium Da Vinci" },
            { name: "Microsoft Office", where: "Codzienna praca" }
          ],
          roles: ["franklin", "cdv"]
        }
      ],
      credentialsTitle: "Wykształcenie, certyfikaty, języki",
      credentials: [
        {
          title: "Magister finansów i rachunkowości",
          meta: "Uniwersytet Ekonomiczny w Poznaniu · 2010–2015",
          body: "Specjalizacje: bankowość; inwestycje kapitałowe i strategie finansowe przedsiębiorstw. Praca magisterska: „Budowa portfela inwestycyjnego w oparciu o wskaźniki rynkowe”."
        },
        {
          title: "Certyfikat Głównego Księgowego",
          meta: "Stowarzyszenie Księgowych w Polsce · III stopień",
          body: "Formalne potwierdzenie warsztatu rachunkowego — fundament pracy z budżetami, raportowaniem i wyceną."
        },
        {
          title: "Google Project Management",
          meta: "Certyfikat zawodowy",
          body: "Metodyka prowadzenia projektów: planowanie, harmonogram, ryzyka, komunikacja z interesariuszami."
        },
        {
          title: "Języki",
          meta: "Polski · angielski",
          body: "Polski — ojczysty. Angielski — C1 Advanced; praca w środowisku międzynarodowym i z partnerami zagranicznymi."
        }
      ]
    },

    contact: {
      kicker: "Kontakt",
      title: "Porozmawiajmy o tym, co ma się wydarzyć w Twojej organizacji.",
      body: "Jestem otwarty na rozmowy o rolach menedżerskich w obszarze strategii, transformacji, finansów i M&A. Najszybciej złapiesz mnie mailowo lub przez LinkedIn.",
      emailLabel: "E-mail",
      phoneLabel: "Telefon",
      linkedinLabel: "LinkedIn",
      locationLabel: "Lokalizacja",
      location: "Poznań, Polska",
      copy: "Kopiuj",
      copied: "Skopiowano",
      cvTitle: "CV do pobrania",
      cvBody: "Jednostronicowe CV w dwóch wersjach językowych.",
      cvPl: "CV po polsku",
      cvEn: "CV in English",
      download: "Pobierz",
      preview: "Podgląd"
    },

    footer: {
      rights: "Wszelkie prawa zastrzeżone.",
      updated: "Ostatnia aktualizacja",
      top: "Do góry"
    }
  },

  /* ===================================================================
     ENGLISH
     =================================================================== */
  en: {
    htmlTitle: "Wojciech Rosik — Strategy · Business Performance · Investment",
    metaDescription:
      "Wojciech Rosik — strategy manager with 10+ years of experience in corporate strategy, investment analysis, M&A and strategic initiative delivery. Based in Poznań, Poland.",
    skip: "Skip to content",
    nav: {
      approach: "Approach",
      experience: "Experience",
      cases: "Case studies",
      skills: "Capabilities",
      contact: "Contact",
      cv: "CV",
      menu: "Menu",
      close: "Close",
      langLabel: "Choose language"
    },

    hero: {
      status: "Currently: Strategy Manager · Solaris Bus & Coach",
      eyebrow: "Strategy · Business performance · Investment",
      title: ["From analysis to decision.", "From decision to results."],
      lead:
        "Strategy and finance manager with 10+ years in corporate strategy, investments and M&A. I turn complex analysis into recommendations leadership can act on — and help teams deliver them. Today I support the delivery of a three-year strategic program at Solaris Bus & Coach.",
      ctaPrimary: "See case studies",
      ctaSecondary: "Let's talk",
      ctaCv: "CV (PDF)",
      ledgerTitle: "By the numbers",
      stats: [
        { prefix: "EUR ", value: 150, suffix: "m", label: "potential EBITDA impact of the strategic program I help deliver" },
        { prefix: "~PLN ", value: 300, suffix: "m", label: "portfolio NAV under my financial and strategic oversight" },
        { prefix: "", value: 300, suffix: "+", label: "“TIER 1” targets in the acquisition pipeline I built for Netguru" },
        { prefix: "", value: 500, suffix: "+", label: "students across four courses I designed (600+ teaching hours)" }
      ],
      scroll: "Scroll"
    },

    approach: {
      kicker: "Management approach",
      title: "How I think about management",
      intro:
        "For more than a decade I have worked on both sides of the table: as the analyst preparing recommendations, and as the person accountable for turning them into action inside companies. That perspective shaped four principles I bring to work with boards and teams.",
      principles: [
        {
          title: "Numbers before opinions",
          body: "A decision is only as good as the assumptions underneath it. Before an initiative reaches the board, I test its financial and operational assumptions and challenge owners on the real size of the opportunity.",
          proof: "Solaris · Katharsis · FSG Biznes"
        },
        {
          title: "Strategy ends with execution",
          body: "A plan without a map of roadblocks is a wish list. I identify risks, dependencies and execution bottlenecks, then build concrete recovery actions together with initiative owners.",
          proof: "Solaris Bus & Coach"
        },
        {
          title: "People deliver results",
          body: "The most durable impact comes from a team that asks the right questions on its own. I build the capabilities of initiative owners, and for six years I taught 500+ students market analysis, competitor research and business planning.",
          proof: "Solaris · Collegium Da Vinci"
        },
        {
          title: "Processes that don't need heroes",
          body: "A steady rhythm of budgets, forecasts and KPI reporting lets leadership act early instead of firefighting. I automate what repeats — from VBA macros early in my career to recurring reporting for a fund owner.",
          proof: "Franklin Templeton · Katharsis"
        }
      ],
      loopTitle: "My decision cycle",
      loopHint: "Select a stage to see what it looks like in practice.",
      loopPracticeLabel: "In practice",
      loop: [
        {
          title: "Diagnose",
          body: "Market, competition, financials. I establish which problem we are really solving and what it is worth — before anyone starts building a solution.",
          practice: "International target scanning at Netguru: conversations with 50+ tech founders and a shortlist of 300+ TIER 1 targets."
        },
        {
          title: "Value",
          body: "Financial models, DCF / LBO, scenarios. I translate an opportunity into numbers that can be compared honestly with the alternatives.",
          practice: "Portfolio company valuations for regulatory reporting to the Polish Financial Supervision Authority; business plans and valuations for companies with revenues above PLN 50m."
        },
        {
          title: "Decide",
          body: "A recommendation with a clear “yes / no / yes, if” — written for the board or the owner, not for the person who built the model.",
          practice: "Investment recommendations made directly to Netguru's owners, including the majority stake in mohi.to and the investment in Pilot44."
        },
        {
          title: "Deliver & control",
          body: "Budget, KPIs, review cadence and a recovery plan when things drift from plan. This is where strategy becomes results.",
          practice: "Budgets, forecasts and KPI reporting for fund portfolio companies; unblocking execution in the Solaris strategic program."
        }
      ]
    },

    experience: {
      kicker: "Experience",
      title: "From data, through deals, to strategy",
      intro:
        "Each step added a new layer: data quality, corporate finance, transactions, ownership oversight — and today, strategy execution in a large industrial organisation.",
      filterLabel: "Show area",
      filters: {
        all: "All",
        strategy: "Strategy",
        ma: "M&A & investment",
        finance: "Finance & FP&A",
        people: "People & teaching",
        data: "Data"
      },
      chartLabel: "Career timeline 2013–today",
      present: "present",
      contextLabel: "Context",
      expand: "Expand",
      collapse: "Collapse",
      roles: [
        {
          id: "solaris",
          start: 2023, end: null,
          company: "Solaris Bus & Coach",
          role: "Strategy Manager",
          sector: "Bus and zero-emission vehicle manufacturer",
          tags: ["strategy", "finance", "people"],
          metric: { value: "EUR 150m", label: "program EBITDA potential" },
          context: "Delivery of a three-year strategic plan, focused on the program's financial results and on supporting a team bringing a new product to market.",
          bullets: [
            "Support the delivery of a **three-year strategic program with a potential EBITDA impact of EUR 150m**.",
            "Identify and assess market opportunities and translate findings into strategic recommendations.",
            "Challenge initiative owners on assumptions and opportunity sizing to improve decision quality.",
            "Map risks, dependencies and execution roadblocks; develop action plans to unlock value creation.",
            "Build the capabilities of initiative owners and their teams."
          ],
          todo: "Add: size of the initiative portfolio / the team you work with day to day."
        },
        {
          id: "netguru",
          start: 2022, end: 2023,
          company: "Netguru",
          role: "Investment Analyst",
          sector: "Software house · in-house M&A team",
          tags: ["ma", "strategy"],
          metric: { value: "300+", label: "TIER 1 targets in pipeline" },
          context: "A small in-house M&A team reporting directly to the CEO, executing a growth strategy through acquisitions and investments in the IT sector.",
          bullets: [
            "Supported M&A processes targeting **companies valued above EUR 30m**.",
            "Spoke with **50+ technology company owners** and built a pipeline of **300+ TIER 1 targets** in international markets.",
            "Assessed investment opportunities and prepared recommendations directly for the company's owners.",
            "Supported investment and post-merger integration (PMI) processes, and communication with banks and external advisors."
          ]
        },
        {
          id: "katharsis",
          start: 2019, end: 2022,
          company: "Katharsis Advisory",
          role: "Senior Financial Analyst · Project Manager",
          sector: "Investment fund · multi-sector portfolio companies",
          tags: ["finance", "ma", "strategy"],
          metric: { value: "~PLN 300m", label: "portfolio NAV overseen" },
          context: "Responsible for the operational and financial activity of the fund's portfolio companies — from budgeting to exit.",
          bullets: [
            "Supported financial and strategic oversight of a portfolio with a **combined NAV of approx. PLN 300m**, including companies with annual revenues above PLN 50m.",
            "Prepared budgets and forecasts, monitored execution and reported KPIs to management and the fund owner.",
            "Valued portfolio companies for regulatory reporting to the Polish Financial Supervision Authority (KNF).",
            "Took part in M&A processes, including buy-side and sell-side due diligence.",
            "Coordinated the **sale of 100% of a shopping centre during the COVID-19 pandemic**."
          ]
        },
        {
          id: "cdv",
          start: 2018, end: 2024,
          company: "Collegium Da Vinci University",
          role: "Lecturer",
          sector: "Higher education · alongside business roles",
          tags: ["people", "data"],
          metric: { value: "500+", label: "students" },
          context: "Six years of teaching that linked business practice with strategy, alongside full-time work in finance and investment.",
          bullets: [
            "Designed and delivered **four university courses to 500+ students** (600+ teaching hours) covering finance, strategy and business planning.",
            "Topics: infobrokering, competitor analysis, contemporary consumer needs, building and managing databases.",
            "Created all syllabi, annual course plans, presentations, labs and supplementary materials."
          ]
        },
        {
          id: "fsg",
          start: 2016, end: 2019,
          company: "FSG Biznes",
          role: "Financial Analyst · Senior Financial Analyst",
          sector: "Financial and transaction advisory",
          tags: ["finance", "ma"],
          metric: { value: "PLN 50m+", label: "transaction value supported" },
          context: "Advisory for manufacturing, transport and retail companies — from budgeting, through investment financing, to selling the business.",
          bullets: [
            "Supported **transaction processes with a total deal value above PLN 50m**, including sell-side mandates.",
            "Provided operational and financial support to companies with annual revenues above PLN 50m.",
            "Prepared business plans for investment financing, company and project valuations, management reports and market analyses."
          ]
        },
        {
          id: "pekabex",
          start: 2015, end: 2016,
          company: "Pekabex",
          role: "CFO Assistant",
          sector: "Precast concrete · listed on the Warsaw Stock Exchange",
          tags: ["finance", "ma"],
          metric: null,
          context: "Working directly with the CFO and management board of a listed company during an acquisition.",
          bullets: [
            "Supported the CFO in financial analysis, management reporting and ad hoc decision support.",
            "Analysed and amended documents and contracts; supervised the delivery of tasks by team members.",
            "Supported due diligence and the final stage of the **acquisition of Ergon**."
          ]
        },
        {
          id: "franklin",
          start: 2013, end: 2015,
          company: "Franklin Templeton Investments",
          role: "Data Analyst",
          sector: "Investment management · international environment",
          tags: ["data", "finance"],
          metric: null,
          context: "Career start: data quality and reporting at an international investment management firm.",
          bullets: [
            "Performed data analysis and quality checks for recurring investment reporting.",
            "Prepared and maintained analytical data used for internal reporting and decision support.",
            "Shortened process times using Excel formulas and VBA macros."
          ]
        }
      ]
    },

    cases: {
      kicker: "Case studies",
      title: "Selected work: context, actions, outcome",
      intro:
        "Situations that show how I work. Each case follows the same structure, so they are easy to compare.",
      labels: {
        context: "Context",
        role: "My role",
        actions: "Actions",
        result: "Outcome",
        lesson: "Takeaway",
        prev: "Previous",
        next: "Next",
        of: "of"
      },
      items: [
        {
          id: "solaris-program",
          short: "Strategic program",
          org: "Solaris Bus & Coach · 2023–present",
          area: "Strategy & transformation",
          title: "Delivering a three-year strategic program",
          metric: { value: "EUR 150m", label: "potential EBITDA impact" },
          context: "An industrial manufacturer is executing a three-year strategic plan. The program consists of many initiatives run by different owners, with varying maturity and quality of assumptions.",
          role: "Strategy Manager in the strategy team: sparring partner for initiative owners and support for senior management.",
          actions: [
            "Assessing the business potential of initiatives and testing their financial and operational assumptions",
            "Identifying new market opportunities and turning them into strategic recommendations",
            "Mapping risks, dependencies and roadblocks, and preparing recovery plans",
            "Supporting the team bringing a new product to market"
          ],
          result: "A program with a potential EBITDA impact of EUR 150m. Systematically challenging assumptions and opportunity sizing raises the quality of decisions made by initiative owners.",
          todo: "Add: impact delivered to date, number of initiatives, outcome of the new product launch.",
          lesson: "In transformation programs, the most value comes from naming roadblocks early — before they turn into budget slippage."
        },
        {
          id: "netguru-ma",
          short: "M&A pipeline",
          org: "Netguru · 2022–2023",
          area: "M&A & investment",
          title: "An acquisition pipeline and two deals",
          metric: { value: "300+", label: "TIER 1 targets" },
          context: "Netguru was pursuing growth through acquisitions and investments in the IT sector, including international markets. A small in-house M&A team reported directly to the CEO.",
          role: "Investment Analyst: research, target selection, opportunity assessment and recommendations to the company's owners.",
          actions: [
            "Scanning international markets and analysing company and market data",
            "Conversations with 50+ founders and owners of technology companies",
            "Assessing investment opportunities in companies valued above EUR 30m",
            "Supporting the investment process, post-merger integration and communication with banks and advisors"
          ],
          result: "A pipeline of 300+ TIER 1 targets. Involvement in the acquisition of a majority stake in **mohi.to** (Shopify e-commerce and UX agency) and in a strategic eight-figure investment in **Pilot44**, a US corporate innovation studio.",
          lesson: "A good pipeline is not a long list but clear criteria. They keep the conversation with a founder on strategic fit rather than on whatever deal happens to be available."
        },
        {
          id: "hopstop",
          short: "Exit in a pandemic",
          org: "Katharsis · 2019–2022",
          area: "M&A · exit",
          title: "Selling a shopping centre during the pandemic",
          metric: { value: "100%", label: "of shares sold" },
          context: "The fund decided to sell the Hopstop shopping centre in Siedlce. The process fell during COVID-19 restrictions, when retail real estate was under particular pressure.",
          role: "Project Manager: coordinating the entire sale process on the fund's side.",
          actions: [
            "Coordinating the transaction process from preparation to closing",
            "Supporting sell-side due diligence",
            "Reporting progress to management and the fund owner"
          ],
          result: "Sale of 100% of the shopping centre to LCP Properties, completed despite pandemic restrictions.",
          todo: "Add: process duration, deal size (if it can be made public).",
          lesson: "In an uncertain market, process discipline is the edge. Buyers pay for predictability."
        },
        {
          id: "galicjanka",
          short: "Portfolio company",
          org: "Katharsis · portfolio company",
          area: "Operations & finance",
          title: "Operational coordination of a mineral water producer",
          metric: { value: "3 workstreams", label: "budget · EU grants · rebranding" },
          context: "At one of the fund's portfolio companies — mineral water producer Galicjanka — financial planning, EU grant settlement and a rebranding were running in parallel.",
          role: "Coordinating the company's operational activity on behalf of the fund.",
          actions: [
            "Budgeting and forecasting",
            "Settling EU grant funding",
            "Coordinating the rebranding process",
            "Reporting KPIs to management and the fund owner"
          ],
          result: "A single point of coordination for finance, grants and brand, with regular reporting to the owner.",
          todo: "Add: a measurable outcome (e.g. grant amount settled, sales change after the rebrand).",
          lesson: "Ownership oversight works best close to operations. Numbers in a report only make sense when you know what sits behind them."
        },
        {
          id: "fsg-sellside",
          short: "Sell-side advisory",
          org: "FSG Biznes · 2016–2019",
          area: "M&A · advisory",
          title: "Sell-side advisory and manufacturing transformation",
          metric: { value: "PLN 50m+", label: "transaction value supported" },
          context: "Manufacturing, transport and retail clients needed investment financing, valuations or preparation for a sale.",
          role: "Financial Analyst / Senior Financial Analyst in the advisory team.",
          actions: [
            "Sell-side advisory on the sale of **Rotometal**, a supplier of tools for the printing industry",
            "Financial and transformation advisory for **Euroband**, a conveyor belt manufacturer",
            "Business plans, valuations, market analyses and board reports"
          ],
          result: "Sale of Rotometal to Highlander Partners; total value of supported transactions above PLN 50m.",
          lesson: "A valuation is an argument in a negotiation, not just a spreadsheet. It has to survive the other side's questions."
        },
        {
          id: "pekabex-ergon",
          short: "Listed-company deal",
          org: "Pekabex · 2015–2016",
          area: "M&A · corporate finance",
          title: "An acquisition at a listed company",
          metric: { value: "WSE", label: "listed company" },
          context: "Pekabex, a precast concrete group listed on the Warsaw Stock Exchange, was acquiring the manufacturing company Ergon.",
          role: "CFO Assistant: supporting the CFO and the management board.",
          actions: [
            "Supporting due diligence on the target",
            "Financial reports for the management board",
            "Analysing and amending documents and contracts"
          ],
          result: "Support for the final stage of Pekabex's acquisition of Ergon.",
          lesson: "First M&A lesson: contracts and integration decide the value of a deal, not just the price."
        }
      ]
    },

    skills: {
      kicker: "Capabilities",
      title: "Where I deliver results",
      intro: "Evidence instead of percentages. Select an area to see where I have applied each capability.",
      whereLabel: "Applied at",
      rolesLabel: "Related roles",
      groups: [
        {
          id: "strategy",
          title: "Strategy & transformation",
          summary: "From market analysis to an execution plan — and making sure the plan actually happens.",
          items: [
            { name: "Corporate strategy", where: "Solaris" },
            { name: "Strategic planning & execution", where: "Solaris · Katharsis" },
            { name: "Business transformation", where: "Solaris · FSG Biznes (Euroband)" },
            { name: "Market & competitor analysis", where: "Netguru · Solaris · Collegium Da Vinci" },
            { name: "Strategic initiative management", where: "Solaris" }
          ],
          roles: ["solaris", "netguru", "katharsis", "fsg"]
        },
        {
          id: "finance",
          title: "Finance, valuation & M&A",
          summary: "Numbers that hold up to questions from the board, investors and the other side of the deal.",
          items: [
            { name: "Financial modelling & valuation (DCF / LBO)", where: "Katharsis · FSG Biznes · Netguru" },
            { name: "M&A & due diligence (buy-side and sell-side)", where: "Netguru · Katharsis · FSG Biznes · Pekabex" },
            { name: "Investment opportunity assessment", where: "Netguru · Solaris" },
            { name: "Valuations for regulatory (KNF) reporting", where: "Katharsis" },
            { name: "Post-merger integration (PMI)", where: "Netguru" }
          ],
          roles: ["netguru", "katharsis", "fsg", "pekabex"]
        },
        {
          id: "performance",
          title: "Performance management & operations",
          summary: "A rhythm of budgets, forecasts and KPIs that lets leadership act early.",
          items: [
            { name: "Budgeting & forecasting", where: "Katharsis · FSG Biznes" },
            { name: "Management reporting & KPIs", where: "Katharsis · Pekabex · FSG Biznes" },
            { name: "Portfolio oversight", where: "Katharsis (NAV ~PLN 300m)" },
            { name: "Business plans & investment financing", where: "FSG Biznes" },
            { name: "EU grant settlement", where: "Katharsis (Galicjanka)" }
          ],
          roles: ["katharsis", "fsg", "pekabex", "solaris"]
        },
        {
          id: "people",
          title: "People & stakeholders",
          summary: "Working with boards, owners and teams so that decisions have real backing.",
          items: [
            { name: "Stakeholder management (boards, owners, advisors)", where: "Solaris · Netguru · Katharsis" },
            { name: "Building capabilities of teams and initiative owners", where: "Solaris" },
            { name: "Teaching and training", where: "Collegium Da Vinci (500+ people)" },
            { name: "Communication with banks and advisors", where: "Netguru" },
            { name: "Supervising team task delivery", where: "Pekabex" }
          ],
          roles: ["solaris", "netguru", "cdv", "pekabex"]
        },
        {
          id: "tools",
          title: "Data & tools",
          summary: "A solid toolkit that shortens the path from data to insight.",
          items: [
            { name: "Advanced Excel & VBA macros", where: "Franklin Templeton · every role" },
            { name: "ERP systems incl. SAP", where: "Financial analysis & reporting" },
            { name: "Data quality control", where: "Franklin Templeton" },
            { name: "Building and managing databases", where: "Collegium Da Vinci" },
            { name: "Microsoft Office Suite", where: "Daily work" }
          ],
          roles: ["franklin", "cdv"]
        }
      ],
      credentialsTitle: "Education, certificates, languages",
      credentials: [
        {
          title: "MSc in Finance and Accounting",
          meta: "Poznań University of Economics · 2010–2015",
          body: "Specialisations: banking; capital investments and corporate financial strategy. Master's thesis: “Building an investment portfolio based on market indicators”."
        },
        {
          title: "Chief Accountant Certificate",
          meta: "Association of Accountants in Poland · 3rd degree",
          body: "Formal grounding in accounting — the foundation for work on budgets, reporting and valuation."
        },
        {
          title: "Google Project Management",
          meta: "Professional certificate",
          body: "Project delivery methodology: planning, scheduling, risk and stakeholder communication."
        },
        {
          title: "Languages",
          meta: "Polish · English",
          body: "Polish — native. English — C1 Advanced; experience in international teams and with foreign partners."
        }
      ]
    },

    contact: {
      kicker: "Contact",
      title: "Let's talk about what needs to happen in your organisation.",
      body: "I am open to conversations about management roles in strategy, transformation, finance and M&A. The fastest way to reach me is by email or LinkedIn.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
      locationLabel: "Location",
      location: "Poznań, Poland",
      copy: "Copy",
      copied: "Copied",
      cvTitle: "Download CV",
      cvBody: "One-page CV in two language versions.",
      cvPl: "CV po polsku",
      cvEn: "CV in English",
      download: "Download",
      preview: "Preview"
    },

    footer: {
      rights: "All rights reserved.",
      updated: "Last updated",
      top: "Back to top"
    }
  }
};
