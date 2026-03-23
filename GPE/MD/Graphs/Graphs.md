
> [!error]+ Forewarning
> This is not a complete list. It is actively being updated and will continue to be until the exam on Wednesday March 25th.
> 
> If you find any incorrect info, or simply have a suggestion to improve clarity send me an email at harrison.velentzas@gmail.com or dm me on instagram @harry_v06. Alternatively (and preferably if you are familiar with GitHub) you can find the GitHub repository for this site [here](https://github.com/havelentzas/havelentzas.github.io). Read the README regarding how best to make commits.
# Info
These are my notes regarding graphs we need to know for the midterm exam. Ideally this will work like a Wikipedia where you can click on links to get to a definition, graph, or other page. I try to be as thorough as possible while also keeping it simple. I do my best to use both the jargon we need to know while also including common wording (typically in parentheses).
# Index of Graph Notes available
```dataviewjs
let pages = dv.pages("#GPE AND #Graph");

let groupedPages = pages.groupBy(p => p.lecNum);

groupedPages.sort((a, b) => a.key - b.key);

for (let group of groupedPages) {
    dv.header(3, `Lecture ${group.key}`);
    dv.list(group.rows.map(p => p.file.link));
}
```
