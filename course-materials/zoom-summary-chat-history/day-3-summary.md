# Podsumowanie - dzień 3, 6 listopada 2026

## Zakres ostatniego dnia

Ostatni dzień szkolenia JSystems Codex, prowadzonego przez Łukasza Matuszewskiego w dniach 4-6 listopada 2026, koncentrował się na przejściu od dokumentacji do implementacji: konfiguracji Codex, rozwijaniu ADR, przygotowaniu planu, delegowaniu zadań, testowaniu oraz pracy agentów w CI/CD.

PRD był szeroko omawiany drugiego dnia, a rozpoczęte wtedy ADR rozwijano podczas tej sesji. Projekty ćwiczeniowe mogły różnić się technologiami i zakresem. Przykład prowadzącego dotyczył aplikacji do oceny zgłoszeń serwisowych sprzętu elektronicznego i rozmowy z użytkownikiem, z frontendem Angular/TypeScript. Główne repozytorium pozostawało bazą materiałów kursowych, a dokumentacja i implementacja przykładu były udostępniane na osobnych gałęziach. Rozpoczęcie realizacji planu nie oznaczało ukończenia aplikacji ani wszystkich integracji.

## 1. Konfiguracja Codex i środowiska Windows

### Aktualizacja i nowe sesje

Rozwiązywano problemy z uprawnieniami, ładowaniem `AGENTS.md` oraz rozbieżnością między wersją CLI a działającym demonem. Na czacie wskazano wersję `0.167.0`.

Polecenia używane podczas zajęć:

```text
codex update
codex app-server daemon restart
codex app-server daemon version
```

W omawianym przepływie po aktualizacji lub zmianie konfiguracji należało zrestartować demona i rozpocząć nową sesję. Samo wznowienie poprzedniej sesji nie zastępowało tego kroku. Omawiano również `CODEX_HOME` oraz rozdzielenie konfiguracji użytkownika i projektu.

### Profile uprawnień i ograniczenia

Kursowy profil `course-tools` rozszerzał uprawnienia workspace, umożliwiał zapis w katalogu projektu i katalogach tymczasowych oraz dostęp do sieci. Reguły kursowe dopuszczały wybrane polecenia wykonywane poza sandboxem. Nazwy `course-tools`, `course-root` i `course-workspace` dotyczą konfiguracji kursowej, nie uniwersalnych trybów każdej instalacji Codex.

Pokazywana konfiguracja Windows obejmowała:

```toml
[windows]
sandbox = "elevated"

[features]
prefer_mxc = false
```

Był to testowany wariant kursowy z dotychczasowym sandboxem Windows; MXC wymagał osobnego sprawdzenia. `elevated` nie oznacza gwarancji pełnej izolacji. Domyślny profil kursowy nie zapewniał systemowego zakazu odczytu plików `.env` i sekretów, dlatego rzeczywistych sekretów nie należało przechowywać w udostępnionym workspace. Pokazane warianty pełnego dostępu wyłączały ograniczenia sandboxa i nie stanowiły ogólnego zalecenia dla innych projektów.

Przed zakończeniem szkolenia należało zachować potrzebne pliki i wypchnąć własne zmiany do repozytorium. Maszyny szkoleniowe miały zostać wyłączone, a lokalne dane usunięte. Omawiano także fork repozytorium, pobieranie aktualizacji i synchronizację gałęzi.

## 2. Orkiestrator, wykonawcy i wyszukiwanie dokumentacji

### Podział odpowiedzialności

Silny agent główny pełni rolę orkiestratora: rozstrzyga kwestie architektoniczne, usuwa sprzeczności, przygotowuje briefy, dobiera wykonawców i przyjmuje wyniki. Mniejsze modele mogą realizować ograniczone zadania badawcze, implementacyjne lub związane z pisaniem testów.

- Dobór modelu zależy od trudności zadania, kosztu, dostawcy i dostępnego budżetu.
- Worker powinien otrzymać konkretny zakres, oczekiwany rezultat i kryteria sprawdzenia.
- Gdy zadanie przekracza możliwości wykonawcy, potrzebna jest eskalacja, zamiast niekończących się prób naprawy.
- Końcowa recenzja i akceptacja pozostają po stronie odpowiednio silnego modelu oraz człowieka.

