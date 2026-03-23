
> [!info] Info
> This is not a complete list of as it is actively being updated and will continue to be through the exam on Wednesday March 25th.
> 
> If you recognize any incorrect info, or simply have a suggestion to improve clarity 
> You can find the github repository for this site [here](https://github.com/havelentzas/havelentzas.github.io)

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
