import fs from 'fs';
import blogData from './src/data/blogData.js';

const updatedData = blogData.map(b => {
    // Vite resolves imports as strings when running in node, it might fail because Vite processes it.
    // Wait, running Node directly on an ES module importing images will throw an error: "Unknown file extension .jpg".
    return b;
});

fs.writeFileSync('blogs.json', JSON.stringify(updatedData, null, 2));