W roli badawczej Luna miała zbierać informacje i przygotowywać raport, a nie samodzielnie zatwierdzać architekturę. Nie oznacza to zakazu wykorzystania odrębnego modelu Luna Decisions do ściśle określonych ocen w aplikacji.

Opcjonalnym wykonawcą było narzędzie OpenCode uruchamiane w trybie headless z modelem Xiaomi MiMo. Plan miał opisywać sposób delegowania, a nie zakładać, że cały wieloagentowy przepływ został już zintegrowany.

### Kolejność źródeł

Dla dokumentacji bibliotek zalecano najpierw Context7. Dla narzędzi CLI punktem wyjścia była wbudowana pomoc, np. `gh --help`, następnie Context7, a dopiero przy brakach wyszukiwanie internetowe. Bezpośrednia prośba użytkownika o research internetowy również uzasadniała użycie sieci.

Celem było ograniczenie ilości zbędnej dokumentacji w kontekście agenta. Brak dostępu przez MCP nie wykluczał sprawdzenia Context7 przez CLI. Delegowany research powinien kończyć się użytecznym raportem i źródłami, na podstawie których orkiestrator podejmuje decyzję.

### Zarządzanie sesjami

Omawiano `/fork` jako kopię sesji z historią, `/new` jako nową sesję oraz `/btw` jako poboczny wątek z kontekstem. W CLI `/subagents` służyło do pracy z podagentami.

Historia sesji planistycznej była przydatna przy opracowywaniu kolejnych instrukcji. Demonstracja implementacji przewidywała jednak uruchomienie `/goal` w nowej sesji, z odwołaniem do zapisanych dokumentów projektu.

## 3. ADR, plan implementacji i Skills

### Najpierw decyzje, potem inicjalizacja

ADR powinien zawierać decyzję, jej uzasadnienie, odrzucone alternatywy, źródła i konsekwencje. Przy wyborze startera należało sprawdzić zgodność frameworka, integracji AI SDK, streamingu i komponentów czatu.

Dla przykładu prowadzącego badano Angular, Angular Material i `@ai-sdk/angular`. W innych ćwiczeniach pojawiały się propozycje Next.js, assistant-ui i AI SDK. Nie były to automatycznie rozwiązania właściwe dla Angulara. `chat-sdk.dev` to SDK do botów w komunikatorach; zgodność z interfejsem czatu aplikacji wymagała osobnego sprawdzenia.

Projekt miał zaczynać od pustej aplikacji. ADR powinien rekomendować sposób inicjalizacji i podać polecenie, ale wykonanie inicjalizacji następowało dopiero po zatwierdzeniu planu. Status `proposed` oznaczał propozycję wymagającą przeglądu, nie zaakceptowaną decyzję ani działającą integrację.

### Przegląd spójności

Przed implementacją należało porównać `AGENTS.md`, PRD, ADR i plan. Agent miał najpierw usunąć sprzeczności dotyczące technologii, zakresu, kontraktów API, testów i organizacji pracy.

Plan powinien zawierać:

- zadania z możliwością oznaczania wykonania;
- zależności, kolejność i podział pracy;
- przypisanie modeli oraz ograniczenia budżetowe;
- kryteria odbioru i wymagane sprawdzenia działania;
- zasady eskalacji i przekazywania wyników.

Diagramy UML i opis funkcjonalny miały pomagać ludziom oraz agentom wykrywać błędy logiczne przed kodowaniem. Wspomniano także podejście spec-driven development i narzędzia wspierające pracę ze specyfikacją.

Nieaktualnych decyzji nie należy pozostawiać bez oznaczenia. W przedstawionym przepływie wykonane plany i briefy usuwano po realizacji, aby nie wyglądały jak nadal obowiązujące zadania. Trwałe decyzje i dokumentacja projektu pozostawały punktem odniesienia.

### Umiejętność tworzenia planów

W sesji, w której powstał plan, proponowano użycie `skill-creator` do przygotowania wielokrotnie używalnej umiejętności. Miała ona wykorzystywać prompt planistyczny, instrukcje i wykryte błędy, aby ograniczać ich powtarzanie.

