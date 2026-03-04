export default function (eleventyConfig) {
  // src/assets をそのまま _site/assets にコピー
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // -----------------------------------------------------------------
  // Filters
  // -----------------------------------------------------------------

  // 1. 日付を「2024年1月1日」形式に
  eleventyConfig.addFilter("dateJP", (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  });

  // 2. 日付をISO形式に（<time datetime=""> 用）
  eleventyConfig.addFilter("dateISO", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });

  // 3. 件数を制限する（トップページの最新3件など）
  eleventyConfig.addFilter("limit", (array, n) => {
    return array.slice(0, n);
  });

  // 4. タグからpostsを除外（タグ一覧表示用）
  eleventyConfig.addFilter("excludeTag", (tags, exclude) => {
    return (tags || []).filter((tag) => tag !== exclude);
  });

  // 5. 文字数を制限して末尾に...をつける（記事の抜粋用）
  eleventyConfig.addFilter("excerpt", (content, length = 100) => {
    const text = content.replace(/<[^>]+>/g, "");
    return text.length > length ? text.slice(0, length) + "..." : text;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
