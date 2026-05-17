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