Dobry Skill powinien określać minimalne pytania wejściowe, strukturę wyniku i potrzebne kontrole. Rozważano elastyczną nazwę pliku oraz osobne szablony planów dla różnych sytuacji. Wygenerowana umiejętność wymaga przeglądu i korekt, nie tylko zapisania pliku.

Język instrukcji można było dopasować do pracy zespołu. Pokazano wariant anglojęzycznej komunikacji i dokumentacji repozytorium; nie był to wymóg usuwania polskich treści z każdego projektu.

## 4. Modele rozmowy, oceny i konfiguracja aplikacji

OpenRouter omawiano jako wspólny punkt dostępu do modeli różnych dostawców. Przykłady konfiguracji obejmowały `OPENROUTER_API_KEY`, `LLM_MODEL` oraz `DECISION_MODEL`. Plik `.env.example` miał zawierać puste wartości lub niesekretne przykłady, a rzeczywiste dane uwierzytelniające pozostawać w lokalnej konfiguracji poza repozytorium. Dostępność modelu zależała również od polityki dostępu właściwego workspace i klucza.

Rozważane identyfikatory obejmowały:

- `openai/gpt-6-luna` dla rozmowy;
- `openai/gpt-6-luna-decisions` dla ograniczonych ocen;
- `typesafe/jev-1.14` jako alternatywny model decyzyjny.

Decision Models traktowano jako opcjonalny pierwszy krok zwracający ustrukturyzowaną ocenę. Gdy pozostaje niepewność lub przypadek wymaga wyjaśnienia, przepływ powinien kierować go do dalszej rozmowy, silniejszego LLM albo człowieka. Badanie takiej architektury i zapisanie jej w ADR nie potwierdzało ukończenia integracji modelu ani obsługi obrazów.

Porównywano również dobór modeli do kodowania, badań i zarządzania podagentami. Sol, Luna i Terra należały do omawianego zestawu GPT, a Opus i Sonnet do rodziny Claude.

## 5. Testowanie rzeczywistego działania

Duży nacisk położono na sprawdzanie aplikacji z perspektywy użytkownika: przejście przez scenariusz, obserwację interfejsu, zrzuty ekranu i ocenę odpowiedzi. Testy manualne lub eksploracyjne uzupełniają testy integracyjne i jednostkowe; sama zielona automatyzacja nie dowodzi poprawności całego przepływu.

Najważniejsze zasady:

- Najpierw sprawdzić rzeczywiste endpointy i ich kontrakty, potem budować mocki zgodne z zaakceptowanymi odpowiedziami.
- Testować docelowy model i konfigurację, a nie tylko tańszy zamiennik.
- Do ćwiczeń używać danych syntetycznych i zdjęć z kursowego katalogu `assets/example-images`.
- Weryfikować streaming, błędy, niepewność ocen i zachowanie UI, nie tylko pojedyncze funkcje.
- Ograniczać czas i liczbę prób agenta, aby naprawa nie rozszerzała się na niezwiązane pliki.

Selenium i inne narzędzia automatyzacji nie zwalniają z oceny rzeczywistego działania aplikacji. Udostępniono także konfigurację podagenta `e2e-qa-engineer.toml`.

## 6. Równoległa praca, CI/CD i przegląd kodu

### Git worktrees

Git worktrees pozwalają pracować na osobnych katalogach roboczych i gałęziach tego samego repozytorium. Pomagają rozdzielić zadania agentów, ale nie rozwiązują automatycznie konfliktów ani odbioru zmian. Wymagają kontroli commitów, integracji rezultatów i sprzątania katalogów. Duplikowanie środowisk może również zwiększać zużycie zasobów.

Omawiano porządkowanie plików tymczasowych i użycie `tree` oraz `eza` do orientacji w strukturze projektu.

### Headless i code review

Pokazano materiały dotyczące agentów uruchamianych bez interaktywnego interfejsu w pipeline'ach, z użyciem skryptów Bash/Python i uporządkowanych wyników. W przykładzie Claude otrzymywał diff na wejściu, zwracał JSON i miał ograniczenie liczby tur. Wspomniano także `codex exec`.

