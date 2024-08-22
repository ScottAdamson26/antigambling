import { Buffer } from 'buffer';
import axios from 'axios';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const GITHUB_REPO = 'your-username/your-repo-name';
const POSTS_DIRECTORY = 'content/posts';

export async function fetchPosts() {
  try {
    const res = await axios.get(`https://api.github.com/repos/${GITHUB_REPO}/contents/${POSTS_DIRECTORY}`);
    
    const posts = await Promise.all(
      res.data.map(async (file) => {
        const fileRes = await axios.get(file.download_url);
        const fileContent = fileRes.data;

        const { data, content } = matter(fileContent);

        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        return {
          ...data,
          contentHtml,
        };
      })
    );

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
