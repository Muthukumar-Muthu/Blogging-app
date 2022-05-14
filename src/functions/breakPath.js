export default function breakPath(pathName) {
  const [host, path, userId, blogId] = pathName.split("/");
  return {
    path,
    userId,
    blogId,
  };
}