Przegląd obejmował PR-Agent, komercyjne narzędzia Qodo, integracje code review Codex oraz umiejętność odpowiadania na otrzymane uwagi. Omawiano `SECURITY.md` i hooks jako elementy organizacji pracy oraz zabezpieczeń, nie jako samodzielną gwarancję bezpieczeństwa.

## 7. Limity, kontynuacja i narzędzia uzupełniające

Stan wykorzystania Codex sprawdzano przez `/status`, a w pokazanej polskiej wersji Desktop przez `/stan`, oraz w ustawieniach konta. Omawiane okno pięciogodzinne nie oznaczało braku innych limitów. Dostępność kont szkoleniowych po kursie i resetów zależała od rzeczywistego przydziału oraz warunków usługi, nie zapewniała nieograniczonej pracy.

Po osiągnięciu limitu rozważano kontynuację w OpenCode. Pierwszym krokiem miało być odtworzenie stanu prac z dokumentacji, zmian w repozytorium i dostępnej historii, bez natychmiastowego rozpoczynania kolejnej implementacji.

Materiały uzupełniające obejmowały:

- Herdr do zarządzania agentami oraz Termux i SSH do dostępu z Androida;
- Beads do trwałego śledzenia zadań;
- Langfuse do obserwowalności oraz analizę sesji agentów;
- Lovable, v0 i Bolt jako narzędzia do prototypów i makiet;
- konfigurację alternatywnych providerów i lokalnych modeli;
- modele światów generujące wideo, fine-tuning i LoRA jako tematy dodatkowe.

Przykłady usług i kredytów GPU były punktem wyjścia do sprawdzenia aktualnych warunków, nie gwarancją stałego bezpłatnego przydziału.

## Materiały i odnośniki

### Kurs i konfiguracja

- [Pytania i odpowiedzi z kursu](https://devpowers.com/szkolenia/jsystems/codex-2026-11/pytania.html)
- [Raport zużycia Codex z 4-6.11](https://devpowers.com/szkolenia/jsystems/codex-2026-11/report-codex-6-11-2026.html)

- [Materiały szkoleniowe](https://devpowers.com/szkolenia/jsystems/codex-2026-11/index.html)
- [Repozytorium kursowe](https://github.com/LucasMatuszewski/jsystems-codex-2026-11)
- [Podsumowania i historia czatu](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/tree/main/course-materials/zoom-summary-chat-history)
- [Windows Quickstart](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/blob/main/course-materials/agent-configs/codex/WINDOWS-QUICKSTART-PL.md)
- [Konfiguracja Codex](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/blob/main/.codex/config.toml) i [reguły kursowe](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/blob/main/.codex/rules/course.rules)

### Dokumentacja i przykład aplikacji

- [Prompt ADR dla Angular i Java](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/blob/main/course-materials/Prompt%20examples/ADR-generation-java-openai-sdk-angular-material.md)
- [Prompt ADR dla TypeScript, AI SDK i Decisions](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/blob/main/course-materials/Prompt%20examples/ADR-generation-typescript-vercel-ai-sdk-decisions.md)
- [Plan z podagentami i zależnościami](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/blob/main/course-materials/Prompt%20examples/Plan-SubAgents-matrix-dependency-map-LUNA.md)
- [PRD, ADR i plan przykładu prowadzącego](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/pull/6)
- [Gałąź implementacji Angular](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/tree/angular-implementation)
- [assistant-ui](https://github.com/assistant-ui/assistant-ui) i [AI Elements](https://elements.ai-sdk.dev/)

### Delegowanie, testy i CI/CD

- [Konfiguracje podagentów](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/tree/main/course-materials/agent-configs/codex/agents)
- [Git worktree](https://git-scm.com/docs/git-worktree)
- [Kursowe workflow CI/CD](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/tree/main/course-materials/cicd-headless)
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent)
- [Respond to code review](https://github.com/EdukeyTeam/agent-toolbox/tree/main/skills/respond-to-code-review)
- [Hooks](https://github.com/LucasMatuszewski/jsystems-codex-2026-11/tree/main/course-materials/hooks-example)
- [Herdr](https://herdr.dev/), [Termux](https://github.com/termux) i [Langfuse](https://langfuse.com/)
- [Ankieta szkoleniowa](https://ankiety.jsystems.pl/)
