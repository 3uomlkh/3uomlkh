import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&gradientColor=FFB6C1,E6E6FA,FFFACD&height=200&section=header&text=Welcome%20to%20chaewon's%20GITHUB%20!&fontSize=40&fontAlign=50&fontColor=ffffff&animation=fadeIn" />

## 🌱 I’m currently learning ...

<p>
  <!-- 언어 & 프레임워크 -->
  <img alt="Java" src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white"/>
  <img alt="Kotlin" src="https://img.shields.io/badge/Kotlin-0095D5?style=flat-square&logo=Kotlin&logoColor=white"/>
  <img alt="Spring" src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white"/>
  <img alt="Spring Boot" src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=SpringBoot&logoColor=white"/>

  <!-- 데이터베이스 -->
  <img alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
  <img alt="Redis" src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=Redis&logoColor=white"/>
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white"/>

  <!-- 클라우드 & 컨테이너 -->
  <img alt="AWS" src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=AmazonAWS&logoColor=white"/>
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/>

  <!-- 개발 툴 & 버전 관리 -->
  <img alt="IntelliJ IDEA" src="https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=flat-square&logo=IntelliJIDEA&logoColor=white"/>
  <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/>
  <img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=GitHubActions&logoColor=white"/>

  <!-- API 테스트 -->
  <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/>
</p>

## 📊 GitHub Stats

[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=3uomlkh)](https://github.com/anuraghazra/github-readme-stats)

## 📕 Latest Blog Posts

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://3uomlkh.tistory.com/rss'); // 본인의 블로그 주소
    
    text += `<ul>`;
    
    // 최신 10개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 10; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
    }

    text += `</ul>`;
    
    // README.md 파일 생성
    try {
        writeFileSync('README.md', text, 'utf8');
        console.log('업데이트 완료');
    } catch (e) {
        console.error('README 생성 실패:', e);
    }    
})();