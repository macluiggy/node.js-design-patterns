import { Strings } from "./hello";
const SUPPORTED_LANGUAGES = ["el", "en", "es", "it", "pl"];
const selectedLanguage = process.argv[2];

if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
  console.error(`Language ${selectedLanguage} not supported`);

  process.exit(1);
}

const translationModule = `./string-${selectedLanguage}.ts`
import(translationModule).then((strings: Strings) => console.log(strings, strings.HELLO));

