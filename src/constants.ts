import accessibilityQuiz from "./data/accessibility-quiz";
import agileQuiz from "./data/agile-quiz";
import cssQuiz from "./data/css-quiz";
import freecodecampQuiz from "./data/freecodecamp-quiz";
import generalCSQuiz from "./data/general-cs-quiz";
import gitQuiz from "./data/git-quiz";
import htmlQuiz from "./data/html-quiz";
import informationTechnologyQuiz from "./data/information-technology-quiz";
import javascriptQuiz from "./data/javascript-quiz";
import linuxQuiz from "./data/linux-quiz";
import pythonQuiz from "./data/python-quiz";
import qualityAssuranceQuiz from "./data/quality-assurance-quiz";
import securityQuiz from "./data/security-quiz";
import sqlQuiz from "./data/sql-quiz";
import cppQuiz from "./data/cpp-quiz";
import dockerQuiz from "./data/docker-quiz";
import godotQuiz from "./data/godot-quiz";
import networkQuiz from "./data/network-quiz";
import phpQuiz from "./data/php-quiz";
import redisQuiz from "./data/redis-quiz";
import windowsQuiz from "./data/windows-quiz";
import wordpressQuiz from "./data/wordpress-quiz";

export const ALL_CATEGORIES = [
  ...accessibilityQuiz,
  ...cssQuiz,
  ...freecodecampQuiz,
  ...generalCSQuiz,
  ...gitQuiz,
  ...htmlQuiz,
  ...informationTechnologyQuiz,
  ...javascriptQuiz,
  ...linuxQuiz,
  ...pythonQuiz,
  ...sqlQuiz,
  ...agileQuiz,
  ...qualityAssuranceQuiz,
  ...securityQuiz,
  ...cppQuiz,
  ...dockerQuiz,
  ...godotQuiz,
  ...networkQuiz,
  ...phpQuiz,
  ...redisQuiz,
  ...windowsQuiz,
  ...wordpressQuiz
];

export const ROUNDED_QUESTION_COUNT = 1000;
