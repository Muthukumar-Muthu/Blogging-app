import { generateHTML } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import parse from "html-react-parser";
import _ from "lodash";

//converting html in string to acutal html
function fixBlogObj(blogObj) {
  try {
    const obj = _.cloneDeep(blogObj);
    const { blogContent } = obj;
    const blogContentObj = JSON.parse(blogContent);
    const string = generateHTML(blogContentObj, [StarterKit]);
    const html = stringToHtml(string);
    obj.blogContent = html;
    return obj;
  } catch (error) {
    console.warn(error);
    return {};
  }
}
function stringToHtml(string) {
  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "remove") {
        return <></>;
      }
    },
  };
  return parse(string, options);
}

export default fixBlogObj;
