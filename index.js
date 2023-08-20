import { readFile,writeFile } from 'fs/promises';
let template;
try{
    template = await readFile('./template.html','utf-8');
    const data={
        name:'ananya',
        age:'21',
        city:'banglore'
        
    };
    for(const e of Object.entries(data)) {
        const [key,value]= e;
        template = template.replace(`{${key}}`, value);
    }
    await writeFile('./index.html',template);
}catch (error) {
    console.log(error);
}